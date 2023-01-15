import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query";

export const makeRootApi = () =>
  createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["Article"],
    endpoints: () => ({}),
  });
export type RootApi = ReturnType<typeof makeRootApi>;