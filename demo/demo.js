require(['UtmConverter'], function() {

  var converter = new UtmConverter();
  var wgsCoord = [145.240917, -37.830436];
  var utmResult = converter.toUtm({coord: wgsCoord});
  console.log('wgsCoord', JSON.stringify(wgsCoord));
  console.log('utmResult', JSON.stringify(utmResult));

  var wgsResult = converter.toWgs(utmResult);
  console.log('wgsResult', JSON.stringify(wgsResult));

});
