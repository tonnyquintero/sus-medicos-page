import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import Navbar from '../components/Navbar';
import About from '../components/about/About';


import Services from '../components/services/Services';
import Portfolio from '../components/portfolio/Portfolio';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Catalogo from '../components/catalogo/Catalogo';
import espFlag from '../assets/colFlag.png';
import enFlag from '../assets/enFlag.png';

import { useTranslation } from 'react-i18next';


export default function Home() {

  const [t, i18n] = useTranslation("globals");



  const cerrar = () => {
    
  }



  return (
    <>
      <Head>
        <title>Sus Médicos IPS, EXAMENES MEDICOS OCUPACIONALES EN MEDELLIN</title>
        <meta name="description" content="IPS EXAMENES MEDICOS OCUPACIONALES EN MEDELLIN, IPS EXÁMENES OCUPACIONALES MEDELLIN, EXAMENES MÉDICOS MEDELLIN, EXÁMENES DE LABORATORIO EN MEDELLIN, Conciencia Laboral y Valoración" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div className="containerFlag">
                  <button className='btn-bg' onClick={() => i18n.changeLanguage("es")}>
                    <Image className='btn-flag' src={espFlag} alt="Español" />
                  </button>
                  <button className='btn-bg' onClick={() => i18n.changeLanguage("en")}>
                    <Image className='btn-flag'  src={enFlag} alt="ingles" />
                  </button>

              </div>
       <Navbar />
       <Header />
       <Nav />
       <About />
       <Services />
       <Portfolio />
       <Testimonials />
       <Contact />
       <Footer />
       <Catalogo />
    </>
  )
}
