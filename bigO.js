let num = 0;
function hanoi(discs, source, dest, aux) {
  if (discs == 1) {
    mover(source, dest);
    num += 1;
  } else {
    hanoi(discs - 1, source, aux, dest);
    mover(source, dest);
    num += 1;
    hanoi(discs - 1, aux, dest, source);
    console.log(num);
    return dest;
  }
}
function mover(startRod, targetRod) {
  targetRod.push(startRod.pop());
  console.log(startRod, targetRod);
}

//hanoi(5, [1,2,3,4,5], [], []);

function sheep(sheep) {
  for (let i = sheep; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log("All sheep jumped over the fence");
}

//sheep(3)
//O(n)

function powerCalculator(base, exponent) {
  let starter = 1;
  for (let i = 0; i < exponent; i++) {
    starter = starter * base;
  }
  return starter;
}

//powerCalculator(10, 3)
//O(n)

function reverseString(string) {
  let splitString = string.split("");
  let newString = "";
  for (let i = splitString.length - 1; i >= 0; i--) {
    newString = newString + splitString[i];
  }
  return newString;
}

//reverseString('chad')
//O(n)

function triangles(num) {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total = total + i;
  }
  return total;
}
//triangles(3)
//O(n)
function stringSplitter(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    result.push(string[i]);
  }
  return result;
}

//stringSplitter('chad')
//O(n)

function fibonacci(num) {
  let result = [];
  let total = 0;
  let curr = 0;
  let prev = 0;
  for (let i = 0; i < num; i++) {
    if (result.length === 0) {
      result.push(1);
    } else {
      prev = curr;
      curr = result[i - 1];
      total = curr + prev;
      result.push(total);
    }
  }
  return result;
}
//fibonacci(7)
//O(n)

function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total = total * i;
  }
  return total;
}

//factorial(5)
//O(n)
