import cloudHero from "../images/cloudServices/cloudHero.svg";
import assessment from "../images/cloudServices/assessment.png";
import azure from "../images/cloudServices/azure.png";
import dockerServices from "../images/cloudServices/dockerServices.png";
import migration from "../images/cloudServices/migration.png";
import optimization from "../images/cloudServices/optimization.png";
import planning from "../images/cloudServices/planning.png";
import aws from "../images/cloudServices/awsDark.svg";
import heroSide from "../images/hero-side.png";

const CloudServices = () => {
  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-0 z-10 bg-linear2 opacity-75"></div>
        {/* Image */}
        <img
          className="relative z-0 mt-20 w-full"
          src={cloudHero}
          alt="hero section"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-start">
          <div className="z-10 ml-[72px] py-9 text-white">
            <h1 className="text-font40 font-bold">Seamless Cloud Migration.</h1>
            <p className="py-2 text-font24 font-normal">
              Transition to the cloud with confidence and efficiency. Unlock{" "}
              <br /> greater scalability, enhanced performance, and robust
              security <br /> with our expert cloud migration services.
            </p>
          </div>
        </div>
      </div>
      <MigrateCloud />
      <ToolsUsed />
      <CloudMigration />
      <ReliableIt />
    </div>
  );
};

function MigrateCloud() {
  return (
    <div className="bg-navBtn px-[72px] py-3 md:py-20 md:text-center">
      <h1 className="text-font32 font-bold text-white">
        Why Migrate To The Cloud?
      </h1>
      <p className="mt-8 text-font20 font-normal text-white">
        Migrating to the cloud offers a multitude of benefits that can transform
        your business operations. It provides <br /> increased scalability,
        allowing your IT infrastructure to grow seamlessly with your business
        needs. Cloud solutions also enhance cost <br /> efficiency by reducing
        the need for expensive on-premises hardware and maintenance, enabling
        you to pay only for the <br /> resources you use. Furthermore, cloud
        migration improves performance by leveraging high-speed, reliable cloud
        services that <br /> ensure your applications and data are always
        accessible and running optimally. Embracing cloud technology empowers
        your <br /> business to innovate, adapt, and thrive in a competitive
        landscape.
      </p>
    </div>
  );
}

function ToolsUsed() {
  return (
    <div className="my-8 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-font32 font-bold">Tools And Technologies We Use</h1>
        <p className="mb-7 text-font24 text-trustedH1">
          Our approach to protecting your business.
        </p>
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <div className="group rounded-lg border px-16 py-20 text-center transition-all duration-300 hover:bg-navBtn">
            <img className="mx-auto" src={aws} alt="user pic" />
            <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
              AWS Services
            </h1>
          </div>
          <div className="group rounded-lg border px-16 py-20 text-center transition-all duration-300 hover:bg-navBtn">
            <img className="mx-auto" src={azure} alt="user pic" />
            <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
              Azure Services
            </h1>
          </div>
          <div className="group rounded-lg border px-16 py-20 text-center transition-all duration-300 hover:bg-navBtn">
            <img className="mx-auto" src={dockerServices} alt="user pic" />
            <h1 className="text-font24 font-bold text-midBlack group-hover:text-white">
              Docker Services
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

const CloudMigration = () => {
  return (
    <div className="my-[60px] flex items-center justify-center">
      <div className="mx-auto w-chooseUs">
        <div className="text-center">
          <h1 className="text-font32 font-bold">Our Cloud Migration Process</h1>
          <p className="text-font24 text-trustedH1">
            Our approach to protecting your business.
          </p>
        </div>

        <div className="inset-2 grid grid-cols-1 justify-center gap-3 px-12 md:grid-cols-2 lg:px-0">
          <div className="my-5">
            <img src={assessment} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Asssessment
            </h1>
            <p className="text-font20 text-midBlack">
              Evaluate current infrastructure and requirements.
            </p>
          </div>

          <div className="my-5">
            <img src={planning} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Planning
            </h1>
            <p className="text-font20 text-midBlack">
              Develop a detailed migration plan.
            </p>
          </div>

          <div className="my-5">
            <img src={migration} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Migration
            </h1>
            <p className="text-font20 text-midBlack">
              Execute the migration to the cloud.
            </p>
          </div>

          <div className="my-5">
            <img src={optimization} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Optimization
            </h1>
            <p className="text-font20 text-midBlack">
              Optimize the cloud environment for performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function ReliableIt() {
  return (
    <div className="relative mx-[4.5rem] mb-16 mt-12">
      <div className="w-full rounded-lg bg-gradient-to-r from-linear1 to-linear2 py-32"></div>
      <div className="absolute inset-0">
        <div className="py-8 text-center text-white">
          <h1 className="text-center text-font40 font-bold">
            Ready To Get Reliable IT Support?
          </h1>
          <p className="py-2 text-font20 font-normal">
            Contact Us Today to Discuss Your IT Support Needs
          </p>
          <button className="mt-5 h-heroBtnH w-heroBtnW whitespace-nowrap rounded-lg border-2 text-font20 font-medium transition-all duration-500 ease-in-out hover:border-btnHover hover:bg-btnHover">
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

export default CloudServices;
