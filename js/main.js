function getRandomIntInclusive(min, max) {

  if (min > max) {
    return 'Error!';
  };

  if(min > -1 && max > -1) {
    min = Math.ceil(min);
    max = Math.round(max);
    return Math.round(Math.random() * (max - min)) + min; //Максимум и минимум включаются
  }

  return 'Error!';
}

getRandomIntInclusive(10, 85);

// код нашла здесь: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// но, кажется, от него уже мало что осталось изначального))

function lineLength(checkedLine, maxLength) {
  if(checkedLine.length <= maxLength) {
    return true;
  }

  return false;
}

lineLength('someone', 15);
