function produceDrivingRange(blockRange) {
  return function(blocks) {
    if (blocks-blockRange > 0) {
      return true;
    } else {
      return false;
    }
  };
}