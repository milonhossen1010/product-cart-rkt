import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/redux/features/carts/cartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
  const { id, name, price, category, quantity, image } = item || {};

  // dispatch
  const dispatch = useDispatch()

  // Increase Quantity
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(id))
    
  }

  //Decrease Quatity
  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(id));
  }

  //Remove From Cart
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };
 
  return (
    <div
      className={`rounded-lg border border-gray-200  p-4 shadow-sm  md:p-6  bg-white`}
    >
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <a href="#" className="shrink-0 md:order-1">
          <img className="h-20 w-20" src={image} alt="imac image" />
        </a>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              onClick={handleDecreaseQuantity}
              type="button"
              id="decrement-button"
              data-input-counter-decrement="counter-input"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
            >
              -
            </button>
            <p className="w-8 text-center">{quantity} </p>
            <button
              onClick={handleIncreaseQuantity}
              type="button"
              id="increment-button"
              data-input-counter-increment="counter-input"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
            >
              +
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 ">${price*quantity}</p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:underline "
          >
            {name}
          </a>

          <div className=" ">
            <p>Category: {category}</p>
            <button
              onClick={handleRemoveFromCart}
              type="button"
              className="inline-flex cursor-pointer items-center text-sm font-medium text-red-600 hover:underline "
            >
              X Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}