import { useState } from "react"
import styles from "./index.module.css"
const Akbaraformassion = () => {
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false)
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
          <div className={styles.Akbaraformassion}>
            <div className={styles.header}>
              <p className={styles.title}>title</p>
            </div>
            <div className={styles.formRow}>
              <input type="email" className={styles.email} />
              <label className={styles.label}>Email</label>
            </div>
            <div className={styles.formRow}>
              <input type="number" className={styles.phone} />
              <label className={styles.label}>PhonNumber</label>
            </div>
            <div className={styles.formRow}>
              <input type="password" className={styles.password} />
              <label className={styles.label}>Password</label>
            </div>
            <div className={styles.formRow}>
              <input type="number" className={styles.houseNumber} />
              <label className={styles.label}>House Number</label>
            </div>
            <div className={styles.formRow}>
              <input type="number" className={styles.unit} />
              <label className={styles.label}>Unit</label>
              </div>
              <div className={styles.formRow}>
              <input type="text" className={styles.zipcode} />
              <label className={styles.label}>Zip Code</label>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default Akbaraformassion
