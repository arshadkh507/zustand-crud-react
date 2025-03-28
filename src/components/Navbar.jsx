import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          FakeStore
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/cart" className="hover:text-blue-200">
            Cart
          </Link>
          <Link to="/checkout" className="hover:text-blue-200">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
