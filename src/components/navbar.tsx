import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const navbar = () => {
  return (
    <>
      <div>
        <ul className="nav justify-content-end bg-black ">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              <p>Home</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/cart">
              <ShoppingCart size={32} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default navbar;
