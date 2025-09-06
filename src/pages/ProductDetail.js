import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  // Dummy data
  const product = {
    title: "Laptop",
    description: "A used laptop in good condition",
    price: 200,
    category: "Electronics",
  };

  return (
    <div className="container mt-4">
      <h2>{product.title}</h2>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
