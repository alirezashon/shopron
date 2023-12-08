
import React from 'react'

const FlowChart: React.FC = () => {
	const flowDomain = [2, 4, 7, 5, 6]

	const renderFlowCircles = () => {
		const totalCircles = flowDomain.length
		const radius = '6vh'
		const circumference = 2 * Math.PI * parseInt(radius, 10)
		const spaceBetween =
			totalCircles > 1 ? circumference / (totalCircles - 1) : 0

		return flowDomain.map((domain, index) => (
			<div
				key={index}
				style={{
					...FlowDomain,
					transform: `rotate(${(360 / totalCircles) * index}deg) translate(${
						spaceBetween * index
					}px, 0) rotate(-${(360 / totalCircles) * index}deg)`,
        }}
      ></div>
		))
	}

	return (
		<>
			<div style={Container}>
				<div style={Flow}>
					<div style={FlowBase}>{renderFlowCircles()}</div>
				</div>
				<div style={Chart}></div>
			</div>
		</>
	)
}

const Container: React.CSSProperties = {
	width: '100vw',
	height: '80vh',
	background: 'radial-gradient(rgba(232, 247, 255, 0.934), rgb(255, 236, 197))',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}

const Flow: React.CSSProperties = {
	width: '90%',
	height: '13%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	background: 'radial-gradient(rgba(232, 247, 25, 0.934), rgb(255, 26, 17))',
}

const FlowBase: React.CSSProperties = {
	width: '80%',
	height: '10%',
	background: 'linear-gradient(rgba(112,222,192.9),rgba(44,88,198,.9))',
	borderRadius: '7vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

const FlowDomain: React.CSSProperties = {
	width: '2.5vh', // Adjusted size for the circle
	height: '2.5vh', // Adjusted size for the circle
	background: 'linear-gradient(rgba(222,22,12.9),rgba(44,188,198,.9))',
	borderRadius: '50%', // Make it a circle
	marginLeft: '1vh', // Space between circles
}

const Chart: React.CSSProperties = {
	width: '100%',
	height: '77%',
	background: 'radial-gradient(rgba(22, 27, 255, 0.934), rgb(5, 236, 19))',
}

export default FlowChart