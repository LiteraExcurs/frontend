import { FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = 'http://localhost:3000';

export const appApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Activity', 'Event'],
    baseQuery: fetchBaseQuery({ baseUrl: URL}),
    endpoints: (build) => ({
        getAllActivities: build.query({
            query: () => `/activity`
        }),
        getActivitiesByFilter: build.query({
            query: (params) => params ? `/activity?tours=${params}` : `/activity`
        }),
        getTrip: build.query({
            query: (slug) => `activity/trip/${slug}`
        })
    })
})

export const {useGetAllActivitiesQuery, useGetActivitiesByFilterQuery, useGetTripQuery} = appApi;