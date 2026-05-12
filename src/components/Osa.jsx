import { useState } from 'react';
import './forms.css';
import { useLang } from '../context/LanguageContext';

const OSA_ENDPOINT = "https://script.google.com/macros/s/AKfycbxvzEnaWFFOK18SqS65JtlHmaYqUY6W0NN1-b1xv_kpB_u2th022x897qAriqITZYzo/exec";

export default function Osa() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [guests, setGuests] = useState([{ name: '', allergies: '' }]);
  const { t } = useLang();
  const f = t.osa;

  const addGuest = () => {
    setGuests([...guests, { name: '', allergies: '' }]);
  };

  const removeGuest = (index) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  const updateGuest = (index, field, value) => {
    setGuests(guests.map((g, i) => (i === index ? { ...g, [field]: value } : g)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Lägg på gäst-fälten manuellt eftersom de är controlled och saknar name-attribut
    formData.append('guestCount', guests.length);
    guests.forEach((g, i) => {
      formData.append(`name${i + 1}`, g.name);
      formData.append(`allergies${i + 1}`, g.allergies);
    });

    fetch(OSA_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => console.error("Något gick fel", error));
  };

  return (
    <div className="content-wrapper form-page">
      <section className="section-container">
        <h2 className="form-header">{f.header}</h2>
        <p className="fine-print">{f.deadline}</p>

        {isSubmitted ? (
          <div className="thank-you-message" style={{ marginTop: '50px', textAlign: 'center' }}>
            <h3>{f.thanks_title}</h3>
            <p className="typewriter-text">{f.thanks_text}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="wedding-form">
            <div className="form-group">
              <label>{f.attendance_label}</label>
              <div className="radio-group">
                <label><input type="radio" name="attendance" value={f.yes} required /> {f.yes}</label>
                <label><input type="radio" name="attendance" value={f.no} /> {f.no}</label>
              </div>
            </div>

            {guests.map((guest, index) => (
              <div className="guest-block" key={index}>
                <div className="guest-header">
                  <span className="guest-number">{f.guest} {index + 1}</span>
                  {guests.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeGuest(index)}
                      className="remove-guest-btn"
                    >
                      {f.remove_guest}
                    </button>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor={`name-${index}`}>{f.name_label}</label>
                  <input
                    type="text"
                    id={`name-${index}`}
                    value={guest.name}
                    onChange={(e) => updateGuest(index, 'name', e.target.value)}
                    required
                    placeholder={f.name_placeholder}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor={`allergies-${index}`}>{f.allergies_label}</label>
                  <input
                    type="text"
                    id={`allergies-${index}`}
                    value={guest.allergies}
                    onChange={(e) => updateGuest(index, 'allergies', e.target.value)}
                    placeholder={f.allergies_placeholder}
                  />
                </div>
              </div>
            ))}

            <button type="button" onClick={addGuest} className="add-guest-btn">
              + {f.add_guest}
            </button>

            <div className="form-group">
              <label htmlFor="message">{f.message_label}</label>
              <input type="text" id="message" name="message" placeholder={f.message_placeholder} />
            </div>

            <button type="submit" className="submit-btn">{f.submit}</button>
          </form>
        )}
      </section>
    </div>
  );
}
