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



  /* padding vertical */
  it('test paddingVertical', function (done) {
    test('a{ paddingVertical: 12px; }',
         'a{ padding-top: 12px; padding-bottom: 12px; }', { }, done);
  });
  it('test paddingVertical different values', function (done) {
    test('a{ paddingVertical: 12px 21px; }',
         'a{ padding-top: 12px; padding-bottom: 21px; }', { }, done);
  });
  it('test padding-vertical', function (done) {
    test('a{ padding-vertical: 12px; }',
         'a{ padding-top: 12px; padding-bottom: 12px; }', { }, done);
  });
  it('test padding-vertical different values', function (done) {
    test('a{ padding-vertical: 12px 21px; }',
         'a{ padding-top: 12px; padding-bottom: 21px; }', { }, done);
  });
  it('test padding-y', function (done) {
    test('a{ padding-y: 12px; }',
         'a{ padding-top: 12px; padding-bottom: 12px; }', { }, done);
  });
  it('test padding-y different values', function (done) {
    test('a{ padding-y: 12px 21px; }',
         'a{ padding-top: 12px; padding-bottom: 21px; }', { }, done);
  });





  /* padding horizontal */
  it('test paddingHorizontal', function (done) {
    test('a{ paddingHorizontal: 12px; }',
         'a{ padding-left: 12px; padding-right: 12px; }', { }, done);
  });
  it('test paddingHorizontal different values', function (done) {
    test('a{ paddingHorizontal: 12px 21px; }',
         'a{ padding-left: 12px; padding-right: 21px; }', { }, done);
  });
  it('test padding-horizontal', function (done) {
    test('a{ padding-horizontal: 12px; }',
         'a{ padding-left: 12px; padding-right: 12px; }', { }, done);
  });
  it('test padding-horizontal different values', function (done) {
    test('a{ padding-horizontal: 12px 21px; }',
         'a{ padding-left: 12px; padding-right: 21px; }', { }, done);
  });
  it('test padding-x', function (done) {
    test('a{ padding-x: 12px; }',
         'a{ padding-left: 12px; padding-right: 12px; }', { }, done);
  });
  it('test padding-x different values', function (done) {
    test('a{ padding-x: 12px 21px; }',
         'a{ padding-left: 12px; padding-right: 21px; }', { }, done);
  });





  /* margin vertical */
  it('test marginVertical', function (done) {
    test('a{ marginVertical: 12px; }',
         'a{ margin-top: 12px; margin-bottom: 12px; }', { }, done);
  });
  it('test marginVertical different values', function (done) {
    test('a{ marginVertical: 12px 21px; }',
         'a{ margin-top: 12px; margin-bottom: 21px; }', { }, done);
  });
  it('test margin-vertical', function (done) {
    test('a{ margin-vertical: 12px; }',
         'a{ margin-top: 12px; margin-bottom: 12px; }', { }, done);
  });
  it('test margin-vertical different values', function (done) {
    test('a{ margin-vertical: 12px 21px; }',
         'a{ margin-top: 12px; margin-bottom: 21px; }', { }, done);
  });
  it('test margin-y', function (done) {
    test('a{ margin-y: 12px; }',
         'a{ margin-top: 12px; margin-bottom: 12px; }', { }, done);
  });
  it('test margin-y different values', function (done) {
    test('a{ margin-y: 12px 21px; }',
         'a{ margin-top: 12px; margin-bottom: 21px; }', { }, done);
  });





  /* margin horizontal */
  it('test marginHorizontal', function (done) {
    test('a{ marginHorizontal: 12px; }',
         'a{ margin-left: 12px; margin-right: 12px; }', { }, done);
  });
  it('test marginHorizontal different values', function (done) {
    test('a{ marginHorizontal: 12px 21px; }',
         'a{ margin-left: 12px; margin-right: 21px; }', { }, done);
  });
  it('test margin-horizontal', function (done) {
    test('a{ margin-horizontal: 12px; }',
         'a{ margin-left: 12px; margin-right: 12px; }', { }, done);
  });
  it('test margin-horizontal different values', function (done) {
    test('a{ margin-horizontal: 12px 21px; }',
         'a{ margin-left: 12px; margin-right: 21px; }', { }, done);
  });
  it('test margin-x', function (done) {
    test('a{ margin-x: 12px; }',
         'a{ margin-left: 12px; margin-right: 12px; }', { }, done);
  });
  it('test margin-x different values', function (done) {
    test('a{ margin-x: 12px 21px; }',
         'a{ margin-left: 12px; margin-right: 21px; }', { }, done);
  });



});
