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

