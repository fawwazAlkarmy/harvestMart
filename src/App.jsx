import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [displayName, setDisplayName] = useState("");
  return (
    <BrowserRouter>
      <Navbar displayName={displayName} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products setCartProducts={setCartProducts} />}
        />
        <Route
          path="/login"
          element={
            <Login displayName={displayName} setDisplayName={setDisplayName} />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup displayName={displayName} setDisplayName={setDisplayName} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
