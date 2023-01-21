import type { Routine, RoutineId } from "src/core/entities/routine";

export interface RoutineGateway {
  getOne(routineId: RoutineId): Promise<Routine>;
}
