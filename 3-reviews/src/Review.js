import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (num) => {
    if (num < 0) {
      return people.length - 1;
    } 

    if (num > people.length - 1) {
      return 0;
    }

    return num;
  }
  const handlePrevPerson = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    });
  };

  const handleNextPerson = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    });
  };

  const handleRandomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);

    if (index === randomIndex) { 
      randomIndex = randomIndex + 1;
    }

    setIndex(checkNumber(randomIndex));
  };
  return (
    <article className="review">
      <figure className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </figure>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={handleRandomPerson}>suprise me</button>
      </div>
    </article>
  );
};

export default Review;
