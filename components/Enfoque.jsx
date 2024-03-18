import React from 'react';
import styles from '../styles/enfoque.module.css';
import Image from 'next/image';
import enfoque from '../assets/enfoquin.png';
import logo from '../assets/logo-enfoque.png';
import enfoque1 from '../assets/enfoque-1.png';
import enfoque2 from '../assets/enfoque-2.png';
import enfoque3 from '../assets/enfoque-3.png';
import enfoque4 from '../assets/enfoque-4.png';
import enfoque5 from '../assets/enfoque-5.png';
import enfoque6 from '../assets/enfoque-6.png';

  const Enfoque = () => {

  
    return (
      <section id='enfoque'>
        <div className={styles['enfoque']}>
        <div className={styles['images']}> 
        <Image className={styles['buho']} src={enfoque} width={400} height={400} alt='icono-enfoque'></Image>
        <Image src={logo} width={150} height={155} alt='logo-enfoque'></Image>
      </div> 
      <div>
      <div className={styles['textToImage']}>
      <h1 className={styles['h1']}>ENFOQUE DIFERENCIAL</h1>
      </div>
      <div className="enfoqueImagis">
      <Image src={enfoque1} className={styles['gridItem']} width={350} height={350} alt='enfoque-info-1'></Image>
      <Image src={enfoque2} className={styles['gridItem']} width={350} height={350} alt='enfoque-info-2'></Image>
      <Image src={enfoque3} className={styles['gridItem']} width={350} height={350} alt='enfoque-info-3'></Image>
      <Image src={enfoque4} className={styles['gridItem']} width={350} height={350} alt='enfoque-info-4'></Image>
      <Image src={enfoque5} className={styles['gridItem']} width={350} height={350} alt='enfoque-info-5'></Image>
      <Image src={enfoque6} className={styles['gridItem']} width={350} height={350} alt='enfoque-info-6'></Image>
      </div>
      </div>
        </div>
      </section>
    )
  }

  export default Enfoque