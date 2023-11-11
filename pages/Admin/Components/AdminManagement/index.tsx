 
import { useState } from 'react'
import UserList from './List'
import UserManagement from './Actions'
const Design = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
 				<div style={{ display: 'flex' }}>
					<UserManagement
 					/>
					 
					<UserList
 					/>
				</div>
			
		</>
	)
}
export default Design
