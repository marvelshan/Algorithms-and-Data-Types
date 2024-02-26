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
}
