const input = "**...."; // "117777"  "xxff"  "stttt"

let arr1 = Array.from(input);
console.log(arr1);

const arg1 = arr1[0];
let cnt1 = 0,
  cnt2 = 0;
let percent;

arr1.forEach((val) => {
  if (val === arg1) ++cnt1;
  else ++cnt2;
});

console.log(cnt1, cnt2);
percent = (cnt1 / (cnt1 + cnt2)) * 100;
percent = Math.round(percent);

console.log("Percent: ", percent);
