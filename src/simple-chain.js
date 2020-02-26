const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position < this.chain.length && position > 0) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    this.chain = [];
    throw new Error();
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainStr = this.chain.join('~~');
    this.chain = [];
    return chainStr;
  }
};

module.exports = chainMaker;
