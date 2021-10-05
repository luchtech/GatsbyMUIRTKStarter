import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginApi = createApi({
  reducerPath: 'login',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/login',
  }),
  tagTypes: ['User'],
  endpoints(build) {
    return {
      loginUser: build.mutation({
        query(body) {
          return {
            url: '/',
            method: 'POST',
            body,
          };
        },
      }),
    };
  },
});

export const { useLoginUserMutation } = loginApi;
