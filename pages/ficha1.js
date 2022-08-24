import ficha11 from '../assets/3.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Ficha1() {
    return <>
    
    <Link href='/'><h2>Inicio</h2></Link>
    <div>
    <Image className='imagen' src={ficha11} alt='imagen del portafolio' layout='intrinsic' />
    </div>
    <style jsx>{`
        div {
            width: 900px;
            height: 300px;
            margin-left: auto;
            margin-right: auto;
            padding-top: 2em;
            
        }
        h2 {
            cursor: pointer;
            background: #663399;
            color: white;
            padding-left: 1em;
            height: 2em;
            
        }

        @media screen and (max-width: 600px) {
            div {
                
                display: contents;
                margin-left: auto;
                margin-right: auto;
                padding-top: 2em;
                
            }
            
        }
        
    `}</style>

</>
}