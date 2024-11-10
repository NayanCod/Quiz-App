let correct = 0;
let inCorrect = 0;

// reset the counters value to 0
export const resetCounters = () => {
  correct = 0;
  inCorrect = 0;
};

// get the value of counters
export const getCounters = () => ({
  correct,
  inCorrect,
});

// increment the correct counter by 1
export const incrementCorrect = () => {
  correct += 1;
};

// increment the Incorrect counter by 1
export const incrementIncorrect = () => {
  inCorrect += 1;
};
