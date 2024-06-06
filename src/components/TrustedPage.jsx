import microsoft from "../images/microsoft-logo.png";
import eaLogo from "../images/ea-logo.png";
import addidas from "../images/addidas.png";
import huawei from "../images/huawei-logo.png";
import m from "../images/M-logo.png";
import pinterest from "../images/pinterest-logo.png";

function TrustedPage() {
  return (
    <div>
      <div className="h-trustedH">
        <h1 className="text-font24 text-trustedH1 pb-5 pt-8 text-center font-normal">
          Trusted by numerous leading companies.
        </h1>
        <div className="px-regular flex items-center justify-between">
          <img
            className="cursor-pointer"
            src={microsoft}
            alt="microsoft icon logo"
          />
          <img className="cursor-pointer" src={eaLogo} alt="ea icon logo" />
          <img
            className="cursor-pointer"
            src={addidas}
            alt="addidas icon logo"
          />
          <img className="cursor-pointer" src={huawei} alt="huawei icon logo" />
          <img className="cursor-pointer" src={m} alt="m icon logo" />
          <img
            className="cursor-pointer"
            src={pinterest}
            alt="pinterest icon logo"
          />
        </div>
      </div>
    </div>
  );
}

export default TrustedPage;
