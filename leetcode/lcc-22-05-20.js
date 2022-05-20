function uniquePathsWithObstacles(obstacleGrid) {                               
                                                                                
  const m = obstacleGrid.length;                                                
  const n = obstacleGrid[0].length;                                             
                                                                                
  const paths = Array(m).fill(null).map(() => Array(n).fill(null));             
  paths[0][0] = obstacleGrid[0][0] ? 0 : 1;                                     
                                                                                
  for (let j=1; j < n; j++) {                                                   
    if (!obstacleGrid[0][j]) {                                                  
      paths[0][j] = paths[0][j-1];                                              
    }                                                                           
  }                                                                             
                                                                                
  for (let i=1; i < m; i++) {                                                   
    if (!obstacleGrid[i][0]) {                                                  
      paths[i][0] = paths[i-1][0];                                              
    }                                                                           
  }                                                                             
                                                                                
  for (let i=1; i < m; i++) {                                                   
    for (let j=1; j < n; j++) {                                                 
      if(!obstacleGrid[i][j]) {                                                 
        paths[i][j] = paths[i-1][j] + paths[i][j-1];                            
      } else {                                                                  
        paths[i][j] = 0;                                                        
      }                                                                         
    }                                                                           
  }                                                                             
                                                                                
  return paths[m-1][n-1];                                                       
}

