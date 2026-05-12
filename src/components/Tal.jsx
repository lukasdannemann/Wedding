import { useState } from 'react';
import './forms.css';
import { useLang } from '../context/LanguageContext';

// Samma Apps Script-endpoint som Osa — `Kategori`-fältet nedan styr
// vilket ark/flik svaren hamnar i. Byt URL här om du vill ha ett separat ark.
const TAL_ENDPOINT = "https://script.google.com/macros/s/AKfycbxNwT66Uq1c5hyRVPCPSqLx2_eyUTLZLENPW9_m3t9DDm0FzCBns2dRNKex0qHM3ZIuOA/exec";

export default function Tal() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLang();
  const f = t.tal;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    fetch(TAL_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).then(() => {
      setIsSubmitted(true);
    }).catch(error => {
      console.error("Något gick fel", error);
      setIsLoading(false);
    });
  };

  return (
    <div className="content-wrapper form-page">
      <section className="section-container">
        <h2 className="form-header">{f.header}</h2>
        <p className="fine-print">{f.subtext}</p>

        {isSubmitted ? (
          <div className="thank-you-message" style={{ marginTop: '50px', textAlign: 'center' }}>
            <h3>{f.thanks_title}</h3>
            <p className="typewriter-text">{f.thanks_text}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="wedding-form">
            <input type="hidden" name="Kategori" value="TAL - Anmälan" />

            <div className="form-group">
              <label htmlFor="speaker-name">{f.name_label}</label>
              <input type="text" id="speaker-name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="contact">{f.contact_label}</label>
              <input type="text" id="contact" name="contact" required placeholder={f.contact_placeholder} />
            </div>

            <div className="form-group">
              <label htmlFor="speech-type">{f.type_label}</label>
              <select id="speech-type" name="type">
                <option value="tal">{f.opt_tal}</option>
                <option value="video">{f.opt_video}</option>
                <option value="annat">{f.opt_annat}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="requirements">{f.requirements_label}</label>
              <input type="text" id="requirements" name="requirements" placeholder={f.requirements_placeholder} />
            </div>

            <button
              type="submit"
              className={`submit-btn ${isLoading ? 'is-loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  {f.sending}
                  <span className="loading-dots"><span>.</span><span>.</span><span>.</span></span>
                </>
              ) : (
                f.submit
              )}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
