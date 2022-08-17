import React from 'react';
import styles from '../../styles/header.module.css';
import { useTranslation } from 'react-i18next';

const CTA = () => {

  const [t, i18n] = useTranslation("globals");

  return (
    <div className={styles.cta}>
        <a href='#contact' className='btn'>{t('cta.download')}</a>
        <a href='#portfolio' className='btn btn-primary'>{t('cta.letsTalk')}</a>
    </div>
  )
}

export default CTA