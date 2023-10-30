const Heap = require("collections/heap");

class Median {
  constructor() {
    this.MAX = new Heap([], null, (a, b) => a - b); // smallNumList
    this.MIN = new Heap([], null, (a, b) => b - a); // largeNumList
  }

  insert(num) {
    // if no item in the MAX add no. to smallNumList
    // insert into the heap
    if (this.MAX.length === 0 || this.MAX.peek() >= num) {
      this.MAX.push(num);
    } else {
      this.MIN.push(num);
    }

    if (this.MAX.length > this.MIN.length + 1) {
      this.MIN.push(this.MAX.pop());
    } else if (this.MAX.length < this.MIN.length) {
      this.MAX.push(this.MIN.pop());
    }
  }

  getMedian() {
    if (this.MAX.length === this.MIN.length) {
      return (this.MAX.peek() + this.MIN.peek()) / 2;
    }

    return this.MAX.peek();
  }
}

const median = new Median();

median.insert(3);
median.insert(2);
median.insert(1);
median.insert(4);
median.insert(7);
median.insert(9);
median.insert(10);
median.insert(12);
console.log("Max Heap is : ", median.MAX.content);
console.log("Min Heap is : ", median.MIN.content);
console.log("median is : ", median.getMedian());
