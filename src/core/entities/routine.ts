import type { Exercise } from "./exercise";

export type RoutineId = string;
export interface Routine {
  id: RoutineId;
  exercises: Exercise[];
}
