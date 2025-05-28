// src/App.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection"; // 1. Import the new TeamSection component
import TestimonialsSection from "./components/TestimonialsSection";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-slate-900">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <TeamSection /> {/* 2. Add the TeamSection component here */}
        <TestimonialsSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
