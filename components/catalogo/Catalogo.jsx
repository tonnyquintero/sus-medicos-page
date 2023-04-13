import React from 'react';
import styles from '../../styles/catalogo.module.css';

const data = [
    {
      id: 2,
      title: 'Catalogo Financiero',
      gitHub: 'https://github.com/tonnyquintero/nextstore',
      deploy: '/catalogo'
    },
    
  ]

  const catalogo = () => {

  
  
    return (
  
        <div  className={styles["catalogo"]}>
  
          {
            data.map(({id, title, image, gitHub, deploy}, index) => {
              return (
                <div key={index}>
                <h2>{title}</h2>
  
                  <a href={deploy} className='btn btn-primary' >Visitar</a>

                </div>
              )
            })
          }  
  
        </div>
    )
  }

  export default catalogo