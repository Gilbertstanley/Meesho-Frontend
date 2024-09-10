import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisble] = useState(false)

    const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);

    return (
        <div className='flex items-center justify-between py-5 font-medium' >

            <Link to='/'><img className='w-36' src={assets.logo} alt="" /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>


                <NavLink to="/" className='flex flex-col items-center gap-1'>  
                    <div className='group relative'>
                   <p>Women Ethinic</p>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Sarees</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Cotton Sarees</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Satin Sarees</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer text-rose-700'>Kurtis</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Rayon Kurtis</p>
<p onClick={() => { }} className='cursor-pointer hover:text-black'>Cotton Kurtis</p>
<p onClick={() => { }} className='cursor-pointer text-rose-700'>Other Ethnic</p>
<p onClick={() => { }} className='cursor-pointer hover:text-black'>Lenga</p>
<p onClick={() => { }} className='cursor-pointer hover:text-black'>Gown</p>
                        </div>
                    </div>
                </div>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink> 

                <NavLink to='/womenc' className='flex flex-col items-center gap-1'>
                    {/* <p>Women Western</p> */}
                    <div className='group relative'>
                   {/*  <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /> */}
                   <p>Women Western</p>
                    {/* Dropdown Menu */}

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                        <p onClick={() => { }} className='cursor-pointer text-rose-700'>Topwear</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Sweaters</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Jumpsuits</p>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Bottomwears</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Skirts</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Palazzos</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer text-rose-700'>Sleepwear</p>
<p onClick={() => { }} className='cursor-pointer hover:text-black'>Nightsuits</p>
<p onClick={() => { }} className='cursor-pointer hover:text-black'>Babydolls</p>
                            {/* <p onClick={() => { }} className='cursor-pointer hover:text-black'>Logout</p> */}
                        </div>
                    </div>
                </div>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/men' className='flex flex-col items-center gap-1'>
                   {/*  <p>Men</p> */}
                    <div className='group relative'>
                   {/*  <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /> */}
                   <p>Men</p>
                    {/* Dropdown Menu */}

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                        <p onClick={() => { }} className='cursor-pointer text-rose-700'>TopWear</p>
                        <p onClick={() => { }} className='cursor-pointer hover:text-black'>Tshirt</p>
                        <p onClick={() => { }} className='cursor-pointer hover:text-black'>Shirt</p>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Men Accessories</p>
<p onClick={() => { }} className='cursor-pointer hover:text-black'>Belts</p>
<p onClick={() => { }} className='cursor-pointer hover:text-black'>Wallets</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer text-rose-700'>Ethnic Wear</p>
<p onClick={() => { }} className='cursor-pointer hover:text-black'>Men Kurtas</p>
<p onClick={() => { }} className='cursor-pointer hover:text-black'>Ethnic Jackets</p>
                            
                        </div>
                    </div>
                </div>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/kids' className='flex flex-col items-center gap-1'>
                   {/*  <p>Kids</p> */}
                    <div className='group relative'>
                   {/*  <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /> */}
                   <p>Kids</p>
                    {/* Dropdown Menu */}

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Toys & Accessories</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Soft Toys</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Stationary</p>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Baby Care</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>All Baby Care</p>
                          {/*   <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Logout</p> */}
                        </div>
                    </div>
                </div>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/homeandkitchen' className='flex flex-col items-center gap-1'>
                  {/*   <p>Home & Kitchen</p> */}
                    <div className='group relative'>
                   {/*  <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /> */}
                    <p>Home & Kitchen</p>
                    {/* Dropdown Menu */}

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                        <p onClick={() => { }} className='cursor-pointer text-rose-700'>Home Furnishing</p>
                        <p onClick={() => { }} className='cursor-pointer hover:text-black'>Bedsheets</p>
                        <p onClick={() => { }} className='cursor-pointer hover:text-black'>Doormats</p>
                        <p onClick={() => { }} className='cursor-pointer text-rose-700'>Home Decor</p>
<p onClick={() => { }} className='cursor-pointer hover:text-black'>Stickers</p>
<p onClick={() => { }} className='cursor-pointer hover:text-black'>Clocks</p>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Kitchen & Dining</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Kitchen Storage</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Cookware & Bakeware</p>
                         
                        </div>
                    </div>
                </div>

                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>



                <NavLink to='/beautyandhealth' className='flex flex-col items-center gap-1'>
                   {/*  <p>Beauty & Health</p> */}
                    <div className='group relative'>
                   {/*  <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /> */}
                   <p>Beauty & Health</p>
                    {/* Dropdown Menu */}

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Make up</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Eyes</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Lips</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer text-rose-700'>Wellness</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Sanitizers</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Oral Care</p>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Skincare</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Deodrants</p>
                        </div>
                    </div>
                </div>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/jewelleryandaccessories' className='flex flex-col items-center gap-1'>
                  {/*   <p>Jewellery & Accessories</p> */}
                    <div className='group relative'>
                   {/*  <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /> */}
                   <p>Jewellery & Accessories</p>
                    {/* Dropdown Menu */}

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Jewellery</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Studs</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Bangles</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Rings</p>
                           {/*  <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p> */}
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Women Accessory</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Sunglasses</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Bags</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Watches</p>
                        </div>
                    </div>
                </div>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/bagsandfootwear' className='flex flex-col items-center gap-1'>
                   {/*  <p>Bags & Footwear</p> */}
                    <div className='group relative'>
                   {/*  <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /> */}
                   <p>Bags & Footwear</p>
                    {/* Dropdown Menu */}

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Women Bags</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Handbags</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer text-rose-700'>Men Bags</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Slingbags</p>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Men Footwear</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Sports Shoes</p>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Women Footwear</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Flats</p>
                        </div>
                    </div>
                </div>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/electronics' className='flex flex-col items-center gap-1'>
                   {/*  <p>Electronics</p> */}
                    <div className='group relative'>
                   {/*  <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /> */}
                   <p>Electronics</p>
                    {/* Dropdown Menu */}

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Appliances</p>
                        
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Grooming</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Home Appliances</p>
                            <p onClick={() => { }} className='cursor-pointer text-rose-700'>Mobile & Accessories</p>
                           
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Smart Watches</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Home Appliances</p>
                        </div>
                    </div>
                </div>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/') }} className='w-5 cursor-pointer' src={assets.search_icon} alt="" />



                <div className='group relative'>
                    <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />

                    {/* Dropdown Menu */}

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img className='w-5 min-w-5' src={assets.cart_icon} alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisble(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
            </div>

            {/* Sidebar Menu For Small Screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisble(false)} className='flex items-center gap-4 p-3 '>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisble(false)} to="/" className='py-2 pl-6 border'>HOME</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/collection' className='py-2 pl-6 border'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/about' className='py-2 pl-6 border'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/contact' className='py-2 pl-6 border'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
