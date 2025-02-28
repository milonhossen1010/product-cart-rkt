import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export default function CartBilling() {
  //cart item get form redux store
  const carts = useSelector(state => state.carts);

  // Subtotal
  const subTotal = carts.reduce((total, item) => total + item.price * item.quantity, 0);
  
  //Tax
  const tax = 4.99;

  //total billing
  const totalBillings = subTotal ? subTotal + tax : subTotal;

  
  

  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          Order summary
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Original price
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                ${subTotal}
              </dd>
            </dl>

            
 

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Tax
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                ${tax}
              </dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-bold text-gray-900 dark:text-white">
              Total
            </dt>
            <dd className="text-base font-bold text-gray-900 dark:text-white">
              ${totalBillings}
            </dd>
          </dl>
        </div>

        <a
          href="#"
          className="flex w-full items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary-300 "
        >
          Proceed to Checkout
        </a>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {' '}
            or{' '}
          </span>
          <Link
            href="/shop"
            title=""
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
          >
            Continue Shopping
           <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
