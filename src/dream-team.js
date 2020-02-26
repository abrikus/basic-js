module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let strArray = [];

  members.map(item => {
    if (typeof item === 'string') {
      strArray.push(item.trim().charAt(0).toUpperCase());
    }
  })

  return strArray.sort().join('');
};