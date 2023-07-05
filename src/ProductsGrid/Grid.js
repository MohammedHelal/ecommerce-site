import "./grid.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.js";

function Grid() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="bt">
        <pre>
          All Items <span>&gt;</span> Page {page}
        </pre>
      </div>
      <ul className="product-grid">
        {page === 1
          ? posts.slice(0, 12).map((post) => <Card key={post.id} post={post} />)
          : posts
              .slice(12, posts.length)
              .map((post) => <Card key={post.id} post={post} />)}
      </ul>
      <div className="btn">
        {page === 1 ? (
          <button
            onClick={() => {
              setPage(1);
            }}
            disabled
          >
            1
          </button>
        ) : (
          <button
            onClick={() => {
              setPage(1);
            }}
          >
            1
          </button>
        )}
        {page === 2 ? (
          <button
            onClick={() => {
              setPage(2);
            }}
            disabled
          >
            2
          </button>
        ) : (
          <button
            onClick={() => {
              setPage(2);
            }}
          >
            2
          </button>
        )}
      </div>
    </>
  );
}

export default Grid;
