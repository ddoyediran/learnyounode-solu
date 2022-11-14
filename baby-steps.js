//console.log(process.argv.slice(2));
const anArray = process.argv.slice(2);

let sum = 0;

anArray.map((item) => {
  sum += Number(item);
});

console.log(sum);
