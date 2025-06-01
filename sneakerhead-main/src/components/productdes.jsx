import { Link } from 'react-router-dom';
import './productstyle.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function SneakerDescription() {
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://sn-backend-gq6u.onrender.com/products/${id}`);
                setProduct(response.data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching product details:', error);
                setLoading(false); // Set loading to false even if there's an error
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!product) {
        return <p>Product not found</p>;
    }


    return (
        <div className="sneaker-description-container">
            <div className="sneaker-image-section">
            <img src={product.image} alt={product.name} />
            </div>
            <div className="sneaker-details-section">
                <h1 className="sneaker-title">{product.name}</h1>
                <p className="sneaker-price"></p>
                <div className="sneaker-price">
                        <p className="product-price">${product.price.toFixed(2)}</p>
                        {product.price !== product.discountedPrice && (
                            <p className="product-original-price">${product.discountedPrice.toFixed(2)}</p>
                        )}
                        <p className="product-description-text">{product.description}</p>
                    </div>
                <p className="sneaker-description">
                    These sneakers offer a sleek design and superior comfort, featuring high-quality materials and the latest cushioning technology. Perfect for athletes and casual wear alike.
                </p>
                <div className="sneaker-size-section">
                    <label htmlFor="sneaker-size" className="size-label">Choose Size:</label>
                    <select
                        id="sneaker-size"
                        className="size-select"
                        value={selectedSize}
                        onChange={handleSizeChange}
                    >
                        <option value="" disabled>Select size</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                </div>
                <Link to ='/check'>
                <button className="buy-button">Buy Now</button>
                </Link>
            </div>
        </div>
    );
}

export default SneakerDescription;
