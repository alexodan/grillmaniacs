import React from "react";

const TextContainer = ({ title, paragraphs, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {paragraphs &&
        paragraphs.map((paragrap, idx) => <p key={idx}>{paragrap}</p>)}
      {children}
    </div>
  );
};

export default TextContainer;
