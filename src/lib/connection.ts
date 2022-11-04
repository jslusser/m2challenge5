import { clusterApiUrl, Connection } from "@solana/web3.js";

let connection: Connection;

export function getConnection() {
  if (!connection) {
    connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  }
  return connection;
}
