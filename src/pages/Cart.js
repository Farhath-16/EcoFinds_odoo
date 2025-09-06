import React from "react";

function Cart() {
  const cartItems = [
    { id: 1, title: "Laptop", price: 200 },
    { id: 2, title: "Chair", price: 50 },
  ];

  return (
    <div className="container mt-4">
      <h2>My Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="card mb-2 p-2">
          <h5>{item.title}</h5>
          <p>${item.price}</p>
        </div>
      ))}
      <h4>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</h4>
      <button className="btn btn-success">Checkout</button>
    </div>
  );
}

export default Cart;
