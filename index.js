console.log("NOde"); 

class Node{
    constructor(data, left = null, right = null){
      this.data = data; 
      this.left = left; 
      this.right = right;
    }
}

const n1 = new Node(100); 
console.log(n1); 