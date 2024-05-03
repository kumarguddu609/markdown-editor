// MarkdownContext.js
import React, { createContext, useState } from "react";

const MarkdownContext = createContext();

const MarkdownProvider = ({ children }) => {
  const [markdownText, setMarkdownText] = useState("");

  return (
    <MarkdownContext.Provider value={{ markdownText, setMarkdownText }}>
      {children}
    </MarkdownContext.Provider>
  );
};

export { MarkdownProvider };
export default MarkdownContext;
