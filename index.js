console.log("NOde"); 

//Class for a Node:
class Node{
    constructor(data, left = null, right = null){
      this.data = data; 
      this.left = left; 
      this.right = right;
    }
}

//Class for a BST : 

class BST{
    constructor(root = null){
       this.root = root;
    }

    addData(data){
      this.root = new Node(data); 
    }
}

const b2 = new BST; 
b2.addData(100);
console.log(b2);