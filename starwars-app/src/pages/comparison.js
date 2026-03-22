import React from "react";

function Comparison() {
  return (
    <div className="page-container">
      <div className="card">
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>The Skywalker Bloodline</h2>
        <p style={{ fontStyle: "italic", color: "var(--primary-color)", marginBottom: "30px" }}>
          Analysis: Parallels between Anakin Skywalker and Leia Organa
        </p>

        {/* First Row: Leadership and Emotion */}
        <div className="quotes-grid">
          <div className="section">
            <h3>1. Strong Leadership</h3>
            <p>
              Both Anakin and Leia are natural leaders. Anakin leads troops during the
              Clone Wars as a General, while Leia becomes a key leader in the Rebel Alliance. 
              They both take charge in high-pressure situations and inspire others to follow 
              them into the heart of battle.
            </p>
          </div>

          <div className="section">
            <h3>2. Driven by Emotion</h3>
            <p>
              Both characters are deeply emotional. Anakin is driven by his love and fear
              of losing others, while Leia is driven by her compassion and care for the
              galaxy. Their hearts guide their most pivotal decisions, for better or worse.
            </p>
          </div>
        </div>

        {/* Second Row: The Force and Dedication */}
        <div className="quotes-grid" style={{ marginTop: '30px' }}>
          <div className="section">
            <h3>3. Connection to the Force</h3>
            <p>
              As members of the Skywalker family, both have a strong connection to the
              Force. Anakin is one of the most powerful Jedi ever recorded, and Leia 
              shows incredible Force sensitivity, utilizing it for intuition and 
              interstellar communication.
            </p>
          </div>

          <div className="section">
            <h3>4. Dedication to a Cause</h3>
            <p>
              Both are fully committed to their ideals. Anakin fights for peace
              and order (even when manipulated down the wrong path), while Leia fights
              tirelessly for freedom and hope across multiple galactic eras.
            </p>
          </div>
        </div>

        {/* Third Row: Sacrifice and Conflict */}
        <div className="quotes-grid" style={{ marginTop: '30px' }}>
          <div className="section">
            <h3>5. Willingness to Sacrifice</h3>
            <p>
              Both characters risk everything. Anakin sacrifices himself
              emotionally and physically for those he loves, while Leia sacrifices her
              personal life and safety for the Rebellion and the greater good of the galaxy.
            </p>
          </div>

          <div className="section">
            <h3>6. Inner Conflict</h3>
            <p>
              Both struggle internally. Anakin battles between the light and dark side,
              while Leia struggles with the crushing weight of loss, the responsibility 
              of leadership, and the shadow of her father's legacy.
            </p>
          </div>
        </div>

        {/* Bottom Section: Family Loyalty */}
        <div className="section" style={{ marginTop: '40px', borderLeftWidth: '10px' }}>
          <h3>7. Strong Family Loyalty</h3>
          <p>
            Family plays a massive role in both of their lives. Anakin’s fear of losing
            his family shapes his entire destiny, while Leia remains fiercely loyal and 
            connected to her brother and son, proving that the Skywalker bond is 
            unbreakable across generations.
          </p>
        </div>

        <div className="full-width-card" style={{ marginTop: '40px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.02)', padding: '30px', borderRadius: '15px' }}>
          <h3 style={{ color: '#fff' }}>Final Comparison: The Heroic Parallel</h3>
          <p>
            While their paths diverged—one falling to darkness before finding redemption, 
            and the other standing as a pillar of light—both Anakin and Leia represent 
            the core of the Star Wars saga: the power of individual choice and the 
            strength found in one's convictions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comparison;