 "use client"

import { addProduct } from "@/redux/features/products/productSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function AddProduct() {
  let nameRef,
    categoryRef,
    imgRef,
    priceRef,
    dateRef = useRef();
  //Dispatch 
  const dispatch = useDispatch();

  const handleSubmit = e => {
    let name = nameRef.value;
    let category = categoryRef.value;
    let image = imgRef.value;
    let price = priceRef.value;
    let date = dateRef.value;

    const productData = {
      name,
      category,
      image,
      price,
      date,
    };

    //Product insert
    dispatch(addProduct(productData));
    
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-black">Add New Product</h2>

      <div className=" space-y-4">
        {/* name  */}
        <div>
          <label className="text-sm font-medium block text-gray-600">
            Product Name
          </label>
          <input
            ref={value => (nameRef = value)}
            type="text"
            placeholder="Product"
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Category  */}
        <div>
          <label className="text-sm font-medium block text-gray-600">
            Category
          </label>
          <select
            ref={value => (categoryRef = value)}
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
          >
            <option value="">Choose a Category</option>
            <option value="fashion">Fashion</option>
            <option value="gadgets">Gadgets</option>
            <option value="bags">Bags</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>

        {/* Product Image  */}
        <div>
          <label className="text-sm font-medium block text-gray-600">
            Product Image
          </label>
          <input
            type="text"
            ref={value => (imgRef = value)}
            placeholder="https://"
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Price and Date  */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium block text-gray-600">
              Price
            </label>
            <input
              ref={value => (priceRef = value)}
              type="number"
              placeholder="$ 00"
              className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium block text-gray-600">
              Date
            </label>
            <input
              ref={value => (dateRef = value)}
              type="date"
              className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* submit button  */}
        <button
          onClick={handleSubmit}
          className="p-3 rounded-sm w-full bg-black text-white"
        >
          Add New Product
        </button>
      </div>
    </div>
  );
}
