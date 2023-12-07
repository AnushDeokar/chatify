import Pusher from "pusher";
import PusherServer from "pusher";
import PusherClient from "pusher-js";

const APP_ID: string | undefined = process.env.NEXT_PUBLIC_PUSHER_APP_ID;
const KEY: string | undefined = process.env.NEXT_PUBLIC_PUSHER_KEY;
const SECRET: string  = process.env.NEXT_PUBLIC_PUSHER_SECRET ?? "";
const CLUSTER: string  = process.env.NEXT_PUBLIC_PUSHER_CLUSTER ?? "";

if (!APP_ID || !KEY || !SECRET || !CLUSTER) {
  throw new Error("Missing required environment variables");
}

export const pusherServer = new PusherServer({
  appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID as string,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY as string,
  secret: process.env.NEXT_PUBLIC_PUSHER_SECRET as string,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
  useTLS: true,
});

export const pusherClient = new PusherClient(KEY!, {
  channelAuthorization: {
    endpoint: "/api/pusher/auth",
    transport: "ajax",
  },
  cluster: CLUSTER,
});
