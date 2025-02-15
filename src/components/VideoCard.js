import React from "react";
import gracieImage from "../images/gracieimage.jpg";
import OverlayPlay from "./OverlayPlay";
import getThumbnail from "../utils/getThumbnail";
import formatDate from "../utils/formatDate";
import { motion, AnimatePresence } from "framer-motion";

function VideoCard({ video, onPlay }) {
  return (
    <div className="h-full">
      <div
        className="w-full h-full bg-white shadow hover:shadow-lg rounded-lg relative flex flex-wrap flex-column justify-between"
        onClick={_ => onPlay(video.resourceId.videoId)}
      >
        <OverlayPlay />
        <div className="w-full">
          <img
            alt="video"
            className="w-full rounded-t-lg object-contain max-w-full"
            src={getThumbnail(video.thumbnails)}
          />
        </div>
        <div className="p-4 title-height">
          <h2 className="text-lg font-bold title-color text-center">
            {video.title}
          </h2>
        </div>
        <div className="px-4 py-4 flex self-end">
          <div className="w-1/4">
            <img
              alt="author"
              className="w-10 h-10 rounded-full mr-3"
              src={gracieImage}
            />
          </div>
          <div className="flex-1 flex flex-column flex-wrap text-center text-sm text-gray-500">
            <div className="w-full">Empressive</div>
            <div className="w-full">{formatDate(video.publishedAt)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default props => (
  <AnimatePresence>
    <motion.div
      animate={{ opacity: 1 }}
      className="md:w-1/3 p-4 md:p-2 rounded-lg flex flex-wrap v-card"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
    >
      <VideoCard {...props} />
    </motion.div>
  </AnimatePresence>
);
