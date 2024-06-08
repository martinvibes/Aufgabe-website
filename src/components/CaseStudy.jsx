import caseHero from "../images/caseStudyHero.svg";
import amdLogo from "../images/box-icon-1.svg";
import fedEx from "../images/box-icon2.svg";
import microSoft from "../images/microsoft-logo.png";
import rightArrow from "../images/right-arrow-svg.svg";

function CaseStudy() {
  return (
    <div className="relative">
      <div className="relative">
        <img className="my-20 w-full" src={caseHero} alt="hero section" />
        <div className="absolute inset-0 z-20">
          <div className="my-5 py-9 text-center text-white">
            <h1 className="text-center text-font40 font-bold">Casestudies</h1>
            <p className="py-2 text-font20 font-normal">
              Explore our case studies to learn about our successful projects.
            </p>
          </div>
        </div>
      </div>
      <CaseBox />
    </div>
  );
}

function CaseBox() {
  return (
    <div className="mx-[5rem] my-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <div className="group z-10 rounded-lg border p-7 transition-all duration-200 hover:bg-navBtn">
        <img className="" src={amdLogo} alt="icons logo" />
        <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
          Optimizing Cloud <br /> Infrastructure for Tech <br /> Innovations
          Inc.
        </h1>
        <p className="text-font20 font-normal leading-9 text-midBlack group-hover:text-white">
          Tech Innovations Inc. conducted a <br /> comprehensive assessment and{" "}
          <br />
          migrated their entire infrastructure <br /> to a scalable cloud
          environment. We <br /> optimized their cloud resources to <br />{" "}
          ensure cost-efficiency and high <br />
          performance.
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

      <div className="group z-10 gap-5 rounded-lg border p-7 hover:bg-navBtn">
        <img className="w-11" src={microSoft} alt="icons logo" />
        <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
          Boosting Data Security and <br /> Compliance for HealthCare <br />{" "}
          Plus.
        </h1>
        <p className="text-font20 font-normal leading-9 text-midBlack group-hover:text-white">
          Tech Innovations Inc. conducted a <br /> comprehensive assessment and{" "}
          <br />
          migrated their entire infrastructure <br /> to a scalable cloud
          environment. We <br /> optimized their cloud resources to <br />{" "}
          ensure cost-efficiency and high <br />
          performance.
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

      <div className="group z-10 gap-5 rounded-lg border p-7 hover:bg-navBtn">
        <img className="w-11" src={fedEx} alt="icons logo" />
        <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
          Improving Patient Care with IT <br /> Optimization for HealthNet{" "}
          <br /> Hospitals
        </h1>
        <p className="text-font20 font-normal leading-9 text-midBlack group-hover:text-white">
          Tech Innovations Inc. conducted a <br /> comprehensive assessment and{" "}
          <br />
          migrated their entire infrastructure <br /> to a scalable cloud
          environment. We <br /> optimized their cloud resources to <br />{" "}
          ensure cost-efficiency and high <br />
          performance.
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

      <div className="group z-10 gap-5 rounded-lg border p-7 hover:bg-navBtn">
        <img className="w-11" src={microSoft} alt="icons logo" />
        <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
          Boosting Data Security and <br /> Compliance for HealthCare <br />{" "}
          Plus.
        </h1>
        <p className="text-font20 font-normal leading-9 text-midBlack group-hover:text-white">
          Tech Innovations Inc. conducted a <br /> comprehensive assessment and{" "}
          <br />
          migrated their entire infrastructure <br /> to a scalable cloud
          environment. We <br /> optimized their cloud resources to <br />{" "}
          ensure cost-efficiency and high <br />
          performance.
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

      <div className="group z-10 gap-5 rounded-lg border p-7 hover:bg-navBtn">
        <img className="w-11" src={fedEx} alt="icons logo" />
        <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
          Improving Patient Care with IT <br /> Optimization for HealthNet{" "}
          <br /> Hospitals
        </h1>
        <p className="text-font20 font-normal leading-9 text-midBlack group-hover:text-white">
          Tech Innovations Inc. conducted a <br /> comprehensive assessment and{" "}
          <br />
          migrated their entire infrastructure <br /> to a scalable cloud
          environment. We <br /> optimized their cloud resources to <br />{" "}
          ensure cost-efficiency and high <br />
          performance.
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

      <div className="group z-10 gap-5 rounded-lg border p-7 hover:bg-navBtn">
        <img className="w-11" src={amdLogo} alt="icons logo" />
        <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
          Optimizing Cloud <br /> Infrastructure for Tech <br /> Innovations
          Inc.
        </h1>
        <p className="text-font20 font-normal leading-9 text-midBlack group-hover:text-white">
          Tech Innovations Inc. conducted a <br /> comprehensive assessment and{" "}
          <br />
          migrated their entire infrastructure <br /> to a scalable cloud
          environment. We <br /> optimized their cloud resources to <br />{" "}
          ensure cost-efficiency and high <br />
          performance.
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

      <div className="group z-10 gap-5 rounded-lg border p-7 hover:bg-navBtn">
        <img className="w-11" src={fedEx} alt="icons logo" />
        <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
          Improving Patient Care with IT <br /> Optimization for HealthNet{" "}
          <br /> Hospitals
        </h1>
        <p className="text-font20 font-normal leading-9 text-midBlack group-hover:text-white">
          Tech Innovations Inc. conducted a <br /> comprehensive assessment and{" "}
          <br />
          migrated their entire infrastructure <br /> to a scalable cloud
          environment. We <br /> optimized their cloud resources to <br />{" "}
          ensure cost-efficiency and high <br />
          performance.
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

      <div className="group z-10 gap-5 rounded-lg border p-7 hover:bg-navBtn">
        <img className="w-11" src={amdLogo} alt="icons logo" />
        <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
          Optimizing Cloud <br /> Infrastructure for Tech <br /> Innovations
          Inc.
        </h1>
        <p className="text-font20 font-normal leading-9 text-midBlack group-hover:text-white">
          Tech Innovations Inc. conducted a <br /> comprehensive assessment and{" "}
          <br />
          migrated their entire infrastructure <br /> to a scalable cloud
          environment. We <br /> optimized their cloud resources to <br />{" "}
          ensure cost-efficiency and high <br />
          performance.
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

      <div className="group z-10 rounded-lg border p-7 hover:bg-navBtn">
        <img className="w-11" src={microSoft} alt="icons logo" />
        <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
          Boosting Data Security and <br /> Compliance for HealthCare <br />{" "}
          Plus.
        </h1>
        <p className="text-font20 font-normal leading-9 text-midBlack group-hover:text-white">
          Tech Innovations Inc. conducted a <br /> comprehensive assessment and{" "}
          <br />
          migrated their entire infrastructure <br /> to a scalable cloud
          environment. We <br /> optimized their cloud resources to <br />{" "}
          ensure cost-efficiency and high <br />
          performance.
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
  );
}

export default CaseStudy;
