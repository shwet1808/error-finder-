import { useState } from "react";
import "./App.css";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import Prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [code, setCode] = useState(`function sum() {
    return 1 + 1;
  }`);

  const [review, setReview] = useState("");

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code: code,
      });
      console.log(response.data);
      setReview(response.data.response);
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("⚠️ Error: Unable to fetch review.");
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={(newCode) => setCode(newCode)}
            highlight={(code) => Prism.highlight(code, Prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <button onClick={reviewCode} className="review">
          Review
        </button>
      </div>
      <div className="right">
        <h3>Code Review:</h3>
        <pre>
          <ReactMarkdown>{review}</ReactMarkdown>
        </pre>
      </div>
    </main>
  );
}

export default App;
