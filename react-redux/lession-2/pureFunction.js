// Pure functions are another core concept of functional programming. They will make
// your life much easier because they will not affect your application’s state. When writing functions, try to follow these three rules:
// 1. The function should take in at least one argument.
// 2. The function should return a value or another function.
// 3. The function should not change or mutate any of its arguments.


const fredrick = {
  name: 'Fredrick Doghlous',
  canRead: false,
  canWrite: false,
};
const selfEducated = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
});

console.log(selfEducated(fredrick));
console.log(fredrick);
