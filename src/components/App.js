
import React from "react";

import '../App.css';

function App() {
  const price = '500'
  const size = 'large'
  return (
    <React.Fragment>
      <h1>Yolomy Products</h1>
      <p>Trousers-{size}</p>
      <p>Price-{price}</p>
    </React.Fragment>
  );
}

export default App;