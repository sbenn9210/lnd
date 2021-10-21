import { EventEmitter } from "events";
import { Node } from "./src/db/models";

/**
 * The list of events emitted by the PostsDb
 */
export const PostEvents = {
  updated: "post-updated",
};

class PostsDb extends EventEmitter {
  getAllNodes = () => {
    return Node.findAll();
  };

  getNodeByPubkey = (pubkey) => {
    return Node.findOne({
      where: {
        pubkey,
      },
    });
  };

  getNodeByToken = (token) => {
    return Node.findOne({
      where: {
        token,
      },
    });
  };

  addNode = async (node) => {
    return await Node.create(node);
  };
}

export default new PostsDb();
