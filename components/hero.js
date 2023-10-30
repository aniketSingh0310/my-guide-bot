import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return ( 
        <>

<div className=" bg-cover w-full bg-center place-items-center	 h-max bg-base-100 pt-11 -z-0 pb-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src="/bot.jpg" className="max-w-sm rounded-lg shadow-2xl" width={450} height={650} alt="bot"/>
    <div className="text-black">
      <h1 className="text-5xl font-light text-[#42A5FF] tracking-wide">MyGuideBot</h1>
      <p className="py-6 tracking-wide text-justify md:w-[70%] text-black/70 leading-6">Discover, Plan, and Book cherished experiences, encompassing sightseeing, tours, food and beverages, adventure activities, shopping, and nightlife. From quirky themes to local favorites and luxury experiences. Receive and conveniently access & assess relevant details on all experiences at any destination through out bite-sized content, delivered via WhatsApp. Your Guide @ your Side.</p>
      <Link href={"/static/about"}><button className="btn text-white hover:text-black bg-[#42A5FF]">About Us</button></Link>
    </div>
  </div>
</div>
        </>
     );
}
 
export default Hero;