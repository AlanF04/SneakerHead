import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css'; // Import your CSS file

const WishlistPage = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        // Fetch wishlist from backend (assuming you have an API endpoint for it)
        const fetchWishlist = async () => {
            try {
                const response = await axios.get('https://sn-backend-gq6u.onrender.com/wishlist');
                setWishlist(response.data);
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };
        fetchWishlist();
    }, []);

    return (
        
        <div className="wishlist" >
            <div className="container">
                <h1 className="lg-title">Wishlist</h1>
                <div className="product-items">
                    {wishlist.map((item, index) => (
                        <div key={index} className="product">
                            <div className="product-content">
                                <div className="product-img">
                                    <img src={item.image} alt="product" />
                                </div>
                                <div className="product-info">
                                    <a href="#" className="product-name">{item.name}</a>
                                    <p className="product-price">${item.price.toFixed(2)}</p>
                                    {item.discountedPrice && (
                                        <p className="product-price discounted">${item.discountedPrice.toFixed(2)}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WishlistPage;
