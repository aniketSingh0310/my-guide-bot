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
      {/* Your page content goes here */}
      <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js Project</h1>
      <p>This is the main content of your home page.</p>
    </div>
    <Footer />
  </div>
  )
}
