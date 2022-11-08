import Image from "next/image";
import styles from './header.module.css';

export default function CustomHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image 
          src='/images/logo.svg'
          alt='Duolingo logo'
          height='50'
          width='110'
        />
      </div>

      <div className={styles.profileContainer}>

        <div className={styles.languagesContainer}>
          <div 
            className={styles.languagesImage}
          />
        </div>

        <div className={styles.progress}>
          <Image
            src='/images/fire.svg'
            height='25'
            width='25'
            alt='Fire'
          />
          <h3 className={`${styles.progressInfo} ${styles.progressInfoOrange}`}>89</h3>
        </div>

        <div className={styles.progress}>
          <Image
            src='/images/emerald.svg'
            height='25'
            width='25'
            alt='Emerald'
          />
          <h3 className={`${styles.progressInfo} ${styles.progressInfoRed}`}>746</h3>
        </div>

        <div className={styles.profilePicture} />
      </div>
    </div>
  );
}