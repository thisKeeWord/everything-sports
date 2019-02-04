const request = require('request');
const util = require('util');


const controller = {
  getData: getData
};
const stat = util.promisify(requestData);


function requestData(url) {
  request(url, function(error, response) {
    if (error) return console.error(error);
    console.log(JSON.parse(response.body))
    return JSON.parse(response.body);
  });
}

function getData(req, res) {
  stat(`https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=${process.env.KEY}`)
    .then((stats) => {
      res.send(stats);
    });
}



// 'https://newsapi.org/v2/top-headlines?sources=bbc-sport&'
module.exports = controller;