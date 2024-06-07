import heroSide from "../images/hero-side.png";

function TransformIt() {
  return (
    <div className="relative mx-[4.5rem] mb-16 mt-32">
      <div className="from-linear1 to-linear2 w-full rounded-lg bg-gradient-to-r py-44"></div>
      <div className="absolute inset-0">
        <div className="py-8 text-center text-white">
          <h1 className="text-font40 text-center font-bold">
            Ready to Transform Your It <br /> infrastructure?
          </h1>
          <p className="text-font20 py-2 font-normal">
            Partner with us for a reliable cloud solutions and robust
            cybersecurity.
          </p>
          <button className="w-heroBtnW h-heroBtnH hover:bg-btnHover text-font20 bg-navBtn hover:border-btnHover mt-5 whitespace-nowrap rounded-lg border-2 font-medium transition-all duration-500 ease-in-out">
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
