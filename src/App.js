import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Index";
import ProductDetail from "./components/ProductDetail";
import About from "./screens/about/Index";
import Contact from "./screens/contact/Index";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
