// App.jsx
import Wash from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Service from "./components/Services";
import Qa from "./components/WhyChoose";
import Navbar from "./components/Navbar";
import Call from "./components/CallToAction";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection"; // Import the contact component
import AutoShowcaseCarousel from "../src/components/AutoShowcaseCarousel"
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100">
      <Navbar />
      <Header />
      <Service />
      <Qa />
      <Call />
      <Wash imageSrc="/wash.png" />
      <AutoShowcaseCarousel />
      <TestimonialSection />
      <ContactSection /> {/* Added here */}
      <Footer />
    </div>
  );
}

export default App;
