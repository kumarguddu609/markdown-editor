// RawInput.jsx
import React, { useContext, useRef } from "react";
import MarkdownContext from "../context/MarkdownContext";
// import { FiCopy } from "react-icons/fi";

const RawInput = () => {
  const { markdownText, setMarkdownText } = useContext(MarkdownContext);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setMarkdownText(e.target.value);
  };

  // const handleCopyText = () => {
  //   inputRef.current.select();
  //   document.execCommand("copy");
  // };

  return (
    <div className="editor-container">
      <div className="input-container">
        <textarea
          ref={inputRef}
          className="raw-input"
          value={markdownText}
          onChange={handleInputChange}
          placeholder="Enter Markdown text..."
        />
        {/* <FiCopy className="copy-icon" onClick={handleCopyText} /> */}
      </div>
    </div>
  );
};

export default RawInput;
