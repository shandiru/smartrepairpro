// App.jsx
import Wash from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Service from "./components/Heritage";
import Qa from "./components/Journey";
import Navbar from "./components/Navbar";
import Call from "./components/Story";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100">
      <Navbar />
      <Header />
      <Service />
      <Qa />
      <Call />
      <Wash imageSrc="/wash.png" />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
