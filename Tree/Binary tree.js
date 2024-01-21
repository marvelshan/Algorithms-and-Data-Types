class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    // this.children.push(childNode);
  }

  traverse() {
    // console.log(this.value);
    // this.children.forEach((child) => child.traverse());
  }

  find(value) {
    // if (this.value === value) {
    //   return this;
    // }
    // for (let child of this.children) {
    //   let found = child.find(value);
    //   if (found) {
    //     return found;
    //   }
    // }
    // return null;
  }
}

const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
const grandChild1 = new TreeNode(4);
const grandChild2 = new TreeNode(5);

root.addChild(child1);
root.addChild(child2);

child1.addChild(grandChild1);
child2.addChild(grandChild2);

root.traverse();

const found = root.find(5);
if (found) {
  console.log(`找到節點: ${found}`);
}

// const root = new TreeNode(1);
// const child1 = new TreeNode(2);
// const child2 = new TreeNode(3);
// const grandChild1 = new TreeNode(4);
// const grandChild2 = new TreeNode(5);

// root.addChild(child1);
// root.addChild(child2);

// child1.addChild(grandChild1);
// child2.addChild(grandChild2);

// root.traverse();

// const found = root.find(5);
// if (found) {
//   console.log(`找到節點: ${found}`);
// }
