
import UserList from './List'
import UserManagement from './Actions'
const Design = () => {
	return (
		<>
			<div style={{ display: 'flex' }}>
				<UserManagement />

				<UserList />
			</div>
		</>
	)
}
export default Design
