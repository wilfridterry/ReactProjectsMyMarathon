import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Tour from "./Tour";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const handleLoadingTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLoadingTours();
  }, []);

  const handleRemoveTour = (id) => {
    setTours(tours.filter((tour) => id !== tour.id));
  };

  const loadingData = loading ? <Loading /> : null;
  const toursData = loading ? null : (
    <Tours tours={tours} handleRemoveTour={handleRemoveTour}>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} handleRemoveTour={handleRemoveTour} />
      ))}
    </Tours>
  );

  const noToursData = (
    <div className="title">
      <h2>no tours left</h2>
      <button className="btn" onClick={handleLoadingTours}>
        refresh
      </button>
    </div>
  );

  return (
    <main>
      {loadingData}
      {tours.length === 0 ? noToursData : toursData}
    </main>
  );
}

export default App;
