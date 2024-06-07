import downArrow from "../images/down-arrow.png";
import { useState } from "react";
import PropTypes from "prop-types";

const faqData = [
  {
    question: "What is cloud migration and how does it benefit my business?",
    answer:
      "Cloud computing is the delivery of different services through the Internet, including data storage, servers, databases, networking, and software.",
  },
  {
    question: "How secure are your cloud solutions?",
    answer:
      "Cloud computing works by allowing client devices to access data and cloud applications over the internet from remote physical servers, databases, and computers.",
  },
  {
    question: "What cybersecurity services do you offer?",
    answer:
      "Benefits include cost savings, security, flexibility, mobility, insight, increased collaboration, quality control, disaster recovery, loss prevention, automatic software updates, and competitive edge.",
  },
  {
    question: "Do you offer flexible pricing plans?",
    answer:
      "Benefits include cost savings, security, flexibility, mobility, insight, increased collaboration, quality control, disaster recovery, loss prevention, automatic software updates, and competitive edge.",
  },
];

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pb-1">
      <div
        onClick={toggleOpen}
        className="flex h-[68px] cursor-pointer items-center justify-between border-b-2 transition-all duration-300"
      >
        <h3 className="text-font20 text-midBlack font-semibold">{question}</h3>
        <img
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"} `}
          src={downArrow}
          alt="down arrow icon"
        />
      </div>
      {isOpen && (
        <p className="bg-solutionBg -mt-2 px-6 py-8 text-gray-700 transition-all duration-300">
          {answer}
        </p>
      )}
    </div>
  );
}

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

function Faq() {
  return (
    <div className="max mx-auto my-[60px] h-[375px] max-w-4xl px-10 lg:px-0">
      <div className="text-center">
        <h1 className="text-font32 text-midBlack font-bold">
          Frequently Asked Question
        </h1>
        <p className="text-font24 text-trustedH1 mb-5 font-normal">
          Innovative solutions to secure and empower your business.
        </p>
      </div>
      <div>
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

export default Faq;
