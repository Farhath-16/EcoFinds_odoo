import React from "react";

function PreviousPurchases() {
  const purchases = [
    { id: 1, title: "Laptop", price: 200 },
    { id: 2, title: "Chair", price: 50 },
  ];

  return (
    <div className="container mt-4">
      <h2>Previous Purchases</h2>
      {purchases.map((item) => (
        <div key={item.id} className="card mb-2 p-2">
          <h5>{item.title}</h5>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default PreviousPurchases;
