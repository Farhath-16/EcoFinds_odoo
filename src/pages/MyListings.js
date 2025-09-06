import React from "react";

function MyListings() {
  const dummyProducts = [
    { id: 1, title: "Laptop", price: 200 },
    { id: 2, title: "Chair", price: 50 },
  ];

  return (
    <div className="container mt-4">
      <h2>My Listings</h2>
      <div className="row">
        {dummyProducts.map((prod) => (
          <div className="col-md-4 mb-3" key={prod.id}>
            <div className="card p-2">
              <div className="card-body">
                <h5>{prod.title}</h5>
                <p>${prod.price}</p>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyListings;
