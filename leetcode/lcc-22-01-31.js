function maximumWealth (customers) {

  let result = 0;

  for (let i=0; i < customers.length; i++) {
    const accounts = customers[i];
    const wealth = accounts.reduce((total, val) => total+=val);
    result = Math.max(result, wealth);
  }

  return result;

}

