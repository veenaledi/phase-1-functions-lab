// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const hqLocation = 42; 
  return Math.abs(someValue - hqLocation);
}
function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  return blocks * 264;
}
function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(start - destination);
  return blocksTravelled * 264; 
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare;

  if (distance <= 400) {
    fare = 0; 
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
    fare = 25; 
  } else {
    fare = 'cannot travel that far'; 
  }

  return fare;
}

