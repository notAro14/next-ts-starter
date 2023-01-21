export type ExerciseId = string;
export interface Exercise {
  id: ExerciseId;
  name: string;
  sets: Set[];
}

export interface Set {
  id: string;
  reps: Reps;
  weight: Weight;
}

export interface Reps {
  value: number;
}

export interface Weight {
  value: number;
}
