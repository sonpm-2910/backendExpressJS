const hasIncreasingSequence = (array) => {
  if (array.length < 2) {
    return false; // If array has less than 2 elements, cannot have an increasing sequence
  }

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= array[i - 1]) {
      return false; // If any element is not greater than the previous one, return false
    }
  }

  return true; // If no violations found, return true
};

const getIncreasingConsecutive = (array, times) => {
  if (array.length < times) {
    return {
      isConsecutive: false,
      data: [],
    };
  }

  for (let i = 0; i <= array.length - times; i++) {
    let arrayCheck = [];
    let j = i;
    while (j < i + times) {
      arrayCheck.push(array[j]);
      j++;
    }
    console.log("arrayCheck", arrayCheck);

    const isIncreasingConsecutive = hasIncreasingSequence(arrayCheck);
    if (isIncreasingConsecutive) {
      return {
        isConsecutive: true,
        data: arrayCheck,
      };
    }
  }

  return {
    isConsecutive: false,
    data: [],
  };
};

module.exports = {
  hasIncreasingSequence,
  getIncreasingConsecutive,
};
