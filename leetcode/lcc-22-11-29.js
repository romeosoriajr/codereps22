function sumSubarrayMins(arr) {
  const mod = 10**9+7
  const stack = [-1]
  let res = 0
  arr.push(0)
  
  for(let a = 0; a < arr.length; a++){
    while(arr[a] < arr[stack[stack.length -1]]){
      let i = stack.pop()
      let i1 = stack[stack.length-1]
      let left = i - i1
      let right = a -i
      res += (left*right*arr[i])
    };
    stack.push(a)
  };
  
  return res%mod;
};

