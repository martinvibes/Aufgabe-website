import itSupportHero3 from "../images/images-test.png";
import itSupportHero from "../images/it-support.svg";
import pause from "../images/pause.svg";
import itSupportHero2 from "../images/it-support2.svg";
import heroSide from "../images/hero-side.png";
import cloud from "../images/cloud-upload.png";

const ItSupport = () => {
  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-0 z-10 bg-linear2 opacity-75"></div>
        {/* Image */}
        <img
          className="relative z-0 mt-20 w-full"
          src={itSupportHero}
          alt="hero section"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-start">
          <div className="z-10 ml-[72px] py-9 text-white">
            <h1 className="text-font40 font-bold">
              Comprehensive IT Support Services.
            </h1>
            <p className="py-2 text-font20 font-normal">
              Reliable Solutions to Keep Your Business Running Smoothly
            </p>
          </div>
        </div>
      </div>
      <SupportSolutions />
      <SupportSolutionsSec />
      <CyberMatters />
      <ReliableIt />
    </div>
  );
};

function SupportSolutions() {
  return (
    <div className="mb-20 mt-16 flex items-center justify-center">
      <div className="grid grid-cols-1 space-x-20 md:grid-cols-2">
        <div className="mr-10">
          <h1 className="text-font32 font-bold">
            Comprehensive IT Support Solutions
          </h1>
          <h3 className="py-2 text-font24 font-normal text-trustedH1">
            Expert assistance to keep your business running <br /> smoothly and
            efficiently.
          </h3>
          <p className="text-font20 font-normal">
            Reliable IT support is crucial for business success. It ensures
            continuity by <br /> quickly resolving technical issues and enhances
            security against cyber <br /> threats. IT support boosts efficiency
            by handling maintenance and <br /> troubleshooting, integrates new
            technologies seamlessly, and provides <br /> expert guidance on IT
            investments. It also ensures regulatory compliance, <br /> improves
            customer satisfaction through swift issue resolution, and offers{" "}
            <br /> scalable, cost-effective solutions as your business grows.
            Investing in <br /> professional IT support enhances productivity,
            protects assets, and keeps <br /> your business competitive.
          </p>
        </div>

        <div className="">
          <img className="" src={itSupportHero2} alt="image support" />
        </div>
      </div>
    </div>
  );
}

function SupportSolutionsSec() {
  return (
    <div className="mb-20 mt-20 flex items-center justify-center">
      <div className="grid grid-cols-1 space-x-20 md:grid-cols-2">
        <div className="">
          <img className="" src={itSupportHero3} alt="image support" />
        </div>

        <div className="mr-10">
          <h1 className="text-font32 font-bold">
            Comprehensive IT Support Solutions
          </h1>
          <h3 className="py-2 text-font24 font-normal text-trustedH1">
            Expert assistance to keep your business running <br /> smoothly and
            efficiently.
          </h3>
          <div className="mt-9 flex items-center text-font20 font-normal">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>Help Desk Support</h2>
          </div>
          <div className="mt-9 flex items-center text-font20 font-normal">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>Network Monitoring and Management</h2>
          </div>
          <div className="mt-9 flex items-center text-font20 font-normal">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>Software and Hardware Installation</h2>
          </div>
          <div className="mt-9 flex items-center text-font20 font-normal">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>Security Patch Management</h2>
          </div>
          <div className="mt-9 flex items-center text-font20 font-normal">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>Remote Desktop Support</h2>
          </div>
          <div className="mt-9 flex items-center text-font20 font-normal">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>IT Consultation and Planning</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const CyberMatters = () => {
  return (
    <div className="my-[60px] flex items-center justify-center">
      <div className="mx-auto w-chooseUs">
        <div className="text-center">
          <h1 className="text-font32 font-bold">Why Cybersecurity Matters</h1>
          <p className="text-font24 text-trustedH1">
            Innovative solutions to secure and empower your business.
          </p>
        </div>

        <div className="inset-2 grid grid-cols-1 justify-center gap-3 px-12 md:grid-cols-2 lg:px-0">
          <div className="my-5">
            <img src={cloud} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Comprehensive Assessment
            </h1>
            <p className="text-font20 text-midBlack">
              Our team consists of seasoned professionals with <br /> experience
              in cloud and cybersecurity.
            </p>
          </div>

          <div className="my-5">
            <img src={cloud} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Proactive Maintenance
            </h1>
            <p className="text-font20 text-midBlack">
              We deliver consistent, reliable services that you can <br /> count
              on.
            </p>
          </div>

          <div className="my-5">
            <img src={cloud} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Tailored Solutions
            </h1>
            <p className="text-font20 text-midBlack">
              Every business is unique and so our solutions are <br /> tailored
              to meet your specific needs.
            </p>
          </div>

          <div className="my-5">
            <img src={cloud} alt="cloud upload icon" />
            <h1 className="my-3 text-font24 font-bold text-midBlack">
              Rapid Response
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

export default ItSupport;
