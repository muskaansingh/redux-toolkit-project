import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyStore</div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Products</a>
      </nav>
      <AddToCart />
    </header>
  );
};

export default Header;
