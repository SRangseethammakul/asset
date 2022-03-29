const raiToVaa = 400;
const nganToVaa = 100;

let rai = 5;
let ngan = 2;
let vaa = 89;
let summaryVaa = rai * raiToVaa + ngan * nganToVaa + vaa;
let summaryRai = summaryVaa / 400;
console.log(summaryVaa);
console.log(summaryRai);

let pricePerRai = 400000;
let pricePerVaa = 1000;

let sumPrice = pricePerVaa * raiToVaa * summaryRai;
console.log(sumPrice);
