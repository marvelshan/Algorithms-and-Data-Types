class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      } else {
        return false;
      }
    }
  }

  find(value) {
    let current = this.root;

    while (current !== null) {
      // 如果要尋找的值小於當前節點值，往左子樹移動
      if (value < current.value) {
        current = current.left;
      }
      // 如果要尋找的值大於當前節點值，往右子樹移動
      else if (value > current.value) {
        current = current.right;
      }
      // 如果找到了對應值的節點，返回該節點
      else {
        return current;
      }
    }

    // 若未找到對應值的節點，返回 null
    return null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return newNode;
    }
    return this.insertRecursive(this.root, newNode);
  }
  insertRecursive(current, newNode) {
    if (newNode.value < current.value) {
      if (!current.left) {
        current.left = newNode;
        return;
      }
      return this.insertRecursive(current.left, newNode);
    } else if (newNode.value > current.value) {
      if (!current.right) {
        current.right = newNode;
        return;
      }
      return this.insertRecursive(current.right, newNode);
    } else {
      return current;
    }
  }

  find() {}
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(2);
tree.insert(5);
tree.insert(13);
tree.insert(17);
tree.insert(11);
// tree.insert(7);
console.log(tree);
