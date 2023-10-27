import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Image from 'next/image'




export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
    <div className="flex-1">
      <Hero/>
      
    </div>
    <Footer />
  </div>
  )
}
