import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(people.length - 1);
    }
    return setCurrentIndex((index) => index - 1);
  };

  const handleNext = () => {
    if (currentIndex === people.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex((index) => index + 1);
  };

  
  useEffect(() => {
    const slider = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(slider);
    }    
  }, [currentIndex, people]);

  const peopleData = people.map(({ id, image, name, title, quote }, index) => {
    let className = "nextSlide";

    if (currentIndex === index) {
      className = "activeSlide";
    }

    if (index === currentIndex - 1 || (currentIndex === 0 && index === people.length - 1)) {
      className = "lastSlide";
    }

    return (
      <article key={id} className={className}>
        <img src={image} alt={name} className="person-img" />
        <h4>{name}</h4>
        <h5 className="title">{title}</h5>
        <p className="text">{quote}</p>
        <button className="icon prev" onClick={handlePrev}>
          <FiChevronLeft />
        </button>
        <button className="icon next" onClick={handleNext}>
          <FiChevronRight />
        </button>
        <div className="icon">
          <FaQuoteRight />
        </div>
      </article>
    );
  });
  return (
    <main className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">{peopleData}</div>
    </main>
  );
}

export default App;
