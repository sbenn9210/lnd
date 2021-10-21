import createLnRpc, { LnRpc } from "@radar/lnrpc";
import { EventEmitter } from "events";
import { v4 as uuidv4 } from "uuid";

class NodeManager extends EventEmitter {
  /**
   * a mapping of token to gRPC connection. This is an optimization to
   * avoid calling `createLnRpc` on every request. Instead, the object is kept
   * in memory for the lifetime of the server.
   */
  private _lndNodes: Record<string, LnRpc> = {};

  /**
   * Retrieves the in-memory connection to an LND node
   */
  getRpc(token: string): LnRpc {
    if (!this._lndNodes[token]) {
      throw new Error("Not Authorized. You must login first!");
    }

    return this._lndNodes[token];
  }

  /**
   * Tests the LND node connection by validating that we can get the node's info
   */
  async connect(
    host: string,
    cert: string,
    macaroon: string,
    prevToken?: string
  ) {
    // generate a random token, without
    const token = prevToken || uuidv4().replace(/-/g, "");

    try {
      // add the connection to the cache
      const rpc = await createLnRpc({
        server: host,
        cert: Buffer.from(cert, "hex").toString("utf-8"), // utf8 encoded certificate
        macaroon, // hex encoded macaroon
      });

      // verify we have permission get node info
      const { identityPubkey: pubkey } = await rpc.getInfo();

      // store this rpc connection in the in-memory list
      this._lndNodes[token] = rpc;

      // return this node's token for future requests
      return { token, pubkey };
    } catch (err) {
      // remove the connection from the cache since it is not valid
      if (this._lndNodes[token]) {
        delete this._lndNodes[token];
      }
      throw err;
    }
  }
}

export default new NodeManager();
