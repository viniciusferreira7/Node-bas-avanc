let storage = []
let prime = []

// Check if the number is prime if it is put in storage if not return false
const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false
    };
  return num > 1;
}


for (num = 1; num <= 1000; num++) {
  storage.push(num)
}

storage.map(n => {
  if (isPrime(n)) prime.push(n)
})

// Function return the sum of all numbers in the prime array
const main = (params) => {
  const reducer = (totalNumber, nextNumber) => {
    return totalNumber + nextNumber
  }

  const result = params.reduce(reducer)
  return result
}

console.log(prime)
console.log(main(prime))