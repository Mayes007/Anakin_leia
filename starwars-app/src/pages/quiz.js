import React, { useState } from "react";


function ForceQuiz({ setSide }) {
  const [score, setScore] = useState(0); 
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);

const questions = [
  { text: "How do you handle a difficult situation?", options: [{ label: "With calm and patience", value: 1 }, { label: "With passion and strength", value: -1 }] },
  { text: "What is your greatest motivation?", options: [{ label: "Protecting the peace", value: 1 }, { label: "Protecting the ones I love", value: -1 }] },
  { text: "A friend is in trouble. What is your first instinct?", options: [{ label: "Trust the will of the Force", value: 1 }, { label: "Do whatever it takes to save them", value: -1 }] },
  { text: "Which trait do you value more?", options: [{ label: "Resilience", value: 1 }, { label: "Ambition", value: -1 }] },
  { text: "How do you view power?", options: [{ label: "A responsibility to serve", value: 1 }, { label: "A tool to achieve goals", value: -1 }] },
  { text: "What defines a great leader?", options: [{ label: "Diplomacy and wisdom", value: 1 }, { label: "Decisiveness and action", value: -1 }] },
  { text: "Someone has betrayed you. You...", options: [{ label: "Forgive and move forward", value: 1 }, { label: "Ensure they never do it again", value: -1 }] },
  { text: "What is the most dangerous emotion?", options: [{ label: "Pride", value: 1 }, { label: "Fear", value: -1 }] },
  { text: "Where do you find your strength?", options: [{ label: "In inner peace", value: 1 }, { label: "In my emotions", value: -1 }] },
  { text: "The galaxy is in chaos. What is the solution?", options: [{ label: "Restoring democracy", value: 1 }, { label: "Enforcing order", value: -1 }] },
  { text: "What scares you the most?", options: [{ label: "Losing control of myself", value: -1 }, { label: "Losing hope in others", value: 1 }] },
  { text: "How do you deal with anger?", options: [{ label: "Channel it into action", value: -1 }, { label: "Let it pass and reflect", value: 1 }] },
  { text: "What matters more?", options: [{ label: "Justice", value: 1 }, { label: "Power", value: -1 }] },
  { text: "How do you approach rules?", options: [{ label: "They exist for a reason", value: 1 }, { label: "They can be broken if necessary", value: -1 }] },
  { text: "What kind of leader are you?", options: [{ label: "Strategic and calm", value: 1 }, { label: "Bold and aggressive", value: -1 }] },
  { text: "How do you handle loss?", options: [{ label: "Accept it and grow stronger", value: 1 }, { label: "Fight to undo it", value: -1 }] },
  { text: "What drives your decisions?", options: [{ label: "Logic and wisdom", value: 1 }, { label: "Emotion and instinct", value: -1 }] },
  { text: "How do others see you?", options: [{ label: "A symbol of hope", value: 1 }, { label: "A powerful force", value: -1 }] },
  { text: "What is your greatest strength?", options: [{ label: "Self-control", value: 1 }, { label: "Determination", value: -1 }] },
  { text: "What would you sacrifice everything for?", options: [{ label: "The greater good", value: 1 }, { label: "The people I love", value: -1 }] }
];


  const handleAnswer = (value) => {
    const newScore = score + value;
    setScore(newScore);
    
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      if (newScore > 2) {
        setResult("Light Side");
        if(setSide) setSide("light");
      } else if (newScore < -2) {
        setResult("Dark Side");
        if(setSide) setSide("dark");
      } else {
        setResult("Gray Jedi");
        if(setSide) setSide("gray");
      }
    }
  };

  if (result) {
    return (
      <div className="page-container" style={{ display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
        <div className="card quiz-card-layout" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "3rem", color: "var(--primary-color)" }}>The Force has Spoken</h2>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", textShadow: "0 0 20px var(--accent-glow)", margin: "30px 0" }}>
            {result}
          </p>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "40px" }}>
            {result === "Light Side" && "Your spirit mirrors that of Leia Organa. You lead with diplomatic grace and find strength in hope."}
            {result === "Dark Side" && "You possess the raw intensity of Anakin Skywalker. Your power is fueled by your deep connections."}
            {result === "Gray Jedi" && "You walk the path of balance, understanding that both light and shadow are necessary."}
          </p>
          <button className="quiz-option" style={{ maxWidth: "400px", margin: "0 auto" }} onClick={() => window.location.reload()}>
            RE-INITIALIZE TEST
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
      <div className="card quiz-card-layout">
        <div style={{ textAlign: "center" }}>
          <h3 style={{ letterSpacing: "5px", opacity: 0.6, fontSize: "0.9rem" }}>ANALYZING NEURAL PATTERN...</h3>
          <h2 style={{ letterSpacing: "3px", fontSize: "2.2rem", marginTop: "15px" }}>
              QUESTION {step + 1} / {questions.length}
          </h2>
          
          <div style={{ background: "#111", height: "12px", borderRadius: "10px", margin: "40px 0", border: "1px solid #333" }}>
            <div style={{ 
              background: "var(--primary-color)", 
              width: `${((step + 1) / questions.length) * 100}%`, 
              height: "100%", 
              boxShadow: "0 0 20px var(--primary-color)",
              transition: "0.5s ease" 
            }}></div>
          </div>
        </div>

        <p style={{ fontSize: "2.5rem", textAlign: "center", margin: "60px 0", fontWeight: "300", color: "#fff", lineHeight: "1.2" }}>
          "{questions[step].text}"
        </p>

        <div className="quiz-options-container">
          {questions[step].options.map((opt, i) => (
            <button key={i} className="quiz-option" onClick={() => handleAnswer(opt.value)}>
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ForceQuiz;