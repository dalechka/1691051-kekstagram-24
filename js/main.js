function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// код нашла здесь: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

getRandomIntInclusive();


function lineLenght(checkedLine, maxLenght) {
  if(checkedLine <= maxLenght) {
    return true;
  }

  return false;
}

lineLenght();
