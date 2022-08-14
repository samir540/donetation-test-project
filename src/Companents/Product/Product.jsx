import React, { useState } from "react";
import { servicesApi } from "../../Service/apiService";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Service/cartSlice";

function Product({ product }) {
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);
  const selectedProduct = cart.filter((item) => item.id === product.id);
  const dispatch = useDispatch();

  const decreaseItem = (productId) => {
    dispatch(decrement(productId));
  };

  const increaseItem = (productId) => {
    dispatch(increment(productId));
  };

  return (
    <div className="product">
      <div className="product-content">
        <div className="product-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-items">
          <h3>{product.name}</h3>
          <h4>{product.price} AZN</h4>
          <div className="product-items-buttons">
            <button onClick={() => decreaseItem(product.id)} className="sell">
              -
            </button>

            {selectedProduct?.map((product) => (
              <button className="count" key={product.id}>
                {product.count ? product.count:0}
              </button>
            ))}

            <button onClick={() => increaseItem(product.id)} className="buy">
              +
            </button>
          </div>
          <div className="button">Səbətə Əlavə Et</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
