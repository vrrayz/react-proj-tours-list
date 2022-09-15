import React, {useState} from "react";

const Card = (props) => {
    const {id,name,info,image,price} = props.tour
    const text = info
    const [isMore, setIsMore] = useState(false)
    // console.log(name)
  return (
    <div className="card my-4">
      <img
        src={image}
        className="card-img-top"
        alt={id}
      />
      <div className="card-body">
        <div className="d-flex content-between my-1 mx-3">
          <h3>{name}</h3>
          <div className="my-auto">
            <span className="badge">${price}</span>
          </div>
        </div>
        <p className="card-text mx-3 mb-0">
            {isMore ? text : `${text.substring(0,208)}...`} <span className="extra-text" onClick={() => setIsMore(!isMore)}>{isMore ? 'Show Less':'Read More'}</span>
        </p>
        <div className="text-center">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default Card;
