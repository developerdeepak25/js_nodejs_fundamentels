class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Adds an element to the top of the stack
  push(element: T) {
    this.items.push(element);
  }

  // Removes and returns the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Returns the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "No elements in Stack";
    }
    return this.items[this.items.length - 1];
  }

  // Checks if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the size of the stack
  size() {
    return this.items.length;
  }

  // Empties the stack
  //   clear() {
  //     this.items = [];
  //   }

  //   // Prints the elements in the stack
  //   print() {
  //     console.log(this.items.toString());
  //   }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.peek()); // Output: 3
// console.log(stack.pop());  // Output: 3
// console.log(stack.size());

// reverse string with stack also remove extra spaces

function reverseString(str: string) {
  //   let stack = str.split(" ");
  let splits = str.split(" ");
  let stack: string[] = [];

  for (let i of splits) {
    stack.push(i);
  }

  let finals: string = "";

  while (stack.length) {
    const curr = stack.pop();
    if (curr) {
      finals += " " + curr;
    }
  }

  return finals.trim();
}

console.log(reverseString("     this    that lo l o  llo     "));

const isValidBraces = (s: string) => {
  let stack: string[] = [];
  let bracMap: { [key: string]: string } = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let char of s) {
    if (bracMap[char]) stack.push(char);
    else {
      const lastChar = stack.pop();
      if (lastChar === undefined || bracMap[lastChar] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValidBraces("{}[{}]"));
