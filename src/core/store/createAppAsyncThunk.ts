import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AppState, AppDispatch, ThunkExtraArgument } from ".";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  extra: ThunkExtraArgument;
}>();
