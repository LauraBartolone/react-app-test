import React from 'react';
import parse from 'html-react-parser';

const TextPanel = ({ title, description, cta, classes = 'text-panel--default' }) => {
  return (
      <div className={"text-panel " + classes}>
        {title && <h2 className="text-panel__title underlined-title">{parse(title)}</h2>}
        {description && <p className="text-panel__description">{description}</p>}
        {cta && (
          <a href={cta.url} className="btn btn-primary">
            {cta.label}
          </a>
        )}
      </div>
  );
};

export default TextPanel;