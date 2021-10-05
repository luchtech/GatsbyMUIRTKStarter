import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/users',
  }),
  tagTypes: ['User'],
  endpoints(build) {
    return {
      getUsers: build.query({
        query(page) {
          return {
            url: '/',
            params: {
              page,
              delay: 2,
            },
          };
        },
        transformResponse: (response) => response.data,
        providesTags: (result, error, id) => [{ type: 'User', id }],
      }),
      getUser: build.query({
        query(id) {
          return {
            url: `/${id}`,
            params: {
              delay: 2,
            },
          };
        },
        transformResponse: (response) => response.data,
      }),
      createUser: build.mutation({
        query(body) {
          return {
            url: '/',
            body,
          };
        },
      }),
      updateUser: build.mutation({
        query({ id, ...body }) {
          return {
            url: id,
            body,
            method: 'PUT',
          };
        },
      }),
      deleteUser: build.mutation({
        query(id) {
          return {
            url: id,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const {
  useGetUsersQuery,
  useLazyGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
