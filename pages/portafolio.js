import porta1 from '../assets/porta1.jpg'
import porta2 from '../assets/porta1.jpg'
import porta3 from '../assets/porta1.jpg'
import porta4 from '../assets/porta1.jpg'
import porta5 from '../assets/porta1.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Portafolio1() {
    return <>
    
    <Link href='/'><h2>Inicio</h2></Link>
    <div>
    <Image className='imagen' src={porta1} alt='imagen del portafolio' layout='intrinsic' />
    <Image className='imagen' src={porta2} alt='imagen del portafolio' layout='intrinsic' />
    <Image className='imagen' src={porta3} alt='imagen del portafolio' layout='intrinsic' />
    <Image className='imagen' src={porta4} alt='imagen del portafolio' layout='intrinsic' />
    <Image className='imagen' src={porta5} alt='imagen del portafolio' layout='intrinsic' />
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