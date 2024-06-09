import Hero from "../components/Hero";
import TrustedPage from "../components/TrustedPage";
import OurSolutions from "../components/OurSolutions";
import WhyChooseUs from "../components/WhyChooseUs";
import Faq from "../components/Faq";
import TransformIt from "../components/TransformIt";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPage />
      <OurSolutions />
      <WhyChooseUs />
      <AboutUs />

      <Faq />
      <TransformIt />
    </>
  );
}
