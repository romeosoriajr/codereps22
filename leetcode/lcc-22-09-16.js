function maximumScore (nums, multipliers) {
    const n = nums.length;
    const m = multipliers.length;
    let result = Number.MIN_SAFE_INTEGER;
    let dp = new Array(m+1).fill(0).map(()=>new Array(m+1).fill(0));
    for (let j=1; j<=m; j++) dp[0][j] = dp[0][j-1] + multipliers[j-1]*nums[n-j];
    for (let i=1; i<=m; i++) dp[i][0] = dp[i-1][0] + multipliers[i-1]*nums[i-1];
    for (let i=1; i<=m; i++) {
        for (let j=1; i+j<=m; j++) {
            dp[i][j] = Math.max(dp[i-1][j] + multipliers[i+j-1]*nums[i-1],  dp[i][j-1] + multipliers[i+j-1]*nums[n-j]);
        }
    }
    for (let i=0; i<=m; i++) result = Math.max(result, dp[i][m-i]);
    return result;
};
