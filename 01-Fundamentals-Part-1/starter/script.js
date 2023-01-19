const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("Dolphins win!");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log("Koalas win!");
} else if (averageKoalas === averageDolphins && averageKoalas >= 100) {
  console.log("Draw!")
} else {
  console.log("No result.")
}
