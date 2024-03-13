const task4 = () => {
  const num = Math.round(Math.random() * 100);
  const numD = Math.round(Math.sqrt(num));
  for (let i = 2; i <= numD; i += 1) {
    if (num % i === 0) {
      return [num, 'no'];
    }
  }
  return [num, 'yes'];
};

export default task4;
