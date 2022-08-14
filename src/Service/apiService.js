import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const servicesApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:3000" }),
  endpoints: (builder) => ({
    getTopThemesProjects: builder.query({
      query: () => ({
        url: "/TopThemesProjects",
      }),
    }),
    getTopThemesProject: builder.query({
      query: (id) => ({
        url: `/TopThemesProjects/${id}`,
      }),
    }),
    getProjects: builder.query({
      query: () => ({
        url: `/donateProjects`,
      }),
    }),
    getProject: builder.query({
      query: (id) => ({
        url: `/donateProjects/${id}`,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
    getStories: builder.query({
      query: () => ({
        url: "/donateStory",
      }),
    }),
    getStory: builder.query({
      query: (id) => ({
        url: `/donateStory/${id}`,
      }),
    }),
    getOurStories: builder.query({
      query: () => ({
        url: "/ourStories",
      }),
    }),
    getOurStory: builder.query({
      query: (id) => ({
        url: `/ourStories/${id}`,
      }),
    }),
    getourStoriesDetails: builder.query({
      query: (id) => ({
        url: `/ourStoriesDetails/${id}`,
      }),
    }),
    getBasePartners: builder.query({
      query: () => ({
        url: "/basePartners",
      }),
    }),
    getStoryContents: builder.query({
      query: () => ({
        url: "/storyContents",
      }),
    }),
  }),
});
