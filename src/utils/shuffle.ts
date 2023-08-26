// Fisher-Yates
export const shuffle = <T>(arr: T[]) => {
  let i;
  let m = arr.length;
  while (m) {
    i = Math.floor(Math.random() * m--);
    const tmp = arr[m];
    arr[m] = arr[i];
    arr[i] = tmp;
  }
  return arr;
};
