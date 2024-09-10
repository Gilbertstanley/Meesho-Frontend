import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
<>
<img src={assets.reseller} alt="" height={400} width={1300} />

<br />
    <div className='flex flex-col sm:flex-row border border-gray-400'>

    {/* Hero Left Side */}
    <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                {/* <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p> */}
            {/*      <p className='font-medium text-sm md:text-base'>Sell your products to crores of customers at 0% commission</p>  */}
            </div>

            <h1 className='prata-regular text-3xl sm:py-3 lg:text-4xl leading-relaxed text-right'>Register as a Meesho Supplier</h1>
            <br />
            <p className='font-medium text-sm md:text-base'>Sell your products to crores of customers at 0% commission</p> 
            <br />
            <div className='flex items-center gap-2'>
                <p className='font-semibold text-sm md:text-base'>Grow your business 10x | </p>
                {/* <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p> */}
                <p className='font-semibold text-sm md:text-base'>Enjoy 100% Profit | </p>
                <p className='font-semibold text-sm md:text-base'>Sell all over India | </p>
    
            </div>
        </div>
    </div>

    {/* Hero Right Side */}
     <img className='w-full sm:w-1/2' src={assets.banner} alt="" /> 
</div>
</>
  )
}

export default Banner
