import "./App.css";
import Navigation from "./components/Navigation";
// import Hero from "./components/Hero";
// import TrustedPage from "./components/TrustedPage";
// import OurSolutions from "./components/OurSolutions";
// import WhyChooseUs from "./components/WhyChooseUs";
// import AboutUs from "./components/AboutUs";
// import Faq from "./components/Faq";
// import TransformIt from "./components/TransformIt";

// import AboutMain from "./components/aboutPage/AboutMain";

import Footer from "./components/Footer";
import CloudServices from "./components/CloudServices";
// import ItSupport from "./components/ItSupport";
// import CaseStudy from "./components/CaseStudy";
// import CyberSolutionsPage from "./components/CyberSolutionsPage";

function App() {
  return (
    <div>
      <div>
        <Navigation />
        {/* <Hero />
        <TrustedPage />
        <OurSolutions />
        <WhyChooseUs />
        <AboutUs />
        // <Faq />
        <TransformIt /> */}
        {/* <AboutMain /> */}
        {/* <CaseStudy /> */}
        {/* <CyberSolutionsPage /> */}
        {/* <ItSupport /> */}
        <CloudServices />
        <Footer />
      </div>
    </div>
  );
}

export default App;
