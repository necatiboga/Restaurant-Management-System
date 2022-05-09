import React from "react";
import Product from "./Product";
import { useStateValue } from "../StateProvider";

function MainRestaurant() {
  const [{ products, category }] = useStateValue();
  return (
    <div className="MainRestaurant">
      <div className="products">
        {products?.map((product) =>
          category === "all" ? (
            <Product id={product.id} item={product} />
          ) : category === product.category ? (
            <Product id={product.id} item={product} />
          ) : null
        )}
      </div>
    </div>
  );
}
export default MainRestaurant;
