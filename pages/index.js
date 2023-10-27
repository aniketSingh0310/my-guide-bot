import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import NewNav from '@/components/newNav'
import Image from 'next/image'




export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NewNav/>
    <div className="flex-1">
      <Hero/>
      
    </div>
    <Footer />
  </div>
  )
}
