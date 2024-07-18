// import "./PopularSection.css";
import PopularItem from "./PopularItem";

const PopularSection = () => {
  const popularItems = [
    {
      imagePath: "../public/images/gown-2.png",
      title: "Black Velvet Women's Flowery Gown",
      text: "(Available in Sizes 8 - 16)",
      price: 37.99,
    },
    {
      imagePath: "../public/images/gown-2.png",
      title: "Black Velvet Women's Flowery Gown",
      text: "(Available in Sizes 8 - 16)",
      price: 29.99,
    },
    {
      imagePath: "../public/images/gown-2.png",
      title: "Black Velvet Women's Flowery Gown",
      text: "(Available in Sizes 8 - 16)",
      price: 29.99,
    },
    {
      imagePath: "../public/images/gown-2.png",
      title: "Black Velvet Women's Flowery Gown",
      text: "(Available in Sizes 8 - 16)",
      price: 29.99,
    },
    {
      imagePath: "../public/images/gown-2.png",
      title: "Black Velvet Women's Flowery Gown",
      text: "(Available in Sizes 8 - 16)",
      price: 29.99,
    },
    {
      imagePath: "../public/images/gown-2.png",
      title: "Black Velvet Women's Flowery Gown",
      text: "(Available in Sizes 8 - 16)",
      price: 29.99,
    },
  ];

  return (
    <>
      <section className="popular bg-white mb-8 py-8 px-12">
        <div className="mb-16">
          <div className="flex items-center ">
            <h2 className="text-3xl mr-2 font-bold">POPULAR /</h2>
            <p>This Week</p>
          </div>
          <img
            className="w-20 mb-2"
            src="../public/images/line.png"
            alt="Divider"
          />
          <p className="text-right font-bold -mt-12">Swipe &gt;</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {popularItems.map((item, index) => (
            <PopularItem
              key={index}
              imagePath={item.imagePath}
              title={item.title}
              text={item.text}
              price={item.price}
            />
          ))}
        </div>
      </section>
      <img className="mb-8" src="../public/images/Line 187.png" />
    </>
  );
};

export default PopularSection;
