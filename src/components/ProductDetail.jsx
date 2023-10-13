// ProductDetail.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
  
    fetchData();
  }, [productId]);
console.log(product);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                    <img className="w-full h-full" src={product.image} alt="Product Image" />
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <Link to='/' className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Go to Home </Link>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4 m-3 ">
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <div className="flex mb-4">
                    <div className="mr-4 text-2xl">
                        <span className="font-bold text-gray-700">Price:</span>
                        <span className="text-gray-600"> ${product.price}</span>
                    </div>
                    <div className='text-2xl'>
                        <span className="font-bold text-gray-700">Availability:</span>
                        <span className="text-gray-600"> In Stock</span>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700">Product Description:</span>
                    <p className="text-gray-600 text-sm mt-2">{product.description}
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>
</>
  );
};

export default ProductDetail;
