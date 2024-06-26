import { useEffect, useRef } from 'react';
import Image from "next/image";
import styles from '../styles/Doctores.module.css';
import draAngelica from '../assets/draAngelica.png'
import draLuzYolanda from '../assets/draLuzYolanda.png'
import draMariaDolores from '../assets/draMariaDolores.png'
import draMartha from '../assets/draMartha.png'
import draTere from '../assets/draTere.png'
import drChristian from '../assets/drChristian.png'
import drJorge from '../assets/drJorge.png'
import drJuanGonzalo from '../assets/drJuanGonzalo.png'
// import img1 from '../public/img1.png';


const Doctores = () => {


  const boxRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const prev = prevRef.current;
    const next = nextRef.current;
    const box = boxRef.current;

    console.log('Prev:', prev);
    console.log('Next:', next);
    console.log('Box:', box);

    // Función para mover el primer item al final
    const handleNextClick = () => {
      const items = box.querySelectorAll('.' + styles.item);
      if (items.length > 0) {
        box.appendChild(items[0]);
      }
      console.log('Next button clicked');
    };

    // Función para mover el último item al inicio
    const handlePrevClick = () => {
      const items = box.querySelectorAll('.' + styles.item);
      if (items.length > 0) {
        box.prepend(items[items.length - 1]);
      }
      console.log('Prev button clicked'); 
    };

    // Agregar event listeners
    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    // Limpiar los event listeners al desmontar el componente
    return () => {
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
      <>

    <h3 className={styles.subtitle}>Conoce nuestro personal</h3>
    <div className={styles.recomends}>
        <div ref={boxRef} className={styles.box}>
                <div className={styles.item}>
                    <Image alt='draAngelica' width={250} height={450} src={draAngelica}/>
                </div>   
                <div className={styles.item}>
                    <Image alt='draLuzYolanda' width={250} height={450} src={draLuzYolanda}/>
                </div>
                <div className={styles.item}>
                    <Image alt='drChristian' width={250} height={450} src={drChristian}/>
                </div>
                <div className={styles.item}>
                    <Image alt='draMariaDolores' width={250} height={450} src={draMariaDolores}/>
                </div>
                <div className={styles.item}>
                    <Image alt='drJorge' width={250} height={450} src={drJorge}/>
                </div>
                <div className={styles.item}>
                    <Image alt='draMartha' width={250} height={450} src={draMartha}/>
                </div>
                <div className={styles.item}>
                    <Image alt='draTere' width={250} height={450} src={draTere}/>
                </div>
                <div className={styles.item}>
                    <Image alt='drJuanGonzalo' width={250} height={450} src={drJuanGonzalo}/>
                </div>
        </div>


        <div className={styles.buttons}>
            <span ref={prevRef} className={styles.prev}></span>
            <span ref={nextRef} className={styles.next}></span>
        </div>
    </div>

      </>
    );
};

export default Doctores;