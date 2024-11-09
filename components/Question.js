import Image from "next/image";
import { useState, useEffect } from "react";

export default function Question({ question, onSubmitAnswer }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [timeTaken, setTimeTaken] = useState(0);
  const [atleastSelect, setAtleaseSelect] = useState(false);

  useEffect(() => {
    setTimeTaken(0);
    const timer = setInterval(() => setTimeTaken((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [question.id]);

  const handleOptionSelect = (index) => {
    setSelectedOptions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleNextClick = () => {
    if (selectedOptions.length === 0) {
      setAtleaseSelect(true);
      return;
    }
    onSubmitAnswer(selectedOptions, timeTaken);
    setSelectedOptions([]);
    setAtleaseSelect(false);
  };

  return (
    <div className="mx-auto px-3">
    {atleastSelect ? <p className="text-red-500 text-sm">Please select at least one option before proceeding.</p> : null}
      <h2 className="text-black font-bold text-md mb-4">
        {question.questionText}
      </h2>
      <div className="h-[360px] overflow-y-auto scrollbar-none">
        {question.options.map((option, index) => (
          <p
            className={`cursor-pointer rounded-md mb-1 px-4 py-6 flex gap-4 ${
              selectedOptions.includes(index)
                ? "bg-white border-2 border-[#44B77B]"
                : "bg-[#F3F4FA] border-2 border-[#F3F4FA] text-black"
            }`}
            key={index}
            onClick={() => handleOptionSelect(index)}
          >
          {
            selectedOptions.includes(index) ? <Image src="/checked.png" alt="checkIcon" width={24} height={24} className="w-6 h-6"/> : <Image src="/unchecked.png" alt="checkIcon" width={24} height={24} className="w-6 h-6"/>
          }
            {option}
          </p>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        className="absolute bottom-4 bg-[#FF3B3F] w-[90%] font-bold text-white rounded-full py-2 text-md flex justify-between items-center px-4 hover:bg-[#d53235]"
      >
        <span></span>Next
        <Image src="/nextArrow.svg" alt="nextIcon" width={20} height={20} />
      </button>
    </div>
  );
}
