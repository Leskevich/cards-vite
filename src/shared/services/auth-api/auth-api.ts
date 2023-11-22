import { LoginArgs, SignUpArgs, SignUpResponse, User } from './auth-types.ts'

import { baseApi } from '@/shared/services/base-api'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    authMe: builder.query<User | null, void>({
      query: () => `/v1/auth/me`,
      providesTags: ['AuthMe'],
    }),
    singIn: builder.mutation<{ accessToken: string }, LoginArgs>({
      query: ({ email, password }) => ({
        url: `/v1/auth/login`,
        method: 'POST',
        body: { email, password },
      }),
      extraOptions: { maxRetries: 0 },
      invalidatesTags: ['AuthMe'],
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
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authApi.util.updateQueryData('authMe', undefined, () => {
            return null
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useAuthMeQuery,
  useSingInMutation,
  useSignUpMutation,
  useResetPasswordMutation,
  useLogoutMutation,
} = authApi
