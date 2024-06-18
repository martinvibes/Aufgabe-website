import cyberHero from "../images/solutionsHero.svg";
import cyberChange from "../images/cyber-change.jpg";
import cyberServices from "../images/cyber-services.svg";
import pause from "../images/pause.svg";
import approachImage from "../images/approach-image.svg";
import heroSide from "../images/hero-side.png";

const CyberSolutionsPage = () => {
  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-0 z-10 bg-linear2 opacity-75"></div>
        {/* Image */}
        <img
          className="relative z-0 mt-20 w-full sm:hidden"
          src={cyberChange}
          alt="hero section"
        />
        <img
          className="relative z-0 mt-20 hidden w-full sm:block"
          src={cyberHero}
          alt="hero section"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-start">
          <div className="z-10 my-28 px-8 text-white md:ml-[72px] md:py-9">
            <h1 className="sm5:font-bold text-[1.5rem] font-extrabold md:text-4xl">
              Enhance Your Security with Our <br /> Cybersecurity Solutions.
            </h1>
            <p className="py-1 text-[1.14rem] font-normal md:py-2 md:text-font20">
              Protect Your Business from Cyber Threats with Our <br />
              Comprehensive Security Services
            </p>
          </div>
        </div>
      </div>
      <CyberMatters />
      <CyberServices />
      <OurApproach />
      <TransformIt />
    </div>
  );
};

