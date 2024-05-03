// MarkdownSanitized.jsx
import React, { useContext } from "react";
import MarkdownContext from "../context/MarkdownContext";
import { Remarkable } from "remarkable";
import DOMPurify from "dompurify";

const MarkdownSanitized = () => {
  const { markdownText } = useContext(MarkdownContext);

  const md = new Remarkable();

  const sanitizedHTML = DOMPurify.sanitize(md.render(markdownText));

  return (
    <div className="preview-container">
      <div
        className="markdown-preview"
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      />
    </div>
  );
};

export default MarkdownSanitized;
