const raiToVaa = 400;
const nganToVaa = 100;
exports.index = async (req, res, next) => {
  try {
    const { rai, ngan, vaa, price } = req.body;
    let summaryVaa =
      Number(rai) * raiToVaa + Number(ngan) * nganToVaa + Number(vaa);
    let sumPrice = (Number(price) / raiToVaa) * summaryVaa;
    let priceAvg = price / raiToVaa;
    res.status(200).json({ calculatePrice: sumPrice, summaryVaa, priceAvg });
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
    res.status(200).json({ calculatePrice: avgPrice, summaryVaa, priceAvg });
  } catch (error) {
    next(error);
  }
};
