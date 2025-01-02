// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a new node at the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Add a new node at the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Insert a new node at a specific position
  insert(data, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(data);
    } else {
      const newNode = new Node(data);
      let current = this.head;
      let previous;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      newNode.next = current;
      previous.next = newNode;
      this.size++;
    }
  }

  // Remove a node from the list
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    let previous;
    let count = 0;

    // Remove the head node
    if (index === 0) {
      this.head = current.next;
    } else {
      // Find the node to remove
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  // Print the linked list
  printList() {
    let current = this.head;
    let output = "";
    while (current) {
      output += `${current.data} `;
      current = current.next;
    }
    console.log(output.trim());
  }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(2);
list.append(3);
// list.prepend(0);
// list.insert(4, 2);
// list.printList(); // Output: 0 1 4 2 3

// list.removeAt(2);
// list.printList(); // Output: 0 1 2 3

var isPalindrome = function (head) {
  let s1 = "";
  let s2 = "";
  node = head;
  while (node) {
    s1 = s1 + node.data;
    s2 = node.data + s2;
    node = node.next;
  }
  console.log(s1, s2);
  return s1 === s2;
};
// console.log(isPalindrome(list.head));

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const currNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = currNext;
  }

  return prev;
};

// console.log(reverseList(list.head));

const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(4);
list1.append(5);

// var mergeTwoLists = function (list, list1) {
//   console.log(list, list.head);
//   let l1Node = list.head;
//   let l2Node = list1.head;
//   while (l1Node || l2Node) {
//     if (l2Node.next === null) {
//       l2Node.next = l1Node;
//     }
//     if (l1Node.next === null) {
//       l1Node.next = l2Node;
//     }
//     if (l1Node.val >= l2Node.val) {
//       l2Node.next = l1Node;
//     } else {
//       l1Node.next = l2Node;
//     }
//   }
//   if (l1Node.val < l2Node.val) {
//     return l1Node
//   } else {
//     return l2Node;
//   }
// };

var mergeTwoLists = function (list1, list2) {
  let dummy = new Node(-1);
  let current = dummy;

  let l1Node = list1.head;
  let l2Node = list2.head;

  while (l1Node !== null && l2Node !== null) {
    if (l1Node.data <= l2Node.data) {
      current.next = l1Node;
      l1Node = l1Node.next;
    } else {
      current.next = l2Node;
      l2Node = l2Node.next;
    }
    current = current.next;
  }

  // Append the remaining nodes of l1 or l2
  if (l1Node !== null) {
    current.next = l1Node;
  } else {
    current.next = l2Node;
  }

  return dummy.next;
};
function printList(list) {
  let result = [];
  while (list !== null) {
    result.push(list.data);
    list = list.next;
  }
  console.log(result.join(" -> "));
}
let mergedList = mergeTwoLists(list, list1);
printList(mergedList);
