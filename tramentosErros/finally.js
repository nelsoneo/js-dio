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
    finally {
        console.log("done " + num);
    }
  }
  
//   console.log(isNumber(10));
  console.log(isNumber());
  // console.log(isNumber("a"));
  