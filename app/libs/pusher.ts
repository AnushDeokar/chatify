import Pusher from "pusher";
import PusherServer from "pusher";
import PusherClient from "pusher-js";

// const APP_ID: string | undefined = process.env.PUSHER_APP_ID;
// const KEY: string | undefined = process.env.PUSHER_KEY;
// const SECRET: string  = process.env.PUSHER_SECRET ?? "";
// const CLUSTER: string  = process.env.PUSHER_CLUSTER ?? "";

const APP_ID: string | undefined = "1683287";
const KEY: string | undefined = "d20770ad445fd2c279bb";
const SECRET: string = "1121c7d70262046b2a5b";
const CLUSTER: string = "ap2";

// console.log(APP_ID, KEY, SECRET, CLUSTER);
if (!APP_ID || !KEY || !SECRET || !CLUSTER) {
  throw new Error("Missing required environment variables");
}

export const pusherServer = new PusherServer({
  appId: APP_ID!,
  key: KEY!,
  secret: SECRET,
  cluster: CLUSTER,
  useTLS: true,
});

export const pusherClient = new PusherClient(APP_ID!, {
  channelAuthorization: {
    endpoint: "/api/pusher/auth",
    transport: "ajax",
  },
  cluster: CLUSTER,
});
