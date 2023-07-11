import "./filter.css";
import React from 'react';


function Filter({ changeUrl, changeName, rating }) {

    function categoryClick(e){
        changeUrl(e.target.id);
        changeName(e.target.id);
    }

  return (
    <div className="filter-menu">
        <h3><i className="fa fa-filter" aria-hidden="true"></i> Filter List</h3>
        <div className="group">
            <form>
                <h4>Category</h4>
                <label htmlFor="all">
                    <input type="radio" id="all" value="All Items" name="category" onClick={categoryClick} />
                    All Items
                </label>
                <label htmlFor="electronics">
                    <input type="radio" id="electronics" value="Electronics" name="category" onClick={categoryClick} />
                    Electronics
                </label>
                <label htmlFor="jewelery">
                    <input type="radio" id="jewelery" value="Jewelery" name="category" onClick={categoryClick} />
                    Jewelery
                </label>
                <label htmlFor="mens">
                    <input type="radio" id="mens" value="Men's clothing" name="category" onClick={categoryClick} />
                    Men's clothing
                </label>
                <label htmlFor="womens">
                    <input type="radio" id="womens" value="Women's clothing" name="category" onClick={categoryClick} />
                    Women's clothing
                </label>
            </form>
        </div>
        <div className="group">
            <form>
                <h4>Rating</h4>
                <label htmlFor="five">
                    <input type="radio" id="five" name="rating" onClick={() => rating(5)} />
                    5
                </label>
                <label htmlFor="four">
                    <input type="radio" id="four" name="rating" onClick={() => rating(4)} />
                    4 and up
                </label>
                <label htmlFor="three">
                    <input type="radio" id="three" name="rating" onClick={() => rating(3)} />
                    3 and up
                </label>
                <label htmlFor="two">
                    <input type="radio" id="two" name="rating" onClick={() => rating(2)} />
                    2 and up
                </label>
                <label htmlFor="one">
                    <input type="radio" id="one" name="rating" onClick={() => rating(1)} />
                    1 and up
                </label>
                <label htmlFor="zero">
                    <input type="radio" id="zero" name="rating" onClick={() => rating(0)} />
                    0 and up
                </label>
            </form>
        </div>
    </div>
  )
}

export default Filter