import React from 'react';
import "./grid.css";

function Card({post}) {
    
    //functions to convert ratings from number into an array of 5 numbers to be represented as stars.
    function ratingArr(starAverage){
        
        const fullStars = Math.floor(starAverage);
        const starArr = [];

        for(let i = 1; i <= fullStars; i++){
            starArr.push(1);
        }

        if(starAverage < 5) {
            if(starAverage - fullStars >= 0.5){
                starArr.push(0.5);
            } else starArr.push(0);

            const emptyStars = 5 - starArr.length;

            for(let i=1; i<=emptyStars; i++) {
                starArr.push(0);
            }
        }
        
        return starArr;
    };

    let arr = ratingArr(post.rating.rate);

    let something = arr.map((val, i) => {
            if(val === 1){
                return  <div key={i} className="starBox">
                            <i className="fa fa-star" style={{color: "goldenrod"}} aria-hidden="true"></i>
                        </div>
            } else if(val === 0) {
                return  <div key={i} className="starBox">
                            <i className="fa fa-star-o" style={{color: "goldenrod"}} aria-hidden="true"></i>
                        </div>
            } else {
                return  <div key={i} className="starBox">
                            <i className="fa fa-star-half-o" style={{color: "goldenrod"}} aria-hidden="true"></i>
                        </div>
            } 
        });
    
    return (
        <li className="card" key={post.id}>
            <img src={post.image} alt="product"/>
            <div className="info">
                <span className="title">{post.title}</span>
                <span className="price"><span className="currency">$</span>{post.price.toFixed(2)}</span>
                <div className="fl">{something} <span style={{"marginLeft": "10px" }}>{post.rating.count} sold</span></div>
            </div>
        </li>
    );
}

export default Card