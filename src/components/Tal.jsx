import './forms.css';

export default function Tal() {
  return (
    <div className="content-wrapper form-page">
      <section className="section-container">
        <h2 className="form-header">Anmäl Tal</h2>
        <p className="fine-print">Detta formulär läses endast av Toastmastern</p>

        <form action="https://script.google.com/macros/s/AKfycbxvzEnaWFFOK18SqS65JtlHmaYqUY6W0NN1-b1xv_kpB_u2th022x897qAriqITZYzo/exec" method="POST" className="wedding-form">
        <input type="hidden" name="Kategori" value="TAL - Anmälan" />
          <div className="form-group">
            <label htmlFor="speaker-name">Ditt namn</label>
            <input type="text" id="speaker-name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-post eller telefon</label>
            <input type="text" id="email" name="contact" required placeholder="Så vi kan nå dig" />
          </div>

          <div className="form-group">
            <label htmlFor="speech-type">Vad vill du göra?</label>
            <select id="speech-type" name="type">
              <option value="tal">Hålla tal</option>
              <option value="spex">Framföra spex/lek</option>
              <option value="video">Visa video</option>
              <option value="annat">Annat</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="requirements">Behöver du teknik? (Mikrofon, projektor etc.)</label>
            {/* Ändrat till input */}
            <input type="text" id="requirements" name="requirements" placeholder="T.ex. Ja, en mikrofon" />
          </div>

          <button type="submit" className="submit-btn">Anmäl till Toastmastern</button>
        </form>
      </section>
    </div>
  );
}