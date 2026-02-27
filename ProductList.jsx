// ProductList.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    image: "/images/snake-plant.jpg",
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 25,
    category: "Indoor",
    image: "/images/fiddle-leaf.jpg",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 20,
    category: "Indoor",
    image: "/images/peace-lily.jpg",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 10,
    category: "Succulents",
    image: "/images/aloe-vera.jpg",
  },
  {
    id: 5,
    name: "Cactus",
    price: 8,
    category: "Succulents",
    image: "/images/cactus.jpg",
  },
  {
    id: 6,
    name: "Jade Plant",
    price: 12,
    category: "Succulents",
    image: "/images/jade-plant.jpg",
  },
  {
    id: 7,
    name: "Monstera",
    price: 30,
    category: "Tropical",
    image: "/images/monstera.jpg",
  },
  {
    id: 8,
    name: "Bird of Paradise",
    price: 35,
    category: "Tropical",
    image: "/images/bird-of-paradise.jpg",
  },
  {
    id: 9,
    name: "Orchid",
    price: 20,
    category: "Tropical",
    image: "/images/orchid.jpg",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      {["Indoor", "Succulents", "Tropical"].map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="plant-category">
            {plants
              .filter((p) => p.category === category)
              .map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    disabled={cart.cartItems.find((item) => item.id === plant.id)}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {cart.cartItems.find((item) => item.id === plant.id)
                      ? "Added"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
      <div className="cart-icon">Cart Items: {cart.totalQuantity}</div>
    </div>
  );
};

export default ProductList;
