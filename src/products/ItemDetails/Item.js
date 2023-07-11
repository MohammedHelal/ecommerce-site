import './item.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Rating from '../rating.js';

function Item({addCart}) {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    const [rating, setRating] = useState(0);
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);
    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            setItem(res.data);
            setRating(res.data.rating.rate);
            setCount(res.data.rating.count);
            setPrice(res.data.price.toFixed(2));
        })
        .catch(error => {
            console.error(error);
        });
    }, [id, item]);

  return (
    <div className="item">
        <div className="buyBtn" style={{"gridColumn": "1/3", backgroundColor: "lightgrey", padding: 0, margin: 0}}>
                <Link to="/"><button style={{marginLeft: "0", width: "250px", height: "55px"}}><i className="fa fa-arrow-left" aria-hidden="true"></i> Back to products</button></Link>
            </div>
        <div className="itemImg">
            <img src={item.image} alt="item"/>
        </div>
        <div className="details">
            <div className="itemsInfo">
                <h1>{item.title}</h1>
                <div id="space"></div>
                <div className="ratings">
                    <div className="box" style={{paddingLeft: "0"}}>
                        <h4>Rating: <span style={{padding: "0 10px"}}></span></h4>
                        <Rating rating={rating} />
                    </div>
                    <div className="box">
                        <h4>Units sold: <span style={{fontWeight: "normal"}}>{count}</span></h4>
                    </div>
                </div>
                <div className="itemPrice">
                    <h3>Price: $ {price}</h3>
                </div>
                <div className="description">
                    <h3>Description: </h3>
                    <p>{item.description}</p>
                </div>
            </div>
            <div className="buyBtn">
                <button className="itemBtns" onClick={() => addCart(item)} style={{marginLeft: 0, width: "200px"}}><i className="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
                <Link to="/cart"><button className="itemBtns" onClick={() => addCart(item)}>Buy</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Item