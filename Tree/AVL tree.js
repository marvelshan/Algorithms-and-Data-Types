class BTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  findMin(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  getNodeHeight(node) {
    if (!node) return -1;

    const lh = this.getNodeHeight(node.left);
    const rh = this.getNodeHeight(node.right);

    return Math.max(lh, rh) + 1;
  }

  getBF(node) {
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  rightRotation(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }

  leftRotation(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  balance(node) {
    if (!node) return node;
    const nodeBF = this.getBF(node);
    if (nodeBF > 1) {
      if (this.getBF(node.left) < 0) {
        node.left = this.leftRotation(node.left);
      }
      node = this.rightRotation(node);
    } else if (nodeBF < -1) {
      if (this.getBF(node.right) > 0) {
        node.right = this.rightRotation(node.right);
      }
      node = this.leftRotation(node);
    }
    return node;
  }

  insert(data) {
    const insertHelper = (node) => {
      let curNode = node;
      if (!curNode) {
        return new BTNode(data);
      }
      if (data < curNode.data) {
        curNode.left = insertHelper(curNode.left);
      } else if (data > curNode.data) {
        curNode.right = insertHelper(curNode.right);
      }
      curNode = this.balance(curNode);
      return curNode;
    };
    this.root = insertHelper(this.root);
  }

  remove(data) {
    const removeNode = (data, node) => {
      let curNode = node;
      if (!curNode) {
        return false;
      }

      if (data < curNode.data) {
        curNode.left = removeNode(data, curNode.left);
      } else if (data > curNode.data) {
        curNode.right = removeNode(data, curNode.right);
      } else {
        if (!curNode.left && !curNode.right) return null;
        if (!curNode.left) return curNode.right;
        if (!curNode.right) return curNode.left;

        const aux = this.findMin(curNode.right);
        curNode.data = aux.data;
        curNode.right = removeNode(aux.data, curNode.right);
      }
      curNode = this.balance(curNode);
      return curNode;
    };
    this.root = removeNode(data, this.root);
  }
}
