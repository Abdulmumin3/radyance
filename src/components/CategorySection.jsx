// import "./CategorySection.css";
import Item from "./CategoryItem";

const CategorySection = () => {
  const categoryItems = [
    {
      imagePath: "../public/images/gown3.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 29.99,
    },
    {
      imagePath: "../public/images/gown3.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 29.99,
    },
    {
      imagePath: "../public/images/gown3.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 29.99,
    },
    {
      imagePath: "../public/images/gown3.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 29.99,
    },
    {
      imagePath: "../public/images/gown3.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 29.99,
    },
    {
      imagePath: "../public/images/gown3.png",
      title: "Emerald Green Women's Wrap Blouse",
      text: "UK 8-16",
      originalPrice: 57.99,
      price: 29.99,
    },
  ];

  return (
    <>
      <section className="popular bg-white mb-8 relative z-10 py-8 px-12">
        <div className="mb-16">
          <div className="flex items-center ">
            <h2 className="text-3xl mr-2 font-bold">Category 4 /</h2>
            <p>Extra Description</p>
          </div>
          <img
            className="w-20 mb-2"
            src="../public/images/line.png"
            alt="Divider"
          />
          <p className="text-right font-bold -mt-8">Swipe &gt;</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categoryItems.map((item, index) => (
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
      <img className="mb-8" src="../public/images/Line 187.png" />
    </>
  );
};

export default CategorySection;
