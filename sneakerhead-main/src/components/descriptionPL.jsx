import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDescription = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/${id}`);
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
        <div className="product-description">
            <div className="container">
                <h1 className="lg-title">{product.name}</h1>
                <div className="product-content">
                    <div className="product-img">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-info">
                        <p className="product-price">${product.price.toFixed(2)}</p>
                        {product.price !== product.discountedPrice && (
                            <p className="product-original-price">${product.discountedPrice.toFixed(2)}</p>
                        )}
                        <p className="product-description-text">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;

