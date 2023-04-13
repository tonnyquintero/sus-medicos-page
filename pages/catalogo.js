import cata1 from '../assets/cata1.jpg'
import cata2 from '../assets/cata2.jpg'
import cata3 from '../assets/cata3.jpg'
import cata4 from '../assets/cata4.jpg'
import cata5 from '../assets/cata5.jpg'
import cata6 from '../assets/cata6.jpg'
import cata7 from '../assets/cata7.jpg'
import cata8 from '../assets/cata8.jpg'
import cata9 from '../assets/cata9.jpg'
import cata10 from '../assets/cata10.jpg'
import cata11 from '../assets/cata11.jpg'
import cata12 from '../assets/cata12.jpg'
import cata13 from '../assets/cata13.jpg'
import cata14 from '../assets/cata14.jpg'
import cata15 from '../assets/cata15.jpg'
import cata16 from '../assets/cata16.jpg'
import cata17 from '../assets/cata17.jpg'
import cata18 from '../assets/cata18.jpg'
import cata19 from '../assets/cata19.jpg'

import Image from 'next/image'
import Link from 'next/link'

export default function Portafolio1() {
    return <>
    
    <Link href='/'><h2>Inicio</h2></Link>
    <div>
    <Image className='imagen' src={cata5} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata6} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata7} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata8} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata9} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata10} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata11} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata12} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata13} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata14} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata15} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata16} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata17} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata18} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata19} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata1} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata2} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata3} alt='imagen del catalogo' layout='intrinsic' />
    <Image className='imagen' src={cata4} alt='imagen del catalogo' layout='intrinsic' />
    </div>
    <style jsx>{`
        div {
            
            
            height: 300px;
            margin-left: auto;
            margin-right: auto;
            display: content;
        }
        h2 {
            cursor: pointer;
            background: #663399;
            color: white;
            padding-left: 1em;
        }
        
    `}</style>

</>
}