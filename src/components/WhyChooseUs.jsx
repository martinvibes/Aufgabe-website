import cloud from "../images/cloud-upload.png";

const WhyChooseUs = () => {
  return (
    <div className="my-[60px] flex items-center justify-center">
      <div className="mx-auto w-chooseUs">
        <div className="text-center">
          <h1 className="text-font32 font-bold">Why Choose Us</h1>
          <p className="text-font24 text-trustedH1">
            Innovative solutions to secure and empower your business.
          </p>
        </div>

        <div className="inset-2 grid grid-cols-1 justify-center gap-3 px-12 md:grid-cols-2 lg:px-0">
          <div className="my-5">
            <img src={cloud} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Expertise
            </h1>
            <p className="text-font20 text-midBlack">
              Our team consists of seasoned professionals with <br /> experience
              in cloud and cybersecurity.
            </p>
          </div>

          <div className="my-5">
            <img src={cloud} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Customization
            </h1>
            <p className="text-font20 text-midBlack">
              Every business is unique and so our solutions are <br /> tailored
              to meet your specific needs.
            </p>
          </div>

          <div className="my-5">
            <img src={cloud} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Reliability
            </h1>
            <p className="text-font20 text-midBlack">
              We deliver consistent, reliable services that you can <br /> count
              on.
            </p>
          </div>

          <div className="my-5">
            <img src={cloud} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Support
            </h1>
            <p className="text-font20 text-midBlack">
              Our dedicated support team is available 24/7 to assist <br /> you
              with any challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
