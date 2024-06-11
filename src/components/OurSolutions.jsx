import cloudIcon from "../images/cloud-upload.png";
import rightArrow from "../images/right-arrow-svg.svg";

const OurSolutions = () => {
  return (
    <div>
      <div className="bg-solutionBg px-8 py-20 md:px-regular">
        <h1 className="text-font32 font-bold">Our solutions</h1>
        <h3 className="pb-5 text-font24 font-normal text-trustedH1">
          Innovative solutions to secure and empower your business.
        </h3>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-16">
          <div className="group rounded-lg border border-lightGray bg-white px-[36px] py-[33.5px] transition-all duration-500 hover:bg-navBtn">
            <img src={cloudIcon} alt="cloud upload icon" />
            <h2 className="pb-2 pt-p12 text-font24 font-bold group-hover:text-white">
              Cloud Imigrant
            </h2>
            <p className="my-1 text-font20 font-normal text-midBlack group-hover:text-white">
              Seamlessly transition to the cloud <br /> with our expert
              guidance, ensuring <br /> minimal disruption and maximum <br />{" "}
              efficiency.
            </p>
            <div className="mt-5 flex cursor-pointer items-center text-font20 font-medium text-navBtn group-hover:text-white">
              <span>Learn more </span>
              <img
                className="ml-2 h-[24px] w-[24px] filter group-hover:brightness-0 group-hover:invert"
                src={rightArrow}
                alt="right arrow icon"
              />
            </div>
          </div>

          <div className="group rounded-lg border border-lightGray bg-white px-[36px] py-[33.5px] transition-all duration-500 hover:bg-navBtn">
            <img src={cloudIcon} alt="cloud upload icon" />
            <h2 className="pb-2 pt-p12 text-font24 font-bold group-hover:text-white">
              Data Protection
            </h2>
            <p className="my-1 text-font20 font-normal text-midBlack group-hover:text-white">
              Protect your critical data with our <br /> state-of-the-art
              security solutions <br /> designed to prevent breaches and <br />{" "}
              ensure compliance.
            </p>
            <div className="mt-5 flex cursor-pointer items-center text-font20 font-medium text-navBtn group-hover:text-white">
              <span>Learn more </span>
              <img
                className="ml-2 h-[24px] w-[24px] filter group-hover:brightness-0 group-hover:invert"
                src={rightArrow}
                alt="right arrow icon"
              />
            </div>
          </div>

          <div className="group rounded-lg border border-lightGray bg-white px-[36px] py-[33.5px] transition-all duration-200 hover:bg-navBtn hover:text-white">
            <img src={cloudIcon} alt="cloud upload icon" />
            <h2 className="pb-2 pt-p12 text-font24 font-bold group-hover:text-white">
              Managed IT Services
            </h2>
            <p className="my-1 text-font20 font-normal text-midBlack group-hover:text-white">
              Experience peace of mind with our <br /> comprehensive IT
              management <br /> services, providing support and
              <br /> maintenance.
            </p>
            <div className="mt-5 flex cursor-pointer items-center text-font20 font-medium text-navBtn group-hover:text-white">
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
