/** @format */

import { useState } from 'react'
import Custom from './Custom'
import Details from './Details'
import Location from './Location'
import Payment from './Payment'
import TimeHandling from './TimeHandling'
const FlowChart: React.FC = () => {
	const [state, setState] = useState<number>(0)
	const flowDomain = [Custom, Details, Location, Payment, TimeHandling]
	const Renderero = flowDomain[state]
	return (
		<>
			<div style={Container}>
				<div style={Flow}>
					<div style={FlowBase}>
						{flowDomain.map((domain, index) => (
							<div
								style={FlowDomain}
								onClick={() => setState(index)}>
								{index}
							</div>
						))}
					</div>
				</div>
				<div style={Chart}>{Renderero && <Renderero />}</div>
			</div>
		</>
	)
}
export default FlowChart

const Container: React.CSSProperties = {
	width: '100vw',
	height: '100vh',
	background: 'radial-gradient(rgba(232, 247, 255, 0.934), rgb(255, 254,253))',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign:'center'
}
const Flow: React.CSSProperties = {
	width: '90%',
	height: '13%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	background:
		'radial-gradient(rgba(122, 217, 205, 0.934), rgb(247,247,247),rgb(255, 216, 217))',
	border: '.3vh ridge rgba(7,7,7,.7)',
	borderRadius: '4vh',
}
const FlowBase: React.CSSProperties = {
	width: '80%',
	height: '10%',
	background: 'linear-gradient(rgba(112,222,192.9),rgba(44,88,198,.9))',
	borderRadius: '7vh',
	display: 'flex',
	flexDirection: 'row-reverse',
	justifyContent: 'space-around',
	alignItems: 'center',
}
const FlowDomain: React.CSSProperties = {
	width: '7vh',
	height: '7vh',
	background:
	'radial-gradient(rgba(247,247,247,.7),rgba(22,122,122.9),rgba(247,247,247,.7))',
	color:'rgba(0,0,22,.9)',
	borderRadius: '7vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	cursor:'pointer'
}
const Chart: React.CSSProperties = {
	width: '100%',
	height: '77%',
 }
