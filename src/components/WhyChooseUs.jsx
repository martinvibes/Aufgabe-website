import cloud from "../images/cloud-upload.png";

const WhyChooseUs = () => {
  return (
    <div className="my-[60px] flex items-center justify-center">
      <div className="w-chooseUs mx-auto h-[497px]">
        <div className="text-center">
          <h1 className="text-font32 font-bold">Why Choose Us</h1>
          <p className="text-font24 text-trustedH1">
            Innovative solutions to secure and empower your business.
          </p>
        </div>

        <div className="inset-2 grid grid-cols-2 items-center justify-center">
          <div className="w-chooseUsW mr-5">
            <div className="my-5">
              <img src={cloud} alt="cloud upload icon" />
              <h1 className="text-font24 text-midBlack my-3 font-bold">
                Expertise
              </h1>
              <p className="text-font20 text-midBlack my-3">
                Our team consists of seasoned professionals with <br />{" "}
                experience in cloud and cybersecurity.
              </p>
            </div>
            <div className="my-12">
              <img src={cloud} alt="cloud upload icon" />
              <h1 className="text-font24 text-midBlack my-3 font-bold">
                Customization
              </h1>
              <p className="text-font20 text-midBlack my-3">
                Every business is unique and so our solutions are <br />{" "}
                tailored to meet your specific needs.
              </p>
            </div>
          </div>

          <div className="w-chooseUsW ml-12">
            <div className="my-5">
              <img src={cloud} alt="cloud upload icon" />
              <h1 className="text-font24 text-midBlack my-3 font-bold">
                Reliability
              </h1>
              <p className="text-font20 text-midBlack my-3">
                We deliver consistent, reliable services that you can <br />{" "}
                count on.
              </p>
            </div>
            <div className="my-12">
              <img src={cloud} alt="cloud upload icon" />
              <h1 className="text-font24 text-midBlack my-3 font-bold">
                Support
              </h1>
              <p className="text-font20 text-midBlack my-3">
                Our dedicated support team is available 24/7 to assist <br />{" "}
                you with any challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
