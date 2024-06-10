import cyberHero from "../images/solutionsHero.svg";
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
          className="relative z-0 mt-20 w-full"
          src={cyberHero}
          alt="hero section"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-start">
          <div className="z-10 my-28 ml-[72px] py-9 text-white">
            <h1 className="text-font40 font-bold">
              Enhance Your Security with Our <br /> Cybersecurity Solutions.
            </h1>
            <p className="py-2 text-font20 font-normal">
              Protect Your Business from Cyber Threats with Our <br />{" "}
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
    <div className="my-16 flex items-center justify-center">
      <div className="">
        <div className="text-center">
          <h1 className="text-font32 font-bold">Why CyberSeurity Matters</h1>
          <p className="mb-7 text-font24 text-trustedH1">
            Innovative solutions to secure and empower your business.
          </p>
        </div>
        <div className="mx-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="text-font20 font-normal leading-9 text-midBlack">
              In today&apos;s digital landscape, cybersecurity is paramount. As
              businesses <br /> increasingly rely on digital platforms and
              data-driven processes, they <br /> face a growing array of cyber
              threats. From data breaches to <br /> ransomware attacks, these
              threats can inflict severe financial and <br /> reputational
              damage.
            </p>
          </div>
          <div>
            <p className="pt-4 text-font20 font-normal leading-9 text-midBlack lg:pt-0">
              Investing in cybersecurity is not just about protecting data,
              it&apos;s about <br /> safeguarding the future of your business.
              By implementing robust <br /> security measures, you can mitigate
              risks, detect threats, and ensure <br /> business continuity in
              the face of evolving cyber threats.
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

        <div className="absolute inset-0 pt-24 text-white lg:text-center">
          <h1 className="text-center text-font32 font-bold lg:text-font40">
            Our Cybersecurity Services
          </h1>
          <p className="py-2 text-center text-font20 font-normal">
            Innovative solutions to secure and empower <br /> your business.
          </p>
        </div>
      </div>

      <div className="">
        <div className="m-10 grid grid-cols-2 gap-10 pt-12 text-font20">
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
          <h1 className="text-font32 font-bold">Our Approach</h1>
          <p className="text-font24 text-trustedH1">
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
    <div className="container mx-auto p-4">
      <div className="gri mx-16 my-2 grid gap-4 md:grid-cols-1 md:text-center lg:grid-cols-1 lg:text-left xl:grid-cols-3">
        <div className="lg:flex lg:items-center lg:justify-center xl:block">
          <div className="p-4">
            <h1 className="text-font24 font-bold">
              Risk Assessment and Analysis
            </h1>
            <p className="text-font20 font-normal leading-9">
              We begin by conducting a <br /> comprehensive risk assessment to{" "}
              <br /> identify potential vulnerabilities and <br /> threats to
              our clients&#39; IT <br />
              infrastructure and data assets. This <br /> analysis helps us
              understand their <br /> unique security posture and develop <br />{" "}
              tailored cybersecurity solutions.
            </p>
          </div>
          <div className="mt-2 p-4 lg:mt-12">
            <h1 className="text-font24 font-bold">
              Customized Security Solutions
            </h1>
            <p className="text-font20 font-normal leading-9">
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
            <p className="text-font20 font-normal leading-9">
              We deploy advanced monitoring <br /> tools and technologies to{" "}
              <br /> continuously monitor our clients&lsquo; IT <br />{" "}
              environments for suspicious <br /> activities and potential
              security <br /> breaches. This proactive approach <br /> allows us
              to detect and respond to <br /> threats in real-time.
            </p>
          </div>

          <div className="p-4 lg:mt-12">
            <h1 className="text-font24 font-bold">Continuous Improvement</h1>
            <p className="text-font20 font-normal leading-9">
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
    <div className="relative mx-[4.5rem] mb-16 mt-12">
      <div className="w-full rounded-lg bg-gradient-to-r from-linear1 to-linear2 py-32"></div>
      <div className="absolute inset-0">
        <div className="py-8 text-center text-white">
          <h1 className="text-center text-font40 font-bold">
            Ready To Secure Your Business?
          </h1>
          <p className="py-2 text-font20 font-normal">
            Contact Us Today to Learn More About Our Cybersecurity Services
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

export default CyberSolutionsPage;
