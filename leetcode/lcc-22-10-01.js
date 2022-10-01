function numDecodings(s) {
  const n = s.length;                                                           
  const dp = new Array(n + 1).fill(null);                                       
                                                                                                         
  dp[n] = 1;                                                                                             
                                                                                                         
  for (let i=n-1; i >= 0; i--) {                                                                         
    if (s[i] == '0') dp[i] = 0;                                                                          
    else {                                                                                               
      dp[i] = dp[i+1];                                                          
      if (i < n-1 && (s[i] == '1' || s[i] == '2' && s[i+1] < '7')) dp[i] += dp[i+2];
    }                                                                                                         
  }                                                                                                           
                                                                                                              
  return !n ? 0 : dp[0]                                                                                       
}
