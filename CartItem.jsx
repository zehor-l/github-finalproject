import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from './CartSlice';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Plants</Link> | <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty.</p>}
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} width="100" />
          <h4>{item.name}</h4>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      {cartItems.length > 0 && <h3>Total Amount: ${totalPrice}</h3>}
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
};

export default CartItem;
