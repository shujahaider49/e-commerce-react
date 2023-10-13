import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cart from '../../components/CartDetail';
import Fade from 'react-reveal'

const Products = () => {
    const [productData, setProductData] = useState([]);
    const [cart, setCart] = useState([]);

    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProductData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, []);
    console.log(productData);
    
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(updatedCart);
      };
    
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
                <h2 className="text-center text-white text-4xl font-serif bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">Our New Collection</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {productData.map((product) => (
            <Fade bottom>
                        <div key={product.id} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                            <Link to={`/products/${product.id}`} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                                <img className=" w-full h-full hover:scale-110 duration-300" src={product.image} alt="product image"     />
                                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
                            </Link>
                            <h1 className='font-bold m-2'>{product.title}</h1>
                            <div className="mt-4 px-5 pb-5">
                                <Link to="/">
                                    <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
                                </Link>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                                    </p>
                                </div>
                                <Link to="/" onClick={() => addToCart(product)} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    </Fade>
                    ))}


                </div>
                <Fade right>
                    <Cart cart={cart} removeFromCart={removeFromCart} />
                    </Fade>
            </div>
        </div>
    )
}

export default Products