const setNumberformatWithComma = async (number) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    } catch (e) {
      reject(e);
    }
  });
}
module.exports = {
  setNumberformatWithComma
};