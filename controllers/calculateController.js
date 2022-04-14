const raiToVaa = 400;
const nganToVaa = 100;
const { setNumberformatWithComma } = require("../functions/SetFormat");
exports.index = async (req, res, next) => {
  try {
    const { rai, ngan, vaa, price } = req.body;
    let summaryVaa =
      Number(rai) * raiToVaa + Number(ngan) * nganToVaa + Number(vaa);
    let sumPrice = ((Number(price) / raiToVaa) * summaryVaa).toFixed(2);
    let priceAvg = (price / raiToVaa).toFixed(2);
    sumPrice = await setNumberformatWithComma(sumPrice);
    priceAvg = await setNumberformatWithComma(priceAvg);
    summaryVaa = await setNumberformatWithComma(
      parseInt(summaryVaa).toFixed(2)
    );
    pricePerRai = await setNumberformatWithComma(parseInt(price).toFixed(2));
    res.status(200).json({
      calculatePrice: sumPrice,
      summaryVaa,
      priceAvg,
      pricePerRai: pricePerRai,
    });
  } catch (error) {
    next(error);
  }
};
exports.calculatePerSize = async (req, res, next) => {
  try {
    const { rai, ngan, vaa, price } = req.body;
    let summaryVaa =
      Number(rai) * raiToVaa + Number(ngan) * nganToVaa + Number(vaa);
    let avgPrice = ((Number(price) / summaryVaa) * raiToVaa).toFixed(2);
    let priceAvg = (avgPrice / raiToVaa).toFixed(2);
    avgPrice = await setNumberformatWithComma(avgPrice);
    priceAvg = await setNumberformatWithComma(priceAvg);
    summaryVaa = await setNumberformatWithComma(
      parseInt(summaryVaa).toFixed(2)
    );
    newPrice = await setNumberformatWithComma(parseInt(price).toFixed(2));

    res.status(200).json({
      calculatePrice: newPrice,
      summaryVaa,
      priceAvg,
      pricePerRai: avgPrice,
    });
  } catch (error) {
    next(error);
  }
};
exports.calculatePerVaa = async (req, res, next) => {
  try {
    const { rai, ngan, vaa, price } = req.body;
    let summaryVaa =
      Number(rai) * raiToVaa + Number(ngan) * nganToVaa + Number(vaa);
    summaryVaa = await setNumberformatWithComma(summaryVaa);
    let sumPrice = (summaryVaa * Number(price)).toFixed(2);
    sumPrice = await setNumberformatWithComma(sumPrice);
    let pricePerRai = (Number(price) * raiToVaa).toFixed(2);
    pricePerRai = await setNumberformatWithComma(pricePerRai);
    let priceVaa = await setNumberformatWithComma(price);
    res.status(200).json({
      calculatePrice: sumPrice,
      summaryVaa,
      priceAvg: priceVaa,
      pricePerRai: pricePerRai,
    });
  } catch (error) {
    next(error);
  }
};

/*
ตรง option มันควรอยู่เป็น บรรทัดเดียวกันนะ 
1. ราคา/ไร่
2. ราคารวม
3. ราคา/ตร.ว.

ราคารวมผิดนะ ต้องเป็น 2000*250 = *500,000* 

ราคาเฉลี่ย ต้องเป็น 2000

ราคาเฉลี่ยต่อไร่ ต้องเป็น 2000*400 = *800,000* 

ราคา/ไร่  ราคารวม  ราคา/ตร.ว.
*/
