function lengthOfLongestSubstring(s) {                                          
  let result = 0;                                                               
  let seen = {};                                                                
  let start = -1;                                                               
                                                                                
  for (let i = 0; i < s.length; i++) {                                          
    const char = s.charAt(i);                                                   
                                                                                
    if (char in seen) {                                                         
      start = Math.max(start, seen[char]);                                                       
    }                                                                           
                                                                                
    seen[char] = i;                                                             
                                                                                      
    result = Math.max(result, i - start);                                             
  }                                                                                   
  return result;                                                                      
}
