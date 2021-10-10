import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authentication',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.GATSBY_BACKEND_API,
  }),
  tagTypes: ['User'],
  endpoints(build) {
    return {
      loginUser: build.mutation({
        query(body) {
          return {
            url: '/login',
            method: 'POST',
            body,
          };
        },
      }),
      registerUser: build.mutation({
        query(body) {
          return {
            url: '/register',
            method: 'POST',
            body,
          };
        },
      }),
    };
  },
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
