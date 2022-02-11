export const executeObservableExcercise = (exercise: number) => {
    switch(exercise) {
        case 1:
            import('./01-observable');
        break;
        case 2:
            import('./02-subscriptions');
        break;
        case 3:
            import('./03-complete-vs-unsubscribe');
        break;
        case 4:
            import('./04-subjects-part-1');
        break;
        default:
            throw new Error('The exercise number for the function exercise not exists');
    }
}