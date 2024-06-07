import aboutUs from "../images/about-us-right.svg";

function AboutUs() {
  return (
    <div className="bg-navBtn grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="md:ml-regular p-5 md:mt-20">
        <h1 className="text-font32 font-bold text-white">About Us</h1>
        <p className="text-font20 line my-3 font-normal leading-9 text-white">
          At Aufgabe, we are dedicated to providing top-tier cloud solutions{" "}
          <br /> and cybersecurity services that empower businesses to thrive in
          the digital <br /> age. With years of expertise and a commitment to
          excellence, <br /> we help organizations navigate the complexities of
          IT infrastructure with <br /> confidence and ease.
        </p>
        <button className="bg-navBtn text-font20 w-heroBtnW hover:bg-btnHover py-p12 px-p20 hover:border-btnHover mt-5 rounded-lg border-2 font-medium text-white transition-all duration-200">
          Learn More
        </button>
      </div>
      <img className="w-full" src={aboutUs} alt="about us image" />
    </div>
  );
}

export default AboutUs;
