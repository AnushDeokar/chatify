import Pusher from "pusher";
import PusherServer from "pusher";
import PusherClient from "pusher-js";

const APP_ID: string | undefined = process.env.app_id;
const KEY: string | undefined = process.env.key;
const SECRET: string | undefined = process.env.secret;
const CLUSTER: string | undefined = process.env.cluster;

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
