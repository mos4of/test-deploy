import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Pages from "./components/Pages";
import Pagination from "./components/Pagination";

function App(props) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurentPage] = useState(1);
  const [countElement] = useState(10);

  useEffect(() => {
    setLoading(false);
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setPhotos(res.data);
    });
  }, []);
  const lastPhotoIndex = currentPage * countElement;
  const firstPhotoIndex = lastPhotoIndex - countElement;
  const currentPhotos = photos.slice(firstPhotoIndex, lastPhotoIndex);
  
  const paginationPoint = (pageNumber) => setCurentPage(pageNumber);
  
  const NextPage = () => {
    setCurentPage((prev) => prev + 1);
  };
  const PrevPage = () => {
    setCurentPage((prev) => prev - 1);
  };

  return (
    <div className="App">
      <h1>Photos</h1>
      <Pages photos={currentPhotos} loading={loading} />
      <Pagination
        countElement={countElement}
        totalCountElement={photos.length}
        paginationPoint={paginationPoint}
      />
      <button onClick={PrevPage}>Prev</button>
      <button onClick={NextPage}>Next</button>

    </div>
  );
}

export default App;