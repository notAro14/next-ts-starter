import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const { GITHUB_ID, GITHUB_SECRET, NEXTAUTH_SECRET, EMAIL_FROM, EMAIL_SERVER } =
  process.env

const prisma = new PrismaClient()

if (typeof GITHUB_ID === "undefined")
  throw new Error("GITHUB_ID is not defined")
if (typeof GITHUB_SECRET === "undefined")
  throw new Error("GITHUB_SECRET is not defined")
if (typeof NEXTAUTH_SECRET === "undefined")
  throw new Error("NEXTAUTH_SECRET is not defined")
if (typeof EMAIL_FROM === "undefined")
  throw new Error("EMAIL_FROM is not defined")
if (typeof EMAIL_SERVER === "undefined")
  throw new Error("EMAIL_SERVER is not defined")

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    EmailProvider({
      server: EMAIL_SERVER,
      from: EMAIL_FROM,
    }),
  ],
  secret: NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
}

export default NextAuth(authOptions)
