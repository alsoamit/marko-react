import { useState } from "react";
const marked = require("marked");

export default function Editor() {
  const [width, setWidth] = useState("50%");
  const [rawData, setRawData] = useState(
    `# Markdown Editor | Previewer\nWrite in Markdown and get HTML\n\n\`Under Development\``
  );

  function updater(e) {
    setRawData(e.target.value);
  }

  return (
    <div className="contents">
      <div style={{ width: width }} className="editor">
        <textarea value={rawData} onChange={updater}></textarea>
      </div>

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

      <div
        className="previewer"
        dangerouslySetInnerHTML={{ __html: marked(rawData) }}
      ></div>
    </div>
  );
}
