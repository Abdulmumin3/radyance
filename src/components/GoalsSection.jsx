// import "./GoalsSection.css";

const GoalsSection = () => {
  return (
    <section className="goals bg-white py-8 px-12">
      <div className=" mx-auto flex flex-col md:flex-row items-center">
        <img
          className="w-full md:w-1/3 rounded-lg mb-6 md:mb-0 md:mr-6"
          src="../public/images/ladies.png"
          alt="Goals Image"
        />
        <div className="md:w-2/4 text-center flex flex-col items-center ">
          <h2 className="text-3xl font-bold mb-8 text-center ">Our Goals</h2>
          <p className="mb-4 text-center ">
            At Radyance, we combine the latest trends with timeless classics
            using the finest materials. Our products go through strict quality
            checks to ensure the best fit and finish. We prioritize a seamless
            shopping experience with easy navigation, responsive customer
            service, and fast shipping.
          </p>
          <button className="bg-pink-700 flex items-center justify-center hover:bg-pink-900 text-white py-2 px-8 rounded-full">
            <span className="mr-2">Take A Virtual Tour</span>
            <img
              className="w-4 mt-2 h-4"
              src="../public/images/eye.png"
              alt="Eye Icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
