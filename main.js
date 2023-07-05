(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,"*{\n    box-sizing: border-box;\n}\nbody{\n    /* background-color: aqua; */\n    text-align: center;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    background-color: aliceblue;\n}\n\nh1{\n    font-size: 60px;\n}\n.row{\n    display: flex;\n}\n.square{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid black;\n    width: 50px;\n    height: 50px;\n    background-color: white;\n}\n\n.boards{\n    display: flex;\n    gap: 45px;\n    justify-content: center;\n    flex-wrap: wrap;\n    font-size: 20px;\n}\n\nbutton{\n    border-radius: 40px;\n    font-size: 21px;\n    padding: 20px;\n    background-color: beige;\n}",""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],d=0;d<e.length;d++){var l=e[d],c=n.base?l[0]+n.base:l[0],u=a[c]||0,s="".concat(c," ").concat(u);a[c]=u+1;var f=r(s),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,n);n.byIndex=d,t.splice(d,0,{identifier:s,updater:m,references:1})}i.push(s)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=r(a[i]);t[d].references--}for(var l=n(e,o),c=0;c<a.length;c++){var u=r(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),i=r.n(a),d=r(565),l=r.n(d),c=r(216),u=r.n(c),s=r(589),f=r.n(s),p=r(426),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;let h=document.querySelector(".boards");function g(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function b(e,t){let r=document.createElement("div");r.id="playerboard",r.textContent="Your Boats";let n=document.createElement("div");n.id="aiboard",n.textContent="Opponents Boats",document.createElement("div"),t.gameboard.allSunk()?(document.querySelector("#result").textContent="Player 1 Win",t.turn=!1,e.turn=!1):e.gameboard.allSunk()&&(document.querySelector("#result").textContent="Player 2 Win",e.turn=!1,t.turn=!1),t.attack(e);for(let t=0;t<e.gameboard.board.length;++t){let n=document.createElement("div");n.classList.add("row");for(let r=0;r<e.gameboard.board[t].length;++r){let o=document.createElement("div");o.classList.add("square"),o.id="hsquare"+String(t)+String(r),o.textContent=e.gameboard.board[t][r],n.appendChild(o)}r.appendChild(n)}t.attack(e);for(let r=0;r<t.gameboard.board.length;++r){let o=document.createElement("div");o.classList.add("row");for(let n=0;n<t.gameboard.board[r].length;++n){let a=document.createElement("div");a.classList.add("square"),a.id="asquare"+String(r)+String(n),"*"!=t.gameboard.board[r][n]&&"H"!=t.gameboard.board[r][n]&&"M"!=t.gameboard.board[r][n]?a.textContent="*":a.textContent=t.gameboard.board[r][n],a.addEventListener("click",(()=>{e.attack(t,a.id),g(h),b(e,t)})),o.appendChild(a)}n.appendChild(o)}h.appendChild(r),h.appendChild(n)}let v=document.querySelector(".boards"),y=document.querySelector("#orientation"),x=[5,4,3,3,2];function C(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function S(e,t){let r="v";y.addEventListener("click",(()=>{r="v"==r?"h":"v"}));let n=document.createElement("div");n.textContent="Place Your boats",n.id="playerboard";for(let o=0;o<e.gameboard.board.length;++o){let a=document.createElement("div");a.classList.add("row");for(let n=0;n<e.gameboard.board[o].length;++n){let i=document.createElement("div");i.classList.add("square"),i.id="hsquare"+String(o)+String(n),i.addEventListener("mouseover",(()=>k(i.id,r,"green"))),i.addEventListener("mouseout",(()=>k(i.id,r,"white"))),i.addEventListener("click",(()=>M(i.id,r,e,t))),i.textContent=e.gameboard.board[o][n],a.appendChild(i)}n.appendChild(a)}v.appendChild(n)}function M(e,t,r,n){let o=Number(e[7]),a=Number(e[8]);console.log(r.gameboard),r.gameboard.placeShip(o,a,x[0],t)&&(function(e){let t,r,n,o=!1;for(;!o;)t=Math.floor(10*Math.random()),r=Math.floor(10*Math.random()),n=Math.floor(2*Math.random()),n=0==n?"v":"h",o=e.gameboard.placeShip(t,r,x[0],n)}(n),C(v),S(r,n),x.shift(),0==x.length&&(document.getElementById("orientation").remove(),C(v),b(r,n)))}function k(e,t,r){let n=Number(e[7]),o=Number(e[8]);if("h"==t&&(n=Number(e[8]),o=Number(e[7])),!(n+x[0]>10))for(let e=n;e<n+x[0];++e){let n="hsquare"+String(e)+o;"h"==t&&(n="hsquare"+o+String(e)),console.log(n),document.getElementById(n).style.backgroundColor=r}}const E=e=>{let t=(()=>{let e=(()=>{let e=[];for(let t=0;t<10;++t){let t=[];for(let e=0;e<10;++e)t.push("*");e.push(t)}return e})(),t=[],r=0;return{get board(){return e},placeShip:(r,n,o,a)=>{let i=(e=>{let t=0;return{isSunk:()=>e-t<=0,length:e,get numHit(){return t},hit:()=>{t++},id:void 0}})(o);if("v"===a){if(r+i.length>10)return!1;i.id=t.length;for(let t=r;t<r+i.length;++t)if("*"!=e[t][n])return!1;for(let t=r;t<r+i.length;++t)e[t][n]=String(i.id)}else if("h"===a){if(n+i.length>10)return!1;i.id=t.length;for(let t=n;t<n+i.length;++t)if("*"!=e[r][t])return!1;for(let t=n;t<n+i.length;++t)e[r][t]=String(i.id)}return t.push(i),!0},receiveAttack:(n,o)=>{if("H"==e[n][o]||"M"==e[n][o])return!1;if("*"!=e[n][o]){for(let a=0;a<t.length;++a)if(t[a].id==e[n][o]){t[a].hit(),t[a].isSunk()&&r++,e[n][o]="H";break}}else e[n][o]="M";return!0},ships:t,allSunk:()=>t.length-r<=0}})(),r=!1;return{get gameboard(){return t},set turn(e){r=e},get turn(){return r},attack:(t,n)=>{if(r){if(e){r=!1,t.turn=!0;let e=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());for(;"H"==t.gameboard.board[e][n]||"M"==t.gameboard.board[e][n];)e=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());return void t.gameboard.receiveAttack(e,n)}t.gameboard.receiveAttack(n[7],n[8])&&(r=!1,t.turn=!0)}}}};document.querySelector(".boards");let w=E(!1),q=E(!0);w.turn=!0,q.turn=!1,S(w,q)})()})();