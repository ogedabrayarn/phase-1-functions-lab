// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let hq = 42;
  return Math.abs(hq - location);
}
// distanceFromHqInBlocks(43);
function distanceFromHqInFeet(location) {
  let hq = 42;
  return Math.abs(hq - location) * 264;
}
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = Math.abs(destination - start) * 264;
  if (distance <= 400) {
    return 0;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 400 && distance <= 2000) {
    return 2.56;
  } else {
    return 'cannot travel that far';
  }
}