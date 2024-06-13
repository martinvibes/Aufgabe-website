import cloudHero from "../images/cloudServices/cloudHero.svg";
import cloudChange from "../images/cloudServices/cloud-change.jpg";
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
          className="sm3:mt-20 relative z-0 w-full sm:hidden md:mt-20"
          src={cloudChange}
          alt="hero section"
        />
        <img
          className="sm3:mt-20 relative z-0 hidden w-full sm:block md:mt-20"
          src={cloudHero}
          alt="hero section"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-start px-8 md:px-0">
          <div className="z-10 py-9 text-white md:ml-[72px] md:w-[43.5rem]">
            <h1 className="whitespace-nowrap text-[1.8rem] font-bold md:text-font40">
              Seamless Cloud Migration.
            </h1>
            <p className="sm3:text-base sm5:text-[1.1rem] sm5:py-2 py-1 pb-3 font-normal leading-none md:text-font24 md:leading-4">
              Transition to the cloud with confidence and efficiency. Unlock
              greater scalability, enhanced performance, and robust security
              with our expert cloud migration services.
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
    <div className="bg-navBtn px-8 py-3 md:px-[72px] md:py-20 md:text-center">
      <h1 className="text-[1.7rem] font-bold text-white md:text-font32">
        Why Migrate To The Cloud?
      </h1>
      <p className="mt-6 text-font20 font-normal text-white md:mt-8">
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
      <div className="px-8 text-center md:px-0">
        <h1 className="text-[1.65rem] font-bold md:text-font32">
          Tools And Technologies We Use
        </h1>
        <p className="mb-7 text-font20 text-trustedH1 md:text-font24">
          Our approach to protecting your business.
        </p>
        <div className="grid grid-cols-1 gap-4 md:mx-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
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
        <div className="px-8 text-center md:px-0">
          <h1 className="text-[1.65rem] font-bold md:text-font32">
            Our Cloud Migration Process
          </h1>
          <p className="text-font20 text-trustedH1 md:text-font24">
            Our approach to protecting your business.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-center gap-3 px-8 md:grid-cols-2 md:px-12 lg:px-0">
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
    <div className="relative mx-8 mb-16 md:mx-[4.5rem] md:mt-32">
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

export default CloudServices;
