"use client"
import CartBilling from '@/conponents/carts/CartBilling';
import CartItem from '@/conponents/carts/CartItem';
import { useSelector } from 'react-redux';


export default function Cart() {
  const carts = useSelector(state => state.carts);
  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {/* Cart Item list */}
              {carts.length ? (
                carts.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))
              ) : <p>No Product in Your Cart !!!</p>}
              
            </div>
          </div>

          {/* Billing part */}
          <CartBilling />
        </div>
      </div>
    </section>
  );
}
