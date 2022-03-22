import React from 'react'
import { FiSearch } from 'react-icons/fi';
import profilbild from '../assets/profilbild.jpg'

function Header() {
  return (
    <div className='flex justify-between w-9/12 m-5 p-1 text-gray'>
        <div className='flex items-center '>
            <FiSearch className='mx-5'/>
            <input type="search" name="search" id="" placeholder='Search' size="80" className="p-2 outline-none"/>
        </div>

        <div className='flex items-center'>
            <h3 className='font-medium'>Zaki Azizi</h3>
            <div className='mx-5'><img src={profilbild} alt="profilbild" width="44.07px" height="44px" className='rounded-full'/></div>
            
        </div>
    </div>
  )
}

export default Header