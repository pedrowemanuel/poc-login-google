import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const checkUserExists = async (email) => {
  try {
    const response = await fetch(
      process.env.URL_API_BACKEND + "checkifUserExists",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();
    return data.userExists;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user && (await checkUserExists(user.email))) {
        return true;
      } else {
        return "/unauthorized";
      }
    },
  },
  secret: process.env.SECRET,
});

export { handler as GET, handler as POST };
