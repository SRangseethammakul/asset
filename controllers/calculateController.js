const raiToVaa = 400;
const nganToVaa = 100;
exports.index = async (req, res, next) => {
  try {
    const { rai, ngan, vaa, price } = req.body;
    let summaryVaa =
      Number(rai) * raiToVaa + Number(ngan) * nganToVaa + Number(vaa);
    let summaryRai = summaryVaa / raiToVaa;
    console.log(summaryRai);
    let sumPrice = Number(price) * raiToVaa * summaryRai;
    res.status(200).json(sumPrice);
  } catch (error) {
    next(error);
  }
};
