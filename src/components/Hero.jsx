import heroImage from "../images/Vector.svg";
import heroChange from "../images/hero-change2.jpg";
import heroSide from "../images/hero-side.png";
import aws from "../images/aws.svg";

function Hero() {
  return (
    <div className="relative">
      <img
        className="mt-[5.1rem] h-full w-full md:hidden"
        src={heroChange}
        alt="hero image"
      />
      <img
        className="mt-[5.1rem] hidden h-full w-full md:block"
        src={heroImage}
        alt="hero image"
      />
      <div className="absolute inset-0 z-10 bg-linear2 opacity-75"></div>
      <div className="absolute inset-0 z-20 flex items-center justify-between px-8 md:px-0">
        <div className="left-10 text-white md:pl-regular">
          <img
            className="hidden w-14 md:block md:w-[100px] lg:w-[143px]"
            src={aws}
            alt="aws logo"
          />
          <h1 className="text-xl font-bold sm:text-font40 md:text-3xl">
            Unlock Ultimate Security and <br /> Performance with Our Cloud
            Solutions.
          </h1>
          <p className="flex-wrap py-1 text-base font-normal sm:py-4 sm:text-font24 md:py-3">
            Experience seamless, secure, and scalable cloud solutions <br />{" "}
            designed to safeguard your data and boost your performance.
          </p>
          <button className="mb-3 whitespace-nowrap rounded-lg bg-navBtn px-3 py-1.5 text-base font-medium transition-all duration-500 ease-in-out hover:bg-btnHover sm:px-6 sm:py-3 md:mt-5 md:h-heroBtnH md:w-heroBtnW md:text-font20">
            Get Started
          </button>
        </div>

        <img
          className="absolute right-0 top-0 hidden h-full md:block"
          src={heroSide}
          alt="hero image"
        />
      </div>
    </div>
  );
}

export default Hero;
