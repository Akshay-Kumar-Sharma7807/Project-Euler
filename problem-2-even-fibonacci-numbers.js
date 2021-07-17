function fiboEvenSum(n) {
  var fiboArr = [1, 2];
  // var fibo = 1;
  // while(fibo<n){
  //   if(fibo == 1){
  //     fiboArr.push(1);
  //     fibo + 1;
  //   }
  //   else{
  //     fiboArr.push(fiboArr[fiboArr.length-2] + fibo)
  //   }
  // }
  var fibo = 0;
  do {
    let len = fiboArr.length;
    fibo = fiboArr[len - 1] + fiboArr[len - 2];
    fiboArr.push(fibo);
  } while (fibo < n);
  console.log(fiboArr);

  var total = 0;

  for (var i = 0; i < fiboArr.length; i++) {
    if (fiboArr[i] % 2 == 0) {
      total = total + fiboArr[i];
    }
  }
  console.log(total);

  return total;
}
fiboEvenSum(8);
