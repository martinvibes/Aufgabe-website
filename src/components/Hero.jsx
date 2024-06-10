import heroImage from "../images/Vector.svg";
import heroSide from "../images/hero-side.png";
import aws from "../images/aws.svg";

function Hero() {
  return (
    <div className="relative">
      <img className="mt-10 h-full w-full" src={heroImage} alt="hero image" />
      <div className="absolute inset-0 flex items-center justify-between">
        <div className="left-10 pl-regular text-white">
          <img className="w-[100px] lg:w-[143px]" src={aws} alt="aws logo" />
          <h1 className="text-3xl font-bold lg:text-font40">
            Unlock Ultimate Security and <br /> Performance with Our Cloud
            Solutions.
          </h1>
          <p className="flex-wrap py-2 text-font20 font-normal lg:text-font24">
            Experience seamless, secure, and scalable cloud solutions <br />{" "}
            designed to safeguard your data and boost your performance.
          </p>
          <button className="mt-5 h-heroBtnH w-heroBtnW whitespace-nowrap rounded-lg bg-navBtn text-font20 font-medium transition-all duration-500 ease-in-out hover:bg-btnHover">
            Get Started
          </button>
        </div>
        <img
          className="absolute right-0 top-0 h-full"
          src={heroSide}
          alt="hero image"
        />
      </div>
    </div>
  );
}

export default Hero;
