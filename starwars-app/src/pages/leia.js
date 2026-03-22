import React from "react";

function Leia() {
  return (
    <div className="page-container">
      <div className="card">
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Princess Leia Organa</h2>
        <p style={{ fontStyle: "italic", color: "var(--primary-color)", marginBottom: "30px" }}>
          Leader of the Resistance | Senator of Alderaan | General of the Rebel Alliance
        </p>

        <section>
          <h3>Background</h3>
          <p>
            Leia Organa was born to Anakin Skywalker and Padmé Amidala but was adopted
            by the royal family of Alderaan. She grew up as a princess but chose to
            fight against the Empire as a leader in the Rebel Alliance. 
            <strong> Intelligence Report:</strong> Raised by Bail Organa, she was trained from 
            birth in the art of politics and subversion, using her status as a Senator 
            to funnel classified Imperial data to the Rebellion.
          </p>
        </section>

        {/* Side-by-side layout for Strengths and Weaknesses */}
        <div className="quotes-grid" style={{ marginTop: '30px' }}>
          <div className="section">
            <h3>Strengths</h3>
            <ul>
              <li>Exceptional leadership skills</li>
              <li>Brave under pressure</li>
              <li>Skilled diplomat and communicator</li>
              <li>Strong connection to the Force</li>
              {/* Added Depth */}
              <li>Master of tactical urban warfare</li>
              <li>Unbreakable mental fortitude</li>
            </ul>
          </div>

          <div className="section">
            <h3>Weaknesses</h3>
            <ul>
              <li>Can be stubborn</li>
              <li>Takes on too much responsibility</li>
              <li>Struggles with personal loss</li>
              {/* Added Depth */}
              <li>Inclined to prioritize the Cause over herself</li>
              <li>Deeply affected by the destruction of Alderaan</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h3>Personality</h3>
          <p>Leia's character is defined by a unique blend of royal poise and battlefield grit:</p>
          <ul>
            <li>Strong-willed and fearless</li>
            <li>Highly intelligent and strategic</li>
            <li>Compassionate and loyal</li>
            <li>Emotionally resilient</li>
          </ul>
        </div>

        <div className="section" style={{ marginTop: '40px' }}>
          <h3>Key Relationships</h3>
          <div className="quotes-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '0', borderLeft: 'none' }}>
            <ul>
              <li><strong>Han Solo</strong> – her partner</li>
              <li><strong>Luke Skywalker</strong> – her twin brother</li>
              <li><strong>Ben Solo</strong> – her son</li>
            </ul>
            <ul>
              <li><strong>Anakin Skywalker</strong> – her father</li>
              <li><strong>Obi-Wan Kenobi</strong> – family protector</li>
              <li><strong>Bail Organa</strong> – her adoptive father</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h3>Major Achievements</h3>
          <ul>
            <li>Leader in the Rebel Alliance</li>
            <li>Helped defeat the Empire</li>
            <li>Key figure in restoring freedom to the galaxy</li>
            {/* Added Depth */}
            <li>Founder of the Resistance against the First Order</li>
            <li>Surviving witness to the Galactic Civil War's start and end</li>
          </ul>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h3>Connection to the Force</h3>
          <p>
            Like her father and brother, Leia is strong with the Force. Although she
            did not fully train as a Jedi until later in life, she demonstrates powerful 
            Force abilities, including post-cognition, environmental awareness, and 
            the ability to communicate across the vacuum of space.
          </p>
        </div>

        <div className="full-width-card" style={{ marginTop: '40px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.02)', padding: '30px', borderRadius: '15px' }}>
          <h3>Legacy</h3>
          <p>
            Leia is remembered as a symbol of hope, resistance, and leadership. She
            dedicated her life to fighting for freedom and protecting those she loved, 
            becoming a guiding light for the galaxy's darkest hours and a mentor 
            to the next generation of Jedi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leia;