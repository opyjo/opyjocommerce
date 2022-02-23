import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <ProductListing />
            </>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <>
              <Header />
              <ProductDetail />
            </>
          }
        />
        <Route>404 Not Found! </Route>
      </Routes>
    </Router>
  );
}
export default App;
