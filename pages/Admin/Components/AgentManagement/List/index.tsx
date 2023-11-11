/** @format */

import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

type Agent = {
	agentName: string
	agentCode: string
}

const AgentList = () => {
	const [agents, setAgents] = useState<Agent[]>([])
	const [headerText, setHeaderText] = useState<string>('Agents List')
	const [widthPercentage, setWidthPercentage] = useState<number>(1)
	useEffect(() => {
		const fetchAgents = async () => {
			try {
				const res = await fetch('/api/AgentManagement/GET', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ authType: 'G!E@T#A^G#E$N%T^S*' }),
				})

				if (!res.ok) {
					console.error('Error fetching Agents')
					return
				}

				const data = await res.json()
				setAgents(data.agents)
			} catch (error) {
				console.error('Error:', error)
			}
			useState
		}

		fetchAgents()
	}, [])

	return (
		<div
			className={styles.agentListBackground}
			style={{ width: `${50 * widthPercentage}vw` }}>
			<h2
				className={styles.header}
				onMouseOver={() => setHeaderText('have a nice day')}
				onMouseLeave={() => setHeaderText('Agent List')}>
				{headerText}
			</h2>
			<div className={styles.agentsBox}>
				<div className={styles.agentBoxScroller}>
					<ul>
						{agents.map((agent) => (
							<li
								className={styles.agent}
								style={{ width: `${40 * widthPercentage}vw` }}
								key={agent.agentName}>
								<strong className={styles.email}>
									Agent: {agent.agentName}
								</strong>{' '}
								<strong className={styles.name}>Code: {agent.agentCode}</strong>
							</li>
						))}
					</ul>{' '}
				</div>
			</div>
		</div>
	)
}
export default AgentList
