import { useState } from "react";
const marked = require("marked");

function App() {
  const [rawData, setRawData] = useState(
    `# Markdown Editor\nConverts your Markdown into HTML`
  );
  const [width, setWidth] = useState("50%");

  function updater(e) {
    setRawData(e.target.value);
  }

  return (
    <div className="App">
      {/* the text area */}
      <div style={{ width: width }} className="editor">
        <textarea value={rawData} onChange={updater}></textarea>
      </div>

      {/* the resizer */}
      <div className="resizer-wrap">
        <div
          draggable
          onDrag={(e) => {
            if (e.clientX) {
              setWidth(e.clientX.toString() + "px");
              console.log(e.clientX.toString() + "px");
            }
            console.log(e.clientX.toString() + "px");
          }}
          className="resizer"
        ></div>
      </div>

      {/* the previewer */}
      <div
        className="previewer"
        dangerouslySetInnerHTML={{ __html: marked(rawData) }}
      ></div>
    </div>
  );
}

export default App;
