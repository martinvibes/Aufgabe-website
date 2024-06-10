import hero from "../../images/about/main-about.svg";
import expert1 from "../../images/about/expert01.svg";
import expert2 from "../../images/about/expert02.svg";
import expert3 from "../../images/about/expert03.svg";
import expert4 from "../../images/about/expert04.svg";

function AboutMain() {
  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-0 z-10 bg-linear2 opacity-75"></div>
        <img
          className="relative z-0 my-16 max-w-full md:h-full lg:w-full"
          src={hero}
          alt="hero section"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="my-5 py-10 text-center text-white md:py-9">
            <h1 className="text-center text-font24 font-bold lg:text-font40">
              About Us
            </h1>
            <p className="font-body flex flex-wrap py-2 text-[17px] font-normal lg:text-font20">
              At Aufgabe, we are dedicated to providing top-tier cloud{" "}
              <br className="hidden lg:block" />
              solutions and cybersecurity services that empower businesses to
              <br className="hidden lg:block" /> thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
      <OurMission />
      <OurJourney />
      <MeetExperts />
    </div>
  );
}

function OurMission() {
  return (
    <div className="mb-16 flex justify-center">
      <div className="flex flex-col space-y-8 px-8 md:flex-row md:space-x-20 md:space-y-0 lg:p-0">
        <div className="flex items-center justify-center space-x-4">
          <span className="h-[10.8rem] w-1 bg-navBtn"></span>
          <div>
            <h1 className="text-font24 font-bold">Our Mission</h1>
            <p className="text-font20 text-midBlack">
              We aim to enhance business operations through{" "}
              <br className="hidden lg:block" />
              innovative technology, secure practices, and{" "}
              <br className="hidden lg:block" />
              unparalleled support. Our core values innovation,{" "}
              <br className="hidden lg:block" />
              security, customer-centricity, and integrity guide{" "}
              <br className="hidden lg:block" />
              everything we do.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <span className="h-[10.8rem] w-1 bg-navBtn"></span>
          <div>
            <h1 className="text-font24 font-bold">Our Vision</h1>
            <p className="text-font20 text-midBlack">
              Our vision is to be the leading provider of cloud{" "}
              <br className="hidden lg:block" />
              solutions and cybersecurity services globally,{" "}
              <br className="hidden lg:block" />
              recognized for our commitment to excellence and{" "}
              <br className="hidden lg:block" />
              customer satisfaction. We aim to create a safer digital{" "}
              <br className="hidden lg:block" />
              world where businesses can operate with agility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurJourney() {
  return (
    <div className="flex justify-center bg-solutionBg py-8">
      <div className="flex w-full flex-col space-y-8 p-10 md:w-2/3 md:space-x-20 md:p-0 lg:flex-row lg:space-y-0">
        <div className="flex items-start space-x-4 text-center lg:text-left">
          <div>
            <h1 className="text-font24 font-bold">Our Journey</h1>
            <p className="text-font20 text-midBlack">
              Since our founding in 2010, we have achieved{" "}
              <br className="hidden lg:block" />
              significant milestones. Our journey is defined by{" "}
              <br className="hidden lg:block" />
              growth, adaptation, and a relentless pursuit of{" "}
              <br className="hidden lg:block" />
              excellence.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="mx-auto ml-6 grid w-fit grid-cols-2 gap-5 gap-y-8">
            <div>
              <h1 className="text-font32 font-medium">1200+</h1>
              <p className="-mt-2 text-font20 font-normal">Satisfied clients</p>
            </div>
            <div>
              <h1 className="text-font32 font-medium">2500+</h1>
              <p className="-mt-2 text-font20 font-normal">
                Successful Project clients
              </p>
            </div>
            <div>
              <h1 className="text-font32 font-medium">100+</h1>
              <p className="-mt-2 text-font20 font-normal">Certified experts</p>
            </div>
            <div>
              <h1 className="text-font32 font-medium">15+</h1>
              <p className="-mt-2 text-font20 font-normal">
                Awards & Certifications{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MeetExperts() {
  return (
    <div className="my-8 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-font32 font-bold">Meet Our Experts</h1>
        <p className="mb-7 text-font24 text-trustedH1">
          Dedicated Professionals Committed to Your Success
        </p>
        <div className="mx-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="mx-auto">
            <img src={expert1} alt="user pic" />
            <h1 className="text-font24 font-bold text-midBlack">John Smith</h1>
            <h2 className="text-font20 font-normal text-midBlack">CEO</h2>
          </div>
          <div className="mx-auto">
            <img src={expert2} alt="user pic" />
            <h1 className="text-font24 font-bold text-midBlack">
              Emily Johnson
            </h1>
            <h2 className="text-font20 font-normal text-midBlack">CTO</h2>
          </div>
          <div className="mx-auto">
            <img src={expert3} alt="user pic" />
            <h1 className="text-font24 font-bold text-midBlack">
              Mihael Brown
            </h1>
            <h2 className="text-font20 font-normal text-midBlack">
              Head of Cybersecurity
            </h2>
          </div>
          <div className="mx-auto">
            <img src={expert4} alt="user pic" />
            <h1 className="text-font24 font-bold text-midBlack">
              Sarah Davies
            </h1>
            <h2 className="text-font20 font-normal text-midBlack">
              Services Director
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMain;
