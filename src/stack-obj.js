class StackObj {

  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    this.count--;
    const element = this.items[this.count];
    delete this.items[this.count];
    return element;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.items[this.size() - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    let rta = '';
    for (let i = this.size() - 1; i >= 0 ; i--) {
      rta += this.items[i];
    }
    return rta;
  }
}

module.exports = { StackObj };