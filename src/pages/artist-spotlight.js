import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import VideoList from "../components/VideoList";

function IndexPage() {
  const data = useStaticQuery(graphql`
    query artistPlaylist {
      ytPlaylist(id: { eq: "artistSpotlight" }) {
        childrenYtVideo {
          id
          title
          description
          publishedAt
          thumbnails {
            high {
              url
            }
            standard {
              url
            }
            default {
              url
            }
            maxres {
              url
            }
          }
          resourceId {
            videoId
          }
        }
      }
    }
  `);
  const {
    ytPlaylist: { childrenYtVideo }
  } = data;

  let [top, ...allVideos] = childrenYtVideo;

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(allVideos.slice(0, 6));
  }, []);

  const loadMore = () => {
    const lastIndex = videos.length;
    const newVideos = allVideos.slice(lastIndex, lastIndex + 6);
    setVideos([...videos, ...newVideos]);
  };

  return (
    <>
      <Layout>
        <SEO keywords={[]} title="Artist Spotlight" />
        <VideoList loadMore={loadMore} top={top} videos={videos} />
      </Layout>
    </>
  );
}

export default IndexPage;
