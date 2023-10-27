import Image from "next/image";
import { HiMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Link from "next/link";
const Footer = () => {
    return ( 
        <>

<footer className="footer p-10 bg-base-200 text-black">
  <aside>
  <Image src="/mgb.png" width={200} height={300} alt="logo"/>
    </aside> 
  <nav>
    <header className="footer-title">Quick Links</header> 
    <Link href={"/"} className="link link-hover text-base">Home</Link> 
    <Link href={"/static/about"} className="link link-hover text-base">About Us</Link> 
    <Link href={"/static/privacy"} className="link link-hover text-base">Privacy policy</Link> 
    
  </nav> 
  
  <nav>
    <header className="footer-title">Contact Us </header> 
    <a className="link link-hover flex items-center gap-2 text-base"><HiMail className="text-[#42A5FF] w-[20px] h-[30px]"/>rajvarma@theserendib.com</a> 
    <a className="link link-hover flex items-center gap-2 text-base"><FaPhoneAlt className="w-[20px] h-[15px] text-[#42A5FF]"/>+919920811288</a> 
    <a className="link link-hover flex items-baseline gap-2 text-base"><MdLocationOn className=" w-[20px] h-[25px] text-[#42A5FF]"/>Serendib Trading & Properties LLP<br/>
C-154, 15th Floor, Kalpataru Sparkle, Plot No. C C 23/201,<br/> N. Dharmadikari Road, Bandra Mumbai City Maharashtra 400051
</a> 
    
  </nav>
</footer>
        </>
     );
}
 
export default Footer;