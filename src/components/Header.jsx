import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyStore</div>
      <nav className="nav">
        <Link to="/">Home</Link>
      </nav>
      <AddToCart />
    </header>
  );
};

export default Header;
