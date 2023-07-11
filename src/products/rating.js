import React from 'react'

function Rating({ rating }) {
    let arr = ratingArr(rating);

    return arr.map((val, i) => {
        if(val === 1){
            return  <div key={i} className="star">
                        <i className="fa fa-star" style={{color: "goldenrod"}} aria-hidden="true"></i>
                    </div>
        } else if(val === 0) {
            return  <div key={i} className="star">
                        <i className="fa fa-star-o" style={{color: "goldenrod"}} aria-hidden="true"></i>
                    </div>
        } else {
            return  <div key={i} className="star">
                        <i className="fa fa-star-half-o" style={{color: "goldenrod"}} aria-hidden="true"></i>
                    </div>
        } 
    });
}

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



export default Rating;