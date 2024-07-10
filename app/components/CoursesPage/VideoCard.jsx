import Link from "next/link";
import React from "react";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const VideoCard = ({ item }) => {
  return (
    <div className="m-1 w-[220px] bg-slate-100 rounded-xl p-2 ">
      <div className=" w-[215] h-[350px] bg-slate-900 rounded-xl">
        <CldVideoPlayer
          width="220"
          height="380"
          src={item.urlVideo.public_id}
        />
      </div>

      <Link
        className="p-2 w-full font-bold"
        href={`/courses/videos/${item._id}`}
      >
        {/* text info  */}
        <div>
          <h2 className="py-1 text-[16px] font-TitleFont text-gray-900">
            {item.title}
          </h2>
          <div className="flex justify-around items-center ">
            <div className=" text-[15px] font-TitleFont text-gray-700">
              {item.season === "season-1" ? (
                <h1>الفصل الأول</h1>
              ) : (
                <h1>الفصل الثاني</h1>
              )}
            </div>
            <h2 className="px-4 text-[14px]  font-TitleFont text-gray-700">
              {item.levelsInf.levelTitle}
            </h2>
          </div>

          <h2 className=" px-4 [14px] font-TitleFont text-blue-900">
            {item.TheClass}
          </h2>
        </div>
        {/* icon  */}
        {/* <div className=" absolute top-0 right-4 flex justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-1">
            <p className="text-[12px]">12</p>

            <FcLike size={14} />
          </div>

          <div className="flex justify-center items-center gap-1">
            <p className="text-[12px]">02</p>

            <FaComment size={12} />
          </div>
        </div> */}
      </Link>
    </div>
  );
};

export default VideoCard;
