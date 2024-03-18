import React from 'react';
import styles from '../styles/enfoque.module.css';
import Image from 'next/image';
import enfoque from '../assets/enfoquin.png';
import logo from '../assets/logo-enfoque.png';



  const Enfoque = () => {

  
    return (
      <section id='enfoque'>
        <div className={styles['enfoque']}>
        <div className={styles['images']}> 
        <Image src={enfoque} width={250} height={250} alt='icono-enfoque'></Image>
        <Image src={logo} width={150} height={175} alt='logo-enfoque'></Image>
      </div> 
      <div>
      <h1 className={styles['h1']}>ENFOQUE DIFERENCIAL</h1>
      </div>
        </div>
      </section>
    )
  }

  export default Enfoque