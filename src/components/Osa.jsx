import { useState } from 'react';
import './forms.css';

export default function Osa() {
  // En state för att byta ut formuläret mot ett tack-meddelande när man skickat
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Hindrar sidan från att laddas om
    const form = e.target;
    const formData = new FormData(form);

    // Byt ut URL:en nedan mot din nya Google Apps Script-URL!
    fetch("https://script.google.com/macros/s/AKfycbxvzEnaWFFOK18SqS65JtlHmaYqUY6W0NN1-b1xv_kpB_u2th022x897qAriqITZYzo/exec", {
      method: "POST",
      mode: "no-cors", // Gör så att webbläsaren inte blockerar förfrågan
      body: formData
    }).then(() => {
      setIsSubmitted(true); // Visar tack-meddelandet
    }).catch(error => console.error("Något gick fel", error));
  };

  return (
    <div className="content-wrapper form-page">
      <section className="section-container">
        <h2 className="form-header">O.S.A.</h2>
        <p className="fine-print">Vänligen svara senast den 1 juli 2026</p>
        
        {isSubmitted ? (
          <div className="thank-you-message" style={{ marginTop: '50px', textAlign: 'center' }}>
            <h3>Tack för ditt svar!</h3>
            <p className="typewriter-text">Vi ser fram emot att fira med er.</p>
          </div>
        ) : (
          /* Formuläret anropar nu handleSubmit istället för Formspree */
          <form onSubmit={handleSubmit} className="wedding-form">
            <div className="form-group">
              <label htmlFor="name">Namn på samtliga gäster</label>
              <input type="text" id="name" name="name" required placeholder="Förnamn Efternamn" />
            </div>

            <div className="form-group">
              <label>Kommer ni?</label>
              <div className="radio-group">
                <label><input type="radio" name="attendance" value="Ja, vi kommer!" required /> Ja, vi kommer!</label>
                <label><input type="radio" name="attendance" value="Tyvärr kan vi inte" /> Tyvärr kan vi inte</label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="allergies">Allergier eller specialkost</label>
              <input type="text" id="allergies" name="allergies" placeholder="T.ex. Veganskt, Nötallergi..." />
            </div>

            <div className="form-group">
              <label htmlFor="message">Hälsning till brudparet</label>
              <input type="text" id="message" name="message" placeholder="Skriv en hälsning..." />
            </div>

            <button type="submit" className="submit-btn">Skicka svar</button>
          </form>
        )}
      </section>
    </div>
  );
}