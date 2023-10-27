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
    <a className="link link-hover flex items-center gap-2 text-base"><HiMail className="text-[#42A5FF]"/>mail</a> 
    <a className="link link-hover flex items-center gap-2 text-base"><FaPhoneAlt className="text-[#42A5FF]"/>Contact</a> 
    <a className="link link-hover flex items-center gap-2 text-base"><MdLocationOn className="text-[#42A5FF]"/>Jobs</a> 
    
  </nav>
</footer>
        </>
     );
}
 
export default Footer;