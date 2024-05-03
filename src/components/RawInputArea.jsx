// RawInputArea.jsx
import React, { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";

const RawInput = () => {
  const { markdownText, setMarkdownText } = useContext(MarkdownContext);

  const handleInputChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className="input-container">
      <textarea
        className="raw-input"
        value={markdownText}
        onChange={handleInputChange}
        placeholder="Enter Markdown text..."
      />
    </div>
  );
};

export default RawInput;
