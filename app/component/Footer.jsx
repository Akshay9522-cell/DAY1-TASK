
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <div className='bg-amber-100 flex flex-col md:flex-row gap-6 md:gap-12 justify-evenly p-6' >
                <div className='flex-1'>
                    <ul className='flex flex-col gap-4'>
                        <h1 className='text-red-500 font-bold'>SHOP</h1>
                        <li>All</li>
                        <li>Accessories</li>
                        <li>Approval</li>
                        <li>Jewellery</li>
                        <li>Homeware</li>
                        <li>Brands</li>
                    </ul>
                </div>

                <div className='flex-1'>
                    <ul className='flex flex-col gap-4'>
                        <h1 className='text-red-500 font-bold'>ABOUT</h1>
                        <li>Who we are</li>
                        <li>Values</li>
                        <li>Be a gOOders</li>
                        <li>Make it goood</li>
                        <li>Milano is goood</li>
                        <li>Journal</li>
                    </ul>
                </div>

                <div className='flex-1'>
                    <ul className='flex flex-col gap-4'>
                        <h1 className='text-red-500 font-bold'>INFORMATION</h1>
                        <li>Contact US</li>
                        <li>Terms of Service</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div className='flex-1 flex flex-col gap-4'>
                    <p>
                        Be the First to Know About events, <br />
                        new content, products, or brands at <br />
                        <span className='text-2xl font-bold'>gOOOders</span>
                    </p>
                    <Link href='/' className='text-blue-500 hover:underline'>
                        Subscribe to OUR link channel
                    </Link>
                    <p>xyz@gmail.com</p>
                </div>
            </div>
        </>
    );
}