import { ProductCard } from "../ProductCard/ProductCard";
import React, { useState, useEffect } from "react";
import styles from './ProductsList.module.css'

export const ProductsList = ({ products }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const timeBeforeShow = 200;

    // useEffect(() => {
    //   setIsVisible(true);
    //   const intervalId = setInterval(() => {
    //     setCurrentProductIndex((currentIndex) =>
    //       currentIndex === products.length - 1 ? 0 : currentIndex + 1
    //     );
    //     setIsVisible(false);
    //     setTimeout(() => setIsVisible(true), 3000);
    //   }, 1000);
  
    //   return () => clearInterval(intervalId);
    // }, [products.length]);

    return (
      <div className={styles.products_list}>
        {products.map((product, index) => (
          <div
            key={product.id}
            style={{ zIndex: products.length - index}}
          >
            <ProductCard timeBeforeShow={timeBeforeShow + (index * timeBeforeShow)} product={product} />
          </div>
        ))}
      </div>
    );
  };