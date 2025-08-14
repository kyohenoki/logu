import { expect, test } from "vitest"
import { tasu } from "@/index"

test("tasu", () => {
	expect(tasu(10, 20)).toBe(30)
})
