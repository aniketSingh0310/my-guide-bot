import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import NewNav from '@/components/newNav'
import Head from 'next/head'
import Image from 'next/image'




export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>MyGuideBot</title>
        <meta
          name="description"
          content="MGB serves as your passport to unforgettable travel experiences. We make it effortless to discover, plan, and book cherished experiences,
          encompassing sightseeing, tours, food and beverages, adventure activities, shopping, and nightlife."
        />
        {/* Add more meta tags or links to stylesheets/fonts as needed */}
      </Head>
      <NewNav/>
      
    <div className="flex-1">
      <Hero/>
      
    </div>
    
    <Footer />
  </div>
  )
}
