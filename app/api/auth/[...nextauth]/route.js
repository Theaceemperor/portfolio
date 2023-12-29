import { db } from "@/setting/firebase.settings";
import { collection, getDocs, query, where } from "firebase/firestore";
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
      providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          id:'sign-in',
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "email", type: "email", placeholder: "spadesdev@spadeshub.com" },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const usersRef = query(collection(db,'users'),where("email","==",credentials.email));
            const userSnapShot = await getDocs(usersRef)

            if (userSnapShot.empty) {
                throw new Error('user not found')
            }

            const userData = userSnapShot.docs[0].data()

            if(credentials.password != userData.password) {
                throw new Error('Invalid password')
            }
            
            if(credentials.email != userData.email) {
                throw new Error('Invalid email')
            }

            return {
                id:userData.id,
                name: userData.name,
                email: userData.email,
                image: userData.logo,

            }
          }
        }),
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          id:'admin-login',
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "email", type: "email", placeholder: "SpadesDev@spadeshub.com" },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const usersRef = query(collection(db,'admin'),where("email","==",credentials.email));
            const userSnapShot = await getDocs(usersRef)

            if (userSnapShot.empty) {
                throw new Error('user not found')
            }

            const userData = userSnapShot.docs[0].data()

            if(credentials.password != userData.password) {
                throw new Error('Invalid password')
            }
            
            if(credentials.email != userData.email) {
                throw new Error('Invalid email')
            }

            if(userData.role != 'admin') {
                throw new Error('Unauthorized')
            }

            return {
                id:userData.id,
                name: userData.name,
                email: userData.email,
                image: '/spades3.png',
            }
          }
        }),
      ],
      callbacks:{
        async jwt({ token, account, userData }) {
            if(account) {
              token.role = 'admin'
            }
          return token
        },
        async session({ session, token, user }) {
          if (session.user) {
        session.user.roles = token.role;
      }
          return session
        }
      },
      session: {
        jwt: true, 
        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 30 * 24 * 60 * 60, // 30 days
      },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }