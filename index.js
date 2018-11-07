function produceDrivingRange(blockRange) {
  return function(blocks) {
    if (blocks-blockRange > 0) {
      return `within range by $(blocks-blockRange)`;
    } else {
      return '$(blocks-blockRange) blocks out of range';
    }
  };
}