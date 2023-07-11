import React from 'react';
import "./grid.css";
import { Link } from "react-router-dom";
import Rating from './rating.js';

function Card({post}) {
    
    return (
        <li className="card" key={post.id}>
            <Link  to={`/products/${post.id}`}>
                <img className="cardImg" src={post.image} alt="product"/>
                <div className="info">
                    <span className="title">{post.title}</span>
                    <span className="price"><span className="currency">$</span>{post.price.toFixed(2)}</span>
                    <div className="ratings"><Rating rating={post.rating.rate} /> <span style={{"marginLeft": "10px" }}>{post.rating.count} sold</span></div>
                </div>
            </Link>
        </li>
    );
}

export default Card