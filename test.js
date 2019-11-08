let test = 100;

module.exports = {
  a: 5,
  b: 10,
  g: () => {
    return test;
  },
  s: v => {
    test = v;
  }
};
