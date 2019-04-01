// Speed limit = 70
// 5 -> 1 point
// Math.floor
// 12 points = licensed suspended

checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const theSpeed = speed;
  const kmPerPoint = 5;

  let aboveLimit = 0;
  if (theSpeed > speedLimit + kmPerPoint) {
    aboveLimit = theSpeed - speedLimit;

    const thePoints = Math.floor(aboveLimit / kmPerPoint);

    if (thePoints >= 12) {
      console.log("Licensed Suspended");
    } else {
      console.log("Points: " + thePoints);
    }
  } else {
    console.log("OK");
  }
}
