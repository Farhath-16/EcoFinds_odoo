import React from "react";
import { Link } from "react-router-dom";

function BuyerDashboard() {
  return (
    <div className="container mt-4">
      <h2>Welcome Buyer!</h2>
      <Link to="/cart" className="btn btn-primary me-2">Go to Cart</Link>
      <Link to="/previous-purchases" className="btn btn-secondary">View Previous Purchases</Link>
      <hr />
      <p>Browse products here (to be implemented)</p>
    </div>
  );
}

export default BuyerDashboard;
