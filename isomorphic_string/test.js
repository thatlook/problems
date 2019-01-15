const solution = require('./solution');

test('returns true', () => {
  expect(solution('egg', 'add')).toBe(true);
});

test('returns true', () => {
  expect(solution('title', 'paper')).toBe(true);
});

test('False: unmapped characters exist', () => {
  expect(solution('apple', 'orange')).toBe(false);
});

test('False: maps two characters to one', () => {
  expect(solution('ab', 'aa')).toBe(false);
});
