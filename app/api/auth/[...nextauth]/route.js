import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, profile }) {
            if (profile) {
                const sessionUser = await User.findOne({
                    email: profile.email
                });

                token.id = sessionUser._id.toString();
            }
            return token;
        },

        async session({ session, token }) {
            session.user.id = token.id;

            return session;
        },

        async signIn({ profile }) {
            try {
                await connectToDB();

                //check if the user already exists
                //Missing await statement here caused the JWT error
                const userExists = await User.findOne({
                    email: profile.email
                });

                //if not, return false to deny them access
                if (!userExists) {
                    return false;
                }

                return true;
            } catch (error) {
                console.log("Error checking for user: ", error.message);
                return false;
            }
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };