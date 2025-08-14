import { describe, it } from 'vitest'
import { log } from './log'

describe('log', async () => {
	it('useragent', async () => {
		console.log(await log())
	})
})
