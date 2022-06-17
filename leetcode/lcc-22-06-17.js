function minCameraCover(root) {                                                 
                                                                                
  let count=0;                                                                  
                                                                                
  return (!helper(root) ? 1: 0) + count;                                       
                                                                                
  function helper(node) {                                                       
    if (!node) return 2;                                                        
                                                                                
    const left = helper(node.left);                                             
    const right = helper(node.right);                                           
                                                                                
    if (!left || !right) {                                                      
      count += 1;                                                               
      return 1;                                                                 
    }                                                                           
                                                                                
    return (left == 1 || right == 1) ? 2 : 0;                                   
                                                                                 
  }                                                                              
                                                                                 
}

