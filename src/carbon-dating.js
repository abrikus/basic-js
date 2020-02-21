const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityFloat = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string') return false;
  if (sampleActivityFloat < MODERN_ACTIVITY && sampleActivityFloat > 0) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityFloat) * HALF_LIFE_PERIOD / 0.693);
  }
  return false;
};
