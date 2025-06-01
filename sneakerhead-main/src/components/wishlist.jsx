
import React from 'react';
import './main.css'; // Import your CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import myImage from '../components/shoe22.png'
import myImage2 from '../components/b1_shoe.png'
import myImage3 from '../components/p3.png'
import myImage4 from '../components/p4.png'
import { Helmet } from 'react-helmet'


const Wish = () => {
    return (
        <div className="products">
            <div className="container">
                <h1 className="lg-title">WishList</h1>
                <p className="text-light">
                </p>
        {/*product 1*/}
        <div  className="product">
                            <div className="product-content">
                                <div className="product-img">
                                    <img src={myImage4} alt="product image" />
                                </div>
                                <div className="product-btns">
                                    <button type="button" className="btn-cart">
                                        remove <span><i className="fas fa-plus"></i></span>
                                    </button>
                                </div>
                                </div>
                        </div>
                        <div  className="product">
                            <div className="product-content">
                                <div className="product-img">
                                    <img src={myImage} alt="product image" />
                                </div>
                                <div className="product-btns">
                                    <button type="button" className="btn-cart">
                                        remove <span><i className="fas fa-plus"></i></span>
                                    </button>
                                </div>
                                </div>
                        </div>
                        <div  className="product">
                            <div className="product-content">
                                <div className="product-img">
                                    <img src={myImage3} alt="product image" />
                                </div>
                                <div className="product-btns">
                                    <button type="button" className="btn-cart">
                                        remove <span><i className="fas fa-plus"></i></span>
                                    </button>
                                </div>
                                </div>
                        </div>
                </div>
            </div>
    );
};

export default Wish;
