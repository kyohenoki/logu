import ky from 'ky'
import type { Author } from '@/uragawa/app'

export async function author(name: string, age: number) {
	try {
		const app = ky.create({
			prefixUrl: 'http://localhost:8787'
		})
		const data: Author = await app
			.post('author', {
				json: {
					name: name,
					age: age
				}
			})
			.json<Author>()
		return data
	} catch (err) {
		return {
			success: false,
			message: (err as Error).message
		}
	}
}
