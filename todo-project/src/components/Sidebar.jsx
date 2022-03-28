import React from "react";
import homeLogo from "../assets/Vector.png";
import folderLogo from "../assets/folder.png";
import settingsLogo from "../assets/settings.png";
import logoutLogo from "../assets/vector2.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex h-screen min-h-[600px] min-w-[316px] w-[316px] p-14 border-r-[1px]">
      <div className="relative">
        <h2 className="font-bold text-xl mb-[82px]">Todo-App</h2>
        <div className="flex-col ">
          <div className="flex cursor-pointer">
            <img alt="" className="mr-4 mb-14" src={homeLogo} />
            <h4 className="hover:font-bold hover:text-lg active:text-lg active:font-bold">
              Dashboard
            </h4>
          </div>

          <div className="flex cursor-pointer">
            <img alt="" className="mr-4" src={folderLogo} />
            <h4 className="hover:font-bold hover:text-lg active:text-lg active:font-bold">
              Overview
            </h4>
          </div>
        </div>
        <div className="absolute bottom-24">
          <div className="flex cursor-pointer">
            <img alt="" className="mr-4 mb-14" src={settingsLogo} />
            <h4 className="hover:font-bold hover:text-lg active:text-lg active:font-bold">
              Settings
            </h4>
          </div>

          <div className="flex cursor-pointer">
            <img alt="" className="mr-4" src={logoutLogo} />
            <Link to="/logout">
              <h4 className="hover:font-bold hover:text-lg active:text-lg active:font-bold">
                Log out
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
