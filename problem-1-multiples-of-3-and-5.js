function multiplesOf3and5(number) {
  var multipleArray = [];
  for (var i = 1; true; i++) {
    var multipleOf3 = i * 3;
    var multipleOf5 = i * 5;

    if (multipleOf3 < number) {
      multipleArray.push(multipleOf3);
    }
    if (multipleOf5 < number) {
      multipleArray.push(multipleOf5);
    }
    if (multipleOf5 > number && multipleOf3 > number) {
      break;
    }
  }

  var filteredArray = [...new Set(multipleArray)];

  var total = 0;

  for (var j = 0; j < filteredArray.length; j++) {
    total = total + filteredArray[j];
  }

  console.log(total);
  return total;
}

multiplesOf3and5(49);