function CyberMatters() {
  return (
    <div className="my-12 flex items-center justify-center md:my-16">
      <div className="px-8">
        <div className="text-center">
          <h1 className="text-[1.8rem] font-bold md:text-font32">
            Why CyberSeurity Matters
          </h1>
          <p className="mb-7 text-[1.45rem] text-trustedH1 md:text-font24">
            Innovative solutions to secure and empower your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:mx-8 md:grid-cols-1 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="text-font20 font-normal leading-9 text-midBlack">
              <b>In today&apos;s</b> digital landscape, cybersecurity is
              paramount. As businesses <br /> increasingly rely on digital
              platforms and data-driven processes, they <br /> face a growing
              array of cyber threats. From data breaches to <br /> ransomware
              attacks, these threats can inflict severe financial and <br />{" "}
              reputational damage.
            </p>
          </div>
          <div>
            <p className="pt-4 text-font20 font-normal leading-9 text-midBlack lg:pt-0">
              <b>Investing</b> in cybersecurity is not just about protecting
              data, it&apos;s about <br /> safeguarding the future of your
              business. By implementing robust <br /> security measures, you can
              mitigate risks, detect threats, and ensure <br /> business
              continuity in the face of evolving cyber threats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CyberServices() {
  return (
    <div className="grid max-w-full grid-cols-1 bg-solutionBg md:grid-cols-2">
      <div className="relative">
        <div className="absolute inset-0 bg-linear2 opacity-75"></div>
        <img
          className="h-full w-full object-cover"
          src={cyberServices}
          alt="hero section"
        />

        <div className="absolute inset-0 pt-12 text-white md:pt-24 lg:text-center">
          <h1 className="text-center text-[1.7rem] font-bold md:text-font32 lg:text-font40">
            Our Cybersecurity Services
          </h1>
          <p className="py-2 text-center text-[1.18rem] font-normal md:text-font20">
            Innovative solutions to secure and empower <br /> your business.
          </p>
        </div>
      </div>

      <div className="">
        <div className="m-10 grid grid-cols-2 gap-10 pt-2 text-font20 md:pt-12">
          <div className="flex items-center">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>Network Security</h2>
          </div>
          <div className="flex items-center">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>Security Compliance</h2>
          </div>
          <div className="flex items-center">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>Endpoint Security</h2>
          </div>
          <div className="flex items-center">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>Incidence Response</h2>
          </div>
          <div className="flex items-center">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>Threat Intelligence</h2>
          </div>
          <div className="flex items-center">
            <img className="mr-2" src={pause} alt="pause icon" />
            <h2>Security Awareness Training</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurApproach() {
  return (
    <div className="mx-auto my-10 flex items-center justify-center">
      <div>
        <div className="text-center">
          <h1 className="text-[1.78rem] font-bold md:text-font32">
            Our Approach
          </h1>
          <p className="text-[1.34rem] text-trustedH1 md:text-font24">
            Our approach to protecting your business.
          </p>
        </div>
        <FourBoxesWithImage />
      </div>
    </div>
  );
}

function FourBoxesWithImage() {
  return (
    <div className="mx-auto p-4">
      <div className="mx-8 my-2 grid gap-4 text-center sm:mx-16 md:grid-cols-1 lg:grid-cols-1 lg:text-left xl:grid-cols-3">
        <div className="lg:flex lg:items-center lg:justify-center xl:block">
          <div className="sm:p-4">
            <h1 className="text-font24 font-bold">
              Risk Assessment and Analysis
            </h1>
            <p className="text-font20 font-normal sm:leading-9">
              We begin by conducting a <br /> comprehensive risk assessment to{" "}
              <br /> identify potential vulnerabilities and <br /> threats to
              our clients&#39; IT <br />
              infrastructure and data assets. This <br /> analysis helps us
              understand their <br /> unique security posture and develop <br />{" "}
              tailored cybersecurity solutions.
            </p>
          </div>
          <div className="mt-4 p-4 sm:mt-2 lg:mt-12">
            <h1 className="text-font24 font-bold">
              Customized Security Solutions
            </h1>
            <p className="text-font20 font-normal sm:leading-9">
              Based on the findings of our risk <br /> assessment, we design
              customized <br />
              security solutions that address our <br /> clients&#39; specific
              needs and challenges. <br /> These solutions may include a <br />{" "}
              combination of network security, <br /> endpoint protection, data
              encryption, <br /> access control, and threat <br /> intelligence.
            </p>
          </div>
        </div>

        {/* Top Middle Box (Image) */}
        <div className="lg:flex lg:items-center lg:justify-center">
          <img
            src={approachImage}
            alt="Middle"
            className="rounded-full object-cover"
          />
        </div>

        <div className="text-center md:ml-16 lg:flex lg:items-center lg:justify-center lg:text-left xl:block">
          <div className="p-4">
            <h1 className="text-font24 font-bold">Proactive Monitoring</h1>
            <p className="text-font20 font-normal sm:leading-9">
              We deploy advanced monitoring <br /> tools and technologies to{" "}
              <br /> continuously monitor our clients&lsquo; IT <br />{" "}
              environments for suspicious <br /> activities and potential
              security <br /> breaches. This proactive approach <br /> allows us
              to detect and respond to <br /> threats in real-time.
            </p>
          </div>

          <div className="p-4 lg:mt-10">
            <h1 className="text-font24 font-bold">Continuous Improvement</h1>
            <p className="text-font20 font-normal">
              Cybersecurity threats are constantly <br /> evolving, so we
              continuously monitor <br /> industry trends and emerging threats{" "}
              <br /> to ensure that our clients&#39; security <br /> measures
              remain effective and up-to-
              <br />
              date. We regularly review and refine <br /> our cybersecurity
              strategies to adapt <br /> to changing threats and technology{" "}
              <br /> landscapes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransformIt() {
  return (
    <div className="relative mx-8 mb-16 md:mx-[4.5rem] md:mt-32">
      <div className="w-full rounded-lg bg-gradient-to-r from-linear1 to-linear2 py-44"></div>
      <div className="absolute inset-0">
        <div className="py-8 text-center text-white">
          <h1 className="text-center text-[1.7rem] font-bold md:text-font40">
            Ready to Secure Your Bussines?
          </h1>
          <p className="text-font20 font-normal md:py-2">
            Contact Us Today to Learn More About Our Cybersecurity Services
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

export default CyberSolutionsPage;
