import { useState } from 'react'

export default function Nani({ className }: { className: string }) {
	const [dasu, setDasu] = useState(false)
	return (
		<div className={className}>
			<button
				type="button"
				className="cursor-pointer hover:text-blue-700"
				onClick={() => {
					if (dasu) {
						setDasu(false)
					} else {
						setDasu(true)
					}
				}}
			>
				これは何？
			</button>
			<Setsumei dasu={dasu} />
		</div>
	)
}

function Setsumei({ dasu }: { dasu: boolean }) {
	if (dasu) {
		return (
			<div>
				<h3 className="text-neutral-500">
					こんなものほんとは必要Nothingだけど
				</h3>

				<h3 className="text-neutral-500">
					頭使わなくても出来るからつい作っちゃう
				</h3>
			</div>
		)
	}
}
