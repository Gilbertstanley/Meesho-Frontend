/*  import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

  const location = useLocation(); 
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  useEffect(() => {

    if (location.pathname.includes('*') && showSearch) {  //// it was collection before
      setVisible(true)
    } else {
      setVisible(false)
    }



  }, [location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input className='flex-1 outline-none bg-inherit text-sm' onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Search' />
        <img className='w-4' src={assets.search_icon} alt="" />
      </div>
      <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar  */ 

/* import React from 'react'

const SearchBar = () => {
  return (
    <div>
      
    </div>
  )
}

export default SearchBar */

/* import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false); // Initially hidden
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  useEffect(() => {
    // Keep visibility based on location and `showSearch`
    if (location.pathname.includes('womenwestern')) {
      setVisible(showSearch);
    } else {
      setVisible(false);
      setShowSearch(false); // Hide search on route change
    }
  }, [location, showSearch, setShowSearch]);

  const handleSearchClick = () => {
    setShowSearch(true);
    setVisible(true);
  };

  return (
    <>
      {!visible && (
        <img
          onClick={handleSearchClick}
          className="w-6 cursor-pointer"
          src={assets.search_icon}
          alt="Search Icon"
        />
      )}
      {visible && (
        <div className="border-t border-b bg-gray-50 text-center">
          <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input
              className="flex-1 outline-none bg-inherit text-sm"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Search"
            />
            <img className="w-4" src={assets.search_icon} alt="Search Icon" />
          </div>
          <img
            onClick={() => {
              setShowSearch(false);
              setVisible(false);
            }}
            className="inline w-3 cursor-pointer"
            src={assets.cross_icon}
            alt="Close Icon"
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
 */
 

/* 
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

  const location = useLocation(); 
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  useEffect(() => {

    if (location.pathname === '/' && showSearch) {
      setVisible(true)
    } else {
      setVisible(false)
    }

  }, [location, showSearch])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input className='flex-1 outline-none bg-inherit text-sm' onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Search' />
        <img className='w-4' src={assets.search_icon} alt="" />
      </div>
      <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar */






import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

  const location = useLocation(); 
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  useEffect(() => {

    if (location.pathname === '/' && showSearch) {
      setVisible(true)
    } else {
      setVisible(false)
    }

  }, [location, showSearch])

  const handleSearchBarClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
  }

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center' onClick={handleSearchBarClick}>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input 
          className='flex-1 outline-none bg-inherit text-sm' 
          onChange={(e) => setSearch(e.target.value)} 
          value={search} 
          type="text" 
          placeholder='Search' 
        />
        <img className='w-4' src={assets.search_icon} alt="" />
      </div>
      <img 
        onClick={() => setShowSearch(false)} 
        className='inline w-3 cursor-pointer' 
        src={assets.cross_icon} 
        alt="" 
      />
    </div>
  ) : null
}

export default SearchBar