import { useState } from 'react';
import './forms.css';
import { useLang } from '../context/LanguageContext';

export default function Osa() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLang();
  const f = t.osa;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbxvzEnaWFFOK18SqS65JtlHmaYqUY6W0NN1-b1xv_kpB_u2th022x897qAriqITZYzo/exec", {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).then(() => {
      setIsSubmitted(true);
    }).catch(error => console.error("Något gick fel", error));
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
              <label htmlFor="name">{f.name_label}</label>
              <input type="text" id="name" name="name" required placeholder={f.name_placeholder} />
            </div>

            <div className="form-group">
              <label>{f.attendance_label}</label>
              <div className="radio-group">
                <label><input type="radio" name="attendance" value={f.yes} required /> {f.yes}</label>
                <label><input type="radio" name="attendance" value={f.no} /> {f.no}</label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="allergies">{f.allergies_label}</label>
              <input type="text" id="allergies" name="allergies" placeholder={f.allergies_placeholder} />
            </div>

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
