// App.js
import React from "react";
import { MarkdownProvider } from "./context/MarkdownContext";
import RawInput from "./components/RawInput";
import MarkdownSanitized from "./components/MarkdownSanitized";

import "./App.css";

const App = () => {
  return (
    <MarkdownProvider>
      <h1 className="main-heading">Markdown Editor</h1>
      <div className="app-container">
        <div className="editor-container">
          <RawInput />
        </div>
        <div className="preview-container">
          <MarkdownSanitized />
        </div>
      </div>
    </MarkdownProvider>
  );
};

export default App;
