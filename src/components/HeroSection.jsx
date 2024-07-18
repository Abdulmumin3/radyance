const Hero = () => {
  return (
    <section className="hero relative mb-8">
      <div
        className="content px-12 py-24 flex items-center justify-between bg-cover bg-center"
        style={{ backgroundImage: "url(../public/images/bg-hero.png)" }}
      >
        <div className="hero-content max-w-4xl text-white">
          <h1 className="text-3xl mb-12">
            Be The First To Try Out
            <br />
            Our Latest Styles!
          </h1>
          <button className="shop-now rounded-3xl px-12 py-3 bg-pink-700 hover:bg-pink-800 text-white">
            Shop Now{" "}
            <img
              src="../public/images/bag.png"
              alt="Shop Icon"
              className="inline-block mt w-4 h-4 mb-1 ml-1"
            />
          </button>
        </div>
        <div className="search absolute right-12 top-8">
          <img
            src="../public/images/search.png"
            alt="Search Icon"
            className="w-12"
          />
        </div>
      </div>

      <div className="shipping flex justify-between items-center px-12 mt-4">
        <div className="flex justify-between items-center">
          <img
            src="../public/images/truck.png"
            alt="Free Shipping Icon"
            className="w-6 h-6"
          />

          <p className="ml-2">Free shipping on orders over $80</p>
        </div>
        <div className="flex justify-between items-center">
          <img
            src="../public/images/truck.png"
            alt="Free Shipping Icon"
            className="w-6 h-6"
          />

          <p className="ml-2">Free shipping on orders over $80</p>
        </div>
        <div className="flex justify-between items-center">
          <img
            src="../public/images/truck.png"
            alt="Free Shipping Icon"
            className="w-6 h-6"
          />

          <p className="ml-2">Free shipping on orders over $80</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
