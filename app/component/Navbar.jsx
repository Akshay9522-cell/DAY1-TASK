import Link from "next/link";
import '../component/Footer.css'


export default function Navbar(){
     return(
        <>
    <nav className="display flex justify-around bg-orange-200 h-13  items-center">
        <h1 className="font-bold text-3xl w-20 "><img src="/images/logo2.jpeg" alt="" className="rounded-2xl" /></h1>
        <ul className="display flex gap-4 justify-center items-center font-bold ">
            <li><Link href='/'>Home</Link></li>
            <li><Link  href='#about'>About</Link></li>
            <li><Link  href='#contact'>Contact</Link></li>
            <li><Link  href='help'>Help</Link></li>
            <li><Link href="#service">Service</Link></li>
        </ul>
    </nav>
    <div className="bg-[url('@/public/images/bg1.jpg')] bg-cover bg-center h-100">
            <div className='text-5xl display flex justify-end pt-16 leading-relaxed font-serif text-amber-300'>
            <h1 >Transforming Ideas into Reality <br /> Your Success Starts Here <br />Empowering Your Journey <br /> </h1>

            </div>
        </div>
        </>
     )
}