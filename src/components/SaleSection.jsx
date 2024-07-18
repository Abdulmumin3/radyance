// import "./SaleSection.css";
import Item from "./SaleItem";

const SaleSection = () => {
  const saleItems = [
    {
      imagePath: "../public/images/emerald.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 39.99,
    },
    {
      imagePath: "../public/images/emerald.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 29.99,
    },
    {
      imagePath: "../public/images/emerald.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 29.99,
    },
    {
      imagePath: "../public/images/emerald.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 29.99,
    },
    {
      imagePath: "../public/images/emerald.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 29.99,
    },
    {
      imagePath: "../public/images/emerald.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 29.99,
    },
  ];

  return (
    <section className=" relative">
      <section className="popular bg-white mb-8 relative z-10 py-8 px-12">
        <div className="mb-16">
          <div className="flex items-center ">
            <h2 className="text-3xl mr-2 font-bold">ON SALE /</h2>
            <p>Lowest Prices Today</p>
            <img
              className="w-4 mt-2"
              src="../public/images/tag.png"
              alt="tag"
            />
          </div>
          <img
            className="w-20 mb-2"
            src="../public/images/line.png"
            alt="Divider"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {saleItems.map((item, index) => (
            <Item
              key={index}
              imagePath={item.imagePath}
              title={item.title}
              text={item.text}
              price={item.price}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </section>
      <img
        className="absolute top-3/4 left-1/2 transform -translate-x-1/2 z-0"
        src="../public/images/Rect.png"
        alt="Rectangle"
      />
      <img className="mb-8" src="../public/images/Line 187.png" />
    </section>
  );
};

export default SaleSection;
