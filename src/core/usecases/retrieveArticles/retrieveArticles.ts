import { createAppAsyncThunk } from "src/core/store/createAppAsyncThunk";

export const retrieveArticles = createAppAsyncThunk<void, void>(
  "article/retrieveArticles",
  async (_, { extra, dispatch }) => {
    await dispatch(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      extra.dependencies.articleApi!.endpoints.retrieveArticles.initiate()
    );
  }
);
