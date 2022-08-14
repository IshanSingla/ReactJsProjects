import React from "react";
import BigGrid from "./BigGrid";
import MainHeader from "./MainHeader";
import ProductDelail from "./ProductDelail";
import ShopGrids from "./ShopGrids";

export default function index() {
  return (
    <main>
      <MainHeader />
      <ShopGrids />
      <ProductDelail />
      <BigGrid />
      <br/>
      <br/>
      <br/>
      <br/>
    </main>
  );
}
