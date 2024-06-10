import aboutUs from "../images/about-us-right.svg";

function AboutUs() {
  return (
    <div className="grid grid-cols-1 gap-4 bg-navBtn object-cover md:grid-cols-1 lg:grid-cols-2">
      <div className="p-4 md:mr-1 md:mt-16 md:p-0 md:pl-regular lg:w-[619px] xl:my-20">
        <h1 className="text-font24 font-bold text-white md:text-font32">
          About Us
        </h1>
        <p className="my-3 text-lg font-normal text-white md:text-lg lg:text-font20 lg:leading-9">
          At Aufgabe, we are dedicated to providing top-tier cloud solutions and
          cybersecurity services that empower businesses to thrive in the
          digital age. With years of expertise and a commitment to excellence,
          we help organizations navigate the complexities of IT infrastructure
          with confidence and ease.
        </p>
        <button className="mt-2 w-[130px] whitespace-nowrap rounded-lg border-2 bg-navBtn px-p20 py-p12 text-font20 font-medium text-white transition-all duration-200 hover:border-btnHover hover:bg-btnHover md:mt-5 lg:w-heroBtnW">
          Learn More
        </button>
      </div>
      <img className="w-full md:h-full" src={aboutUs} alt="about us image" />
    </div>
  );
}

export default AboutUs;
