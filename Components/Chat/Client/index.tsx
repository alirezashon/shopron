const createConnection = async (user: string) => {
		const response = await fetch('/api/chatroom', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ authType: '', user }),
		})
		const data = await response.json()
		console.log(data)
	}

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user') || '')
		createConnection(user)
	}, [])
w