import React, { useEffect, useState } from 'react';
import './main.css'; // Import your CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import axios from 'axios';

const ProductPage2 = () => {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState(new Set());

    useEffect(() => {
        // Fetch products from the backend
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        // Fetch wishlist from the backend (if you have such an endpoint)
        const fetchWishlist = async () => {
            try {
                const response = await axios.get('http://localhost:5000/wishlist');
                const wishlistSet = new Set(response.data.map(item => item._id));
                setWishlist(wishlistSet);
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };

        fetchWishlist();
    }, []);

    const addToWishlist = async (product) => {
        if (wishlist.has(product._id)) {
            alert('Product already in wishlist!');
            return;
        }
        try {
            await axios.post('http://localhost:5000/wishlist', product);
            setWishlist(prev => new Set(prev).add(product._id));
            alert('Product added to wishlist!');
        } catch (error) {
            console.error('Error adding to wishlist:', error);
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
                                            disabled={wishlist.has(product._id)}
                                        >
                                            {wishlist.has(product._id) ? 'Added to Wishlist' : 'Add to Wishlist'} 
                                            <span><i className="fas fa-heart"></i></span>
                                        </button>
                                        <button type="button" className="btn-buy">
                                            Buy Now <span><i className="fas fa-shopping-cart"></i></span>
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
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage2;
