export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  const numberArray = numbers.split(",");
  let sum = 0;
  for (const num of numberArray) {
    sum += parseInt(num);
  }
  return sum;
}
