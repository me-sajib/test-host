import React from "react";
import getThumbnail from "../utils/getThumbnail";
import formatDate from "../utils/formatDate";
import { motion, AnimatePresence } from "framer-motion";
import TopPlayOverlay from "./TopPlayOverlay";

function TopVideo({ video, onPlay }) {
  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg relative v-card"
      onClick={_ => onPlay(video.resourceId.videoId)}
    >
      <TopPlayOverlay />
      <div>
        <img
          alt="video"
          className="w-full rounded-t-lg md:object-cover video-img"
          src={getThumbnail(video.thumbnails)}
          // style={{ height: `30rem` }}
        />
      </div>
      <div className="p-12 flex flex-wrap">
        <h2 className="text-center font-bold text-lg text-gray-700">
          {video.title}
        </h2>
      </div>
      <div className="flex justify-center top-d p-2 text-gray-500 text-sm">
        <div className="">{formatDate(video.publishedAt)}</div>
      </div>
    </div>
  );
}

export default rest => (
  <AnimatePresence>
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
    >
      <TopVideo {...rest} />
    </motion.div>
  </AnimatePresence>
);
