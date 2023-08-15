import clientPromise from "@/lib/mongodb";
import Products from "@/models/products";

clientPromise();

export default async (res, req) => {
  const { method } = req;
  if (method === "POST") {
    try {
      const { tittle, description, price } = req.body;
      const newProduct = new Products({ tittle, description, price });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: "error creating product" });
    }
  }
};
