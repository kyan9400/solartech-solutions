import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
