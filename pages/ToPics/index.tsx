import styles from './index.module.css';

const ToPics = () => {
  return (
    <div className={styles.background}>
      <div className={styles.shapeContainer}>
        <span className={styles.rectangleStrokeLeft}><p>&#9651;</p> </span>
        <span className={styles.rectangleStrokeCenter}> &#9651;</span>
        <span className={styles.rectangleStrokeRight}> &#9651;</span>
      </div>
    </div>
  );
};

export default ToPics;
