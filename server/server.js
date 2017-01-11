var express = require('express');
//var  cors = require('cors');
var alchemyDataNewsV1 = require('watson-developer-cloud/alchemy-data-news/v1');
var bodyParser =  require('body-parser');
var app = express();
var test = require('./services/testParameters');
var Q = require('q');
//app.use(cors());
var alchemy = new alchemyDataNewsV1({
  api_key: '832d4b1a8e997c012aa63af00c53e8f0195fb1c3'
});
//var params= {
//	start:'now-1d',
//	end: 'now',
//	outputMode: 'json',
//	'q.enriched.url.concepts.concept.text': 'bmw',
//	return: 'enriched.url.text'
// }
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/search', function(req, resp,next) {
  console.log(req.body);
test.testParameters(req.body.data).then(function(response){

  alchemy.getNews(response, function (err, news) {
  if (err)
    console.log('error:', err);
  else

    resp.send(JSON.stringify(news, null, 2));
  });


}).catch(function(err){
  console.log(err);
});
//console.log('essaie ------->',test.testParameters(req.body.data));
  var params = {
    start: 'now-1d',
    end: 'now',
    outputMode: 'json',
    'q.enriched.url.enrichedTitle.keywords.keyword.text': 'bmw',
    return: [ 'enriched.url.url,enriched.url.author' ]

  };

  console.log('params', params);
  //resp.setHeader('Access-Control-Allow-Credentials', true);
  console.log('request', req.body.data);



});

app.listen(3000, function() {
  console.log('server lancé');
});
