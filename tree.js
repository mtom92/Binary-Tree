class Leaf {
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
      var newNode = new Leaf(val)
      var nodeExist = false
      var comparison
    if(!this.root) {
        this.root = newNode
    }else{
      comparison = this.root
       while(!nodeExist){
           if(newNode.val > comparison.val){
               if(comparison.right){
                 comparison = comparison.right;
               }else{
                 comparison.right = newNode;
                 nodeExist = true;
               }
           } else{
               if(comparison.left){
                 comparison = comparison.left;
               }else{
                 comparison.left = newNode;
                 nodeExist = true;
               }
           }
       }
     }
     return this
   }

   search(val){
      if(!this.root){
          return false
      } else{
          var current=this.root
          var found = false

          while(!found){
              if(current.val === val) return true
              if(val > current.val){
                  if(current.right){
                      current = current.right
                  }else{
                      return false
                  }
              }
              if(val < current.val){
                  if(current.left){
                      current = current.left
                  }else{
                      return false
                  }
              }

          }
      }
   }

   bfs(){
     var queue = [] , nodeVal , dequeue = [];
     queue.push(this.root)
     while(queue.length > 0){
         nodeVal = queue.shift()
         if(nodeVal.left){
           queue.push(nodeVal.left)
         }
         if(nodeVal.right){
           queue.push(nodeVal.right)
         }
         dequeue.push(nodeVal.val)
     }
     return dequeue
   }

   dfsPre(){
     var visited = []
     function helper(node){
       visited.push(node.val)
       if(node.left) helper(node.left)
       if(node.right) helper(node.right)
     }
     helper(this.root)
     return visited
   }

   dfsPost(){
     var visited = []
     function helper(node){
       if(node.left) helper(node.left)
       if(node.right) helper(node.right)
       visited.push(node.val)
     }
     helper(this.root)
     return visited
   }

   dfsInOrder(){
     var visited = []
     function helper(node){
       if(node.left) helper(node.left)
       visited.push(node.val)
       if(node.right) helper(node.right)
     }
     helper(this.root)
     return visited
   }

}
