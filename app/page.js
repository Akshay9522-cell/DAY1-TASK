
import Image from "next/image";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home1 from "./component/Home1";
import Service from "./component/Service";
import Testimonial from "./component/Testimonial";
import About from "./component/About";
import Contact from "./component/Contact";
import Partner from "./component/Partners";


export default function Home() {
  return (
   <>
  
   <Navbar/>
   <Home1/>
   <Service/>
   <Testimonial/> 
   <About/>
   <Contact/>
   <Partner/>
   <Footer/>

   </>
  );
}
