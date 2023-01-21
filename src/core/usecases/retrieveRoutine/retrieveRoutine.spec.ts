import type { Routine } from "src/core/entities/routine";
import { AppState, configureAppStore, makeRootApi } from "src/core/store";

const rootApi = makeRootApi();
const store = configureAppStore({ rootApi });

function selectorFn(state: AppState) {
  return state;
}

test("initially there is no routine", function () {
  expect(selectorFn(store.getState())).toEqual<Routine | null>(null);
});
