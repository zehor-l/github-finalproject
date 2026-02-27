// App.jsx
import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="landing-page">
      {!showProducts ? (
        <div className="welcome-container">
          <h1>Welcome To Paradise Nursery</h1>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default App;
