'use client'

import { useEffect, useState } from 'react'
import { author } from '@/kocchi/kaiwa'
import { type LogKomoku, log } from '@/kocchi/log'
import type { Author } from '@/uragawa/app'

export default function Kaiwa({ className }: { className: string }) {
	const [message, setMessage] = useState<string | null>(null)
	const [logs, setLogs] = useState<LogKomoku | null>(null)
	useEffect(() => {
		;(async () => {
			// author
			const m: Author = await author('kyohei', 14)
			setMessage(m.message)
			// log
			const l = await log()
			if (l.success) {
				if (l.data) {
					setLogs(l.data)
				}
			}
		})()
	}, [])
	return (
		<div className={className}>
			<h3>{message}</h3>
			<h3>{logs?.timestamp}</h3>
			<h3>{logs?.requestid}</h3>
			<h3>{logs?.website}</h3>
			<h3>{logs?.url}</h3>
			<h3>{logs?.language}</h3>
			<h3>{logs?.useragent}</h3>
			<h3>{logs?.event}</h3>
		</div>
	)
}
