const Featured = () => {
  return (
    <>
      <section className="bg-white mb-8 font-black py-8 px-12">
        <div className="flex items-center ">
          <h2 className="text-3xl mr-2 font-bold">Featured</h2>
          <img
            className="w-16 mt-4"
            src="../public/images/stars.png"
            alt="Stars"
          />
        </div>
        <img
          className="w-24 mb-2"
          src="../public/images/line.png"
          alt="Divider"
        />

        <div className="max-w-4xl mt-4 mx-auto grid gap-6 sm:grid-cols-2">
          <div className="max-w-xs mx-auto flex flex-col items-center">
            <img
              className="w-48"
              src="../public/images/gown.png"
              alt="Featured Item 1"
            />
            <p className="text-sm mt-2 text-center">
              4 Sizes || Pink Chiffon Skirt
            </p>
            <p className="text-red-600 font-semibold">Shimmery Textured</p>
          </div>
          <div className="max-w-xs mx-auto flex flex-col items-center">
            <img
              className="w-48"
              src="../public/images/gown.png"
              alt="Featured Item 2"
            />
            <p className="text-sm mt-2 text-center">
              4 Sizes || Pink Chiffon Skirt
            </p>
            <p className="text-red-600 font-semibold">Shimmery Textured</p>
          </div>
        </div>
      </section>

      <img className="mb-8" src="../public/images/Line 187.png" />
    </>
  );
};

export default Featured;
