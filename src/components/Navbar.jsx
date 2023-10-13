import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiStore } from 'react-icons/bi';

const Navbar = () => {
  const location = useLocation();
  const [state, setState] = useState(false);

  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact us', path: '/contact-us' },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/" className="text-white font-bold text-2xl font-sans flex flex-r">
            <span><BiStore className="text-white" size={35} /></span>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">E-Store</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-white outline-none p-2 rounded-md focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-white hover:text-indigo-600">
                  <Link to={item.path} className={location.pathname === item.path ? 'text-indigo-600' : 'text-white'}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
