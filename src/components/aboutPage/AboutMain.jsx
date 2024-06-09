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
          className="relative z-0 my-16 w-full"
          src={hero}
          alt="hero section"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="my-5 py-9 text-center text-white">
            <h1 className="text-center text-font40 font-bold">About Us</h1>
            <p className="py-2 text-font20 font-normal">
              At Aufgabe, we are dedicated to providing top-tier cloud <br />
              solutions and cybersecurity services that empower businesses to
              <br /> thrive in the digital age.
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
      <div className="flex w-2/3 space-x-20 sm:flex-col md:flex-row">
        <div className="flex items-center justify-center space-x-4">
          <span className="h-[10.8rem] w-1 bg-navBtn"></span>
          <div>
            <h1 className="text-font24 font-bold">Our Mission</h1>
            <p className="whitespace-nowrap text-font20 text-midBlack">
              We aim to enhance business operations through <br /> innovative
              technology, secure practices, and <br /> unparalleled support. Our
              core values innovation, <br /> security, customer-centricity, and
              integrity guide <br /> everything we do.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <span className="h-[10.8rem] w-1 bg-navBtn"></span>
          <div>
            <h1 className="text-font24 font-bold">Our Vision</h1>
            <p className="whitespace-nowrap text-font20 text-midBlack">
              Our vision is to be the leading provider of cloud <br /> solutions
              and cybersecurity services globally, <br /> recognized for our
              commitment to excellence and <br /> customer satisfaction. We aim
              to create a safer digital <br /> world where businesses can
              operate with agility.
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
      <div className="flex w-2/3 space-x-20">
        <div className="flex items-start space-x-4">
          <div>
            <h1 className="text-font24 font-bold">Our Journey</h1>
            <p className="text-font20 text-midBlack">
              Since our founding in 2010, we have achieved <br /> significant
              milestones. Our journey is defined by <br /> growth, adaptation,
              and a relentless pursuit of <br /> excellence.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="ml-6 grid grid-cols-2 gap-5 gap-y-8">
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
        <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <img src={expert1} alt="user pic" />
            <h1 className="text-font24 font-bold text-midBlack">John Smith</h1>
            <h2 className="text-font20 font-normal text-midBlack">CEO</h2>
          </div>
          <div>
            <img src={expert2} alt="user pic" />
            <h1 className="text-font24 font-bold text-midBlack">
              Emily Johnson
            </h1>
            <h2 className="text-font20 font-normal text-midBlack">CTO</h2>
          </div>
          <div>
            <img src={expert3} alt="user pic" />
            <h1 className="text-font24 font-bold text-midBlack">
              Mihael Brown
            </h1>
            <h2 className="text-font20 font-normal text-midBlack">
              Head of Cybersecurity
            </h2>
          </div>
          <div>
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
