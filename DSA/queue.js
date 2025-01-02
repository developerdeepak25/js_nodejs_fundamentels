//  queue implementation

class Queue {
  constructor() {
    this.items = [];
  }

  // Adds an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Removes and returns the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // Returns the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the size of the queue
  size() {
    return this.items.length;
  }

  // Prints the elements in the queue
  print() {
    console.log(this.items.toString());
  }
}



// circulat queue

var MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.queue.length < this.size) {
    this.queue.push(value);
    return true;
  }
  return false;
};

MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length > 0) {
    this.queue.shift();
    return true;
  }
  return false;
};
MyCircularQueue.prototype.Front = function () {
  if (this.queue.length > 0) {
    return this.queue[0];
  }
  return -1;
};

MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length > 0) {
    return this.queue[this.queue.length - 1];
  }
  return -1;
};
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function () {
    // console.log(this.size,this.queue);
  return this.queue.length === this.size;
};

const obj = new MyCircularQueue(3);
obj.enQueue(3);
obj.enQueue(4);
obj.enQueue(5);
// console.log(obj.enQueue(6),"can't take more");

console.log(obj.Front());
console.log(obj.Rear());
console.log(obj.isEmpty());
console.log(obj.isFull());
console.log(obj.deQueue());
// console.log(obj.Front());
