import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const url = "https://course-api.com/react-tours-project"
function App() {
  const [data, setData] = useState([]);

  const getTours = () =>{
    fetch(url).then(response => response.json()).then(tours => {
      // console.log(tours)
      setData(tours)
    }).catch(error => console.log(error))
  }

  useEffect(() => {
    getTours()
  },[])
  return (
    <div className="flex-center-column">
      <div className="container-box">
        <h1>Our Tours</h1>
        <div className="underline"></div>
        <Card />
      </div>
    </div>
  );
}

export default App;
