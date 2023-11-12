
const largestN = require('./problem12.js')

test('fail:array sorted, output as string', () => {
	expect(largestN([1, 2, 3, 100, 4, 20])).toEqual(432201100)
})


test('still a strict check', () => {
	expect(largestN(1, 2, 3, 100, 4, 20)).toEqual(432201100)
})

test('correct integers sorted inside a string', () => {
	expect(largestN(1, 2, 3, 100, 4, 20)).toBe(432201100)
})
