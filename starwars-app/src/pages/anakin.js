import React from "react";

function Anakin() {
  return (
    <div className="page-container">
      <div className="card">
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Anakin Skywalker</h2>
        <p style={{ fontStyle: "italic", color: "var(--primary-color)", marginBottom: "30px" }}>
          "The Chosen One" | Hero of the Republic | Commander of the 501st
        </p>

        <section>
          <h3>Background</h3>
          <p>
            Anakin Skywalker was born on the desert planet of Tatooine. He was a slave
            as a child but was discovered by Jedi Master Qui-Gon Jinn, who believed
            he was the "Chosen One" destined to bring balance to the Force. 
            <strong> Tactical Note:</strong> His Force sensitivity was off the charts, 
            boasting a Midi-chlorian count of over 20,000—the highest ever recorded in Jedi history.
          </p>
        </section>

        {/* Side-by-side layout for Strengths and Weaknesses */}
        <div className="quotes-grid" style={{ marginTop: '30px' }}>
          <div className="section">
            <h3>Strengths</h3>
            <ul>
              <li>One of the most powerful Force users ever</li>
              <li>Exceptional pilot and warrior</li>
              <li>Natural leader in battle</li>
              <li>Highly skilled with a lightsaber</li>
              {/* Added Depth */}
              <li>Master of Form V (Djem So) combat</li>
              <li>Innate mechanical genius and technopathy</li>
            </ul>
          </div>

          <div className="section">
            <h3>Weaknesses</h3>
            <ul>
              <li>Fear of losing loved ones</li>
              <li>Easily influenced by emotions</li>
              <li>Struggles with patience and control</li>
              {/* Added Depth */}
              <li>Susceptibility to psychological manipulation</li>
              <li>Reckless disregard for personal safety</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h3>Personality</h3>
          <p>Anakin's personality was a blend of extreme intensity and conflicting drives:</p>
          <ul>
            <li>Passionate and emotional</li>
            <li>Extremely loyal to those he loves</li>
            <li>Struggles with fear and anger</li>
            <li>Determined and strong-willed</li>
          </ul>
        </div>

        <div className="section" style={{ marginTop: '40px' }}>
          <h3>Key Relationships</h3>
          <div className="quotes-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '0', borderLeft: 'none' }}>
            <ul>
              <li><strong>Padmé Amidala</strong> – his wife</li>
              <li><strong>Obi-Wan Kenobi</strong> – his mentor</li>
              <li><strong>Ahsoka Tano</strong> – his apprentice</li>
            </ul>
            <ul>
              <li><strong>Luke Skywalker</strong> – his son</li>
              <li><strong>Princess Leia</strong> – his daughter</li>
              <li><strong>Sheev Palpatine</strong> – his mentor/tempter</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h3>Major Turning Point</h3>
          <p>
            Anakin’s fear of losing his wife led him to the dark side. He became <strong>Darth Vader</strong> 
            after being manipulated by Emperor Palpatine. This descent was sealed during the tragedy 
            at the Jedi Temple and his subsequent defeat on Mustafar.
          </p>
        </div>

        <div className="full-width-card" style={{ marginTop: '40px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.02)', padding: '30px', borderRadius: '15px' }}>
          <h3>Legacy</h3>
          <p>
            Although he fell to the dark side, Anakin ultimately redeemed himself by
            saving his son and destroying the Emperor, bringing balance to the Force. 
            His return to the Light Side at the Battle of Endor fulfilled the prophecy 
            of the Chosen One.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Anakin