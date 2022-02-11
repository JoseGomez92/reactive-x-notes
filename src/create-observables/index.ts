export const executeFunctionsExcercise = (exercise: number) => {
    switch(exercise) {
        case 1:
            import('./01-of');
        break;
        case 2:
            import('./02-from-event');
        break;
        case 3:
            import('./03-range');
        break;
        case 4:
            import('./04-interval-and-timer');
        break;
        case 5:
            import('./05-async-scheduler');
        break;
        default:
            throw new Error('The exercise number for the function exercise not exists');
    }
}