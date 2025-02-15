import React, { useState } from "react";
import TopVideo from "./TopVideo";
import Modal from "react-modal";
import YouTube from "react-youtube";
import VideoCard from "./VideoCard";

export default function({ videos, top, loadMore }) {
  const [isModalOpen, setModal] = useState(false);
  const [videoId, setVideo] = useState(``);
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setVideo(``);
  };

  const playVideo = id => {
    openModal();
    setVideo(id);
  };

  return (
    <>
      <section className="body">
        <div className="flex mx-auto mt-8 container__custom flex-wrap justify-center items-stretch">
          <div className="w-full p-4 md:p-2 lg:p-0 mb-4">
            <TopVideo onPlay={playVideo} video={top} />
          </div>
          {videos.map(video => {
            return (
              <VideoCard key={video.id} onPlay={playVideo} video={video} />
            );
          })}
        </div>
        <div className="flex item-center justify-center m-2">
          <button
            className="p-2 px-8 text-white read-more rounded hover:bg-white  mb-8"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            position: `fixed`,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgba(0, 0, 0, 0.93)`
          }
        }}
      >
        <YouTube className="tv-player" videoId={videoId} />
      </Modal>
    </>
  );
}
