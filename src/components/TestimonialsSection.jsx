import Testimonial from "./TestimonialItem";

const TestimonialsSection = () => {
  const testimonials = [
    {
      imagePath: "../public/images/lady.png",
      name: "Olivia M.",
      quote:
        "I had a question about sizing, and the customer service team was incredibly helpful. They guided me through the process and ensured I got the right size. Very satisfied!",
    },
    {
      imagePath: "../public/images/lady.png",
      name: "Dami O.",
      quote:
        "Radyance has become my go-to for trendy pieces. Their prices are reasonable, and the quality is excellent. I love their selection!",
    },
    {
      imagePath: "../public/images/lady.png",
      name: "Olivia M.",
      quote:
        "I had a question about sizing, and the customer service team was incredibly helpful. They guided me through the process and ensured I got the right size. Very satisfied!",
    },
  ];

  return (
    <section className="bg-pink-700 -mt-8 py-8 px-12">
      <div className="flex items-center mb-8">
        <h2 className="text-3xl mr-2 text-white font-bold">
          Hear From Our Customers
        </h2>
        <img
          className="w-4 h-4 mb-4"
          src="../public/images/quote.png"
          alt="Quote Icon"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            imagePath={testimonial.imagePath}
            name={testimonial.name}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
