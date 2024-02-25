import {
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:3001';

export const appApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Activity', 'Event', 'Guides', 'Booking'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getAllActivities: build.query({
      query: () => `/activity`,
    }),
    getActivitiesByFilter: build.query({
      query: (params) => (params ? `/activity?tours=${params}` : `/activity`),
    }),
    getTrip: build.query({
      query: (slug) => `activity/trip/${slug}`,
    }),
    getGuides: build.query<any, void>({
      query: () => `guides`,
    }),
    addBooking: build.mutation({
      query: (body) => {
        return {
          url: `booking`,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {
  useGetAllActivitiesQuery,
  useGetActivitiesByFilterQuery,
  useGetTripQuery,
  useGetGuidesQuery,
  useAddBookingMutation,
} = appApi;
