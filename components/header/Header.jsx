import React  from 'react';
import Image from 'next/image';
import CTA from './CTA';
import Me from '../../assets/Nuevo Logo - copia.jpg';
import HeaderSocials from './HeaderSocials';
import styles from '../../styles/header.module.css';
import { useTranslation } from 'react-i18next';


const Header = () => {

  const [t, i18n] = useTranslation("globals");



  return (
    <header className={styles['header']}>
      <div className={styles['container']}>
        <div className={styles['header_container']}>
          <h5>{t('Header.hello-world')}</h5>
          <h1>Sus Médicos S.A.S.</h1>
          <h5 className={styles['text-light']}>{t('Header.ocupation')}</h5>
          <CTA />
          <HeaderSocials />

          <div className={styles["me"]}>
            <Image src={Me} alt='Profile pic' />
          </div>

          <a href='#contact' className={styles['scroll_down']}>{t('Header.scroll')}</a>
        </div>
      </div>
    </header>
  )
}

export default Header