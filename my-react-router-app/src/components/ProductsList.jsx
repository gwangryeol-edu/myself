import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      const data = response.data.products;
      setProducts(data);
    }
    getProducts();
  }, [products]);
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            No.{product.id} - {product.title}
          </div>
        );
      })}
    </div>
  );
}
