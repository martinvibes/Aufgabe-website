import heroSide from "../images/hero-side.png";

function TransformIt() {
  return (
    <div className="relative mx-[4.5rem] mb-16 mt-32">
      <div className="w-full rounded-lg bg-gradient-to-r from-linear1 to-linear2 py-44"></div>
      <div className="absolute inset-0">
        <div className="py-8 text-center text-white">
          <h1 className="text-center text-font40 font-bold">
            Ready to Transform Your It <br /> infrastructure?
          </h1>
          <p className="py-2 text-font20 font-normal">
            Partner with us for a reliable cloud solutions and robust
            cybersecurity.
          </p>
          <button className="mt-5 h-heroBtnH w-heroBtnW whitespace-nowrap rounded-lg border-2 bg-navBtn text-font20 font-medium">
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
