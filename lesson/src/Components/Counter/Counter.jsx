import React, { useState } from "react";
import "./Counter.css";

export const Counter = (props) => {
  let [value, setValue] = useState(1);
  let [price, setPrice] = useState(props.priceCurrency);

  const changePrice = () => {
    setPrice(value * parseInt(props.priceCurrency)); 
  };

  const increase = () => {
    setValue(value + 1);
    setPrice((value + 1) * parseInt(props.priceCurrency)); 
  };

  const decrease = () => {
    if (value > 1) {
      setValue(value - 1);
      setPrice((value - 1) * parseInt(props.priceCurrency)); 
    }
  };

  return (
    <div className="details-wrapper">
      <div className="items counter-wrapper">
        <div className="items__control" data-action="minus" onClick={decrease}>
          -
        </div>
        <div className="items__current" data-counter>
          {value}
        </div>
        <div className="items__control" data-action="plus" onClick={increase}>
          +
        </div>
      </div>
      {/*  price */}
      <div className="price">
        <div className="price__weight">{props.priceWeight}</div>
        <div className="price__currency" onClick={changePrice}>
          {price} ₽
        </div>
      </div>
    </div>
  );
};
