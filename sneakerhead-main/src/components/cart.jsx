import React from 'react'
import myImage from '../components/shoe22.png'
import myImage2 from '../components/b1_shoe.png'
import myImage3 from '../components/p3.png'
import myImage4 from '../components/p4.png'
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './cart.css'
const h1={
    display:'flex',
    width: '1000px',
    height: '143px',
    flexShrink:'0',
    color: '#000',
    fontFamily: "Just Me Again Down Here",
    fontSize: '128px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    marginLeft:'400px',
    marginTop:'50px'
}
const h2={
    display:'flex',
    width: '1000px',
    height: '143px',
    flexShrink:'0',
    color: '#000',
    fontFamily: "Just Me Again Down Here",
    fontSize: '128px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    marginLeft:'450px',
    marginTop:'50px',
}
const h3={
    display:'flex',
    marginLeft:'450px',
    marginTop:'50px',
    position:'center',
    borderRadius: '10px',
    justifyContent: 'space-between',
    fontSize: '40px',
    color:'black',
    padding: '10px',
}
const b10={
    position:'center',
    borderRadius: '10px',
    justifyContent: 'space-between',
    fontSize: '30px',
    color:'black',
    padding: '10px',
    height:'80px',
    width:'250px',
    marginLeft:'450px',
  }

function Cart(){
    return (
        <>
        <div style={{width: '1440px',height: '4000px'}}>
        <div>
            <h1 style={h1}>YOUR CART🛒</h1>
        </div>
        <div  style={{width:'50%',marginLeft:'500px'}}>
        {/*product 1*/}
        <div  className="product">
                            <div className="product-content">
                                <div className="product-img">
                                    <img src={myImage3} alt="product image" />
                                </div>
                                <div className="product-btns">
                                    <button type="button" className="btn-cart">
                                        remove <span><i className="fas fa-plus"></i></span>
                                    </button>
                                    <button type="button" className="btn-buy">
                                        add 1 more <span><i className="fas fa-shopping-cart"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <a href="#" className="product-name">sample product</a>
                                <p className="product-price">$ 150.00</p>
                                <p className="product-price">$ 133.00</p>
                            </div>
                        </div>
        <div  className="product">
                            <div className="product-content">
                                <div className="product-img">
                                    <img src={myImage4} alt="product image" />
                                </div>
                                <div className="product-btns">
                                    <button type="button" className="btn-cart">
                                        remove <span><i className="fas fa-plus"></i></span>
                                    </button>
                                    <button type="button" className="btn-buy">
                                        add 1 more <span><i className="fas fa-shopping-cart"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <a href="#" className="product-name">sample product</a>
                                <p className="product-price">$ 150.00</p>
                                <p className="product-price">$ 133.00</p>
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
                                    <button type="button" className="btn-buy">
                                        add 1 more <span><i className="fas fa-shopping-cart"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div className="product-info">
                                <a href="#" className="product-name">sample product</a>
                                <p className="product-price">$ 150.00</p>
                                <p className="product-price">$ 133.00</p>
                            </div>
                        </div>

        </div>
        <p1 style={h2}> total cost= $399</p1>
        <Link to='/Check'><button style={b10}>Buy now</button></Link>
        </div>
        </>
    )
}

export default Cart;