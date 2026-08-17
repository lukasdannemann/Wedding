import { useEffect, useState } from 'react';
import './Gavor.css';
import { useLang } from '../../context/LanguageContext';
import { config } from '../../config';
import { getGuestToken } from '../../utils/guestToken';

const DEMO_GIFTS = [
  { id: 1, name: 'Kastrull', description: 'Le Creuset 24 cm', price: '1 495', link: '', reservedBy: '' },
  { id: 2, name: 'Toaster', description: '2-skivors, retro', price: '695', link: '', reservedBy: '' },
  { id: 3, name: 'Weekendresa', description: 'Bidrag till vår smekmånad', price: '', link: '', reservedBy: '' },
];

export default function Gavor() {
  const { t } = useLang();
  const f = t.gavor;
  const token = getGuestToken();

  const [gifts, setGifts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [conflictId, setConflictId] = useState(null);
  const [pendingId, setPendingId] = useState(null);

  const useDemo = config.demo || !config.gavaEndpoint;

  const fetchGifts = () => {
    if (useDemo) {
      setGifts((prev) => (prev.length ? prev : DEMO_GIFTS));
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(false);

    fetch(config.gavaEndpoint)
      .then((res) => res.json())
      .then((data) => {
        setGifts(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Kunde inte hämta gåvolistan', err);
        setError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchGifts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReserve = (id) => {
    if (pendingId) return;
    setConflictId(null);

    if (useDemo) {
      setGifts((prev) => prev.map((g) => (g.id === id ? { ...g, reservedBy: token } : g)));
      return;
    }

    setPendingId(id);
    fetch(config.gavaEndpoint, {
      method: 'POST',
      body: JSON.stringify({ action: 'reserve', id, token }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setGifts((prev) => prev.map((g) => (g.id === id ? { ...g, reservedBy: token } : g)));
        } else {
          setConflictId(id);
          fetchGifts();
        }
      })
      .catch((err) => {
        console.error('Kunde inte reservera gåvan', err);
        setError(true);
      })
      .finally(() => setPendingId(null));
  };

  const handleCancel = (id) => {
    if (pendingId) return;
    setConflictId(null);

    if (useDemo) {
      setGifts((prev) => prev.map((g) => (g.id === id ? { ...g, reservedBy: '' } : g)));
      return;
    }

    setPendingId(id);
    fetch(config.gavaEndpoint, {
      method: 'POST',
      body: JSON.stringify({ action: 'unreserve', id, token }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setGifts((prev) => prev.map((g) => (g.id === id ? { ...g, reservedBy: '' } : g)));
        } else {
          fetchGifts();
        }
      })
      .catch((err) => {
        console.error('Kunde inte avboka gåvan', err);
        setError(true);
      })
      .finally(() => setPendingId(null));
  };

  const getRowState = (gift) => {
    if (!gift.reservedBy) return 'available';
    if (gift.reservedBy === token) return 'mine';
    return 'taken';
  };

  return (
    <div className="content-wrapper gavor-page">
      <section className="section-container">
        <h2 className="form-header">{f.header}</h2>
        <p className="typewriter-text gavor-intro">{f.intro}</p>

        {conflictId && <p className="gavor-conflict">{f.conflict}</p>}

        {isLoading ? (
          <p className="fine-print">{f.loading}</p>
        ) : error ? (
          <p className="fine-print gavor-conflict">{f.error}</p>
        ) : gifts.length === 0 ? (
          <p className="fine-print">{f.empty}</p>
        ) : (
          <table className="gift-table">
            <thead>
              <tr>
                <th>{f.name_col}</th>
                <th>{f.status_col}</th>
              </tr>
            </thead>
            <tbody>
              {gifts.map((gift) => {
                const state = getRowState(gift);
                const isPending = pendingId === gift.id;

                return (
                  <tr key={gift.id} className={`gift-row gift-row--${state}`}>
                    <td data-label={f.name_col}>
                      <span className="gift-name">{gift.name}</span>
                      {gift.description && <span className="gift-description">{gift.description}</span>}
                      {gift.price && <span className="gift-price">{gift.price} kr</span>}
                      {gift.link && (
                        <a href={gift.link} target="_blank" rel="noopener noreferrer" className="gift-link">
                          {f.link_label}
                        </a>
                      )}
                    </td>
                    <td data-label={f.status_col}>
                      {state === 'available' && (
                        <button
                          type="button"
                          className={`add-guest-btn ${isPending ? 'is-loading' : ''}`}
                          onClick={() => handleReserve(gift.id)}
                          disabled={isPending}
                        >
                          {isPending ? (
                            <>
                              {f.reserving}
                              <span className="loading-dots"><span>.</span><span>.</span><span>.</span></span>
                            </>
                          ) : (
                            f.reserve
                          )}
                        </button>
                      )}
                      {state === 'mine' && (
                        <div className="gift-mine">
                          <span className="gift-mine-label">{f.mine}</span>
                          <button
                            type="button"
                            className={`remove-guest-btn ${isPending ? 'is-loading' : ''}`}
                            onClick={() => handleCancel(gift.id)}
                            disabled={isPending}
                          >
                            {isPending ? (
                              <>
                                {f.canceling}
                                <span className="loading-dots"><span>.</span><span>.</span><span>.</span></span>
                              </>
                            ) : (
                              f.cancel
                            )}
                          </button>
                        </div>
                      )}
                      {state === 'taken' && <span className="gift-taken-label">{f.taken}</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
