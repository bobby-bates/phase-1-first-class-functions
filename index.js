// function runFiveMiles(){
//     console.log('Go for a five-mile run')
// }
// function liftWeights(){
//     console.log('Pump iron')
// }
// function swimFortyLaps(){
//     console.log('Swim 40 laps')
// }

// function exerciseRoutine(postRunActivity){
//     runFiveMiles()
//     postRunActivity() // Callback function
// }

// function Monday(){
//     exerciseRoutine(liftWeights)
// }
// function Tuesday(){
//     console.log('Go for a five-mile run')
//     console.log('Swim for 40 laps')
// }
// function Wednesday(){
//     console.log('Go for a five-mile run')
//     console.log('Go for a five-mile run')
// }
// function Thursday(){
//     console.log('Go for a five-mile run')
//     console.log('Pump iron')
// }
// function Friday(){
//     console.log('Go for a five-mile run')
//     console.log('Swim for 40 laps')
// }

// function morningRoutine(exercise){
//     let breakfast

//     if (exercise === liftWeights){
//         breakfast = 'protein bar'
//     } else if (exercise === swimFortyLaps){
//         breakfast = 'kale smoothie'
//     } else {
//         breakfast = 'granola'
//     }
//     // Calling exerciseRoutine simply console.logs the 
//     // default and passed-in exercises
//     exerciseRoutine(exercise)
//     return () => {
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`)
//     }
// }
// const afterExercise = morningRoutine(liftWeights)

// LAB:
// Take a callback function and call(invoke) that function:
const receivesAFunction = callback => callback()

const returnsANamedFunction = () => { 
    const wat = () => {}
    return wat
}

const returnsAnAnonymousFunction = () => () => {}