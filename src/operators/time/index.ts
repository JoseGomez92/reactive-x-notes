export const executeTimeOperatorsExercise = (exercise: number) => {
    switch(exercise) {
        case 1:
            import('./01-debounce-time')
        break;
        case 2:
            import('./02-throttle-time')
        break;
        case 3:
            import('./03-sample-time')
        break;
        case 4:
            import('./04-sample')
        break;
        case 5:
            import('./05-audit-time')
        break;
        default:
            throw new Error('The exercise number for the function exercise not exists');
    }
}