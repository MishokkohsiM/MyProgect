!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="dist/",t(t.s=1)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){t(2),n.exports=t(3)},function(n,e){console.log("I'm the entry point"),console.log("Have a great day!")},function(n,e,t){var r=t(4),o=t(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:x(f,e),references:1}),r.push(u)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var g=null,h=0;function x(n,e){var t,r,o;if(e.singleton){var i=h++;t=g||(g=l(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=l(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=s(n,e),l=0;l<t.length;l++){var u=c(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(n,e,t){var r=t(0),o=t(6),i=t(7),a=t(8),c=t(9),s=t(10);(e=r(!1)).i(o),e.i(i),e.i(a),e.i(c),e.i(s),e.push([n.i,"\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".myButton {\n    color: red;\n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".header {\n    background-image: url(\"/assets/header_tree.png\");\n    background-repeat: no-repeat;\n    padding-left: 15px;\n    padding-right: 15px;\n    margin-bottom: 0;\n    display: flex;\n    flex-direction: row;\n    letter-spacing: 1px;\n    height: 10em;\n}\n\n.header nav {\n    margin-left: auto;\n    align-self: center;\n}\n\n.header a {\n    font-family: 'Permanent Marker', cursive;\n    font-size: 30px;\n    color: grey;\n    text-decoration: none;\n    padding-left: 20px;\n}\n.header a:hover{\n    color: #ae86e2;\n}\n\n.header h1{\n    color: rgba(238, 26, 25, 0.6);\n    text-shadow: 2px 2px 3px rgba(238, 26, 25, 0.1);\n    margin-left: 20px;\n    font-family: 'Permanent Marker', cursive;\n    font-size: 60px;\n    align-self: center;\n}\n\n.header div{\n    display: flex;\n    flex-direction: row;\n}\n\n.logo {\n    height: 70px;\n    width: 100px;\n    align-self: center;\n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,'body {\n    justify-content: space-between;\n    /*background-size: 100%;*/\n    height: 100%;\n    margin: 0;\n    /*background-repeat: no-repeat ;*/\n    /*background-image: url("/assets/vine.png");*/\n}\n\nhtml{\n    height: 100%;\n}\n\nrow {\n    display: flex;\n    flex-direction: row;\n}\n',""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,'.middle {\n    /*background: url("/assets/vine.png") no-repeat;*/\n    height: calc(100vh - 10em);\n    background-size: 100%;\n}\n\n.middle h1 {\n    margin: 0;\n}\n\n.container {\n    margin-left: 20px;\n    display: flex;\n    justify-content: flex-start;\n    position: relative;\n    flex-direction: row;\n    z-index: 1;\n}\n\n\n.container-left {\n    margin-top: 24px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin-left: 0;\n    /*background: red;*/\n    width: 300px;\n}\n\n.container-left-country {\n    border: 1px solid black;\n\n}\n\n.container-right {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin-left: 24px;\n    /*width: calc(25% - 18px);*/\n    width: calc(100% - 100% + 700px);\n}\n\n.container-right-menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 20px;\n    margin-top: 24px;\n    height: 104px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    border: 1px solid #eceae7;\n    background-color: #fff;\n}\n\n.container-right-menu-product {\n    display: flex;\n    flex-flow: row wrap;\n}\n\n.container-right-menu h3 {\n    margin-right: 16px;\n    font-size: 16px;\n    line-height: 20px;\n    white-space: nowrap;\n}\n\n.container-right-menu p {\n    margin-right: 16px;\n    font-size: 13px;\n    line-height: 16px;\n    color: #999;\n}\n',""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,".product-map {\n    margin-top: 20px;\n    margin-right: 10px;\n    border: 1px solid grey;\n    width: 200px;\n    height: 60px;\n}\n",""]),n.exports=e}]);
//# sourceMappingURL=bungle.js.map