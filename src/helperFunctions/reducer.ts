export const reducer = (state: boolean[], index: number) => {
  return state.map((value, i) => {
    if (index === i) {
      return true;
    }
    return false;
  });
};
