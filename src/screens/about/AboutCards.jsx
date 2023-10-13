import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';

const AboutCards = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then((response) => {
                setCategories(response.data);
                console.log(response.data);
            });
    }, []);

    const categoryDescriptions = {
        electronics: 'Explore the latest in cutting-edge technology and gadgets. From smartphones and laptops to smart home devices, find a wide range of electronic innovations to enhance your life.',
        jewelery: 'Adorn yourself with timeless elegance. Discover a stunning collection of jewelry, including necklaces, rings, earrings, and bracelets, crafted with precision and care.',
        "men's clothing": 'Elevate your style with a diverse selection of men\'s fashion. From casual wear to formal attire, find the perfect clothing options to suit your taste and occasion.',
        "women's clothing": 'Embrace your unique style with a range of women\'s fashion. Browse through a variety of clothing options, from dresses and tops to accessories, designed to empower and inspire.',
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
            <Fade bottom>
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Explore Our Collections</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Dive into our curated collections, each telling a unique story of style and elegance. Discover the perfect items that reflect your personality and preferences.
                    </p>
                </div>
                    </Fade>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {categories.map((category, index) => (
    <Fade bottom key={index}>
      <div className="border rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl">
        <Link to="/">
          <img
            alt="gallery"
            className="w-full h-48 object-cover object-center"
            src={`https://dummyimage.com/600x360?text=${category}`}
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold text-gray-900 mb-2">
              {category}
            </h1>
            <p className="text-gray-600">{categoryDescriptions[category]}</p>
          </div>
        </Link>
      </div>
    </Fade>
  ))}
</div>

            </div>
        </section>
    );
}

export default AboutCards;
