// src/components/Item.js
import React from 'react';
import './styles.css';

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.image} alt={item.name} className="item-image" />
      <h3 className="item-name">{item.name}</h3>
      <p className="item-price">${item.price}</p>
      <button className="item-button">Buy Now</button>
    </div>
  );
};

export default Item;
