export const executeCommonOperatorsExercise = (exercise: number) => {
    switch(exercise) {
        case 1:
            import('./01-map')
        break;
        case 2:
            import('./02-pluck')
        break;
        case 3:
            import('./03-mapTo')
        break;
        case 4:
            import('./04-filter')
        break;
        case 5:
            import('./05-tap')
        break;
        case 6:
            import('./06-reduce')
        break;
        case 7: 
            import('./07-scan')
        break;
        case 8:
            import('./08-take')
        break;
        case 9:
            import('./09-first')
        break;
        case 10: 
            import('./10-take-while')
        break;
        case 11:
            import('./11-take-until')
        break;
        case 12:
            import('./12-skip')
        break;
        case 13:
            import('./13-distinct')
        break;
        case 14:
            import('./14-distinct-until-changed')
        break;
        case 15:
            import('./15-distinct-until-key-changed')
        break;
        default:
            throw new Error('The exercise number for the function exercise not exists');
    }
}