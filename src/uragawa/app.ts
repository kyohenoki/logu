import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { requestId } from 'hono/request-id'
import * as z from 'zod'
import type { LogKomoku } from '@/kocchi/log'

const app = new Hono()

const aschema = z.object({
	name: z.string(),
	age: z.number()
})

export type Author = {
	success: boolean
	message: string
}

app.use('*', cors(), requestId())

app.get('/', (c) => {
	return c.text(`${c.get('requestId')}`)
})

app.post('/author', zValidator('json', aschema), (c) => {
	const data = c.req.valid('json')
	return c.json({
		success: true,
		message: `${data.name} is ${data.age}`
	})
})

// LOG
// request / time / useragent
app.get('/log', (c) => {
	const time = Date.now()
	const log: LogKomoku = {
		timestamp: time,
		requestid: c.get('requestId'),
		website: c.req.header('Origin'),
		url: c.req.header('Referer'),
		language: c.req.header('Accept-Language'),
		useragent: c.req.header('User-Agent'),
		event: "load"
	}
	if (log) {
		return c.json(log)
	} else {
		return c.json('error')
	}
})

export default app
