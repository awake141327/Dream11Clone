import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="acc-item">
      <div className="acc-header" onClick={()=> {setIsOpen(!isOpen)}}>
        {question}
        <span className="acc-icon">
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>
      {isOpen && (
        <div className="acc-body">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
