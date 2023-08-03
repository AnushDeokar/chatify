import NextAuth, {AuthOptions} from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/app/libs/prismadb"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt';

export const authoptions:AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
              email: { label: 'email', type: 'text' },
              password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {

                if (!credentials?.email || !credentials?.password){
                    throw new Error("Invalid Credentials");
                }
                const user = await prisma.user.findUnique({
                    where: {
                      email: credentials.email
                    }
                });

                if (!user || !user?.password){
                    throw new Error("Invalid Credentials");
                }


                const ispasswordcorrect = bcrypt.compare(credentials.password, user.password);

                if (!ispasswordcorrect){
                    throw new Error("Incorrect Password");
                }
                return user;
            }
        }
        )
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,

}

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };