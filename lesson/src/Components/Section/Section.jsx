// import React from "react";
import "./Section.css";
import { Counter } from "../Counter/Counter";
import { Button } from "../Button/Button";
import { Basket } from "../Basket/Basket";
import React, { useState } from "react";
// const [addItem, setAddItem] = useState(0);

export const Section = (props) => {
  const [itemBasket, setItemBasket] = useState([]);
// function add() {}
function forBasket(product) {
  setItemBasket((prev) => [
    ...prev,
    {
      id: product.id,
      image: product.image,
      title: product.title,
      priceWeight: product.priceWeight,
      priceCurrency: product.priceCurrency,
    },
  ]);
}
  return (
    <section>
      <div className="section">
        <div className="sectionLeft">
          {props.data.map((el) => {
            return (
              <div className="col-md-6" key={el.id}>
                <div className="card mb-4">
                  <img className="product-img" src={el.image} alt="" />
                  <div className="card-body text-center">
                    <h4 className="item-title">{el.title}</h4>
                    <p>
                      <small data-items-in-box className="text-muted">
                        {el.quantity}
                      </small>
                    </p>
                    <Counter
                      priceWeight={el.priceWeight}
                      priceCurrency={el.priceCurrency}
                    />
                    <Button
                      onClick={() => {
                        forBasket(el);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Basket items={itemBasket} />
      </div>
    </section>
  );
};
