import React, { useEffect, useState } from 'react';
import './main2.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('https://sn-backend-gq6u.onrender.com/cart');
                setCartItems(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const removeFromCart = async (id) => {
        try {
            await axios.delete(`https://sn-backend-gq6u.onrender.com/cart/${id}`);
            setCartItems(cartItems.filter(item => item._id !== id));
            alert('Product removed from cart!');
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    };

    return (
        <div className="cart">
            <div className="container">
                <h1 className="lg-title">Your Cart</h1>
                <div className="cart-items">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item._id} className="cart-item">
                                <div className="cart-item-content">
                                    <div className="cart-item-img" >
                                        <img src={item.image} alt={item.name}  style={{height:'300px',width:'300px'}}/>
                                    </div>
                                    <div className="cart-item-info">
                                        <p className="cart-item-name">{item.name}</p>
                                        <p className="cart-item-price">${item.discountedPrice.toFixed(2)}</p>
                                        <button 
                                            className="btn-remove"
                                            onClick={() => removeFromCart(item._id)}
                                        >
                                            Remove <span><i className="fas fa-trash"></i></span>
                                        </button>
                                        <Link to ='/check'><button  style={{width:'100px'}}>Buy</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartPage;
