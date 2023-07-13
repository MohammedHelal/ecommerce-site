import "./filter.css";
import React, { useState } from "react";
import Media from "react-media";

function Filter({ changeUrl, changeName, rating }) {
  const [toggleHide, setToggleHide] = useState(true);

  function categoryClick(e) {
    changeUrl(e.target.id);
    changeName(e.target.id);
  }

  function hideFilter() {
    if (toggleHide) {
      document.getElementById("filterGroup1").style.display = "none";
      document.getElementById("filterGroup2").style.display = "none";

      setToggleHide(!toggleHide);
    } else {
      document.getElementById("filterGroup1").style.display = "block";
      document.getElementById("filterGroup2").style.display = "block";

      setToggleHide(!toggleHide);
    }
  }

  return (
    <div className="filter-menu">
      <h3 id="filter-title">
        <Media
          queries={{
            small: "(max-width: 720px)",
            large: "(min-width: 720px)",
          }}
        >
          {(matches) => (
            <>
              {matches.small && (
                <button onClick={hideFilter}>
                  <i className="fa fa-filter" aria-hidden="true"></i>
                </button>
              )}
              {matches.large && (
                <i className="fa fa-filter" aria-hidden="true"></i>
              )}
            </>
          )}
        </Media>{" "}
        Filter List
      </h3>
      <div id="filterGroup1" className="group">
        <h4>Category</h4>
        <form>
          <label htmlFor="all">
            <input
              type="radio"
              id="all"
              value="All Items"
              name="category"
              onClick={categoryClick}
            />
            All Items
          </label>
          <label htmlFor="electronics">
            <input
              type="radio"
              id="electronics"
              value="Electronics"
              name="category"
              onClick={categoryClick}
            />
            Electronics
          </label>
          <label htmlFor="jewelery">
            <input
              type="radio"
              id="jewelery"
              value="Jewelery"
              name="category"
              onClick={categoryClick}
            />
            Jewelery
          </label>
          <label htmlFor="mens">
            <input
              type="radio"
              id="mens"
              value="Men's clothing"
              name="category"
              onClick={categoryClick}
            />
            Men's clothing
          </label>
          <label htmlFor="womens">
            <input
              type="radio"
              id="womens"
              value="Women's clothing"
              name="category"
              onClick={categoryClick}
            />
            Women's clothing
          </label>
        </form>
      </div>
      <div id="filterGroup2" className="group second">
        <h4>Rating</h4>
        <form>
          <label htmlFor="five">
            <input
              type="radio"
              id="five"
              name="rating"
              onClick={() => rating(5)}
            />
            5
          </label>
          <label htmlFor="four">
            <input
              type="radio"
              id="four"
              name="rating"
              onClick={() => rating(4)}
            />
            4 and up
          </label>
          <label htmlFor="three">
            <input
              type="radio"
              id="three"
              name="rating"
              onClick={() => rating(3)}
            />
            3 and up
          </label>
          <label htmlFor="two">
            <input
              type="radio"
              id="two"
              name="rating"
              onClick={() => rating(2)}
            />
            2 and up
          </label>
          <label htmlFor="one">
            <input
              type="radio"
              id="one"
              name="rating"
              onClick={() => rating(1)}
            />
            1 and up
          </label>
          <label htmlFor="zero">
            <input
              type="radio"
              id="zero"
              name="rating"
              onClick={() => rating(0)}
            />
            0 and up
          </label>
        </form>
      </div>
    </div>
  );
}

export default Filter;
