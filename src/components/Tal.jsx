import './forms.css';
import { useLang } from '../context/LanguageContext';

export default function Tal() {
  const { t } = useLang();
  const f = t.tal;

  return (
    <div className="content-wrapper form-page">
      <section className="section-container">
        <h2 className="form-header">{f.header}</h2>
        <p className="fine-print">{f.subtext}</p>

        <form action="https://script.google.com/macros/s/AKfycbxvzEnaWFFOK18SqS65JtlHmaYqUY6W0NN1-b1xv_kpB_u2th022x897qAriqITZYzo/exec" method="POST" className="wedding-form">
          <input type="hidden" name="Kategori" value="TAL - Anmälan" />

          <div className="form-group">
            <label htmlFor="speaker-name">{f.name_label}</label>
            <input type="text" id="speaker-name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">{f.contact_label}</label>
            <input type="text" id="email" name="contact" required placeholder={f.contact_placeholder} />
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

          <button type="submit" className="submit-btn">{f.submit}</button>
        </form>
      </section>
    </div>
  );
}
