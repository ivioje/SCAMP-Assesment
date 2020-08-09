//the function below outputs the fibbonacci sequence of a given number

fib = (n) => {

//using the first and second numbers of the fibbonacci suquence to
//calculate the rest numbers in the sequence, 0 and 1

  if (n == 0) {
    return 0
  }
	 else if (n == 1) {
     return 1
} else {

//from the equation Fn = Fn-1 + Fn-2

  return fib(n-1) + fib(n-2)
}
}

let a = [];

//output the first 20 numbers in the sequence

	for (let i = 0; i <= 20; i++) {
   a.push(fib(i)) 
  }

console.log(a);