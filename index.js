'use strict';
const postcss = require('postcss');

module.exports = postcss.plugin('postcss-padding-margin-axis', function (opts) {
  opts = opts || {};

  return function (css, result) {

    css.walkDecls(/^(paddingVertical|padding-vertical|padding-y|paddingHorizontal|padding-horizontal|padding-x|marginVertical|margin-vertical|margin-y|marginHorizontal|margin-horizontal|margin-x)/, function (decl) {

      let type   = 'padding';
      let axis1  = '-top';
      let axis2  = '-bottom';
      let values = [];
      let value  = decl.value;

      if(/^(margin)/.test(decl.prop)){
        type = 'margin'
      }

      if(/(horizontal|x)$/i.test(decl.prop)){
        axis1 = '-left';
        axis2 = '-right';
      }

      if(/\s/.test(value)) {
        values = value.split(/\s/); // multiple values, split with space
      }
      else{
        values[0] = value;
        values[1] = value;
      }


      decl.prop  = type + axis1
      decl.value = values[0]

      decl.cloneAfter({ prop:  type + axis2, value: values[1] });
    });

  };
});
