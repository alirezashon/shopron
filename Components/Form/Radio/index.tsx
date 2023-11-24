import styles from './index.module.css'
interface RadioItems {
label: string;
borderColor: string;
bgColor: string;
selectedBorderColor: string;
default: boolean;
}
const Radio = () => {
  const radioButtonsDetails: RadioItems[] = [
        { label: 'radio', borderColor: '#ffa20d', bgColor: '#ffe8a2', selectedBorderColor: 'blue', default: true },
    { label: 'radio-2', borderColor: '#ffa20d', bgColor: '#ffe8a2', selectedBorderColor: '#499b01', default: false },
    { label: 'radio-3', borderColor: '#ffa20d', bgColor: '#ffe8a2', selectedBorderColor: '#499b01', default: true },
    { label: 'radio-4', borderColor: '#ffa20d', bgColor: '#ffe8a2', selectedBorderColor: '#499b01', default: false },
    { label: 'radio-5', borderColor: '#ffa20d', bgColor: '#ffe8a2', selectedBorderColor: '#499b01', default: false },
    { label: 'radio-6', borderColor: '#ffa20d', bgColor: '#ffe8a2', selectedBorderColor: '#499b01', default: true },
    { label: 'radio-7', borderColor: '#ffa20d', bgColor: '#ffe8a2', selectedBorderColor: '#499b01', default: false },
    { label: 'radio-8', borderColor: '#ffa20d', bgColor: '#ffe8a2', selectedBorderColor: '#499b01', default: true },
    { label: 'radio-9', borderColor: '#ffa20d', bgColor: '#ffe8a2', selectedBorderColor: '#499b01', default: false },
    { label: 'radio-10', borderColor: '#ffa20d', bgColor: '#ffe8a2', selectedBorderColor: '#499b01', default: false },
    { label: 'radio-11', borderColor: '#ffa20d', bgColor: '#ffe8a2', selectedBorderColor: '#499b01', default: false },
  ];

    return (
        <>
            <div className={styles.container}>
                {radioButtonsDetails.map((obj) =>
                    <div className={styles.radioBox} key={obj.label}>
                        <input className={styles.radio} type='radio' />
                        <label className={styles.label}></label>
                    </div>
                )}
        </div>
        </>
    )
}
export default Radio 