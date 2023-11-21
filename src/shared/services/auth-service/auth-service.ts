import { LoginArgs, SignUpArgs, SignUpResponse, User } from './auth-types.ts'

import { baseApi } from '@/shared/api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    me: builder.query<User | null, void>({
      query: () => `/v1/auth/me`,
      extraOptions: { maxRetries: false },
      providesTags: ['Me'],
    }),
    singIn: builder.mutation<{ accessToken: string }, LoginArgs>({
      query: ({ email, password }) => ({
        url: `/auth/login`,
        method: 'POST',
        body: { email, password },
      }),
      invalidatesTags: ['Me'],
    }),
    signUp: builder.mutation<SignUpResponse, SignUpArgs>({
      query: body => ({
        url: `/v1/auth/sign-up`,
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation<unknown, { token: string; password: string }>({
      query: ({ token, password }) => ({
        url: `/v1/auth/reset-password/${token}`,
        method: 'POST',
        body: { password },
      }),
    }),
    logout: builder.mutation<unknown, void>({
      query: () => ({
        url: `auth/logout`,
        method: 'POST',
      }),
      // async onQueryStarted(_, { dispatch, queryFulfilled }) {
      //   const patchResult = dispatch(
      //     authService.util.updateQueryData('Me', undefined, () => {
      //       return null
      //     })
      //   )
      //
      //   try {
      //     await queryFulfilled
      //   } catch {
      //     patchResult.undo()
      //   }
      // },
    }),
  }),
})

export const { useMeQuery, useSingInMutation, useSignUpMutation, useResetPasswordMutation } =
  authService
