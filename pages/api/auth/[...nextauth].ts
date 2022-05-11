import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: { label: 'Username', type: 'text', placeholder: 'Username' },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const session = {
          id: 1,
          name: credentials?.name,
        };

        if (session.name) {
          // Any object returned will be saved in `user` property of the JWT
          return session;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});
