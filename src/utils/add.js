export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let numbersToProcess = numbers;

  if (numbers.startsWith("//")) {
    const delimiter = numbers[2];
    numbersToProcess = numbers.substring(4);
    numbersToProcess = numbersToProcess.replaceAll(delimiter, ",");
  }

  numbersToProcess = numbersToProcess.replaceAll("\n", ",");
  const numberArray = numbersToProcess.split(",");

  for (const num of numberArray) {
    const number = Number(num);
    if (number < 0) {
      throw new Error(`negative numbers not allowed ${number}`);
    }
  }

  return numberArray.reduce((sum, num) => sum + Number(num), 0);
}
