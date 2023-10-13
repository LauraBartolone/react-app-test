import React from 'react';
// const CardBody = ({ type }) => {
//   wrapper = (
// 		<div
// 			className={wrapperClass}
// 		>
// 			{children}
// 		</div>
// 		);
//   return (

   
//   );
// };

const Card = ({ image, title, description, type="image", classes="card--default", cta, bodyIcon=null }) => {

  return (

    <a href={cta?.url} className={"card " + classes} style={{'--image': `url(${image})`}}>
      <div className="card__body">
        <div className='card__body-left'>
          <h6 className="card__title">{title}</h6>
          <p className="card__text">{description}</p>
          {
          cta && 
            <button className="btn btn-link btn-link--light">
              {cta.label}
            </button>
          }
        </div>
        {bodyIcon &&  <img src={bodyIcon} alt="icon" className="card__body-icon" />}
      </div>
    </a>
  );
};


export default Card;