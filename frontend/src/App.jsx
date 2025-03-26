import { useState,useEffect } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-jsx"
import prism from "prismjs"
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect( () => {
    prism.highlightAll
  })

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
