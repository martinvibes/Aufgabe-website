import aboutUs from "../images/about-us-right.svg";

function AboutUs() {
  return (
    <div className="relative grid grid-cols-1 bg-navBtn md:grid-cols-1 lg:grid-cols-2">
      <div className="relative p-5 md:ml-regular md:mt-20">
        <div className="">
          <h1 className="text-font32 font-bold text-white">About Us</h1>
          <p className="line my-3 text-font20 font-normal leading-9 text-white">
            At Aufgabe, we are dedicated to providing top-tier cloud solutions{" "}
            <br /> and cybersecurity services that empower businesses to thrive
            in the digital <br /> age. With years of expertise and a commitment
            to excellence, <br /> we help organizations navigate the
            complexities of IT infrastructure with <br /> confidence and ease.
          </p>
          <button className="mt-5 w-heroBtnW rounded-lg border-2 bg-navBtn px-p20 py-p12 text-font20 font-medium text-white transition-all duration-200 hover:border-btnHover hover:bg-btnHover">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 z-10 bg-navBtn opacity-75"></div>
        <img
          className="relative z-20 w-full"
          src={aboutUs}
          alt="about us image"
        />
      </div>
    </div>
  );
}

export default AboutUs;
