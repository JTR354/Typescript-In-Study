const math = require('../src/math')

test('add: 1+2=3', () => {
  expect(math.addTest(1,2)).toBe(3)
})

test('sub: 1-2=-1', () => {
  expect(math.subTest(1,2)).toBe(-1)
})

let xx:number = '1'