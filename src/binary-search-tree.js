const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootData = null;
  }

  root() {
    if (!this.rootData) {
      return null;
    } else {
      return this.rootData;
    }
  }

  add(data) {
    this.rootData = addData(this.rootData, data)

    function addData(node, data) {
      if(!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if(node.data < data) {
        node.right = addData(node.right, data);
      }

      if (node.data > data) {
        node.left = addData(node.left, data);
      }

      return node;
    }

  }

  has(data) {
    return isHasData(this.rootData, data);

    function isHasData(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data < data) {
        return isHasData(node.right, data);
      }

      if (node.data > data) {
        return isHasData(node.left, data);
      }
    }
  }

  find(data) {
    return findData(this.rootData, data);

    function findData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data < data) {
        return findData(node.right, data)
      } else {
        return findData(node.left, data)
      }
    }
  }

  remove(data) {
    this.rootData = removeData(this.rootData, data);

    function removeData(node, data) {
      if (!node) {
        return undefined;
      }

      if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeData(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minNodeRightData = node.right;

        while (minNodeRightData.left) {
          minNodeRightData = minNodeRightData.left;
        }

        node.data = minNodeRightData.data;
        node.right = removeData(node.right, minNodeRightData.data);

        return node;
      }

    }
  }

  min() {

    if (!this.rootData) {
      return null;
    }

    let node = this.rootData;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {

    if (!this.rootData) {
      return null;
    }

    let node = this.rootData;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};