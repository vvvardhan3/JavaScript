const x = "hello";

const y = "hrlle";

const error = "length of the strings must be equal!";

let count = 0;

function hammingDistance(x, y) {
  if (x.length !== y.length) {
    console.log(error);
  } else {
    for (let index = 0; index < x.length; index++) {
      if (x[index] !== y[index]) {
        count++
      }
    }
    console.log(count)
  }
}

hammingDistance(x, y);
