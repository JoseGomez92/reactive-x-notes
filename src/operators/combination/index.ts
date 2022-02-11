export const executeCombinationOperatorsExercise = (exercise: number) => {
    switch(exercise) {
        case 1:
            import('./01-start-with')
        break;
        case 2:
            import('./02-end-with')
        break;
        case 3:
            import('./03-concat')
        break;
        case 4:
            import('./04-merge')
        break;
        case 5:
            import('./05-combine-latest')
        break;
        case 6:
            import('./06-fork-join')
        break;
        default:
            throw new Error('The exercise number for the function exercise not exists');
    }
}