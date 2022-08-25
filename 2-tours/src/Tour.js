import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, handleRemoveTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore((readMore) => !readMore)}>
            {readMore ? "show less" : "show more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => handleRemoveTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
