const magic = (...numbers) => {
  const sum = numbers.reduce((acc, item) => acc + item, 0);
  const inner = (...num) => magic(sum, ...num);
  // inner.valueOf = () => sum;
  return inner;
};

export default magic;
