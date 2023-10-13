import React from 'react';


const BgPanel = ({children, bgImage, cols='col-12', imgOpt='container-right'}) => {
  return (
    <div className={`bg-panel ${imgOpt}`}>
      {
      (imgOpt == 'full' || imgOpt == 'full--inverted') && 
      <div className='bg-panel-full__image'></div>
      }
      <div 
        className={`bg-panel-wrap section-spacing  ${(imgOpt == 'full' || imgOpt == 'full--inverted') ? 'container' : ''} `} 
        style={imgOpt == 'container-right' ? { backgroundImage: `url(${bgImage})` } : {}}
      >
        <div className='row'>
          <div className={cols}>
            <div className="bg-panel__content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgPanel;
