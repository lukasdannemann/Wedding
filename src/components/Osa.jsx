import './forms.css'

export default function Osa() {
  return (
    <div className="content-wrapper form-page">
      <section className="section-container">
        <h2 className="form-header">O.S.A.</h2>
        <p className="fine-print">Vänligen svara senast den 1 juli 2026</p>

        {/* Ersätt 'DIN_FORMSPREE_ID' senare */}
        <form action="https://formspree.io/f/DIN_FORMSPREE_ID" method="POST" className="wedding-form">
          <div className="form-group">
            <label htmlFor="name">Namn på samtliga gäster</label>
            <input type="text" id="name" name="name" required placeholder="Förnamn Efternamn" />
          </div>

          <div className="form-group">
            <label>Kommer ni?</label>
            <div className="radio-group">
              <label><input type="radio" name="attendance" value="ja" required /> Ja, vi kommer!</label>
              <label><input type="radio" name="attendance" value="nej" /> Tyvärr kan vi inte</label>
            </div>
          </div>

          {/* Byt ut textareas mot dessa: */}
          <div className="form-group">
            <label htmlFor="allergies">Allergier eller specialkost</label>
            {/* Ändrat till input */}
            <input type="text" id="allergies" name="allergies" placeholder="T.ex. Veganskt, Nötallergi..." />
          </div>

          <div className="form-group">
            <label htmlFor="message">Hälsning till brudparet</label>
            {/* Ändrat till input */}
            <input type="text" id="message" name="message" placeholder="Skriv en hälsning..." />
          </div>

          <button type="submit" className="submit-btn">Skicka svar</button>
        </form>
      </section>
    </div>
  );
}