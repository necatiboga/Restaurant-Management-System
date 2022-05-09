import React from "react";
import "./Main.css";
import Product from "./Product";
import { useStateValue } from "../StateProvider";
import Restaurant from "./Restaurant";

function Main() {
  const [{ products, category }] = useStateValue();
  return (
    <div className="main">
      <div className="products">
        <Restaurant />
      </div>
    </div>
  );
}
export default Main;
