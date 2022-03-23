function brokenCalc (startValue, target) {                                                    
  if (startValue > target) return startValue-target;                                                        
  if (startValue==target) return 0;                                                           
  if (target%2 == 0) return brokenCalc(startValue, target/2) + 1;                                  
  return brokenCalc(startValue, target+1) + 1;                                                 
}
