import heroSide from "../images/hero-side.png";

function TransformIt() {
  return (
    <div className="relative mx-8 mb-16 mt-32 md:mx-[4.5rem]">
      <div className="w-full rounded-lg bg-gradient-to-r from-linear1 to-linear2 py-44"></div>
      <div className="absolute inset-0">
        <div className="py-8 text-center text-white">
          <h1 className="text-center text-[1.7rem] font-bold md:text-font40">
            Ready to Transform Your It <br /> infrastructure?
          </h1>
          <p className="text-font20 font-normal md:py-2">
            Partner with us for a reliable cloud solutions and robust
            cybersecurity.
          </p>
          <button className="mt-5 whitespace-nowrap rounded-lg border-2 bg-navBtn p-0 px-4 py-2 text-font20 font-medium md:h-heroBtnH md:w-heroBtnW">
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

export default TransformIt;
