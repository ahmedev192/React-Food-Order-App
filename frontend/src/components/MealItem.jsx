import React from "react";

export default function MealItem({ meal }) {
  const { name, price, description, image } = meal; // Destructure for cleaner access

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} loading="lazy" />{" "}
        {/* Added loading="lazy" */}
        <div className="meal-item-details">
          {" "}
          {/* Added a class for styling */}
          <h3>{name}</h3>
          <p className="meal-item-price">${price}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <div className="meal-item-actions">
          {" "}
          {/* Added a class for styling */}
          <button>Add to Cart</button>
        </div>
      </article>
    </li>
  );
}
