/* eslint-disable no-param-reassign */
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import NextAuth from "next-auth/next";
import { socialLogin } from "../../../utils/services/ApiCalls";

// eslint-disable-next-line no-undef
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          redirect_uri: "http://localhost:3000/api/auth/callback/google",
          state: "S8we7MP7CasVj_ZitOcI34H5OmBbcEBDSXHsZKYCw5c",
          code_challenge_method: "S256",
          code_challenge: "ChaGd1ThqhZl2hvNKNiXjoj1FTCDLKEZrP5ylGJGpwE",
          client_id: process.env.GOOGLE_CLIENT_ID,
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_SECRET_ID,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    signIn: async (user) => {
      const { account } = user;
      const data = {
        provider: account.provider,
        token: account.access_token,
      };
      if (account.provider !== "credentials") {
        try {
          const res = await socialLogin(data);
          account.user_id = res.data.data.id;
          account.token = res.data.data.token;
          return true;
        } catch (error) {
          throw new Error("Something failed!");
        }
      } else return true;
    },
    jwt: async ({ token, account }) => {
      if (account) {
        token.token = account.token;
        token.user_id = account.user_id;
      }
      return token;
    },
    session: async ({ token, session }) => {
      session.user.token = token.token;
      session.user.user_id = token.user_id;
      return session;
    },
  },
  secret: "abcdefghijklmnop",
});
