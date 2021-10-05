import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registerApi = createApi({
  reducerPath: 'register',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/register',
  }),
  tagTypes: ['User'],
  endpoints(build) {
    return {
      registerUser: build.mutation({
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

export const { useRegisterUserMutation } = registerApi;
