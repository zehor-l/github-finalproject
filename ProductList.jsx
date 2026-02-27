import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, category: 'Succulents', name: 'Aloe Vera', price: 10, image: '/images/aloe.jpg' },
  { id: 2, category: 'Succulents', name: 'Echeveria', price: 12, image: '/images/echeveria.jpg' },
  { id: 3, category: 'Foliage', name: 'Monstera', price: 25, image: '/images/monstera.jpg' },
  { id: 4, category: 'Foliage', name: 'Fiddle Leaf Fig', price: 30, image: '/images/fig.jpg' },
  { id: 5, category: 'Flowering', name: 'Orchid', price: 20, image: '/images/orchid.jpg' },
  { id: 6, category: 'Flowering', name: 'Peace Lily', price: 18, image: '/images/lily.jpg' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Plants</Link> | <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
      <h2>Our Plants</h2>
      {['Succulents','Foliage','Flowering'].map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="product-category">
            {products.filter(p => p.category === cat).map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} width="150" />
                <h4>{product.name}</h4>
                <p>${product.price}</p>
                <button 
                  onClick={() => handleAddToCart(product)}
                  disabled={cartItems.some(item => item.id === product.id)}
                >
                  {cartItems.some(item => item.id === product.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
