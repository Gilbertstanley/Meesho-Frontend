/* import React from 'react'

const BeautyHealth = () => {
  return (
    <div>
      BeautyHealth
    </div>
  )
}

export default BeautyHealth */



import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const HomeKitchen = () => {

  const { products, search, showSearch } = useContext(ShopContext);

  // Define the desired product data
  const desiredProducts = [
    {
      _id: "e",
      name: "Moisturizing Hand Cream",
      description: "A luxurious hand cream that nourishes and softens your hands.",
      price: 15,
      image: "-",
      category: "Beauty & Health",
      subCategory: "Skincare",
      sizes: ["50ml"],
      date: 1716634345452,
      bestseller: true,
      rating: 4.9
    },
    {
      _id: "f",
      name: "Natural Shampoo",
      description: "A gentle and nourishing shampoo made with natural ingredients.",
      price: 20,
      image: "-",
      category: "Beauty & Health",
      subCategory: "Haircare",
      sizes: ["300ml"],
      date: 1716634345453,
      bestseller: false,
      rating: 4.7
    },
    {
      _id: "g",
      name: "Matte Lipstick",
      description: "A long-lasting matte lipstick in a variety of shades.",
      price: 18,
      image: "-",
      category: "Beauty & Health",
      subCategory: "Makeup",
      sizes: ["One Size Fits All"],
      date: 1716634345454,
      bestseller: true,
      rating: 4.6
    },
    {
      _id: "h",
      name: "Vitamin C Serum",
      description: "A powerful serum that brightens and improves skin texture.",
      price: 35,
      image: "-",
      category: "Beauty & Health",
      subCategory: "Skincare",
      sizes: ["30ml"],
      date: 1716634345455,
      bestseller: false,
      rating: 4.8
    }
  ];

  // No need for filtering since you're providing the desired products directly

  // Rest of the component logic remains the same

  return (
    <>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

        {/* Filter Options */}
        <div id='fil' className='min-w-60 sticky top-0 h-max'>
          {/* ... (filter options code) */}
        </div>

        {/* Right Side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={"Products"} text2={"For you"} />

            {/* <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' name="" id="">
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select> */}
          </div>

          {/* Map desired products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              desiredProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
              ))
            }
          </div>
        </div>
      </div>

      <OurPolicy />
      <NewsletterBox />
    </>
  );
}

export default HomeKitchen;