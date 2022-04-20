/* function isNumber(num) {
    if(!num) return 'Is not number input';
    if(!Number(num)) return 'Is not number input';

    return `${num} is a number`;
} */

function isNumber(num) {
  if (!num) throw "Is not number input";
  if (!Number(num)) return "Is not number input";

  return `${num} is a number`;
}

function isNumber(num) {
  try {
    if (!num) {
      return "Is not number input";
    } else if (!Number(num)) {
      return "Is not number input";
    } else {
      return `${num} is a number`;
    }
  } catch (error) {
      throw error;
    // console.log(error);
  }
}

// console.log(isNumber(10));
console.log(isNumber());
// console.log(isNumber("a"));
