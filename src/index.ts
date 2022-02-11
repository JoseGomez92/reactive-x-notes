import { executeAjaxExcercise } from "./ajax";
import { executeFunctionsExcercise } from "./create-observables";
import { executeLaboratoryExercise } from "./laboratory";
import { executeObservableExcercise } from "./observables";
import { executeOperatorsExercise } from "./operators";


const type: string = 'laboratory'
const exercise: number = 6;

const executeExercise = () => {
    switch(type) {
        case 'observables': 
            executeObservableExcercise(exercise);
        break;
        case 'functions':
            executeFunctionsExcercise(exercise);
        break;
        case 'operators':
            const operatorsType = 'combination';
            executeOperatorsExercise(operatorsType, exercise);
        break;
        case 'ajax':
            executeAjaxExcercise(exercise);
        break;
        case 'laboratory':
            executeLaboratoryExercise(exercise);
        break;
        default:
            throw new Error('Type of exercise not exists');
    }
}

//Execute exercise
executeExercise();