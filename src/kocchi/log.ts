import ky from 'ky'

export async function log() {
	try {
		const app = ky.create({
			prefixUrl: 'http://localhost:8787'
		})
		const data: LogKomoku = await app.get('log').json()
		return {
			success: true,
			data: data
		}
	} catch (err) {
		return {
			success: false,
			message: (err as Error).message
		}
	}
}

export type LogKomoku = {
	timestamp: number
	requestid: string
	website: string | undefined
	url: string | undefined
	language: string | undefined
	useragent: string | undefined
	event: string
}
