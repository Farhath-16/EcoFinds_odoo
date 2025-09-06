import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import AddProduct from "./pages/AddProduct";
import MyListings from "./pages/MyListings";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import PreviousPurchases from "./pages/PreviousPurchases";

function App() {
  // Store user info after login (for demo, we'll use local state)
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />

        {/* Protected Routes */}
        {user && user.role === "buyer" && (
          <>
            <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/previous-purchases" element={<PreviousPurchases />} />
          </>
        )}

        {user && user.role === "seller" && (
          <>
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/my-listings" element={<MyListings />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </>
        )}

        {/* Redirect if not logged in */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
