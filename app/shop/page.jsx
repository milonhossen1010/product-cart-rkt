'use client';
import ProductCard from '@/conponents/products/ProductCard';
import { useSelector } from 'react-redux';

export default function Shop() {
  const products = useSelector(state => state.products);

  return (
    <div className="py-14">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.length ? (
            products.map((product, index) => <ProductCard key={index} product={product} />)
          ) : (
            <p>No Product found</p>
          )}
        </div>
      </div>
    </div>
  );
}
