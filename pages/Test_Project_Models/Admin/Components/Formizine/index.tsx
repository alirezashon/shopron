/** @format */
import { useState } from 'react'
import Image from 'next/image'
import { IoArrowBackCircle } from 'react-icons/io5'
import styles from './index.module.css'
import AdminManagement from '@/Components/AdminManagement'
import CityManagement from '@/Components/CityManagement'
import ClientManagement from '@/Components/ClientManagement'
import AgentManagement from '@/Components/AgentManagement'
const Formizine = () => {
	const [state, setState] = useState<string>('default')

	return (
		<>
			<div className={styles.container}>
				{state !== 'default' && (
					<IoArrowBackCircle
						className={styles.backIcon}
						size={'5vh'}
						onClick={() => setState('default')}
					/>
				)}
				{state === 'admin' ? (
					<AdminManagement />
				) : state === 'city' ? (
					<CityManagement />
				) : state === 'agent' ? (
					<AgentManagement />
				) : state === 'client' ? (
					<ClientManagement />
				) : (
					<div className={styles.FormizineContainer}>
						<div className={styles.Formizine}>
							<div className={styles.FormizineRow}>
								<Image
									className={styles.Image}
									src={'/images/Admin.jpg'}
									width={1111}
									height={1111}
									alt='Admin'
									onClick={() => setState('admin')}
								/>
								<Image
									className={styles.Image}
									src={'/images/City.jpg'}
									width={1111}
									height={1111}
									alt='City'
									onClick={() => setState('city')}
								/>
							</div>
							<div className={styles.FormizineRow}>
								<Image
									className={styles.Image}
									src={'/images/Client.jpg'}
									width={1111}
									height={1111}
									alt='Client'
									onClick={() => setState('client')}
								/>

								<Image
									className={styles.Image}
									src={'/images/Agent.jpg'}
									width={1111}
									height={1111}
									alt='Agent'
									onClick={()=>setState('agent')}
												/>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	)
}
export default Formizine
