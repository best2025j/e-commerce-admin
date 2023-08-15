"use client";
import React, { useState } from "react";
import Layout from "./Layout";

export default function ProductFrom() {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const createProduct = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/products", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tittle, description, price }),
    });

    if (response.ok) {
      console.log("Product created successfully");
      // clear input field
      setTittle("");
      setDescription("");
      setPrice("");
    } else {
      console.log("Error creating product");
    }
  };

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New products</h1>
        <label>product name</label>
        <input
          onChange={(e) => setTittle(e.target.value)}
          value={tittle}
          type="text"
          placeholder="product name"
        />
        <label>descriptions</label>
        <textarea
          cols="30"
          rows="10"
          placeholder="descriptions "
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <label>price(in USD)</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="text"
          placeholder="price"
        />
        <button type="submit" className="btn-primary">
          save
        </button>
      </form>
    </Layout>
  );
}
