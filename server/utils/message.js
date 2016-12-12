//this is a module all code below
// could use const or var to import libs
var moment = require('moment');
var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().valueOf()
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude}, ${longitude}`,
    createdAt: moment().valueOf()
  };
};
module.exports = {generateMessage, generateLocationMessage};
