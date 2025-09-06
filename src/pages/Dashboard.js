import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">Welcome to EcoFinds</h1>
        <div>
          <button className="btn btn-outline-success me-2" onClick={() => navigate("/add-product")}>
            + Add Product
          </button>
          <button className="btn btn-outline-primary" onClick={() => navigate("/products")}>
            Browse Products
          </button>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="card shadow-sm p-3">
            <h5>Quick Stats</h5>
            <div className="d-flex justify-content-between mt-3">
              <div>
                <h3>12</h3>
                <small>My Listings</small>
              </div>
              <div>
                <h3>3</h3>
                <small>Cart Items</small>
              </div>
              <div>
                <h3>5</h3>
                <small>Purchases</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm p-3">
            <h5>Tips for selling faster</h5>
            <ul>
              <li>Write clear titles with condition</li>
              <li>Upload clean photos (good lighting)</li>
              <li>Set fair prices — research similar items</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
