import React from "react";
import "./Basket.css";
import { Counter } from "../Counter/Counter";

export const Basket = (props) => {
  return (
    <div className="sectionRight">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Ваш заказ</h5>
          
          {/* cart-wrapper */}
          <div className="cart-wrapper">
            {/* cart item  */}
            {props.items.map((el) => (
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
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <p>
              <span className="h5">Доставка:</span>
              <span className="delivery-cost free"> бесплатно</span>
            </p>
            <p>
              <span className="h5">Итого:</span>
              <span className="total-price">330</span>
              <span className="rouble"> ₽</span>
            </p>
          </div>
        </div>
        <div id="order-form" className="card-body border-top">
          <h5 className="card-title">Оформить заказ</h5>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Ваш номер телефона"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Заказать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
