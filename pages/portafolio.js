//import porta1 from '../public/assets/porta1.jpg'
//import porta2 from '../public/assets/porta2.jpg'
//import porta3 from '../public/assets/porta3.jpg'
//import porta4 from '../public/assets/porta4.jpg'
//import porta5 from '../public/assets/porta5.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Portafolio1() {
    return <>
    
    <Link href='/'><h2>Inicio</h2></Link>
    <div>
    <Image className='imagen' src='../public/assets/porta1.jpg' alt='imagen del portafolio' layout='intrinsic' />
    <Image className='imagen' src='../public/assets/porta2.jpg' alt='imagen del portafolio' layout='intrinsic' />
    <Image className='imagen' src='../public/assets/porta3.jpg' alt='imagen del portafolio' layout='intrinsic' />
    <Image className='imagen' src='../public/assets/porta4.jpg' alt='imagen del portafolio' layout='intrinsic' />
    <Image className='imagen' src='../public/assets/porta5.jpg' alt='imagen del portafolio' layout='intrinsic' />
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