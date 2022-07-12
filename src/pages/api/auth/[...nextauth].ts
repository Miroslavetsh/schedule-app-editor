import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import genUID from '@utils/genUID'

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: 'Data',
        credentials: {
          name: {
            label: "Прізвище Ім'я По-батькові",
            type: 'text',
            placeholder: '',
          },
          password: { label: 'Пароль', type: 'password' },
          repeatPassword: { label: 'Пароль Ще Раз :)', type: 'password' },
        },
        async authorize(credentials, req) {
          if (credentials?.password === credentials?.repeatPassword) {
            const user = {
              id: genUID('1', Date.now()),
              name: credentials?.name,
              password: credentials?.password,
            }

            if (user) {
              console.log(user)

              return user
            }
          }

          return null
        },
      }),
    ],
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.AUTH_SECRET,
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  })
