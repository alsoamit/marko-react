import { useState } from "react";
const marked = require("marked");

function App() {
  const [rawData, setRawData] = useState(
    `# Markdown Editor\nConverts your Markdown into HTML`
  );

  function updater(e) {
    setRawData(e.target.value);
  }
  return (
    <div className="App">
      <textarea
        value={rawData}
        className="editor"
        onChange={updater}
      ></textarea>
      <div
        className="previewer"
        dangerouslySetInnerHTML={{ __html: marked(rawData) }}
      ></div>
    </div>
  );
}

export default App;
