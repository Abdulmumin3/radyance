const NavBar = () => {
  return (
    <nav className="flex px-12 justify-between items-center bg-white ">
      <div className="nav-left">
        <img className="" alt="Logo" src="../public/images/Logo.png" />
      </div>
      <div className="nav-center flex-grow flex justify-center">
        <a href="#about" className="mx-4 text-gray-800 font-bold">
          About Us
        </a>
        <a href="#categories" className="mx-4 text-gray-800 font-bold">
          Categories
        </a>
        <a href="#new-arrivals" className="mx-4 text-gray-800 font-bold">
          New Arrivals
        </a>
        <a href="#trending" className="mx-4 text-gray-800 font-bold">
          Trending
        </a>
      </div>
      <div className="nav-right flex">
        <img
          className="ml-4 h-6"
          alt="Icon1"
          src="../public/images/heart.png"
        />
        <img className="ml-4 h-6" alt="Icon2" src="../public/images/cart.png" />
        <img className="ml-4 h-6" alt="Icon3" src="../public/images/user.png" />
      </div>
    </nav>
  );
};

export default NavBar;
