// Code your solution in this file!
function distanceFromHqInBlocks(number){
    let result = number - 42;
    return Math.abs(result)
}

function distanceFromHqInFeet(number){
    let distance = Math.abs(number - 42);
    return 264 * distance
}

function  distanceTravelledInFeet(start,destination){
    let dist = Math.abs(destination-start) * 264;
    return dist
}

function  calculatesFarePrice(start, destination){
    let dist = Math.abs(destination-start) * 264;
    if(dist <= 400){return 0} 
    else if(dist > 400 && dist <= 2000 ){return (dist - 400) * 2/100}
    else if(dist > 2000){
        if(dist > 2500){return "cannot travel that far"}
    return 25}
}

// 1) gives customers a free sample
// 2) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
// 3) charges 25 dollars for a distance over 2000 feet
// 4) does not allow rides over 2500 feet