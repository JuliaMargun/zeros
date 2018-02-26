module.exports = function getZerosCount(number) {
  var zerosCount = 0;
  var i = 5;
  while(i <= number) {
  	zerosCount += Math.trunc(number / i);
  	i *= 5;
  }
  return zerosCount;
}