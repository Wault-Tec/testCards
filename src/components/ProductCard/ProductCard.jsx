import { useState, useRef } from 'react';
import styles from './ProductCard.module.css'

export const ProductCard = ({ product, timeBeforeShow }) => {
    const [canShow, setCanShow] = useState(false)
    const cardItem = useRef(null);

    setTimeout(() => {
        setCanShow(true)
    }, timeBeforeShow)
    const y = 0
    return (
        <div 
            className={styles.product_card} 
            style={{ 
                transform: canShow ? `translateY(${y}px)` : 'translateY(-100%)', 
                opacity: canShow ? '1' : '0',
            }}
            ref={cardItem}
        > 
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    );
  };