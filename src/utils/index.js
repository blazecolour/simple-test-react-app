export const uniqId = () =>
  Math.random()
    .toString(32)
    .substr(2, 12);
