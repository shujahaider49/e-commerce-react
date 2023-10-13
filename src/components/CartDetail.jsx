import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const calculateTotal = () => {
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    return { subtotal, shipping, total };
  };

  const { subtotal, shipping, total } = calculateTotal();

  return (
    <div className="min-h-screen bg-gray-100 pt-20 shadow-2xl">
      <h1 className="mb-5 text-center text-2xl font-bold sm:mb-10">Cart Items</h1>
      <div className="mx-2 sm:mx-auto sm:max-w-5xl justify-center px-3 sm:px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg w-full md:w-2/3 overflow-y-auto max-h-80 sm:w-full">
          {cart.map((item) => (
            <div key={item.id} className="mb-5 rounded-lg bg-white p-3 sm:mb-6 shadow-md sm:flex sm:justify-start">
              <img src={item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
              <div className="mt-3 sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                  <p className="mt-1 text-xs text-gray-700">{item.size}</p>
                </div>
                <div className="mt-3 sm:mt-0 sm:flex sm:space-x-6 flex flex-col">
                  <p className="text-sm font-bold text-center m-3 ">{`$${item.price}`}</p>
                  <button onClick={() => removeFromCart(item)} className="cursor-pointer hover:bg-red-600 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white ">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg w-full md:w-1/3 border bg-white p-3 sm:mt-0 shadow-md">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">{`$${subtotal.toFixed(2)}`}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">{`$${shipping.toFixed(2)}`}</p>
          </div>
          <hr className="my-2 sm:my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">{`$${total.toFixed(2)} USD`}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-3 sm:mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover-bg-blue-600">Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
