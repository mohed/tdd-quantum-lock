export const arraysEqual = (a, b) => {
  if (a.length !== b.length) return false;

  return arraysFollow(a, b);
};

export const arraysFollow = (shortArray, fullArray) => {
  if (shortArray === fullArray) return true;
  if (shortArray == null || fullArray == null) return false;

  for (var i = 0; i < shortArray.length; ++i) {
    if (shortArray[i] !== fullArray[i]) return false;
  }

  return true;
};
