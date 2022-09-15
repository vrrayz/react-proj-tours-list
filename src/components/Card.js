import React, {useState} from "react";

const Card = () => {
    const text = `Paris is synonymous with the finest things that culture can offer — in
    art, fashion, food, literature, and ideas. On this tour, your
    Paris-savvy Rick Steves guide will immerse you in the very best of the
    City of Light: the masterpiece-packed Louvre and Orsay museums,
    resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and
    extravagant Palace of Versailles. You'll also enjoy guided
    neighborhood walks through the city's historic heart as well as
    quieter moments to slow down and savor the city's intimate cafés,
    colorful markets, and joie de vivre. Join us for the Best of Paris in
    7 Days!`
    const [isMore, setIsMore] = useState(false)
  return (
    <div className="card">
      <img
        src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg"
        className="card-img-top"
        alt="cardimg"
      />
      <div className="card-body">
        <div className="d-flex content-between my-1 mx-3">
          <h3>Best Of Paris In 7 Days Tour</h3>
          <div className="my-auto">
            <span className="badge">$1,994</span>
          </div>
        </div>
        <p className="card-text mx-3">
            {isMore ? text : `${text.substring(0,208)}...`} <span className="extra-text" onClick={() => setIsMore(!isMore)}>{isMore ? 'Show Less':'Read More'}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
