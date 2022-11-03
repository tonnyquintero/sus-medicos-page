/*<header className='headero'>
         <nav className='navor'>
          <div className='loguito'>
            <Image className='logo' src={Me} alt='Logo' />
          </div>
          <input type='checkbox' id='check' />
          <label id="lblMenu" htmlFor='check' className='bar-btn'>
            <i className='fa-bars'><GiHamburgerMenu /></i>
          </label>

          
          <ul id='back-menu' onClick={cerrar} className='nav-menu'>
            <li className='active'><a href='#'>Inicio</a></li>
            <li><a href='#portfolio'>Portalio</a></li>
            <li><a href='#contact'>Contacto</a></li>
            <li><a target='blank' href='https://susmedicos.sunu.be/login'>Acceso Plataforma</a></li>
            <li><a target='blank' href='https://www.google.com/maps/dir//Calle+29+AA+%2350+-+09,+Medell%C3%ADn,+Antioquia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8e4429b50c9873d9:0xccbf7631256b0d4f?sa=X&ved=2ahUKEwiK_srhzpnsAhXSwFkKHbIuAfkQ9RcwC3oECA8QBA'>Ubicación</a></li>
          </ul>
        




    
                
         </nav>
       </header>*/


import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import Image from 'next/image';
import Me from '../assets/Nuevo Logo - copia.jpg'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className={styles['navbar']}>

      <div className={styles['loguito']}>
            <Image className='logo' src={Me} alt='Logo' />
          </div>
        
        <div className={styles['menu-icon']} onClick={handleClick}>
          <i><GiHamburgerMenu /></i>
        </div>
        <ul className={click ? styles['nav-menuActive'] : styles['nav-menu']}>
          <li className={styles['nav-item']}>
            <a href='#' className={styles['nav-links']} onClick={closeMobileMenu}>
              Inicio
            </a>
          </li>
          
          <li
            className={styles['nav-item']}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a
              target='blank'
              href='https://vidas-page.vercel.app/'
              className={styles['nav-links']}
              onClick={closeMobileMenu}
            >
              Vidas <i className={styles['fas fa-caret-down']} />
            </a>
          </li>

          <li
            className={styles['nav-item']}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a
              href='#portfolio'
              className={styles['nav-links']}
              onClick={closeMobileMenu}
            >
              Portafolio <i className={styles['fas fa-caret-down']} />
            </a>
          </li>
          <li
            className={styles['nav-item']}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a
              target='blank'
              href='https://susmedicos.sunu.be/login'
              className={styles['nav-links']}
              onClick={closeMobileMenu}
            >
              Acceso Plataforma <i className={styles['fas fa-caret-down']} />
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a
              target='blank'
              href='https://www.google.com/maps/dir//Calle+29+AA+%2350+-+09,+Medell%C3%ADn,+Antioquia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8e4429b50c9873d9:0xccbf7631256b0d4f?sa=X&ved=2ahUKEwiK_srhzpnsAhXSwFkKHbIuAfkQ9RcwC3oECA8QBA'
              className={styles['nav-links']}
              onClick={closeMobileMenu}
            >
              Ubicación
            </a>
          </li>
          <li className={styles['nav-item']}>
            <a
              href='#contact'
              className={styles['nav-links']}
              onClick={closeMobileMenu}
            >
              Contactanos
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;