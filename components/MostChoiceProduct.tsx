"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  }
  

function MostChoiceProduct() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0,6));
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!products) return <p>There is no data available</p>;

  return (
    <div>
      <h2 className="font-medium text-sm p-1 text-center">
        All the recent best liked product
      </h2>
      
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
}

export default MostChoiceProduct;
