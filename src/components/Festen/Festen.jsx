import castleimg from '../../assets/castle_img.png';

export default function Festen() {
    return (
        <section id="schema" className="section-container">
            <h2 className="section-title">Festen</h2>
            <p className="fine-print">Efter vigseln bjuds det på brudskål och mingel</p>
            
            <div className="section-content">
                <p className="typewriter-label">KLÄDKOD</p>
                <p className="typewriter-text">Mörk kostym</p>
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