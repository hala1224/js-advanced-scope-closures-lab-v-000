function produceDrivingRange(blockRange) {
  return function(blockStart, blockEnd) {
    let start=parseFloat(blockStart);
    let end=parseFloat(blockEnd);
    let range= end - start;

    if (range <= blockRange) {
      return `within range by ${range}`;
    } else {
      let posRange= Math.abs(range-blockRange);
      return `${posRange} blocks out of range`;
    }
  };
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare*percent;
  };
}

function createDriver() {
  driverId=0;
  return class {
    constructor(name){
      this.name=name;
      this.id=++driverId;
    }
  };
}
