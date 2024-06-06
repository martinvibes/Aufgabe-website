import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TrustedPage from "./components/TrustedPage";
import OurSolutions from "./components/OurSolutions";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";

function App() {
  return (
    <div>
      <div>
        <Navigation />
        <Hero />
        <TrustedPage />
        <OurSolutions />
        <WhyChooseUs />
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
