import React from "react";
import { Link } from "react-router-dom";

function SellerDashboard() {
  return (
    <div className="container mt-4">
      <h2>Welcome Seller!</h2>
      <Link to="/add-product" className="btn btn-primary me-2">Add Product</Link>
      <Link to="/my-listings" className="btn btn-secondary">My Listings</Link>
      <hr />
      <p>Manage your products here (to be implemented)</p>
    </div>
  );
}

export default SellerDashboard;
