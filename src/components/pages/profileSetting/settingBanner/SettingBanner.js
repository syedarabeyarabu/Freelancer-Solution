import React from "react";
import authStore from "../../../../utils/Store";
import { Link } from "react-router-dom";

const SettingBanner = () => {
  const mentor = "https://i.ibb.co/y6gKcFy/Ellipse-1841.png";
  const user = authStore((state) => state.user);
  const userDetails = authStore((state) => state.userDetails);
  return (
    <div className="py-12 mt-20 bg-color-three md:pt-28 md:pb-24 md:pl-36 px-9">
      <div className="flex items-center">
        <img src={mentor} alt="mentor" className="w-32 h-32 mr-5" />
        <div className="text-white">
          <h2 className="mb-2 text-3xl font-bold ">{user.displayName}</h2>
          <h5 className="mb-8 text-xl ">{userDetails?.title}</h5>
          <Link to="/profile">
            <button className="px-8 py-3 font-semibold border border-white rounded hover:focus:ring">
              Preview Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingBanner;
