import React, { useState } from "react";
import Anakin from "./pages/anakin";
import Leia from "./pages/leia";
import Comparison from "./pages/comparison";
import Quotes from "./pages/quotes";
import Quiz from "./pages/quiz";
import "./App.css";

function App() {
  const [page, setPage] = useState("anakin");

  return (
    <div>
      <header>
        <h1>Skywalker Legacy</h1>

        <nav>
          <button onClick={() => setPage("anakin")}>Anakin</button>
          <button onClick={() => setPage("leia")}>Leia</button>
          <button onClick={() => setPage("comparison")}>Comparison</button>
          <button onClick={() => setPage("quotes")}>Quotes</button>
          <button onClick={() => setPage("quiz")}>Quiz</button>
        </nav>
      </header>

      <main>
        {page === "anakin" && <Anakin />}
        {page === "leia" && <Leia />}
        {page === "comparison" && <Comparison />}
        {page === "quotes" && <Quotes/>}
        {page === "quiz" && <Quiz />}
      </main>
    </div>
  );
}

export default App;