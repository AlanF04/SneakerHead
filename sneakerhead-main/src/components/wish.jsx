import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './des.css'; // Import your CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const WishlistPage3 = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
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

    const removeFromWishlist = async (id) => {
        try {
            await axios.delete(`https://sn-backend-gq6u.onrender.com/wishlist/${id}`);
            setWishlist(wishlist.filter(product => product._id !== id));
            alert('Product removed from wishlist!');
        } catch (error) {
            console.error('Error removing from wishlist:', error);
        }
    };

    return (
        <div className="wishlist">
            <div className="container">
                <h1 className="lg-title">Wishlist</h1>
                <div className="product-items">
                    {wishlist.length > 0 ? (
                        wishlist.map((product) => (
                            <div key={product._id} className="product">
                                <div className="product-content">
                                    <div className="product-img">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className="product-btns">
                                        <button type="button" className="btn-remove" onClick={() => removeFromWishlist(product._id)}>
                                            remove <span><i className="fas fa-trash"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <a href="#" className="product-name">{product.name}</a>
                                    <p className="product-price">${product.price.toFixed(2)}</p>
                                    {product.price !== product.discountedPrice && (
                                        <p className="product-original-price">${product.discountedPrice.toFixed(2)}</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Your wishlist is empty</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WishlistPage3;
