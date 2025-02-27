"use client"
import Link from 'next/link';
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const NavItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Shop',
    link: '/shop',
  },
];
const logo = 'Ecom';
export default function Header() {
  //carts item get from redux store
  const carts = useSelector(state => state.carts)

  //cart item count by js reduce method
  const cartItemNo = carts.reduce((total, product) => total + product.quantity, 0)


  return (
    <header className=" bg-sky-500 text-white py-5">
      {/* Container Box  */}
      <div className="flex justify-between container mx-auto items-center">
        {/* Logo  */}
        <div className="text-3xl uppercase font-bold ">
          <Link href="/">{logo}</Link>
        </div>
        {/* Nav Link  */}
        <div className="flex gap-4 items-center">
          {NavItems.map((item, index) => (
            <Link
              className="text-md font-bold tracking-wider uppercase hover:text-amber-300 transition duration-100"
              href={item.link}
              key={index}
            >
              {item.name}
            </Link>
          ))}
          <Link className="text-xl relative" href="cart">
            <BsBag />
            <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-5 -end-5 dark:border-gray-900">
               
              {cartItemNo}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
