import React  from 'react';
import Image from 'next/image';
import CTA from './CTA';
import Me from '../../assets/doctora.png';
import doctores from '../../assets/doctores.png';
import HeaderSocials from './HeaderSocials';
import styles from '../../styles/header.module.css';
import { useTranslation } from 'react-i18next';


const Header = () => {

  const [t, i18n] = useTranslation("globals");



  return (
    <header className={styles['header']}>
        <div className={styles['header_container']}>
          <h4>{t('Header.hello-world')}</h4>
          <h1>Sus Médicos S.A.S.</h1>
          <h3 className={styles['text-light']}>{t('Header.ocupation')}</h3>
          <CTA />
          <HeaderSocials />

          <div className={styles["me"]}>
            <Image src={doctores} alt='Profile pic' />
            <Image src={Me} width={150} height={150} alt='Profile pic' />
          </div>

          <a href='#contact' className={styles['scroll_down']}>{t('Header.scroll')}</a>
        </div>
    </header>
  )
}

export default Header