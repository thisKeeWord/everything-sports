const request = require('request');
const rp = require('request-promise');
const util = require('util');
const urls = [`https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=${process.env.KEY}`, `https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=${process.env.KEY}`, `https://newsapi.org/v2/top-headlines?sources=nfl-news&apiKey=${process.env.KEY}`];


const controller = {
  getData: getData
};
const stat = util.promisify(requestData);


async function requestData(res) {
  console.log('wassup')
  let response = [];
  // response.push(JSON.parse(await rp(urls[0])));
  // add stuff from url1 response to url2
  // response.push(JSON.parse(await rp(urls[1])));
  // response.push(JSON.parse(await rp(urls[2])));

  for (let i = 0; i < urls.length; i++) {
    response.push(JSON.parse(await rp(urls[i])));
  }

  res.send(response);
  // add stuff from url2 response to url3
  // response = await rp(url3)
  // request(url, function(error, response) {
  //   if (error) return console.error(error);
  //   // console.log(JSON.parse(response.body))
  //   return JSON.parse(response.body);
  // });
}

function getData(req, res) {
  // let p = Promise.resolve(); // Q() in q
  // let i = 0;
  // urls.forEach(entry => {
  //   p = p.then(() => { stat(entry) });
  //   i++;
  //   console.log(i, 'hi')
  //   return p;
  // });
  // Promise.all(ojiojmkb                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            )
  //   .then(() => {
  //     console.log(i, ojiojmkb                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            )
  //     res.send(ojiojmkb                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            );
  //   })
  //   .catch((err) => { 
  //     return console.error(err);
  //   });
  
  requestData(res)
  .catch(err => console.log) // Don't forget to catch errors
}



module.exports = controller;