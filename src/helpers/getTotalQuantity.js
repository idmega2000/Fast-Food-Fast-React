/* eslint-disable no-return-assign */
/**
     * @returns {void} -
     * @param {object} AllMenuInfo
     */
const getTotalQuantity = (AllMenuInfo = '') => {
  let totalQuantity = 0;
  if (AllMenuInfo !== null) {
    AllMenuInfo.map(menu => (totalQuantity += menu.quantity));
    return totalQuantity;
  }
  return '';
};

export default getTotalQuantity;
