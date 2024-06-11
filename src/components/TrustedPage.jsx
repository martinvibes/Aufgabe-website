import microsoft from "../images/microsoft-logo.png";
import eaLogo from "../images/ea-logo.png";
import addidas from "../images/addidas.png";
import huawei from "../images/huawei-logo.png";
import m from "../images/M-logo.png";
import pinterest from "../images/pinterest-logo.png";

function TrustedPage() {
  return (
    <div className="py-5 md:py-10 lg:py-16">
      <h1 className="text-center text-font24 font-normal text-trustedH1 md:pb-5 md:pt-8">
        Trusted by numerous leading companies.
      </h1>
      <div className="flex flex-wrap items-center justify-between px-regular">
        <img
          className="cursor-pointer p-2"
          src={microsoft}
          alt="microsoft icon logo"
        />
        <img className="cursor-pointer p-2" src={eaLogo} alt="ea icon logo" />
        <img
          className="cursor-pointer p-2"
          src={addidas}
          alt="addidas icon logo"
        />
        <img
          className="cursor-pointer p-2"
          src={huawei}
          alt="huawei icon logo"
        />
        <img className="cursor-pointer p-2" src={m} alt="m icon logo" />
        <img
          className="cursor-pointer p-2"
          src={pinterest}
          alt="pinterest icon logo"
        />
      </div>
    </div>
  );
}

export default TrustedPage;
