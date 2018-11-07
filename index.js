function produceDrivingRange(blockRange) {
  return function(blocks) {
    if (blocks-blockRange > 0) {
      return `within range by {blocks-blockRange}`;
    } else {
      let range= $Math.abs(blocks-blockRange);
      return '${range} blocks out of range';
    }
  };
}