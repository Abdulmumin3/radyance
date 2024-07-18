import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import PopularSection from "./components/PopularSection";
import SaleSection from "./components/SaleSection";
import CategorySection from "./components/CategorySection";
import GoalsSection from "./components/GoalsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <PopularSection />
      <SaleSection />
      <CategorySection />
      <GoalsSection />
      <TestimonialsSection />
      <Footer />
    </section>
  );
}

export default App;
