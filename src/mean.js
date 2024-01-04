const lst = [
  "u",
  "6",
  "d",
  "1",
  "i",
  "w",
  "6",
  "s",
  "t",
  "4",
  "a",
  "6",
  "g",
  "1",
  "2",
  "w",
  "8",
  "o",
  "2",
  "0",
];

//[3.6, "udiwstagwo"]
export function mean(lst) {
  const chars = [];
  const numbers = [];
  let word = "";
  let mean;
  lst.map((item) => {
    // work on characters
    if (isNaN(parseInt(item))) {
      chars.push(item);
      word = chars.join("");
      // return item;
    } else {
      // work on numbers
      numbers.push(parseInt(item));
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      mean = sum / numbers.length;
      // return parseInt(item);
    }
  });
  // console.log(word);
  // console.log(parsedArray);
  console.log([word, mean]);

  return [mean, word];
}

mean(lst);
