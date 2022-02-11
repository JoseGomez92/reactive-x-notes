export const executeLaboratoryExercise = (exercise: number) => {
    switch(exercise) {
        case 1:
            import('./01-capitalize')
        break;
        case 2:
            import('./02-reduce')
        break;
        case 3:
            import('./03-randoms')
        break;
        case 4:
            import('./04-countdown-counter')
        break;
        case 5:
            import('./05-combine')
        break;
        case 6:
            import('./06-ajax-combination')
        break;
        default:
            throw new Error('The exercise number for the laboratory exercise not exists'); 
    }
};