import React from 'react'
import { FiSearch } from 'react-icons/fi';
import profilbild from '../assets/profilbild.jpg'

function Header() {
  return (
    <div className="flex justify-between md:w-[955px] m-5 text-gray sticky top-[1rem] z-50">
      <div className="flex items-center ">
        <FiSearch className="mr-5 cursor-pointer" />
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search"
          size="80"
          className="p-2 outline-none"
        />
      </div>

      <div className="flex items-center">
        <h3 className="font-medium">Zaki Azizi</h3>
        <div className="mx-5 cursor-pointer">
          <img
            src={profilbild}
            alt="profilbild"
            width="44.07px"
            height="44px"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Header