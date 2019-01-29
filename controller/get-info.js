var request = require('request');

var controller = {
  getData: getData
};

function getData(req, res) {
  console.log('test')
  request(`https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=${process.env.KEY}`, function(error, response) {
    if (error) return console.error(error);
    console.log(JSON.parse(response.body));
  })
}

module.exports = controller;