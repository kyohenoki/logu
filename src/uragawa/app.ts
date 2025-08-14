import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import * as z from 'zod'

const app = new Hono()

const aschema = z.object({
	name: z.string(),
	age: z.number()
})

export type Author = z.infer<typeof aschema>

app.get('/', (c) => {
	return c.text('logu')
})

app.post('/author', zValidator('json', aschema), (c) => {
	const data = c.req.valid('json')
	return c.json({
		success: true,
		message: `${data.name} is ${data.age}`
	})
})

export default app
