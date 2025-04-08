
import '../component/Footer.css'
import Link from 'next/link'
export default function Footer(){
    return(
        <>
        <div className='bg-amber-100 display flex gap-39 justify-evenly p-6' id='foot' >
            <div>
                <ul  className='display flex flex-col gap-6'>
                    <h1 className='text-red-500 bold'>SHOP</h1>
                    <li>All</li>
                    <li>Accessories</li>
                    <li>Approval</li>
                    <li>Jewellery</li>
                    <li>Homeware</li>
                    <li>Brands</li>
                </ul>
            </div>

            <div>
                <ul className='display flex flex-col gap-6'>
                    <h1 className='text-red-500 bold'>ABOUT</h1>
                    <li>Who we are</li>
                    <li>Values</li>
                    <li>Be a gOOders</li>
                    <li>Make it goood</li>
                    <li>Milano is goood</li>
                    <li>Journal</li>
                </ul>
            </div>

            <div>
                <ul className='display flex flex-col gap-6'>
                    <h1 className='text-red-500 bold'>INFORMATION</h1>
                    <li>Contact US</li>
                    <li>Terms of Service</li>
                    <li>Privacy policy</li>
                   
                </ul>
            </div>
            <div className='display flex flex-col gap-6'>
                <p>Be the First to Know About events, <br />new content,products,or brands at <br /> <span className='text-2xl bold'>gOOOders</span> </p>
                <Link href='/'>subscribe to OUR link channel</Link>
                <p> xyz@gmail.com</p>

                <div>
                    
                </div>
            </div>
        </div>
       
        </>
    )
}