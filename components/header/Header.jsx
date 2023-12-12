import React  from 'react';
import Image from 'next/image';
import CTA from './CTA';
import Me from '../../assets/doctora.png';
import banner from '../../assets/BANNER LINKEDIN.png'
import doctores from '../../assets/doctores.png';
import HeaderSocials from './HeaderSocials';
import styles from '../../styles/header.module.css';
import { useTranslation } from 'react-i18next';


const Header = () => {

  const [t, i18n] = useTranslation("globals");



  return (
    <header className={styles['header']}>
        <div className={styles['header_container']}>
          <h4 className={styles['bienvenido']}>{t('Header.hello-world')}</h4>
          <h4 className={styles['mediaMessage']}>SUS MÉDICOS</h4>
          <h3 className={styles['textlik']}>{t('Header.ocupation')}</h3>
          <CTA />
          <HeaderSocials />
        </div>
    </header>
  )
}

export default Header