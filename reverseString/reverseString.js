function reverseString(string) {
  const splitStr = string.split('');
  const revStr = splitStr.reverse();
  const joinArray = revStr.join('');
  return joinArray;
}

module.exports = reverseString;