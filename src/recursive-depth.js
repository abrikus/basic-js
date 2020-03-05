module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
          arr = arr.filter(item => Array.isArray(item));

          let depth = 0;
          for (let i = 0; i < arr.length; i++) {
            depth = Math.max(depth, this.calculateDepth(arr[i]));
          }
          return depth + 1;
        } else {
          return 0;
        }
    }
};