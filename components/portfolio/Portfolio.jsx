import React from "react";
import styles from "../../styles/portfolio.module.css";
import Image from "next/image";
//import Store from '../../public/assets/1.png';
//import Rick from '../../public/assets/2.png';
//import Task from '../../public/assets/3.png';
//import Travel from '../../public/assets/4.png';
//import Toscana from '../../public/assets/5.png';
//import Cardio from '../../public/assets/6.png';

import { useTranslation } from "react-i18next";

const data = [
  {
    id: 2,
    title: "Portafolio Completo",
    image: "../../public/assets/1.png",
    gitHub: "https://github.com/tonnyquintero/nextstore",
    deploy: "/portafolio",
  },

  {
    id: 3,
    title: "Ficha integral 1",
    image: "../../public/assets/3.png",
    gitHub: "https://github.com/tonnyquintero/Task-Machine",
    deploy: "/ficha1",
  },

  {
    id: 4,
    title: "Conductor de Vehiculo o Mensajería",
    image: "../../public/assets/4.png",
    gitHub: "https://github.com/tonnyquintero/tonnys-travel",
    deploy: "/conductor",
  },

  {
    id: 5,
    title: "Trabajo en Alturas",
    image: "../../public/assets/2.png",
    gitHub: "https://github.com/tonnyquintero/Rick-and-Morty-Api",
    deploy: "/alturas",
  },
  {
    id: 6,
    title: "Manipulación de Alimentos",
    image: "../../public/assets/5.png",
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy: "/manipulacion",
  },
  {
    id: 7,
    title: "Concepto Cardiovascular",
    image: "../../public/assets/6.png",
    gitHub: "https://github.com/tonnyquintero/carta-toscana",
    deploy: "/cardio",
  },
];

const Portfolio = () => {
  const [t, i18n] = useTranslation("globals");

  return (
    <section id="portfolio">
      <h5 className={styles["h5"]}>{t("portfolio.work")}</h5>
      <h2>{t("portfolio.title")}</h2>

      <div className={styles["portfolio_container"]}>
        {data.map(({ id, title, image, gitHub, deploy }, index) => {
          return (
            <article key={index} className={styles["portfolio_item"]}>
              <div className={styles["portfolio_item-image"]}>
                <Image src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className={styles["portfolio_item-cta"]}>
                <a href={deploy} className="btn btn-primary">
                  {t("portfolio.visit")}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
