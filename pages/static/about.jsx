import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NewNav from "@/components/newNav";
import Image from "next/image";

const About = () => {
    return ( 
        <div className="min-h-screen flex flex-col">
      <NewNav/>
    <div className="flex-1">

    <div className="w-full md:h-[300px] h-[200px] bg-base-200 flex justify-center items-center">
        <p className=" text-4xl font-bold text-center tracking-wide text-[#42A5FF]">About Us</p>
    </div>

    <div className=" flex-col-reverse md:flex md:flex-row justify-evenly items-center px-5 md:px-28 w-full pt-[40px]">
        <div>
           <p className="text-4xl text-[#42A5FF] tracking-wide font-thin pb-3">MyGuideBot</p>
        <p className=" text-black/70 tracking-wide text-justify text-[15px] leading-6 md:w-[70%]">MGB serves as your passport to unforgettable travel experiences. We make it effortless to discover, plan, and book cherished experiences,
        encompassing sightseeing, tours, food and beverages, adventure activities, shopping, and nightlife. From quirky themes to local favorites and luxury
        experiences, we&apos;ve got you covered. Our goal is to ensure that you receive relevant advice on the best experiences at any destination through bite-sized
         content, delivered via WhatsApp. Say goodbye to complex apps and cumbersome bookings, and say hello to cherished memories powered by MGB, a guide @ your side.</p>
        
        <p className="text-black/70 indent-10 tracking-wide text-justify text-[15px] leading-6 md:w-[70%] py-5">MyGuideBot is led by the Industry experts and senior professionals who understand the modern trends in Travel and the role of technology in solving the challenges faced by Travellers.</p>
        </div>
    
    <Image src={"/bot.jpg"} width={500} height={600} alt=""/>
    </div>
      
      
    </div>
    <Footer/>
  </div>
     );
}
 
export default About;
