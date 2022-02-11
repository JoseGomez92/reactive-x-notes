export const executeAjaxExcercise = (exercise: number) => {
    switch(exercise) {
        case 1:
            import('./01-ajax');
        break;
        case 2:
            import('./02-get-json');
        break;
        case 3:
            import('./03-verbs-ajax');
        break;
        default:
            throw new Error('The exercise number for the function exercise not exists');
    }
}