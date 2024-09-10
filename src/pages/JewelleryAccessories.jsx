/* import React from 'react'

const JewelleryAccessories = () => {
  return (
    <div>
      JewelleryAccessories
    </div>
  )
}

export default JewelleryAccessories */


/* import React from 'react'

const HomeKitchen = () => {
  return (
    <div>
      HomeKitchen
    </div>
  )
}

export default HomeKitchen */




import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const HomeKitchen = () => {

  const { products, search, showSearch } = useContext(ShopContext);

  // Predefined product IDs to render
  const desiredProductIds = ['i', 'j', 'k', 'l'];

  // Filter products based on desired IDs
  const filteredProducts = products.filter(product => desiredProductIds.includes(product._id));

  // Rest of the component logic remains the same

  // ... (rest of the code from the original WomenWestern component)

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

          {/* Map filtered products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filteredProducts.map((item, index) => (
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



