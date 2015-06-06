UTM Converter
=================

A converter between geographic coordinates in WGS84 and Universal Transverse Mercator (UTM) coordinates.

## Usage

```
var converter = new UtmConverter();
var wgsCoord = [145.240917, -37.830436];
var utmResult = converter.toUtm({coord: wgsCoord});
// {"coord":{"x":345196.1971905405,"y":5811540.431764047},"zone":55,"isSouthern":true}

var wgsResult = converter.toWgs(utmResult);
// {"coord":{"longitude":145.24091699999727,"latitude":-37.83043599999867}}
```

## License

Released under the MIT license. Original library by [Chuck Taylor](http://home.hiwaay.net/~taylorc/toolbox/geography/geoutm.html).
