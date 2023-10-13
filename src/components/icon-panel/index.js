import React from 'react';

const IconPanel = ({ icon, title, description, classes = '--default' }) => {
  const Icon = icon;
  return (
      <div className={"icon-panel " + classes}>
        
        <Icon className="icon-panel__icon" />
        
        <p className="icon-panel__title">{title}</p>
        <p className="icon-panel__description">{description}</p>
        
      </div>
  );
};

export default IconPanel;