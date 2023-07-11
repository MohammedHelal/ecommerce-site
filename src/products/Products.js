import "./grid.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.js';

function Products({ url, name, rating }) {
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setPosts(res.data);
            
            let len = res.data.length;
            let x = Math.floor(len/12);
            if(len - x !== 0) x++;
            setPages(x);
        })
        .catch(error => {
            console.error(error);
        });

    }, [url]);

    //a function to display the grid of the products according to what page we are in
    function paging(){
        if(posts.length > 12){
            let arr = posts.filter(post => post.rating.rate >= rating);
            //the below code uses the current page number to calculate the list of the product array we need to display
            //  (currentPage - 1) * 12; for example: (1 - 1) * 12 = 0 and (2 - 1) * 12 = 12 and so on so 12 items will be displayed by page
            let i = (currentPage - 1) * 12;
            if(i + 12 <= posts.length){
                return arr.slice(i, i + 12).map(post => <Card key={post.id} post={post} />);
            } else {
                return arr.slice(i, posts.length).map(post => <Card key={post.id} post={post} />);
            }
        } else return posts.filter(post => post.rating.rate >= rating).map(post => <Card key={post.id} post={post} />);
    }

    //a function to display the page buttons at the end of the screen
    function btnPrint(){
        let x = [];
        for(let i = 1; i <= pages; i++){
            if(currentPage === i){
                x.push(<button key={i} disabled>{i}</button>);
            } else {
                x.push(<button key={i} onClick={() => {setCurrentPage(i)}}>{i}</button>);
            }
        }

        return x;
    }
    
    return (
        <div>
            <div className="path">
                <pre>{name} <span>&gt;</span> Page {currentPage}</pre>
            </div>
            <ul className="product-grid">
                {paging()}
            </ul>
            <div className="pageBtns">
                <p>Pages</p>
                <div>
                    {btnPrint()}
                </div>
            </div>
        </div>
    )
}

export default Products;