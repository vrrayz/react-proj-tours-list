import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setData] = useState([]);

  const getTours = () => {
    fetch(url)
      .then((response) => {
        if(response.status >= 200  && response.status <= 299){
          return response.json()
        }else{
          setIsError(true)
          setIsLoading(false)
          throw new Error('Error ecountered in api')
        }
      })
      .then((tours) => {
        // console.log(tours)
        setData(tours);
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  };

  const removeItem = (id) => {
    const newTourList = tours.filter((tour) => tour.id !== id);
    setData(newTourList);
  };

  useEffect(() => {
    getTours();
  }, []);
  if (isLoading) {
    return (
      <div className="flex-center-column">
        <div className="container-box">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex-center-column">
        <div className="container-box">
          <h1>Error fetching api</h1>
        </div>
      </div>
    );
  }
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
