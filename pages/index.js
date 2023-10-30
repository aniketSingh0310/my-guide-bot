import Footer from '@/components/footer'
import Hero from '@/components/hero'
import NewNav from '@/components/newNav'
import Head from 'next/head'





export default function Home() {
  return (
    <div className="flex flex-col">
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
          
      
    <div className="">
      <Hero/>
      
    </div>
    
    <Footer />
  </div>
  )
}
