class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function BFS(root) {
  let result = [];
  let q = [];

  q.push(root);
  while (q.length > 0) {
    let currentLevel = [];
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let node = q.shift();
      currentLevel.push(node.data);

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

console.log("BFS Traversed Tree", BFS(root));
