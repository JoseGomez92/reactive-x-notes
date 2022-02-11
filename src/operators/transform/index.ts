export const executeTransformOperatorsExcercise = (exercise: number) => {
    switch(exercise) {
        case 1:
            import('./01-merge-all')
        break;
        case 2:
            import('./02-merge-map')
        break;
        case 3:
            import('./03-switch-map')
        break;
        case 4:
            import('./04-concat-map')
        break;
        case 5:
            import('./05-exhaust-map')
        break;
        default:
            throw new Error('Excercise number not exists');
    }
}