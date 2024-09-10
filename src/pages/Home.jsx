import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import LatestCollection1 from '../components/LatestCollection1'
import Banner from '../components/Banner'
import WomenWestern from './WomenWestern'

const Home = () => {
  return (
    <div>
      <Hero />
      <br />
     <Banner/> 
     <WomenWestern/>
   {/*    <LatestCollection />
    <LatestCollection1/>
    <LatestCollection1/>
    <LatestCollection1/>
    <LatestCollection1/>
    <LatestCollection1/>
    <LatestCollection1/> */}
     {/*  <BestSeller /> */}
    {/*   <OurPolicy />
      <NewsletterBox /> */}
    </div>
  )
}

export default Home
