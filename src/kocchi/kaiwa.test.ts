import { expect, test } from 'vitest'
import { author } from './kaiwa'

test('author', async () => {
	expect(await author('kyohei', 14)).toStrictEqual({
		success: true,
		message: 'kyohei is 14'
	})
})
