// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    if (location >= 42)
        {return location - 42}
    else {return 42 - location}
    //returns the number of blocks given a value
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) 
        {return (destination - start) * 264}
    else (start > destination)
        {return (start - destination) * 264}
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return parseFloat((distanceInFeet * 0.02 - 8).toFixed(2));
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }


distanceFromHqInBlocks();
distanceFromHqInFeet();
distanceTravelledInFeet();
calculatesFarePrice();