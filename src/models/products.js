import React from "react";

export default function Products() {
  const mongooose = require("mongodb");

  const productSchema = new mongooose.Schema({
    title: String,
    description: String,
    price: Number,
  });

  const Products = mongooose.models("Products", productSchema);
  //   return <div>products</div>;
}
