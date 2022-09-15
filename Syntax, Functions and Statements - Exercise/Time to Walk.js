function calc(steps, footprint, speed)
{
    let distanceInMeters = steps * footprint;
    let speedInMetersForSec = speed / 3.6; // the speed is in km/h and by deviding it by 3.6 we are getting the speed m/s
    let time = distanceInMeters / speedInMetersForSec;
    let restTime = Math.floor(distanceInMeters / 500);
    let timeInMinutes = Math.floor(time / 60);
    //let timeInSec = Number(time - (timeInMinutes * 60)).toFixed(0); // toFixed rounds to the nearest integer
    let timeInSec = Math.round(time - (timeInMinutes * 60));
    let timeInHours = Math.floor(time / 3600);
    timeInMinutes += restTime;
    timeInHours += Math.floor(timeInMinutes / 60);
    timeInMinutes %= 60;

    let correctHours = timeInHours < 10 ? `0${timeInHours}` : `${timeInHours}`;
    let correctMinutes = timeInMinutes < 10 ? `0${timeInMinutes}` : `${timeInMinutes}`;
    let correctSecs = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    console.log(`${correctHours}:${correctMinutes}:${correctSecs}`);
}

calc(4000, 0.60, 5);
calc(2564, 0.70, 5.5);