import React from 'react';
import styles from '../../styles/catalogo.module.css';
import Link from 'next/link';



  const catalogo = () => {

  
    return (
      <div className={styles['catalogo']}> 
        <h2>Catalogo Financiero</h2>

        <Link href="/catalogo.pdf" passHref >
        <button className='btn btn-primary'>Visitar</button>
        </Link>
      </div> 
    )
  }

  export default catalogo