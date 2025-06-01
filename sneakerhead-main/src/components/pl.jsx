
import React from 'react';
import './main.css'; // Import your CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const ProductPage = () => {
    return (
        <div className="products">
            <div className="container">
                <h1 className="lg-title">Product Page</h1>
                <p className="text-light">
                    WE DELIVER ANYTHING YOU WANT TO YOUR DOORSTEPS 🚚
                </p>
                <div className="product-items">
                    {Array(20).fill().map((_, index) => (
                        <div key={index} className="product">
                            <div className="product-content">
                                <div className="product-img">
                                    <img src="" alt="product image" />
                                </div>
                                <div className="product-btns">
                                    <button type="button" className="btn-cart">
                                        add to cart <span><i className="fas fa-plus"></i></span>
                                    </button>
                                    <button type="button" className="btn-buy">
                                        buy now <span><i className="fas fa-shopping-cart"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <a href="#" className="product-name">sample product</a>
                                <p className="product-price">$ 150.00</p>
                                <p className="product-price">$ 133.00</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
