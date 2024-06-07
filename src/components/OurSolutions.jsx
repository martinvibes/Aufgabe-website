import cloudIcon from "../images/cloud-upload.png";
import rightArrow from "../images/right-arrow-svg.svg";

const OurSolutions = () => {
  return (
    <div>
      <div className="px-regular bg-solutionBg py-20">
        <h1 className="text-font32 font-bold">Our solutions</h1>
        <h3 className="text-font24 text-trustedH1 pb-5 font-normal">
          Innovative solutions to secure and empower your business.
        </h3>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-16">
          <div className="border-lightGray hover:bg-navBtn group rounded-lg border bg-white px-[36px] py-[33.5px] transition-all duration-500">
            <img src={cloudIcon} alt="cloud upload icon" />
            <h2 className="text-font24 pt-p12 pb-2 font-bold group-hover:text-white">
              Cloud Imigrant
            </h2>
            <p className="text-font20 text-midBlack my-1 font-normal group-hover:text-white">
              Seamlessly transition to the cloud <br /> with our expert
              guidance, ensuring <br /> minimal disruption and maximum <br />{" "}
              efficiency.
            </p>
            <div className="text-navBtn text-font20 mt-5 flex cursor-pointer items-center font-medium group-hover:text-white">
              <span>Learn more </span>
              <img
                className="ml-2 h-[24px] w-[24px] filter group-hover:brightness-0 group-hover:invert"
                src={rightArrow}
                alt="right arrow icon"
              />
            </div>
          </div>

          <div className="hover:bg-navBtn border-lightGray group rounded-lg border bg-white px-[36px] py-[33.5px] transition-all duration-500">
            <img src={cloudIcon} alt="cloud upload icon" />
            <h2 className="text-font24 pt-p12 pb-2 font-bold group-hover:text-white">
              Data Protection
            </h2>
            <p className="text-font20 text-midBlack my-1 font-normal group-hover:text-white">
              Protect your critical data with our <br /> state-of-the-art
              security solutions <br /> designed to prevent breaches and <br />{" "}
              ensure compliance.
            </p>
            <div className="text-navBtn text-font20 mt-5 flex cursor-pointer items-center font-medium group-hover:text-white">
              <span>Learn more </span>
              <img
                className="ml-2 h-[24px] w-[24px] filter group-hover:brightness-0 group-hover:invert"
                src={rightArrow}
                alt="right arrow icon"
              />
            </div>
          </div>

          <div className="hover:bg-navBtn border-lightGray group rounded-lg border bg-white px-[36px] py-[33.5px] transition-all duration-200 hover:text-white">
            <img src={cloudIcon} alt="cloud upload icon" />
            <h2 className="text-font24 pt-p12 pb-2 font-bold group-hover:text-white">
              Managed IT Services
            </h2>
            <p className="text-font20 text-midBlack my-1 font-normal group-hover:text-white">
              Experience peace of mind with our <br /> comprehensive IT
              management <br /> services, providing support and
              <br /> maintenance.
            </p>
            <div className="text-navBtn text-font20 mt-5 flex cursor-pointer items-center font-medium group-hover:text-white">
              <span>Learn more </span>
              <img
                className="ml-2 h-[24px] w-[24px] filter group-hover:brightness-0 group-hover:invert"
                src={rightArrow}
                alt="right arrow icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
