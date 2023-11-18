/** @format */

import { useState } from 'react'
import styles from './index.module.css'
const Akbaraformassion = () => {
	const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false)
	const [email, setEmail] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [houseNumber, setHouseNumber] = useState<string>('')
	const [houseUnit, setHouseUnit] = useState<string>('')
	const [zipCode, setZipCode] = useState<string>('')
	const [address, setAddres] = useState<string>('')

	const Register = async () => {
 		const response = await fetch('/api/Auth/Register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email,
				phone,
				password,
				information: {
					address,
					houseNumber,
					houseUnit,
					zipCode,
				},
				authType: 'C%L&i&E^n$T#R&E^g@i&s%T$e#R',
			}),
		})
		const data = await response.json()
		console.log(data)
	}
	return (
		<>
			<div className={styles.AkbaraforBase}>
				{isEyeOpen ? (
					<div className={styles.AkbaraforEyes}>
						<div className={styles.AkbaraforinerEyes}>
							<div className={styles.Akbaramali}></div>
						</div>
					</div>
				) : (
					<>
						<div className={styles.Kalim}></div>
						<div className={styles.Akbaraformalo}>
							<div className={styles.header}>
								<p className={styles.title}>title</p>
							</div>
							<div className={styles.Akbaraformassion}>
								<form onSubmit={Register}>
									<div className={styles.formRow}>
										<input
											value={email}
											placeholder='ایمیل...'
											type='email'
											onChange={(e) => setEmail(e.target.value)}
											className={styles.email}
										/>
										<label className={styles.label}>ایمیل</label>
									</div>
									<div className={styles.formRow}>
										<input
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											type='number'
											placeholder='شماره تماس...'
											className={styles.phone}
											required
										/>
										<label className={styles.label}>شماره تماس</label>
									</div>
									<div className={styles.formRow}>
										<input
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											type='password'
											placeholder='رمز عبور...'
											className={styles.password}
											required
										/>
										<label className={styles.label}>رمز عبور</label>
									</div>
									<div className={styles.formRow}>
										<input
											value={houseNumber}
											onChange={(e) => setHouseNumber(e.target.value)}
											type='number'
											placeholder='پلاک...'
											className={styles.houseNumber}
											required
										/>
										<label className={styles.label}>پلاک</label>
									</div>
									<div className={styles.formRow}>
										<input
											value={houseUnit}
											onChange={(e) => setHouseUnit(e.target.value)}
											placeholder='واحد...'
											type='number'
											className={styles.unit}
											required
										/>
										<label className={styles.label}>واحد</label>
									</div>
									<div className={styles.formRow}>
										<input
											value={zipCode}
											onChange={(e) => setZipCode(e.target.value)}
											type='text'
											placeholder='کدپستی...'
											className={styles.zipcode}
											required
										/>
										<label className={styles.label}>کد پستی</label>
									</div>
									<div className={styles.formRow}>
										<textarea
											value={address}
											onChange={(e) => setAddres(e.target.value)}
											dir='rtl'
											placeholder='آدرس...'
											required></textarea>
										<label className={styles.label}>آدرس</label>
									</div>
									<input
										value='Register'
										type='submit'
									/>
								</form>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	)
}
export default Akbaraformassion
