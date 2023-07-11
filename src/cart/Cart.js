import React from 'react';
import "./cart.css";
import { Link } from "react-router-dom";

function Cart({ deleteItem, item, total }) {

    function calculateTotal(){
        let total = 0;
        item.map(e => total += e.price);

        return total.toFixed(2);
    }

    let tots = calculateTotal();

    return (
        <div className="cartGrid">
            <div className="buyBtn" style={{"gridColumn": "1/3"}}>
                <Link to="/"><button style={{marginLeft: "0", width: "250px"}}><i className="fa fa-arrow-left" aria-hidden="true"></i> Back to products</button></Link>
            </div>
            <div className="cartItemsList">
                <h1>Shopping Bag</h1>
                <hr />
                <ul>
                    {item.map((e, i) =>
                    <li key={i}>
                        <div className="cartItemGrid">
                            <div className="cartImg">
                                <img src={e.image} width="100" height="100" alt="item"/>
                            </div>
                            <div className="cartImg">
                                <h3>{e.title}</h3>
                                <p>Price: $ {e.price.toFixed(2)}</p>
                            </div>
                            <div className="buyBtn" style={{display: "flex", justifyContent: "flex-end"}}>
                                <button onClick={() => deleteItem(e.id)}><i className="fa fa-trash-o" aria-hidden="true" ></i></button>
                            </div>
                        </div>
                    </li>)}
                </ul>
            </div>
            <div className="total">
                <div className="totalFlex">
                    <div className="totalGrid">
                        <h2>Subtotal</h2>
                        <h2 className="totalnum">${tots}</h2>
                        <p>Shipping</p>
                        <p className="totalnum">$0.00</p>
                        <p>Taxes</p>
                        <p className="totalnum">$0.00</p>
                        <hr style={{gridColumn: "1/3", width: "100%"}}/>
                        <h3>Total</h3>
                        <h3 className="totalnum">${tots}</h3>
                    </div>
                    <div className="buyBtn">
                        <button style={{width: "80%", margin: "0 auto"}}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart