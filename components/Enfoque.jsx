import React from "react";
import styles from "../styles/enfoque.module.css";
import Image from "next/image";
//import enfoque from "../public/assets/enfoquin.png";
//import logo from "../public/assets/logo-enfoque.png";
//import enfoque1 from "../public/assets/enfoque-1.png";
//import enfoque2 from "../public/assets/enfoque-2.png";
//import enfoque3 from "../public/assets/enfoque-3.png";
//import enfoque4 from "../public/assets/enfoque-4.png";
//import enfoque5 from "../public/assets/enfoque-5.png";
//import enfoque6 from "../public/assets/enfoque-6.png";

const Enfoque = () => {
  return (
    <div id="section">
      <h1 className={styles["h1"]}>ENFOQUE DIFERENCIAL</h1>
      <div className={styles["enfoque"]}>
        <div className={styles["images"]}>
          <Image
            className={styles["buho"]}
            src="../public/assets/enfoquin.png"
            width={400}
            height={400}
            alt="icono-enfoque"
          ></Image>
          <Image
            src="../public/assets/logo-enfoque.png"
            alt="logo-enfoque"
          ></Image>
        </div>

        <div className={styles["enfoqueImagis"]}>
          <Image
            src="../public/assets/enfoque-1.png"
            width={450}
            height={450}
            alt="enfoque-info-1"
          ></Image>
          <Image
            src="../public/assets/enfoque-2.png"
            width={450}
            height={450}
            alt="enfoque-info-2"
          ></Image>
          <Image
            src="../public/assets/enfoque-3.png"
            width={450}
            height={450}
            alt="enfoque-info-3"
          ></Image>
          <Image
            src="../public/assets/enfoque-4.png"
            width={450}
            height={450}
            alt="enfoque-info-4"
          ></Image>
          <Image
            src="../public/assets/enfoque-5.png"
            width={450}
            height={450}
            alt="enfoque-info-5"
          ></Image>
          <Image
            src="../public/assets/enfoque-6.png"
            width={450}
            height={450}
            alt="enfoque-info-6"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Enfoque;
