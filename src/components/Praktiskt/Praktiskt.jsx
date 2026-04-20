import castleimg from '../../assets/castle_img.png';

export default function Festen() {
    return (
        <section id="praktiskt" className="section-container">
            <h2 className="section-title">Praktiskt</h2>
            
            <div className="section-content">
                <p className="typewriter-label">KLÄDKOD</p>
                <p className="typewriter-text">Mörk kostym</p>
                
                <div className="thin-line"></div>

                <p className="typewriter-label">PRESENTER</p>
                <p className="typewriter-text">Ge oss presenter !</p>
                <div className="thin-line"></div>
                
                <p className="typewriter-text">
                    Kvällen fortsätter med middag och dans i slottets festsal. 
                    Vi ser fram emot en natt fylld av glädje och skratt.
                </p>
                
                {/* Slottet som en subtil dekorativ detalj längst ner */}
                <img src={castleimg} alt="" className="mini-castle-divider" />
            </div>
        </section>
    );
}