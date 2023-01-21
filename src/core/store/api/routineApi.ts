import { RootApi } from "./rootApi";
import type { RoutineId, Routine } from "src/core/entities/routine";

export function makeRoutineApi({ rootApi }: { rootApi: RootApi }) {
  return rootApi.injectEndpoints({
    endpoints(build) {
      return {
        retrieveRoutine: build.query<Routine, RoutineId>({
          queryFn() {
            return {
              data: {} as Routine,
            };
          },
        }),
      };
    },
  });
}
