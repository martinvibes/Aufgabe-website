import aboutUs from "../images/about-us-right.svg";

function AboutUs() {
  return (
    <div className="grid grid-cols-1 gap-4 bg-navBtn md:grid-cols-2">
      <div className="p-5 md:ml-regular md:mt-20">
        <h1 className="text-font32 font-bold text-white">About Us</h1>
        <p className="line my-3 text-font20 font-normal leading-9 text-white">
          At Aufgabe, we are dedicated to providing top-tier cloud solutions{" "}
          <br /> and cybersecurity services that empower businesses to thrive in
          the digital <br /> age. With years of expertise and a commitment to
          excellence, <br /> we help organizations navigate the complexities of
          IT infrastructure with <br /> confidence and ease.
        </p>
        <button className="mt-5 w-heroBtnW rounded-lg border-2 bg-navBtn px-p20 py-p12 text-font20 font-medium text-white transition-all duration-200 hover:border-btnHover hover:bg-btnHover">
          Learn More
        </button>
      </div>
      <img className="w-full" src={aboutUs} alt="about us image" />
    </div>
  );
}

export default AboutUs;
