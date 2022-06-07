function merge(nums1, m, nums2, n) {                                            
                                                                                
  let tail1 = m-1;                                                              
  let tail2 = n-1;                                                              
                                                                                
  let pointer = nums1.length-1;                                                 
                                                                                
  while (tail1 >= 0 && tail2 >= 0) {                                            
                                                                                
    nums1[pointer--] = nums1[tail1] > nums2[tail2] ? nums1[tail1--] : nums2[tail2--];
                                                                                
  }                                                                             
                                                                                
  while (tail1 >= 0) {                                                          
    nums1[pointer--] = nums1[tail1--];                                          
  }                                                                             
                                                                                
  while (tail2 >= 0) {                                                          
    nums1[pointer--] = nums2[tail2--];                                          
  }                                                                             
                                                                                
                                                                                
}
