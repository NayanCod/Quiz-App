import Image from "next/image";
import { useState, useEffect } from "react";

export default function Question({ question, onSubmitAnswer }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [timeTaken, setTimeTaken] = useState(0);
  const [atleastSelect, setAtleaseSelect] = useState(false);

  // Start the time taken in seconds
  useEffect(() => {
    setTimeTaken(0);
    const timer = setInterval(() => setTimeTaken((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [question.id]);

  // set the selectedOptions array on option select
  const handleOptionSelect = (index) => {
    setSelectedOptions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // handle the next button click
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
    {/* show error if no option select and clicked next button */}
      {atleastSelect ? (
        <p className="text-red-500 text-sm">
          Please select at least one option before proceeding.
        </p>
      ) : null}
      <h2 className="text-black font-bold text-xl md:text-md mb-2">
        {question.questionText}
      </h2>
      <div className="flex gap-1 my-1 items-center text-gray-600 font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        {timeTaken}s
      </div>
      <div className="md:h-[320px] pb-0 md:pb-6 overflow-y-auto scrollbar-none">
        {question.image && (
          <Image
            src={question?.image}
            alt="Question illustration"
            width={250}
            height={250}
            className="mx-auto h-auto"
          />
        )}
        {/* display the questions's options */}
        {question.options.map((option, index) => (
          <p
            className={`text-lg md:text-sm cursor-pointer rounded-md mb-2 md:mb-1 px-4 py-6 flex gap-4 ${
              selectedOptions.includes(index)
                ? "bg-white border-2 border-[#44B77B]"
                : "bg-[#F3F4FA] border-2 border-[#F3F4FA] text-black"
            }`}
            key={index}
            onClick={() => handleOptionSelect(index)}
          >
            {selectedOptions.includes(index) ? (
              <Image
                src="/checked.png"
                alt="checkIcon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            ) : (
              <Image
                src="/unchecked.png"
                alt="checkIcon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            )}
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
