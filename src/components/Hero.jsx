import heroImage from "../images/Vector.svg";
import heroSide from "../images/hero-side.png";
import aws from "../images/aws.svg";

function Hero() {
  return (
    <div className="relative">
      <img className="mt-10 h-full w-full" src={heroImage} alt="hero image" />
      <div className="absolute inset-0 flex items-center justify-between">
        <div className="pl-regular left-10 text-white">
          <img src={aws} alt="aws logo" />
          <h1 className="text-font40 w-heroH1 whitespace-nowrap font-bold">
            Unlock Ultimate Security and <br /> Performance with Our Cloud
            Solutions.
          </h1>
          <p className="text-font24 py-2 font-normal">
            Experience seamless, secure, and scalable cloud solutions <br />{" "}
            designed to safeguard your data and boost your performance.
          </p>
          <button className="w-heroBtnW h-heroBtnH hover:bg-btnHover text-font20 bg-navBtn mt-5 whitespace-nowrap rounded-lg font-medium transition-all duration-500 ease-in-out">
            Get Started
          </button>
        </div>
        <img className="h-full" src={heroSide} alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
