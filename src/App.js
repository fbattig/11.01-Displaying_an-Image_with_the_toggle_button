import React, { useState } from "react";
import "./App.css";

const App = () => {
  const url = "https://images.unsplash.com/photo-1562051036-e0eea191d42f";
  const [displayImage, setDisplayImage] = useState(false);

  const toggleHandle = () => setDisplayImage(!displayImage);

  return (
    <div className="App">
      {displayImage && <img src={url} alt="Some cofee beans" />}
      <br />
      <button onClick={toggleHandle}>Toggle Image Display</button>
    </div>
  );
};
export default App;
