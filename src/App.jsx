import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const [displayName, setDisplayName] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const { signup, login, logout } = useAuth();

  const handleSignup = async (email, password) => {
    // Perform signup logic
    await signup(email, password);

    // Update display name
    setDisplayName(email);
  };

  const handleLogin = async (email, password) => {
    // Perform login logic
    await login(email, password);

    // Update display name
    setDisplayName(email);
  };

  const handleLogout = async () => {
    // Perform logout logic
    await logout();

    // Clear display name
    setDisplayName("");
  };

  return (
    <Router>
      <Navbar displayName={displayName} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home displayName={displayName} />} />
        <Route
          path="/login"
          element={<Login setDisplayName={setDisplayName} />}
        />
        <Route
          path="/signup"
          element={<Signup handleSignup={handleSignup} />}
        />
        <Route
          path="/products"
          element={<Products setCartProducts={setCartProducts} />}
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
    </Router>
  );
};

export default App;
