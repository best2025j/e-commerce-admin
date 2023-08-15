"use client";
import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function ProductFrom() {
  const router = useRouter;
  return (
    <Layout>
      <button className="btn-primary">Add new Product</button>
    </Layout>
  );
}
