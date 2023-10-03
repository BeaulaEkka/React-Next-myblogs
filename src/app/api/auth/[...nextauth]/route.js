import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username: admin",
          type: "text",
          placeholder: "please use admin as username",
        },
        password: {
          label: "Password: admin",
          type: "password",
          placeholder: "please use admin as password",
        },
      },
      async authorize(credentials, req) {
        //
        const { username, password } = credentials;

        if (username !== "admin" || password !== "admin") {
          return Promise.resolve(null);
        }

        // If conditions are met, return the user object
        const user = { id: "admin", name: "admin", email: "admin@admin.com" };
        return Promise.resolve(user);
      },
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID ?? "",
    //   clientSecret: process.env.GITHUB_SECRET ?? "",
    // }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.SECRET,
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
