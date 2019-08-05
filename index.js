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
        if(this.root === null){
          this.root = new Node(data);
        }else{
            const root = this.root;
            const searchTerm = function(root){
            if(data > root.data){
                if(root.right === null){
                  root.right = new Node(data);
                  return;
                }else{
                    return searchTerm(root.right);
                }

            }else if(data < root.data){
                if(root.left === null){
                  root.left = new Node(data);
                  return; 
                }else{
                   return searchTerm(root.left);
                }
            }else{
                return;
            }

        }
          return searchTerm(root);
        }
    }


    //Finding Minimum: 

   findMin(){
       var root = this.root; 
       while(root.left !== null){
           root = root.left;
       }

       console.log(root);
   }

     //Finding Maximum: 

     findMax(){
        var root = this.root; 
        while(root.right !== null){
            root = root.right;
        }
 
        console.log(root);
    }


}

const b2 = new BST; 
b2.addData(100);
b2.addData(75);
b2.addData(150);
b2.addData(80);
b2.addData(60);
b2.addData(200);
b2.addData(140);
b2.addData(30);
console.log("---");
b2.findMax();

// console.log(b2);