import { executeCommonOperatorsExercise } from "./common";
import { executeTransformOperatorsExcercise } from "./transform";
import { executeTimeOperatorsExercise } from "./time";
import { executeCombinationOperatorsExercise } from "./combination";

export const executeOperatorsExercise = (
  type: "common" | "time" | "flattening" | "combination",
  exercise: number
) => {
  switch (type) {
    case "common":
      executeCommonOperatorsExercise(exercise);
      break;
    case "time":
      executeTimeOperatorsExercise(exercise);
      break;
    case "flattening":
      executeTransformOperatorsExcercise(exercise);
      break;
    case "combination":
      executeCombinationOperatorsExercise(exercise);
      break;
    default:
      throw new Error("The type for the exercise not exists");
  }
};
