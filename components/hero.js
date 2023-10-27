import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return ( 
        <>

<div className="hero h-max bg-base-100 pt-11 -z-0 pb-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src="/bot.jpg" className="max-w-sm rounded-lg shadow-2xl" width={450} height={650} alt="bot"/>
    <div className="text-black">
      <h1 className="text-5xl font-bold text-[#42A5FF] tracking-wide">MyGuideBot</h1>
      <p className="py-6 tracking-wide"> Discover hassle-free travel services at your fingertips, right on WhatsApp! Experience personalized itineraries, 
      instant booking, and expert guidance from our travel specialists. Your dream destination is just a message away. Start your adventure today!</p>
      <Link href={"/static/about"}><button className="btn text-white hover:text-black bg-[#42A5FF]">About Us</button></Link>
    </div>
  </div>
</div>
        </>
     );
}
 
export default Hero;