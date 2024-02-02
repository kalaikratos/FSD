import React from 'react';
import { useCart } from './CartContext';
import './CartPage.css'; 


const CartPage = ({ data }) => {
  const { cartItems, updateCartItem, addToCart } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 0) {
      updateCartItem(itemId, newQuantity);
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='page'>
      <h1 className="page-title">CART PAGE</h1>
     <div className='cart-container'>
     {data.map((item) => (
       <div className='container'>
           <div className="cart-item" key={item.id}>
                 <h2 className="item-title">{item.title}</h2>
            <img className="item-thumbnail" src={item.thumbnails} alt={item.title} />
          <p className="item-price">Price: ${item.price}</p>
          <p className="item-quantity">Quantity: {getItemQuantity(item.id)}</p>
          <div className="cart-item-buttons">
            <button className="quantity-btn1" onClick={() => handleQuantityChange(item.id, getItemQuantity(item.id) - 1)}>
              Decrease Quantity
            </button>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
            <button className="quantity-btn2" onClick={() => handleQuantityChange(item.id, getItemQuantity(item.id) + 1)}>
              Increase Quantity
            </button>
          </div>
        </div>
       </div>
      ))}
     </div>
      <div className="total-info">
        <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Amount: ${getTotalAmount()}</p>
      </div>
    </div>
  );
};

export default CartPage;