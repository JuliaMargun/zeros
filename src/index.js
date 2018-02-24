module.exports = function getZerosCount(number) {
  var zerosCount = 0;
  var i = 5;
  while(i <= number) {
  	++zerosCount;
  	var j = i;
  	do {
  		j /= 5;
  		if (j % 5 == 0) {
  			++zerosCount;
  		}
  	} while (j % 5 == 0)
  	i += 5;
  }
  return zerosCount;
}
