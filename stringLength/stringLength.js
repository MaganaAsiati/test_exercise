const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  }
  throw new Error('String must be between 1 and 10 characters long');
};

module.exports = stringLength;