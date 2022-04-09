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
    summaryVaa = await setNumberformatWithComma(summaryVaa);
    pricePerRai = await setNumberformatWithComma(price);
    res.status(200).json({ calculatePrice: sumPrice, summaryVaa, priceAvg, pricePerRai: pricePerRai });
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
    summaryVaa = await setNumberformatWithComma(summaryVaa);
    newPrice = await setNumberformatWithComma(price);

    res.status(200).json({ calculatePrice: newPrice, summaryVaa, priceAvg, pricePerRai :avgPrice });
  } catch (error) {
    next(error);
  }
};
