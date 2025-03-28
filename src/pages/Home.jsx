import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart } = useStore();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
            {/* Improved Image Container */}
            <div className="h-48 w-full mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="max-h-full max-w-full object-scale-down p-4"
              />
            </div>
            <p className="text-sm text-gray-500">{product.category}</p>{" "}
            {/* Category added */}
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-4">
              {product.description.substring(0, 60)}...
            </p>{" "}
            {/* Short Description */}
            <p className="text-gray-800 font-bold text-lg">${product.price}</p>
            {/* Rating */}
            <div className="flex items-center text-sm text-yellow-500 mt-2">
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </div>
            {/* Cart Button */}
            {cart.some((item) => item.id === product.id) ? (
              <Link
                to="/cart"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
              >
                View Cart
              </Link>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
