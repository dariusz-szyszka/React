import React, { useEffect, useState } from "react";
import classes from "./Store.module.css";

const Store = () => {
  const [productsArray, setProductsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductsArray(json))
      .then(setIsLoading(false));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <div>
      <h2>Warehouse availability</h2>
      <p>The list of products you can order in our store</p>
      {!isLoading && (
        <input
          className={classes.search}
          type="text"
          value={search}
          placeholder="search for the product"
          autoFocus={true}
          onChange={handleSearch}
        />
      )}
      {!isLoading ? (
        productsArray
          .filter(
            (element) =>
              element.id.toString().includes(search) ||
              element.title.toLowerCase().includes(search.toLowerCase()) ||
              element.price.toString().includes(search) ||
              element.category.toLowerCase().includes(search.toLowerCase()) ||
              element.description
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              element.image.toLowerCase().includes(search.toLowerCase()) ||
              element.rating.rate.toString().includes(search) ||
              element.rating.count.toString().includes(search)
          )
          .map((element) => (
            <div key={element.id} className={classes.wrapper}>
              <div className={classes.title}>{element.title}</div>
              <div className={classes.price}>${element.price}</div>
              <div className={classes.category}>{element.category}</div>
              <div className={classes.description}>{element.description}</div>
              <div className={classes.image}>
                <a
                  className={classes.link}
                  href={element.image}
                  target="_blank"
                  rel="noreferrer"
                >
                  {element.image}
                </a>
              </div>
              <div className={classes.rating}>
                <span>rating: </span>
                {element.rating.rate}/5.0
                <span> ({element.rating.count})</span>
              </div>
            </div>
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Store;
