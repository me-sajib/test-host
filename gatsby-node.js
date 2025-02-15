/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const crypto = require(`crypto`);
const ypi = require(`youtube-playlist-info`);
const YT_KEY = `AIzaSyBBJRkfMe1k3GxVntN_hCSqL33MoB6v0D0`;
const playlist = require(`./playlist.json`);

exports.sourceNodes = async ({
  boundActionCreators,
  getNode,
  hasNodeChanged
}) => {
  const { createNode } = boundActionCreators;
  const makeNode = node => {
    node.internal.contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(node))
      .digest(`hex`);

    createNode(node);
  };

  for (let [key, value] of Object.entries(playlist)) {
    const items = await ypi(YT_KEY, value, {});
    let videosNode = {
      id: `${key}`,
      parent: `ytPlaylists`,
      children: [],
      internal: {
        type: `ytPlaylist`
      }
    };

    videosNode.children = items.map(
      ({
        title,
        description,
        resourceId,
        thumbnails,
        position,
        publishedAt
      }) => {
        if (description === `This video is private.`) {
          return null;
        }

        const id = `ytVideo-${resourceId.videoId}`;
        makeNode({
          id,
          title,
          description,
          thumbnails,
          position,
          resourceId,
          internal: {
            type: `ytVideo`
          },
          parent: `${key}`,
          children: [],
          publishedAt
        });
        return id;
      }
    );

    videosNode.children = videosNode.children.filter(video => {
      if (video) return true;

      return false;
    });
    makeNode(videosNode);
  }

  let ytNode = {
    id: `youtube`,
    children: [`ytPlaylists`],
    parent: null,
    internal: {
      type: `youtube`
    }
  };

  let playlistsNode = {
    id: `ytPlaylists`,
    parent: `youtube`,
    children: Object.keys(playlist),
    internal: {
      type: `ytPlaylists`
    }
  };

  makeNode(playlistsNode);
  makeNode(ytNode);
  return;
};
