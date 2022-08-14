import React from "react";
import { servicesApi } from "../Service/apiService";
import Product from "../Companents/Product/Product";
import { useState } from "react";
function Donate() {
 
  const { data: products } = servicesApi.useGetProductsQuery();


 
  return (
    <section>
      <div className="shop-background-image">
        <div className="shop-background-image-overlay"></div>
      </div>
      <div className="products">
        {products &&
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              count={product.count}
            />
          ))}
      </div>
    </section>
  );
}
export default Donate;
