import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Doctores.module.css";
//import draAngelica from "../public/assets/draAngelica.png";
//import draLuzYolanda from "../public/assets/draLuzYolanda.png";
//import draMariaDolores from "../public/assets/draMariaDolores.png";
//import draMartha from "../public/assets/draMartha.png";
//import draTere from "../public/assets/draTere.png";
//import drChristian from "../public/assets/drChristian.png";
//import drJorge from "../public/assets/drJorge.png";
//import drJuanGonzalo from "../public/assets/drJuanGonzalo.png";
// import img1 from '../public/img1.png';

const Doctores = () => {
  const boxRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const prev = prevRef.current;
    const next = nextRef.current;
    const box = boxRef.current;

    console.log("Prev:", prev);
    console.log("Next:", next);
    console.log("Box:", box);

    // Función para mover el primer item al final
    const handleNextClick = () => {
      const items = box.querySelectorAll("." + styles.item);
      if (items.length > 0) {
        box.appendChild(items[0]);
      }
      console.log("Next button clicked");
    };

    // Función para mover el último item al inicio
    const handlePrevClick = () => {
      const items = box.querySelectorAll("." + styles.item);
      if (items.length > 0) {
        box.prepend(items[items.length - 1]);
      }
      console.log("Prev button clicked");
    };

    // Agregar event listeners
    next.addEventListener("click", handleNextClick);
    prev.addEventListener("click", handlePrevClick);

    // Limpiar los event listeners al desmontar el componente
    return () => {
      next.removeEventListener("click", handleNextClick);
      prev.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <>
      <h3 className={styles.subtitle}>Conoce nuestro personal</h3>
      <div className={styles.recomends}>
        <div ref={boxRef} className={styles.box}>
          <div className={styles.item}>
            <Image
              alt="draAngelica"
              width={250}
              height={450}
              src="../public/assets/draAngelica.png"
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="draLuzYolanda"
              width={250}
              height={450}
              src="../public/assets/draLuzYolanda.png"
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="drChristian"
              width={250}
              height={450}
              src="../public/assets/drChristian.png"
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="draMariaDolores"
              width={250}
              height={450}
              src="../public/assets/draMariaDolores.png"
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="drJorge"
              width={250}
              height={450}
              src="../public/assets/drJorge.png"
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="draMartha"
              width={250}
              height={450}
              src="../public/assets/draMartha.png"
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="draTere"
              width={250}
              height={450}
              src="../public/assets/draTere.png"
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="drJuanGonzalo"
              width={250}
              height={450}
              src="../public/assets/drJuanGonzalo.png"
            />
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
