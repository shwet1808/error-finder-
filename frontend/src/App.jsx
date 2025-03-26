import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="left"> 
        <div className="code"></div> {/* Code inside left */}
        <div className="review">Review</div> {/* Review inside left */}
      </div>
      <div className="right"></div> {/* Right section empty */}
    </main>
  );
}

export default App;
