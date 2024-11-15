function getReduction(price, age) {

    if (age <= 5) {
      return(price * 0/100);
    } else if (age <= 18) {
      return(price * 50/100);
    } else if(age <= 25){
      return(price * 30/100);
    } else if(age > 25) {
      return(price);
    }
    
  }
  console.log(getReduction(10, 5));
  console.log(getReduction(150, 25));