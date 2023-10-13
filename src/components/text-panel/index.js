import React from 'react';

const TextPanel = ({ title, description, cta, classes = 'text-panel--default' }) => {
  return (
      <div className={"text-panel " + classes}>
        {title && <h2 className="text-panel__title">{title}</h2>}
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