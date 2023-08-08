// ===================================== soal 1 =====================================================
const num = [1, 2, 4, 3, 5, 3, 2, 1];

function nilaiBesarKeKecil(num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] < num[j]) {
        const temp = num[i];
        num[i] = num[j];
        num[j] = temp;
        console.log(temp, "temp");
        console.log(num[i], "num1");
        console.log(num[j], "num2");
      }
    }
  }
  return num;
}

console.log(nilaiBesarKeKecil(num));

// =========================================== soal 2 =========================================
const array = [100, 200, 300, 400];
const n = 2;

function jumlahkanArrayBerdasarkanN(arr, n) {
  let sum = 0;

  for (let i = arr.length - 1; i >= arr.length - n; i--) {
    if (i >= 0) {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(jumlahkanArrayBerdasarkanN(array, n));

// ================================== soal 3 =======================================================

function JumlahBilanganGenapDiNested(nested) {
  let sum = 0;

  function rekursifFuction(obj) {
    for (const value of Object.values(obj)) {
      if (typeof value === "object" && value !== null) {
        rekursifFuction(value);
      } else if (typeof value === "number" && value % 2 === 0) {
        sum += value;
      }
    }
  }

  rekursifFuction(nested);
  return sum;
}

const nested = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const sumOfEvenNumbers = JumlahBilanganGenapDiNested(nested);
console.log(sumOfEvenNumbers);
