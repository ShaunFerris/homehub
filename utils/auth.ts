import { NextAuthOptions } from "next-auth";
import { connectToDB } from "./database";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/experimental_user";
import { IUser } from "@/types";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        const sessionUser: IUser = await User.findOne({
          email: profile.email
        });

        token.id = sessionUser._id.toString();
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

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
