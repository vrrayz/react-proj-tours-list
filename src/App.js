import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setData] = useState([]);

  const getTours = () => {
    fetch(url)
      .then((response) => response.json())
      .then((tours) => {
        // console.log(tours)
        setData(tours);
      })
      .catch((error) => console.log(error));
  };

  const removeItem = (id) => {
    const newTourList = tours.filter(tour => tour.id !== id)
    setData(newTourList)
  };

  useEffect(() => {
    getTours();
  }, []);
  return (
    <div className="flex-center-column">
      <div className="container-box">
        <h1>Our Tours</h1>
        <div className="underline"></div>
        {tours.map((tour) => {
          return (
            <Card key={tour.id} tour={tour}>
              <button className="btn" onClick={() => removeItem(tour.id)}>
                Not Interested
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
