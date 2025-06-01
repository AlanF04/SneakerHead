import React, { useEffect, useState } from 'react';
import './main.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductPage3 = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://sn-backend-gq6u.onrender.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const addToWishlist = async (product) => {
        try {
            await axios.post('https://sn-backend-gq6u.onrender.com/wishlist', product);
            alert('Product added to wishlist!');
        } catch (error) {
            console.error('Error adding to wishlist:', error);
        }
    };
    const addToCart = async (product) => {
        try {
            await axios.post('https://sn-backend-gq6u.onrender.com/cart', product);
            alert('Product added to cart!');
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };
    

    return (
        <div className="products">
            <div className="container">
                <h1 className="lg-title">Product Page</h1>
                <p className="text-light">
                    WE DELIVER ANYTHING YOU WANT TO YOUR DOORSTEPS 🚚
                </p>
                <div className="product-items">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="product">
                                <div className="product-content">
                                    <div className="product-img">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className="product-btns">
                                        <button
                                            type="button"
                                            className="btn-cart"
                                            onClick={() => addToWishlist(product)}
                                        >
                                            add to wishlist 
                                        </button>
                                        <button type="button" className="btn-cart" onClick={() => addToCart(product)}>
                                         add to cart <span><i className="fas fa-plus"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <Link to={`/products/${product._id}`} className="product-name">
                                        {product.name}
                                    </Link>
                                    <p className="product-price">${product.price.toFixed(2)}</p>
                                    {product.price !== product.discountedPrice && (
                                        <p className="product-original-price">${product.discountedPrice.toFixed(2)}</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage3;
