function create (sel, initialState, render) {
    var x = hyperHTML.bind(document.querySelector(sel))
    render(x, initialState)
    return state => render(x, state)
}

function fetchJSON (url) {
    return fetch(url, {credentials: "same-origin"})
        .then(res => res.json())
}

var hyperHTML=function(e){"use strict";function n(e){var n=we.get(this);return n&&n.template===(ee?R(e):e)||(n=z.apply(this,arguments),we.set(this,n)),_.apply(n.updates,arguments),this}function t(e,n){for(var t=0,r=e.length,i=n.length;t<r;){if(!(t<i&&e[t]===n[t]))return t;t++}return t===i?-1:t}function r(e,n){switch(n.nodeType){case q:var r=e.childNodes;if(r[0]===n){i(r,1);break}a(e,n);break;case I:-1!==t(e.childNodes,n.childNodes)&&a(e,n);break;case G:e.textContent=n.textContent}}function i(e,n){for(var t,r=e.length;n<r--;)t=e[r],t.parentNode.removeChild(t)}function a(e,n){e.textContent="",e.appendChild(n)}function o(e,n,t){var r=w(e);0!==t?(i(e.childNodes,t),fe(r,n.slice(t)),e.appendChild(r)):(fe(r,n),a(e,r))}function l(e,n){var t,r=e.name,i=e.ownerElement,a=/^on/.test(r),o=r in i&&!(J in i||Q.test(r)),l=a?r.slice(2):"",c=a||o;return c&&n.push(i,r),a?function(e){t!==e&&(t&&i.removeEventListener(l,t,!1),t=e,e&&i.addEventListener(l,e,!1))}:o?function(e){t!==e&&(t=e,i[r]!==e&&(null==e?(i[r]=null,i.removeAttribute(r)):i[r]=e))}:function(n){t!==n&&(t=n,e.value!==n&&(null==n?c||(c=!0,i.removeAttributeNode(e)):(e.value=n,c&&(c=!1,i.setAttributeNode(e)))))}}function c(e,n){var a,l=!n;return function c(u){switch(typeof u){case"string":case"number":case"boolean":l?a!==u&&(a=u,e.textContent=u):1===n.length&&n[0].nodeType===G?a!==u&&(a=u,n[0].textContent=u):(a=u,i(n,0),n=[b(e,u)],e.parentNode.insertBefore(n[0],e));break;case"function":c(l?u(e,de(e),0):u(e.parentNode,n,0));break;case"object":case"undefined":if(null==u){a=u,c("");break}default:if(a=u,ce(u)){var s=u.length;if(0!==s||l)switch(typeof u[0]){case"string":case"number":case"boolean":c({html:u});break;case"function":for(var f=l?e:e.parentNode,h=l?re.call(de(e)):n,d=0;d<s;d++)u[d]=u[d](f,h,d);l&&i(h,d),c(u.concat.apply([],u));break;case"object":if(ce(u[0])&&(u=u.concat.apply([],u)),k(u[0])){Promise.all(u).then(c);break}default:if(l){var d=t(e.childNodes,u);-1!==d&&o(e,u,d)}else L(e,n,u)}else i(n,0),n=[]}else if(T(u))l?r(e,u):L(e,n,u.nodeType===I?re.call(u.childNodes):[u]);else if(k(u))u.then(c);else if("placeholder"in u)x(c,u);else if("text"in u)c(String(u.text));else if("any"in u)c(u.any);else if("html"in u){var p=[].concat(u.html).join("");if(l)e.innerHTML=p;else{i(n,0);var g=v(e,p);n=re.call(g.childNodes),e.parentNode.insertBefore(g,e)}}else c("length"in u?re.call(u):C(u))}}}function u(e,n){for(var t,r=X,i=e.attributes,a=0,o=i.length;a<o;a++)t=i[a],t.value===r&&n.push(A("attr",ne?e.attributes[he.shift()]:t))}function s(e,n){for(var t,r=e.childNodes,i=r.length,a=0;a<i;a++)switch(t=r[a],t.nodeType){case q:u(t,n),s(t,n);break;case V:t.textContent===X&&(1===i||E(t,"previous")&&E(t,"next")?(n.push(A("any",e)),a=i):n.push(A("virtual",t)));break;case G:Q.test(e.nodeName)&&ue.call(t.textContent)===Y&&n.push(A("any",e))}}function f(e){return ae[e]}function h(e){return{html:e}}function d(e){for(var n,t=[],r=e.childNodes,i=0,a=r.length;i<a;i++)n=r[i],n.nodeType!==q&&0===ue.call(n.textContent).length||t.push(n);return 1===t.length?t[0]:t}function p(e){return e.createDocumentFragment()}function v(e,n){return he=[],(J in e?m:g)(e,n.replace(ve,me))}function g(e,n){var t,r=e.ownerDocument,i=r.createElement("template"),a="content"in i,o=!1;if(a||(t=p(r),o=/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(n)),o){var l=RegExp.$1;i.innerHTML="<table>"+n+"</table>",fe(t,re.call(i.querySelectorAll(l)))}else i.innerHTML=n,a?t=i.content:fe(t,re.call(i.childNodes));return t}function m(e,n){var t=e.ownerDocument,r=p(t);if(ne||te){var i=t.createElement("div");i.innerHTML='<svg xmlns="'+K+'">'+n+"</svg>",fe(r,re.call(i.firstChild.childNodes))}else{var i=t.createElementNS(K,"svg");i.innerHTML=n,fe(r,re.call(i.childNodes))}return r}function b(e,n){return e.ownerDocument.createTextNode(n)}function y(e,n,t,r){for(var i=e,a=e.ownerDocument,o=t.path,l=pe(n,o),c=0,u=o.length;c<u;c++)switch(o[c++]){case"attributes":var s=l.name;e.hasAttribute(s)||e.setAttribute(s,""),i=e.attributes[s];break;case"childNodes":var f=de(e),h=de(l.parentNode);i=Ne(l);var d=i?o.indexOf.call(h,i)+1:-1;i=ye(l);var p=i?o.indexOf.call(h,i):-1;switch(i=a.createComment(X),!0){case p<0:p=f.length;break;case d<0:d=0;default:p=-(h.length-p)}r.push.apply(r,re.call(f,d,p)),r.length?N(e,i,ye(r[r.length-1])):N(e,i,re.call(f,p)[0]),0===r.length&&M(e,i);break;default:i=de(e)[o[c]]||e.appendChild(e.ownerDocument.createElement(pe(n,o.slice(0,c+1)).nodeName)),e=i}return i}function N(e,n,t){t?e.insertBefore(n,t):e.appendChild(n)}function w(e){return p(e.ownerDocument)}function x(e,n){e(n.placeholder),"text"in n?Promise.resolve(n.text).then(String).then(e):"any"in n?Promise.resolve(n.any).then(e):"html"in n?Promise.resolve(n.html).then(h).then(e):Promise.resolve(C(n)).then(e)}function C(e){for(var n in se)if(e.hasOwnProperty(n))return se[n](e[n])}function T(e){return"ELEMENT_NODE"in e}function k(e){return null!=e&&"then"in e}function E(e,n){for(;null!=(e=e[n+"Sibling"])&&e.nodeType===G&&ue.call(e.textContent).length<1;);return null==e}function S(e){for(var n=0,t=e.length;n<t;n++)e[n++].removeAttribute(e[n])}function M(e,n){var t=n.previousSibling;t&&t.nodeType===G&&(e.removeChild(t),M(e,n))}function D(e,n,t,r){var i;switch(e){case"any":i=c(n,null);break;case"attr":i=l(n,t);break;case"virtual":i=c(n,r)}return i}function L(e,n,r){var a=t(n,r);if(-1!==a){var o=w(e);i(n,a),n.splice(a),r=r.slice(a),fe(o,r),e.parentNode.insertBefore(o,e),n.push.apply(n,r)}}function A(e,n){return{type:e,path:H(n)}}function O(e){var n=[],t=v(this,e.join(Y)),r={fragment:t,paths:n};return s(t,n),Ce.set(e,r),r}function H(e){var n,t=[];switch(e.nodeType){case q:case I:n=e;break;case V:n=e.parentNode,t.unshift("childNodes",t.indexOf.call(n.childNodes,e));break;case W:default:n=e.ownerElement,t.unshift("attributes",e.name)}for(e=n;n=n.parentNode;e=n)t.unshift("children",t.indexOf.call(de(n),e));return t}function j(e,n){for(var t,r,a=[],o=[],l=0,c=n.length;l<c;l++)t=n[l],r=pe(e,t.path),r.nodeType===I&&(i(r.childNodes,0),r=this),a[l]=D(t.type,r,o,[]);return S(o),a}function P(e,n){for(var t,r,i=[],a=[],o=0,l=n.length;o<l;o++)r=[],t=n[o],i[o]=D(t.type,y(this,e,t,r),a,r);return S(a),i}function _(){for(var e=1,n=arguments.length;e<n;e++)this[e-1](arguments[e])}function z(e){ee&&(e=R(e));var n,t=Ce.get(e)||O.call(this,e);if(Te){var r=ke(t.fragment);n=j.call(this,r,t.paths),a(this,r)}else n=P.call(this,t.fragment,t.paths);return{template:e,updates:n}}function B(e){function t(t){l=p(t),o="svg"===e?t.createElementNS(K,"svg"):l,c=n.bind(o)}function r(){return u&&(u=!1,"svg"===e&&fe(l,re.call(o.childNodes)),a=d(l)),a}var i,a,o,l,c,u,s;return"adopt"===e?function(a){var f=arguments;return ee&&(a=R(a)),s!==a&&(u=!0,s=a,i=function(i,a,s){return u&&(s<a.length?(o=a[s],l={ownerDocument:o.ownerDocument,childNodes:[o],children:[o]},c=n.adopt(l)):(J in i&&(e="svg"),t(i.ownerDocument))),c.apply(null,f),r()}),i}:function(e){return ee&&(e=R(e)),s!==e&&(u=!0,s=e,t(n.document)),c.apply(null,arguments),r()}}function $(e,n){var t=xe.get(e),r=n.indexOf(":"),i=n;return-1<r&&(i=n.slice(r+1),n=n.slice(0,r)||"html"),t||(t={},xe.set(e,t)),t[i]||(t[i]=B(n))}/*! (c) 2017 Andrea Giammarchi @WebReflection, (ISC) */
    n.document=e,n.adopt=function(e){return function(){return Te=!1,n.apply(e,arguments),Te=!0,e}},n.define=function(e,n){se[e]=n},n.escape=function(e){return e.replace(ie,f)},n.wire=function(e,n){return arguments.length<1?B("html"):null==e?B(n||"html"):$(e,n||"html")};var F,R,q=1,W=2,G=3,V=8,I=11,J="ownerSVGElement",K="http://www.w3.org/2000/svg",Q=/^style$/i,U="_hyper_html: ",X=U+(Math.random()*new Date|0)+";",Y="\x3c!--"+X+"--\x3e",Z=p(e),ee="object"==typeof navigator&&/Firefox\/(\d+)/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<55,ne=function(){var n=e.createElement("p");return n.innerHTML='<i data-i="" class=""></i>',/class/i.test(n.firstChild.attributes[0].name)}(),te=!("children"in Z),re=[].slice,ie=/[&<>'"]/g,ae={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},oe=typeof WeakMap==typeof oe?function(){return{get:function(e){return e[U]},set:function(e,n){Object.defineProperty(e,U,{configurable:!0,value:n})}}}:WeakMap,le=typeof Map==typeof le?function(){var e=[],n=[];return{get:function(t){return n[e.indexOf(t)]},set:function(t,r){n[e.push(t)-1]=r}}}:Map,ce=Array.isArray||function(){var e={}.toString,n=e.call([]);return function(t){return e.call(t)===n}}(),ue=U.trim||function(){return this.replace(/^\s+|\s+$/g,"")},se={};ee&&(F={},R=function(e){var n="_"+e.join(Y);return F[n]||(F[n]=e)});var fe="append"in Z?function(e,n){e.append.apply(e,n)}:function(e,n){for(var t=0,r=n.length;t<r;t++)e.appendChild(n[t])};n.bind=function(e){return function(){return n.apply(e,arguments)}};var he,de=te||ne?function(e){for(var n,t=[],r=e.childNodes,i=0,a=0,o=r.length;a<o;a++)n=r[a],n.nodeType===q&&(t[i++]=n);return t}:function(e){return e.children},pe=ne||te?function(e,n){for(var t,r=0,i=n.length;r<i;r++)switch(t=n[r++]){case"children":e=de(e)[n[r]];break;default:e=e[t][n[r]]}return e}:function(e,n){for(var t=0,r=n.length;t<r;t++)e=e[n[t++]][n[t]];return e},ve=/(<[a-z]+[a-z0-9:_-]*)((?:[^\S]+[a-z0-9:_-]+(?:=(?:'.*?'|".*?"|<.+?>|\S+))?)+)([^\S]*\/?>)/gi,ge=new RegExp("([^\\S][a-z]+[a-z0-9:_-]*=)(['\"]?)"+Y+"\\2","gi"),me=function(e,n,t,r){return n+t.replace(ge,ne?function(e,n,t){return he.push(n.slice(1,-1)),be(e,n,t)}:be)+r},be=function(e,n,t){return n+(t||'"')+X+(t||'"')},ye=ne?function(e){for(;e=e.nextSibling;)if(e.nodeType===q)return e}:function(e){return e.nextElementSibling},Ne=ne?function(e){for(;e=e.previousSibling;)if(e.nodeType===q)return e}:function(e){return e.previousElementSibling},we=new oe,xe=new oe,Ce=new le,Te=!0,ke=function(){return Z.appendChild(b(Z,"g")),Z.appendChild(b(Z,"")),1===Z.cloneNode(!0).childNodes.length?function(e){for(var n=e.cloneNode(),t=e.childNodes||[],r=0,i=t.length;r<i;r++)n.appendChild(ke(t[r]));return n}:function(e){return e.cloneNode(!0)}}();return n}(document);try{module.exports=hyperHTML}catch(e){}
