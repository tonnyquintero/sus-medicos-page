import Head from 'next/head';
import Image from 'next/image';
import Enfoque from '../components/Enfoque';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import Navbar from '../components/Navbar';
import About from '../components/about/About';
import Doctores from '../components/Doctores';
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
        <meta charSet="UTF-8" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snipets:-1' />
        <title>Sus Médicos IPS, EXAMENES MEDICOS OCUPACIONALES EN MEDELLIN</title>
        <meta name="description" content="IPS EXAMENES MEDICOS OCUPACIONALES EN MEDELLIN, IPS EXÁMENES OCUPACIONALES MEDELLIN, EXAMENES MÉDICOS MEDELLIN, EXÁMENES DE LABORATORIO EN MEDELLIN, Conciencia Laboral y Valoración" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:locale' content='es_ES' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Sus Médicos IPS, EXAMENES MEDICOS OCUPACIONALES EN MEDELLIN' />
        <meta property='og:description' content='IPS EXAMENES MEDICOS OCUPACIONALES EN MEDELLIN, IPS EXÁMENES OCUPACIONALES MEDELLIN, EXAMENES MÉDICOS MEDELLIN, EXÁMENES DE LABORATORIO EN MEDELLIN, Conciencia Laboral y Valoración' />
        <meta property='og:url' content='https://sus-medicos.com' />
        <meta property='og:site_name' content='susmedicos' />
        <meta property='og:image' content='https://www.sus-medicos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsus1.e20ce011.jpg&w=640&q=75' />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel='canonical' href='https://sus-medicos.com' />
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
       <Doctores />
       <Enfoque />
       <Services />
       <Portfolio />
       <Testimonials />
       <Contact />
       <Footer />
       <Catalogo />
    </>
  )
}
