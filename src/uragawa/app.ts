import { LogKomoku } from '@/kocchi/log'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { requestId } from 'hono/request-id'
import * as z from 'zod'

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
		requestid: c.get('requestId'),
		timestamp: time,
		useragent: c.req.header('User-Agent')
	}
	if (log) {
		return c.json(log)
	} else{
return c.json("arimasen")
	}
})


export default app
