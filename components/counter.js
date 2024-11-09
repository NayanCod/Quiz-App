let correct = 0;
let inCorrect = 0;

export const resetCounters = () => {
  correct = 0;
  inCorrect = 0;
};

export const getCounters = () => ({
  correct,
  inCorrect,
});

export const incrementCorrect = () => {
  correct += 1;
};

export const incrementIncorrect = () => {
  inCorrect += 1;
};
