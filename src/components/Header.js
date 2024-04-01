const Header = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="logo">
        <h1>Swiggy</h1>
      </div>

      <nav>
        <ul className="flex">
          <li className="mx-2">Search</li>
          <li className="mx-2">Offers</li>
          <li className="mx-2">Help</li>
          <li className="mx-2">Sign In</li>
          <li className="mx-2">Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;