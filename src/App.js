// App.js
import React from "react";
import { MarkdownProvider } from "./context/MarkdownContext";
import RawInput from "./components/RawInputArea";
import MarkdownSanitized from "./components/MarkdownSanitized";

const App = () => {
  return (
    <MarkdownProvider>
      <div className="app-container">
        <RawInput />
        <MarkdownSanitized />
      </div>
    </MarkdownProvider>
  );
};

export default App;
