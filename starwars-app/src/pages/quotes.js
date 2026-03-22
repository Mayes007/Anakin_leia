import React from "react";

function Quotes() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Famous Quotes</h1>
        <p>Iconic words that reveal who Anakin and Leia truly are</p>
      </div>

      <div className="card-grid">

        {/* ANAKIN */}
        <div className="card">
          <h2>Anakin Skywalker</h2>

          <div className="quote">
            "You underestimate my power!"
            <p><strong>Meaning:</strong> Shows his pride and emotional intensity.</p>
            <p><em>Revenge of the Sith</em></p>
          </div>

          <div className="quote">
            "I will bring peace, freedom, justice, and security to my new empire."
            <p><strong>Meaning:</strong> He believes he is doing the right thing, even as he turns to the dark side.</p>
            <p><em>Revenge of the Sith</em></p>
          </div>

          <div className="quote">
            "I am the Chosen One!"
            <p><strong>Meaning:</strong> Reveals his inner conflict and pressure to live up to expectations.</p>
            <p><em>Revenge of the Sith</em></p>
          </div>

          <div className="quote">
            "I don't like sand. It's coarse and rough and irritating..."
            <p><strong>Meaning:</strong> Shows his emotional and human side.</p>
            <p><em>Attack of the Clones</em></p>
          </div>

          {/* ADDED QUOTES */}
          <div className="quote">
            "This is where the fun begins."
            <p><strong>Meaning:</strong> Captures his natural talent, confidence, and thrill-seeking nature as a pilot.</p>
            <p><em>Revenge of the Sith</em></p>
          </div>

          <div className="quote">
            "Tell your sister... you were right."
            <p><strong>Meaning:</strong> His final words, signifying his redemption and the return of the man he used to be.</p>
            <p><em>Return of the Jedi</em></p>
          </div>
        </div>

        {/* LEIA */}
        <div className="card">
          <h2>Princess Leia</h2>

          <div className="quote">
            "Help me, Obi-Wan Kenobi. You're my only hope."
            <p><strong>Meaning:</strong> Represents hope and leadership in desperate times.</p>
            <p><em>A New Hope</em></p>
          </div>

          <div className="quote">
            "Aren't you a little short for a stormtrooper?"
            <p><strong>Meaning:</strong> Shows her courage and confidence even in danger.</p>
            <p><em>A New Hope</em></p>
          </div>

          <div className="quote">
            "Hope is like the sun. If you only believe in it when you see it..."
            <p><strong>Meaning:</strong> Emphasizes her role as a symbol of hope.</p>
            <p><em>The Last Jedi</em></p>
          </div>

          <div className="quote">
            "I love you." – "I know."
            <p><strong>Meaning:</strong> Shows emotional strength and deep connection.</p>
            <p><em>The Empire Strikes Back</em></p>
          </div>

          {/* ADDED QUOTES */}
          <div className="quote">
            "Somebody has to save our skins. Into the garbage chute, flyboy!"
            <p><strong>Meaning:</strong> Displays her quick thinking and ability to take command of any situation.</p>
            <p><em>A New Hope</em></p>
          </div>

          <div className="quote">
            "Why, you stuck-up, half-witted, scruffy-looking nerf herder!"
            <p><strong>Meaning:</strong> Highlights her fiery spirit and unwillingness to be intimidated by anyone.</p>
            <p><em>The Empire Strikes Back</em></p>
          </div>
        </div>

      </div>

      <div className="section">
        <h2>Why These Quotes Matter</h2>
        <p>
          The quotes from Anakin and Leia show that both characters are driven by
          emotion, leadership, and a deep sense of purpose. Anakin’s words often
          reveal his internal struggle and descent into darkness, while Leia’s
          words inspire hope and strength in others.
        </p>

        <p>
          Even though they take different paths, their words reflect similar core
          traits: passion, loyalty, and the desire to protect others.
        </p>
      </div>
    </div>
  );
}

export default Quotes;