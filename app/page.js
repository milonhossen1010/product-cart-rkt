"use client"
import AddProduct from "@/conponents/products/AddProduct";
import ProductCard from "@/conponents/products/ProductCard";
import { useSelector } from "react-redux";
 

export default function Home() {
  const products = useSelector((state) => state.products);
 
  return (
    <div className="py-14">
      <div className="container mx-auto grid grid-cols-3 gap-12">
        {/* Products listing  */}
        <div className="grid md:grid-cols-3 gap-6 col-span-2">
          {products.length ? (
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <p>No Product found</p>
          )}
        </div> 

        {/* Add Product  */}
        <div>
          <AddProduct />
        </div>
      </div>
    </div>
  );
}
