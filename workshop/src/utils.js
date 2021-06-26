export const randInRange = (min, max) => {
  return Math.floor((Math.random() * (max - min)) + min);
}

export const floorTo = (number, floor) => {
  return Math.floor(number/floor);
}

export const modifyFollowers = (numOfFollowers) => {
  switch (true) {
    case (numOfFollowers < 1000):
      return '' + numOfFollowers;
    case (numOfFollowers < 10000):
      return '' + floorTo(numOfFollowers, 1000) + ',' + numOfFollowers%1000;
    case (numOfFollowers < 1000000):
      return floorTo(numOfFollowers, 1000) + 'K';
    case (numOfFollowers < 1000000000) :
      return floorTo(numOfFollowers, 1000000) + 'M';
    case (numOfFollowers >= 1000000000):
      return floorTo(numOfFollowers, 1000000000) + 'B';
    default:
      return 'not a number OR out of range';
  }
}

export const randFromArray = (array) => {
  return array[randInRange(0,array.length)]
}