var postcss = require('postcss');
var expect  = require('chai').expect;
var plugin  = require('../');

var test = function (input, output, opts, done) {
  postcss([ plugin(opts) ]).process(input).then(function (result) {
    expect(result.css).to.eql(output);
    expect(result.warnings()).to.be.empty;
    done();
  }).catch(function (error) {
    done(error);
  });
};

describe('postcss-padding-margin-axis', function () {

  it('test paddingVertical', function (done) {
    test('a{ paddingVertical: 12px; }',
         'a{ padding-top: 12px; padding-bottom: 12px; }', { }, done);
  });
  it('test paddingVertical different values', function (done) {
    test('a{ paddingVertical: 12px 21px; }',
         'a{ padding-top: 12px; padding-bottom: 21px; }', { }, done);
  });


});
