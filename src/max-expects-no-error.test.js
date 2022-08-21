test("bar", function () {
	expect(true).toBe(true)
	expect(true).toBe(true)
	expect(true).toBe(true)
	expect(true).toBe(true)
	expect(true).toBe(true)
})

test("foo", function () {
	expectNonNullString("hello world")
	expect(true).toBe(true)
})

function expectNonNullString(obj) {
	expect(obj).not.toBe(null)
	expect(typeof obj).toBe("string")
}
