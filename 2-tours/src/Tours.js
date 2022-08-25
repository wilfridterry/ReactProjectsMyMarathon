import React from "react";
const Tours = (props) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>{props.children}</div>
    </section>
  );
};

export default Tours;
