'use client'

import { useEffect, useState } from 'react'
import { author } from '@/kocchi/kaiwa'
import type { Author } from '@/uragawa/app'
import { log } from '@/kocchi/log'

export default function Kaiwa({ className }: { className: string }) {
	const [message, setMessage] = useState<string | null>(null)
	const [logs, setLogs] = useState<string | null>(null)
	useEffect(() => {
		(async () => {
			// author
			const m: Author = await author('kyohei', 14)
			setMessage(m.message)
			// log
			const l = await log()
			if (l.success) {
				if (l.data) {
				const d = l.data.requestid
				setLogs(d)
				}
			}
		})()
	}, [])
	return (
		<div className={className}>
			<h3>{message}</h3>
			<h3>{logs}</h3>
			<h4>お！</h4>
		</div>
	)
}
