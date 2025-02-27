import { addToCart } from "@/redux/features/carts/cartSlice";
import { BsBag } from "react-icons/bs";
import { useDispatch } from "react-redux";

 

export default function ProductCard({ product }) {
  const { name, price, image, category } = product || {};
  //dispatch
  const dispatch = useDispatch()


  const handleAddToCart = () => {
    //cart item store in redux
    dispatch(addToCart(product))
  }



  return (
    <div className="relative flex w-full  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img className="object-cover w-full" src={image} />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {category}
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
          </p>
        </div>
        <button
    
          onClick={handleAddToCart}
          className="w-full cursor-pointer flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 gap-3"
        >
          <BsBag />
          Add to cart
        </button>
      </div>
    </div>
  );
}
