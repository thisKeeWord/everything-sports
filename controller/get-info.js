const request = require('request');
const util = require('util');
const urls = [`https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=${process.env.KEY}`, `https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=${process.env.KEY}`];


const controller = {
  getData: getData
};
const stat = util.promisify(requestData);


function requestData(url) {
  request(url, function(error, response) {
    if (error) return console.error(error);
    // console.log(JSON.parse(response.body))
    return JSON.parse(response.body);
  });
}

function getData(req, res) {
  let p = Promise.resolve(); // Q() in q
  let i = 0;
  urls.forEach(entry => {
    p = p.then(() => { stat(entry) });
    i++;
    console.log(i, 'hi')
    return p;
  });
  console.log(i)
  res.send(p);
}



module.exports = controller;