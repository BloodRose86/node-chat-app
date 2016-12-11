const moment = require('moment')

var createdAt = 1234;
var time = moment(createdAt);
console.log(time.format('dddd MMMM DD hh:mm A'));
