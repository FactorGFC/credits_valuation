/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
    marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
    padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[name][type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.on('ajax:complete', rails.linkDisableSelector, function() {
        rails.enableElement($(this));
    });

    $document.on('ajax:complete', rails.buttonDisableSelector, function() {
        rails.enableFormElement($(this));
    });

    $document.on('click.rails', rails.linkClickSelector, function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.on('click.rails', rails.buttonClickSelector, function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.on('change.rails', rails.inputChangeSelector, function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.on('submit.rails', rails.formSubmitSelector, function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.on('click.rails', rails.formInputClickSelector, function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.on('ajax:send.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.on('ajax:complete.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
(function ($) {
  "use strict";

  /*============= preloader js css =============*/
  var cites = [];
  cites[0] =
    "We design Banca for the readers, optimizing not for page views or engagement";
  cites[1] = "Banca turns out that context is a key part of learning.";
  cites[2] = "You can create any type of product documentation with Banca";
  cites[3] = "Advanced visual search system powered by Ajax";
  var cite = cites[Math.floor(Math.random() * cites.length)];
  $("#preloader p").text(cite);
  $("#preloader").addClass("loading");

  $(window).on("load", function () {
    setTimeout(function () {
      $("#preloader").fadeOut(500, function () {
        $("#preloader").removeClass("loading");
      });
    }, 500);
  });
})(jQuery);
/*!
  * Bootstrap v5.0.0-beta3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t=t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t},e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},s=t=>{const i=e(t);return i?document.querySelector(i):null},n=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0},o=t=>{t.dispatchEvent(new Event("transitionend"))},r=t=>(t[0]||t).nodeType,a=(t,e)=>{let i=!1;const s=e+5;t.addEventListener("transitionend",(function e(){i=!0,t.removeEventListener("transitionend",e)})),setTimeout(()=>{i||o(t)},s)},l=(t,e,i)=>{Object.keys(i).forEach(s=>{const n=i[s],o=e[s],a=o&&r(o)?"element":null==(l=o)?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(n).test(a))throw new TypeError(t.toUpperCase()+": "+`Option "${s}" provided type "${a}" `+`but expected type "${n}".`)})},c=t=>{if(!t)return!1;if(t.style&&t.parentNode&&t.parentNode.style){const e=getComputedStyle(t),i=getComputedStyle(t.parentNode);return"none"!==e.display&&"none"!==i.display&&"hidden"!==e.visibility}return!1},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),h=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?h(t.parentNode):null},f=()=>function(){},u=t=>t.offsetHeight,p=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},g=()=>"rtl"===document.documentElement.dir,m=(t,e)=>{var i;i=()=>{const i=p();if(i){const s=i.fn[t];i.fn[t]=e.jQueryInterface,i.fn[t].Constructor=e,i.fn[t].noConflict=()=>(i.fn[t]=s,e.jQueryInterface)}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i()},_=new Map;var b={set(t,e,i){_.has(t)||_.set(t,new Map);const s=_.get(t);s.has(e)||0===s.size?s.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,e)=>_.has(t)&&_.get(t).get(e)||null,remove(t,e){if(!_.has(t))return;const i=_.get(t);i.delete(e),0===i.size&&_.delete(t)}};const v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,E={};let T=1;const A={mouseenter:"mouseover",mouseleave:"mouseout"},L=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${T++}`||t.uidEvent||T++}function k(t){const e=O(t);return t.uidEvent=e,E[e]=E[e]||{},E[e]}function D(t,e,i=null){const s=Object.keys(t);for(let n=0,o=s.length;n<o;n++){const o=t[s[n]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function x(t,e,i){const s="string"==typeof e,n=s?i:e;let o=t.replace(y,"");const r=A[o];return r&&(o=r),L.has(o)||(o=t),[s,n,o]}function C(t,e,i,s,n){if("string"!=typeof e||!t)return;i||(i=s,s=null);const[o,r,a]=x(e,i,s),l=k(t),c=l[a]||(l[a]={}),d=D(c,r,o?i:null);if(d)return void(d.oneOff=d.oneOff&&n);const h=O(r,e.replace(v,"")),f=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e);for(let{target:e}=n;e&&e!==this;e=e.parentNode)for(let r=o.length;r--;)if(o[r]===e)return n.delegateTarget=e,s.oneOff&&N.off(t,n.type,i),i.apply(e,[n]);return null}}(t,i,s):function(t,e){return function i(s){return s.delegateTarget=t,i.oneOff&&N.off(t,s.type,e),e.apply(t,[s])}}(t,i);f.delegationSelector=o?i:null,f.originalHandler=r,f.oneOff=n,f.uidEvent=h,c[h]=f,t.addEventListener(a,f,o)}function S(t,e,i,s,n){const o=D(e[i],s,n);o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}const N={on(t,e,i,s){C(t,e,i,s,!1)},one(t,e,i,s){C(t,e,i,s,!0)},off(t,e,i,s){if("string"!=typeof e||!t)return;const[n,o,r]=x(e,i,s),a=r!==e,l=k(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void S(t,l,r,o,n?i:null)}c&&Object.keys(l).forEach(i=>{!function(t,e,i,s){const n=e[i]||{};Object.keys(n).forEach(o=>{if(o.includes(s)){const s=n[o];S(t,e,i,s.originalHandler,s.delegationSelector)}})}(t,l,i,e.slice(1))});const d=l[r]||{};Object.keys(d).forEach(i=>{const s=i.replace(w,"");if(!a||e.includes(s)){const e=d[i];S(t,l,r,e.originalHandler,e.delegationSelector)}})},trigger(t,e,i){if("string"!=typeof e||!t)return null;const s=p(),n=e.replace(y,""),o=e!==n,r=L.has(n);let a,l=!0,c=!0,d=!1,h=null;return o&&s&&(a=s.Event(e,i),s(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),d=a.isDefaultPrevented()),r?(h=document.createEvent("HTMLEvents"),h.initEvent(n,l,!0)):h=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==i&&Object.keys(i).forEach(t=>{Object.defineProperty(h,t,{get:()=>i[t]})}),d&&h.preventDefault(),c&&t.dispatchEvent(h),h.defaultPrevented&&void 0!==a&&a.preventDefault(),h}};class j{constructor(t){(t="string"==typeof t?document.querySelector(t):t)&&(this._element=t,b.set(this._element,this.constructor.DATA_KEY,this))}dispose(){b.remove(this._element,this.constructor.DATA_KEY),this._element=null}static getInstance(t){return b.get(t,this.DATA_KEY)}static get VERSION(){return"5.0.0-beta3"}}class P extends j{static get DATA_KEY(){return"bs.alert"}close(t){const e=t?this._getRootElement(t):this._element,i=this._triggerCloseEvent(e);null===i||i.defaultPrevented||this._removeElement(e)}_getRootElement(t){return s(t)||t.closest(".alert")}_triggerCloseEvent(t){return N.trigger(t,"close.bs.alert")}_removeElement(t){if(t.classList.remove("show"),!t.classList.contains("fade"))return void this._destroyElement(t);const e=n(t);N.one(t,"transitionend",()=>this._destroyElement(t)),a(t,e)}_destroyElement(t){t.parentNode&&t.parentNode.removeChild(t),N.trigger(t,"closed.bs.alert")}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.alert");e||(e=new P(this)),"close"===t&&e[t](this)}))}static handleDismiss(t){return function(e){e&&e.preventDefault(),t.close(this)}}}N.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',P.handleDismiss(new P)),m("alert",P);class I extends j{static get DATA_KEY(){return"bs.button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.button");e||(e=new I(this)),"toggle"===t&&e[t]()}))}}function M(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function R(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}N.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',t=>{t.preventDefault();const e=t.target.closest('[data-bs-toggle="button"]');let i=b.get(e,"bs.button");i||(i=new I(e)),i.toggle()}),m("button",I);const B={setDataAttribute(t,e,i){t.setAttribute("data-bs-"+R(e),i)},removeDataAttribute(t,e){t.removeAttribute("data-bs-"+R(e))},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(t=>t.startsWith("bs")).forEach(i=>{let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=M(t.dataset[i])}),e},getDataAttribute:(t,e)=>M(t.getAttribute("data-bs-"+R(e))),offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},H={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const i=[];let s=t.parentNode;for(;s&&s.nodeType===Node.ELEMENT_NODE&&3!==s.nodeType;)s.matches(e)&&i.push(s),s=s.parentNode;return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]}},W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},$="next",F="prev",z="left",K="right";class Y extends j{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=H.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return W}static get DATA_KEY(){return"bs.carousel"}next(){this._isSliding||this._slide($)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._isSliding||this._slide(F)}pause(t){t||(this._isPaused=!0),H.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(o(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=H.findOne(".active.carousel-item",this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void N.one(this._element,"slid.bs.carousel",()=>this.to(t));if(e===t)return this.pause(),void this.cycle();const i=t>e?$:F;this._slide(i,this._items[t])}dispose(){N.off(this._element,".bs.carousel"),this._items=null,this._config=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null,super.dispose()}_getConfig(t){return t={...W,...t},l("carousel",t,U),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?K:z)}_addEventListeners(){this._config.keyboard&&N.on(this._element,"keydown.bs.carousel",t=>this._keydown(t)),"hover"===this._config.pause&&(N.on(this._element,"mouseenter.bs.carousel",t=>this.pause(t)),N.on(this._element,"mouseleave.bs.carousel",t=>this.cycle(t))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType?this._pointerEvent||(this.touchStartX=t.touches[0].clientX):this.touchStartX=t.clientX},e=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},i=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType||(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(t=>this.cycle(t),500+this._config.interval))};H.find(".carousel-item img",this._element).forEach(t=>{N.on(t,"dragstart.bs.carousel",t=>t.preventDefault())}),this._pointerEvent?(N.on(this._element,"pointerdown.bs.carousel",e=>t(e)),N.on(this._element,"pointerup.bs.carousel",t=>i(t)),this._element.classList.add("pointer-event")):(N.on(this._element,"touchstart.bs.carousel",e=>t(e)),N.on(this._element,"touchmove.bs.carousel",t=>e(t)),N.on(this._element,"touchend.bs.carousel",t=>i(t)))}_keydown(t){/input|textarea/i.test(t.target.tagName)||("ArrowLeft"===t.key?(t.preventDefault(),this._slide(z)):"ArrowRight"===t.key&&(t.preventDefault(),this._slide(K)))}_getItemIndex(t){return this._items=t&&t.parentNode?H.find(".carousel-item",t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const i=t===$,s=t===F,n=this._getItemIndex(e),o=this._items.length-1;if((s&&0===n||i&&n===o)&&!this._config.wrap)return e;const r=(n+(s?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]}_triggerSlideEvent(t,e){const i=this._getItemIndex(t),s=this._getItemIndex(H.findOne(".active.carousel-item",this._element));return N.trigger(this._element,"slide.bs.carousel",{relatedTarget:t,direction:e,from:s,to:i})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=H.findOne(".active",this._indicatorsElement);e.classList.remove("active"),e.removeAttribute("aria-current");const i=H.find("[data-bs-target]",this._indicatorsElement);for(let e=0;e<i.length;e++)if(Number.parseInt(i[e].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){i[e].classList.add("active"),i[e].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||H.findOne(".active.carousel-item",this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const i=this._directionToOrder(t),s=H.findOne(".active.carousel-item",this._element),o=this._getItemIndex(s),r=e||this._getItemByOrder(i,s),l=this._getItemIndex(r),c=Boolean(this._interval),d=i===$,h=d?"carousel-item-start":"carousel-item-end",f=d?"carousel-item-next":"carousel-item-prev",p=this._orderToDirection(i);if(r&&r.classList.contains("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(r,p).defaultPrevented&&s&&r){if(this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r,this._element.classList.contains("slide")){r.classList.add(f),u(r),s.classList.add(h),r.classList.add(h);const t=n(s);N.one(s,"transitionend",()=>{r.classList.remove(h,f),r.classList.add("active"),s.classList.remove("active",f,h),this._isSliding=!1,setTimeout(()=>{N.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:p,from:o,to:l})},0)}),a(s,t)}else s.classList.remove("active"),r.classList.add("active"),this._isSliding=!1,N.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:p,from:o,to:l});c&&this.cycle()}}_directionToOrder(t){return[K,z].includes(t)?g()?t===K?F:$:t===K?$:F:t}_orderToDirection(t){return[$,F].includes(t)?g()?t===$?z:K:t===$?K:z:t}static carouselInterface(t,e){let i=b.get(t,"bs.carousel"),s={...W,...B.getDataAttributes(t)};"object"==typeof e&&(s={...s,...e});const n="string"==typeof e?e:s.slide;if(i||(i=new Y(t,s)),"number"==typeof e)i.to(e);else if("string"==typeof n){if(void 0===i[n])throw new TypeError(`No method named "${n}"`);i[n]()}else s.interval&&s.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){Y.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=s(this);if(!e||!e.classList.contains("carousel"))return;const i={...B.getDataAttributes(e),...B.getDataAttributes(this)},n=this.getAttribute("data-bs-slide-to");n&&(i.interval=!1),Y.carouselInterface(e,i),n&&b.get(e,"bs.carousel").to(n),t.preventDefault()}}N.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",Y.dataApiClickHandler),N.on(window,"load.bs.carousel.data-api",()=>{const t=H.find('[data-bs-ride="carousel"]');for(let e=0,i=t.length;e<i;e++)Y.carouselInterface(t[e],b.get(t[e],"bs.carousel"))}),m("carousel",Y);const q={toggle:!0,parent:""},V={toggle:"boolean",parent:"(string|element)"};class X extends j{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=H.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);const s=H.find('[data-bs-toggle="collapse"]');for(let t=0,e=s.length;t<e;t++){const e=s[t],n=i(e),o=H.find(n).filter(t=>t===this._element);null!==n&&o.length&&(this._selector=n,this._triggerArray.push(e))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return q}static get DATA_KEY(){return"bs.collapse"}toggle(){this._element.classList.contains("show")?this.hide():this.show()}show(){if(this._isTransitioning||this._element.classList.contains("show"))return;let t,e;this._parent&&(t=H.find(".show, .collapsing",this._parent).filter(t=>"string"==typeof this._config.parent?t.getAttribute("data-bs-parent")===this._config.parent:t.classList.contains("collapse")),0===t.length&&(t=null));const i=H.findOne(this._selector);if(t){const s=t.find(t=>i!==t);if(e=s?b.get(s,"bs.collapse"):null,e&&e._isTransitioning)return}if(N.trigger(this._element,"show.bs.collapse").defaultPrevented)return;t&&t.forEach(t=>{i!==t&&X.collapseInterface(t,"hide"),e||b.set(t,"bs.collapse",null)});const s=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach(t=>{t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0);const o="scroll"+(s[0].toUpperCase()+s.slice(1)),r=n(this._element);N.one(this._element,"transitionend",()=>{this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[s]="",this.setTransitioning(!1),N.trigger(this._element,"shown.bs.collapse")}),a(this._element,r),this._element.style[s]=this._element[o]+"px"}hide(){if(this._isTransitioning||!this._element.classList.contains("show"))return;if(N.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",u(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");const e=this._triggerArray.length;if(e>0)for(let t=0;t<e;t++){const e=this._triggerArray[t],i=s(e);i&&!i.classList.contains("show")&&(e.classList.add("collapsed"),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="";const i=n(this._element);N.one(this._element,"transitionend",()=>{this.setTransitioning(!1),this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),N.trigger(this._element,"hidden.bs.collapse")}),a(this._element,i)}setTransitioning(t){this._isTransitioning=t}dispose(){super.dispose(),this._config=null,this._parent=null,this._triggerArray=null,this._isTransitioning=null}_getConfig(t){return(t={...q,...t}).toggle=Boolean(t.toggle),l("collapse",t,V),t}_getDimension(){return this._element.classList.contains("width")?"width":"height"}_getParent(){let{parent:t}=this._config;r(t)?void 0===t.jquery&&void 0===t[0]||(t=t[0]):t=H.findOne(t);const e=`[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;return H.find(e,t).forEach(t=>{const e=s(t);this._addAriaAndCollapsedClass(e,[t])}),t}_addAriaAndCollapsedClass(t,e){if(!t||!e.length)return;const i=t.classList.contains("show");e.forEach(t=>{i?t.classList.remove("collapsed"):t.classList.add("collapsed"),t.setAttribute("aria-expanded",i)})}static collapseInterface(t,e){let i=b.get(t,"bs.collapse");const s={...q,...B.getDataAttributes(t),..."object"==typeof e&&e?e:{}};if(!i&&s.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(s.toggle=!1),i||(i=new X(t,s)),"string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){X.collapseInterface(this,t)}))}}N.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=B.getDataAttributes(this),s=i(this);H.find(s).forEach(t=>{const i=b.get(t,"bs.collapse");let s;i?(null===i._parent&&"string"==typeof e.parent&&(i._config.parent=e.parent,i._parent=i._getParent()),s="toggle"):s=e,X.collapseInterface(t,s)})})),m("collapse",X);var Q="top",G="bottom",Z="right",J="left",tt=[Q,G,Z,J],et=tt.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),it=[].concat(tt,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),st=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function nt(t){return t?(t.nodeName||"").toLowerCase():null}function ot(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function rt(t){return t instanceof ot(t).Element||t instanceof Element}function at(t){return t instanceof ot(t).HTMLElement||t instanceof HTMLElement}function lt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ot(t).ShadowRoot||t instanceof ShadowRoot)}var ct={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},s=e.attributes[t]||{},n=e.elements[t];at(n)&&nt(n)&&(Object.assign(n.style,i),Object.keys(s).forEach((function(t){var e=s[t];!1===e?n.removeAttribute(t):n.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var s=e.elements[t],n=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});at(s)&&nt(s)&&(Object.assign(s.style,o),Object.keys(n).forEach((function(t){s.removeAttribute(t)})))}))}},requires:["computeStyles"]};function dt(t){return t.split("-")[0]}function ht(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function ft(t){var e=ht(t),i=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:s}}function ut(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&lt(i)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function pt(t){return ot(t).getComputedStyle(t)}function gt(t){return["table","td","th"].indexOf(nt(t))>=0}function mt(t){return((rt(t)?t.ownerDocument:t.document)||window.document).documentElement}function _t(t){return"html"===nt(t)?t:t.assignedSlot||t.parentNode||(lt(t)?t.host:null)||mt(t)}function bt(t){return at(t)&&"fixed"!==pt(t).position?t.offsetParent:null}function vt(t){for(var e=ot(t),i=bt(t);i&&gt(i)&&"static"===pt(i).position;)i=bt(i);return i&&("html"===nt(i)||"body"===nt(i)&&"static"===pt(i).position)?e:i||function(t){for(var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),i=_t(t);at(i)&&["html","body"].indexOf(nt(i))<0;){var s=pt(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||e&&"filter"===s.willChange||e&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}(t)||e}function yt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var wt=Math.max,Et=Math.min,Tt=Math.round;function At(t,e,i){return wt(t,Et(e,i))}function Lt(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Ot(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var kt={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,s=t.name,n=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=dt(i.placement),l=yt(a),c=[J,Z].indexOf(a)>=0?"height":"width";if(o&&r){var d=function(t,e){return Lt("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Ot(t,tt))}(n.padding,i),h=ft(o),f="y"===l?Q:J,u="y"===l?G:Z,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],g=r[l]-i.rects.reference[l],m=vt(o),_=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=p/2-g/2,v=d[f],y=_-h[c]-d[u],w=_/2-h[c]/2+b,E=At(v,w,y),T=l;i.modifiersData[s]=((e={})[T]=E,e.centerOffset=E-w,e)}},effect:function(t){var e=t.state,i=t.options.element,s=void 0===i?"[data-popper-arrow]":i;null!=s&&("string"!=typeof s||(s=e.elements.popper.querySelector(s)))&&ut(e.elements.popper,s)&&(e.elements.arrow=s)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},Dt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function xt(t){var e,i=t.popper,s=t.popperRect,n=t.placement,o=t.offsets,r=t.position,a=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,d=!0===c?function(t){var e=t.x,i=t.y,s=window.devicePixelRatio||1;return{x:Tt(Tt(e*s)/s)||0,y:Tt(Tt(i*s)/s)||0}}(o):"function"==typeof c?c(o):o,h=d.x,f=void 0===h?0:h,u=d.y,p=void 0===u?0:u,g=o.hasOwnProperty("x"),m=o.hasOwnProperty("y"),_=J,b=Q,v=window;if(l){var y=vt(i),w="clientHeight",E="clientWidth";y===ot(i)&&"static"!==pt(y=mt(i)).position&&(w="scrollHeight",E="scrollWidth"),y=y,n===Q&&(b=G,p-=y[w]-s.height,p*=a?1:-1),n===J&&(_=Z,f-=y[E]-s.width,f*=a?1:-1)}var T,A=Object.assign({position:r},l&&Dt);return a?Object.assign({},A,((T={})[b]=m?"0":"",T[_]=g?"0":"",T.transform=(v.devicePixelRatio||1)<2?"translate("+f+"px, "+p+"px)":"translate3d("+f+"px, "+p+"px, 0)",T)):Object.assign({},A,((e={})[b]=m?p+"px":"",e[_]=g?f+"px":"",e.transform="",e))}var Ct={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,s=i.gpuAcceleration,n=void 0===s||s,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:dt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,xt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,xt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},St={passive:!0},Nt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,s=t.options,n=s.scroll,o=void 0===n||n,r=s.resize,a=void 0===r||r,l=ot(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,St)})),a&&l.addEventListener("resize",i.update,St),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,St)})),a&&l.removeEventListener("resize",i.update,St)}},data:{}},jt={left:"right",right:"left",bottom:"top",top:"bottom"};function Pt(t){return t.replace(/left|right|bottom|top/g,(function(t){return jt[t]}))}var It={start:"end",end:"start"};function Mt(t){return t.replace(/start|end/g,(function(t){return It[t]}))}function Rt(t){var e=ot(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Bt(t){return ht(mt(t)).left+Rt(t).scrollLeft}function Ht(t){var e=pt(t),i=e.overflow,s=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+n+s)}function Wt(t,e){var i;void 0===e&&(e=[]);var s=function t(e){return["html","body","#document"].indexOf(nt(e))>=0?e.ownerDocument.body:at(e)&&Ht(e)?e:t(_t(e))}(t),n=s===(null==(i=t.ownerDocument)?void 0:i.body),o=ot(s),r=n?[o].concat(o.visualViewport||[],Ht(s)?s:[]):s,a=e.concat(r);return n?a:a.concat(Wt(_t(r)))}function Ut(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function $t(t,e){return"viewport"===e?Ut(function(t){var e=ot(t),i=mt(t),s=e.visualViewport,n=i.clientWidth,o=i.clientHeight,r=0,a=0;return s&&(n=s.width,o=s.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=s.offsetLeft,a=s.offsetTop)),{width:n,height:o,x:r+Bt(t),y:a}}(t)):at(e)?function(t){var e=ht(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Ut(function(t){var e,i=mt(t),s=Rt(t),n=null==(e=t.ownerDocument)?void 0:e.body,o=wt(i.scrollWidth,i.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),r=wt(i.scrollHeight,i.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-s.scrollLeft+Bt(t),l=-s.scrollTop;return"rtl"===pt(n||i).direction&&(a+=wt(i.clientWidth,n?n.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(mt(t)))}function Ft(t){return t.split("-")[1]}function zt(t){var e,i=t.reference,s=t.element,n=t.placement,o=n?dt(n):null,r=n?Ft(n):null,a=i.x+i.width/2-s.width/2,l=i.y+i.height/2-s.height/2;switch(o){case Q:e={x:a,y:i.y-s.height};break;case G:e={x:a,y:i.y+i.height};break;case Z:e={x:i.x+i.width,y:l};break;case J:e={x:i.x-s.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?yt(o):null;if(null!=c){var d="y"===c?"height":"width";switch(r){case"start":e[c]=e[c]-(i[d]/2-s[d]/2);break;case"end":e[c]=e[c]+(i[d]/2-s[d]/2)}}return e}function Kt(t,e){void 0===e&&(e={});var i=e,s=i.placement,n=void 0===s?t.placement:s,o=i.boundary,r=void 0===o?"clippingParents":o,a=i.rootBoundary,l=void 0===a?"viewport":a,c=i.elementContext,d=void 0===c?"popper":c,h=i.altBoundary,f=void 0!==h&&h,u=i.padding,p=void 0===u?0:u,g=Lt("number"!=typeof p?p:Ot(p,tt)),m="popper"===d?"reference":"popper",_=t.elements.reference,b=t.rects.popper,v=t.elements[f?m:d],y=function(t,e,i){var s="clippingParents"===e?function(t){var e=Wt(_t(t)),i=["absolute","fixed"].indexOf(pt(t).position)>=0&&at(t)?vt(t):t;return rt(i)?e.filter((function(t){return rt(t)&&ut(t,i)&&"body"!==nt(t)})):[]}(t):[].concat(e),n=[].concat(s,[i]),o=n[0],r=n.reduce((function(e,i){var s=$t(t,i);return e.top=wt(s.top,e.top),e.right=Et(s.right,e.right),e.bottom=Et(s.bottom,e.bottom),e.left=wt(s.left,e.left),e}),$t(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(rt(v)?v:v.contextElement||mt(t.elements.popper),r,l),w=ht(_),E=zt({reference:w,element:b,strategy:"absolute",placement:n}),T=Ut(Object.assign({},b,E)),A="popper"===d?T:w,L={top:y.top-A.top+g.top,bottom:A.bottom-y.bottom+g.bottom,left:y.left-A.left+g.left,right:A.right-y.right+g.right},O=t.modifiersData.offset;if("popper"===d&&O){var k=O[n];Object.keys(L).forEach((function(t){var e=[Z,G].indexOf(t)>=0?1:-1,i=[Q,G].indexOf(t)>=0?"y":"x";L[t]+=k[i]*e}))}return L}function Yt(t,e){void 0===e&&(e={});var i=e,s=i.placement,n=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?it:l,d=Ft(s),h=d?a?et:et.filter((function(t){return Ft(t)===d})):tt,f=h.filter((function(t){return c.indexOf(t)>=0}));0===f.length&&(f=h);var u=f.reduce((function(e,i){return e[i]=Kt(t,{placement:i,boundary:n,rootBoundary:o,padding:r})[dt(i)],e}),{});return Object.keys(u).sort((function(t,e){return u[t]-u[e]}))}var qt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var n=i.mainAxis,o=void 0===n||n,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,d=i.boundary,h=i.rootBoundary,f=i.altBoundary,u=i.flipVariations,p=void 0===u||u,g=i.allowedAutoPlacements,m=e.options.placement,_=dt(m),b=l||(_!==m&&p?function(t){if("auto"===dt(t))return[];var e=Pt(t);return[Mt(t),e,Mt(e)]}(m):[Pt(m)]),v=[m].concat(b).reduce((function(t,i){return t.concat("auto"===dt(i)?Yt(e,{placement:i,boundary:d,rootBoundary:h,padding:c,flipVariations:p,allowedAutoPlacements:g}):i)}),[]),y=e.rects.reference,w=e.rects.popper,E=new Map,T=!0,A=v[0],L=0;L<v.length;L++){var O=v[L],k=dt(O),D="start"===Ft(O),x=[Q,G].indexOf(k)>=0,C=x?"width":"height",S=Kt(e,{placement:O,boundary:d,rootBoundary:h,altBoundary:f,padding:c}),N=x?D?Z:J:D?G:Q;y[C]>w[C]&&(N=Pt(N));var j=Pt(N),P=[];if(o&&P.push(S[k]<=0),a&&P.push(S[N]<=0,S[j]<=0),P.every((function(t){return t}))){A=O,T=!1;break}E.set(O,P)}if(T)for(var I=function(t){var e=v.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return A=e,"break"},M=p?3:1;M>0&&"break"!==I(M);M--);e.placement!==A&&(e.modifiersData[s]._skip=!0,e.placement=A,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Vt(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Xt(t){return[Q,Z,G,J].some((function(e){return t[e]>=0}))}var Qt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,s=e.rects.reference,n=e.rects.popper,o=e.modifiersData.preventOverflow,r=Kt(e,{elementContext:"reference"}),a=Kt(e,{altBoundary:!0}),l=Vt(r,s),c=Vt(a,n,o),d=Xt(l),h=Xt(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":h})}},Gt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,s=t.name,n=i.offset,o=void 0===n?[0,0]:n,r=it.reduce((function(t,i){return t[i]=function(t,e,i){var s=dt(t),n=[J,Q].indexOf(s)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*n,[J,Z].indexOf(s)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=r}},Zt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=zt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},Jt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,s=t.name,n=i.mainAxis,o=void 0===n||n,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,d=i.altBoundary,h=i.padding,f=i.tether,u=void 0===f||f,p=i.tetherOffset,g=void 0===p?0:p,m=Kt(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:d}),_=dt(e.placement),b=Ft(e.placement),v=!b,y=yt(_),w="x"===y?"y":"x",E=e.modifiersData.popperOffsets,T=e.rects.reference,A=e.rects.popper,L="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,O={x:0,y:0};if(E){if(o||a){var k="y"===y?Q:J,D="y"===y?G:Z,x="y"===y?"height":"width",C=E[y],S=E[y]+m[k],N=E[y]-m[D],j=u?-A[x]/2:0,P="start"===b?T[x]:A[x],I="start"===b?-A[x]:-T[x],M=e.elements.arrow,R=u&&M?ft(M):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},H=B[k],W=B[D],U=At(0,T[x],R[x]),$=v?T[x]/2-j-U-H-L:P-U-H-L,F=v?-T[x]/2+j+U+W+L:I+U+W+L,z=e.elements.arrow&&vt(e.elements.arrow),K=z?"y"===y?z.clientTop||0:z.clientLeft||0:0,Y=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,q=E[y]+$-Y-K,V=E[y]+F-Y;if(o){var X=At(u?Et(S,q):S,C,u?wt(N,V):N);E[y]=X,O[y]=X-C}if(a){var tt="x"===y?Q:J,et="x"===y?G:Z,it=E[w],st=it+m[tt],nt=it-m[et],ot=At(u?Et(st,q):st,it,u?wt(nt,V):nt);E[w]=ot,O[w]=ot-it}}e.modifiersData[s]=O}},requiresIfExists:["offset"]};function te(t,e,i){void 0===i&&(i=!1);var s,n,o=mt(e),r=ht(t),a=at(e),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!i)&&(("body"!==nt(e)||Ht(o))&&(l=(s=e)!==ot(s)&&at(s)?{scrollLeft:(n=s).scrollLeft,scrollTop:n.scrollTop}:Rt(s)),at(e)?((c=ht(e)).x+=e.clientLeft,c.y+=e.clientTop):o&&(c.x=Bt(o))),{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}var ee={placement:"bottom",modifiers:[],strategy:"absolute"};function ie(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function se(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,s=void 0===i?[]:i,n=e.defaultOptions,o=void 0===n?ee:n;return function(t,e,i){void 0===i&&(i=o);var n,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ee,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,d={state:a,setOptions:function(i){h(),a.options=Object.assign({},o,a.options,i),a.scrollParents={reference:rt(t)?Wt(t):t.contextElement?Wt(t.contextElement):[],popper:Wt(e)};var n,r,c=function(t){var e=function(t){var e=new Map,i=new Set,s=[];return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||function t(n){i.add(n.name),[].concat(n.requires||[],n.requiresIfExists||[]).forEach((function(s){if(!i.has(s)){var n=e.get(s);n&&t(n)}})),s.push(n)}(t)})),s}(t);return st.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((n=[].concat(s,a.options.modifiers),r=n.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(r).map((function(t){return r[t]}))));return a.orderedModifiers=c.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,s=void 0===i?{}:i,n=t.effect;if("function"==typeof n){var o=n({state:a,name:e,instance:d,options:s});l.push(o||function(){})}})),d.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(ie(e,i)){a.rects={reference:te(e,vt(i),"fixed"===a.options.strategy),popper:ft(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var s=0;s<a.orderedModifiers.length;s++)if(!0!==a.reset){var n=a.orderedModifiers[s],o=n.fn,r=n.options,l=void 0===r?{}:r,h=n.name;"function"==typeof o&&(a=o({state:a,options:l,name:h,instance:d})||a)}else a.reset=!1,s=-1}}},update:(n=function(){return new Promise((function(t){d.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(n())}))}))),r}),destroy:function(){h(),c=!0}};if(!ie(t,e))return d;function h(){l.forEach((function(t){return t()})),l=[]}return d.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),d}}var ne=se(),oe=se({defaultModifiers:[Nt,Zt,Ct,ct]}),re=se({defaultModifiers:[Nt,Zt,Ct,ct,Gt,qt,Jt,kt,Qt]}),ae=Object.freeze({__proto__:null,popperGenerator:se,detectOverflow:Kt,createPopperBase:ne,createPopper:re,createPopperLite:oe,top:Q,bottom:G,right:Z,left:J,auto:"auto",basePlacements:tt,start:"start",end:"end",clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:et,placements:it,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:st,applyStyles:ct,arrow:kt,computeStyles:Ct,eventListeners:Nt,flip:qt,hide:Qt,offset:Gt,popperOffsets:Zt,preventOverflow:Jt});const le=new RegExp("ArrowUp|ArrowDown|Escape"),ce=g()?"top-end":"top-start",de=g()?"top-start":"top-end",he=g()?"bottom-end":"bottom-start",fe=g()?"bottom-start":"bottom-end",ue=g()?"left-start":"right-start",pe=g()?"right-start":"left-start",ge={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null},me={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)"};class _e extends j{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}static get Default(){return ge}static get DefaultType(){return me}static get DATA_KEY(){return"bs.dropdown"}toggle(){if(this._element.disabled||this._element.classList.contains("disabled"))return;const t=this._element.classList.contains("show");_e.clearMenus(),t||this.show()}show(){if(this._element.disabled||this._element.classList.contains("disabled")||this._menu.classList.contains("show"))return;const t=_e.getParentFromElement(this._element),e={relatedTarget:this._element};if(!N.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._inNavbar)B.setDataAttribute(this._menu,"popper","none");else{if(void 0===ae)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:r(this._config.reference)?(e=this._config.reference,void 0!==this._config.reference.jquery&&(e=this._config.reference[0])):"object"==typeof this._config.reference&&(e=this._config.reference);const i=this._getPopperConfig(),s=i.modifiers.find(t=>"applyStyles"===t.name&&!1===t.enabled);this._popper=re(e,this._menu,i),s&&B.setDataAttribute(this._menu,"popper","static")}"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(t=>N.on(t,"mouseover",null,(function(){}))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),N.trigger(this._element,"shown.bs.dropdown",e)}}hide(){if(this._element.disabled||this._element.classList.contains("disabled")||!this._menu.classList.contains("show"))return;const t={relatedTarget:this._element};N.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||(this._popper&&this._popper.destroy(),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),B.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,"hidden.bs.dropdown",t))}dispose(){N.off(this._element,".bs.dropdown"),this._menu=null,this._popper&&(this._popper.destroy(),this._popper=null),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_addEventListeners(){N.on(this._element,"click.bs.dropdown",t=>{t.preventDefault(),this.toggle()})}_getConfig(t){if(t={...this.constructor.Default,...B.getDataAttributes(this._element),...t},l("dropdown",t,this.constructor.DefaultType),"object"==typeof t.reference&&!r(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return t}_getMenuElement(){return H.next(this._element,".dropdown-menu")[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains("dropend"))return ue;if(t.classList.contains("dropstart"))return pe;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?de:ce:e?fe:he}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}static dropdownInterface(t,e){let i=b.get(t,"bs.dropdown");if(i||(i=new _e(t,"object"==typeof e?e:null)),"string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){_e.dropdownInterface(this,t)}))}static clearMenus(t){if(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;if(/input|select|textarea|form/i.test(t.target.tagName))return}const e=H.find('[data-bs-toggle="dropdown"]');for(let i=0,s=e.length;i<s;i++){const s=b.get(e[i],"bs.dropdown"),n={relatedTarget:e[i]};if(t&&"click"===t.type&&(n.clickEvent=t),!s)continue;const o=s._menu;if(e[i].classList.contains("show")){if(t){if([s._element].some(e=>t.composedPath().includes(e)))continue;if("keyup"===t.type&&"Tab"===t.key&&o.contains(t.target))continue}N.trigger(e[i],"hide.bs.dropdown",n).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>N.off(t,"mouseover",null,(function(){}))),e[i].setAttribute("aria-expanded","false"),s._popper&&s._popper.destroy(),o.classList.remove("show"),e[i].classList.remove("show"),B.removeDataAttribute(o,"popper"),N.trigger(e[i],"hidden.bs.dropdown",n))}}}static getParentFromElement(t){return s(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?"Space"===t.key||"Escape"!==t.key&&("ArrowDown"!==t.key&&"ArrowUp"!==t.key||t.target.closest(".dropdown-menu")):!le.test(t.key))return;if(t.preventDefault(),t.stopPropagation(),this.disabled||this.classList.contains("disabled"))return;const e=_e.getParentFromElement(this),i=this.classList.contains("show");if("Escape"===t.key)return(this.matches('[data-bs-toggle="dropdown"]')?this:H.prev(this,'[data-bs-toggle="dropdown"]')[0]).focus(),void _e.clearMenus();if(!i&&("ArrowUp"===t.key||"ArrowDown"===t.key))return void(this.matches('[data-bs-toggle="dropdown"]')?this:H.prev(this,'[data-bs-toggle="dropdown"]')[0]).click();if(!i||"Space"===t.key)return void _e.clearMenus();const s=H.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",e).filter(c);if(!s.length)return;let n=s.indexOf(t.target);"ArrowUp"===t.key&&n>0&&n--,"ArrowDown"===t.key&&n<s.length-1&&n++,n=-1===n?0:n,s[n].focus()}}N.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',_e.dataApiKeydownHandler),N.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",_e.dataApiKeydownHandler),N.on(document,"click.bs.dropdown.data-api",_e.clearMenus),N.on(document,"keyup.bs.dropdown.data-api",_e.clearMenus),N.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(t){t.preventDefault(),_e.dropdownInterface(this)})),m("dropdown",_e);const be={backdrop:!0,keyboard:!0,focus:!0},ve={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class ye extends j{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=H.findOne(".modal-dialog",this._element),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}static get Default(){return be}static get DATA_KEY(){return"bs.modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;this._isAnimated()&&(this._isTransitioning=!0);const e=N.trigger(this._element,"show.bs.modal",{relatedTarget:t});this._isShown||e.defaultPrevented||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),N.on(this._element,"click.dismiss.bs.modal",'[data-bs-dismiss="modal"]',t=>this.hide(t)),N.on(this._dialog,"mousedown.dismiss.bs.modal",()=>{N.one(this._element,"mouseup.dismiss.bs.modal",t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(t)))}hide(t){if(t&&t.preventDefault(),!this._isShown||this._isTransitioning)return;if(N.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();if(e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),N.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),N.off(this._element,"click.dismiss.bs.modal"),N.off(this._dialog,"mousedown.dismiss.bs.modal"),e){const t=n(this._element);N.one(this._element,"transitionend",t=>this._hideModal(t)),a(this._element,t)}else this._hideModal()}dispose(){[window,this._element,this._dialog].forEach(t=>N.off(t,".bs.modal")),super.dispose(),N.off(document,"focusin.bs.modal"),this._config=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null}handleUpdate(){this._adjustDialog()}_getConfig(t){return t={...be,...t},l("modal",t,ve),t}_showElement(t){const e=this._isAnimated(),i=H.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,i&&(i.scrollTop=0),e&&u(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus();const s=()=>{this._config.focus&&this._element.focus(),this._isTransitioning=!1,N.trigger(this._element,"shown.bs.modal",{relatedTarget:t})};if(e){const t=n(this._dialog);N.one(this._dialog,"transitionend",s),a(this._dialog,t)}else s()}_enforceFocus(){N.off(document,"focusin.bs.modal"),N.on(document,"focusin.bs.modal",t=>{document===t.target||this._element===t.target||this._element.contains(t.target)||this._element.focus()})}_setEscapeEvent(){this._isShown?N.on(this._element,"keydown.dismiss.bs.modal",t=>{this._config.keyboard&&"Escape"===t.key?(t.preventDefault(),this.hide()):this._config.keyboard||"Escape"!==t.key||this._triggerBackdropTransition()}):N.off(this._element,"keydown.dismiss.bs.modal")}_setResizeEvent(){this._isShown?N.on(window,"resize.bs.modal",()=>this._adjustDialog()):N.off(window,"resize.bs.modal")}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),this._resetScrollbar(),N.trigger(this._element,"hidden.bs.modal")})}_removeBackdrop(){this._backdrop.parentNode.removeChild(this._backdrop),this._backdrop=null}_showBackdrop(t){const e=this._isAnimated();if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",e&&this._backdrop.classList.add("fade"),document.body.appendChild(this._backdrop),N.on(this._element,"click.dismiss.bs.modal",t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===this._config.backdrop?this._triggerBackdropTransition():this.hide())}),e&&u(this._backdrop),this._backdrop.classList.add("show"),!e)return void t();const i=n(this._backdrop);N.one(this._backdrop,"transitionend",t),a(this._backdrop,i)}else if(!this._isShown&&this._backdrop){this._backdrop.classList.remove("show");const i=()=>{this._removeBackdrop(),t()};if(e){const t=n(this._backdrop);N.one(this._backdrop,"transitionend",i),a(this._backdrop,t)}else i()}else t()}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight;t||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");const e=n(this._dialog);N.off(this._element,"transitionend"),N.one(this._element,"transitionend",()=>{this._element.classList.remove("modal-static"),t||(N.one(this._element,"transitionend",()=>{this._element.style.overflowY=""}),a(this._element,e))}),a(this._element,e),this._element.focus()}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight;(!this._isBodyOverflowing&&t&&!g()||this._isBodyOverflowing&&!t&&g())&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),(this._isBodyOverflowing&&!t&&!g()||!this._isBodyOverflowing&&t&&g())&&(this._element.style.paddingRight=this._scrollbarWidth+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}_checkScrollbar(){const t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()}_setScrollbar(){this._isBodyOverflowing&&(this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",t=>t+this._scrollbarWidth),this._setElementAttributes(".sticky-top","marginRight",t=>t-this._scrollbarWidth),this._setElementAttributes("body","paddingRight",t=>t+this._scrollbarWidth)),document.body.classList.add("modal-open")}_setElementAttributes(t,e,i){H.find(t).forEach(t=>{if(t!==document.body&&window.innerWidth>t.clientWidth+this._scrollbarWidth)return;const s=t.style[e],n=window.getComputedStyle(t)[e];B.setDataAttribute(t,e,s),t.style[e]=i(Number.parseFloat(n))+"px"})}_resetScrollbar(){this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight"),this._resetElementAttributes("body","paddingRight")}_resetElementAttributes(t,e){H.find(t).forEach(t=>{const i=B.getDataAttribute(t,e);void 0===i&&t===document.body?t.style[e]="":(B.removeDataAttribute(t,e),t.style[e]=i)})}_getScrollbarWidth(){const t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}static jQueryInterface(t,e){return this.each((function(){let i=b.get(this,"bs.modal");const s={...be,...B.getDataAttributes(this),..."object"==typeof t&&t?t:{}};if(i||(i=new ye(this,s)),"string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}N.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=s(this);"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault(),N.one(e,"show.bs.modal",t=>{t.defaultPrevented||N.one(e,"hidden.bs.modal",()=>{c(this)&&this.focus()})});let i=b.get(e,"bs.modal");if(!i){const t={...B.getDataAttributes(e),...B.getDataAttributes(this)};i=new ye(e,t)}i.toggle(this)})),m("modal",ye);const we=()=>{const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)},Ee=(t,e,i)=>{const s=we();H.find(t).forEach(t=>{if(t!==document.body&&window.innerWidth>t.clientWidth+s)return;const n=t.style[e],o=window.getComputedStyle(t)[e];B.setDataAttribute(t,e,n),t.style[e]=i(Number.parseFloat(o))+"px"})},Te=(t,e)=>{H.find(t).forEach(t=>{const i=B.getDataAttribute(t,e);void 0===i&&t===document.body?t.style.removeProperty(e):(B.removeDataAttribute(t,e),t.style[e]=i)})},Ae={backdrop:!0,keyboard:!0,scroll:!1},Le={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};class Oe extends j{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._addEventListeners()}static get Default(){return Ae}static get DATA_KEY(){return"bs.offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||N.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._config.backdrop&&document.body.classList.add("offcanvas-backdrop"),this._config.scroll||((t=we())=>{document.body.style.overflow="hidden",Ee(".fixed-top, .fixed-bottom, .is-fixed","paddingRight",e=>e+t),Ee(".sticky-top","marginRight",e=>e-t),Ee("body","paddingRight",e=>e+t)})(),this._element.classList.add("offcanvas-toggling"),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),setTimeout(()=>{this._element.classList.remove("offcanvas-toggling"),N.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t}),this._enforceFocusOnElement(this._element)},n(this._element)))}hide(){this._isShown&&(N.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._element.classList.add("offcanvas-toggling"),N.off(document,"focusin.bs.offcanvas"),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),setTimeout(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.backdrop&&document.body.classList.remove("offcanvas-backdrop"),this._config.scroll||(document.body.style.overflow="auto",Te(".fixed-top, .fixed-bottom, .is-fixed","paddingRight"),Te(".sticky-top","marginRight"),Te("body","paddingRight")),N.trigger(this._element,"hidden.bs.offcanvas"),this._element.classList.remove("offcanvas-toggling")},n(this._element))))}_getConfig(t){return t={...Ae,...B.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("offcanvas",t,Le),t}_enforceFocusOnElement(t){N.off(document,"focusin.bs.offcanvas"),N.on(document,"focusin.bs.offcanvas",e=>{document===e.target||t===e.target||t.contains(e.target)||t.focus()}),t.focus()}_addEventListeners(){N.on(this._element,"click.dismiss.bs.offcanvas",'[data-bs-dismiss="offcanvas"]',()=>this.hide()),N.on(document,"keydown",t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()}),N.on(document,"click.bs.offcanvas.data-api",t=>{const e=H.findOne(i(t.target));this._element.contains(t.target)||e===this._element||this.hide()})}static jQueryInterface(t){return this.each((function(){const e=b.get(this,"bs.offcanvas")||new Oe(this,"object"==typeof t?t:{});if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}N.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=s(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this))return;N.one(e,"hidden.bs.offcanvas",()=>{c(this)&&this.focus()});const i=H.findOne(".offcanvas.show, .offcanvas-toggling");i&&i!==e||(b.get(e,"bs.offcanvas")||new Oe(e)).toggle(this)})),N.on(window,"load.bs.offcanvas.data-api",()=>{H.find(".offcanvas.show").forEach(t=>(b.get(t,"bs.offcanvas")||new Oe(t)).show())}),m("offcanvas",Oe);const ke=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),De=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,xe=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Ce=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!ke.has(i)||Boolean(De.test(t.nodeValue)||xe.test(t.nodeValue));const s=e.filter(t=>t instanceof RegExp);for(let t=0,e=s.length;t<e;t++)if(s[t].test(i))return!0;return!1};function Se(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const s=(new window.DOMParser).parseFromString(t,"text/html"),n=Object.keys(e),o=[].concat(...s.body.querySelectorAll("*"));for(let t=0,i=o.length;t<i;t++){const i=o[t],s=i.nodeName.toLowerCase();if(!n.includes(s)){i.parentNode.removeChild(i);continue}const r=[].concat(...i.attributes),a=[].concat(e["*"]||[],e[s]||[]);r.forEach(t=>{Ce(t,a)||i.removeAttribute(t.nodeName)})}return s.body.innerHTML}const Ne=new RegExp("(^|\\s)bs-tooltip\\S+","g"),je=new Set(["sanitize","allowList","sanitizeFn"]),Pe={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Ie={AUTO:"auto",TOP:"top",RIGHT:g()?"left":"right",BOTTOM:"bottom",LEFT:g()?"right":"left"},Me={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Re={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"};class Be extends j{constructor(t,e){if(void 0===ae)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return Me}static get NAME(){return"tooltip"}static get DATA_KEY(){return"bs.tooltip"}static get Event(){return Re}static get EVENT_KEY(){return".bs.tooltip"}static get DefaultType(){return Pe}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),N.off(this._element,this.constructor.EVENT_KEY),N.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.config=null,this.tip=null,super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=N.trigger(this._element,this.constructor.Event.SHOW),i=h(this._element),s=null===i?this._element.ownerDocument.documentElement.contains(this._element):i.contains(this._element);if(e.defaultPrevented||!s)return;const o=this.getTipElement(),r=t(this.constructor.NAME);o.setAttribute("id",r),this._element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&o.classList.add("fade");const l="function"==typeof this.config.placement?this.config.placement.call(this,o,this._element):this.config.placement,c=this._getAttachment(l);this._addAttachmentClass(c);const d=this._getContainer();b.set(o,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(d.appendChild(o),N.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=re(this._element,o,this._getPopperConfig(c)),o.classList.add("show");const f="function"==typeof this.config.customClass?this.config.customClass():this.config.customClass;f&&o.classList.add(...f.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>{N.on(t,"mouseover",(function(){}))});const u=()=>{const t=this._hoverState;this._hoverState=null,N.trigger(this._element,this.constructor.Event.SHOWN),"out"===t&&this._leave(null,this)};if(this.tip.classList.contains("fade")){const t=n(this.tip);N.one(this.tip,"transitionend",u),a(this.tip,t)}else u()}hide(){if(!this._popper)return;const t=this.getTipElement(),e=()=>{this._isWithActiveTrigger()||("show"!==this._hoverState&&t.parentNode&&t.parentNode.removeChild(t),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.Event.HIDDEN),this._popper&&(this._popper.destroy(),this._popper=null))};if(!N.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented){if(t.classList.remove("show"),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>N.off(t,"mouseover",f)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this.tip.classList.contains("fade")){const i=n(t);N.one(t,"transitionend",e),a(t,i)}else e();this._hoverState=""}}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");return t.innerHTML=this.config.template,this.tip=t.children[0],this.tip}setContent(){const t=this.getTipElement();this.setElementContent(H.findOne(".tooltip-inner",t),this.getTitle()),t.classList.remove("fade","show")}setElementContent(t,e){if(null!==t)return"object"==typeof e&&r(e)?(e.jquery&&(e=e[0]),void(this.config.html?e.parentNode!==t&&(t.innerHTML="",t.appendChild(e)):t.textContent=e.textContent)):void(this.config.html?(this.config.sanitize&&(e=Se(e,this.config.allowList,this.config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){let t=this._element.getAttribute("data-bs-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this._element):this.config.title),t}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){const i=this.constructor.DATA_KEY;return(e=e||b.get(t.delegateTarget,i))||(e=new this.constructor(t.delegateTarget,this._getDelegateConfig()),b.set(t.delegateTarget,i,e)),e}_getOffset(){const{offset:t}=this.config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{altBoundary:!0,fallbackPlacements:this.config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this.config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this.config.popperConfig?this.config.popperConfig(e):this.config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add("bs-tooltip-"+this.updateAttachment(t))}_getContainer(){return!1===this.config.container?document.body:r(this.config.container)?this.config.container:H.findOne(this.config.container)}_getAttachment(t){return Ie[t.toUpperCase()]}_setListeners(){this.config.trigger.split(" ").forEach(t=>{if("click"===t)N.on(this._element,this.constructor.Event.CLICK,this.config.selector,t=>this.toggle(t));else if("manual"!==t){const e="hover"===t?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i="hover"===t?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;N.on(this._element,e,this.config.selector,t=>this._enter(t)),N.on(this._element,i,this.config.selector,t=>this._leave(t))}}),this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.config.selector?this.config={...this.config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e.getTipElement().classList.contains("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e.config.delay&&e.config.delay.show?e._timeout=setTimeout(()=>{"show"===e._hoverState&&e.show()},e.config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(()=>{"out"===e._hoverState&&e.hide()},e.config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=B.getDataAttributes(this._element);return Object.keys(e).forEach(t=>{je.has(t)&&delete e[t]}),t&&"object"==typeof t.container&&t.container.jquery&&(t.container=t.container[0]),"number"==typeof(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),l("tooltip",t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};if(this.config)for(const e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(Ne);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.tooltip");const i="object"==typeof t&&t;if((e||!/dispose|hide/.test(t))&&(e||(e=new Be(this,i)),"string"==typeof t)){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m("tooltip",Be);const He=new RegExp("(^|\\s)bs-popover\\S+","g"),We={...Be.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},Ue={...Be.DefaultType,content:"(string|element|function)"},$e={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class Fe extends Be{static get Default(){return We}static get NAME(){return"popover"}static get DATA_KEY(){return"bs.popover"}static get Event(){return $e}static get EVENT_KEY(){return".bs.popover"}static get DefaultType(){return Ue}isWithContent(){return this.getTitle()||this._getContent()}setContent(){const t=this.getTipElement();this.setElementContent(H.findOne(".popover-header",t),this.getTitle());let e=this._getContent();"function"==typeof e&&(e=e.call(this._element)),this.setElementContent(H.findOne(".popover-body",t),e),t.classList.remove("fade","show")}_addAttachmentClass(t){this.getTipElement().classList.add("bs-popover-"+this.updateAttachment(t))}_getContent(){return this._element.getAttribute("data-bs-content")||this.config.content}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(He);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.popover");const i="object"==typeof t?t:null;if((e||!/dispose|hide/.test(t))&&(e||(e=new Fe(this,i),b.set(this,"bs.popover",e)),"string"==typeof t)){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m("popover",Fe);const ze={offset:10,method:"auto",target:""},Ke={offset:"number",method:"string",target:"(string|element)"};class Ye extends j{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._selector=`${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,N.on(this._scrollElement,"scroll.bs.scrollspy",()=>this._process()),this.refresh(),this._process()}static get Default(){return ze}static get DATA_KEY(){return"bs.scrollspy"}refresh(){const t=this._scrollElement===this._scrollElement.window?"offset":"position",e="auto"===this._config.method?t:this._config.method,s="position"===e?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),H.find(this._selector).map(t=>{const n=i(t),o=n?H.findOne(n):null;if(o){const t=o.getBoundingClientRect();if(t.width||t.height)return[B[e](o).top+s,n]}return null}).filter(t=>t).sort((t,e)=>t[0]-e[0]).forEach(t=>{this._offsets.push(t[0]),this._targets.push(t[1])})}dispose(){super.dispose(),N.off(this._scrollElement,".bs.scrollspy"),this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null}_getConfig(e){if("string"!=typeof(e={...ze,..."object"==typeof e&&e?e:{}}).target&&r(e.target)){let{id:i}=e.target;i||(i=t("scrollspy"),e.target.id=i),e.target="#"+i}return l("scrollspy",e,Ke),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;)this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e])}}_activate(t){this._activeTarget=t,this._clear();const e=this._selector.split(",").map(e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`),i=H.findOne(e.join(","));i.classList.contains("dropdown-item")?(H.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add("active"),i.classList.add("active")):(i.classList.add("active"),H.parents(i,".nav, .list-group").forEach(t=>{H.prev(t,".nav-link, .list-group-item").forEach(t=>t.classList.add("active")),H.prev(t,".nav-item").forEach(t=>{H.children(t,".nav-link").forEach(t=>t.classList.add("active"))})})),N.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:t})}_clear(){H.find(this._selector).filter(t=>t.classList.contains("active")).forEach(t=>t.classList.remove("active"))}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.scrollspy");if(e||(e=new Ye(this,"object"==typeof t&&t)),"string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(window,"load.bs.scrollspy.data-api",()=>{H.find('[data-bs-spy="scroll"]').forEach(t=>new Ye(t,B.getDataAttributes(t)))}),m("scrollspy",Ye);class qe extends j{static get DATA_KEY(){return"bs.tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active")||d(this._element))return;let t;const e=s(this._element),i=this._element.closest(".nav, .list-group");if(i){const e="UL"===i.nodeName||"OL"===i.nodeName?":scope > li > .active":".active";t=H.find(e,i),t=t[t.length-1]}const n=t?N.trigger(t,"hide.bs.tab",{relatedTarget:this._element}):null;if(N.trigger(this._element,"show.bs.tab",{relatedTarget:t}).defaultPrevented||null!==n&&n.defaultPrevented)return;this._activate(this._element,i);const o=()=>{N.trigger(t,"hidden.bs.tab",{relatedTarget:this._element}),N.trigger(this._element,"shown.bs.tab",{relatedTarget:t})};e?this._activate(e,e.parentNode,o):o()}_activate(t,e,i){const s=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?H.children(e,".active"):H.find(":scope > li > .active",e))[0],o=i&&s&&s.classList.contains("fade"),r=()=>this._transitionComplete(t,s,i);if(s&&o){const t=n(s);s.classList.remove("show"),N.one(s,"transitionend",r),a(s,t)}else r()}_transitionComplete(t,e,i){if(e){e.classList.remove("active");const t=H.findOne(":scope > .dropdown-menu .active",e.parentNode);t&&t.classList.remove("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),u(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&t.parentNode.classList.contains("dropdown-menu")&&(t.closest(".dropdown")&&H.find(".dropdown-toggle").forEach(t=>t.classList.add("active")),t.setAttribute("aria-expanded",!0)),i&&i()}static jQueryInterface(t){return this.each((function(){const e=b.get(this,"bs.tab")||new qe(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){t.preventDefault(),(b.get(this,"bs.tab")||new qe(this)).show()})),m("tab",qe);const Ve={animation:"boolean",autohide:"boolean",delay:"number"},Xe={animation:!0,autohide:!0,delay:5e3};class Qe extends j{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._setListeners()}static get DefaultType(){return Ve}static get Default(){return Xe}static get DATA_KEY(){return"bs.toast"}show(){if(N.trigger(this._element,"show.bs.toast").defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");const t=()=>{this._element.classList.remove("showing"),this._element.classList.add("show"),N.trigger(this._element,"shown.bs.toast"),this._config.autohide&&(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))};if(this._element.classList.remove("hide"),u(this._element),this._element.classList.add("showing"),this._config.animation){const e=n(this._element);N.one(this._element,"transitionend",t),a(this._element,e)}else t()}hide(){if(!this._element.classList.contains("show"))return;if(N.trigger(this._element,"hide.bs.toast").defaultPrevented)return;const t=()=>{this._element.classList.add("hide"),N.trigger(this._element,"hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){const e=n(this._element);N.one(this._element,"transitionend",t),a(this._element,e)}else t()}dispose(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),N.off(this._element,"click.dismiss.bs.toast"),super.dispose(),this._config=null}_getConfig(t){return t={...Xe,...B.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}},l("toast",t,this.constructor.DefaultType),t}_setListeners(){N.on(this._element,"click.dismiss.bs.toast",'[data-bs-dismiss="toast"]',()=>this.hide())}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){let e=b.get(this,"bs.toast");if(e||(e=new Qe(this,"object"==typeof t&&t)),"string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return m("toast",Qe),{Alert:P,Button:I,Carousel:Y,Collapse:X,Dropdown:_e,Modal:ye,Offcanvas:Oe,Popover:Fe,ScrollSpy:Ye,Tab:qe,Toast:Qe,Tooltip:Be}}));

/*! http://mths.be/smoothscroll v1.5.2 by @mathias */
(function(a,c){var b=(function(){var d=c(a.documentElement),f=c(a.body),e;if(d.scrollTop()){return d}else{e=f.scrollTop();if(f.scrollTop(e+1).scrollTop()==e){return d}else{return f.scrollTop(e)}}}());c.fn.smoothScroll=function(d){d=~~d||400;return this.find('a[href*="#"]').click(function(f){var g=this.hash,e=c(g);if(location.pathname.replace(/^\//,'')===this.pathname.replace(/^\//,'')&&location.hostname===this.hostname){if(e.length){f.preventDefault();b.stop().animate({scrollTop:e.offset().top},d,function(){location.hash=g})}}}).end()}}(document,jQuery));
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
!function(t){"use strict";t.fn.counterUp=function(e){var n=t.extend({time:400,delay:10},e);return this.each(function(){var e=t(this),u=n;e.waypoint(function(){var t=[],n=u.time/u.delay,a=e.text(),r=/[0-9]+,[0-9]+/.test(a);a=a.replace(/,/g,"");/^[0-9]+$/.test(a);for(var o=/^[0-9]+\.[0-9]+$/.test(a),c=o?(a.split(".")[1]||[]).length:0,s=n;s>=1;s--){var i=parseInt(a/n*s);if(o&&(i=parseFloat(a/n*s).toFixed(c)),r)for(;/(\d+)(\d{3})/.test(i.toString());)i=i.toString().replace(/(\d+)(\d{3})/,"$1,$2");t.unshift(i)}e.data("counterup-nums",t),e.text("0");e.data("counterup-func",function(){e.data("counterup-nums")&&(e.text(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),u.delay):(e.data("counterup-nums"),e.data("counterup-nums",null),e.data("counterup-func",null)))}),setTimeout(e.data("counterup-func"),u.delay)},{offset:"100%",triggerOnce:!0})})}}(jQuery);
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function(e){e.fn.niceSelect=function(t){function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),n=t.find("option"),i=t.find("option:selected");s.find(".current").html(i.data("display")||i.text()),n.each(function(t){var n=e(this),i=n.data("display");s.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",i||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),i=n.hasClass("open");n.length&&(n.remove(),s(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||s(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var s=e(this),n=s.closest(".nice-select");n.find(".selected").removeClass("selected"),s.addClass("selected");var i=s.data("display")||s.text();n.find(".current").text(i),n.prev("select").val(s.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var s=e(this),n=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?n.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var i=n.nextAll(".option:not(.disabled)").first();i.length>0&&(s.find(".focus").removeClass("focus"),i.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var l=n.prevAll(".option:not(.disabled)").first();l.length>0&&(s.find(".focus").removeClass("focus"),l.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);
$(function(){ParallaxScroll.init()});var ParallaxScroll={showLogs:!1,round:1e3,init:function(){if(this._log("init"),this._inited)return this._log("Already Inited"),void(this._inited=!0);this._requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,t){window.setTimeout(a,1e3/60)},this._onScroll(!0)},_inited:!1,_properties:["x","y","z","rotateX","rotateY","rotateZ","scaleX","scaleY","scaleZ","scale"],_requestAnimationFrame:null,_log:function(a){this.showLogs&&console.log("Parallax Scroll / "+a)},_onScroll:function(X){var Y=$(document).scrollTop(),Z=$(window).height();this._log("onScroll "+Y),$("[data-parallax]").each($.proxy(function(a,t){var o=$(t),i=[],c=!1,e=o.data("style");null==e&&(e=o.attr("style")||"",o.data("style",e));for(var l=[o.data("parallax")],n=2;o.data("parallax"+n);n++)l.push(o.data("parallax-"+n));var s,r,u,d=l.length;for(n=0;n<d;n++){var m=l[n],h=m["from-scroll"];null==h&&(h=Math.max(0,$(t).offset().top-Z)),h|=0;var p=m.distance,w=m["to-scroll"];null==p&&null==w&&(p=Z),p=Math.max(0|p,1);var x,g,_,y=m.easing,f=m["easing-return"];null!=y&&$.easing&&$.easing[y]||(y=null),null!=f&&$.easing&&$.easing[f]||(f=y),y&&(null==(x=m.duration)&&(x=p),x=Math.max(0|x,1),null==(g=m["duration-return"])&&(g=x),p=1,null==(_=o.data("current-time"))&&(_=0)),null==w&&(w=h+p),w|=0;var v=m.smoothness;null==v&&(v=30),v|=0,!X&&0!=v||(v=1),v|=0;var A=Y,A=Math.max(A,h);A=Math.min(A,w),y&&(null==o.data("sens")&&o.data("sens","back"),h<A&&("back"==o.data("sens")?(_=1,o.data("sens","go")):_++),A<w&&("go"==o.data("sens")?(_=1,o.data("sens","back")):_++),X&&(_=x),o.data("current-time",_)),this._properties.map($.proxy(function(a){var t,e,l,n,s=0,r=m[a];null!=r&&("scale"==a||"scaleX"==a||"scaleY"==a||"scaleZ"==a?s=1:r|=0,null==(t=o.data("_"+a))&&(t=s),l=t+((e=(A-h)/(w-h)*(r-s)+s)-t)/v,y&&0<_&&_<=x&&(n=s,"back"==o.data("sens")&&(r=-(n=r),y=f,x=g),l=$.easing[y](null,_,n,r,x)),(l=Math.ceil(l*this.round)/this.round)==t&&e==r&&(l=r),i[a]||(i[a]=0),i[a]+=l,t!=i[a]&&(o.data("_"+a,i[a]),c=!0))},this))}c&&(null!=i.z&&(null==(s=m.perspective)&&(s=800),(r=o.parent()).data("style")||r.data("style",r.attr("style")||""),r.attr("style","perspective:"+s+"px; -webkit-perspective:"+s+"px; "+r.data("style"))),null==i.scaleX&&(i.scaleX=1),null==i.scaleY&&(i.scaleY=1),null==i.scaleZ&&(i.scaleZ=1),null!=i.scale&&(i.scaleX*=i.scale,i.scaleY*=i.scale,i.scaleZ*=i.scale),u="translate3d("+(i.x?i.x:0)+"px, "+(i.y?i.y:0)+"px, "+(i.z?i.z:0)+"px)"+" "+("rotateX("+(i.rotateX?i.rotateX:0)+"deg) rotateY("+(i.rotateY?i.rotateY:0)+"deg) rotateZ("+(i.rotateZ?i.rotateZ:0)+"deg)")+" "+("scaleX("+i.scaleX+") scaleY("+i.scaleY+") scaleZ("+i.scaleZ+")")+";",this._log(u),o.attr("style","transform:"+u+" -webkit-transform:"+u+" "+e))},this)),window.requestAnimationFrame?window.requestAnimationFrame($.proxy(this._onScroll,this,!1)):this._requestAnimationFrame($.proxy(this._onScroll,this,!1))}};
!function(r,u,d,m){"use strict";var o="parallax",n={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!0,precision:1};function a(t,i){this.element=t,this.$context=r(t).data("api",this),this.$layers=this.$context.find(".layer");var e={calibrateX:this.$context.data("calibrate-x")||null,calibrateY:this.$context.data("calibrate-y")||null,invertX:this.$context.data("invert-x")||null,invertY:this.$context.data("invert-y")||null,limitX:parseFloat(this.$context.data("limit-x"))||null,limitY:parseFloat(this.$context.data("limit-y"))||null,scalarX:parseFloat(this.$context.data("scalar-x"))||null,scalarY:parseFloat(this.$context.data("scalar-y"))||null,frictionX:parseFloat(this.$context.data("friction-x"))||null,frictionY:parseFloat(this.$context.data("friction-y"))||null,originX:parseFloat(this.$context.data("origin-x"))||null,originY:parseFloat(this.$context.data("origin-y"))||null,pointerEvents:this.$context.data("pointer-events")||!0,precision:parseFloat(this.$context.data("precision"))||1};for(var s in e)null===e[s]&&delete e[s];r.extend(this,n,i,e),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.erx=0,this.ery=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}a.prototype.transformSupport=function(t){for(var i,e,s,o,n=d.createElement("div"),r=!1,a=null,h=!1,l=null,p=null,c=0,y=this.vendors.length;c<y;c++)if(p=null!==this.vendors[c]?(l=this.vendors[c][0]+"transform",this.vendors[c][1]+"Transform"):l="transform",n.style[p]!==m){r=!0;break}switch(t){case"2D":h=r;break;case"3D":r&&(i=d.body||d.createElement("body"),s=(e=d.documentElement).style.overflow,o=!1,d.body||(o=!0,e.style.overflow="hidden",e.appendChild(i),i.style.overflow="hidden",i.style.background=""),i.appendChild(n),n.style[p]="translate3d(1px,1px,1px)",h=(a=u.getComputedStyle(n).getPropertyValue(l))!==m&&0<a.length&&"none"!==a,e.style.overflow=s,i.removeChild(n),o&&(i.removeAttribute("style"),i.parentNode.removeChild(i)))}return h},a.prototype.ww=null,a.prototype.wh=null,a.prototype.wcx=null,a.prototype.wcy=null,a.prototype.wrx=null,a.prototype.wry=null,a.prototype.portrait=null,a.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),a.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],a.prototype.motionSupport=!!u.DeviceMotionEvent,a.prototype.orientationSupport=!!u.DeviceOrientationEvent,a.prototype.orientationStatus=0,a.prototype.transform2DSupport=a.prototype.transformSupport("2D"),a.prototype.transform3DSupport=a.prototype.transformSupport("3D"),a.prototype.propertyCache={},a.prototype.initialise=function(){"static"===this.$context.css("position")&&this.$context.css({position:"relative"}),this.pointerEvents||this.$context.css({pointerEvents:"none"}),this.accelerate(this.$context),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},a.prototype.updateLayers=function(){this.$layers=this.$context.find(".layer"),this.depthsX=[],this.depthsY=[],this.$layers.css({position:"absolute",display:"block",left:0,top:0}),this.$layers.first().css({position:"relative"}),this.accelerate(this.$layers),this.$layers.each(r.proxy(function(t,i){var e=r(i).data("depth")||0;this.depthsX.push(r(i).data("depth-x")||e),this.depthsY.push(r(i).data("depth-y")||e)},this))},a.prototype.updateDimensions=function(){this.ww=u.innerWidth,this.wh=u.innerHeight,this.wcx=this.ww*this.originX,this.wcy=this.wh*this.originY,this.wrx=Math.max(this.wcx,this.ww-this.wcx),this.wry=Math.max(this.wcy,this.wh-this.wcy)},a.prototype.updateBounds=function(){this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew*this.originX,this.ecy=this.eh*this.originY,this.erx=Math.max(this.ecx,this.ew-this.ecx),this.ery=Math.max(this.ecy,this.eh-this.ecy)},a.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},a.prototype.enable=function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=null,u.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,u.addEventListener("mousemove",this.onMouseMove)),u.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},a.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?u.removeEventListener("deviceorientation",this.onDeviceOrientation):u.removeEventListener("mousemove",this.onMouseMove),u.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},a.prototype.calibrate=function(t,i){this.calibrateX=t===m?this.calibrateX:t,this.calibrateY=i===m?this.calibrateY:i},a.prototype.invert=function(t,i){this.invertX=t===m?this.invertX:t,this.invertY=i===m?this.invertY:i},a.prototype.friction=function(t,i){this.frictionX=t===m?this.frictionX:t,this.frictionY=i===m?this.frictionY:i},a.prototype.scalar=function(t,i){this.scalarX=t===m?this.scalarX:t,this.scalarY=i===m?this.scalarY:i},a.prototype.limit=function(t,i){this.limitX=t===m?this.limitX:t,this.limitY=i===m?this.limitY:i},a.prototype.origin=function(t,i){this.originX=t===m?this.originX:t,this.originY=i===m?this.originY:i},a.prototype.clamp=function(t,i,e){return t=Math.max(t,i),t=Math.min(t,e)},a.prototype.css=function(t,i,e){var s=this.propertyCache[i];if(!s)for(var o=0,n=this.vendors.length;o<n;o++)if(s=null!==this.vendors[o]?r.camelCase(this.vendors[o][1]+"-"+i):i,t.style[s]!==m){this.propertyCache[i]=s;break}t.style[s]=e},a.prototype.accelerate=function(t){for(var i=0,e=t.length;i<e;i++){var s=t[i];this.css(s,"transform","translate3d(0,0,0)"),this.css(s,"transform-style","preserve-3d"),this.css(s,"backface-visibility","hidden")}},a.prototype.setPosition=function(t,i,e){i+="px",e+="px",this.transform3DSupport?this.css(t,"transform","translate3d("+i+","+e+",0)"):this.transform2DSupport?this.css(t,"transform","translate("+i+","+e+")"):(t.style.left=i,t.style.top=e)},a.prototype.onOrientationTimer=function(t){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},a.prototype.onCalibrationTimer=function(t){this.calibrationFlag=!0},a.prototype.onWindowResize=function(t){this.updateDimensions()},a.prototype.onAnimationFrame=function(){this.updateBounds();var t=this.ix-this.cx,i=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=this.calibrateX?i:this.iy,this.my=this.calibrateY?t:this.ix):(this.mx=this.calibrateX?t:this.ix,this.my=this.calibrateY?i:this.iy),this.mx*=this.ew*(this.scalarX/100),this.my*=this.eh*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,s=this.$layers.length;e<s;e++){var o=this.depthsX[e],n=this.depthsY[e],r=this.$layers[e],a=this.vx*(o*(this.invertX?-1:1)),h=this.vy*(n*(this.invertY?-1:1));this.setPosition(r,a,h)}this.raf=requestAnimationFrame(this.onAnimationFrame)},a.prototype.onDeviceOrientation=function(t){var i,e,s;this.desktop||null===t.beta||null===t.gamma||(this.orientationStatus=1,i=(t.beta||0)/30,e=(t.gamma||0)/30,s=u.innerHeight>u.innerWidth,this.portrait!==s&&(this.portrait=s,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=i,this.cy=e),this.ix=i,this.iy=e)},a.prototype.onMouseMove=function(t){var i=t.clientX,e=t.clientY;!this.orientationSupport&&this.relativeInput?(this.clipRelativeInput&&(i=Math.max(i,this.ex),i=Math.min(i,this.ex+this.ew),e=Math.max(e,this.ey),e=Math.min(e,this.ey+this.eh)),this.ix=(i-this.ex-this.ecx)/this.erx,this.iy=(e-this.ey-this.ecy)/this.ery):(this.ix=(i-this.wcx)/this.wrx,this.iy=(e-this.wcy)/this.wry)};var h={enable:a.prototype.enable,disable:a.prototype.disable,updateLayers:a.prototype.updateLayers,calibrate:a.prototype.calibrate,friction:a.prototype.friction,invert:a.prototype.invert,scalar:a.prototype.scalar,limit:a.prototype.limit,origin:a.prototype.origin};r.fn[o]=function(e){var s=arguments;return this.each(function(){var t=r(this),i=t.data(o);i||(i=new a(this,e),t.data(o,i)),h[e]&&i[e].apply(i,Array.prototype.slice.call(s,1))})}}(window.jQuery||window.Zepto,window,document);
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
/*! WOW - v1.0.2 - 2014-09-24
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
(function ($) {
  "use strict";

  var $window = $(window);
  var didScroll,
    lastScrollTop = 0,
    delta = 5,
    $mainNav = $("#sticky"),
    $mainNavHeight = $mainNav.outerHeight(),
    scrollTop;

  $window.on("scroll", function () {
    didScroll = true;
    scrollTop = $(this).scrollTop();
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 200);

  function hasScrolled() {
    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
      return;
    }
    if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
      $mainNav.css("top", -$mainNavHeight);
    } else {
      if (scrollTop + $(window).height() < $(document).height()) {
        $mainNav.css("top", 0);
      }
    }
    lastScrollTop = scrollTop;
  }

  //sticky header
  function navbarFixed() {
    if ($("#sticky").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll) {
          $("#sticky").addClass("navbar_fixed");
        } else {
          $("#sticky").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  $(".navbar-nav > li .mobile_dropdown_icon").on("click", function (e) {
    $(this).parent().find("ul").first().toggle(300);
    $(this).parent().siblings().find("ul").hide(300);
  });

  if ($(".submenu").length) {
    $(".submenu > .dropdown-toggle").on("click", function () {
      var location = $(this).attr("href");
      window.location.href = location;
      return false;
    });
  }

  //initialize smmothscroll
  if ($("header").length) {
    $("header").smoothScroll();
  }

  if ($("#banner_animation").length > 0) {
    $("#banner_animation").parallax({
      scalarX: 10.0,
      scalarY: 7.0,
    });
  }
  if ($("#banner_animation2").length > 0) {
    $("#banner_animation2").parallax({
      scalarX: 10.0,
      scalarY: 0.0,
    });
  }
  if ($("#card_area_animation").length > 0) {
    $("#card_area_animation").parallax({
      scalarX: 10.0,
      scalarY: 0.0,
    });
  }
  if ($("#MouseMoveAnimation").length > 0) {
    $("#MouseMoveAnimation").parallax({
      scalarX: 5.0,
      scalarY: 10.0,
    });
  }

  if ($("#readOnlyClose").length) {
    $("#readOnlyClose").on("click", function () {
      $("#locationSelect").val("");
      $("#locationSelect").focus();
    });
  }

  // === Back to Top Button
  var back_top_btn = $("#back-to-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      back_top_btn.addClass("show");
    } else {
      back_top_btn.removeClass("show");
    }
  });

  back_top_btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  //initialize wow js
  new WOW({}).init();

  //initialize counterUp
  if ($(".counter span").length) {
    $(".counter span").counterUp();
  }
  if ($(".stat-counter").length) {
    $(".stat-counter").counterUp();
  }

  //initialize niceselect
  if ($("#select-lang").length) {
    $("#select-lang").niceSelect();
  }
  if ($("#select-loan-type").length) {
    $("#select-loan-type").niceSelect();
  }
  if ($("#loandetails01").length) {
    $("#loandetails01").niceSelect();
  }
  if ($("#loandetails02").length) {
    $("#loandetails02").niceSelect();
  }
  if ($("#dob-d").length) {
    $("#dob-d").niceSelect();
  }
  if ($("#dob-m").length) {
    $("#dob-m").niceSelect();
  }
  if ($("#dob-y").length) {
    $("#dob-y").niceSelect();
  }
  if ($("#sort-select").length) {
    $("#sort-select").niceSelect();
  }

  //ediatable location select
  if ($("#locationSelect").length) {
    $("#locationSelect").editableSelect();
  }

  //initialize fencybox
  if ($("[data-fancybox]").length) {
    $("[data-fancybox]").fancybox({
      animationEffect: "zoom-in-out",
    });
  }

  //initialize slick slider
  if ($(".testimonial-slider").length) {
    $(".testimonial-slider").slick({
      dots: false,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="arrow_carrot-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="arrow_carrot-right"></i></button>',
      slidesToShow: 1,
      centerMode: true,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 7000,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            centerMode: false,
            variableWidth: false,
          },
        },
      ],
    });
  }

  if ($(".testimonial-slider-2").length) {
    $(".testimonial-slider-2").slick({
      dots: false,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="arrow_left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="arrow_right"></i></button>',
      slidesToShow: 3,
      centerMode: false,
      autoplay: false,
      infinite: true,
      autoplaySpeed: 7000,
      slidesToScroll: 1,
      asNavFor: ".testimonial-slider-3",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  if ($(".testimonial-slider-3").length) {
    $(".testimonial-slider-3").slick({
      dots: false,
      asNavFor: ".testimonial-slider-2",
      arrows: false,
      slidesToShow: 1,
      centerMode: false,
      autoplay: false,
      infinite: true,
      slidesToScroll: 1,
      fade: true,
    });
  }
  if ($(".feature-slider").length) {
    $(".feature-slider").slick({
      dots: true,
      arrows: false,
      slidesToShow: 3,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 5000,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  if ($(".statistics-slider").length) {
    $(".statistics-slider").slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
    });
  }
  if ($(".client-slider").length) {
    $(".client-slider").slick({
      dots: true,
      arrows: false,
      centerMode: false,
      slidesToShow: 3,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 5000,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  if ($(".news-slider").length) {
    $(".news-slider").slick({
      dots: true,
      arrows: false,
      centerMode: false,
      slidesToShow: 3,
      autoplay: false,
      infinite: true,
      autoplaySpeed: 7500,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  //initilalize Telephone Input Country
  if ($("#inputPhoneNumber").length) {
    $("#inputPhoneNumber").intlTelInput({
      separateDialCode: false,
      utilsScript: "js/utils.js",
    });
  }

  //initilalize DropeZone
  if ($("#dropzone").length) {
    $("#dropzone").dropzone({
      paramName: "file",
      url: "upload-target",
    });
  }

  // ------- Emi Calculator --------- //
  var SelectedAmount,
    selectedTime = {},
    RateOfInterestTime,
    RateOfInterestAmount;

  if (typeof wNumb !== "undefined") {
    var AmountFormat = wNumb({
      decimals: 0,
      thousand: ",",
      prefix: "$ ",
    });

    var TimeFormatMonths = wNumb({
      prefix: " months",
    });
    var TimeFormatYears = wNumb({
      prefix: " months",
    });
  }

  //Slider Elements
  var mySlider = document.getElementById("RangeSlider");
  var mySliderMonth = document.getElementById("MonthRangeSlider");
  var mySliderYear = document.getElementById("YearRangeSlider");
  //-----home page 1
  var SliderAmount = document.getElementById("SliderAmount");
  var SliderPeriod = document.getElementById("SliderPeriod");

  function clickOnPip(sliderName, This) {
    var value = Number(This.getAttribute("data-value"));
    sliderName.noUiSlider.set(value);
  }

  function SetPipsOnSlider(PipsName, sliderName) {
    for (var i = 0; i < PipsName.length; i++) {
      PipsName[i].style.cursor = "pointer";
      PipsName[i].addEventListener("click", function () {
        clickOnPip(sliderName, this);
      });
    }
  }

  //   Activate Range Sliders

  if (mySlider && mySliderMonth && mySliderYear) {
    noUiSlider.create(mySlider, {
      start: [15000],
      connect: "lower",
      range: {
        min: 5000,
        max: 150000,
      },
      format: wNumb({
        decimals: 0,
        thousand: ",",
        prefix: "$ ",
      }),
      pips: {
        mode: "values",
        density: 100,

        values: [5000, 25000, 50000, 75000, 100000, 125000, 150000],
        stepped: true,
        format: wNumb({
          encoder: function (a) {
            return a / 1000;
          },
          decimals: 0,
          prefix: "$",
          suffix: "k",
        }),
      },
    });
    noUiSlider.create(mySliderMonth, {
      start: [18],
      connect: "lower",
      range: {
        min: 12,
        max: 48,
      },
      format: wNumb({
        decimals: 0,
        suffix: " Months",
      }),
      pips: {
        mode: "values",
        density: 100,

        values: [12, 18, 24, 30, 36, 42, 48],
        stepped: true,
        format: wNumb({
          decimals: 0,
        }),
      },
    });
    noUiSlider.create(mySliderYear, {
      start: [2],
      connect: "lower",
      range: {
        min: 2,
        max: 8,
      },
      format: wNumb({
        decimals: 0,
        suffix: " Years",
      }),
      pips: {
        mode: "values",
        density: 100,

        values: [2, 3, 4, 5, 6, 7, 8],
        stepped: true,
        format: wNumb({
          decimals: 0,
        }),
      },
    });
    //Slider Pips
    var pips = mySlider.querySelectorAll(".noUi-value");
    var pipsMonth = mySliderMonth.querySelectorAll(".noUi-value");
    var pipsYear = mySliderYear.querySelectorAll(".noUi-value");

    //Slider Input Element
    var inputMonthFormat = document.getElementById("SetMonthRange");
    var inputFormat = document.getElementById("SetRange");

    SetPipsOnSlider(pips, mySlider);
    SetPipsOnSlider(pipsMonth, mySliderMonth);
    SetPipsOnSlider(pipsYear, mySliderYear);
    mySlider.noUiSlider.on("update", function (values, handle) {
      inputFormat.value = values[handle];
      SelectedAmount = AmountFormat.from(values[handle]);
      CalculateAmount();
    });

    inputFormat.addEventListener("change", function () {
      mySlider.noUiSlider.set(this.value);
    });

    if ($("#monthTab.active").length > 0) {
      mySliderMonth.noUiSlider.on("update", function (values, handle) {
        inputMonthFormat.value = values[handle];
        selectedTime = {
          type: "month",
          value: TimeFormatMonths.from(values[handle]),
        };

        CalculateAmount();
      });

      inputMonthFormat.addEventListener("change", function () {
        mySliderMonth.noUiSlider.set(this.value);
      });
    } else if ($("#yearTab.active").length > 0) {
      mySliderYear.noUiSlider.on("update", function (values, handle) {
        inputMonthFormat.value = values[handle];

        selectedTime = {
          type: "year",
          value: TimeFormatYears.from(values[handle]),
        };
        CalculateAmount();
      });
    }

    inputMonthFormat.addEventListener("change", function () {
      if ($("#monthTab.active").length > 0) {
        mySliderMonth.noUiSlider.set(this.value);
      } else if ($("#yearTab.active").length > 0) {
        mySliderYear.noUiSlider.set(this.value);
      }
    });

    $("#yearTab").on("click", function () {
      mySliderMonth.noUiSlider.off("update", function (values, handle) {
        inputMonthFormat.value = values[handle];
        selectedTime = {
          type: "month",
          value: TimeFormatMonths.from(values[handle]),
        };
        CalculateAmount();
      });
      mySliderYear.noUiSlider.on("update", function (values, handle) {
        inputMonthFormat.value = values[handle];
        selectedTime = {
          type: "year",
          value: TimeFormatYears.from(values[handle]),
        };
        CalculateAmount();
      });
    });
    $("#monthTab").on("click", function () {
      mySliderYear.noUiSlider.off("update", function (values, handle) {
        inputMonthFormat.value = values[handle];
        selectedTime = {
          type: "year",
          value: TimeFormatYears.from(values[handle]),
        };
        CalculateAmount();
      });
      mySliderMonth.noUiSlider.on("update", function (values, handle) {
        inputMonthFormat.value = values[handle];
        selectedTime = {
          type: "month",
          value: TimeFormatMonths.from(values[handle]),
        };
        CalculateAmount();
      });
    });
  }

  if (SliderAmount && SliderPeriod) {
    noUiSlider.create(SliderAmount, {
      start: [100000],
      connect: "lower",
      range: {
        min: 5000,
        max: 250000,
      },
      format: wNumb({
        decimals: 0,
        thousand: ",",
        prefix: "$ ",
      }),
    });
    noUiSlider.create(SliderPeriod, {
      start: [3],
      connect: "lower",
      range: {
        min: 1,
        max: 5,
      },
      format: wNumb({
        decimals: 0,
        suffix: " year",
      }),
    });

    var SliderAmountFormat = document.getElementById("SetSliderAmount");
    var SliderPeriodFormat = document.getElementById("SetSliderPeriod");

    SliderAmount.noUiSlider.on("update", function (values, handle) {
      SliderAmountFormat.value = values[handle];
    });
    SliderPeriod.noUiSlider.on("update", function (values, handle) {
      SliderPeriodFormat.value = values[handle];
    });

    SliderAmountFormat.addEventListener("change", function () {
      SliderAmount.noUiSlider.set(this.value);
    });
    SliderPeriodFormat.addEventListener("change", function () {
      SliderPeriod.noUiSlider.set(this.value);
    });
  }

  function CalculateAmount() {
    if (selectedTime.type === "month") {
      var LoanTime = selectedTime.value;
      switch (true) {
        case LoanTime >= 48:
          RateOfInterestTime = 2.4;
          break;
        case LoanTime >= 42:
          RateOfInterestTime = 2.55;
          break;
        case LoanTime >= 32:
          RateOfInterestTime = 2.7;
          break;
        case LoanTime >= 25:
          RateOfInterestTime = 2.9;
          break;
        case LoanTime >= 20:
          RateOfInterestTime = 3;
          break;
        case LoanTime >= 12:
          RateOfInterestTime = 3.15;
          break;
        default:
          RateOfInterestTime = 0;
      }
    }
    if (selectedTime.type === "year") {
      var LoanTime = selectedTime.value;
      switch (true) {
        case LoanTime >= 8:
          RateOfInterestTime = 2;
          break;
        case LoanTime >= 7:
          RateOfInterestTime = 2.2;
          break;
        case LoanTime >= 6:
          RateOfInterestTime = 2.3;
          break;
        case LoanTime >= 5:
          RateOfInterestTime = 2.5;
          break;
        case LoanTime >= 4:
          RateOfInterestTime = 2.7;
          break;
        case LoanTime >= 3:
          RateOfInterestTime = 2.9;
          break;
        case LoanTime >= 2:
          RateOfInterestTime = 3.1;
          break;

        default:
          RateOfInterestTime = 0;
      }
    }
    if (typeof SelectedAmount === "number") {
      var LoanAmount = SelectedAmount;
      switch (true) {
        case LoanAmount >= 13e4:
          RateOfInterestAmount = 2.9;
          break;
        case LoanAmount >= 115e3:
          RateOfInterestAmount = 3.1;
          break;
        case LoanAmount >= 1e5:
          RateOfInterestAmount = 3.3;
          break;
        case LoanAmount >= 8e4:
          RateOfInterestAmount = 3.5;
          break;
        case LoanAmount >= 65e3:
          RateOfInterestAmount = 3.7;
          break;
        case LoanAmount >= 5e4:
          RateOfInterestAmount = 3.8;
          break;
        case LoanAmount >= 25e3:
          RateOfInterestAmount = 3.95;
          break;
        case LoanAmount >= 1e4:
          RateOfInterestAmount = 4;
          break;
        default:
          RateOfInterestAmount = 4.09;
      }
    }

    var TotalRateOfInterest = (RateOfInterestAmount + RateOfInterestTime) / 100;
    var TotalInterest = SelectedAmount * TotalRateOfInterest;
    var InterestAndPrincipal = TotalInterest + SelectedAmount;

    $("#TotalAmount").text(AmountFormat.to(InterestAndPrincipal) + "*");
    $("#emiAmount").text(
      AmountFormat.to(InterestAndPrincipal / selectedTime.value) + "*"
    );
    $("#InterestPayable").text(AmountFormat.to(TotalInterest) + "*");
    $("#InterestAmount").text((TotalRateOfInterest * 100).toFixed(2) + " %");

    var percent, graphRadius, circumference, strokeDashOffset;
    var GraphEl = $("#LoanGraph");
    percent = (100 * TotalInterest) / InterestAndPrincipal;
    graphRadius = GraphEl.find($("circle.complete")).attr("r");
    circumference = 2 * Math.PI * graphRadius;
    strokeDashOffset = circumference - (percent * circumference) / 100;
    GraphEl.find($("circle.complete"))
      .css({ "stroke-dashoffset": "0", opacity: "0.1" })
      .animate({ "stroke-dashoffset": strokeDashOffset, opacity: "1" }, 1250);

    if ($("#monthTab").hasClass("active")) {
      $(".active_bar").addClass("left");
    } else {
      $(".active_bar").removeClass("left");
    }
  }
  // End of Calculator
})(jQuery);
(function($) {

  var cocoon_element_counter = 0;

  var create_new_id = function() {
    return (new Date().getTime() + cocoon_element_counter++);
  }

  var newcontent_braced = function(id) {
    return '[' + id + ']$1';
  }

  var newcontent_underscord = function(id) {
    return '_' + id + '_$1';
  }

  var getInsertionNodeElem = function(insertionNode, insertionTraversal, $this){

    if (!insertionNode){
      return $this.parent();
    }

    if (typeof insertionNode == 'function'){
      if(insertionTraversal){
        console.warn('association-insertion-traversal is ignored, because association-insertion-node is given as a function.')
      }
      return insertionNode($this);
    }

    if(typeof insertionNode == 'string'){
      if (insertionTraversal){
        return $this[insertionTraversal](insertionNode);
      }else{
        return insertionNode == "this" ? $this : $(insertionNode);
      }
    }

  }

  $(document).on('click', '.add_fields', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var $this                 = $(this),
        assoc                 = $this.data('association'),
        assocs                = $this.data('associations'),
        content               = $this.data('association-insertion-template'),
        insertionMethod       = $this.data('association-insertion-method') || $this.data('association-insertion-position') || 'before',
        insertionNode         = $this.data('association-insertion-node'),
        insertionTraversal    = $this.data('association-insertion-traversal'),
        count                 = parseInt($this.data('count'), 10),
        regexp_braced         = new RegExp('\\[new_' + assoc + '\\](.*?\\s)', 'g'),
        regexp_underscord     = new RegExp('_new_' + assoc + '_(\\w*)', 'g'),
        new_id                = create_new_id(),
        new_content           = content.replace(regexp_braced, newcontent_braced(new_id)),
        new_contents          = [],
        originalEvent         = e;


    if (new_content == content) {
      regexp_braced     = new RegExp('\\[new_' + assocs + '\\](.*?\\s)', 'g');
      regexp_underscord = new RegExp('_new_' + assocs + '_(\\w*)', 'g');
      new_content       = content.replace(regexp_braced, newcontent_braced(new_id));
    }

    new_content = new_content.replace(regexp_underscord, newcontent_underscord(new_id));
    new_contents = [new_content];

    count = (isNaN(count) ? 1 : Math.max(count, 1));
    count -= 1;

    while (count) {
      new_id      = create_new_id();
      new_content = content.replace(regexp_braced, newcontent_braced(new_id));
      new_content = new_content.replace(regexp_underscord, newcontent_underscord(new_id));
      new_contents.push(new_content);

      count -= 1;
    }

    var insertionNodeElem = getInsertionNodeElem(insertionNode, insertionTraversal, $this)

    if( !insertionNodeElem || (insertionNodeElem.length == 0) ){
      console.warn("Couldn't find the element to insert the template. Make sure your `data-association-insertion-*` on `link_to_add_association` is correct.")
    }

    $.each(new_contents, function(i, node) {
      var contentNode = $(node);

      var before_insert = jQuery.Event('cocoon:before-insert');
      insertionNodeElem.trigger(before_insert, [contentNode, originalEvent]);

      if (!before_insert.isDefaultPrevented()) {
        // allow any of the jquery dom manipulation methods (after, before, append, prepend, etc)
        // to be called on the node.  allows the insertion node to be the parent of the inserted
        // code and doesn't force it to be a sibling like after/before does. default: 'before'
        var addedContent = insertionNodeElem[insertionMethod](contentNode);

        insertionNodeElem.trigger('cocoon:after-insert', [contentNode,
          originalEvent]);
      }
    });
  });

  $(document).on('click', '.remove_fields.dynamic, .remove_fields.existing', function(e) {
    var $this = $(this),
        wrapper_class = $this.data('wrapper-class') || 'nested-fields',
        node_to_delete = $this.closest('.' + wrapper_class),
        trigger_node = node_to_delete.parent(),
        originalEvent = e;

    e.preventDefault();
    e.stopPropagation();

    var before_remove = jQuery.Event('cocoon:before-remove');
    trigger_node.trigger(before_remove, [node_to_delete, originalEvent]);

    if (!before_remove.isDefaultPrevented()) {
      var timeout = trigger_node.data('remove-timeout') || 0;

      setTimeout(function() {
        if ($this.hasClass('dynamic')) {
            node_to_delete.detach();
        } else {
            $this.prev("input[type=hidden]").val("1");
            node_to_delete.hide();
        }
        trigger_node.trigger('cocoon:after-remove', [node_to_delete,
          originalEvent]);
      }, timeout);
    }
  });


  $(document).on("ready page:load turbolinks:load", function() {
    $('.remove_fields.existing.destroyed').each(function(i, obj) {
      var $this = $(this),
          wrapper_class = $this.data('wrapper-class') || 'nested-fields';

      $this.closest('.' + wrapper_class).hide();
    });
  });

})(jQuery);


var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

function emailValidate() {
    var isValid = emailRegex.test($('#email_input').val());

    if (isValid) {
        $('#validEmail').hide();
        validateData();
    } else {
        $('#validEmail').show();
        $('#request_btn').attr('class', 'btn-section-disabled');
    }
}

function phoneValidate() {
    var isValid = phoneRegex.test($('#phone_input').val());

    if (isValid) {
        $('#validPhone').hide();
        validateData();
    } else {
        $('#validPhone').show();
        $('#request_btn').attr('class', 'btn-section-disabled');
    }
}

function rfcValidate() {
    var rfc_value = $('#rfc_input').val();

    if (rfc_value.length === 13 || rfc_value.length === 12) {
        $('#validRfc').hide();
        validateData();
    } else {
        $('#validRfc').show();
        $('#request_btn').attr('class', 'btn-section-disabled');
    }
}

function validateData() {
    var email_input = $('#email_input').val();
    var phone_input = $('#phone_input').val();
    var rfc_input = $('#rfc_input').val();

    if (email_input !== '' && phone_input !== '' && rfc_input !== '') {
        $('#request_btn').attr('class', '');
    }
}

function validateEmailExists(){
    var email = $('#email_input').val();
    
    $.ajax({
        url: "get_user_by_email.json",
        type: "get", //send it through get method
        data: {
            emailAddress: email
        },
        success: function(response) {

            if(response){
                $('#emailExist').show();
                $('#request_btn').attr('class', 'btn-section-disabled');
            }else{
                $('#emailExist').hide();
            }
        },
        error: function(xhr) {
            //Do Something to handle error
        }
    });
};
/*
 Highcharts JS v9.3.3 (2022-02-01)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(Z,M){"object"===typeof module&&module.exports?(M["default"]=M,module.exports=Z.document?M(Z):M):"function"===typeof define&&define.amd?define("highcharts/highcharts",function(){return M(Z)}):(Z.Highcharts&&Z.Highcharts.error(16,!0),Z.Highcharts=M(Z))})("undefined"!==typeof window?window:this,function(Z){function M(v,a,z,F){v.hasOwnProperty(a)||(v[a]=F.apply(null,z))}var a={};M(a,"Core/Globals.js",[],function(){var v="undefined"!==typeof Z?Z:"undefined"!==typeof window?window:
    {},a;(function(a){a.SVG_NS="http://www.w3.org/2000/svg";a.product="Highcharts";a.version="9.3.3";a.win=v;a.doc=a.win.document;a.svg=a.doc&&a.doc.createElementNS&&!!a.doc.createElementNS(a.SVG_NS,"svg").createSVGRect;a.userAgent=a.win.navigator&&a.win.navigator.userAgent||"";a.isChrome=-1!==a.userAgent.indexOf("Chrome");a.isFirefox=-1!==a.userAgent.indexOf("Firefox");a.isMS=/(edge|msie|trident)/i.test(a.userAgent)&&!a.win.opera;a.isSafari=!a.isChrome&&-1!==a.userAgent.indexOf("Safari");a.isTouchDevice=
    /(Mobile|Android|Windows Phone)/.test(a.userAgent);a.isWebKit=-1!==a.userAgent.indexOf("AppleWebKit");a.deg2rad=2*Math.PI/360;a.hasBidiBug=a.isFirefox&&4>parseInt(a.userAgent.split("Firefox/")[1],10);a.hasTouch=!!a.win.TouchEvent;a.marginNames=["plotTop","marginRight","marginBottom","plotLeft"];a.noop=function(){};a.supportsPassiveEvents=function(){var v=!1;if(!a.isMS){var u=Object.defineProperty({},"passive",{get:function(){v=!0}});a.win.addEventListener&&a.win.removeEventListener&&(a.win.addEventListener("testPassive",
    a.noop,u),a.win.removeEventListener("testPassive",a.noop,u))}return v}();a.charts=[];a.dateFormats={};a.seriesTypes={};a.symbolSizes={};a.chartCount=0})(a||(a={}));"";return a});M(a,"Core/Utilities.js",[a["Core/Globals.js"]],function(a){function v(m,b,d,g){var D=b?"Highcharts error":"Highcharts warning";32===m&&(m=D+": Deprecated member");var x=n(m),c=x?D+" #"+m+": www.highcharts.com/errors/"+m+"/":m.toString();if("undefined"!==typeof g){var r="";x&&(c+="?");B(g,function(m,b){r+="\n - "+b+": "+m;
    x&&(c+=encodeURI(b)+"="+encodeURI(m))});c+=r}J(a,"displayError",{chart:d,code:m,message:c,params:g},function(){if(b)throw Error(c);l.console&&-1===v.messages.indexOf(c)&&console.warn(c)});v.messages.push(c)}function z(m,b){var d={};B(m,function(D,x){if(H(m[x],!0)&&!m.nodeType&&b[x])D=z(m[x],b[x]),Object.keys(D).length&&(d[x]=D);else if(H(m[x])||m[x]!==b[x])d[x]=m[x]});return d}function F(m,b){return parseInt(m,b||10)}function y(m){return"string"===typeof m}function G(m){m=Object.prototype.toString.call(m);
    return"[object Array]"===m||"[object Array Iterator]"===m}function H(m,b){return!!m&&"object"===typeof m&&(!b||!G(m))}function A(m){return H(m)&&"number"===typeof m.nodeType}function q(m){var b=m&&m.constructor;return!(!H(m,!0)||A(m)||!b||!b.name||"Object"===b.name)}function n(m){return"number"===typeof m&&!isNaN(m)&&Infinity>m&&-Infinity<m}function k(m){return"undefined"!==typeof m&&null!==m}function e(m,b,d){var D;y(b)?k(d)?m.setAttribute(b,d):m&&m.getAttribute&&((D=m.getAttribute(b))||"class"!==
    b||(D=m.getAttribute(b+"Name"))):B(b,function(b,d){k(b)?m.setAttribute(d,b):m.removeAttribute(d)});return D}function c(b,d){var m;b||(b={});for(m in d)b[m]=d[m];return b}function h(){for(var b=arguments,d=b.length,x=0;x<d;x++){var g=b[x];if("undefined"!==typeof g&&null!==g)return g}}function f(b,d){a.isMS&&!a.svg&&d&&"undefined"!==typeof d.opacity&&(d.filter="alpha(opacity="+100*d.opacity+")");c(b.style,d)}function w(b,d){return 1E14<b?b:parseFloat(b.toPrecision(d||14))}function p(b,d,x){var m=a.getStyle||
    p;if("width"===d)return d=Math.min(b.offsetWidth,b.scrollWidth),x=b.getBoundingClientRect&&b.getBoundingClientRect().width,x<d&&x>=d-1&&(d=Math.floor(x)),Math.max(0,d-(m(b,"padding-left",!0)||0)-(m(b,"padding-right",!0)||0));if("height"===d)return Math.max(0,Math.min(b.offsetHeight,b.scrollHeight)-(m(b,"padding-top",!0)||0)-(m(b,"padding-bottom",!0)||0));l.getComputedStyle||v(27,!0);if(b=l.getComputedStyle(b,void 0)){var g=b.getPropertyValue(d);h(x,"opacity"!==d)&&(g=F(g))}return g}function B(b,d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      g){for(var m in b)Object.hasOwnProperty.call(b,m)&&d.call(g||b[m],b[m],m,b)}function t(b,d,g){function m(d,m){var L=b.removeEventListener||a.removeEventListenerPolyfill;L&&L.call(b,d,m,!1)}function x(g){var x;if(b.nodeName){if(d){var L={};L[d]=!0}else L=g;B(L,function(b,d){if(g[d])for(x=g[d].length;x--;)m(d,g[d][x].fn)})}}var D="function"===typeof b&&b.prototype||b;if(Object.hasOwnProperty.call(D,"hcEvents")){var l=D.hcEvents;d?(D=l[d]||[],g?(l[d]=D.filter(function(b){return g!==b.fn}),m(d,g)):(x(l),
    l[d]=[])):(x(l),delete D.hcEvents)}}function J(b,d,g,l){g=g||{};if(r.createEvent&&(b.dispatchEvent||b.fireEvent&&b!==a)){var m=r.createEvent("Events");m.initEvent(d,!0,!0);g=c(m,g);b.dispatchEvent?b.dispatchEvent(g):b.fireEvent(d,g)}else if(b.hcEvents){g.target||c(g,{preventDefault:function(){g.defaultPrevented=!0},target:b,type:d});m=[];for(var x=b,D=!1;x.hcEvents;)Object.hasOwnProperty.call(x,"hcEvents")&&x.hcEvents[d]&&(m.length&&(D=!0),m.unshift.apply(m,x.hcEvents[d])),x=Object.getPrototypeOf(x);
    D&&m.sort(function(b,d){return b.order-d.order});m.forEach(function(d){!1===d.fn.call(b,g)&&g.preventDefault()})}l&&!g.defaultPrevented&&l.call(b,g)}var C=a.charts,r=a.doc,l=a.win;(v||(v={})).messages=[];Math.easeInOutSine=function(b){return-.5*(Math.cos(Math.PI*b)-1)};var b=Array.prototype.find?function(b,d){return b.find(d)}:function(b,d){var m,g=b.length;for(m=0;m<g;m++)if(d(b[m],m))return b[m]};B({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(b,d){a[d]=function(m){var g;
    v(32,!1,void 0,(g={},g["Highcharts."+d]="use Array."+b,g));return Array.prototype[b].apply(m,[].slice.call(arguments,1))}});var g,d=function(){var b=Math.random().toString(36).substring(2,9)+"-",d=0;return function(){return"highcharts-"+(g?"":b)+d++}}();l.jQuery&&(l.jQuery.fn.highcharts=function(){var b=[].slice.call(arguments);if(this[0])return b[0]?(new (a[y(b[0])?b.shift():"Chart"])(this[0],b[0],b[1]),this):C[e(this[0],"data-highcharts-chart")]});b={addEvent:function(b,d,g,l){void 0===l&&(l={});
        var m="function"===typeof b&&b.prototype||b;Object.hasOwnProperty.call(m,"hcEvents")||(m.hcEvents={});m=m.hcEvents;a.Point&&b instanceof a.Point&&b.series&&b.series.chart&&(b.series.chart.runTrackerClick=!0);var x=b.addEventListener||a.addEventListenerPolyfill;x&&x.call(b,d,g,a.supportsPassiveEvents?{passive:void 0===l.passive?-1!==d.indexOf("touch"):l.passive,capture:!1}:!1);m[d]||(m[d]=[]);m[d].push({fn:g,order:"number"===typeof l.order?l.order:Infinity});m[d].sort(function(b,d){return b.order-
            d.order});return function(){t(b,d,g)}},arrayMax:function(b){for(var d=b.length,m=b[0];d--;)b[d]>m&&(m=b[d]);return m},arrayMin:function(b){for(var d=b.length,m=b[0];d--;)b[d]<m&&(m=b[d]);return m},attr:e,clamp:function(b,d,g){return b>d?b<g?b:g:d},cleanRecursively:z,clearTimeout:function(b){k(b)&&clearTimeout(b)},correctFloat:w,createElement:function(b,d,g,l,e){b=r.createElement(b);d&&c(b,d);e&&f(b,{padding:"0",border:"none",margin:"0"});g&&f(b,g);l&&l.appendChild(b);return b},css:f,defined:k,destroyObjectProperties:function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               d){B(b,function(m,g){m&&m!==d&&m.destroy&&m.destroy();delete b[g]})},discardElement:function(b){b&&b.parentElement&&b.parentElement.removeChild(b)},erase:function(b,d){for(var m=b.length;m--;)if(b[m]===d){b.splice(m,1);break}},error:v,extend:c,extendClass:function(b,d){var m=function(){};m.prototype=new b;c(m.prototype,d);return m},find:b,fireEvent:J,getMagnitude:function(b){return Math.pow(10,Math.floor(Math.log(b)/Math.LN10))},getNestedProperty:function(b,d){for(b=b.split(".");b.length&&k(d);){var m=
        b.shift();if("undefined"===typeof m||"__proto__"===m)return;d=d[m];if(!k(d)||"function"===typeof d||"number"===typeof d.nodeType||d===l)return}return d},getStyle:p,inArray:function(b,d,g){v(32,!1,void 0,{"Highcharts.inArray":"use Array.indexOf"});return d.indexOf(b,g)},isArray:G,isClass:q,isDOMElement:A,isFunction:function(b){return"function"===typeof b},isNumber:n,isObject:H,isString:y,keys:function(b){v(32,!1,void 0,{"Highcharts.keys":"use Object.keys"});return Object.keys(b)},merge:function(){var b,
        d=arguments,g={},l=function(b,d){"object"!==typeof b&&(b={});B(d,function(m,g){"__proto__"!==g&&"constructor"!==g&&(!H(m,!0)||q(m)||A(m)?b[g]=d[g]:b[g]=l(b[g]||{},m))});return b};!0===d[0]&&(g=d[1],d=Array.prototype.slice.call(d,2));var c=d.length;for(b=0;b<c;b++)g=l(g,d[b]);return g},normalizeTickInterval:function(b,d,g,l,c){var m=b;g=h(g,1);var r=b/g;d||(d=c?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===l&&(1===g?d=d.filter(function(b){return 0===b%1}):.1>=g&&(d=[1/g])));for(l=0;l<d.length&&
    !(m=d[l],c&&m*g>=b||!c&&r<=(d[l]+(d[l+1]||d[l]))/2);l++);return m=w(m*g,-Math.round(Math.log(.001)/Math.LN10))},objectEach:B,offset:function(b){var d=r.documentElement;b=b.parentElement||b.parentNode?b.getBoundingClientRect():{top:0,left:0,width:0,height:0};return{top:b.top+(l.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+(l.pageXOffset||d.scrollLeft)-(d.clientLeft||0),width:b.width,height:b.height}},pad:function(b,d,g){return Array((d||2)+1-String(b).replace("-","").length).join(g||"0")+
        b},pick:h,pInt:F,relativeLength:function(b,d,g){return/%$/.test(b)?d*parseFloat(b)/100+(g||0):parseFloat(b)},removeEvent:t,splat:function(b){return G(b)?b:[b]},stableSort:function(b,d){var g=b.length,m,l;for(l=0;l<g;l++)b[l].safeI=l;b.sort(function(b,g){m=d(b,g);return 0===m?b.safeI-g.safeI:m});for(l=0;l<g;l++)delete b[l].safeI},syncTimeout:function(b,d,g){if(0<d)return setTimeout(b,d,g);b.call(0,g);return-1},timeUnits:{millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,
        year:314496E5},uniqueKey:d,useSerialIds:function(b){return g=h(b,g)},wrap:function(b,d,g){var m=b[d];b[d]=function(){var b=Array.prototype.slice.call(arguments),d=arguments,l=this;l.proceed=function(){m.apply(l,arguments.length?arguments:d)};b.unshift(m);b=g.apply(this,b);l.proceed=null;return b}}};"";return b});M(a,"Core/Chart/ChartDefaults.js",[],function(){return{panning:{enabled:!1,type:"x"},styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,
        10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},zoomBySingleTouch:!1,width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"}});M(a,"Core/Color/Color.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,u){var v=u.isNumber,F=u.merge,y=u.pInt;u=function(){function u(v){this.rgba=[NaN,NaN,NaN,NaN];this.input=v;var A=a.Color;if(A&&A!==u)return new A(v);if(!(this instanceof u))return new u(v);this.init(v)}u.parse=function(a){return a?
    new u(a):u.None};u.prototype.init=function(a){var A;if("object"===typeof a&&"undefined"!==typeof a.stops)this.stops=a.stops.map(function(e){return new u(e[1])});else if("string"===typeof a){this.input=a=u.names[a.toLowerCase()]||a;if("#"===a.charAt(0)){var q=a.length;var n=parseInt(a.substr(1),16);7===q?A=[(n&16711680)>>16,(n&65280)>>8,n&255,1]:4===q&&(A=[(n&3840)>>4|(n&3840)>>8,(n&240)>>4|n&240,(n&15)<<4|n&15,1])}if(!A)for(n=u.parsers.length;n--&&!A;){var k=u.parsers[n];(q=k.regex.exec(a))&&(A=k.parse(q))}}A&&
(this.rgba=A)};u.prototype.get=function(a){var A=this.input,q=this.rgba;if("object"===typeof A&&"undefined"!==typeof this.stops){var n=F(A);n.stops=[].slice.call(n.stops);this.stops.forEach(function(k,e){n.stops[e]=[n.stops[e][0],k.get(a)]});return n}return q&&v(q[0])?"rgb"===a||!a&&1===q[3]?"rgb("+q[0]+","+q[1]+","+q[2]+")":"a"===a?""+q[3]:"rgba("+q.join(",")+")":A};u.prototype.brighten=function(a){var A=this.rgba;if(this.stops)this.stops.forEach(function(n){n.brighten(a)});else if(v(a)&&0!==a)for(var q=
    0;3>q;q++)A[q]+=y(255*a),0>A[q]&&(A[q]=0),255<A[q]&&(A[q]=255);return this};u.prototype.setOpacity=function(a){this.rgba[3]=a;return this};u.prototype.tweenTo=function(a,A){var q=this.rgba,n=a.rgba;if(!v(q[0])||!v(n[0]))return a.input||"none";a=1!==n[3]||1!==q[3];return(a?"rgba(":"rgb(")+Math.round(n[0]+(q[0]-n[0])*(1-A))+","+Math.round(n[1]+(q[1]-n[1])*(1-A))+","+Math.round(n[2]+(q[2]-n[2])*(1-A))+(a?","+(n[3]+(q[3]-n[3])*(1-A)):"")+")"};u.names={white:"#ffffff",black:"#000000"};u.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
    parse:function(a){return[y(a[1]),y(a[2]),y(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[y(a[1]),y(a[2]),y(a[3]),1]}}];u.None=new u("");return u}();"";return u});M(a,"Core/Color/Palettes.js",[],function(){return{colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" ")}});M(a,"Core/Time.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,u){var v=a.win,F=u.defined,y=
    u.error,G=u.extend,H=u.isObject,A=u.merge,q=u.objectEach,n=u.pad,k=u.pick,e=u.splat,c=u.timeUnits,h=a.isSafari&&v.Intl&&v.Intl.DateTimeFormat.prototype.formatRange,f=a.isSafari&&v.Intl&&!v.Intl.DateTimeFormat.prototype.formatRange;u=function(){function w(c){this.options={};this.variableTimezone=this.useUTC=!1;this.Date=v.Date;this.getTimezoneOffset=this.timezoneOffsetFunction();this.update(c)}w.prototype.get=function(c,e){if(this.variableTimezone||this.timezoneOffset){var p=e.getTime(),f=p-this.getTimezoneOffset(e);
    e.setTime(f);c=e["getUTC"+c]();e.setTime(p);return c}return this.useUTC?e["getUTC"+c]():e["get"+c]()};w.prototype.set=function(c,e,f){if(this.variableTimezone||this.timezoneOffset){if("Milliseconds"===c||"Seconds"===c||"Minutes"===c&&0===this.getTimezoneOffset(e)%36E5)return e["setUTC"+c](f);var p=this.getTimezoneOffset(e);p=e.getTime()-p;e.setTime(p);e["setUTC"+c](f);c=this.getTimezoneOffset(e);p=e.getTime()+c;return e.setTime(p)}return this.useUTC||h&&"FullYear"===c?e["setUTC"+c](f):e["set"+c](f)};
    w.prototype.update=function(c){var e=k(c&&c.useUTC,!0);this.options=c=A(!0,this.options||{},c);this.Date=c.Date||v.Date||Date;this.timezoneOffset=(this.useUTC=e)&&c.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();this.variableTimezone=e&&!(!c.getTimezoneOffset&&!c.timezone)};w.prototype.makeTime=function(c,e,h,w,C,r){if(this.useUTC){var l=this.Date.UTC.apply(0,arguments);var b=this.getTimezoneOffset(l);l+=b;var g=this.getTimezoneOffset(l);b!==g?l+=g-b:b-36E5!==this.getTimezoneOffset(l-
        36E5)||f||(l-=36E5)}else l=(new this.Date(c,e,k(h,1),k(w,0),k(C,0),k(r,0))).getTime();return l};w.prototype.timezoneOffsetFunction=function(){var c=this,e=this.options,f=e.getTimezoneOffset,h=e.moment||v.moment;if(!this.useUTC)return function(c){return 6E4*(new Date(c.toString())).getTimezoneOffset()};if(e.timezone){if(h)return function(c){return 6E4*-h.tz(c,e.timezone).utcOffset()};y(25)}return this.useUTC&&f?function(c){return 6E4*f(c.valueOf())}:function(){return 6E4*(c.timezoneOffset||0)}};w.prototype.dateFormat=
        function(c,e,f){if(!F(e)||isNaN(e))return a.defaultOptions.lang&&a.defaultOptions.lang.invalidDate||"";c=k(c,"%Y-%m-%d %H:%M:%S");var p=this,h=new this.Date(e),r=this.get("Hours",h),l=this.get("Day",h),b=this.get("Date",h),g=this.get("Month",h),d=this.get("FullYear",h),m=a.defaultOptions.lang,D=m&&m.weekdays,x=m&&m.shortWeekdays;h=G({a:x?x[l]:D[l].substr(0,3),A:D[l],d:n(b),e:n(b,2," "),w:l,b:m.shortMonths[g],B:m.months[g],m:n(g+1),o:g+1,y:d.toString().substr(2,2),Y:d,H:n(r),k:r,I:n(r%12||12),l:r%
                12||12,M:n(this.get("Minutes",h)),p:12>r?"AM":"PM",P:12>r?"am":"pm",S:n(h.getSeconds()),L:n(Math.floor(e%1E3),3)},a.dateFormats);q(h,function(b,d){for(;-1!==c.indexOf("%"+d);)c=c.replace("%"+d,"function"===typeof b?b.call(p,e):b)});return f?c.substr(0,1).toUpperCase()+c.substr(1):c};w.prototype.resolveDTLFormat=function(c){return H(c,!0)?c:(c=e(c),{main:c[0],from:c[1],to:c[2]})};w.prototype.getTimeTicks=function(e,h,f,w){var p=this,r=[],l={},b=new p.Date(h),g=e.unitRange,d=e.count||1,m;w=k(w,1);if(F(h)){p.set("Milliseconds",
        b,g>=c.second?0:d*Math.floor(p.get("Milliseconds",b)/d));g>=c.second&&p.set("Seconds",b,g>=c.minute?0:d*Math.floor(p.get("Seconds",b)/d));g>=c.minute&&p.set("Minutes",b,g>=c.hour?0:d*Math.floor(p.get("Minutes",b)/d));g>=c.hour&&p.set("Hours",b,g>=c.day?0:d*Math.floor(p.get("Hours",b)/d));g>=c.day&&p.set("Date",b,g>=c.month?1:Math.max(1,d*Math.floor(p.get("Date",b)/d)));if(g>=c.month){p.set("Month",b,g>=c.year?0:d*Math.floor(p.get("Month",b)/d));var D=p.get("FullYear",b)}g>=c.year&&p.set("FullYear",
        b,D-D%d);g===c.week&&(D=p.get("Day",b),p.set("Date",b,p.get("Date",b)-D+w+(D<w?-7:0)));D=p.get("FullYear",b);w=p.get("Month",b);var x=p.get("Date",b),t=p.get("Hours",b);h=b.getTime();!p.variableTimezone&&p.useUTC||!F(f)||(m=f-h>4*c.month||p.getTimezoneOffset(h)!==p.getTimezoneOffset(f));h=b.getTime();for(b=1;h<f;)r.push(h),h=g===c.year?p.makeTime(D+b*d,0):g===c.month?p.makeTime(D,w+b*d):!m||g!==c.day&&g!==c.week?m&&g===c.hour&&1<d?p.makeTime(D,w,x,t+b*d):h+g*d:p.makeTime(D,w,x+b*d*(g===c.day?1:7)),
        b++;r.push(h);g<=c.hour&&1E4>r.length&&r.forEach(function(b){0===b%18E5&&"000000000"===p.dateFormat("%H%M%S%L",b)&&(l[b]="day")})}r.info=G(e,{higherRanks:l,totalRange:g*d});return r};w.prototype.getDateFormat=function(e,h,f,w){var p=this.dateFormat("%m-%d %H:%M:%S.%L",h),r={millisecond:15,second:12,minute:9,hour:6,day:3},l="millisecond";for(b in c){if(e===c.week&&+this.dateFormat("%w",h)===f&&"00:00:00.000"===p.substr(6)){var b="week";break}if(c[b]>e){b=l;break}if(r[b]&&p.substr(r[b])!=="01-01 00:00:00.000".substr(r[b]))break;
        "week"!==b&&(l=b)}if(b)var g=this.resolveDTLFormat(w[b]).main;return g};return w}();"";return u});M(a,"Core/DefaultOptions.js",[a["Core/Chart/ChartDefaults.js"],a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Color/Palettes.js"],a["Core/Time.js"],a["Core/Utilities.js"]],function(a,u,z,F,y,G){u=u.parse;var v=G.merge,A={colors:F.colors,symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
        shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:{Date:void 0,getTimezoneOffset:void 0,timezone:void 0,timezoneOffset:0,useUTC:!0},chart:a,title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},
    caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,className:"highcharts-no-tooltip",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},
        itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:z.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",
            minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerShape:"callout",hideDelay:500,padding:8,shape:"callout",shared:!1,snap:z.isTouchDevice?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:u("#f7f7f7").setOpacity(.85).get(),borderWidth:1,shadow:!0,stickOnContact:!1,
        style:{color:"#333333",cursor:"default",fontSize:"12px",whiteSpace:"nowrap"},useHTML:!1},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};A.chart.styledMode=!1;"";var q=new y(v(A.global,A.time));a={defaultOptions:A,defaultTime:q,getOptions:function(){return A},setOptions:function(n){v(!0,A,n);if(n.time||n.global)z.time?z.time.update(v(A.global,A.time,
        n.global,n.time)):z.time=q;return A}};"";return a});M(a,"Core/Animation/Fx.js",[a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,u,z){var v=a.parse,y=u.win,G=z.isNumber,H=z.objectEach;return function(){function a(a,n,k){this.pos=NaN;this.options=n;this.elem=a;this.prop=k}a.prototype.dSetter=function(){var a=this.paths,n=a&&a[0];a=a&&a[1];var k=this.now||0,e=[];if(1!==k&&n&&a)if(n.length===a.length&&1>k)for(var c=0;c<a.length;c++){for(var h=n[c],f=a[c],w=[],p=0;p<f.length;p++){var B=
    h[p],t=f[p];G(B)&&G(t)&&("A"!==f[0]||4!==p&&5!==p)?w[p]=B+k*(t-B):w[p]=t}e.push(w)}else e=a;else e=this.toD||[];this.elem.attr("d",e,void 0,!0)};a.prototype.update=function(){var a=this.elem,n=this.prop,k=this.now,e=this.options.step;if(this[n+"Setter"])this[n+"Setter"]();else a.attr?a.element&&a.attr(n,k,null,!0):a.style[n]=k+this.unit;e&&e.call(a,k,this)};a.prototype.run=function(q,n,k){var e=this,c=e.options,h=function(c){return h.stopped?!1:e.step(c)},f=y.requestAnimationFrame||function(c){setTimeout(c,
    13)},w=function(){for(var c=0;c<a.timers.length;c++)a.timers[c]()||a.timers.splice(c--,1);a.timers.length&&f(w)};q!==n||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=q,this.end=n,this.unit=k,this.now=this.start,this.pos=0,h.elem=this.elem,h.prop=this.prop,h()&&1===a.timers.push(h)&&f(w)):(delete c.curAnim[this.prop],c.complete&&0===Object.keys(c.curAnim).length&&c.complete.call(this.elem))};a.prototype.step=function(a){var n=+new Date,k=this.options,e=this.elem,c=k.complete,
    h=k.duration,f=k.curAnim;if(e.attr&&!e.element)a=!1;else if(a||n>=h+this.startTime){this.now=this.end;this.pos=1;this.update();var w=f[this.prop]=!0;H(f,function(c){!0!==c&&(w=!1)});w&&c&&c.call(e);a=!1}else this.pos=k.easing((n-this.startTime)/h),this.now=this.start+(this.end-this.start)*this.pos,this.update(),a=!0;return a};a.prototype.initPath=function(a,n,k){function e(c,e){for(;c.length<J;){var l=c[0],b=e[J-c.length];b&&"M"===l[0]&&(c[0]="C"===b[0]?["C",l[1],l[2],l[1],l[2],l[1],l[2]]:["L",l[1],
    l[2]]);c.unshift(l);w&&(l=c.pop(),c.push(c[c.length-1],l))}}function c(c,e){for(;c.length<J;)if(e=c[Math.floor(c.length/p)-1].slice(),"C"===e[0]&&(e[1]=e[5],e[2]=e[6]),w){var l=c[Math.floor(c.length/p)].slice();c.splice(c.length/2,0,e,l)}else c.push(e)}var h=a.startX,f=a.endX;k=k.slice();var w=a.isArea,p=w?2:1;n=n&&n.slice();if(!n)return[k,k];if(h&&f&&f.length){for(a=0;a<h.length;a++)if(h[a]===f[0]){var B=a;break}else if(h[0]===f[f.length-h.length+a]){B=a;var t=!0;break}else if(h[h.length-1]===f[f.length-
h.length+a]){B=h.length-a;break}"undefined"===typeof B&&(n=[])}if(n.length&&G(B)){var J=k.length+B*p;t?(e(n,k),c(k,n)):(e(k,n),c(n,k))}return[n,k]};a.prototype.fillSetter=function(){a.prototype.strokeSetter.apply(this,arguments)};a.prototype.strokeSetter=function(){this.elem.attr(this.prop,v(this.start).tweenTo(v(this.end),this.pos),void 0,!0)};a.timers=[];return a}()});M(a,"Core/Animation/AnimationUtilities.js",[a["Core/Animation/Fx.js"],a["Core/Utilities.js"]],function(a,u){function v(c){return q(c)?
    n({duration:500,defer:0},c):{duration:c?500:0,defer:0}}function F(c,e){for(var h=a.timers.length;h--;)a.timers[h].elem!==c||e&&e!==a.timers[h].prop||(a.timers[h].stopped=!0)}var y=u.defined,G=u.getStyle,H=u.isArray,A=u.isNumber,q=u.isObject,n=u.merge,k=u.objectEach,e=u.pick;return{animate:function(c,e,f){var h,p="",B,t;if(!q(f)){var J=arguments;f={duration:J[2],easing:J[3],complete:J[4]}}A(f.duration)||(f.duration=400);f.easing="function"===typeof f.easing?f.easing:Math[f.easing]||Math.easeInOutSine;
        f.curAnim=n(e);k(e,function(k,r){F(c,r);t=new a(c,f,r);B=void 0;"d"===r&&H(e.d)?(t.paths=t.initPath(c,c.pathArray,e.d),t.toD=e.d,h=0,B=1):c.attr?h=c.attr(r):(h=parseFloat(G(c,r))||0,"opacity"!==r&&(p="px"));B||(B=k);"string"===typeof B&&B.match("px")&&(B=B.replace(/px/g,""));t.run(h,B,p)})},animObject:v,getDeferredAnimation:function(c,e,f){var h=v(e),p=0,a=0;(f?[f]:c.series).forEach(function(c){c=v(c.options.animation);p=e&&y(e.defer)?h.defer:Math.max(p,c.duration+c.defer);a=Math.min(h.duration,c.duration)});
        c.renderer.forExport&&(p=0);return{defer:Math.max(0,p-a),duration:Math.min(p,a)}},setAnimation:function(c,h){h.renderer.globalAnimation=e(c,h.options.chart.animation,!0)},stop:F}});M(a,"Core/Renderer/HTML/AST.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,u){var v=a.SVG_NS,F=u.attr,y=u.createElement,G=u.error,H=u.isFunction,A=u.isString,q=u.objectEach,n=u.splat,k=(u=a.win.trustedTypes)&&H(u.createPolicy)&&u.createPolicy("highcharts",{createHTML:function(c){return c}}),e=k?k.createHTML(""):
    "";try{var c=!!(new DOMParser).parseFromString(e,"text/html")}catch(h){c=!1}H=function(){function h(c){this.nodes="string"===typeof c?this.parseMarkup(c):c}h.filterUserAttributes=function(c){q(c,function(e,p){var f=!0;-1===h.allowedAttributes.indexOf(p)&&(f=!1);-1!==["background","dynsrc","href","lowsrc","src"].indexOf(p)&&(f=A(e)&&h.allowedReferences.some(function(c){return 0===e.indexOf(c)}));f||(G("Highcharts warning: Invalid attribute '"+p+"' in config"),delete c[p])});return c};h.setElementHTML=
    function(c,e){c.innerHTML=h.emptyHTML;e&&(new h(e)).addToDOM(c)};h.prototype.addToDOM=function(c){function e(c,f){var p;n(c).forEach(function(c){var t=c.tagName,r=c.textContent?a.doc.createTextNode(c.textContent):void 0;if(t)if("#text"===t)var l=r;else if(-1!==h.allowedTags.indexOf(t)){t=a.doc.createElementNS("svg"===t?v:f.namespaceURI||v,t);var b=c.attributes||{};q(c,function(c,d){"tagName"!==d&&"attributes"!==d&&"children"!==d&&"textContent"!==d&&(b[d]=c)});F(t,h.filterUserAttributes(b));r&&t.appendChild(r);
    e(c.children||[],t);l=t}else G("Highcharts warning: Invalid tagName "+t+" in config");l&&f.appendChild(l);p=l});return p}return e(this.nodes,c)};h.prototype.parseMarkup=function(e){var h=[];e=e.trim();if(c)e=(new DOMParser).parseFromString(k?k.createHTML(e):e,"text/html");else{var p=y("div");p.innerHTML=e;e={body:p}}var f=function(c,e){var h=c.nodeName.toLowerCase(),r={tagName:h};"#text"===h&&(r.textContent=c.textContent||"");if(h=c.attributes){var l={};[].forEach.call(h,function(b){l[b.name]=b.value});
    r.attributes=l}if(c.childNodes.length){var b=[];[].forEach.call(c.childNodes,function(c){f(c,b)});b.length&&(r.children=b)}e.push(r)};[].forEach.call(e.body.childNodes,function(c){return f(c,h)});return h};h.allowedAttributes="aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength title type valign width x x1 x2 y y1 y2 zIndex".split(" ");
    h.allowedReferences="https:// http:// mailto: / ../ ./ #".split(" ");h.allowedTags="a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" ");h.emptyHTML=e;return h}();"";return H});M(a,"Core/FormatUtilities.js",
    [a["Core/DefaultOptions.js"],a["Core/Utilities.js"]],function(a,u){function v(a,k,e,c){a=+a||0;k=+k;var h=F.lang,f=(a.toString().split(".")[1]||"").split("e")[0].length,w=a.toString().split("e"),p=k;if(-1===k)k=Math.min(f,20);else if(!H(k))k=2;else if(k&&w[1]&&0>w[1]){var B=k+ +w[1];0<=B?(w[0]=(+w[0]).toExponential(B).split("e")[0],k=B):(w[0]=w[0].split(".")[0]||0,a=20>k?(w[0]*Math.pow(10,w[1])).toFixed(k):0,w[1]=0)}B=(Math.abs(w[1]?w[0]:a)+Math.pow(10,-Math.max(k,f)-1)).toFixed(k);f=String(q(B));
        var t=3<f.length?f.length%3:0;e=A(e,h.decimalPoint);c=A(c,h.thousandsSep);a=(0>a?"-":"")+(t?f.substr(0,t)+c:"");a=0>+w[1]&&!p?"0":a+f.substr(t).replace(/(\d{3})(?=\d)/g,"$1"+c);k&&(a+=e+B.slice(-k));w[1]&&0!==+a&&(a+="e"+w[1]);return a}var F=a.defaultOptions,y=a.defaultTime,G=u.getNestedProperty,H=u.isNumber,A=u.pick,q=u.pInt;return{dateFormat:function(a,k,e){return y.dateFormat(a,k,e)},format:function(a,k,e){var c="{",h=!1,f=/f$/,w=/\.([0-9])/,p=F.lang,B=e&&e.time||y;e=e&&e.numberFormatter||v;for(var t=
            [];a;){var J=a.indexOf(c);if(-1===J)break;var C=a.slice(0,J);if(h){C=C.split(":");c=G(C.shift()||"",k);if(C.length&&"number"===typeof c)if(C=C.join(":"),f.test(C)){var r=parseInt((C.match(w)||["","-1"])[1],10);null!==c&&(c=e(c,r,p.decimalPoint,-1<C.indexOf(",")?p.thousandsSep:""))}else c=B.dateFormat(C,c);t.push(c)}else t.push(C);a=a.slice(J+1);c=(h=!h)?"}":"{"}t.push(a);return t.join("")},numberFormat:v}});M(a,"Core/Renderer/RendererUtilities.js",[a["Core/Utilities.js"]],function(a){var v=a.clamp,
    z=a.pick,F=a.stableSort,y;(function(a){function u(a,q,n){var k=a,e=k.reducedLen||q,c=function(c,e){return(e.rank||0)-(c.rank||0)},h=function(c,e){return c.target-e.target},f,w=!0,p=[],B=0;for(f=a.length;f--;)B+=a[f].size;if(B>e){F(a,c);for(B=f=0;B<=e;)B+=a[f].size,f++;p=a.splice(f-1,a.length)}F(a,h);for(a=a.map(function(c){return{size:c.size,targets:[c.target],align:z(c.align,.5)}});w;){for(f=a.length;f--;)e=a[f],c=(Math.min.apply(0,e.targets)+Math.max.apply(0,e.targets))/2,e.pos=v(c-e.size*e.align,
    0,q-e.size);f=a.length;for(w=!1;f--;)0<f&&a[f-1].pos+a[f-1].size>a[f].pos&&(a[f-1].size+=a[f].size,a[f-1].targets=a[f-1].targets.concat(a[f].targets),a[f-1].align=.5,a[f-1].pos+a[f-1].size>q&&(a[f-1].pos=q-a[f-1].size),a.splice(f,1),w=!0)}k.push.apply(k,p);f=0;a.some(function(c){var e=0;return(c.targets||[]).some(function(){k[f].pos=c.pos+e;if("undefined"!==typeof n&&Math.abs(k[f].pos-k[f].target)>n)return k.slice(0,f+1).forEach(function(c){return delete c.pos}),k.reducedLen=(k.reducedLen||q)-.1*
    q,k.reducedLen>.1*q&&u(k,q,n),!0;e+=k[f].size;f++;return!1})});F(k,h);return k}a.distribute=u})(y||(y={}));return y});M(a,"Core/Renderer/SVG/SVGElement.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Renderer/HTML/AST.js"],a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,u,z,F,y){var v=a.animate,H=a.animObject,A=a.stop,q=F.deg2rad,n=F.doc,k=F.noop,e=F.svg,c=F.SVG_NS,h=F.win,f=y.addEvent,w=y.attr,p=y.createElement,B=y.css,t=y.defined,J=y.erase,C=y.extend,r=y.fireEvent,
    l=y.isArray,b=y.isFunction,g=y.isNumber,d=y.isString,m=y.merge,D=y.objectEach,x=y.pick,I=y.pInt,P=y.syncTimeout,S=y.uniqueKey;a=function(){function a(){this.element=void 0;this.onEvents={};this.opacity=1;this.renderer=void 0;this.SVG_NS=c;this.symbolCustomAttribs="x y width height r start end innerR anchorX anchorY rounded".split(" ")}a.prototype._defaultGetter=function(b){b=x(this[b+"Value"],this[b],this.element?this.element.getAttribute(b):null,0);/^[\-0-9\.]+$/.test(b)&&(b=parseFloat(b));return b};
    a.prototype._defaultSetter=function(b,d,c){c.setAttribute(d,b)};a.prototype.add=function(b){var d=this.renderer,c=this.element;b&&(this.parentGroup=b);this.parentInverted=b&&b.inverted;"undefined"!==typeof this.textStr&&"text"===this.element.nodeName&&d.buildText(this);this.added=!0;if(!b||b.handleZ||this.zIndex)var g=this.zIndexSetter();g||(b?b.element:d.box).appendChild(c);if(this.onAdd)this.onAdd();return this};a.prototype.addClass=function(b,d){var c=d?"":this.attr("class")||"";b=(b||"").split(/ /g).reduce(function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 d){-1===c.indexOf(d)&&b.push(d);return b},c?[c]:[]).join(" ");b!==c&&this.attr("class",b);return this};a.prototype.afterSetters=function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)};a.prototype.align=function(b,c,g){var m={},L=this.renderer,e=L.alignedObjects,l,a,E;if(b){if(this.alignOptions=b,this.alignByTranslate=c,!g||d(g))this.alignTo=l=g||"renderer",J(e,this),e.push(this),g=void 0}else b=this.alignOptions,c=this.alignByTranslate,l=this.alignTo;g=x(g,L[l],"scrollablePlotBox"===
    l?L.plotBox:void 0,L);l=b.align;var r=b.verticalAlign;L=(g.x||0)+(b.x||0);e=(g.y||0)+(b.y||0);"right"===l?a=1:"center"===l&&(a=2);a&&(L+=(g.width-(b.width||0))/a);m[c?"translateX":"x"]=Math.round(L);"bottom"===r?E=1:"middle"===r&&(E=2);E&&(e+=(g.height-(b.height||0))/E);m[c?"translateY":"y"]=Math.round(e);this[this.placed?"animate":"attr"](m);this.placed=!0;this.alignAttr=m;return this};a.prototype.alignSetter=function(b){var d={left:"start",center:"middle",right:"end"};d[b]&&(this.alignValue=b,this.element.setAttribute("text-anchor",
        d[b]))};a.prototype.animate=function(b,d,c){var g=this,m=H(x(d,this.renderer.globalAnimation,!0));d=m.defer;x(n.hidden,n.msHidden,n.webkitHidden,!1)&&(m.duration=0);0!==m.duration?(c&&(m.complete=c),P(function(){g.element&&v(g,b,m)},d)):(this.attr(b,void 0,c),D(b,function(b,d){m.step&&m.step.call(this,b,{prop:d,pos:1,elem:this})},this));return this};a.prototype.applyTextOutline=function(b){var d=this.element;-1!==b.indexOf("contrast")&&(b=b.replace(/contrast/g,this.renderer.getContrast(d.style.fill)));
        var g=b.split(" ");b=g[g.length-1];if((g=g[0])&&"none"!==g&&F.svg){this.fakeTS=!0;this.ySetter=this.xSetter;g=g.replace(/(^[\d\.]+)(.*?)$/g,function(b,d,c){return 2*Number(d)+c});this.removeTextOutline();var m=n.createElementNS(c,"tspan");w(m,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":g,"stroke-linejoin":"round"});[].forEach.call(d.childNodes,function(b){var d=b.cloneNode(!0);d.removeAttribute&&["fill","stroke","stroke-width","stroke"].forEach(function(b){return d.removeAttribute(b)});
            m.appendChild(d)});var e=n.createElementNS(c,"tspan");e.textContent="\u200b";["x","y"].forEach(function(b){var c=d.getAttribute(b);c&&e.setAttribute(b,c)});m.appendChild(e);d.insertBefore(m,d.firstChild)}};a.prototype.attr=function(b,d,c,g){var m=this.element,e=this.symbolCustomAttribs,L,l=this,E,a;if("string"===typeof b&&"undefined"!==typeof d){var K=b;b={};b[K]=d}"string"===typeof b?l=(this[b+"Getter"]||this._defaultGetter).call(this,b,m):(D(b,function(d,c){E=!1;g||A(this,c);this.symbolName&&-1!==
    e.indexOf(c)&&(L||(this.symbolAttr(b),L=!0),E=!0);!this.rotation||"x"!==c&&"y"!==c||(this.doTransform=!0);E||(a=this[c+"Setter"]||this._defaultSetter,a.call(this,d,c,m),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c)&&this.updateShadows(c,d,a))},this),this.afterSetters());c&&c.call(this);return l};a.prototype.clip=function(b){return this.attr("clip-path",b?"url("+this.renderer.url+"#"+b.id+")":"none")};a.prototype.crisp=function(b,d){d=d||b.strokeWidth||
        0;var c=Math.round(d)%2/2;b.x=Math.floor(b.x||this.x||0)+c;b.y=Math.floor(b.y||this.y||0)+c;b.width=Math.floor((b.width||this.width||0)-2*c);b.height=Math.floor((b.height||this.height||0)-2*c);t(b.strokeWidth)&&(b.strokeWidth=d);return b};a.prototype.complexColor=function(b,d,c){var g=this.renderer,e,L,a,h,E,x,p,f,k,w,B=[],I;r(this.renderer,"complexColor",{args:arguments},function(){b.radialGradient?L="radialGradient":b.linearGradient&&(L="linearGradient");if(L){a=b[L];E=g.gradients;x=b.stops;k=c.radialReference;
        l(a)&&(b[L]=a={x1:a[0],y1:a[1],x2:a[2],y2:a[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===L&&k&&!t(a.gradientUnits)&&(h=a,a=m(a,g.getRadialAttr(k,h),{gradientUnits:"userSpaceOnUse"}));D(a,function(b,d){"id"!==d&&B.push(d,b)});D(x,function(b){B.push(b)});B=B.join(",");if(E[B])w=E[B].attr("id");else{a.id=w=S();var K=E[B]=g.createElement(L).attr(a).add(g.defs);K.radAttr=h;K.stops=[];x.forEach(function(b){0===b[1].indexOf("rgba")?(e=z.parse(b[1]),p=e.get("rgb"),f=e.get("a")):(p=b[1],f=1);b=g.createElement("stop").attr({offset:b[0],
            "stop-color":p,"stop-opacity":f}).add(K);K.stops.push(b)})}I="url("+g.url+"#"+w+")";c.setAttribute(d,I);c.gradient=B;b.toString=function(){return I}}})};a.prototype.css=function(b){var d=this.styles,c={},g=this.element,m=["textOutline","textOverflow","width"],a="",l=!d;b&&b.color&&(b.fill=b.color);d&&D(b,function(b,g){d&&d[g]!==b&&(c[g]=b,l=!0)});if(l){d&&(b=C(d,c));if(b)if(null===b.width||"auto"===b.width)delete this.textWidth;else if("text"===g.nodeName.toLowerCase()&&b.width)var r=this.textWidth=
        I(b.width);this.styles=b;r&&!e&&this.renderer.forExport&&delete b.width;if(g.namespaceURI===this.SVG_NS){var E=function(b,d){return"-"+d.toLowerCase()};D(b,function(b,d){-1===m.indexOf(d)&&(a+=d.replace(/([A-Z])/g,E)+":"+b+";")});a&&w(g,"style",a)}else B(g,b);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),b&&b.textOutline&&this.applyTextOutline(b.textOutline))}return this};a.prototype.dashstyleSetter=function(b){var d=this["stroke-width"];"inherit"===d&&(d=1);if(b=b&&b.toLowerCase()){var c=
        b.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=c.length;b--;)c[b]=""+I(c[b])*x(d,NaN);b=c.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",b)}};a.prototype.destroy=function(){var b=this,d=b.element||{},c=b.renderer,g=d.ownerSVGElement,m=c.isSVG&&"SPAN"===d.nodeName&&b.parentGroup||
        void 0;d.onclick=d.onmouseout=d.onmouseover=d.onmousemove=d.point=null;A(b);if(b.clipPath&&g){var e=b.clipPath;[].forEach.call(g.querySelectorAll("[clip-path],[CLIP-PATH]"),function(b){-1<b.getAttribute("clip-path").indexOf(e.element.id)&&b.removeAttribute("clip-path")});b.clipPath=e.destroy()}if(b.stops){for(g=0;g<b.stops.length;g++)b.stops[g].destroy();b.stops.length=0;b.stops=void 0}b.safeRemoveChild(d);for(c.styledMode||b.destroyShadows();m&&m.div&&0===m.div.childNodes.length;)d=m.parentGroup,
        b.safeRemoveChild(m.div),delete m.div,m=d;b.alignTo&&J(c.alignedObjects,b);D(b,function(d,c){b[c]&&b[c].parentGroup===b&&b[c].destroy&&b[c].destroy();delete b[c]})};a.prototype.destroyShadows=function(){(this.shadows||[]).forEach(function(b){this.safeRemoveChild(b)},this);this.shadows=void 0};a.prototype.destroyTextPath=function(b,d){var c=b.getElementsByTagName("text")[0];if(c){if(c.removeAttribute("dx"),c.removeAttribute("dy"),d.element.setAttribute("id",""),this.textPathWrapper&&c.getElementsByTagName("textPath").length){for(b=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  this.textPathWrapper.element.childNodes;b.length;)c.appendChild(b[0]);c.removeChild(this.textPathWrapper.element)}}else if(b.getAttribute("dx")||b.getAttribute("dy"))b.removeAttribute("dx"),b.removeAttribute("dy");this.textPathWrapper&&(this.textPathWrapper=this.textPathWrapper.destroy())};a.prototype.dSetter=function(b,d,c){l(b)&&("string"===typeof b[0]&&(b=this.renderer.pathToSegments(b)),this.pathArray=b,b=b.reduce(function(b,d,c){return d&&d.join?(c?b+" ":"")+d.join(" "):(d||"").toString()},""));
        /(NaN| {2}|^$)/.test(b)&&(b="M 0 0");this[d]!==b&&(c.setAttribute(d,b),this[d]=b)};a.prototype.fadeOut=function(b){var d=this;d.animate({opacity:0},{duration:x(b,150),complete:function(){d.attr({y:-9999}).hide()}})};a.prototype.fillSetter=function(b,d,c){"string"===typeof b?c.setAttribute(d,b):b&&this.complexColor(b,d,c)};a.prototype.getBBox=function(d,c){var g=this.renderer,m=this.element,e=this.styles,l=this.textStr,r=g.cache,h=g.cacheKeys,E=m.namespaceURI===this.SVG_NS;c=x(c,this.rotation,0);var p=
        g.styledMode?m&&a.prototype.getStyle.call(m,"font-size"):e&&e.fontSize,f;if(t(l)){var D=l.toString();-1===D.indexOf("<")&&(D=D.replace(/[0-9]/g,"0"));D+=["",c,p,this.textWidth,e&&e.textOverflow,e&&e.fontWeight].join()}D&&!d&&(f=r[D]);if(!f){if(E||g.forExport){try{var k=this.fakeTS&&function(b){var d=m.querySelector(".highcharts-text-outline");d&&B(d,{display:b})};b(k)&&k("none");f=m.getBBox?C({},m.getBBox()):{width:m.offsetWidth,height:m.offsetHeight};b(k)&&k("")}catch(X){""}if(!f||0>f.width)f={width:0,
        height:0}}else f=this.htmlGetBBox();g.isSVG&&(d=f.width,g=f.height,E&&(f.height=g={"11px,17":14,"13px,20":16}[(p||"")+","+Math.round(g)]||g),c&&(E=c*q,f.width=Math.abs(g*Math.sin(E))+Math.abs(d*Math.cos(E)),f.height=Math.abs(g*Math.cos(E))+Math.abs(d*Math.sin(E))));if(D&&(""===l||0<f.height)){for(;250<h.length;)delete r[h.shift()];r[D]||h.push(D);r[D]=f}}return f};a.prototype.getStyle=function(b){return h.getComputedStyle(this.element||this,"").getPropertyValue(b)};a.prototype.hasClass=function(b){return-1!==
        (""+this.attr("class")).split(" ").indexOf(b)};a.prototype.hide=function(b){b?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this};a.prototype.htmlGetBBox=function(){return{height:0,width:0,x:0,y:0}};a.prototype.init=function(b,d){this.element="span"===d?p(d):n.createElementNS(this.SVG_NS,d);this.renderer=b;r(this,"afterInit")};a.prototype.invert=function(b){this.inverted=b;this.updateTransform();return this};a.prototype.on=function(b,d){var c=this.onEvents;if(c[b])c[b]();c[b]=f(this.element,
        b,d);return this};a.prototype.opacitySetter=function(b,d,c){this.opacity=b=Number(Number(b).toFixed(3));c.setAttribute(d,b)};a.prototype.removeClass=function(b){return this.attr("class",(""+this.attr("class")).replace(d(b)?new RegExp("(^| )"+b+"( |$)"):b," ").replace(/ +/g," ").trim())};a.prototype.removeTextOutline=function(){var b=this.element.querySelector("tspan.highcharts-text-outline");b&&this.safeRemoveChild(b)};a.prototype.safeRemoveChild=function(b){var d=b.parentNode;d&&d.removeChild(b)};
    a.prototype.setRadialReference=function(b){var d=this.element.gradient&&this.renderer.gradients[this.element.gradient];this.element.radialReference=b;d&&d.radAttr&&d.animate(this.renderer.getRadialAttr(b,d.radAttr));return this};a.prototype.setTextPath=function(b,d){var c=this.element,e=this.text?this.text.element:c,a={textAnchor:"text-anchor"},l=!1,r=this.textPathWrapper,x=!r;d=m(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},d);var E=u.filterUserAttributes(d.attributes);
        if(b&&d&&d.enabled){r&&null===r.element.parentNode?(x=!0,r=r.destroy()):r&&this.removeTextOutline.call(r.parentGroup);this.options&&this.options.padding&&(E.dx=-this.options.padding);r||(this.textPathWrapper=r=this.renderer.createElement("textPath"),l=!0);var p=r.element;(d=b.element.getAttribute("id"))||b.element.setAttribute("id",d=S());if(x)for(e.setAttribute("y",0),g(E.dx)&&e.setAttribute("x",-E.dx),b=[].slice.call(e.childNodes),x=0;x<b.length;x++){var f=b[x];f.nodeType!==h.Node.TEXT_NODE&&"tspan"!==
        f.nodeName||p.appendChild(f)}l&&r&&r.add({element:e});p.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+d);t(E.dy)&&(p.parentNode.setAttribute("dy",E.dy),delete E.dy);t(E.dx)&&(p.parentNode.setAttribute("dx",E.dx),delete E.dx);D(E,function(b,d){p.setAttribute(a[d]||d,b)});c.removeAttribute("transform");this.removeTextOutline.call(r);this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=this.updateTransform=k}else r&&(delete this.updateTransform,
            delete this.applyTextOutline,this.destroyTextPath(c,b),this.updateTransform(),this.options&&this.options.rotation&&this.applyTextOutline(this.options.style.textOutline));return this};a.prototype.shadow=function(b,d,c){var g=[],m=this.element,e=this.oldShadowOptions,a={color:"#000000",offsetX:this.parentInverted?-1:1,offsetY:this.parentInverted?-1:1,opacity:.15,width:3},l=!1,E;!0===b?E=a:"object"===typeof b&&(E=C(a,b));E&&(E&&e&&D(E,function(b,d){b!==e[d]&&(l=!0)}),l&&this.destroyShadows(),this.oldShadowOptions=
        E);if(!E)this.destroyShadows();else if(!this.shadows){var L=E.opacity/E.width;var r=this.parentInverted?"translate("+E.offsetY+", "+E.offsetX+")":"translate("+E.offsetX+", "+E.offsetY+")";for(a=1;a<=E.width;a++){var h=m.cloneNode(!1);var x=2*E.width+1-2*a;w(h,{stroke:b.color||"#000000","stroke-opacity":L*a,"stroke-width":x,transform:r,fill:"none"});h.setAttribute("class",(h.getAttribute("class")||"")+" highcharts-shadow");c&&(w(h,"height",Math.max(w(h,"height")-x,0)),h.cutHeight=x);d?d.element.appendChild(h):
        m.parentNode&&m.parentNode.insertBefore(h,m);g.push(h)}this.shadows=g}return this};a.prototype.show=function(b){return this.attr({visibility:b?"inherit":"visible"})};a.prototype.strokeSetter=function(b,d,c){this[d]=b;this.stroke&&this["stroke-width"]?(a.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===d&&0===b&&this.hasStroke?(c.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&
        (c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)};a.prototype.strokeWidth=function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var b=this.getStyle("stroke-width"),d=0;if(b.indexOf("px")===b.length-2)d=I(b);else if(""!==b){var g=n.createElementNS(c,"rect");w(g,{width:b,"stroke-width":0});this.element.parentNode.appendChild(g);d=g.getBBox().width;g.parentNode.removeChild(g)}return d};a.prototype.symbolAttr=function(b){var d=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(c){d[c]=
        x(b[c],d[c])});d.attr({d:d.renderer.symbols[d.symbolName](d.x,d.y,d.width,d.height,d)})};a.prototype.textSetter=function(b){b!==this.textStr&&(delete this.textPxLength,this.textStr=b,this.added&&this.renderer.buildText(this))};a.prototype.titleSetter=function(b){var d=this.element,c=d.getElementsByTagName("title")[0]||n.createElementNS(this.SVG_NS,"title");d.insertBefore?d.insertBefore(c,d.firstChild):d.appendChild(c);c.textContent=String(x(b,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,
        ">")};a.prototype.toFront=function(){var b=this.element;b.parentNode.appendChild(b);return this};a.prototype.translate=function(b,d){return this.attr({translateX:b,translateY:d})};a.prototype.updateShadows=function(b,d,c){var g=this.shadows;if(g)for(var m=g.length;m--;)c.call(g[m],"height"===b?Math.max(d-(g[m].cutHeight||0),0):"d"===b?this.d:d,b,g[m])};a.prototype.updateTransform=function(){var b=this.scaleX,d=this.scaleY,c=this.inverted,g=this.rotation,m=this.matrix,e=this.element,a=this.translateX||
        0,l=this.translateY||0;c&&(a+=this.width,l+=this.height);a=["translate("+a+","+l+")"];t(m)&&a.push("matrix("+m.join(",")+")");c?a.push("rotate(90) scale(-1,1)"):g&&a.push("rotate("+g+" "+x(this.rotationOriginX,e.getAttribute("x"),0)+" "+x(this.rotationOriginY,e.getAttribute("y")||0)+")");(t(b)||t(d))&&a.push("scale("+x(b,1)+" "+x(d,1)+")");a.length&&e.setAttribute("transform",a.join(" "))};a.prototype.visibilitySetter=function(b,d,c){"inherit"===b?c.removeAttribute(d):this[d]!==b&&c.setAttribute(d,
        b);this[d]=b};a.prototype.xGetter=function(b){"circle"===this.element.nodeName&&("x"===b?b="cx":"y"===b&&(b="cy"));return this._defaultGetter(b)};a.prototype.zIndexSetter=function(b,d){var c=this.renderer,g=this.parentGroup,m=(g||c).element||c.box,e=this.element;c=m===c.box;var a=!1;var l=this.added;var E;t(b)?(e.setAttribute("data-z-index",b),b=+b,this[d]===b&&(l=!1)):t(this[d])&&e.removeAttribute("data-z-index");this[d]=b;if(l){(b=this.zIndex)&&g&&(g.handleZ=!0);d=m.childNodes;for(E=d.length-1;0<=
    E&&!a;E--){g=d[E];l=g.getAttribute("data-z-index");var r=!t(l);if(g!==e)if(0>b&&r&&!c&&!E)m.insertBefore(e,d[E]),a=!0;else if(I(l)<=b||r&&(!t(b)||0<=b))m.insertBefore(e,d[E+1]||null),a=!0}a||(m.insertBefore(e,d[c?3:0]||null),a=!0)}return a};return a}();a.prototype["stroke-widthSetter"]=a.prototype.strokeSetter;a.prototype.yGetter=a.prototype.xGetter;a.prototype.matrixSetter=a.prototype.rotationOriginXSetter=a.prototype.rotationOriginYSetter=a.prototype.rotationSetter=a.prototype.scaleXSetter=a.prototype.scaleYSetter=
    a.prototype.translateXSetter=a.prototype.translateYSetter=a.prototype.verticalAlignSetter=function(b,d){this[d]=b;this.doTransform=!0};"";return a});M(a,"Core/Renderer/RendererRegistry.js",[a["Core/Globals.js"]],function(a){var v;(function(v){v.rendererTypes={};var u;v.getRendererType=function(a){void 0===a&&(a=u);return v.rendererTypes[a]||v.rendererTypes[u]};v.registerRendererType=function(y,z,H){v.rendererTypes[y]=z;if(!u||H)u=y,a.Renderer=z}})(v||(v={}));return v});M(a,"Core/Renderer/SVG/SVGLabel.js",
    [a["Core/Renderer/SVG/SVGElement.js"],a["Core/Utilities.js"]],function(a,u){var v=this&&this.__extends||function(){var a=function(k,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,e){c.__proto__=e}||function(c,e){for(var a in e)e.hasOwnProperty(a)&&(c[a]=e[a])};return a(k,e)};return function(k,e){function c(){this.constructor=k}a(k,e);k.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}(),F=u.defined,y=u.extend,G=u.isNumber,H=u.merge,A=u.pick,q=u.removeEvent;
        return function(n){function k(e,c,a,f,w,p,B,t,J,C){var r=n.call(this)||this;r.paddingLeftSetter=r.paddingSetter;r.paddingRightSetter=r.paddingSetter;r.init(e,"g");r.textStr=c;r.x=a;r.y=f;r.anchorX=p;r.anchorY=B;r.baseline=J;r.className=C;r.addClass("button"===C?"highcharts-no-tooltip":"highcharts-label");C&&r.addClass("highcharts-"+C);r.text=e.text(void 0,0,0,t).attr({zIndex:1});var l;"string"===typeof w&&((l=/^url\((.*?)\)$/.test(w))||r.renderer.symbols[w])&&(r.symbolKey=w);r.bBox=k.emptyBBox;r.padding=
            3;r.baselineOffset=0;r.needsBox=e.styledMode||l;r.deferredAttr={};r.alignFactor=0;return r}v(k,n);k.prototype.alignSetter=function(e){e={left:0,center:.5,right:1}[e];e!==this.alignFactor&&(this.alignFactor=e,this.bBox&&G(this.xSetting)&&this.attr({x:this.xSetting}))};k.prototype.anchorXSetter=function(e,c){this.anchorX=e;this.boxAttr(c,Math.round(e)-this.getCrispAdjust()-this.xSetting)};k.prototype.anchorYSetter=function(e,c){this.anchorY=e;this.boxAttr(c,e-this.ySetting)};k.prototype.boxAttr=function(e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       c){this.box?this.box.attr(e,c):this.deferredAttr[e]=c};k.prototype.css=function(e){if(e){var c={};e=H(e);k.textProps.forEach(function(a){"undefined"!==typeof e[a]&&(c[a]=e[a],delete e[a])});this.text.css(c);var h="width"in c;"fontSize"in c||"fontWeight"in c?this.updateTextPadding():h&&this.updateBoxSize()}return a.prototype.css.call(this,e)};k.prototype.destroy=function(){q(this.element,"mouseenter");q(this.element,"mouseleave");this.text&&this.text.destroy();this.box&&(this.box=this.box.destroy());
            a.prototype.destroy.call(this)};k.prototype.fillSetter=function(e,c){e&&(this.needsBox=!0);this.fill=e;this.boxAttr(c,e)};k.prototype.getBBox=function(){this.textStr&&0===this.bBox.width&&0===this.bBox.height&&this.updateBoxSize();var e=this.padding,c=A(this.paddingLeft,e);return{width:this.width,height:this.height,x:this.bBox.x-c,y:this.bBox.y-e}};k.prototype.getCrispAdjust=function(){return this.renderer.styledMode&&this.box?this.box.strokeWidth()%2/2:(this["stroke-width"]?parseInt(this["stroke-width"],
            10):0)%2/2};k.prototype.heightSetter=function(e){this.heightSetting=e};k.prototype.onAdd=function(){var e=this.textStr;this.text.add(this);this.attr({text:F(e)?e:"",x:this.x,y:this.y});this.box&&F(this.anchorX)&&this.attr({anchorX:this.anchorX,anchorY:this.anchorY})};k.prototype.paddingSetter=function(e,c){G(e)?e!==this[c]&&(this[c]=e,this.updateTextPadding()):this[c]=void 0};k.prototype.rSetter=function(e,c){this.boxAttr(c,e)};k.prototype.shadow=function(e){e&&!this.renderer.styledMode&&(this.updateBoxSize(),
        this.box&&this.box.shadow(e));return this};k.prototype.strokeSetter=function(e,c){this.stroke=e;this.boxAttr(c,e)};k.prototype["stroke-widthSetter"]=function(e,c){e&&(this.needsBox=!0);this["stroke-width"]=e;this.boxAttr(c,e)};k.prototype["text-alignSetter"]=function(e){this.textAlign=e};k.prototype.textSetter=function(e){"undefined"!==typeof e&&this.text.attr({text:e});this.updateTextPadding()};k.prototype.updateBoxSize=function(){var e=this.text.element.style,c={},a=this.padding,f=this.bBox=G(this.widthSetting)&&
        G(this.heightSetting)&&!this.textAlign||!F(this.text.textStr)?k.emptyBBox:this.text.getBBox();this.width=this.getPaddedWidth();this.height=(this.heightSetting||f.height||0)+2*a;e=this.renderer.fontMetrics(e&&e.fontSize,this.text);this.baselineOffset=a+Math.min((this.text.firstLineMetrics||e).b,f.height||Infinity);this.heightSetting&&(this.baselineOffset+=(this.heightSetting-e.h)/2);this.needsBox&&(this.box||(a=this.box=this.symbolKey?this.renderer.symbol(this.symbolKey):this.renderer.rect(),a.addClass(("button"===
        this.className?"":"highcharts-label-box")+(this.className?" highcharts-"+this.className+"-box":"")),a.add(this)),a=this.getCrispAdjust(),c.x=a,c.y=(this.baseline?-this.baselineOffset:0)+a,c.width=Math.round(this.width),c.height=Math.round(this.height),this.box.attr(y(c,this.deferredAttr)),this.deferredAttr={})};k.prototype.updateTextPadding=function(){var a=this.text;this.updateBoxSize();var c=this.baseline?0:this.baselineOffset,h=A(this.paddingLeft,this.padding);F(this.widthSetting)&&this.bBox&&
        ("center"===this.textAlign||"right"===this.textAlign)&&(h+={center:.5,right:1}[this.textAlign]*(this.widthSetting-this.bBox.width));if(h!==a.x||c!==a.y)a.attr("x",h),a.hasBoxWidthChanged&&(this.bBox=a.getBBox(!0)),"undefined"!==typeof c&&a.attr("y",c);a.x=h;a.y=c};k.prototype.widthSetter=function(a){this.widthSetting=G(a)?a:void 0};k.prototype.getPaddedWidth=function(){var a=this.padding,c=A(this.paddingLeft,a);a=A(this.paddingRight,a);return(this.widthSetting||this.bBox.width||0)+c+a};k.prototype.xSetter=
            function(a){this.x=a;this.alignFactor&&(a-=this.alignFactor*this.getPaddedWidth(),this["forceAnimate:x"]=!0);this.xSetting=Math.round(a);this.attr("translateX",this.xSetting)};k.prototype.ySetter=function(a){this.ySetting=this.y=Math.round(a);this.attr("translateY",this.ySetting)};k.emptyBBox={width:0,height:0,x:0,y:0};k.textProps="color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");return k}(a)});M(a,"Core/Renderer/SVG/Symbols.js",
    [a["Core/Utilities.js"]],function(a){function v(a,q,n,k,e){var c=[];if(e){var h=e.start||0,f=H(e.r,n);n=H(e.r,k||n);var w=(e.end||0)-.001;k=e.innerR;var p=H(e.open,.001>Math.abs((e.end||0)-h-2*Math.PI)),B=Math.cos(h),t=Math.sin(h),J=Math.cos(w),C=Math.sin(w);h=H(e.longArc,.001>w-h-Math.PI?0:1);c.push(["M",a+f*B,q+n*t],["A",f,n,0,h,H(e.clockwise,1),a+f*J,q+n*C]);y(k)&&c.push(p?["M",a+k*J,q+k*C]:["L",a+k*J,q+k*C],["A",k,k,0,h,y(e.clockwise)?1-e.clockwise:0,a+k*B,q+k*t]);p||c.push(["Z"])}return c}function z(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  q,n,k,e){return e&&e.r?F(a,q,n,k,e):[["M",a,q],["L",a+n,q],["L",a+n,q+k],["L",a,q+k],["Z"]]}function F(a,q,n,k,e){e=e&&e.r||0;return[["M",a+e,q],["L",a+n-e,q],["C",a+n,q,a+n,q,a+n,q+e],["L",a+n,q+k-e],["C",a+n,q+k,a+n,q+k,a+n-e,q+k],["L",a+e,q+k],["C",a,q+k,a,q+k,a,q+k-e],["L",a,q+e],["C",a,q,a,q,a+e,q]]}var y=a.defined,G=a.isNumber,H=a.pick;return{arc:v,callout:function(a,q,n,k,e){var c=Math.min(e&&e.r||0,n,k),h=c+6,f=e&&e.anchorX;e=e&&e.anchorY||0;var w=F(a,q,n,k,{r:c});if(!G(f))return w;a+f>=n?
            e>q+h&&e<q+k-h?w.splice(3,1,["L",a+n,e-6],["L",a+n+6,e],["L",a+n,e+6],["L",a+n,q+k-c]):w.splice(3,1,["L",a+n,k/2],["L",f,e],["L",a+n,k/2],["L",a+n,q+k-c]):0>=a+f?e>q+h&&e<q+k-h?w.splice(7,1,["L",a,e+6],["L",a-6,e],["L",a,e-6],["L",a,q+c]):w.splice(7,1,["L",a,k/2],["L",f,e],["L",a,k/2],["L",a,q+c]):e&&e>k&&f>a+h&&f<a+n-h?w.splice(5,1,["L",f+6,q+k],["L",f,q+k+6],["L",f-6,q+k],["L",a+c,q+k]):e&&0>e&&f>a+h&&f<a+n-h&&w.splice(1,1,["L",f-6,q],["L",f,q-6],["L",f+6,q],["L",n-c,q]);return w},circle:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    q,n,k){return v(a+n/2,q+k/2,n/2,k/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},diamond:function(a,q,n,k){return[["M",a+n/2,q],["L",a+n,q+k/2],["L",a+n/2,q+k],["L",a,q+k/2],["Z"]]},rect:z,roundedRect:F,square:z,triangle:function(a,q,n,k){return[["M",a+n/2,q],["L",a+n,q+k],["L",a,q+k],["Z"]]},"triangle-down":function(a,q,n,k){return[["M",a,q],["L",a+n,q],["L",a+n/2,q+k],["Z"]]}}});M(a,"Core/Renderer/SVG/TextBuilder.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 u,z){var v=u.doc,y=u.SVG_NS,G=u.win,H=z.attr,A=z.isString,q=z.objectEach,n=z.pick;return function(){function k(a){var c=a.styles;this.renderer=a.renderer;this.svgElement=a;this.width=a.textWidth;this.textLineHeight=c&&c.lineHeight;this.textOutline=c&&c.textOutline;this.ellipsis=!(!c||"ellipsis"!==c.textOverflow);this.noWrap=!(!c||"nowrap"!==c.whiteSpace);this.fontSize=c&&c.fontSize}k.prototype.buildSVG=function(){var e=this.svgElement,c=e.element,h=e.renderer,f=n(e.textStr,"").toString(),k=-1!==f.indexOf("<"),
    p=c.childNodes;h=this.width&&!e.added&&h.box;var B=/<br.*?>/g,t=[f,this.ellipsis,this.noWrap,this.textLineHeight,this.textOutline,this.fontSize,this.width].join();if(t!==e.textCache){e.textCache=t;delete e.actualWidth;for(t=p.length;t--;)c.removeChild(p[t]);k||this.ellipsis||this.width||-1!==f.indexOf(" ")&&(!this.noWrap||B.test(f))?""!==f&&(h&&h.appendChild(c),f=new a(f),this.modifyTree(f.nodes),f.addToDOM(e.element),this.modifyDOM(),this.ellipsis&&-1!==(c.textContent||"").indexOf("\u2026")&&e.attr("title",
    this.unescapeEntities(e.textStr||"",["&lt;","&gt;"])),h&&h.removeChild(c)):c.appendChild(v.createTextNode(this.unescapeEntities(f)));A(this.textOutline)&&e.applyTextOutline&&e.applyTextOutline(this.textOutline)}};k.prototype.modifyDOM=function(){var a=this,c=this.svgElement,h=H(c.element,"x");c.firstLineMetrics=void 0;for(var f;f=c.element.firstChild;)if(/^[\s\u200B]*$/.test(f.textContent||" "))c.element.removeChild(f);else break;[].forEach.call(c.element.querySelectorAll("tspan.highcharts-br"),function(e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 p){e.nextSibling&&e.previousSibling&&(0===p&&1===e.previousSibling.nodeType&&(c.firstLineMetrics=c.renderer.fontMetrics(void 0,e.previousSibling)),H(e,{dy:a.getLineHeight(e.nextSibling),x:h}))});var k=this.width||0;if(k){var p=function(e,p){var f=e.textContent||"",r=f.replace(/([^\^])-/g,"$1- ").split(" "),l=!a.noWrap&&(1<r.length||1<c.element.childNodes.length),b=a.getLineHeight(p),g=0,d=c.actualWidth;if(a.ellipsis)f&&a.truncate(e,f,void 0,0,Math.max(0,k-parseInt(a.fontSize||12,10)),function(b,d){return b.substring(0,
    d)+"\u2026"});else if(l){f=[];for(l=[];p.firstChild&&p.firstChild!==e;)l.push(p.firstChild),p.removeChild(p.firstChild);for(;r.length;)r.length&&!a.noWrap&&0<g&&(f.push(e.textContent||""),e.textContent=r.join(" ").replace(/- /g,"-")),a.truncate(e,void 0,r,0===g?d||0:0,k,function(b,d){return r.slice(0,d).join(" ").replace(/- /g,"-")}),d=c.actualWidth,g++;l.forEach(function(b){p.insertBefore(b,e)});f.forEach(function(d){p.insertBefore(v.createTextNode(d),e);d=v.createElementNS(y,"tspan");d.textContent=
    "\u200b";H(d,{dy:b,x:h});p.insertBefore(d,e)})}},B=function(a){[].slice.call(a.childNodes).forEach(function(e){e.nodeType===G.Node.TEXT_NODE?p(e,a):(-1!==e.className.baseVal.indexOf("highcharts-br")&&(c.actualWidth=0),B(e))})};B(c.element)}};k.prototype.getLineHeight=function(a){var c;a=a.nodeType===G.Node.TEXT_NODE?a.parentElement:a;this.renderer.styledMode||(c=a&&/(px|em)$/.test(a.style.fontSize)?a.style.fontSize:this.fontSize||this.renderer.style.fontSize||12);return this.textLineHeight?parseInt(this.textLineHeight.toString(),
    10):this.renderer.fontMetrics(c,a||this.svgElement.element).h};k.prototype.modifyTree=function(a){var c=this,e=function(h,k){var p=h.attributes;p=void 0===p?{}:p;var f=h.children,t=h.tagName,w=c.renderer.styledMode;if("b"===t||"strong"===t)w?p["class"]="highcharts-strong":p.style="font-weight:bold;"+(p.style||"");else if("i"===t||"em"===t)w?p["class"]="highcharts-emphasized":p.style="font-style:italic;"+(p.style||"");A(p.style)&&(p.style=p.style.replace(/(;| |^)color([ :])/,"$1fill$2"));"br"===t?
    (p["class"]="highcharts-br",h.textContent="\u200b",(k=a[k+1])&&k.textContent&&(k.textContent=k.textContent.replace(/^ +/gm,""))):"a"===t&&f&&f.some(function(c){return"#text"===c.tagName})&&(h.children=[{children:f,tagName:"tspan"}]);"#text"!==t&&"a"!==t&&(h.tagName="tspan");h.attributes=p;f&&f.filter(function(c){return"#text"!==c.tagName}).forEach(e)};a.forEach(e)};k.prototype.truncate=function(a,c,h,f,k,p){var e=this.svgElement,t=e.renderer,w=e.rotation,n=[],r=h?1:0,l=(c||h||"").length,b=l,g,d=function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 d){d=d||b;var g=a.parentNode;if(g&&"undefined"===typeof n[d])if(g.getSubStringLength)try{n[d]=f+g.getSubStringLength(0,h?d+1:d)}catch(P){""}else t.getSpanWidth&&(a.textContent=p(c||h,b),n[d]=f+t.getSpanWidth(e,a));return n[d]};e.rotation=0;var m=d(a.textContent.length);if(f+m>k){for(;r<=l;)b=Math.ceil((r+l)/2),h&&(g=p(h,b)),m=d(b,g&&g.length-1),r===l?r=l+1:m>k?l=b-1:r=b;0===l?a.textContent="":c&&l===c.length-1||(a.textContent=g||p(c||h,b))}h&&h.splice(0,b);e.actualWidth=m;e.rotation=w};k.prototype.unescapeEntities=
    function(a,c){q(this.renderer.escapes,function(e,f){c&&-1!==c.indexOf(e)||(a=a.toString().replace(new RegExp(e,"g"),f))});return a};return k}()});M(a,"Core/Renderer/SVG/SVGRenderer.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Renderer/RendererRegistry.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Renderer/SVG/SVGLabel.js"],a["Core/Renderer/SVG/Symbols.js"],a["Core/Renderer/SVG/TextBuilder.js"],a["Core/Utilities.js"]],function(a,u,z,F,y,G,H,A,q){var n=
    z.charts,k=z.deg2rad,e=z.doc,c=z.isFirefox,h=z.isMS,f=z.isWebKit,w=z.noop,p=z.SVG_NS,B=z.symbolSizes,t=z.win,J=q.addEvent,C=q.attr,r=q.createElement,l=q.css,b=q.defined,g=q.destroyObjectProperties,d=q.extend,m=q.isArray,D=q.isNumber,x=q.isObject,I=q.isString,P=q.merge,v=q.pick,O=q.pInt,U=q.uniqueKey,Y;z=function(){function L(b,d,a,c,g,m,e){this.width=this.url=this.style=this.isSVG=this.imgCount=this.height=this.gradients=this.globalAnimation=this.defs=this.chartIndex=this.cacheKeys=this.cache=this.boxWrapper=
    this.box=this.alignedObjects=void 0;this.init(b,d,a,c,g,m,e)}L.prototype.init=function(b,d,a,g,m,E,L){var r=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}),K=r.element;L||r.css(this.getStyle(g));b.appendChild(K);C(b,"dir","ltr");-1===b.innerHTML.indexOf("xmlns")&&C(K,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=K;this.boxWrapper=r;this.alignedObjects=[];this.url=this.getReferenceURL();this.createElement("desc").add().element.appendChild(e.createTextNode("Created with Highcharts 9.3.3"));
    this.defs=this.createElement("defs").add();this.allowHTML=E;this.forExport=m;this.styledMode=L;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(d,a,!1);var p;c&&b.getBoundingClientRect&&(d=function(){l(b,{left:0,top:0});p=b.getBoundingClientRect();l(b,{left:Math.ceil(p.left)-p.left+"px",top:Math.ceil(p.top)-p.top+"px"})},d(),this.unSubPixelFix=J(t,"resize",d))};L.prototype.definition=function(b){return(new a([b])).addToDOM(this.defs.element)};L.prototype.getReferenceURL=
    function(){if((c||f)&&e.getElementsByTagName("base").length){if(!b(Y)){var d=U();d=(new a([{tagName:"svg",attributes:{width:8,height:8},children:[{tagName:"defs",children:[{tagName:"clipPath",attributes:{id:d},children:[{tagName:"rect",attributes:{width:4,height:4}}]}]},{tagName:"rect",attributes:{id:"hitme",width:8,height:8,"clip-path":"url(#"+d+")",fill:"rgba(0,0,0,0.001)"}}]}])).addToDOM(e.body);l(d,{position:"fixed",top:0,left:0,zIndex:9E5});var g=e.elementFromPoint(6,6);Y="hitme"===(g&&g.id);
        e.body.removeChild(d)}if(Y)return t.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20")}return""};L.prototype.getStyle=function(b){return this.style=d({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},b)};L.prototype.setStyle=function(b){this.boxWrapper.css(this.getStyle(b))};L.prototype.isHidden=function(){return!this.boxWrapper.getBBox().width};L.prototype.destroy=function(){var b=this.defs;this.box=
    null;this.boxWrapper=this.boxWrapper.destroy();g(this.gradients||{});this.gradients=null;b&&(this.defs=b.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null};L.prototype.createElement=function(b){var d=new this.Element;d.init(this,b);return d};L.prototype.getRadialAttr=function(b,d){return{cx:b[0]-b[2]/2+(d.cx||0)*b[2],cy:b[1]-b[2]/2+(d.cy||0)*b[2],r:(d.r||0)*b[2]}};L.prototype.buildText=function(b){(new A(b)).buildSVG()};L.prototype.getContrast=function(b){b=u.parse(b).rgba;
    b[0]*=1;b[1]*=1.2;b[2]*=.5;return 459<b[0]+b[1]+b[2]?"#000000":"#FFFFFF"};L.prototype.button=function(b,c,g,m,e,l,L,r,p,x){var E=this.label(b,c,g,p,void 0,void 0,x,void 0,"button"),f=this.styledMode,K=0,D=e?P(e):{};b=D&&D.style||{};D=a.filterUserAttributes(D);E.attr(P({padding:8,r:2},D));if(!f){D=P({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},{style:b},D);var k=D.style;delete D.style;l=P(D,{fill:"#e6e6e6"},a.filterUserAttributes(l||
    {}));var N=l.style;delete l.style;L=P(D,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},a.filterUserAttributes(L||{}));var w=L.style;delete L.style;r=P(D,{style:{color:"#cccccc"}},a.filterUserAttributes(r||{}));var t=r.style;delete r.style}J(E.element,h?"mouseover":"mouseenter",function(){3!==K&&E.setState(1)});J(E.element,h?"mouseout":"mouseleave",function(){3!==K&&E.setState(K)});E.setState=function(b){1!==b&&(E.state=K=b);E.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+
    ["normal","hover","pressed","disabled"][b||0]);f||E.attr([D,l,L,r][b||0]).css([k,N,w,t][b||0])};f||E.attr(D).css(d({cursor:"default"},k));return E.on("touchstart",function(b){return b.stopPropagation()}).on("click",function(b){3!==K&&m.call(E,b)})};L.prototype.crispLine=function(d,a,c){void 0===c&&(c="round");var g=d[0],m=d[1];b(g[1])&&g[1]===m[1]&&(g[1]=m[1]=Math[c](g[1])-a%2/2);b(g[2])&&g[2]===m[2]&&(g[2]=m[2]=Math[c](g[2])+a%2/2);return d};L.prototype.path=function(b){var a=this.styledMode?{}:
    {fill:"none"};m(b)?a.d=b:x(b)&&d(a,b);return this.createElement("path").attr(a)};L.prototype.circle=function(b,d,a){b=x(b)?b:"undefined"===typeof b?{}:{x:b,y:d,r:a};d=this.createElement("circle");d.xSetter=d.ySetter=function(b,d,a){a.setAttribute("c"+d,b)};return d.attr(b)};L.prototype.arc=function(b,d,a,c,g,m){x(b)?(c=b,d=c.y,a=c.r,b=c.x):c={innerR:c,start:g,end:m};b=this.symbol("arc",b,d,a,a,c);b.r=a;return b};L.prototype.rect=function(b,d,a,c,g,m){g=x(b)?b.r:g;var e=this.createElement("rect");
    b=x(b)?b:"undefined"===typeof b?{}:{x:b,y:d,width:Math.max(a,0),height:Math.max(c,0)};this.styledMode||("undefined"!==typeof m&&(b["stroke-width"]=m,b=e.crisp(b)),b.fill="none");g&&(b.r=g);e.rSetter=function(b,d,a){e.r=b;C(a,{rx:b,ry:b})};e.rGetter=function(){return e.r||0};return e.attr(b)};L.prototype.setSize=function(b,d,a){this.width=b;this.height=d;this.boxWrapper.animate({width:b,height:d},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:v(a,
        !0)?void 0:0});this.alignElements()};L.prototype.g=function(b){var d=this.createElement("g");return b?d.attr({"class":"highcharts-"+b}):d};L.prototype.image=function(b,d,a,c,g,m){var e={preserveAspectRatio:"none"},l=function(b,d){b.setAttributeNS?b.setAttributeNS("http://www.w3.org/1999/xlink","href",d):b.setAttribute("hc-svg-href",d)};D(d)&&(e.x=d);D(a)&&(e.y=a);D(c)&&(e.width=c);D(g)&&(e.height=g);var E=this.createElement("image").attr(e);d=function(d){l(E.element,b);m.call(E,d)};m?(l(E.element,
    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),a=new t.Image,J(a,"load",d),a.src=b,a.complete&&d({})):l(E.element,b);return E};L.prototype.symbol=function(a,c,g,m,L,E){var p=this,h=/^url\((.*?)\)$/,x=h.test(a),f=!x&&(this.symbols[a]?a:"circle"),D=f&&this.symbols[f],k;if(D){"number"===typeof c&&(k=D.call(this.symbols,Math.round(c||0),Math.round(g||0),m||0,L||0,E));var K=this.path(k);p.styledMode||K.attr("fill","none");d(K,{symbolName:f||void 0,x:c,y:g,width:m,height:L});
    E&&d(K,E)}else if(x){var w=a.match(h)[1];var t=K=this.image(w);t.imgwidth=v(B[w]&&B[w].width,E&&E.width);t.imgheight=v(B[w]&&B[w].height,E&&E.height);var I=function(b){return b.attr({width:b.width,height:b.height})};["width","height"].forEach(function(d){t[d+"Setter"]=function(d,a){var c=this["img"+a];this[a]=d;b(c)&&(E&&"within"===E.backgroundSize&&this.width&&this.height&&(c=Math.round(c*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(a,c),
this.alignByTranslate||(d=((this[a]||0)-c)/2,this.attr("width"===a?{translateX:d}:{translateY:d})))}});b(c)&&t.attr({x:c,y:g});t.isImg=!0;b(t.imgwidth)&&b(t.imgheight)?I(t):(t.attr({width:0,height:0}),r("img",{onload:function(){var b=n[p.chartIndex];0===this.width&&(l(this,{position:"absolute",top:"-999em"}),e.body.appendChild(this));B[w]={width:this.width,height:this.height};t.imgwidth=this.width;t.imgheight=this.height;t.element&&I(t);this.parentNode&&this.parentNode.removeChild(this);p.imgCount--;
        if(!p.imgCount&&b&&!b.hasLoaded)b.onload()},src:w}),this.imgCount++)}return K};L.prototype.clipRect=function(b,d,a,c){var g=U()+"-",m=this.createElement("clipPath").attr({id:g}).add(this.defs);b=this.rect(b,d,a,c,0).add(m);b.id=g;b.clipPath=m;b.count=0;return b};L.prototype.text=function(d,a,c,g){var m={};if(g&&(this.allowHTML||!this.forExport))return this.html(d,a,c);m.x=Math.round(a||0);c&&(m.y=Math.round(c));b(d)&&(m.text=d);d=this.createElement("text").attr(m);if(!g||this.forExport&&!this.allowHTML)d.xSetter=
    function(b,d,a){for(var c=a.getElementsByTagName("tspan"),g=a.getAttribute(d),m=0,e;m<c.length;m++)e=c[m],e.getAttribute(d)===g&&e.setAttribute(d,b);a.setAttribute(d,b)};return d};L.prototype.fontMetrics=function(b,d){b=!this.styledMode&&/px/.test(b)||!t.getComputedStyle?b||d&&d.style&&d.style.fontSize||this.style&&this.style.fontSize:d&&y.prototype.getStyle.call(d,"font-size");b=/px/.test(b)?O(b):12;d=24>b?b+3:Math.round(1.2*b);return{h:d,b:Math.round(.8*d),f:b}};L.prototype.rotCorr=function(b,d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      a){var c=b;d&&a&&(c=Math.max(c*Math.cos(d*k),4));return{x:-b/3*Math.sin(d*k),y:c}};L.prototype.pathToSegments=function(b){for(var d=[],a=[],c={A:8,C:7,H:2,L:3,M:3,Q:5,S:5,T:3,V:2},g=0;g<b.length;g++)I(a[0])&&D(b[g])&&a.length===c[a[0].toUpperCase()]&&b.splice(g,0,a[0].replace("M","L").replace("m","l")),"string"===typeof b[g]&&(a.length&&d.push(a.slice(0)),a.length=0),a.push(b[g]);d.push(a.slice(0));return d};L.prototype.label=function(b,d,a,c,g,m,e,l,L){return new G(this,b,d,a,c,g,m,e,l,L)};L.prototype.alignElements=
    function(){this.alignedObjects.forEach(function(b){return b.align()})};return L}();d(z.prototype,{Element:y,SVG_NS:p,escapes:{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},symbols:H,draw:w});F.registerRendererType("svg",z,!0);"";return z});M(a,"Core/Renderer/HTML/HTMLElement.js",[a["Core/Globals.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Utilities.js"]],function(a,u,z){var v=this&&this.__extends||function(){var a=function(c,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof
    Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])};return a(c,e)};return function(c,e){function p(){this.constructor=c}a(c,e);c.prototype=null===e?Object.create(e):(p.prototype=e.prototype,new p)}}(),y=a.isFirefox,G=a.isMS,H=a.isWebKit,A=a.win,q=z.css,n=z.defined,k=z.extend,e=z.pick,c=z.pInt;return function(a){function h(){return null!==a&&a.apply(this,arguments)||this}v(h,a);h.compose=function(a){if(-1===h.composedClasses.indexOf(a)){h.composedClasses.push(a);
    var c=h.prototype,e=a.prototype;e.getSpanCorrection=c.getSpanCorrection;e.htmlCss=c.htmlCss;e.htmlGetBBox=c.htmlGetBBox;e.htmlUpdateTransform=c.htmlUpdateTransform;e.setSpanRotation=c.setSpanRotation}return a};h.prototype.getSpanCorrection=function(a,c,e){this.xCorr=-a*e;this.yCorr=-c};h.prototype.htmlCss=function(a){var c="SPAN"===this.element.tagName&&a&&"width"in a,h=e(c&&a.width,void 0);if(c){delete a.width;this.textWidth=h;var f=!0}a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow=
    "hidden");this.styles=k(this.styles,a);q(this.element,a);f&&this.htmlUpdateTransform();return this};h.prototype.htmlGetBBox=function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}};h.prototype.htmlUpdateTransform=function(){if(this.added){var a=this.renderer,e=this.element,h=this.translateX||0,f=this.translateY||0,k=this.x||0,C=this.y||0,r=this.textAlign||"left",l={left:0,center:.5,right:1}[r],b=this.styles;b=b&&b.whiteSpace;q(e,{marginLeft:h,marginTop:f});
    !a.styledMode&&this.shadows&&this.shadows.forEach(function(b){q(b,{marginLeft:h+1,marginTop:f+1})});this.inverted&&[].forEach.call(e.childNodes,function(b){a.invertChild(b,e)});if("SPAN"===e.tagName){var g=this.rotation,d=this.textWidth&&c(this.textWidth),m=[g,r,e.innerHTML,this.textWidth,this.textAlign].join(),D=void 0;D=!1;if(d!==this.oldTextWidth){if(this.textPxLength)var x=this.textPxLength;else q(e,{width:"",whiteSpace:b||"nowrap"}),x=e.offsetWidth;(d>this.oldTextWidth||x>d)&&(/[ \-]/.test(e.textContent||
        e.innerText)||"ellipsis"===e.style.textOverflow)&&(q(e,{width:x>d||g?d+"px":"auto",display:"block",whiteSpace:b||"normal"}),this.oldTextWidth=d,D=!0)}this.hasBoxWidthChanged=D;m!==this.cTT&&(D=a.fontMetrics(e.style.fontSize,e).b,!n(g)||g===(this.oldRotation||0)&&r===this.oldAlign||this.setSpanRotation(g,l,D),this.getSpanCorrection(!n(g)&&this.textPxLength||e.offsetWidth,D,l,g,r));q(e,{left:k+(this.xCorr||0)+"px",top:C+(this.yCorr||0)+"px"});this.cTT=m;this.oldRotation=g;this.oldAlign=r}}else this.alignOnAdd=
    !0};h.prototype.setSpanRotation=function(a,c,e){var h={},p=G&&!/Edge/.test(A.navigator.userAgent)?"-ms-transform":H?"-webkit-transform":y?"MozTransform":A.opera?"-o-transform":void 0;p&&(h[p]=h.transform="rotate("+a+"deg)",h[p+(y?"Origin":"-origin")]=h.transformOrigin=100*c+"% "+e+"px",q(this.element,h))};h.composedClasses=[];return h}(u)});M(a,"Core/Renderer/HTML/HTMLRenderer.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Utilities.js"]],
    function(a,u,z,F){var v=this&&this.__extends||function(){var a=function(k,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var c in e)e.hasOwnProperty(c)&&(a[c]=e[c])};return a(k,e)};return function(k,e){function c(){this.constructor=k}a(k,e);k.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}(),G=F.attr,H=F.createElement,A=F.extend,q=F.pick;return function(n){function k(){return null!==n&&n.apply(this,arguments)||this}
        v(k,n);k.compose=function(a){-1===k.composedClasses.indexOf(a)&&(k.composedClasses.push(a),a.prototype.html=k.prototype.html);return a};k.prototype.html=function(e,c,h){var f=this.createElement("span"),k=f.element,p=f.renderer,n=p.isSVG,t=function(a,c){["opacity","visibility"].forEach(function(e){a[e+"Setter"]=function(l,b,g){var d=a.div?a.div.style:c;u.prototype[e+"Setter"].call(this,l,b,g);d&&(d[b]=l)}});a.addedSetters=!0};f.textSetter=function(c){c!==this.textStr&&(delete this.bBox,delete this.oldTextWidth,
            a.setElementHTML(this.element,q(c,"")),this.textStr=c,f.doTransform=!0)};n&&t(f,f.element.style);f.xSetter=f.ySetter=f.alignSetter=f.rotationSetter=function(a,c){"align"===c?f.alignValue=f.textAlign=a:f[c]=a;f.doTransform=!0};f.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};f.attr({text:e,x:Math.round(c),y:Math.round(h)}).css({position:"absolute"});p.styledMode||f.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});k.style.whiteSpace="nowrap";
            f.css=f.htmlCss;n&&(f.add=function(a){var c=p.box.parentNode,e=[];if(this.parentGroup=a){var l=a.div;if(!l){for(;a;)e.push(a),a=a.parentGroup;e.reverse().forEach(function(b){function a(d,a){b[a]=d;"translateX"===a?r.left=d+"px":r.top=d+"px";b.doTransform=!0}var d=G(b.element,"class"),m=b.styles||{};l=b.div=b.div||H("div",d?{className:d}:void 0,{position:"absolute",left:(b.translateX||0)+"px",top:(b.translateY||0)+"px",display:b.display,opacity:b.opacity,cursor:m.cursor,pointerEvents:m.pointerEvents,
                visibility:b.visibility},l||c);var r=l.style;A(b,{classSetter:function(b){return function(d){this.element.setAttribute("class",d);b.className=d}}(l),on:function(){e[0].div&&f.on.apply({element:e[0].div,onEvents:b.onEvents},arguments);return b},translateXSetter:a,translateYSetter:a});b.addedSetters||t(b)})}}else l=c;l.appendChild(k);f.added=!0;f.alignOnAdd&&f.htmlUpdateTransform();return f});return f};k.composedClasses=[];return k}(z)});M(a,"Core/Axis/AxisDefaults.js",[],function(){var a;(function(a){a.defaultXAxisOptions=
    {alignTicks:!0,allowDecimals:void 0,panningEnabled:!0,zIndex:2,zoomEnabled:!0,dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,gridLineDashStyle:"Solid",gridZIndex:1,labels:{autoRotation:void 0,autoRotationLimit:80,distance:void 0,enabled:!0,indentation:10,overflow:"justify",padding:5,reserveSpace:void 0,
            rotation:void 0,staggerLines:0,step:0,useHTML:!1,x:0,zIndex:7,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorGridLineDashStyle:"Solid",minorTickLength:2,minorTickPosition:"outside",minPadding:.01,offset:void 0,opposite:!1,reversed:void 0,reversedStacks:!1,showEmpty:!0,showFirstLabel:!0,showLastLabel:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",rotation:0,useHTML:!1,x:0,y:0,
            style:{color:"#666666"}},type:"linear",uniqueNames:!0,visible:!0,minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",gridLineWidth:void 0,tickColor:"#ccd6eb"};a.defaultYAxisOptions={reversedStacks:!0,endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{animation:{},allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",
        formatter:function(){var a=this.axis.chart.numberFormatter;return a(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0};a.defaultLeftAxisOptions={labels:{x:-15},title:{rotation:270}};a.defaultRightAxisOptions={labels:{x:15},title:{rotation:90}};a.defaultBottomAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};a.defaultTopAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}}})(a||
    (a={}));return a});M(a,"Core/Foundation.js",[a["Core/Utilities.js"]],function(a){var v=a.addEvent,z=a.isFunction,F=a.objectEach,y=a.removeEvent,G;(function(a){a.registerEventOptions=function(a,q){a.eventOptions=a.eventOptions||{};F(q.events,function(n,k){a.eventOptions[k]!==n&&(a.eventOptions[k]&&(y(a,k,a.eventOptions[k]),delete a.eventOptions[k]),z(n)&&(a.eventOptions[k]=n,v(a,k,n)))})}})(G||(G={}));return G});M(a,"Core/Axis/Tick.js",[a["Core/FormatUtilities.js"],a["Core/Globals.js"],a["Core/Utilities.js"]],
    function(a,u,z){var v=u.deg2rad,y=z.clamp,G=z.correctFloat,H=z.defined,A=z.destroyObjectProperties,q=z.extend,n=z.fireEvent,k=z.isNumber,e=z.merge,c=z.objectEach,h=z.pick;u=function(){function f(a,c,e,h,f){this.isNewLabel=this.isNew=!0;this.axis=a;this.pos=c;this.type=e||"";this.parameters=f||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;n(this,"init");e||h||this.addLabel()}f.prototype.addLabel=function(){var c=this,e=c.axis,f=e.options,t=e.chart,J=e.categories,
        C=e.logarithmic,r=e.names,l=c.pos,b=h(c.options&&c.options.labels,f.labels),g=e.tickPositions,d=l===g[0],m=l===g[g.length-1],D=(!b.step||1===b.step)&&1===e.tickInterval;g=g.info;var x=c.label,I;J=this.parameters.category||(J?h(J[l],r[l],l):l);C&&k(J)&&(J=G(C.lin2log(J)));if(e.dateTime)if(g){var P=t.time.resolveDTLFormat(f.dateTimeLabelFormats[!f.grid&&g.higherRanks[l]||g.unitName]);var v=P.main}else k(J)&&(v=e.dateTime.getXDateFormat(J,f.dateTimeLabelFormats||{}));c.isFirst=d;c.isLast=m;var O={axis:e,
        chart:t,dateTimeLabelFormat:v,isFirst:d,isLast:m,pos:l,tick:c,tickPositionInfo:g,value:J};n(this,"labelFormat",O);var u=function(d){return b.formatter?b.formatter.call(d,d):b.format?(d.text=e.defaultLabelFormatter.call(d),a.format(b.format,d,t)):e.defaultLabelFormatter.call(d,d)};f=u.call(O,O);var A=P&&P.list;c.shortenLabel=A?function(){for(I=0;I<A.length;I++)if(q(O,{dateTimeLabelFormat:A[I]}),x.attr({text:u.call(O,O)}),x.getBBox().width<e.getSlotWidth(c)-2*b.padding)return;x.attr({text:""})}:void 0;
        D&&e._addedPlotLB&&c.moveLabel(f,b);H(x)||c.movedLabel?x&&x.textStr!==f&&!D&&(!x.textWidth||b.style.width||x.styles.width||x.css({width:null}),x.attr({text:f}),x.textPxLength=x.getBBox().width):(c.label=x=c.createLabel({x:0,y:0},f,b),c.rotation=0)};f.prototype.createLabel=function(a,c,h){var f=this.axis,p=f.chart;if(a=H(c)&&h.enabled?p.renderer.text(c,a.x,a.y,h.useHTML).add(f.labelGroup):null)p.styledMode||a.css(e(h.style)),a.textPxLength=a.getBBox().width;return a};f.prototype.destroy=function(){A(this,
        this.axis)};f.prototype.getPosition=function(a,c,e,h){var f=this.axis,p=f.chart,r=h&&p.oldChartHeight||p.chartHeight;a={x:a?G(f.translate(c+e,null,null,h)+f.transB):f.left+f.offset+(f.opposite?(h&&p.oldChartWidth||p.chartWidth)-f.right-f.left:0),y:a?r-f.bottom+f.offset-(f.opposite?f.height:0):G(r-f.translate(c+e,null,null,h)-f.transB)};a.y=y(a.y,-1E5,1E5);n(this,"afterGetPosition",{pos:a});return a};f.prototype.getLabelPosition=function(a,c,e,h,f,k,r,l){var b=this.axis,g=b.transA,d=b.isLinked&&b.linkedParent?
        b.linkedParent.reversed:b.reversed,m=b.staggerLines,D=b.tickRotCorr||{x:0,y:0},x=h||b.reserveSpaceDefault?0:-b.labelOffset*("center"===b.labelAlign?.5:1),p={},t=f.y;H(t)||(t=0===b.side?e.rotation?-8:-e.getBBox().height:2===b.side?D.y+8:Math.cos(e.rotation*v)*(D.y-e.getBBox(!1,0).height/2));a=a+f.x+x+D.x-(k&&h?k*g*(d?-1:1):0);c=c+t-(k&&!h?k*g*(d?1:-1):0);m&&(e=r/(l||1)%m,b.opposite&&(e=m-e-1),c+=b.labelOffset/m*e);p.x=a;p.y=Math.round(c);n(this,"afterGetLabelPosition",{pos:p,tickmarkOffset:k,index:r});
        return p};f.prototype.getLabelSize=function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0};f.prototype.getMarkPath=function(a,c,e,h,f,k){return k.crispLine([["M",a,c],["L",a+(f?0:-e),c+(f?e:0)]],h)};f.prototype.handleOverflow=function(a){var c=this.axis,e=c.options.labels,f=a.x,k=c.chart.chartWidth,n=c.chart.spacing,r=h(c.labelLeft,Math.min(c.pos,n[3]));n=h(c.labelRight,Math.max(c.isRadial?0:c.pos+c.len,k-n[1]));var l=this.label,b=this.rotation,g={left:0,center:.5,right:1}[c.labelAlign||
    l.attr("align")],d=l.getBBox().width,m=c.getSlotWidth(this),D={},x=m,I=1,w;if(b||"justify"!==e.overflow)0>b&&f-g*d<r?w=Math.round(f/Math.cos(b*v)-r):0<b&&f+g*d>n&&(w=Math.round((k-f)/Math.cos(b*v)));else if(k=f+(1-g)*d,f-g*d<r?x=a.x+x*(1-g)-r:k>n&&(x=n-a.x+x*g,I=-1),x=Math.min(m,x),x<m&&"center"===c.labelAlign&&(a.x+=I*(m-x-g*(m-Math.min(d,x)))),d>x||c.autoRotation&&(l.styles||{}).width)w=x;w&&(this.shortenLabel?this.shortenLabel():(D.width=Math.floor(w)+"px",(e.style||{}).textOverflow||(D.textOverflow=
        "ellipsis"),l.css(D)))};f.prototype.moveLabel=function(a,e){var h=this,f=h.label,k=h.axis,p=k.reversed,r=!1;f&&f.textStr===a?(h.movedLabel=f,r=!0,delete h.label):c(k.ticks,function(b){r||b.isNew||b===h||!b.label||b.label.textStr!==a||(h.movedLabel=b.label,r=!0,b.labelPos=h.movedLabel.xy,delete b.label)});if(!r&&(h.labelPos||f)){var l=h.labelPos||f.xy;f=k.horiz?p?0:k.width+k.left:l.x;k=k.horiz?l.y:p?k.width+k.left:0;h.movedLabel=h.createLabel({x:f,y:k},a,e);h.movedLabel&&h.movedLabel.attr({opacity:0})}};
        f.prototype.render=function(a,c,e){var f=this.axis,k=f.horiz,p=this.pos,r=h(this.tickmarkOffset,f.tickmarkOffset);p=this.getPosition(k,p,r,c);r=p.x;var l=p.y;f=k&&r===f.pos+f.len||!k&&l===f.pos?-1:1;k=h(e,this.label&&this.label.newOpacity,1);e=h(e,1);this.isActive=!0;this.renderGridLine(c,e,f);this.renderMark(p,e,f);this.renderLabel(p,c,k,a);this.isNew=!1;n(this,"afterRender")};f.prototype.renderGridLine=function(a,c,e){var f=this.axis,k=f.options,p={},r=this.pos,l=this.type,b=h(this.tickmarkOffset,
            f.tickmarkOffset),g=f.chart.renderer,d=this.gridLine,m=k.gridLineWidth,D=k.gridLineColor,x=k.gridLineDashStyle;"minor"===this.type&&(m=k.minorGridLineWidth,D=k.minorGridLineColor,x=k.minorGridLineDashStyle);d||(f.chart.styledMode||(p.stroke=D,p["stroke-width"]=m||0,p.dashstyle=x),l||(p.zIndex=1),a&&(c=0),this.gridLine=d=g.path().attr(p).addClass("highcharts-"+(l?l+"-":"")+"grid-line").add(f.gridGroup));if(d&&(e=f.getPlotLinePath({value:r+b,lineWidth:d.strokeWidth()*e,force:"pass",old:a})))d[a||this.isNew?
            "attr":"animate"]({d:e,opacity:c})};f.prototype.renderMark=function(a,c,e){var f=this.axis,k=f.options,p=f.chart.renderer,r=this.type,l=f.tickSize(r?r+"Tick":"tick"),b=a.x;a=a.y;var g=h(k["minor"!==r?"tickWidth":"minorTickWidth"],!r&&f.isXAxis?1:0);k=k["minor"!==r?"tickColor":"minorTickColor"];var d=this.mark,m=!d;l&&(f.opposite&&(l[0]=-l[0]),d||(this.mark=d=p.path().addClass("highcharts-"+(r?r+"-":"")+"tick").add(f.axisGroup),f.chart.styledMode||d.attr({stroke:k,"stroke-width":g})),d[m?"attr":"animate"]({d:this.getMarkPath(b,
                a,l[0],d.strokeWidth()*e,f.horiz,p),opacity:c}))};f.prototype.renderLabel=function(a,c,e,f){var p=this.axis,n=p.horiz,r=p.options,l=this.label,b=r.labels,g=b.step;p=h(this.tickmarkOffset,p.tickmarkOffset);var d=a.x;a=a.y;var m=!0;l&&k(d)&&(l.xy=a=this.getLabelPosition(d,a,l,n,b,p,f,g),this.isFirst&&!this.isLast&&!r.showFirstLabel||this.isLast&&!this.isFirst&&!r.showLastLabel?m=!1:!n||b.step||b.rotation||c||0===e||this.handleOverflow(a),g&&f%g&&(m=!1),m&&k(a.y)?(a.opacity=e,l[this.isNewLabel?"attr":
            "animate"](a),this.isNewLabel=!1):(l.attr("y",-9999),this.isNewLabel=!0))};f.prototype.replaceMovedLabel=function(){var a=this.label,c=this.axis,e=c.reversed;if(a&&!this.isNew){var f=c.horiz?e?c.left:c.width+c.left:a.xy.x;e=c.horiz?a.xy.y:e?c.width+c.top:c.top;a.animate({x:f,y:e,opacity:0},void 0,a.destroy);delete this.label}c.isDirty=!0;this.label=this.movedLabel;delete this.movedLabel};return f}();"";return u});M(a,"Core/Axis/Axis.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Axis/AxisDefaults.js"],
    a["Core/Color/Color.js"],a["Core/DefaultOptions.js"],a["Core/Foundation.js"],a["Core/Globals.js"],a["Core/Axis/Tick.js"],a["Core/Utilities.js"]],function(a,u,z,F,y,G,H,A){var q=a.animObject,n=F.defaultOptions,k=y.registerEventOptions,e=G.deg2rad,c=A.arrayMax,h=A.arrayMin,f=A.clamp,w=A.correctFloat,p=A.defined,B=A.destroyObjectProperties,t=A.erase,J=A.error,C=A.extend,r=A.fireEvent,l=A.getMagnitude,b=A.isArray,g=A.isNumber,d=A.isString,m=A.merge,D=A.normalizeTickInterval,x=A.objectEach,I=A.pick,P=
    A.relativeLength,v=A.removeEvent,O=A.splat,U=A.syncTimeout;a=function(){function a(b,d){this.zoomEnabled=this.width=this.visible=this.userOptions=this.translationSlope=this.transB=this.transA=this.top=this.ticks=this.tickRotCorr=this.tickPositions=this.tickmarkOffset=this.tickInterval=this.tickAmount=this.side=this.series=this.right=this.positiveValuesOnly=this.pos=this.pointRangePadding=this.pointRange=this.plotLinesAndBandsGroups=this.plotLinesAndBands=this.paddedTicks=this.overlap=this.options=
    this.offset=this.names=this.minPixelPadding=this.minorTicks=this.minorTickInterval=this.min=this.maxLabelLength=this.max=this.len=this.left=this.labelFormatter=this.labelEdge=this.isLinked=this.height=this.hasVisibleSeries=this.hasNames=this.eventOptions=this.coll=this.closestPointRange=this.chart=this.categories=this.bottom=this.alternateBands=void 0;this.init(b,d)}a.prototype.init=function(b,d){var a=d.isX;this.chart=b;this.horiz=b.inverted&&!this.isZAxis?!a:a;this.isXAxis=a;this.coll=this.coll||
    (a?"xAxis":"yAxis");r(this,"init",{userOptions:d});this.opposite=I(d.opposite,this.opposite);this.side=I(d.side,this.side,this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(d);var c=this.options,e=c.labels,m=c.type;this.userOptions=d;this.minPixelPadding=0;this.reversed=I(c.reversed,this.reversed);this.visible=c.visible;this.zoomEnabled=c.zoomEnabled;this.hasNames="category"===m||!0===c.categories;this.categories=c.categories||this.hasNames;this.names||(this.names=[],this.names.keys=
    {});this.plotLinesAndBandsGroups={};this.positiveValuesOnly=!!this.logarithmic;this.isLinked=p(c.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=c.minRange||c.maxZoom;this.range=c.range;this.offset=c.offset||0;this.min=this.max=null;d=I(c.crosshair,O(b.options.tooltip.crosshairs)[a?0:1]);this.crosshair=!0===d?{}:d;-1===b.axes.indexOf(this)&&(a?b.axes.splice(b.xAxis.length,0,this):b.axes.push(this),
    b[this.coll].push(this));this.series=this.series||[];b.inverted&&!this.isZAxis&&a&&"undefined"===typeof this.reversed&&(this.reversed=!0);this.labelRotation=g(e.rotation)?e.rotation:void 0;k(this,c);r(this,"afterInit")};a.prototype.setOptions=function(b){this.options=m(u.defaultXAxisOptions,"yAxis"===this.coll&&u.defaultYAxisOptions,[u.defaultTopAxisOptions,u.defaultRightAxisOptions,u.defaultBottomAxisOptions,u.defaultLeftAxisOptions][this.side],m(n[this.coll],b));r(this,"afterSetOptions",{userOptions:b})};
    a.prototype.defaultLabelFormatter=function(b){var d=this.axis;b=this.chart.numberFormatter;var a=g(this.value)?this.value:NaN,c=d.chart.time,e=this.dateTimeLabelFormat,m=n.lang,l=m.numericSymbols;m=m.numericSymbolMagnitude||1E3;var f=d.logarithmic?Math.abs(a):d.tickInterval,h=l&&l.length;if(d.categories)var r=""+this.value;else if(e)r=c.dateFormat(e,a);else if(h&&1E3<=f)for(;h--&&"undefined"===typeof r;)d=Math.pow(m,h+1),f>=d&&0===10*a%d&&null!==l[h]&&0!==a&&(r=b(a/d,-1)+l[h]);"undefined"===typeof r&&
    (r=1E4<=Math.abs(a)?b(a,-1):b(a,-1,void 0,""));return r};a.prototype.getSeriesExtremes=function(){var b=this,d=b.chart,a;r(this,"getSeriesExtremes",null,function(){b.hasVisibleSeries=!1;b.dataMin=b.dataMax=b.threshold=null;b.softThreshold=!b.isXAxis;b.stacking&&b.stacking.buildStacks();b.series.forEach(function(c){if(c.visible||!d.options.chart.ignoreHiddenSeries){var e=c.options,m=e.threshold;b.hasVisibleSeries=!0;b.positiveValuesOnly&&0>=m&&(m=null);if(b.isXAxis){if(e=c.xData,e.length){e=b.logarithmic?
        e.filter(b.validatePositiveValue):e;a=c.getXExtremes(e);var l=a.min;var f=a.max;g(l)||l instanceof Date||(e=e.filter(g),a=c.getXExtremes(e),l=a.min,f=a.max);e.length&&(b.dataMin=Math.min(I(b.dataMin,l),l),b.dataMax=Math.max(I(b.dataMax,f),f))}}else if(c=c.applyExtremes(),g(c.dataMin)&&(l=c.dataMin,b.dataMin=Math.min(I(b.dataMin,l),l)),g(c.dataMax)&&(f=c.dataMax,b.dataMax=Math.max(I(b.dataMax,f),f)),p(m)&&(b.threshold=m),!e.softThreshold||b.positiveValuesOnly)b.softThreshold=!1}})});r(this,"afterGetSeriesExtremes")};
    a.prototype.translate=function(b,d,a,c,e,m){var l=this.linkedParent||this,f=c&&l.old?l.old.min:l.min,r=l.minPixelPadding;e=(l.isOrdinal||l.brokenAxis&&l.brokenAxis.hasBreaks||l.logarithmic&&e)&&l.lin2val;var h=1,k=0;c=c&&l.old?l.old.transA:l.transA;c||(c=l.transA);a&&(h*=-1,k=l.len);l.reversed&&(h*=-1,k-=h*(l.sector||l.len));d?(b=(b*h+k-r)/c+f,e&&(b=l.lin2val(b))):(e&&(b=l.val2lin(b)),b=g(f)?h*(b-f)*c+k+h*r+(g(m)?c*m:0):void 0);return b};a.prototype.toPixels=function(b,d){return this.translate(b,
        !1,!this.horiz,null,!0)+(d?0:this.pos)};a.prototype.toValue=function(b,d){return this.translate(b-(d?0:this.pos),!0,!this.horiz,null,!0)};a.prototype.getPlotLinePath=function(b){function d(b,d,a){if("pass"!==n&&b<d||b>a)n?b=f(b,d,a):B=!0;return b}var a=this,c=a.chart,e=a.left,m=a.top,l=b.old,h=b.value,k=b.lineWidth,x=l&&c.oldChartHeight||c.chartHeight,D=l&&c.oldChartWidth||c.chartWidth,L=a.transB,p=b.translatedValue,n=b.force,t,C,w,q,B;b={value:h,lineWidth:k,old:l,force:n,acrossPanes:b.acrossPanes,
        translatedValue:p};r(this,"getPlotLinePath",b,function(b){p=I(p,a.translate(h,null,null,l));p=f(p,-1E5,1E5);t=w=Math.round(p+L);C=q=Math.round(x-p-L);g(p)?a.horiz?(C=m,q=x-a.bottom,t=w=d(t,e,e+a.width)):(t=e,w=D-a.right,C=q=d(C,m,m+a.height)):(B=!0,n=!1);b.path=B&&!n?null:c.renderer.crispLine([["M",t,C],["L",w,q]],k||1)});return b.path};a.prototype.getLinearTickPositions=function(b,d,a){var c=w(Math.floor(d/b)*b);a=w(Math.ceil(a/b)*b);var e=[],g;w(c+b)===c&&(g=20);if(this.single)return[d];for(d=c;d<=
    a;){e.push(d);d=w(d+b,g);if(d===m)break;var m=d}return e};a.prototype.getMinorTickInterval=function(){var b=this.options;return!0===b.minorTicks?I(b.minorTickInterval,"auto"):!1===b.minorTicks?null:b.minorTickInterval};a.prototype.getMinorTickPositions=function(){var b=this.options,d=this.tickPositions,a=this.minorTickInterval,c=this.pointRangePadding||0,e=this.min-c;c=this.max+c;var g=c-e,m=[];if(g&&g/a<this.len/3){var l=this.logarithmic;if(l)this.paddedTicks.forEach(function(b,d,c){d&&m.push.apply(m,
        l.getLogTickPositions(a,c[d-1],c[d],!0))});else if(this.dateTime&&"auto"===this.getMinorTickInterval())m=m.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(a),e,c,b.startOfWeek));else for(b=e+(d[0]-e)%a;b<=c&&b!==m[0];b+=a)m.push(b)}0!==m.length&&this.trimTicks(m);return m};a.prototype.adjustForMinRange=function(){var b=this.options,d=this.logarithmic,a=this.min,e=this.max,g=0,m,l,f,r;this.isXAxis&&"undefined"===typeof this.minRange&&!d&&(p(b.min)||p(b.max)||p(b.floor)||p(b.ceiling)?
        this.minRange=null:(this.series.forEach(function(b){f=b.xData;r=b.xIncrement?1:f.length-1;if(1<f.length)for(m=r;0<m;m--)if(l=f[m]-f[m-1],!g||l<g)g=l}),this.minRange=Math.min(5*g,this.dataMax-this.dataMin)));if(e-a<this.minRange){var k=this.dataMax-this.dataMin>=this.minRange;var x=this.minRange;var D=(x-e+a)/2;D=[a-D,I(b.min,a-D)];k&&(D[2]=this.logarithmic?this.logarithmic.log2lin(this.dataMin):this.dataMin);a=c(D);e=[a+x,I(b.max,a+x)];k&&(e[2]=d?d.log2lin(this.dataMax):this.dataMax);e=h(e);e-a<x&&
    (D[0]=e-x,D[1]=I(b.min,e-x),a=c(D))}this.min=a;this.max=e};a.prototype.getClosest=function(){var b;this.categories?b=1:this.series.forEach(function(d){var a=d.closestPointRange,c=d.visible||!d.chart.options.chart.ignoreHiddenSeries;!d.noSharedTooltip&&p(a)&&c&&(b=p(b)?Math.min(b,a):a)});return b};a.prototype.nameToX=function(d){var a=b(this.categories),c=a?this.categories:this.names,e=d.options.x;d.series.requireSorting=!1;p(e)||(e=this.options.uniqueNames?a?c.indexOf(d.name):I(c.keys[d.name],-1):
        d.series.autoIncrement());if(-1===e){if(!a)var g=c.length}else g=e;"undefined"!==typeof g&&(this.names[g]=d.name,this.names.keys[d.name]=g);return g};a.prototype.updateNames=function(){var b=this,d=this.names;0<d.length&&(Object.keys(d.keys).forEach(function(b){delete d.keys[b]}),d.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(d){d.xIncrement=null;if(!d.points||d.isDirtyData)b.max=Math.max(b.max,d.xData.length-1),d.processData(),d.generatePoints();d.data.forEach(function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  c){if(a&&a.options&&"undefined"!==typeof a.name){var e=b.nameToX(a);"undefined"!==typeof e&&e!==a.x&&(a.x=e,d.xData[c]=e)}})}))};a.prototype.setAxisTranslation=function(){var b=this,a=b.max-b.min,c=b.linkedParent,e=!!b.categories,g=b.isXAxis,m=b.axisPointRange||0,l=0,f=0,h=b.transA;if(g||e||m){var k=b.getClosest();c?(l=c.minPointOffset,f=c.pointRangePadding):b.series.forEach(function(a){var c=e?1:g?I(a.options.pointRange,k,0):b.axisPointRange||0,h=a.options.pointPlacement;m=Math.max(m,c);if(!b.single||
        e)a=a.is("xrange")?!g:g,l=Math.max(l,a&&d(h)?0:c/2),f=Math.max(f,a&&"on"===h?0:c)});c=b.ordinal&&b.ordinal.slope&&k?b.ordinal.slope/k:1;b.minPointOffset=l*=c;b.pointRangePadding=f*=c;b.pointRange=Math.min(m,b.single&&e?1:a);g&&(b.closestPointRange=k)}b.translationSlope=b.transA=h=b.staticScale||b.len/(a+f||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=h*l;r(this,"afterSetAxisTranslation")};a.prototype.minFromRange=function(){return this.max-this.range};a.prototype.setTickInterval=function(b){var d=
        this.chart,a=this.logarithmic,c=this.options,e=this.isXAxis,m=this.isLinked,f=c.tickPixelInterval,h=this.categories,k=this.softThreshold,x=c.maxPadding,L=c.minPadding,n=g(c.tickInterval)&&0<=c.tickInterval?c.tickInterval:void 0,t=g(this.threshold)?this.threshold:null;this.dateTime||h||m||this.getTickAmount();var C=I(this.userMin,c.min);var q=I(this.userMax,c.max);if(m){this.linkedParent=d[this.coll][c.linkedTo];var B=this.linkedParent.getExtremes();this.min=I(B.min,B.dataMin);this.max=I(B.max,B.dataMax);
        c.type!==this.linkedParent.options.type&&J(11,1,d)}else{if(k&&p(t))if(this.dataMin>=t)B=t,L=0;else if(this.dataMax<=t){var P=t;x=0}this.min=I(C,B,this.dataMin);this.max=I(q,P,this.dataMax)}a&&(this.positiveValuesOnly&&!b&&0>=Math.min(this.min,I(this.dataMin,this.min))&&J(10,1,d),this.min=w(a.log2lin(this.min),16),this.max=w(a.log2lin(this.max),16));this.range&&p(this.max)&&(this.userMin=this.min=C=Math.max(this.dataMin,this.minFromRange()),this.userMax=q=this.max,this.range=null);r(this,"foundExtremes");
        this.beforePadding&&this.beforePadding();this.adjustForMinRange();!(h||this.axisPointRange||this.stacking&&this.stacking.usePercentage||m)&&p(this.min)&&p(this.max)&&(d=this.max-this.min)&&(!p(C)&&L&&(this.min-=d*L),!p(q)&&x&&(this.max+=d*x));g(this.userMin)||(g(c.softMin)&&c.softMin<this.min&&(this.min=C=c.softMin),g(c.floor)&&(this.min=Math.max(this.min,c.floor)));g(this.userMax)||(g(c.softMax)&&c.softMax>this.max&&(this.max=q=c.softMax),g(c.ceiling)&&(this.max=Math.min(this.max,c.ceiling)));k&&
        p(this.dataMin)&&(t=t||0,!p(C)&&this.min<t&&this.dataMin>=t?this.min=this.options.minRange?Math.min(t,this.max-this.minRange):t:!p(q)&&this.max>t&&this.dataMax<=t&&(this.max=this.options.minRange?Math.max(t,this.min+this.minRange):t));g(this.min)&&g(this.max)&&!this.chart.polar&&this.min>this.max&&(p(this.options.min)?this.max=this.min:p(this.options.max)&&(this.min=this.max));this.tickInterval=this.min===this.max||"undefined"===typeof this.min||"undefined"===typeof this.max?1:m&&this.linkedParent&&
        !n&&f===this.linkedParent.options.tickPixelInterval?n=this.linkedParent.tickInterval:I(n,this.tickAmount?(this.max-this.min)/Math.max(this.tickAmount-1,1):void 0,h?1:(this.max-this.min)*f/Math.max(this.len,f));if(e&&!b){var v=this.min!==(this.old&&this.old.min)||this.max!==(this.old&&this.old.max);this.series.forEach(function(b){b.forceCrop=b.forceCropping&&b.forceCropping();b.processData(v)});r(this,"postProcessData",{hasExtemesChanged:v})}this.setAxisTranslation();r(this,"initialAxisTranslation");
        this.pointRange&&!n&&(this.tickInterval=Math.max(this.pointRange,this.tickInterval));b=I(c.minTickInterval,this.dateTime&&!this.series.some(function(b){return b.noSharedTooltip})?this.closestPointRange:0);!n&&this.tickInterval<b&&(this.tickInterval=b);this.dateTime||this.logarithmic||n||(this.tickInterval=D(this.tickInterval,void 0,l(this.tickInterval),I(c.allowDecimals,.5>this.tickInterval||void 0!==this.tickAmount),!!this.tickAmount));this.tickAmount||(this.tickInterval=this.unsquish());this.setTickPositions()};
    a.prototype.setTickPositions=function(){var b=this.options,d=b.tickPositions,a=this.getMinorTickInterval(),c=this.hasVerticalPanning(),e="colorAxis"===this.coll,g=(e||!c)&&b.startOnTick;c=(e||!c)&&b.endOnTick;e=b.tickPositioner;this.tickmarkOffset=this.categories&&"between"===b.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a&&this.tickInterval?this.tickInterval/5:a;this.single=this.min===this.max&&p(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==
        b.allowDecimals);this.tickPositions=a=d&&d.slice();!a&&(this.ordinal&&this.ordinal.positions||!((this.max-this.min)/this.tickInterval>Math.max(2*this.len,200))?a=this.dateTime?this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,b.units),this.min,this.max,b.startOfWeek,this.ordinal&&this.ordinal.positions,this.closestPointRange,!0):this.logarithmic?this.logarithmic.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,
        this.max):(a=[this.min,this.max],J(19,!1,this.chart)),a.length>this.len&&(a=[a[0],a.pop()],a[0]===a[1]&&(a.length=1)),this.tickPositions=a,e&&(e=e.apply(this,[this.min,this.max])))&&(this.tickPositions=a=e);this.paddedTicks=a.slice(0);this.trimTicks(a,g,c);this.isLinked||(this.single&&2>a.length&&!this.categories&&!this.series.some(function(b){return b.is("heatmap")&&"between"===b.options.pointPlacement})&&(this.min-=.5,this.max+=.5),d||e||this.adjustTickAmount());r(this,"afterSetTickPositions")};
    a.prototype.trimTicks=function(b,d,a){var c=b[0],e=b[b.length-1],g=!this.isOrdinal&&this.minPointOffset||0;r(this,"trimTicks");if(!this.isLinked){if(d&&-Infinity!==c)this.min=c;else for(;this.min-g>b[0];)b.shift();if(a)this.max=e;else for(;this.max+g<b[b.length-1];)b.pop();0===b.length&&p(c)&&!this.options.tickPositions&&b.push((e+c)/2)}};a.prototype.alignToOthers=function(){var b={},d=this.options,a;!1!==this.chart.options.chart.alignTicks&&d.alignTicks&&!1!==d.startOnTick&&!1!==d.endOnTick&&!this.logarithmic&&
    this.chart[this.coll].forEach(function(d){var c=d.options;c=[d.horiz?c.left:c.top,c.width,c.height,c.pane].join();d.series.length&&(b[c]?a=!0:b[c]=1)});return a};a.prototype.getTickAmount=function(){var b=this.options,d=b.tickPixelInterval,a=b.tickAmount;!p(b.tickInterval)&&!a&&this.len<d&&!this.isRadial&&!this.logarithmic&&b.startOnTick&&b.endOnTick&&(a=2);!a&&this.alignToOthers()&&(a=Math.ceil(this.len/d)+1);4>a&&(this.finalTickAmt=a,a=5);this.tickAmount=a};a.prototype.adjustTickAmount=function(){var b=
        this.options,d=this.tickInterval,a=this.tickPositions,c=this.tickAmount,e=this.finalTickAmt,m=a&&a.length,l=I(this.threshold,this.softThreshold?0:null);if(this.hasData()&&g(this.min)&&g(this.max)){if(m<c){for(;a.length<c;)a.length%2||this.min===l?a.push(w(a[a.length-1]+d)):a.unshift(w(a[0]-d));this.transA*=(m-1)/(c-1);this.min=b.startOnTick?a[0]:Math.min(this.min,a[0]);this.max=b.endOnTick?a[a.length-1]:Math.max(this.max,a[a.length-1])}else m>c&&(this.tickInterval*=2,this.setTickPositions());if(p(e)){for(d=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          b=a.length;d--;)(3===e&&1===d%2||2>=e&&0<d&&d<b-1)&&a.splice(d,1);this.finalTickAmt=void 0}}};a.prototype.setScale=function(){var b=!1,d=!1;this.series.forEach(function(a){b=b||a.isDirtyData||a.isDirty;d=d||a.xAxis&&a.xAxis.isDirty||!1});this.setAxisSize();var a=this.len!==(this.old&&this.old.len);a||b||d||this.isLinked||this.forceRedraw||this.userMin!==(this.old&&this.old.userMin)||this.userMax!==(this.old&&this.old.userMax)||this.alignToOthers()?(this.stacking&&this.stacking.resetStacks(),this.forceRedraw=
        !1,this.getSeriesExtremes(),this.setTickInterval(),this.isDirty||(this.isDirty=a||this.min!==(this.old&&this.old.min)||this.max!==(this.old&&this.old.max))):this.stacking&&this.stacking.cleanStacks();b&&this.panningState&&(this.panningState.isDirty=!0);r(this,"afterSetScale")};a.prototype.setExtremes=function(b,d,a,c,e){var g=this,m=g.chart;a=I(a,!0);g.series.forEach(function(b){delete b.kdTree});e=C(e,{min:b,max:d});r(g,"setExtremes",e,function(){g.userMin=b;g.userMax=d;g.eventArgs=e;a&&m.redraw(c)})};
    a.prototype.zoom=function(b,d){var a=this,c=this.dataMin,e=this.dataMax,g=this.options,m=Math.min(c,I(g.min,c)),l=Math.max(e,I(g.max,e));b={newMin:b,newMax:d};r(this,"zoom",b,function(b){var d=b.newMin,g=b.newMax;if(d!==a.min||g!==a.max)a.allowZoomOutside||(p(c)&&(d<m&&(d=m),d>l&&(d=l)),p(e)&&(g<m&&(g=m),g>l&&(g=l))),a.displayBtn="undefined"!==typeof d||"undefined"!==typeof g,a.setExtremes(d,g,!1,void 0,{trigger:"zoom"});b.zoomed=!0});return b.zoomed};a.prototype.setAxisSize=function(){var b=this.chart,
        d=this.options,a=d.offsets||[0,0,0,0],c=this.horiz,e=this.width=Math.round(P(I(d.width,b.plotWidth-a[3]+a[1]),b.plotWidth)),g=this.height=Math.round(P(I(d.height,b.plotHeight-a[0]+a[2]),b.plotHeight)),m=this.top=Math.round(P(I(d.top,b.plotTop+a[0]),b.plotHeight,b.plotTop));d=this.left=Math.round(P(I(d.left,b.plotLeft+a[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-g-m;this.right=b.chartWidth-e-d;this.len=Math.max(c?e:g,0);this.pos=c?d:m};a.prototype.getExtremes=function(){var b=this.logarithmic;
        return{min:b?w(b.lin2log(this.min)):this.min,max:b?w(b.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}};a.prototype.getThreshold=function(b){var d=this.logarithmic,a=d?d.lin2log(this.min):this.min;d=d?d.lin2log(this.max):this.max;null===b||-Infinity===b?b=a:Infinity===b?b=d:a>b?b=a:d<b&&(b=d);return this.translate(b,0,1,0,1)};a.prototype.autoLabelAlign=function(b){var d=(I(b,0)-90*this.side+720)%360;b={align:"center"};r(this,"autoLabelAlign",
        b,function(b){15<d&&165>d?b.align="right":195<d&&345>d&&(b.align="left")});return b.align};a.prototype.tickSize=function(b){var d=this.options,a=I(d["tick"===b?"tickWidth":"minorTickWidth"],"tick"===b&&this.isXAxis&&!this.categories?1:0),c=d["tick"===b?"tickLength":"minorTickLength"];if(a&&c){"inside"===d[b+"Position"]&&(c=-c);var e=[c,a]}b={tickSize:e};r(this,"afterTickSize",b);return b.tickSize};a.prototype.labelMetrics=function(){var b=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize,
        this.ticks[b]&&this.ticks[b].label)};a.prototype.unsquish=function(){var b=this.options.labels,d=this.horiz,a=this.tickInterval,c=this.len/(((this.categories?1:0)+this.max-this.min)/a),m=b.rotation,l=this.labelMetrics(),f=Math.max(this.max-this.min,0),h=function(b){var d=b/(c||1);d=1<d?Math.ceil(d):1;d*a>f&&Infinity!==b&&Infinity!==c&&f&&(d=Math.ceil(f/a));return w(d*a)},r=a,k,x,D=Number.MAX_VALUE;if(d){if(!b.staggerLines&&!b.step)if(g(m))var p=[m];else c<b.autoRotationLimit&&(p=b.autoRotation);p&&
    p.forEach(function(b){if(b===m||b&&-90<=b&&90>=b){x=h(Math.abs(l.h/Math.sin(e*b)));var d=x+Math.abs(b/360);d<D&&(D=d,k=b,r=x)}})}else b.step||(r=h(l.h));this.autoRotation=p;this.labelRotation=I(k,g(m)?m:0);return r};a.prototype.getSlotWidth=function(b){var d=this.chart,a=this.horiz,c=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),m=d.margin[3];if(b&&g(b.slotWidth))return b.slotWidth;if(a&&2>c.step)return c.rotation?0:(this.staggerLines||1)*this.len/e;if(!a){b=c.style.width;
        if(void 0!==b)return parseInt(String(b),10);if(m)return m-d.spacing[3]}return.33*d.chartWidth};a.prototype.renderUnsquish=function(){var b=this.chart,a=b.renderer,c=this.tickPositions,e=this.ticks,g=this.options.labels,m=g.style,l=this.horiz,f=this.getSlotWidth(),h=Math.max(1,Math.round(f-2*g.padding)),r={},k=this.labelMetrics(),x=m.textOverflow,D=0;d(g.rotation)||(r.rotation=g.rotation||0);c.forEach(function(b){b=e[b];b.movedLabel&&b.replaceMovedLabel();b&&b.label&&b.label.textPxLength>D&&(D=b.label.textPxLength)});
        this.maxLabelLength=D;if(this.autoRotation)D>h&&D>k.h?r.rotation=this.labelRotation:this.labelRotation=0;else if(f){var p=h;if(!x){var n="clip";for(h=c.length;!l&&h--;){var I=c[h];if(I=e[I].label)I.styles&&"ellipsis"===I.styles.textOverflow?I.css({textOverflow:"clip"}):I.textPxLength>f&&I.css({width:f+"px"}),I.getBBox().height>this.len/c.length-(k.h-k.f)&&(I.specificTextOverflow="ellipsis")}}}r.rotation&&(p=D>.5*b.chartHeight?.33*b.chartHeight:D,x||(n="ellipsis"));if(this.labelAlign=g.align||this.autoLabelAlign(this.labelRotation))r.align=
            this.labelAlign;c.forEach(function(b){var d=(b=e[b])&&b.label,a=m.width,c={};d&&(d.attr(r),b.shortenLabel?b.shortenLabel():p&&!a&&"nowrap"!==m.whiteSpace&&(p<d.textPxLength||"SPAN"===d.element.tagName)?(c.width=p+"px",x||(c.textOverflow=d.specificTextOverflow||n),d.css(c)):d.styles&&d.styles.width&&!c.width&&!a&&d.css({width:null}),delete d.specificTextOverflow,b.rotation=r.rotation)},this);this.tickRotCorr=a.rotCorr(k.b,this.labelRotation||0,0!==this.side)};a.prototype.hasData=function(){return this.series.some(function(b){return b.hasData()})||
        this.options.showEmpty&&p(this.min)&&p(this.max)};a.prototype.addTitle=function(b){var d=this.chart.renderer,a=this.horiz,c=this.opposite,e=this.options.title,g=this.chart.styledMode,l;this.axisTitle||((l=e.textAlign)||(l=(a?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[e.align]),this.axisTitle=d.text(e.text||"",0,0,e.useHTML).attr({zIndex:7,rotation:e.rotation,align:l}).addClass("highcharts-axis-title"),g||this.axisTitle.css(m(e.style)),this.axisTitle.add(this.axisGroup),
        this.axisTitle.isNew=!0);g||e.style.width||this.isRadial||this.axisTitle.css({width:this.len+"px"});this.axisTitle[b?"show":"hide"](b)};a.prototype.generateTick=function(b){var d=this.ticks;d[b]?d[b].addLabel():d[b]=new H(this,b)};a.prototype.getOffset=function(){var b=this,d=this,a=d.chart,c=d.horiz,e=d.options,g=d.side,m=d.ticks,l=d.tickPositions,f=d.coll,h=d.axisParent,k=a.renderer,D=a.inverted&&!d.isZAxis?[1,0,3,2][g]:g,n=d.hasData(),t=e.title,C=e.labels,q=a.axisOffset;a=a.clipOffset;var w=[-1,
        1,1,-1][g],B=e.className,P,J=0,ja=0,ca=0;d.showAxis=P=n||e.showEmpty;d.staggerLines=d.horiz&&C.staggerLines||void 0;if(!d.axisGroup){var v=function(d,a,c){return k.g(d).attr({zIndex:c}).addClass("highcharts-"+f.toLowerCase()+a+" "+(b.isRadial?"highcharts-radial-axis"+a+" ":"")+(B||"")).add(h)};d.gridGroup=v("grid","-grid",e.gridZIndex);d.axisGroup=v("axis","",e.zIndex);d.labelGroup=v("axis-labels","-labels",C.zIndex)}n||d.isLinked?(l.forEach(function(b){d.generateTick(b)}),d.renderUnsquish(),d.reserveSpaceDefault=
        0===g||2===g||{1:"left",3:"right"}[g]===d.labelAlign,I(C.reserveSpace,"center"===d.labelAlign?!0:null,d.reserveSpaceDefault)&&l.forEach(function(b){ca=Math.max(m[b].getLabelSize(),ca)}),d.staggerLines&&(ca*=d.staggerLines),d.labelOffset=ca*(d.opposite?-1:1)):x(m,function(b,d){b.destroy();delete m[d]});if(t&&t.text&&!1!==t.enabled&&(d.addTitle(P),P&&!1!==t.reserveSpace)){d.titleOffset=J=d.axisTitle.getBBox()[c?"height":"width"];var O=t.offset;ja=p(O)?0:I(t.margin,c?5:10)}d.renderLine();d.offset=w*
        I(e.offset,q[g]?q[g]+(e.margin||0):0);d.tickRotCorr=d.tickRotCorr||{x:0,y:0};t=0===g?-d.labelMetrics().h:2===g?d.tickRotCorr.y:0;n=Math.abs(ca)+ja;ca&&(n=n-t+w*(c?I(C.y,d.tickRotCorr.y+8*w):C.x));d.axisTitleMargin=I(O,n);d.getMaxLabelDimensions&&(d.maxLabelDimensions=d.getMaxLabelDimensions(m,l));"colorAxis"!==f&&(c=this.tickSize("tick"),q[g]=Math.max(q[g],(d.axisTitleMargin||0)+J+w*d.offset,n,l&&l.length&&c?c[0]+w*d.offset:0),e=!d.axisLine||e.offset?0:2*Math.floor(d.axisLine.strokeWidth()/2),a[D]=
        Math.max(a[D],e));r(this,"afterGetOffset")};a.prototype.getLinePath=function(b){var d=this.chart,a=this.opposite,c=this.offset,e=this.horiz,g=this.left+(a?this.width:0)+c;c=d.chartHeight-this.bottom-(a?this.height:0)+c;a&&(b*=-1);return d.renderer.crispLine([["M",e?this.left:g,e?c:this.top],["L",e?d.chartWidth-this.right:g,e?c:d.chartHeight-this.bottom]],b)};a.prototype.renderLine=function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
    this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))};a.prototype.getTitlePosition=function(){var b=this.horiz,d=this.left,a=this.top,c=this.len,e=this.options.title,g=b?d:a,m=this.opposite,l=this.offset,f=e.x,h=e.y,k=this.axisTitle,x=this.chart.renderer.fontMetrics(e.style.fontSize,k);k=Math.max(k.getBBox(null,0).height-x.h-1,0);c={low:g+(b?0:c),middle:g+c/2,high:g+(b?c:0)}[e.align];d=(b?a+this.height:d)+(b?1:-1)*(m?-1:1)*this.axisTitleMargin+
        [-k,k,x.f,-k][this.side];b={x:b?c+f:d+(m?this.width:0)+l+f,y:b?d+h-(m?this.height:0)+l:c+h};r(this,"afterGetTitlePosition",{titlePosition:b});return b};a.prototype.renderMinorTick=function(b,d){var a=this.minorTicks;a[b]||(a[b]=new H(this,b,"minor"));d&&a[b].isNew&&a[b].render(null,!0);a[b].render(null,!1,1)};a.prototype.renderTick=function(b,d,a){var c=this.ticks;if(!this.isLinked||b>=this.min&&b<=this.max||this.grid&&this.grid.isColumn)c[b]||(c[b]=new H(this,b)),a&&c[b].isNew&&c[b].render(d,!0,
        -1),c[b].render(d)};a.prototype.render=function(){var b=this,d=b.chart,a=b.logarithmic,c=b.options,e=b.isLinked,m=b.tickPositions,l=b.axisTitle,f=b.ticks,h=b.minorTicks,k=b.alternateBands,D=c.stackLabels,p=c.alternateGridColor,n=b.tickmarkOffset,I=b.axisLine,t=b.showAxis,C=q(d.renderer.globalAnimation),w,B;b.labelEdge.length=0;b.overlap=!1;[f,h,k].forEach(function(b){x(b,function(b){b.isActive=!1})});if(b.hasData()||e){var P=b.chart.hasRendered&&b.old&&g(b.old.min);b.minorTickInterval&&!b.categories&&
    b.getMinorTickPositions().forEach(function(d){b.renderMinorTick(d,P)});m.length&&(m.forEach(function(d,a){b.renderTick(d,a,P)}),n&&(0===b.min||b.single)&&(f[-1]||(f[-1]=new H(b,-1,null,!0)),f[-1].render(-1)));p&&m.forEach(function(c,e){B="undefined"!==typeof m[e+1]?m[e+1]+n:b.max-n;0===e%2&&c<b.max&&B<=b.max+(d.polar?-n:n)&&(k[c]||(k[c]=new G.PlotLineOrBand(b)),w=c+n,k[c].options={from:a?a.lin2log(w):w,to:a?a.lin2log(B):B,color:p,className:"highcharts-alternate-grid"},k[c].render(),k[c].isActive=
        !0)});b._addedPlotLB||(b._addedPlotLB=!0,(c.plotLines||[]).concat(c.plotBands||[]).forEach(function(d){b.addPlotBandOrLine(d)}))}[f,h,k].forEach(function(b){var a=[],c=C.duration;x(b,function(b,d){b.isActive||(b.render(d,!1,0),b.isActive=!1,a.push(d))});U(function(){for(var d=a.length;d--;)b[a[d]]&&!b[a[d]].isActive&&(b[a[d]].destroy(),delete b[a[d]])},b!==k&&d.hasRendered&&c?c:0)});I&&(I[I.isPlaced?"animate":"attr"]({d:this.getLinePath(I.strokeWidth())}),I.isPlaced=!0,I[t?"show":"hide"](t));l&&t&&
    (c=b.getTitlePosition(),g(c.y)?(l[l.isNew?"attr":"animate"](c),l.isNew=!1):(l.attr("y",-9999),l.isNew=!0));D&&D.enabled&&b.stacking&&b.stacking.renderStackTotals();b.old={len:b.len,max:b.max,min:b.min,transA:b.transA,userMax:b.userMax,userMin:b.userMin};b.isDirty=!1;r(this,"afterRender")};a.prototype.redraw=function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(b){b.render()}));this.series.forEach(function(b){b.isDirty=!0})};a.prototype.getKeepProps=function(){return this.keepProps||
        a.keepProps};a.prototype.destroy=function(b){var d=this,a=d.plotLinesAndBands,c=this.eventOptions;r(this,"destroy",{keepEvents:b});b||v(d);[d.ticks,d.minorTicks,d.alternateBands].forEach(function(b){B(b)});if(a)for(b=a.length;b--;)a[b].destroy();"axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b){d[b]&&(d[b]=d[b].destroy())});for(var e in d.plotLinesAndBandsGroups)d.plotLinesAndBandsGroups[e]=d.plotLinesAndBandsGroups[e].destroy();x(d,function(b,a){-1===
    d.getKeepProps().indexOf(a)&&delete d[a]});this.eventOptions=c};a.prototype.drawCrosshair=function(b,d){var a=this.crosshair,c=I(a&&a.snap,!0),e=this.chart,g,m=this.cross;r(this,"drawCrosshair",{e:b,point:d});b||(b=this.cross&&this.cross.e);if(a&&!1!==(p(d)||!c)){c?p(d)&&(g=I("colorAxis"!==this.coll?d.crosshairPos:null,this.isXAxis?d.plotX:this.len-d.plotY)):g=b&&(this.horiz?b.chartX-this.pos:this.len-b.chartY+this.pos);if(p(g)){var l={value:d&&(this.isXAxis?d.x:I(d.stackY,d.y)),translatedValue:g};
        e.polar&&C(l,{isCrosshair:!0,chartX:b&&b.chartX,chartY:b&&b.chartY,point:d});l=this.getPlotLinePath(l)||null}if(!p(l)){this.hideCrosshair();return}c=this.categories&&!this.isRadial;m||(this.cross=m=e.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(c?"category ":"thin ")+(a.className||"")).attr({zIndex:I(a.zIndex,2)}).add(),e.styledMode||(m.attr({stroke:a.color||(c?z.parse("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":I(a.width,1)}).css({"pointer-events":"none"}),
    a.dashStyle&&m.attr({dashstyle:a.dashStyle})));m.show().attr({d:l});c&&!a.width&&m.attr({"stroke-width":this.transA});this.cross.e=b}else this.hideCrosshair();r(this,"afterDrawCrosshair",{e:b,point:d})};a.prototype.hideCrosshair=function(){this.cross&&this.cross.hide();r(this,"afterHideCrosshair")};a.prototype.hasVerticalPanning=function(){var b=this.chart.options.chart.panning;return!!(b&&b.enabled&&/y/.test(b.type))};a.prototype.validatePositiveValue=function(b){return g(b)&&0<b};a.prototype.update=
        function(b,d){var a=this.chart;b=m(this.userOptions,b);this.destroy(!0);this.init(a,b);a.isDirtyBox=!0;I(d,!0)&&a.redraw()};a.prototype.remove=function(b){for(var d=this.chart,a=this.coll,c=this.series,e=c.length;e--;)c[e]&&c[e].remove(!1);t(d.axes,this);t(d[a],this);d[a].forEach(function(b,d){b.options.index=b.userOptions.index=d});this.destroy();d.isDirtyBox=!0;I(b,!0)&&d.redraw()};a.prototype.setTitle=function(b,d){this.update({title:b},d)};a.prototype.setCategories=function(b,d){this.update({categories:b},
        d)};a.defaultOptions=u.defaultXAxisOptions;a.keepProps="extKey hcEvents names series userMax userMin".split(" ");return a}();"";return a});M(a,"Core/Axis/DateTimeAxis.js",[a["Core/Utilities.js"]],function(a){var v=a.addEvent,z=a.getMagnitude,F=a.normalizeTickInterval,y=a.timeUnits,G;(function(a){function u(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)}function q(a){"datetime"!==a.userOptions.type?this.dateTime=void 0:this.dateTime||(this.dateTime=new k(this))}var n=[];a.compose=
    function(a){-1===n.indexOf(a)&&(n.push(a),a.keepProps.push("dateTime"),a.prototype.getTimeTicks=u,v(a,"init",q));return a};var k=function(){function a(a){this.axis=a}a.prototype.normalizeTimeTickInterval=function(a,e){var c=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];e=c[c.length-1];var h=y[e[0]],k=e[1],n;for(n=0;n<c.length&&!(e=c[n],h=y[e[0]],
    k=e[1],c[n+1]&&a<=(h*k[k.length-1]+y[c[n+1][0]])/2);n++);h===y.year&&a<5*h&&(k=[1,2,5]);a=F(a/h,k,"year"===e[0]?Math.max(z(a/h),1):1);return{unitRange:h,count:a,unitName:e[0]}};a.prototype.getXDateFormat=function(a,e){var c=this.axis;return c.closestPointRange?c.chart.time.getDateFormat(c.closestPointRange,a,c.options.startOfWeek,e)||e.year:e.day};return a}();a.Additions=k})(G||(G={}));return G});M(a,"Core/Axis/LogarithmicAxis.js",[a["Core/Utilities.js"]],function(a){var v=a.addEvent,z=a.getMagnitude,
    F=a.normalizeTickInterval,y=a.pick,G;(function(a){function u(a){var c=this.logarithmic;"logarithmic"!==a.userOptions.type?this.logarithmic=void 0:c||(this.logarithmic=new k(this))}function q(){var a=this.logarithmic;a&&(this.lin2val=function(c){return a.lin2log(c)},this.val2lin=function(c){return a.log2lin(c)})}var n=[];a.compose=function(a){-1===n.indexOf(a)&&(n.push(a),a.keepProps.push("logarithmic"),v(a,"init",u),v(a,"afterInit",q));return a};var k=function(){function a(a){this.axis=a}a.prototype.getLogTickPositions=
    function(a,e,f,k){var c=this.axis,h=c.len,n=c.options,q=[];k||(this.minorAutoInterval=void 0);if(.5<=a)a=Math.round(a),q=c.getLinearTickPositions(a,e,f);else if(.08<=a){var C=Math.floor(e),r,l=n=void 0;for(h=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];C<f+1&&!l;C++){var b=h.length;for(r=0;r<b&&!l;r++){var g=this.log2lin(this.lin2log(C)*h[r]);g>e&&(!k||n<=f)&&"undefined"!==typeof n&&q.push(n);n>f&&(l=!0);n=g}}}else e=this.lin2log(e),f=this.lin2log(f),a=k?c.getMinorTickInterval():n.tickInterval,
        a=y("auto"===a?null:a,this.minorAutoInterval,n.tickPixelInterval/(k?5:1)*(f-e)/((k?h/c.tickPositions.length:h)||1)),a=F(a,void 0,z(a)),q=c.getLinearTickPositions(a,e,f).map(this.log2lin),k||(this.minorAutoInterval=a/5);k||(c.tickInterval=a);return q};a.prototype.lin2log=function(a){return Math.pow(10,a)};a.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};return a}();a.Additions=k})(G||(G={}));return G});M(a,"Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",[a["Core/Utilities.js"]],function(a){var v=
    a.erase,z=a.extend,F=a.isNumber,y;(function(a){var u=[],A;a.compose=function(a,k){A||(A=a);-1===u.indexOf(k)&&(u.push(k),z(k.prototype,q.prototype));return k};var q=function(){function a(){}a.prototype.getPlotBandPath=function(a,e,c){void 0===c&&(c=this.options);var h=this.getPlotLinePath({value:e,force:!0,acrossPanes:c.acrossPanes}),f=[],k=this.horiz;e=!F(this.min)||!F(this.max)||a<this.min&&e<this.min||a>this.max&&e>this.max;a=this.getPlotLinePath({value:a,force:!0,acrossPanes:c.acrossPanes});c=
    1;if(a&&h){if(e){var p=a.toString()===h.toString();c=0}for(e=0;e<a.length;e+=2){var n=a[e],t=a[e+1],q=h[e],C=h[e+1];"M"!==n[0]&&"L"!==n[0]||"M"!==t[0]&&"L"!==t[0]||"M"!==q[0]&&"L"!==q[0]||"M"!==C[0]&&"L"!==C[0]||(k&&q[1]===n[1]?(q[1]+=c,C[1]+=c):k||q[2]!==n[2]||(q[2]+=c,C[2]+=c),f.push(["M",n[1],n[2]],["L",t[1],t[2]],["L",C[1],C[2]],["L",q[1],q[2]],["Z"]));f.isFlat=p}}return f};a.prototype.addPlotBand=function(a){return this.addPlotBandOrLine(a,"plotBands")};a.prototype.addPlotLine=function(a){return this.addPlotBandOrLine(a,
    "plotLines")};a.prototype.addPlotBandOrLine=function(a,e){var c=this,h=this.userOptions,f=new A(this,a);this.visible&&(f=f.render());if(f){this._addedPlotLB||(this._addedPlotLB=!0,(h.plotLines||[]).concat(h.plotBands||[]).forEach(function(a){c.addPlotBandOrLine(a)}));if(e){var k=h[e]||[];k.push(a);h[e]=k}this.plotLinesAndBands.push(f)}return f};a.prototype.removePlotBandOrLine=function(a){var e=this.plotLinesAndBands,c=this.options,h=this.userOptions;if(e){for(var f=e.length;f--;)e[f].id===a&&e[f].destroy();
    [c.plotLines||[],h.plotLines||[],c.plotBands||[],h.plotBands||[]].forEach(function(c){for(f=c.length;f--;)(c[f]||{}).id===a&&v(c,c[f])})}};a.prototype.removePlotBand=function(a){this.removePlotBandOrLine(a)};a.prototype.removePlotLine=function(a){this.removePlotBandOrLine(a)};return a}()})(y||(y={}));return y});M(a,"Core/Axis/PlotLineOrBand/PlotLineOrBand.js",[a["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],a["Core/Utilities.js"]],function(a,u){var v=u.arrayMax,F=u.arrayMin,y=u.defined,G=u.destroyObjectProperties,
    H=u.erase,A=u.fireEvent,q=u.merge,n=u.objectEach,k=u.pick;u=function(){function e(a,e){this.axis=a;e&&(this.options=e,this.id=e.id)}e.compose=function(c){return a.compose(e,c)};e.prototype.render=function(){A(this,"render");var a=this,e=a.axis,f=e.horiz,w=e.logarithmic,p=a.options,B=p.color,t=k(p.zIndex,0),v=p.events,C={},r=e.chart.renderer,l=p.label,b=a.label,g=p.to,d=p.from,m=p.value,D=a.svgElem,x=[],I=y(d)&&y(g);x=y(m);var P=!D,S={"class":"highcharts-plot-"+(I?"band ":"line ")+(p.className||"")},
    O=I?"bands":"lines";w&&(d=w.log2lin(d),g=w.log2lin(g),m=w.log2lin(m));e.chart.styledMode||(x?(S.stroke=B||"#999999",S["stroke-width"]=k(p.width,1),p.dashStyle&&(S.dashstyle=p.dashStyle)):I&&(S.fill=B||"#e6ebf5",p.borderWidth&&(S.stroke=p.borderColor,S["stroke-width"]=p.borderWidth)));C.zIndex=t;O+="-"+t;(w=e.plotLinesAndBandsGroups[O])||(e.plotLinesAndBandsGroups[O]=w=r.g("plot-"+O).attr(C).add());P&&(a.svgElem=D=r.path().attr(S).add(w));if(x)x=e.getPlotLinePath({value:m,lineWidth:D.strokeWidth(),
    acrossPanes:p.acrossPanes});else if(I)x=e.getPlotBandPath(d,g,p);else return;!a.eventsAdded&&v&&(n(v,function(b,d){D.on(d,function(b){v[d].apply(a,[b])})}),a.eventsAdded=!0);(P||!D.d)&&x&&x.length?D.attr({d:x}):D&&(x?(D.show(!0),D.animate({d:x})):D.d&&(D.hide(),b&&(a.label=b=b.destroy())));l&&(y(l.text)||y(l.formatter))&&x&&x.length&&0<e.width&&0<e.height&&!x.isFlat?(l=q({align:f&&I&&"center",x:f?!I&&4:10,verticalAlign:!f&&I&&"middle",y:f?I?16:10:I?6:-4,rotation:f&&!I&&90},l),this.renderLabel(l,x,
    I,t)):b&&b.hide();return a};e.prototype.renderLabel=function(a,e,f,k){var c=this.axis,h=c.chart.renderer,n=this.label;n||(this.label=n=h.text(this.getLabelText(a),0,0,a.useHTML).attr({align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(f?"band":"line")+"-label "+(a.className||""),zIndex:k}).add(),c.chart.styledMode||n.css(q({textOverflow:"ellipsis"},a.style)));k=e.xBounds||[e[0][1],e[1][1],f?e[2][1]:e[0][1]];e=e.yBounds||[e[0][2],e[1][2],f?e[2][2]:e[0][2]];f=F(k);h=F(e);n.align(a,
    !1,{x:f,y:h,width:v(k)-f,height:v(e)-h});n.alignValue&&"left"!==n.alignValue||n.css({width:(90===n.rotation?c.height-(n.alignAttr.y-c.top):c.width-(n.alignAttr.x-c.left))+"px"});n.show(!0)};e.prototype.getLabelText=function(a){return y(a.formatter)?a.formatter.call(this):a.text};e.prototype.destroy=function(){H(this.axis.plotLinesAndBands,this);delete this.axis;G(this)};return e}();"";"";return u});M(a,"Core/Tooltip.js",[a["Core/FormatUtilities.js"],a["Core/Globals.js"],a["Core/Renderer/RendererUtilities.js"],
    a["Core/Renderer/RendererRegistry.js"],a["Core/Utilities.js"]],function(a,u,z,F,y){var v=a.format,H=u.doc,A=z.distribute,q=y.addEvent,n=y.clamp,k=y.css,e=y.defined,c=y.discardElement,h=y.extend,f=y.fireEvent,w=y.isArray,p=y.isNumber,B=y.isString,t=y.merge,J=y.pick,C=y.splat,r=y.syncTimeout;a=function(){function a(b,a){this.allowShared=!0;this.container=void 0;this.crosshairs=[];this.distance=0;this.isHidden=!0;this.isSticky=!1;this.now={};this.options={};this.outside=!1;this.chart=b;this.init(b,a)}
    a.prototype.applyFilter=function(){var b=this.chart;b.renderer.definition({tagName:"filter",attributes:{id:"drop-shadow-"+b.index,opacity:.5},children:[{tagName:"feGaussianBlur",attributes:{"in":"SourceAlpha",stdDeviation:1}},{tagName:"feOffset",attributes:{dx:1,dy:1}},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",attributes:{type:"linear",slope:.3}}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode",attributes:{"in":"SourceGraphic"}}]}]})};a.prototype.bodyFormatter=
        function(b){return b.map(function(b){var a=b.series.tooltipOptions;return(a[(b.point.formatPrefix||"point")+"Formatter"]||b.point.tooltipFormatter).call(b.point,a[(b.point.formatPrefix||"point")+"Format"]||"")})};a.prototype.cleanSplit=function(b){this.chart.series.forEach(function(a){var d=a&&a.tt;d&&(!d.isActive||b?a.tt=d.destroy():d.isActive=!1)})};a.prototype.defaultFormatter=function(b){var a=this.points||C(this);var d=[b.tooltipFooterHeaderFormatter(a[0])];d=d.concat(b.bodyFormatter(a));d.push(b.tooltipFooterHeaderFormatter(a[0],
        !0));return d};a.prototype.destroy=function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),c(this.container));y.clearTimeout(this.hideTimer);y.clearTimeout(this.tooltipTimeout)};a.prototype.getAnchor=function(b,a){var d=this.chart,c=d.pointer,e=d.inverted,g=d.plotTop,l=d.plotLeft,f,r,h=0,k=0;b=C(b);this.followPointer&&a?("undefined"===typeof a.chartX&&(a=c.normalize(a)),c=[a.chartX-
    l,a.chartY-g]):b[0].tooltipPos?c=b[0].tooltipPos:(b.forEach(function(b){f=b.series.yAxis;r=b.series.xAxis;h+=b.plotX||0;k+=b.plotLow?(b.plotLow+(b.plotHigh||0))/2:b.plotY||0;r&&f&&(e?(h+=g+d.plotHeight-r.len-r.pos,k+=l+d.plotWidth-f.len-f.pos):(h+=r.pos-l,k+=f.pos-g))}),h/=b.length,k/=b.length,c=[e?d.plotWidth-k:h,e?d.plotHeight-h:k],this.shared&&1<b.length&&a&&(e?c[0]=a.chartX-l:c[1]=a.chartY-g));return c.map(Math.round)};a.prototype.getLabel=function(){var b=this,a=this.chart.styledMode,d=this.options,
        c=this.split&&this.allowShared,l="tooltip"+(e(d.className)?" "+d.className:""),f=d.style.pointerEvents||(!this.followPointer&&d.stickOnContact?"auto":"none"),r=function(){b.inContact=!0},h=function(a){var d=b.chart.hoverSeries;b.inContact=b.shouldStickOnContact()&&b.chart.pointer.inClass(a.relatedTarget,"highcharts-tooltip");if(!b.inContact&&d&&d.onMouseOut)d.onMouseOut()},p,n=this.chart.renderer;if(b.label){var t=!b.label.hasClass("highcharts-label");(c&&!t||!c&&t)&&b.destroy()}if(!this.label){if(this.outside){t=
        this.chart.options.chart.style;var C=F.getRendererType();this.container=p=u.doc.createElement("div");p.className="highcharts-tooltip-container";k(p,{position:"absolute",top:"1px",pointerEvents:f,zIndex:Math.max(this.options.style.zIndex||0,(t&&t.zIndex||0)+3)});q(p,"mouseenter",r);q(p,"mouseleave",h);u.doc.body.appendChild(p);this.renderer=n=new C(p,0,0,t,void 0,void 0,n.styledMode)}c?this.label=n.g(l):(this.label=n.label("",0,0,d.shape,void 0,void 0,d.useHTML,void 0,l).attr({padding:d.padding,r:d.borderRadius}),
    a||this.label.attr({fill:d.backgroundColor,"stroke-width":d.borderWidth}).css(d.style).css({pointerEvents:f}).shadow(d.shadow));a&&d.shadow&&(this.applyFilter(),this.label.attr({filter:"url(#drop-shadow-"+this.chart.index+")"}));if(b.outside&&!b.split){var B=this.label,w=B.xSetter,v=B.ySetter;B.xSetter=function(a){w.call(B,b.distance);p.style.left=a+"px"};B.ySetter=function(a){v.call(B,b.distance);p.style.top=a+"px"}}this.label.on("mouseenter",r).on("mouseleave",h).attr({zIndex:8}).add()}return this.label};
    a.prototype.getPosition=function(b,a,d){var c=this.chart,e=this.distance,g={},l=c.inverted&&d.h||0,f=this.outside,r=f?H.documentElement.clientWidth-2*e:c.chartWidth,h=f?Math.max(H.body.scrollHeight,H.documentElement.scrollHeight,H.body.offsetHeight,H.documentElement.offsetHeight,H.documentElement.clientHeight):c.chartHeight,k=c.pointer.getChartPosition(),p=function(g){var m="x"===g;return[g,m?r:h,m?b:a].concat(f?[m?b*k.scaleX:a*k.scaleY,m?k.left-e+(d.plotX+c.plotLeft)*k.scaleX:k.top-e+(d.plotY+c.plotTop)*
        k.scaleY,0,m?r:h]:[m?b:a,m?d.plotX+c.plotLeft:d.plotY+c.plotTop,m?c.plotLeft:c.plotTop,m?c.plotLeft+c.plotWidth:c.plotTop+c.plotHeight])},n=p("y"),t=p("x"),C;p=!!d.negative;!c.polar&&c.hoverSeries&&c.hoverSeries.yAxis&&c.hoverSeries.yAxis.reversed&&(p=!p);var q=!this.followPointer&&J(d.ttBelow,!c.inverted===p),B=function(b,a,d,c,m,r,h){var x=f?"y"===b?e*k.scaleY:e*k.scaleX:e,D=(d-c)/2,p=c<m-e,E=m+e+c<a,n=m-x-d+D;m=m+x-D;if(q&&E)g[b]=m;else if(!q&&p)g[b]=n;else if(p)g[b]=Math.min(h-c,0>n-l?n:n-l);
    else if(E)g[b]=Math.max(r,m+l+d>a?m:m+l);else return!1},w=function(b,a,d,c,m){var l;m<e||m>a-e?l=!1:g[b]=m<d/2?1:m>a-c/2?a-c-2:m-d/2;return l},E=function(b){var a=n;n=t;t=a;C=b},T=function(){!1!==B.apply(0,n)?!1!==w.apply(0,t)||C||(E(!0),T()):C?g.x=g.y=0:(E(!0),T())};(c.inverted||1<this.len)&&E();T();return g};a.prototype.hide=function(b){var a=this;y.clearTimeout(this.hideTimer);b=J(b,this.options.hideDelay);this.isHidden||(this.hideTimer=r(function(){a.getLabel().fadeOut(b?void 0:b);a.isHidden=
        !0},b))};a.prototype.init=function(b,a){this.chart=b;this.options=a;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=a.split&&!b.inverted&&!b.polar;this.shared=a.shared||this.split;this.outside=J(a.outside,!(!b.scrollablePixelsX&&!b.scrollablePixelsY))};a.prototype.shouldStickOnContact=function(){return!(this.followPointer||!this.options.stickOnContact)};a.prototype.isStickyOnContact=function(){return!(!this.shouldStickOnContact()||!this.inContact)};a.prototype.move=function(b,a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         d,c){var e=this,g=e.now,m=!1!==e.options.animation&&!e.isHidden&&(1<Math.abs(b-g.x)||1<Math.abs(a-g.y)),l=e.followPointer||1<e.len;h(g,{x:m?(2*g.x+b)/3:b,y:m?(g.y+a)/2:a,anchorX:l?void 0:m?(2*g.anchorX+d)/3:d,anchorY:l?void 0:m?(g.anchorY+c)/2:c});e.getLabel().attr(g);e.drawTracker();m&&(y.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(b,a,d,c)},32))};a.prototype.refresh=function(b,a){var d=this.chart,c=this.options,e=C(b),g=e[0],l=[],r=c.formatter||this.defaultFormatter,
        h=this.shared,k=d.styledMode,p={};if(c.enabled){y.clearTimeout(this.hideTimer);this.allowShared=!(!w(b)&&b.series&&b.series.noSharedTooltip);this.followPointer=!this.split&&g.series.tooltipOptions.followPointer;b=this.getAnchor(b,a);var n=b[0],t=b[1];h&&this.allowShared?(d.pointer.applyInactiveState(e),e.forEach(function(b){b.setState("hover");l.push(b.getLabelConfig())}),p={x:g.category,y:g.y},p.points=l):p=g.getLabelConfig();this.len=l.length;r=r.call(p,this);h=g.series;this.distance=J(h.tooltipOptions.distance,
        16);if(!1===r)this.hide();else{if(this.split&&this.allowShared)this.renderSplit(r,e);else{var q=n,B=t;a&&d.pointer.isDirectTouch&&(q=a.chartX-d.plotLeft,B=a.chartY-d.plotTop);if(d.polar||!1===h.options.clip||e.some(function(b){return b.series.shouldShowTooltip(q,B)}))a=this.getLabel(),c.style.width&&!k||a.css({width:this.chart.spacingBox.width+"px"}),a.attr({text:r&&r.join?r.join(""):r}),a.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+J(g.colorIndex,h.colorIndex)),k||a.attr({stroke:c.borderColor||
            g.color||h.color||"#666666"}),this.updatePosition({plotX:n,plotY:t,negative:g.negative,ttBelow:g.ttBelow,h:b[2]||0});else{this.hide();return}}this.isHidden&&this.label&&this.label.attr({opacity:1}).show();this.isHidden=!1}f(this,"refresh")}};a.prototype.renderSplit=function(b,a){function d(b,a,d,e,g){void 0===g&&(g=!0);d?(a=X?0:G,b=n(b-e/2,N.left,N.right-e-(c.outside?R:0))):(a-=z,b=g?b-e-y:b+y,b=n(b,g?b:N.left,N.right));return{x:b,y:a}}var c=this,e=c.chart,g=c.chart,l=g.chartWidth,f=g.chartHeight,
        r=g.plotHeight,k=g.plotLeft,p=g.plotTop,t=g.pointer,C=g.scrollablePixelsY;C=void 0===C?0:C;var q=g.scrollablePixelsX,w=g.scrollingContainer;w=void 0===w?{scrollLeft:0,scrollTop:0}:w;var v=w.scrollLeft;w=w.scrollTop;var u=g.styledMode,y=c.distance,E=c.options,T=c.options.positioner,N=c.outside&&"number"!==typeof q?H.documentElement.getBoundingClientRect():{left:v,right:v+l,top:w,bottom:w+f},V=c.getLabel(),W=this.renderer||e.renderer,X=!(!e.xAxis[0]||!e.xAxis[0].opposite);e=t.getChartPosition();var R=
        e.left;e=e.top;var z=p+w,aa=0,G=r-C;B(b)&&(b=[!1,b]);b=b.slice(0,a.length+1).reduce(function(b,e,g){if(!1!==e&&""!==e){g=a[g-1]||{isHeader:!0,plotX:a[0].plotX,plotY:r,series:{}};var m=g.isHeader,l=m?c:g.series;e=e.toString();var f=l.tt,h=g.isHeader;var x=g.series;var D="highcharts-color-"+J(g.colorIndex,x.colorIndex,"none");f||(f={padding:E.padding,r:E.borderRadius},u||(f.fill=E.backgroundColor,f["stroke-width"]=E.borderWidth),f=W.label("",0,0,E[h?"headerShape":"shape"],void 0,void 0,E.useHTML).addClass((h?
        "highcharts-tooltip-header ":"")+"highcharts-tooltip-box "+D).attr(f).add(V));f.isActive=!0;f.attr({text:e});u||f.css(E.style).shadow(E.shadow).attr({stroke:E.borderColor||g.color||x.color||"#333333"});l=l.tt=f;h=l.getBBox();e=h.width+l.strokeWidth();m&&(aa=h.height,G+=aa,X&&(z-=aa));x=g.plotX;x=void 0===x?0:x;D=g.plotY;D=void 0===D?0:D;f=g.series;if(g.isHeader){x=k+x;var t=p+r/2}else{var I=f.xAxis,C=f.yAxis;x=I.pos+n(x,-y,I.len+y);f.shouldShowTooltip(0,C.pos-p+D,{ignoreX:!0})&&(t=C.pos+D)}x=n(x,
        N.left-y,N.right+y);"number"===typeof t?(h=h.height+1,D=T?T.call(c,e,h,g):d(x,t,m,e),b.push({align:T?0:void 0,anchorX:x,anchorY:t,boxWidth:e,point:g,rank:J(D.rank,m?1:0),size:h,target:D.y,tt:l,x:D.x})):l.isActive=!1}return b},[]);!T&&b.some(function(b){var a=(c.outside?R:0)+b.anchorX;return a<N.left&&a+b.boxWidth<N.right?!0:a<R-N.left+b.boxWidth&&N.right-a>a})&&(b=b.map(function(b){var a=d(b.anchorX,b.anchorY,b.point.isHeader,b.boxWidth,!1);return h(b,{target:a.y,x:a.x})}));c.cleanSplit();A(b,G);
        var F=R,ba=R;b.forEach(function(b){var a=b.x,d=b.boxWidth;b=b.isHeader;b||(c.outside&&R+a<F&&(F=R+a),!b&&c.outside&&F+d>ba&&(ba=R+a))});b.forEach(function(b){var a=b.x,d=b.anchorX,e=b.pos,g=b.point.isHeader;e={visibility:"undefined"===typeof e?"hidden":"inherit",x:a,y:e+z,anchorX:d,anchorY:b.anchorY};if(c.outside&&a<d){var m=R-F;0<m&&(g||(e.x=a+m,e.anchorX=d+m),g&&(e.x=(ba-F)/2,e.anchorX=d+m))}b.tt.attr(e)});b=c.container;C=c.renderer;c.outside&&b&&C&&(g=V.getBBox(),C.setSize(g.width+g.x,g.height+
            g.y,!1),b.style.left=F+"px",b.style.top=e+"px")};a.prototype.drawTracker=function(){if(this.followPointer||!this.options.stickOnContact)this.tracker&&this.tracker.destroy();else{var b=this.chart,a=this.label,d=this.shared?b.hoverPoints:b.hoverPoint;if(a&&d){var c={x:0,y:0,width:0,height:0};d=this.getAnchor(d);var e=a.getBBox();d[0]+=b.plotLeft-a.translateX;d[1]+=b.plotTop-a.translateY;c.x=Math.min(0,d[0]);c.y=Math.min(0,d[1]);c.width=0>d[0]?Math.max(Math.abs(d[0]),e.width-d[0]):Math.max(Math.abs(d[0]),
        e.width);c.height=0>d[1]?Math.max(Math.abs(d[1]),e.height-Math.abs(d[1])):Math.max(Math.abs(d[1]),e.height);this.tracker?this.tracker.attr(c):(this.tracker=a.renderer.rect(c).addClass("highcharts-tracker").add(a),b.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}};a.prototype.styledModeFormat=function(b){return b.replace('style="font-size: 10px"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')};a.prototype.tooltipFooterHeaderFormatter=
        function(b,a){var d=b.series,c=d.tooltipOptions,e=d.xAxis,g=e&&e.dateTime;e={isFooter:a,labelConfig:b};var l=c.xDateFormat,r=c[a?"footerFormat":"headerFormat"];f(this,"headerFormatter",e,function(a){g&&!l&&p(b.key)&&(l=g.getXDateFormat(b.key,c.dateTimeLabelFormats));g&&l&&(b.point&&b.point.tooltipDateKeys||["key"]).forEach(function(b){r=r.replace("{point."+b+"}","{point."+b+":"+l+"}")});d.chart.styledMode&&(r=this.styledModeFormat(r));a.text=v(r,{point:b,series:d},this.chart)});return e.text};a.prototype.update=
        function(b){this.destroy();t(!0,this.chart.options.tooltip.userOptions,b);this.init(this.chart,t(!0,this.options,b))};a.prototype.updatePosition=function(b){var a=this.chart,d=this.options,c=a.pointer,e=this.getLabel();c=c.getChartPosition();var l=(d.positioner||this.getPosition).call(this,e.width,e.height,b),f=b.plotX+a.plotLeft;b=b.plotY+a.plotTop;if(this.outside){d=d.borderWidth+2*this.distance;this.renderer.setSize(e.width+d,e.height+d,!1);if(1!==c.scaleX||1!==c.scaleY)k(this.container,{transform:"scale("+
            c.scaleX+", "+c.scaleY+")"}),f*=c.scaleX,b*=c.scaleY;f+=c.left-l.x;b+=c.top-l.y}this.move(Math.round(l.x),Math.round(l.y||0),f,b)};return a}();"";return a});M(a,"Core/Series/Point.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Animation/AnimationUtilities.js"],a["Core/DefaultOptions.js"],a["Core/FormatUtilities.js"],a["Core/Utilities.js"]],function(a,u,z,F,y){var v=u.animObject,H=z.defaultOptions,A=F.format,q=y.addEvent,n=y.defined,k=y.erase,e=y.extend,c=y.fireEvent,h=y.getNestedProperty,f=y.isArray,
    w=y.isFunction,p=y.isNumber,B=y.isObject,t=y.merge,J=y.objectEach,C=y.pick,r=y.syncTimeout,l=y.removeEvent,b=y.uniqueKey;u=function(){function g(){this.colorIndex=this.category=void 0;this.formatPrefix="point";this.id=void 0;this.isNull=!1;this.percentage=this.options=this.name=void 0;this.selected=!1;this.total=this.series=void 0;this.visible=!0;this.x=void 0}g.prototype.animateBeforeDestroy=function(){var b=this,a={x:b.startXPos,opacity:0},c=b.getGraphicalProps();c.singular.forEach(function(d){b[d]=
    b[d].animate("dataLabel"===d?{x:b[d].startXPos,y:b[d].startYPos,opacity:0}:a)});c.plural.forEach(function(a){b[a].forEach(function(a){a.element&&a.animate(e({x:b.startXPos},a.startYPos?{x:a.startXPos,y:a.startYPos}:{}))})})};g.prototype.applyOptions=function(b,a){var d=this.series,c=d.options.pointValKey||d.pointValKey;b=g.prototype.optionsToObject.call(this,b);e(this,b);this.options=this.options?e(this.options,b):b;b.group&&delete this.group;b.dataLabels&&delete this.dataLabels;c&&(this.y=g.prototype.getNestedProperty.call(this,
    c));this.formatPrefix=(this.isNull=C(this.isValid&&!this.isValid(),null===this.x||!p(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&"undefined"===typeof a&&d.xAxis&&d.xAxis.hasNames&&(this.x=d.xAxis.nameToX(this));"undefined"===typeof this.x&&d?this.x="undefined"===typeof a?d.autoIncrement():a:p(b.x)&&d.options.relativeXValue&&(this.x=d.autoIncrement(b.x));return this};g.prototype.destroy=function(){function b(){if(a.graphic||a.dataLabel||a.dataLabels)l(a),a.destroyElements();
    for(h in a)a[h]=null}var a=this,c=a.series,e=c.chart;c=c.options.dataSorting;var g=e.hoverPoints,f=v(a.series.chart.renderer.globalAnimation),h;a.legendItem&&e.legend.destroyItem(a);g&&(a.setState(),k(g,a),g.length||(e.hoverPoints=null));if(a===e.hoverPoint)a.onMouseOut();c&&c.enabled?(this.animateBeforeDestroy(),r(b,f.duration)):b();e.pointCount--};g.prototype.destroyElements=function(b){var a=this;b=a.getGraphicalProps(b);b.singular.forEach(function(b){a[b]=a[b].destroy()});b.plural.forEach(function(b){a[b].forEach(function(b){b.element&&
b.destroy()});delete a[b]})};g.prototype.firePointEvent=function(b,a,e){var d=this,g=this.series.options;(g.point.events[b]||d.options&&d.options.events&&d.options.events[b])&&d.importEvents();"click"===b&&g.allowPointSelect&&(e=function(b){d.select&&d.select(null,b.ctrlKey||b.metaKey||b.shiftKey)});c(d,b,a,e)};g.prototype.getClassName=function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+
    ("undefined"!==typeof this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")};g.prototype.getGraphicalProps=function(b){var a=this,d=[],c={singular:[],plural:[]},e;b=b||{graphic:1,dataLabel:1};b.graphic&&d.push("graphic","upperGraphic","shadowGroup");b.dataLabel&&d.push("dataLabel","dataLabelUpper","connector");for(e=d.length;e--;){var g=d[e];a[g]&&
c.singular.push(g)}["dataLabel","connector"].forEach(function(d){var e=d+"s";b[d]&&a[e]&&c.plural.push(e)});return c};g.prototype.getLabelConfig=function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}};g.prototype.getNestedProperty=function(b){if(b)return 0===b.indexOf("custom.")?h(b,this.options):this[b]};g.prototype.getZone=function(){var b=this.series,
    a=b.zones;b=b.zoneAxis||"y";var c,e=0;for(c=a[e];this[b]>=c.value;)c=a[++e];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=c&&c.color&&!this.options.color?c.color:this.nonZonedColor;return c};g.prototype.hasNewShapeType=function(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType};g.prototype.init=function(a,e,g){this.series=a;this.applyOptions(e,g);this.id=n(this.id)?this.id:b();this.resolveColor();a.chart.pointCount++;c(this,"afterInit");
    return this};g.prototype.optionsToObject=function(b){var a=this.series,d=a.options.keys,c=d||a.pointArrayMap||["y"],e=c.length,l={},r=0,h=0;if(p(b)||null===b)l[c[0]]=b;else if(f(b))for(!d&&b.length>e&&(a=typeof b[0],"string"===a?l.name=b[0]:"number"===a&&(l.x=b[0]),r++);h<e;)d&&"undefined"===typeof b[r]||(0<c[h].indexOf(".")?g.prototype.setNestedProperty(l,b[r],c[h]):l[c[h]]=b[r]),r++,h++;else"object"===typeof b&&(l=b,b.dataLabels&&(a._hasPointLabels=!0),b.marker&&(a._hasPointMarkers=!0));return l};
    g.prototype.resolveColor=function(){var b=this.series,a=b.chart.styledMode;var c=b.chart.options.chart.colorCount;delete this.nonZonedColor;if(b.options.colorByPoint){if(!a){c=b.options.colors||b.chart.options.colors;var e=c[b.colorCounter];c=c.length}a=b.colorCounter;b.colorCounter++;b.colorCounter===c&&(b.colorCounter=0)}else a||(e=b.color),a=b.colorIndex;this.colorIndex=C(this.options.colorIndex,a);this.color=C(this.options.color,e)};g.prototype.setNestedProperty=function(b,a,c){c.split(".").reduce(function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        d,c,e){b[d]=e.length-1===c?a:B(b[d],!0)?b[d]:{};return b[d]},b);return b};g.prototype.tooltipFormatter=function(b){var a=this.series,d=a.tooltipOptions,c=C(d.valueDecimals,""),e=d.valuePrefix||"",g=d.valueSuffix||"";a.chart.styledMode&&(b=a.chart.tooltip.styledModeFormat(b));(a.pointArrayMap||["y"]).forEach(function(a){a="{point."+a;if(e||g)b=b.replace(RegExp(a+"}","g"),e+a+"}"+g);b=b.replace(RegExp(a+"}","g"),a+":,."+c+"f}")});return A(b,{point:this,series:this.series},a.chart)};g.prototype.update=
        function(b,a,c,e){function d(){g.applyOptions(b);var d=m&&g.hasDummyGraphic;d=null===g.y?!d:d;m&&d&&(g.graphic=m.destroy(),delete g.hasDummyGraphic);B(b,!0)&&(m&&m.element&&b&&b.marker&&"undefined"!==typeof b.marker.symbol&&(g.graphic=m.destroy()),b&&b.dataLabels&&g.dataLabel&&(g.dataLabel=g.dataLabel.destroy()),g.connector&&(g.connector=g.connector.destroy()));h=g.index;l.updateParallelArrays(g,h);r.data[h]=B(r.data[h],!0)||B(b,!0)?g.options:C(b,r.data[h]);l.isDirty=l.isDirtyData=!0;!l.fixedBox&&
        l.hasCartesianSeries&&(f.isDirtyBox=!0);"point"===r.legendType&&(f.isDirtyLegend=!0);a&&f.redraw(c)}var g=this,l=g.series,m=g.graphic,f=l.chart,r=l.options,h;a=C(a,!0);!1===e?d():g.firePointEvent("update",{options:b},d)};g.prototype.remove=function(b,a){this.series.removePoint(this.series.data.indexOf(this),b,a)};g.prototype.select=function(b,a){var d=this,c=d.series,e=c.chart;this.selectedStaging=b=C(b,!d.selected);d.firePointEvent(b?"select":"unselect",{accumulate:a},function(){d.selected=d.options.selected=
        b;c.options.data[c.data.indexOf(d)]=d.options;d.setState(b&&"select");a||e.getSelectedPoints().forEach(function(b){var a=b.series;b.selected&&b!==d&&(b.selected=b.options.selected=!1,a.options.data[a.data.indexOf(b)]=b.options,b.setState(e.hoverPoints&&a.options.inactiveOtherPoints?"inactive":""),b.firePointEvent("unselect"))})});delete this.selectedStaging};g.prototype.onMouseOver=function(b){var a=this.series.chart,d=a.pointer;b=b?d.normalize(b):d.getChartCoordinatesFromPoint(this,a.inverted);d.runPointActions(b,
        this)};g.prototype.onMouseOut=function(){var b=this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(b.hoverPoints||[]).forEach(function(b){b.setState()});b.hoverPoints=b.hoverPoint=null};g.prototype.importEvents=function(){if(!this.hasImportedEvents){var b=this,a=t(b.series.options.point,b.options).events;b.events=a;J(a,function(a,d){w(a)&&q(b,d,a)});this.hasImportedEvents=!0}};g.prototype.setState=function(b,g){var d=this.series,l=this.state,m=d.options.states[b||
    "normal"]||{},f=H.plotOptions[d.type].marker&&d.options.marker,r=f&&!1===f.enabled,h=f&&f.states&&f.states[b||"normal"]||{},k=!1===h.enabled,n=this.marker||{},t=d.chart,q=f&&d.markerAttribs,w=d.halo,B,v=d.stateMarkerGraphic;b=b||"";if(!(b===this.state&&!g||this.selected&&"select"!==b||!1===m.enabled||b&&(k||r&&!1===h.enabled)||b&&n.states&&n.states[b]&&!1===n.states[b].enabled)){this.state=b;q&&(B=d.markerAttribs(this,b));if(this.graphic&&!this.hasDummyGraphic){l&&this.graphic.removeClass("highcharts-point-"+
        l);b&&this.graphic.addClass("highcharts-point-"+b);if(!t.styledMode){var J=d.pointAttribs(this,b);var E=C(t.options.chart.animation,m.animation);d.options.inactiveOtherPoints&&p(J.opacity)&&((this.dataLabels||[]).forEach(function(b){b&&b.animate({opacity:J.opacity},E)}),this.connector&&this.connector.animate({opacity:J.opacity},E));this.graphic.animate(J,E)}B&&this.graphic.animate(B,C(t.options.chart.animation,h.animation,f.animation));v&&v.hide()}else{if(b&&h){l=n.symbol||d.symbol;v&&v.currentSymbol!==
    l&&(v=v.destroy());if(B)if(v)v[g?"animate":"attr"]({x:B.x,y:B.y});else l&&(d.stateMarkerGraphic=v=t.renderer.symbol(l,B.x,B.y,B.width,B.height).add(d.markerGroup),v.currentSymbol=l);!t.styledMode&&v&&"inactive"!==this.state&&v.attr(d.pointAttribs(this,b))}v&&(v[b&&this.isInside?"show":"hide"](),v.element.point=this,v.addClass(this.getClassName(),!0))}m=m.halo;B=(v=this.graphic||v)&&v.visibility||"inherit";m&&m.size&&v&&"hidden"!==B&&!this.isCluster?(w||(d.halo=w=t.renderer.path().add(v.parentGroup)),
        w.show()[g?"animate":"attr"]({d:this.haloPath(m.size)}),w.attr({"class":"highcharts-halo highcharts-color-"+C(this.colorIndex,d.colorIndex)+(this.className?" "+this.className:""),visibility:B,zIndex:-1}),w.point=this,t.styledMode||w.attr(e({fill:this.color||d.color,"fill-opacity":m.opacity},a.filterUserAttributes(m.attributes||{})))):w&&w.point&&w.point.haloPath&&w.animate({d:w.point.haloPath(0)},null,w.hide);c(this,"afterSetState",{state:b})}};g.prototype.haloPath=function(b){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
        b,this.plotY-b,2*b,2*b)};return g}();"";return u});M(a,"Core/Pointer.js",[a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Tooltip.js"],a["Core/Utilities.js"]],function(a,u,z,F){var v=a.parse,G=u.charts,H=u.noop,A=F.addEvent,q=F.attr,n=F.css,k=F.defined,e=F.extend,c=F.find,h=F.fireEvent,f=F.isNumber,w=F.isObject,p=F.objectEach,B=F.offset,t=F.pick,J=F.splat;a=function(){function a(a,c){this.lastValidTouch={};this.pinchDown=[];this.runChartClick=!1;this.eventsToUnbind=[];this.chart=a;this.hasDragged=
    !1;this.options=c;this.init(a,c)}a.prototype.applyInactiveState=function(a){var c=[],b;(a||[]).forEach(function(a){b=a.series;c.push(b);b.linkedParent&&c.push(b.linkedParent);b.linkedSeries&&(c=c.concat(b.linkedSeries));b.navigatorSeries&&c.push(b.navigatorSeries)});this.chart.series.forEach(function(b){-1===c.indexOf(b)?b.setState("inactive",!0):b.options.inactiveOtherPoints&&b.setAllPointsToState("inactive")})};a.prototype.destroy=function(){var c=this;this.eventsToUnbind.forEach(function(a){return a()});
    this.eventsToUnbind=[];u.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(c.tooltipTimeout);p(c,function(a,b){c[b]=void 0})};a.prototype.drag=function(a){var c=this.chart,b=c.options.chart,e=this.zoomHor,d=this.zoomVert,m=c.plotLeft,f=c.plotTop,h=c.plotWidth,r=c.plotHeight,k=this.mouseDownX||0,p=this.mouseDownY||0,n=w(b.panning)?b.panning&&b.panning.enabled:b.panning,
    t=b.panKey&&a[b.panKey+"Key"],q=a.chartX,B=a.chartY,C=this.selectionMarker;if(!C||!C.touch)if(q<m?q=m:q>m+h&&(q=m+h),B<f?B=f:B>f+r&&(B=f+r),this.hasDragged=Math.sqrt(Math.pow(k-q,2)+Math.pow(p-B,2)),10<this.hasDragged){var J=c.isInsidePlot(k-m,p-f,{visiblePlotOnly:!0});!c.hasCartesianSeries&&!c.mapView||!this.zoomX&&!this.zoomY||!J||t||C||(this.selectionMarker=C=c.renderer.rect(m,f,e?1:h,d?1:r,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),c.styledMode||C.attr({fill:b.selectionMarkerFill||
        v("#335cad").setOpacity(.25).get()}));C&&e&&(e=q-k,C.attr({width:Math.abs(e),x:(0<e?0:e)+k}));C&&d&&(e=B-p,C.attr({height:Math.abs(e),y:(0<e?0:e)+p}));J&&!C&&n&&c.pan(a,b.panning)}};a.prototype.dragStart=function(a){var c=this.chart;c.mouseIsDown=a.type;c.cancelClick=!1;c.mouseDownX=this.mouseDownX=a.chartX;c.mouseDownY=this.mouseDownY=a.chartY};a.prototype.drop=function(a){var c=this,b=this.chart,g=this.hasPinched;if(this.selectionMarker){var d=this.selectionMarker,m=d.attr?d.attr("x"):d.x,r=d.attr?
    d.attr("y"):d.y,p=d.attr?d.attr("width"):d.width,t=d.attr?d.attr("height"):d.height,q={originalEvent:a,xAxis:[],yAxis:[],x:m,y:r,width:p,height:t},B=!!b.mapView;if(this.hasDragged||g)b.axes.forEach(function(b){if(b.zoomEnabled&&k(b.min)&&(g||c[{xAxis:"zoomX",yAxis:"zoomY"}[b.coll]])&&f(m)&&f(r)){var d=b.horiz,e="touchend"===a.type?b.minPixelPadding:0,l=b.toValue((d?m:r)+e);d=b.toValue((d?m+p:r+t)-e);q[b.coll].push({axis:b,min:Math.min(l,d),max:Math.max(l,d)});B=!0}}),B&&h(b,"selection",q,function(a){b.zoom(e(a,
    g?{animation:!1}:null))});f(b.index)&&(this.selectionMarker=this.selectionMarker.destroy());g&&this.scaleGroups()}b&&f(b.index)&&(n(b.container,{cursor:b._cursor}),b.cancelClick=10<this.hasDragged,b.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])};a.prototype.findNearestKDPoint=function(a,c,b){var e=this.chart,d=e.hoverPoint;e=e.tooltip;if(d&&e&&e.isStickyOnContact())return d;var l;a.forEach(function(a){var d=!(a.noSharedTooltip&&c)&&0>a.options.findNearestPointBy.indexOf("y");a=
    a.searchPoint(b,d);if((d=w(a,!0)&&a.series)&&!(d=!w(l,!0))){d=l.distX-a.distX;var e=l.dist-a.dist,g=(a.series.group&&a.series.group.zIndex)-(l.series.group&&l.series.group.zIndex);d=0<(0!==d&&c?d:0!==e?e:0!==g?g:l.series.index>a.series.index?-1:1)}d&&(l=a)});return l};a.prototype.getChartCoordinatesFromPoint=function(a,c){var b=a.series,e=b.xAxis;b=b.yAxis;var d=a.shapeArgs;if(e&&b){var l=t(a.clientX,a.plotX),h=a.plotY||0;a.isNode&&d&&f(d.x)&&f(d.y)&&(l=d.x,h=d.y);return c?{chartX:b.len+b.pos-h,chartY:e.len+
        e.pos-l}:{chartX:l+e.pos,chartY:h+b.pos}}if(d&&d.x&&d.y)return{chartX:d.x,chartY:d.y}};a.prototype.getChartPosition=function(){if(this.chartPosition)return this.chartPosition;var a=this.chart.container,c=B(a);this.chartPosition={left:c.left,top:c.top,scaleX:1,scaleY:1};var b=a.offsetWidth;a=a.offsetHeight;2<b&&2<a&&(this.chartPosition.scaleX=c.width/b,this.chartPosition.scaleY=c.height/a);return this.chartPosition};a.prototype.getCoordinates=function(a){var c={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(b){c[b.isXAxis?
    "xAxis":"yAxis"].push({axis:b,value:b.toValue(a[b.horiz?"chartX":"chartY"])})});return c};a.prototype.getHoverData=function(a,e,b,g,d,m){var l=[];g=!(!g||!a);var f={chartX:m?m.chartX:void 0,chartY:m?m.chartY:void 0,shared:d};h(this,"beforeGetHoverData",f);var r=e&&!e.stickyTracking?[e]:b.filter(function(b){return f.filter?f.filter(b):b.visible&&!(!d&&b.directTouch)&&t(b.options.enableMouseTracking,!0)&&b.stickyTracking});var k=g||!m?a:this.findNearestKDPoint(r,d,m);e=k&&k.series;k&&(d&&!e.noSharedTooltip?
    (r=b.filter(function(b){return f.filter?f.filter(b):b.visible&&!(!d&&b.directTouch)&&t(b.options.enableMouseTracking,!0)&&!b.noSharedTooltip}),r.forEach(function(b){var a=c(b.points,function(b){return b.x===k.x&&!b.isNull});w(a)&&(b.chart.isBoosting&&(a=b.getPoint(a)),l.push(a))})):l.push(k));f={hoverPoint:k};h(this,"afterGetHoverData",f);return{hoverPoint:f.hoverPoint,hoverSeries:e,hoverPoints:l}};a.prototype.getPointFromEvent=function(a){a=a.target;for(var c;a&&!c;)c=a.point,a=a.parentNode;return c};
    a.prototype.onTrackerMouseOut=function(a){a=a.relatedTarget||a.toElement;var c=this.chart.hoverSeries;this.isDirectTouch=!1;if(!(!c||!a||c.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+c.index)&&this.inClass(a,"highcharts-tracker")))c.onMouseOut()};a.prototype.inClass=function(a,c){for(var b;a;){if(b=q(a,"class")){if(-1!==b.indexOf(c))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}};a.prototype.init=function(a,c){this.options=
        c;this.chart=a;this.runChartClick=!(!c.chart.events||!c.chart.events.click);this.pinchDown=[];this.lastValidTouch={};z&&(a.tooltip=new z(a,c.tooltip),this.followTouchMove=t(c.tooltip.followTouchMove,!0));this.setDOMEvents()};a.prototype.normalize=function(a,c){var b=a.touches,g=b?b.length?b.item(0):t(b.changedTouches,a.changedTouches)[0]:a;c||(c=this.getChartPosition());b=g.pageX-c.left;g=g.pageY-c.top;b/=c.scaleX;g/=c.scaleY;return e(a,{chartX:Math.round(b),chartY:Math.round(g)})};a.prototype.onContainerClick=
        function(a){var c=this.chart,b=c.hoverPoint;a=this.normalize(a);var g=c.plotLeft,d=c.plotTop;c.cancelClick||(b&&this.inClass(a.target,"highcharts-tracker")?(h(b.series,"click",e(a,{point:b})),c.hoverPoint&&b.firePointEvent("click",a)):(e(a,this.getCoordinates(a)),c.isInsidePlot(a.chartX-g,a.chartY-d,{visiblePlotOnly:!0})&&h(c,"click",a)))};a.prototype.onContainerMouseDown=function(a){var c=1===((a.buttons||a.button)&1);a=this.normalize(a);if(u.isFirefox&&0!==a.button)this.onContainerMouseMove(a);
        if("undefined"===typeof a.button||c)this.zoomOption(a),c&&a.preventDefault&&a.preventDefault(),this.dragStart(a)};a.prototype.onContainerMouseLeave=function(c){var e=G[t(a.hoverChartIndex,-1)],b=this.chart.tooltip;b&&b.shouldStickOnContact()&&this.inClass(c.relatedTarget,"highcharts-tooltip-container")||(c=this.normalize(c),e&&(c.relatedTarget||c.toElement)&&(e.pointer.reset(),e.pointer.chartPosition=void 0),b&&!b.isHidden&&this.reset())};a.prototype.onContainerMouseEnter=function(a){delete this.chartPosition};
    a.prototype.onContainerMouseMove=function(a){var c=this.chart;a=this.normalize(a);this.setHoverChartIndex();a.preventDefault||(a.returnValue=!1);("mousedown"===c.mouseIsDown||this.touchSelect(a))&&this.drag(a);c.openMenu||!this.inClass(a.target,"highcharts-tracker")&&!c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop,{visiblePlotOnly:!0})||(this.inClass(a.target,"highcharts-no-tooltip")?this.reset(!1,0):this.runPointActions(a))};a.prototype.onDocumentTouchEnd=function(c){var e=G[t(a.hoverChartIndex,
        -1)];e&&e.pointer.drop(c)};a.prototype.onContainerTouchMove=function(a){if(this.touchSelect(a))this.onContainerMouseMove(a);else this.touch(a)};a.prototype.onContainerTouchStart=function(a){if(this.touchSelect(a))this.onContainerMouseDown(a);else this.zoomOption(a),this.touch(a,!0)};a.prototype.onDocumentMouseMove=function(a){var c=this.chart,b=this.chartPosition;a=this.normalize(a,b);var e=c.tooltip;!b||e&&e.isStickyOnContact()||c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop,{visiblePlotOnly:!0})||
    this.inClass(a.target,"highcharts-tracker")||this.reset()};a.prototype.onDocumentMouseUp=function(c){var e=G[t(a.hoverChartIndex,-1)];e&&e.pointer.drop(c)};a.prototype.pinch=function(a){var c=this,b=c.chart,g=c.pinchDown,d=a.touches||[],m=d.length,f=c.lastValidTouch,k=c.hasZoom,p={},r=1===m&&(c.inClass(a.target,"highcharts-tracker")&&b.runTrackerClick||c.runChartClick),n={},q=c.selectionMarker;1<m?c.initiated=!0:1===m&&this.followTouchMove&&(c.initiated=!1);k&&c.initiated&&!r&&!1!==a.cancelable&&
    a.preventDefault();[].map.call(d,function(b){return c.normalize(b)});"touchstart"===a.type?([].forEach.call(d,function(b,a){g[a]={chartX:b.chartX,chartY:b.chartY}}),f.x=[g[0].chartX,g[1]&&g[1].chartX],f.y=[g[0].chartY,g[1]&&g[1].chartY],b.axes.forEach(function(a){if(a.zoomEnabled){var d=b.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,e=a.toPixels(Math.min(t(a.options.min,a.dataMin),a.dataMin)),g=a.toPixels(Math.max(t(a.options.max,a.dataMax),a.dataMax)),m=Math.max(e,g);d.min=Math.min(a.pos,Math.min(e,
        g)-c);d.max=Math.max(a.pos+a.len,m+c)}}),c.res=!0):c.followTouchMove&&1===m?this.runPointActions(c.normalize(a)):g.length&&(h(b,"touchpan",{originalEvent:a},function(){q||(c.selectionMarker=q=e({destroy:H,touch:!0},b.plotBox));c.pinchTranslate(g,d,p,q,n,f);c.hasPinched=k;c.scaleGroups(p,n)}),c.res&&(c.res=!1,this.reset(!1,0)))};a.prototype.pinchTranslate=function(a,c,b,e,d,m){this.zoomHor&&this.pinchTranslateDirection(!0,a,c,b,e,d,m);this.zoomVert&&this.pinchTranslateDirection(!1,a,c,b,e,d,m)};a.prototype.pinchTranslateDirection=
        function(a,c,b,e,d,m,f,h){var g=this.chart,l=a?"x":"y",k=a?"X":"Y",p="chart"+k,r=a?"width":"height",n=g["plot"+(a?"Left":"Top")],t=g.inverted,x=g.bounds[a?"h":"v"],q=1===c.length,D=c[0][p],B=!q&&c[1][p];c=function(){"number"===typeof v&&20<Math.abs(D-B)&&(C=h||Math.abs(N-v)/Math.abs(D-B));E=(n-N)/C+D;w=g["plot"+(a?"Width":"Height")]/C};var w,E,C=h||1,N=b[0][p],v=!q&&b[1][p];c();b=E;if(b<x.min){b=x.min;var J=!0}else b+w>x.max&&(b=x.max-w,J=!0);J?(N-=.8*(N-f[l][0]),"number"===typeof v&&(v-=.8*(v-f[l][1])),
            c()):f[l]=[N,v];t||(m[l]=E-n,m[r]=w);m=t?1/C:C;d[r]=w;d[l]=b;e[t?a?"scaleY":"scaleX":"scale"+k]=C;e["translate"+k]=m*n+(N-m*D)};a.prototype.reset=function(a,c){var b=this.chart,e=b.hoverSeries,d=b.hoverPoint,m=b.hoverPoints,f=b.tooltip,l=f&&f.shared?m:d;a&&l&&J(l).forEach(function(b){b.series.isCartesian&&"undefined"===typeof b.plotX&&(a=!1)});if(a)f&&l&&J(l).length&&(f.refresh(l),f.shared&&m?m.forEach(function(b){b.setState(b.state,!0);b.series.isCartesian&&(b.series.xAxis.crosshair&&b.series.xAxis.drawCrosshair(null,
        b),b.series.yAxis.crosshair&&b.series.yAxis.drawCrosshair(null,b))}):d&&(d.setState(d.state,!0),b.axes.forEach(function(b){b.crosshair&&d.series[b.coll]===b&&b.drawCrosshair(null,d)})));else{if(d)d.onMouseOut();m&&m.forEach(function(b){b.setState()});if(e)e.onMouseOut();f&&f.hide(c);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());b.axes.forEach(function(b){b.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}};a.prototype.runPointActions=function(e,f){var b=this.chart,
        g=b.tooltip&&b.tooltip.options.enabled?b.tooltip:void 0,d=g?g.shared:!1,m=f||b.hoverPoint,l=m&&m.series||b.hoverSeries;f=this.getHoverData(m,l,b.series,(!e||"touchmove"!==e.type)&&(!!f||l&&l.directTouch&&this.isDirectTouch),d,e);m=f.hoverPoint;l=f.hoverSeries;var h=f.hoverPoints;f=l&&l.tooltipOptions.followPointer&&!l.tooltipOptions.split;d=d&&l&&!l.noSharedTooltip;if(m&&(m!==b.hoverPoint||g&&g.isHidden)){(b.hoverPoints||[]).forEach(function(b){-1===h.indexOf(b)&&b.setState()});if(b.hoverSeries!==
        l)l.onMouseOver();this.applyInactiveState(h);(h||[]).forEach(function(b){b.setState("hover")});b.hoverPoint&&b.hoverPoint.firePointEvent("mouseOut");if(!m.series)return;b.hoverPoints=h;b.hoverPoint=m;m.firePointEvent("mouseOver");g&&g.refresh(d?h:m,e)}else f&&g&&!g.isHidden&&(m=g.getAnchor([{}],e),b.isInsidePlot(m[0],m[1],{visiblePlotOnly:!0})&&g.updatePosition({plotX:m[0],plotY:m[1]}));this.unDocMouseMove||(this.unDocMouseMove=A(b.container.ownerDocument,"mousemove",function(b){var d=G[a.hoverChartIndex];
        if(d)d.pointer.onDocumentMouseMove(b)}),this.eventsToUnbind.push(this.unDocMouseMove));b.axes.forEach(function(a){var d=t((a.crosshair||{}).snap,!0),g;d&&((g=b.hoverPoint)&&g.series[a.coll]===a||(g=c(h,function(b){return b.series[a.coll]===a})));g||!d?a.drawCrosshair(e,g):a.hideCrosshair()})};a.prototype.scaleGroups=function(a,c){var b=this.chart;b.series.forEach(function(e){var d=a||e.getPlotBox();e.group&&(e.xAxis&&e.xAxis.zoomEnabled||b.mapView)&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),
        e.markerGroup.clip(c?b.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});b.clipRect.attr(c||b.clipBox)};a.prototype.setDOMEvents=function(){var c=this,e=this.chart.container,b=e.ownerDocument;e.onmousedown=this.onContainerMouseDown.bind(this);e.onmousemove=this.onContainerMouseMove.bind(this);e.onclick=this.onContainerClick.bind(this);this.eventsToUnbind.push(A(e,"mouseenter",this.onContainerMouseEnter.bind(this)));this.eventsToUnbind.push(A(e,"mouseleave",this.onContainerMouseLeave.bind(this)));
        a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=A(b,"mouseup",this.onDocumentMouseUp.bind(this)));for(var g=this.chart.renderTo.parentElement;g&&"BODY"!==g.tagName;)this.eventsToUnbind.push(A(g,"scroll",function(){delete c.chartPosition})),g=g.parentElement;u.hasTouch&&(this.eventsToUnbind.push(A(e,"touchstart",this.onContainerTouchStart.bind(this),{passive:!1})),this.eventsToUnbind.push(A(e,"touchmove",this.onContainerTouchMove.bind(this),{passive:!1})),a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=
            A(b,"touchend",this.onDocumentTouchEnd.bind(this),{passive:!1})))};a.prototype.setHoverChartIndex=function(){var c=this.chart,e=u.charts[t(a.hoverChartIndex,-1)];if(e&&e!==c)e.pointer.onContainerMouseLeave({relatedTarget:!0});e&&e.mouseIsDown||(a.hoverChartIndex=c.index)};a.prototype.touch=function(a,c){var b=this.chart,e;this.setHoverChartIndex();if(1===a.touches.length)if(a=this.normalize(a),(e=b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop,{visiblePlotOnly:!0}))&&!b.openMenu){c&&this.runPointActions(a);
        if("touchmove"===a.type){c=this.pinchDown;var d=c[0]?4<=Math.sqrt(Math.pow(c[0].chartX-a.chartX,2)+Math.pow(c[0].chartY-a.chartY,2)):!1}t(d,!0)&&this.pinch(a)}else c&&this.reset();else 2===a.touches.length&&this.pinch(a)};a.prototype.touchSelect=function(a){return!(!this.chart.options.chart.zoomBySingleTouch||!a.touches||1!==a.touches.length)};a.prototype.zoomOption=function(a){var c=this.chart,b=c.options.chart;c=c.inverted;var e=b.zoomType||"";/touch/.test(a.type)&&(e=t(b.pinchType,e));this.zoomX=
        a=/x/.test(e);this.zoomY=b=/y/.test(e);this.zoomHor=a&&!c||b&&c;this.zoomVert=b&&!c||a&&c;this.hasZoom=a||b};return a}();"";return a});M(a,"Core/MSPointer.js",[a["Core/Globals.js"],a["Core/Pointer.js"],a["Core/Utilities.js"]],function(a,u,z){function v(){var a=[];a.item=function(a){return this[a]};c(f,function(c){a.push({pageX:c.pageX,pageY:c.pageY,target:c.target})});return a}function y(a,c,e,f){var h=H[u.hoverChartIndex||NaN];"touch"!==a.pointerType&&a.pointerType!==a.MSPOINTER_TYPE_TOUCH||!h||
(h=h.pointer,f(a),h[c]({type:e,target:a.currentTarget,preventDefault:q,touches:v()}))}var G=this&&this.__extends||function(){var a=function(c,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])};return a(c,e)};return function(c,e){function f(){this.constructor=c}a(c,e);c.prototype=null===e?Object.create(e):(f.prototype=e.prototype,new f)}}(),H=a.charts,A=a.doc,q=a.noop,n=a.win,k=z.addEvent,e=z.css,
    c=z.objectEach,h=z.removeEvent,f={},w=!!n.PointerEvent;return function(c){function p(){return null!==c&&c.apply(this,arguments)||this}G(p,c);p.isRequired=function(){return!(a.hasTouch||!n.PointerEvent&&!n.MSPointerEvent)};p.prototype.batchMSEvents=function(a){a(this.chart.container,w?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,w?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(A,w?"pointerup":"MSPointerUp",this.onDocumentPointerUp)};p.prototype.destroy=
    function(){this.batchMSEvents(h);c.prototype.destroy.call(this)};p.prototype.init=function(a,f){c.prototype.init.call(this,a,f);this.hasZoom&&e(a.container,{"-ms-touch-action":"none","touch-action":"none"})};p.prototype.onContainerPointerDown=function(a){y(a,"onContainerTouchStart","touchstart",function(a){f[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})};p.prototype.onContainerPointerMove=function(a){y(a,"onContainerTouchMove","touchmove",function(a){f[a.pointerId]={pageX:a.pageX,
    pageY:a.pageY};f[a.pointerId].target||(f[a.pointerId].target=a.currentTarget)})};p.prototype.onDocumentPointerUp=function(a){y(a,"onDocumentTouchEnd","touchend",function(a){delete f[a.pointerId]})};p.prototype.setDOMEvents=function(){c.prototype.setDOMEvents.call(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(k)};return p}(u)});M(a,"Core/Legend/Legend.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/FormatUtilities.js"],a["Core/Globals.js"],a["Core/Series/Point.js"],a["Core/Renderer/RendererUtilities.js"],
    a["Core/Utilities.js"]],function(a,u,z,F,y,G){var v=a.animObject,A=a.setAnimation,q=u.format;a=z.isFirefox;var n=z.marginNames;z=z.win;var k=y.distribute,e=G.addEvent,c=G.createElement,h=G.css,f=G.defined,w=G.discardElement,p=G.find,B=G.fireEvent,t=G.isNumber,J=G.merge,C=G.pick,r=G.relativeLength,l=G.stableSort,b=G.syncTimeout;y=G.wrap;G=function(){function a(b,a){this.allItems=[];this.contentGroup=this.box=void 0;this.display=!1;this.group=void 0;this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=
    this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=this.itemY=this.itemX=this.itemMarginTop=this.itemMarginBottom=this.itemHeight=this.initialItemY=0;this.options={};this.padding=0;this.pages=[];this.proximate=!1;this.scrollGroup=void 0;this.widthOption=this.totalItemWidth=this.titleHeight=this.symbolWidth=this.symbolHeight=0;this.chart=b;this.init(b,a)}a.prototype.init=function(b,a){this.chart=b;this.setOptions(a);a.enabled&&(this.render(),e(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),
    this.proximate?this.unchartrender=e(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())};a.prototype.setOptions=function(b){var a=C(b.padding,8);this.options=b;this.chart.styledMode||(this.itemStyle=b.itemStyle,this.itemHiddenStyle=J(this.itemStyle,b.itemHiddenStyle));this.itemMarginTop=b.itemMarginTop||0;this.itemMarginBottom=b.itemMarginBottom||0;this.padding=a;this.initialItemY=a-5;this.symbolWidth=C(b.symbolWidth,
    16);this.pages=[];this.proximate="proximate"===b.layout&&!this.chart.inverted;this.baseline=void 0};a.prototype.update=function(b,a){var c=this.chart;this.setOptions(J(!0,this.options,b));this.destroy();c.isDirtyLegend=c.isDirtyBox=!0;C(a,!0)&&c.redraw();B(this,"afterUpdate")};a.prototype.colorizeItem=function(b,a){b.legendGroup[a?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var c=this.options,d=b.legendItem,e=b.legendLine,g=b.legendSymbol,f=this.itemHiddenStyle.color;
    c=a?c.itemStyle.color:f;var m=a?b.color||f:f,h=b.options&&b.options.marker,l={fill:m};d&&d.css({fill:c,color:c});e&&e.attr({stroke:m});g&&(h&&g.isMarker&&(l=b.pointAttribs(),a||(l.stroke=l.fill=f)),g.attr(l))}B(this,"afterColorizeItem",{item:b,visible:a})};a.prototype.positionItems=function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()};a.prototype.positionItem=function(b){var a=this,c=this.options,d=c.symbolPadding,e=!c.rtl,g=b._legendItemPos;c=
    g[0];g=g[1];var h=b.checkbox,l=b.legendGroup;l&&l.element&&(d={translateX:e?c:this.legendWidth-c-2*d-4,translateY:g},e=function(){B(a,"afterPositionItem",{item:b})},f(l.translateY)?l.animate(d,void 0,e):(l.attr(d),e()));h&&(h.x=c,h.y=g)};a.prototype.destroyItem=function(b){var a=b.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(a){b[a]&&(b[a]=b[a].destroy())});a&&w(b.checkbox)};a.prototype.destroy=function(){function b(b){this[b]&&(this[b]=this[b].destroy())}this.getAllItems().forEach(function(a){["legendItem",
    "legendGroup"].forEach(b,a)});"clipRect up down pager nav box title group".split(" ").forEach(b,this);this.display=null};a.prototype.positionCheckboxes=function(){var b=this.group&&this.group.alignAttr,a=this.clipHeight||this.legendHeight,c=this.titleHeight;if(b){var e=b.translateY;this.allItems.forEach(function(d){var g=d.checkbox;if(g){var f=e+c+g.y+(this.scrollOffset||0)+3;h(g,{left:b.translateX+d.checkboxOffset+g.x-20+"px",top:f+"px",display:this.proximate||f>e-6&&f<e+a-6?"":"none"})}},this)}};
    a.prototype.renderTitle=function(){var b=this.options,a=this.padding,c=b.title,e=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,a-3,a-4,null,null,null,b.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(c.style),this.title.add(this.group)),c.width||this.title.css({width:this.maxLegendWidth+"px"}),b=this.title.getBBox(),e=b.height,this.offsetWidth=b.width,this.contentGroup.attr({translateY:e}));this.titleHeight=e};a.prototype.setText=function(b){var a=
        this.options;b.legendItem.attr({text:a.labelFormat?q(a.labelFormat,b,this.chart):a.labelFormatter.call(b)})};a.prototype.renderItem=function(b){var a=this.chart,c=a.renderer,d=this.options,e=this.symbolWidth,g=d.symbolPadding||0,f=this.itemStyle,h=this.itemHiddenStyle,l="horizontal"===d.layout?C(d.itemDistance,20):0,k=!d.rtl,p=!b.series,n=!p&&b.series.drawLegendSymbol?b.series:b,r=n.options,t=this.createCheckboxForItem&&r&&r.showCheckbox,q=d.useHTML,w=b.options.className,E=b.legendItem;r=e+g+l+(t?
        20:0);E||(b.legendGroup=c.g("legend-item").addClass("highcharts-"+n.type+"-series highcharts-color-"+b.colorIndex+(w?" "+w:"")+(p?" highcharts-series-"+b.index:"")).attr({zIndex:1}).add(this.scrollGroup),b.legendItem=E=c.text("",k?e+g:-g,this.baseline||0,q),a.styledMode||E.css(J(b.visible?f:h)),E.attr({align:k?"left":"right",zIndex:2}).add(b.legendGroup),this.baseline||(this.fontMetrics=c.fontMetrics(a.styledMode?12:f.fontSize,E),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,E.attr("y",this.baseline),
        this.symbolHeight=d.symbolHeight||this.fontMetrics.f,d.squareSymbol&&(this.symbolWidth=C(d.symbolWidth,Math.max(this.symbolHeight,16)),r=this.symbolWidth+g+l+(t?20:0),k&&E.attr("x",this.symbolWidth+g))),n.drawLegendSymbol(this,b),this.setItemEvents&&this.setItemEvents(b,E,q));t&&!b.checkbox&&this.createCheckboxForItem&&this.createCheckboxForItem(b);this.colorizeItem(b,b.visible);!a.styledMode&&f.width||E.css({width:(d.itemWidth||this.widthOption||a.spacingBox.width)-r+"px"});this.setText(b);a=E.getBBox();
        c=this.fontMetrics&&this.fontMetrics.h||0;b.itemWidth=b.checkboxOffset=d.itemWidth||b.legendItemWidth||a.width+r;this.maxItemWidth=Math.max(this.maxItemWidth,b.itemWidth);this.totalItemWidth+=b.itemWidth;this.itemHeight=b.itemHeight=Math.round(b.legendItemHeight||(a.height>1.5*c?a.height:c))};a.prototype.layoutItem=function(b){var a=this.options,c=this.padding,d="horizontal"===a.layout,e=b.itemHeight,g=this.itemMarginBottom,f=this.itemMarginTop,h=d?C(a.itemDistance,20):0,l=this.maxLegendWidth;a=a.alignColumns&&
    this.totalItemWidth>l?this.maxItemWidth:b.itemWidth;d&&this.itemX-c+a>l&&(this.itemX=c,this.lastLineHeight&&(this.itemY+=f+this.lastLineHeight+g),this.lastLineHeight=0);this.lastItemY=f+this.itemY+g;this.lastLineHeight=Math.max(e,this.lastLineHeight);b._legendItemPos=[this.itemX,this.itemY];d?this.itemX+=a:(this.itemY+=f+e+g,this.lastLineHeight=e);this.offsetWidth=this.widthOption||Math.max((d?this.itemX-c-(b.checkbox?0:h):a)+c,this.offsetWidth)};a.prototype.getAllItems=function(){var b=[];this.chart.series.forEach(function(a){var c=
        a&&a.options;a&&C(c.showInLegend,f(c.linkedTo)?!1:void 0,!0)&&(b=b.concat(a.legendItems||("point"===c.legendType?a.data:a)))});B(this,"afterGetAllItems",{allItems:b});return b};a.prototype.getAlignment=function(){var b=this.options;return this.proximate?b.align.charAt(0)+"tv":b.floating?"":b.align.charAt(0)+b.verticalAlign.charAt(0)+b.layout.charAt(0)};a.prototype.adjustMargins=function(b,a){var c=this.chart,d=this.options,e=this.getAlignment();e&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(g,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           h){g.test(e)&&!f(b[h])&&(c[n[h]]=Math.max(c[n[h]],c.legend[(h+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][h]*d[h%2?"x":"y"]+C(d.margin,12)+a[h]+(c.titleOffset[h]||0)))})};a.prototype.proximatePositions=function(){var b=this.chart,a=[],c="left"===this.options.align;this.allItems.forEach(function(d){var e;var g=c;if(d.yAxis){d.xAxis.options.reversed&&(g=!g);d.points&&(e=p(g?d.points:d.points.slice(0).reverse(),function(b){return t(b.plotY)}));g=this.itemMarginTop+d.legendItem.getBBox().height+this.itemMarginBottom;
        var f=d.yAxis.top-b.plotTop;d.visible?(e=e?e.plotY:d.yAxis.height,e+=f-.3*g):e=f+d.yAxis.height;a.push({target:e,size:g,item:d})}},this);k(a,b.plotHeight).forEach(function(a){a.item._legendItemPos&&(a.item._legendItemPos[1]=b.plotTop-b.spacing[0]+a.pos)})};a.prototype.render=function(){var b=this.chart,a=b.renderer,c=this.options,e=this.padding,g=this.getAllItems(),f=this.group,h=this.box;this.itemX=e;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=r(c.width,b.spacingBox.width-
        e);var k=b.spacingBox.width-2*e-c.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(k/=2);this.maxLegendWidth=this.widthOption||k;f||(this.group=f=a.g("legend").addClass(c.className||"").attr({zIndex:7}).add(),this.contentGroup=a.g().attr({zIndex:1}).add(f),this.scrollGroup=a.g().add(this.contentGroup));this.renderTitle();l(g,function(b,a){return(b.options&&b.options.legendIndex||0)-(a.options&&a.options.legendIndex||0)});c.reversed&&g.reverse();this.allItems=g;this.display=k=!!g.length;
        this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;g.forEach(this.renderItem,this);g.forEach(this.layoutItem,this);g=(this.widthOption||this.offsetWidth)+e;var p=this.lastItemY+this.lastLineHeight+this.titleHeight;p=this.handleOverflow(p);p+=e;h||(this.box=h=a.rect().addClass("highcharts-legend-box").attr({r:c.borderRadius}).add(f),h.isNew=!0);b.styledMode||h.attr({stroke:c.borderColor,"stroke-width":c.borderWidth||0,fill:c.backgroundColor||"none"}).shadow(c.shadow);0<g&&
        0<p&&(h[h.isNew?"attr":"animate"](h.crisp.call({},{x:0,y:0,width:g,height:p},h.strokeWidth())),h.isNew=!1);h[k?"show":"hide"]();b.styledMode&&"none"===f.getStyle("display")&&(g=p=0);this.legendWidth=g;this.legendHeight=p;k&&this.align();this.proximate||this.positionItems();B(this,"afterRender")};a.prototype.align=function(b){void 0===b&&(b=this.chart.spacingBox);var a=this.chart,c=this.options,d=b.y;/(lth|ct|rth)/.test(this.getAlignment())&&0<a.titleOffset[0]?d+=a.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&
        0<a.titleOffset[2]&&(d-=a.titleOffset[2]);d!==b.y&&(b=J(b,{y:d}));this.group.align(J(c,{width:this.legendWidth,height:this.legendHeight,verticalAlign:this.proximate?"top":c.verticalAlign}),!0,b)};a.prototype.handleOverflow=function(b){var a=this,c=this.chart,d=c.renderer,e=this.options,g=e.y,f="top"===e.verticalAlign,h=this.padding,l=e.maxHeight,k=e.navigation,p=C(k.animation,!0),n=k.arrowSize||12,r=this.pages,t=this.allItems,q=function(b){"number"===typeof b?v.attr({height:b}):v&&(a.clipRect=v.destroy(),
        a.contentGroup.clip());a.contentGroup.div&&(a.contentGroup.div.style.clip=b?"rect("+h+"px,9999px,"+(h+b)+"px,0)":"auto")},w=function(b){a[b]=d.circle(0,0,1.3*n).translate(n/2,n/2).add(N);c.styledMode||a[b].attr("fill","rgba(0,0,0,0.0001)");return a[b]},E,B;g=c.spacingBox.height+(f?-g:g)-h;var N=this.nav,v=this.clipRect;"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(g/=2);l&&(g=Math.min(g,l));r.length=0;b&&0<g&&b>g&&!1!==k.enabled?(this.clipHeight=E=Math.max(g-20-this.titleHeight-
        h,0),this.currentPage=C(this.currentPage,1),this.fullHeight=b,t.forEach(function(b,a){var c=b._legendItemPos[1],d=Math.round(b.legendItem.getBBox().height),e=r.length;if(!e||c-r[e-1]>E&&(B||c)!==r[e-1])r.push(B||c),e++;b.pageIx=e-1;B&&(t[a-1].pageIx=e-1);a===t.length-1&&c+d-r[e-1]>E&&d<=E&&(r.push(c),b.pageIx=e);c!==B&&(B=c)}),v||(v=a.clipRect=d.clipRect(0,h,9999,0),a.contentGroup.clip(v)),q(E),N||(this.nav=N=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,n,n).add(N),w("upTracker").on("click",
        function(){a.scroll(-1,p)}),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation"),c.styledMode||this.pager.css(k.style),this.pager.add(N),this.down=d.symbol("triangle-down",0,0,n,n).add(N),w("downTracker").on("click",function(){a.scroll(1,p)})),a.scroll(0),b=g):N&&(q(),this.nav=N.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return b};a.prototype.scroll=function(a,c){var d=this,e=this.chart,g=this.pages,f=g.length,h=this.clipHeight,l=this.options.navigation,m=this.pager,
        k=this.padding,p=this.currentPage+a;p>f&&(p=f);0<p&&("undefined"!==typeof c&&A(c,e),this.nav.attr({translateX:k,translateY:h+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(b){b.attr({"class":1===p?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),m.attr({text:p+"/"+f}),[this.down,this.downTracker].forEach(function(b){b.attr({x:18+this.pager.getBBox().width,"class":p===f?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},
        this),e.styledMode||(this.up.attr({fill:1===p?l.inactiveColor:l.activeColor}),this.upTracker.css({cursor:1===p?"default":"pointer"}),this.down.attr({fill:p===f?l.inactiveColor:l.activeColor}),this.downTracker.css({cursor:p===f?"default":"pointer"})),this.scrollOffset=-g[p-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=p,this.positionCheckboxes(),a=v(C(c,e.renderer.globalAnimation,!0)),b(function(){B(d,"afterScroll",{currentPage:p})},a.duration))};a.prototype.setItemEvents=
        function(b,a,c){var d=this,e=d.chart.renderer.boxWrapper,g=b instanceof F,f="highcharts-legend-"+(g?"point":"series")+"-active",h=d.chart.styledMode,l=function(a){d.allItems.forEach(function(c){b!==c&&[c].concat(c.linkedSeries||[]).forEach(function(b){b.setState(a,!g)})})};(c?[a,b.legendSymbol]:[b.legendGroup]).forEach(function(c){if(c)c.on("mouseover",function(){b.visible&&l("inactive");b.setState("hover");b.visible&&e.addClass(f);h||a.css(d.options.itemHoverStyle)}).on("mouseout",function(){d.chart.styledMode||
        a.css(J(b.visible?d.itemStyle:d.itemHiddenStyle));l("");e.removeClass(f);b.setState()}).on("click",function(a){var c=function(){b.setVisible&&b.setVisible();l(b.visible?"inactive":"")};e.removeClass(f);a={browserEvent:a};b.firePointEvent?b.firePointEvent("legendItemClick",a,c):B(b,"legendItemClick",a,c)})})};a.prototype.createCheckboxForItem=function(b){b.checkbox=c("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:b.selected,defaultChecked:b.selected},this.options.itemCheckboxStyle,
        this.chart.container);e(b.checkbox,"click",function(a){B(b.series||b,"checkboxClick",{checked:a.target.checked,item:b},function(){b.select()})})};return a}();(/Trident\/7\.0/.test(z.navigator&&z.navigator.userAgent)||a)&&y(G.prototype,"positionItem",function(b,a){var c=this,d=function(){a._legendItemPos&&b.call(c,a)};d();c.bubbleLegend||setTimeout(d)});"";return G});M(a,"Core/Series/SeriesRegistry.js",[a["Core/Globals.js"],a["Core/DefaultOptions.js"],a["Core/Series/Point.js"],a["Core/Utilities.js"]],
    function(a,u,z,F){var v=u.defaultOptions,G=F.error,H=F.extendClass,A=F.merge,q;(function(n){function k(a,c){var e=v.plotOptions||{},f=c.defaultOptions;c.prototype.pointClass||(c.prototype.pointClass=z);c.prototype.type=a;f&&(e[a]=f);n.seriesTypes[a]=c}n.seriesTypes=a.seriesTypes;n.getSeries=function(a,c){void 0===c&&(c={});var e=a.options.chart;e=c.type||e.type||e.defaultSeriesType||"";var f=n.seriesTypes[e];n||G(17,!0,a,{missingModuleFor:e});e=new f;"function"===typeof e.init&&e.init(a,c);return e};
        n.registerSeriesType=k;n.seriesType=function(a,c,h,f,q){var e=v.plotOptions||{};c=c||"";e[a]=A(e[c],h);k(a,H(n.seriesTypes[c]||function(){},f));n.seriesTypes[a].prototype.type=a;q&&(n.seriesTypes[a].prototype.pointClass=H(z,q));return n.seriesTypes[a]}})(q||(q={}));return q});M(a,"Core/Chart/Chart.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Axis/Axis.js"],a["Core/FormatUtilities.js"],a["Core/Foundation.js"],a["Core/Globals.js"],a["Core/Legend/Legend.js"],a["Core/MSPointer.js"],a["Core/DefaultOptions.js"],
    a["Core/Pointer.js"],a["Core/Renderer/RendererRegistry.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Time.js"],a["Core/Utilities.js"],a["Core/Renderer/HTML/AST.js"]],function(a,u,z,F,y,G,H,A,q,n,k,e,c,h,f){var w=a.animate,p=a.animObject,B=a.setAnimation,t=z.numberFormat,v=F.registerEventOptions,C=y.charts,r=y.doc,l=y.marginNames,b=y.svg,g=y.win,d=A.defaultOptions,m=A.defaultTime,D=k.seriesTypes,x=h.addEvent,I=h.attr,P=h.cleanRecursively,S=h.createElement,O=
    h.css,U=h.defined,Y=h.discardElement,L=h.erase,K=h.error,M=h.extend,da=h.find,Q=h.fireEvent,ea=h.getStyle,E=h.isArray,T=h.isNumber,N=h.isObject,V=h.isString,W=h.merge,X=h.objectEach,R=h.pick,fa=h.pInt,aa=h.relativeLength,ia=h.removeEvent,ha=h.splat,ba=h.syncTimeout,ka=h.uniqueKey;a=function(){function a(b,a,c){this.series=this.renderTo=this.renderer=this.pointer=this.pointCount=this.plotWidth=this.plotTop=this.plotLeft=this.plotHeight=this.plotBox=this.options=this.numberFormatter=this.margin=this.legend=
    this.labelCollectors=this.isResizing=this.index=this.eventOptions=this.container=this.colorCounter=this.clipBox=this.chartWidth=this.chartHeight=this.bounds=this.axisOffset=this.axes=void 0;this.sharedClips={};this.yAxis=this.xAxis=this.userOptions=this.titleOffset=this.time=this.symbolCounter=this.spacingBox=this.spacing=void 0;this.getArgs(b,a,c)}a.chart=function(b,c,d){return new a(b,c,d)};a.prototype.getArgs=function(b,a,c){V(b)||b.nodeName?(this.renderTo=b,this.init(a,c)):this.init(b,a)};a.prototype.init=
    function(b,a){var e=b.plotOptions||{};Q(this,"init",{args:arguments},function(){var g=W(d,b),f=g.chart;X(g.plotOptions,function(b,a){N(b)&&(b.tooltip=e[a]&&W(e[a].tooltip)||void 0)});g.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;this.userOptions=b;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=a;this.isResizing=0;this.options=g;this.axes=[];this.series=[];this.time=b.time&&Object.keys(b.time).length?new c(b.time):y.time;
        this.numberFormatter=f.numberFormatter||t;this.styledMode=f.styledMode;this.hasCartesianSeries=f.showAxes;this.index=C.length;C.push(this);y.chartCount++;v(this,f);this.xAxis=[];this.yAxis=[];this.pointCount=this.colorCounter=this.symbolCounter=0;Q(this,"afterInit");this.firstRender()})};a.prototype.initSeries=function(b){var a=this.options.chart;a=b.type||a.type||a.defaultSeriesType;var c=D[a];c||K(17,!0,this,{missingModuleFor:a});a=new c;"function"===typeof a.init&&a.init(this,b);return a};a.prototype.setSeriesData=
    function(){this.getSeriesOrderByLinks().forEach(function(b){b.points||b.data||!b.enabledDataSorting||b.setData(b.options.data,!1)})};a.prototype.getSeriesOrderByLinks=function(){return this.series.concat().sort(function(b,a){return b.linkedSeries.length||a.linkedSeries.length?a.linkedSeries.length-b.linkedSeries.length:0})};a.prototype.orderSeries=function(b){var a=this.series;b=b||0;for(var c=a.length;b<c;++b)a[b]&&(a[b].index=b,a[b].name=a[b].getName())};a.prototype.isInsidePlot=function(b,a,c){void 0===
c&&(c={});var d=this.inverted,e=this.plotBox,g=this.plotLeft,f=this.plotTop,h=this.scrollablePlotBox,l=0;var k=0;c.visiblePlotOnly&&this.scrollingContainer&&(k=this.scrollingContainer,l=k.scrollLeft,k=k.scrollTop);var m=c.series;e=c.visiblePlotOnly&&h||e;h=c.inverted?a:b;a=c.inverted?b:a;b={x:h,y:a,isInsidePlot:!0};if(!c.ignoreX){var p=m&&(d?m.yAxis:m.xAxis)||{pos:g,len:Infinity};h=c.paneCoordinates?p.pos+h:g+h;h>=Math.max(l+g,p.pos)&&h<=Math.min(l+g+e.width,p.pos+p.len)||(b.isInsidePlot=!1)}!c.ignoreY&&
b.isInsidePlot&&(d=m&&(d?m.xAxis:m.yAxis)||{pos:f,len:Infinity},c=c.paneCoordinates?d.pos+a:f+a,c>=Math.max(k+f,d.pos)&&c<=Math.min(k+f+e.height,d.pos+d.len)||(b.isInsidePlot=!1));Q(this,"afterIsInsidePlot",b);return b.isInsidePlot};a.prototype.redraw=function(b){Q(this,"beforeRedraw");var a=this.hasCartesianSeries?this.axes:this.colorAxis||[],c=this.series,d=this.pointer,e=this.legend,g=this.userOptions.legend,f=this.renderer,h=f.isHidden(),l=[],k=this.isDirtyBox,m=this.isDirtyLegend;this.setResponsive&&
this.setResponsive(!1);B(this.hasRendered?b:!1,this);h&&this.temporaryDisplay();this.layOutTitles();for(b=c.length;b--;){var p=c[b];if(p.options.stacking||p.options.centerInCategory){var n=!0;if(p.isDirty){var E=!0;break}}}if(E)for(b=c.length;b--;)p=c[b],p.options.stacking&&(p.isDirty=!0);c.forEach(function(b){b.isDirty&&("point"===b.options.legendType?("function"===typeof b.updateTotals&&b.updateTotals(),m=!0):g&&(g.labelFormatter||g.labelFormat)&&(m=!0));b.isDirtyData&&Q(b,"updatedData")});m&&e&&
e.options.enabled&&(e.render(),this.isDirtyLegend=!1);n&&this.getStacks();a.forEach(function(b){b.updateNames();b.setScale()});this.getMargins();a.forEach(function(b){b.isDirty&&(k=!0)});a.forEach(function(b){var a=b.min+","+b.max;b.extKey!==a&&(b.extKey=a,l.push(function(){Q(b,"afterSetExtremes",M(b.eventArgs,b.getExtremes()));delete b.eventArgs}));(k||n)&&b.redraw()});k&&this.drawChartBox();Q(this,"predraw");c.forEach(function(b){(k||b.isDirty)&&b.visible&&b.redraw();b.isDirtyData=!1});d&&d.reset(!0);
    f.draw();Q(this,"redraw");Q(this,"render");h&&this.temporaryDisplay(!0);l.forEach(function(b){b.call()})};a.prototype.get=function(b){function a(a){return a.id===b||a.options&&a.options.id===b}for(var c=this.series,d=da(this.axes,a)||da(this.series,a),e=0;!d&&e<c.length;e++)d=da(c[e].points||[],a);return d};a.prototype.getAxes=function(){var b=this,a=this.options,c=a.xAxis=ha(a.xAxis||{});a=a.yAxis=ha(a.yAxis||{});Q(this,"getAxes");c.forEach(function(b,a){b.index=a;b.isX=!0});a.forEach(function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        a){b.index=a});c.concat(a).forEach(function(a){new u(b,a)});Q(this,"afterGetAxes")};a.prototype.getSelectedPoints=function(){return this.series.reduce(function(b,a){a.getPointsCollection().forEach(function(a){R(a.selectedStaging,a.selected)&&b.push(a)});return b},[])};a.prototype.getSelectedSeries=function(){return this.series.filter(function(b){return b.selected})};a.prototype.setTitle=function(b,a,c){this.applyDescription("title",b);this.applyDescription("subtitle",a);this.applyDescription("caption",
    void 0);this.layOutTitles(c)};a.prototype.applyDescription=function(b,a){var c=this,d="title"===b?{color:"#333333",fontSize:this.options.isStock?"16px":"18px"}:{color:"#666666"};d=this.options[b]=W(!this.styledMode&&{style:d},this.options[b],a);var e=this[b];e&&a&&(this[b]=e=e.destroy());d&&!e&&(e=this.renderer.text(d.text,0,0,d.useHTML).attr({align:d.align,"class":"highcharts-"+b,zIndex:d.zIndex||4}).add(),e.update=function(a){c[{title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"}[b]](a)},
this.styledMode||e.css(d.style),this[b]=e)};a.prototype.layOutTitles=function(b){var a=[0,0,0],c=this.renderer,d=this.spacingBox;["title","subtitle","caption"].forEach(function(b){var e=this[b],g=this.options[b],f=g.verticalAlign||"top";b="title"===b?"top"===f?-3:0:"top"===f?a[0]+2:0;var h;if(e){this.styledMode||(h=g.style&&g.style.fontSize);h=c.fontMetrics(h,e).b;e.css({width:(g.width||d.width+(g.widthAdjust||0))+"px"});var l=Math.round(e.getBBox(g.useHTML).height);e.align(M({y:"bottom"===f?h:b+
        h,height:l},g),!1,"spacingBox");g.floating||("top"===f?a[0]=Math.ceil(a[0]+l):"bottom"===f&&(a[2]=Math.ceil(a[2]+l)))}},this);a[0]&&"top"===(this.options.title.verticalAlign||"top")&&(a[0]+=this.options.title.margin);a[2]&&"bottom"===this.options.caption.verticalAlign&&(a[2]+=this.options.caption.margin);var e=!this.titleOffset||this.titleOffset.join(",")!==a.join(",");this.titleOffset=a;Q(this,"afterLayOutTitles");!this.isDirtyBox&&e&&(this.isDirtyBox=this.isDirtyLegend=e,this.hasRendered&&R(b,!0)&&
this.isDirtyBox&&this.redraw())};a.prototype.getChartSize=function(){var b=this.options.chart,a=b.width;b=b.height;var c=this.renderTo;U(a)||(this.containerWidth=ea(c,"width"));U(b)||(this.containerHeight=ea(c,"height"));this.chartWidth=Math.max(0,a||this.containerWidth||600);this.chartHeight=Math.max(0,aa(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))};a.prototype.temporaryDisplay=function(b){var a=this.renderTo;if(b)for(;a&&a.style;)a.hcOrigStyle&&(O(a,a.hcOrigStyle),delete a.hcOrigStyle),
a.hcOrigDetached&&(r.body.removeChild(a),a.hcOrigDetached=!1),a=a.parentNode;else for(;a&&a.style;){r.body.contains(a)||a.parentNode||(a.hcOrigDetached=!0,r.body.appendChild(a));if("none"===ea(a,"display",!1)||a.hcOricDetached)a.hcOrigStyle={display:a.style.display,height:a.style.height,overflow:a.style.overflow},b={display:"block",overflow:"hidden"},a!==this.renderTo&&(b.height=0),O(a,b),a.offsetWidth||a.style.setProperty("display","block","important");a=a.parentNode;if(a===r.body)break}};a.prototype.setClassName=
    function(b){this.container.className="highcharts-container "+(b||"")};a.prototype.getContainer=function(){var a=this.options,c=a.chart,d=ka(),g,h=this.renderTo;h||(this.renderTo=h=c.renderTo);V(h)&&(this.renderTo=h=r.getElementById(h));h||K(13,!0,this);var l=fa(I(h,"data-highcharts-chart"));T(l)&&C[l]&&C[l].hasRendered&&C[l].destroy();I(h,"data-highcharts-chart",this.index);h.innerHTML=f.emptyHTML;c.skipClone||h.offsetWidth||this.temporaryDisplay();this.getChartSize();l=this.chartWidth;var k=this.chartHeight;
    O(h,{overflow:"hidden"});this.styledMode||(g=M({position:"relative",overflow:"hidden",width:l+"px",height:k+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)",userSelect:"none","touch-action":"manipulation",outline:"none"},c.style||{}));this.container=d=S("div",{id:d},g,h);this._cursor=d.style.cursor;this.renderer=new (c.renderer||!b?n.getRendererType(c.renderer):e)(d,l,k,void 0,c.forExport,a.exporting&&a.exporting.allowHTML,this.styledMode);B(void 0,
        this);this.setClassName(c.className);if(this.styledMode)for(var m in a.defs)this.renderer.definition(a.defs[m]);else this.renderer.setStyle(c.style);this.renderer.chartIndex=this.index;Q(this,"afterGetContainer")};a.prototype.getMargins=function(b){var a=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();d[0]&&!U(c[0])&&(this.plotTop=Math.max(this.plotTop,d[0]+a[0]));d[2]&&!U(c[2])&&(this.marginBottom=Math.max(this.marginBottom,d[2]+a[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,
    a);Q(this,"getMargins");b||this.getAxisMargins()};a.prototype.getAxisMargins=function(){var b=this,a=b.axisOffset=[0,0,0,0],c=b.colorAxis,d=b.margin,e=function(b){b.forEach(function(b){b.visible&&b.getOffset()})};b.hasCartesianSeries?e(b.axes):c&&c.length&&e(c);l.forEach(function(c,e){U(d[e])||(b[c]+=a[e])});b.setChartSize()};a.prototype.reflow=function(b){var a=this,c=a.options.chart,d=a.renderTo,e=U(c.width)&&U(c.height),f=c.width||ea(d,"width");c=c.height||ea(d,"height");d=b?b.target:g;delete a.pointer.chartPosition;
    if(!e&&!a.isPrinting&&f&&c&&(d===g||d===r)){if(f!==a.containerWidth||c!==a.containerHeight)h.clearTimeout(a.reflowTimeout),a.reflowTimeout=ba(function(){a.container&&a.setSize(void 0,void 0,!1)},b?100:0);a.containerWidth=f;a.containerHeight=c}};a.prototype.setReflow=function(b){var a=this;!1===b||this.unbindReflow?!1===b&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=x(g,"resize",function(b){a.options&&a.reflow(b)}),x(this,"destroy",this.unbindReflow))};a.prototype.setSize=
    function(b,a,c){var d=this,e=d.renderer;d.isResizing+=1;B(c,d);c=e.globalAnimation;d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;"undefined"!==typeof b&&(d.options.chart.width=b);"undefined"!==typeof a&&(d.options.chart.height=a);d.getChartSize();d.styledMode||(c?w:O)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},c);d.setChartSize(!0);e.setSize(d.chartWidth,d.chartHeight,c);d.axes.forEach(function(b){b.isDirty=!0;b.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();
        d.getMargins();d.redraw(c);d.oldChartHeight=null;Q(d,"resize");ba(function(){d&&Q(d,"endResize",null,function(){--d.isResizing})},p(c).duration)};a.prototype.setChartSize=function(b){var a=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,g=this.options.chart,f=this.spacing,h=this.clipOffset,l,k,m,p;this.plotLeft=l=Math.round(this.plotLeft);this.plotTop=k=Math.round(this.plotTop);this.plotWidth=m=Math.max(0,Math.round(d-l-this.marginRight));this.plotHeight=p=Math.max(0,Math.round(e-
    k-this.marginBottom));this.plotSizeX=a?p:m;this.plotSizeY=a?m:p;this.plotBorderWidth=g.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:f[3],y:f[0],width:d-f[3]-f[1],height:e-f[0]-f[2]};this.plotBox=c.plotBox={x:l,y:k,width:m,height:p};a=2*Math.floor(this.plotBorderWidth/2);d=Math.ceil(Math.max(a,h[3])/2);e=Math.ceil(Math.max(a,h[0])/2);this.clipBox={x:d,y:e,width:Math.floor(this.plotSizeX-Math.max(a,h[1])/2-d),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(a,h[2])/2-e))};b||(this.axes.forEach(function(b){b.setAxisSize();
    b.setAxisTranslation()}),c.alignElements());Q(this,"afterSetChartSize",{skipAxes:b})};a.prototype.resetMargins=function(){Q(this,"resetMargins");var b=this,a=b.options.chart;["margin","spacing"].forEach(function(c){var d=a[c],e=N(d)?d:[d,d,d,d];["Top","Right","Bottom","Left"].forEach(function(d,g){b[c][g]=R(a[c+d],e[g])})});l.forEach(function(a,c){b[a]=R(b.margin[c],b.spacing[c])});b.axisOffset=[0,0,0,0];b.clipOffset=[0,0,0,0]};a.prototype.drawChartBox=function(){var b=this.options.chart,a=this.renderer,
    c=this.chartWidth,d=this.chartHeight,e=this.styledMode,g=this.plotBGImage,f=b.backgroundColor,h=b.plotBackgroundColor,l=b.plotBackgroundImage,k=this.plotLeft,m=this.plotTop,p=this.plotWidth,n=this.plotHeight,E=this.plotBox,r=this.clipRect,t=this.clipBox,q=this.chartBackground,N=this.plotBackground,w=this.plotBorder,B,C="animate";q||(this.chartBackground=q=a.rect().addClass("highcharts-background").add(),C="attr");if(e)var x=B=q.strokeWidth();else{x=b.borderWidth||0;B=x+(b.shadow?8:0);f={fill:f||"none"};
    if(x||q["stroke-width"])f.stroke=b.borderColor,f["stroke-width"]=x;q.attr(f).shadow(b.shadow)}q[C]({x:B/2,y:B/2,width:c-B-x%2,height:d-B-x%2,r:b.borderRadius});C="animate";N||(C="attr",this.plotBackground=N=a.rect().addClass("highcharts-plot-background").add());N[C](E);e||(N.attr({fill:h||"none"}).shadow(b.plotShadow),l&&(g?(l!==g.attr("href")&&g.attr("href",l),g.animate(E)):this.plotBGImage=a.image(l,k,m,p,n).add()));r?r.animate({width:t.width,height:t.height}):this.clipRect=a.clipRect(t);C="animate";
    w||(C="attr",this.plotBorder=w=a.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());e||w.attr({stroke:b.plotBorderColor,"stroke-width":b.plotBorderWidth||0,fill:"none"});w[C](w.crisp({x:k,y:m,width:p,height:n},-w.strokeWidth()));this.isDirtyBox=!1;Q(this,"afterDrawChartBox")};a.prototype.propFromSeries=function(){var b=this,a=b.options.chart,c=b.options.series,d,e,g;["inverted","angular","polar"].forEach(function(f){e=D[a.type||a.defaultSeriesType];g=a[f]||e&&e.prototype[f];for(d=c&&
    c.length;!g&&d--;)(e=D[c[d].type])&&e.prototype[f]&&(g=!0);b[f]=g})};a.prototype.linkSeries=function(){var b=this,a=b.series;a.forEach(function(b){b.linkedSeries.length=0});a.forEach(function(a){var c=a.options.linkedTo;V(c)&&(c=":previous"===c?b.series[a.index-1]:b.get(c))&&c.linkedParent!==a&&(c.linkedSeries.push(a),a.linkedParent=c,c.enabledDataSorting&&a.setDataSortingOptions(),a.visible=R(a.options.visible,c.options.visible,a.visible))});Q(this,"afterLinkSeries")};a.prototype.renderSeries=function(){this.series.forEach(function(b){b.translate();
    b.render()})};a.prototype.renderLabels=function(){var b=this,a=b.options.labels;a.items&&a.items.forEach(function(c){var d=M(a.style,c.style),e=fa(d.left)+b.plotLeft,g=fa(d.top)+b.plotTop+12;delete d.left;delete d.top;b.renderer.text(c.html,e,g).attr({zIndex:2}).css(d).add()})};a.prototype.render=function(){var b=this.axes,a=this.colorAxis,c=this.renderer,d=this.options,e=function(b){b.forEach(function(b){b.visible&&b.render()})},g=0;this.setTitle();this.legend=new G(this,d.legend);this.getStacks&&
this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;b.some(function(b){if(b.horiz&&b.visible&&b.options.labels.enabled&&b.series.length)return g=21,!0});var f=this.plotHeight=Math.max(this.plotHeight-g,0);b.forEach(function(b){b.setScale()});this.getAxisMargins();var h=1.1<d/this.plotWidth,l=1.05<f/this.plotHeight;if(h||l)b.forEach(function(b){(b.horiz&&h||!b.horiz&&l)&&b.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?e(b):a&&a.length&&e(a);
    this.seriesGroup||(this.seriesGroup=c.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0};a.prototype.addCredits=function(b){var a=this,c=W(!0,this.options.credits,b);c.enabled&&!this.credits&&(this.credits=this.renderer.text(c.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){c.href&&(g.location.href=c.href)}).attr({align:c.position.align,zIndex:8}),a.styledMode||
this.credits.css(c.style),this.credits.add().align(c.position),this.credits.update=function(b){a.credits=a.credits.destroy();a.addCredits(b)})};a.prototype.destroy=function(){var b=this,a=b.axes,c=b.series,d=b.container,e=d&&d.parentNode,g;Q(b,"destroy");b.renderer.forExport?L(C,b):C[b.index]=void 0;y.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");ia(b);for(g=a.length;g--;)a[g]=a[g].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(g=c.length;g--;)c[g]=
    c[g].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML=f.emptyHTML,ia(d),e&&Y(d));X(b,function(a,c){delete b[c]})};a.prototype.firstRender=function(){var b=this,a=b.options;if(!b.isReadyToRender||b.isReadyToRender()){b.getContainer();b.resetMargins();b.setChartSize();b.propFromSeries();
    b.getAxes();(E(a.series)?a.series:[]).forEach(function(a){b.initSeries(a)});b.linkSeries();b.setSeriesData();Q(b,"beforeRender");q&&(H.isRequired()?b.pointer=new H(b,a):b.pointer=new q(b,a));b.render();b.pointer.getChartPosition();if(!b.renderer.imgCount&&!b.hasLoaded)b.onload();b.temporaryDisplay(!0)}};a.prototype.onload=function(){this.callbacks.concat([this.callback]).forEach(function(b){b&&"undefined"!==typeof this.index&&b.apply(this,[this])},this);Q(this,"load");Q(this,"render");U(this.index)&&
this.setReflow(this.options.chart.reflow);this.hasLoaded=!0};a.prototype.addSeries=function(b,a,c){var d=this,e;b&&(a=R(a,!0),Q(d,"addSeries",{options:b},function(){e=d.initSeries(b);d.isDirtyLegend=!0;d.linkSeries();e.enabledDataSorting&&e.setData(b.data,!1);Q(d,"afterAddSeries",{series:e});a&&d.redraw(c)}));return e};a.prototype.addAxis=function(b,a,c,d){return this.createAxis(a?"xAxis":"yAxis",{axis:b,redraw:c,animation:d})};a.prototype.addColorAxis=function(b,a,c){return this.createAxis("colorAxis",
    {axis:b,redraw:a,animation:c})};a.prototype.createAxis=function(b,a){b=new u(this,W(a.axis,{index:this[b].length,isX:"xAxis"===b}));R(a.redraw,!0)&&this.redraw(a.animation);return b};a.prototype.showLoading=function(b){var a=this,c=a.options,d=c.loading,e=function(){g&&O(g,{left:a.plotLeft+"px",top:a.plotTop+"px",width:a.plotWidth+"px",height:a.plotHeight+"px"})},g=a.loadingDiv,h=a.loadingSpan;g||(a.loadingDiv=g=S("div",{className:"highcharts-loading highcharts-loading-hidden"},null,a.container));
    h||(a.loadingSpan=h=S("span",{className:"highcharts-loading-inner"},null,g),x(a,"redraw",e));g.className="highcharts-loading";f.setElementHTML(h,R(b,c.lang.loading,""));a.styledMode||(O(g,M(d.style,{zIndex:10})),O(h,d.labelStyle),a.loadingShown||(O(g,{opacity:0,display:""}),w(g,{opacity:d.style.opacity||.5},{duration:d.showDuration||0})));a.loadingShown=!0;e()};a.prototype.hideLoading=function(){var b=this.options,a=this.loadingDiv;a&&(a.className="highcharts-loading highcharts-loading-hidden",this.styledMode||
w(a,{opacity:0},{duration:b.loading.hideDuration||100,complete:function(){O(a,{display:"none"})}}));this.loadingShown=!1};a.prototype.update=function(b,a,d,e){var g=this,f={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},h=b.isResponsiveOptions,l=[],k,p;Q(g,"update",{options:b});h||g.setResponsive(!1,!0);b=P(b,g.options);g.userOptions=W(g.userOptions,b);var n=b.chart;if(n){W(!0,g.options.chart,n);"className"in n&&g.setClassName(n.className);"reflow"in n&&g.setReflow(n.reflow);
    if("inverted"in n||"polar"in n||"type"in n){g.propFromSeries();var E=!0}"alignTicks"in n&&(E=!0);"events"in n&&v(this,n);X(n,function(b,a){-1!==g.propsRequireUpdateSeries.indexOf("chart."+a)&&(k=!0);-1!==g.propsRequireDirtyBox.indexOf(a)&&(g.isDirtyBox=!0);-1!==g.propsRequireReflow.indexOf(a)&&(h?g.isDirtyBox=!0:p=!0)});!g.styledMode&&n.style&&g.renderer.setStyle(g.options.chart.style||{})}!g.styledMode&&b.colors&&(this.options.colors=b.colors);b.time&&(this.time===m&&(this.time=new c(b.time)),W(!0,
    g.options.time,b.time));X(b,function(a,c){if(g[c]&&"function"===typeof g[c].update)g[c].update(a,!1);else if("function"===typeof g[f[c]])g[f[c]](a);else"colors"!==c&&-1===g.collectionsWithUpdate.indexOf(c)&&W(!0,g.options[c],b[c]);"chart"!==c&&-1!==g.propsRequireUpdateSeries.indexOf(c)&&(k=!0)});this.collectionsWithUpdate.forEach(function(a){if(b[a]){var c=[];g[a].forEach(function(b,a){b.options.isInternal||c.push(R(b.options.index,a))});ha(b[a]).forEach(function(b,e){var f=U(b.id),h;f&&(h=g.get(b.id));
    !h&&g[a]&&(h=g[a][c?c[e]:e])&&f&&U(h.options.id)&&(h=void 0);h&&h.coll===a&&(h.update(b,!1),d&&(h.touched=!0));!h&&d&&g.collectionsWithInit[a]&&(g.collectionsWithInit[a][0].apply(g,[b].concat(g.collectionsWithInit[a][1]||[]).concat([!1])).touched=!0)});d&&g[a].forEach(function(b){b.touched||b.options.isInternal?delete b.touched:l.push(b)})}});l.forEach(function(b){b.chart&&b.remove&&b.remove(!1)});E&&g.axes.forEach(function(b){b.update({},!1)});k&&g.getSeriesOrderByLinks().forEach(function(b){b.chart&&
b.update({},!1)},this);E=n&&n.width;n=n&&(V(n.height)?aa(n.height,E||g.chartWidth):n.height);p||T(E)&&E!==g.chartWidth||T(n)&&n!==g.chartHeight?g.setSize(E,n,e):R(a,!0)&&g.redraw(e);Q(g,"afterUpdate",{options:b,redraw:a,animation:e})};a.prototype.setSubtitle=function(b,a){this.applyDescription("subtitle",b);this.layOutTitles(a)};a.prototype.setCaption=function(b,a){this.applyDescription("caption",b);this.layOutTitles(a)};a.prototype.showResetZoom=function(){function b(){a.zoomOut()}var a=this,c=d.lang,
    e=a.options.chart.resetZoomButton,g=e.theme,f=g.states,h="chart"===e.relativeTo||"spacingBox"===e.relativeTo?null:"scrollablePlotBox";Q(this,"beforeShowResetZoom",null,function(){a.resetZoomButton=a.renderer.button(c.resetZoom,null,null,b,g,f&&f.hover).attr({align:e.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(e.position,!1,h)});Q(this,"afterShowResetZoom")};a.prototype.zoomOut=function(){Q(this,"selection",{resetSelection:!0},this.zoom)};a.prototype.zoom=
    function(b){var a=this,c=a.pointer,d=a.inverted?c.mouseDownX:c.mouseDownY,e=!1,g;!b||b.resetSelection?(a.axes.forEach(function(b){g=b.zoom()}),c.initiated=!1):b.xAxis.concat(b.yAxis).forEach(function(b){var f=b.axis,h=a.inverted?f.left:f.top,l=a.inverted?h+f.width:h+f.height,k=f.isXAxis,m=!1;if(!k&&d>=h&&d<=l||k||!U(d))m=!0;c[k?"zoomX":"zoomY"]&&m&&(g=f.zoom(b.min,b.max),f.displayBtn&&(e=!0))});var f=a.resetZoomButton;e&&!f?a.showResetZoom():!e&&N(f)&&(a.resetZoomButton=f.destroy());g&&a.redraw(R(a.options.chart.animation,
        b&&b.animation,100>a.pointCount))};a.prototype.pan=function(b,a){var c=this,d=c.hoverPoints;a="object"===typeof a?a:{enabled:a,type:"x"};var e=c.options.chart,g=c.options.mapNavigation&&c.options.mapNavigation.enabled;e&&e.panning&&(e.panning=a);var f=a.type,h;Q(this,"pan",{originalEvent:b},function(){d&&d.forEach(function(b){b.setState()});var a=c.xAxis;"xy"===f?a=a.concat(c.yAxis):"y"===f&&(a=c.yAxis);var e={};a.forEach(function(a){if(a.options.panningEnabled&&!a.options.isInternal){var d=a.horiz,
    l=b[d?"chartX":"chartY"];d=d?"mouseDownX":"mouseDownY";var k=c[d],m=a.minPointOffset||0,p=a.reversed&&!c.inverted||!a.reversed&&c.inverted?-1:1,n=a.getExtremes(),E=a.toValue(k-l,!0)+m*p,r=a.toValue(k+a.len-l,!0)-(m*p||a.isXAxis&&a.pointRangePadding||0),t=r<E;p=a.hasVerticalPanning();k=t?r:E;E=t?E:r;var q=a.panningState;!p||a.isXAxis||q&&!q.isDirty||a.series.forEach(function(b){var a=b.getProcessedData(!0);a=b.getExtremes(a.yData,!0);q||(q={startMin:Number.MAX_VALUE,startMax:-Number.MAX_VALUE});T(a.dataMin)&&
T(a.dataMax)&&(q.startMin=Math.min(R(b.options.threshold,Infinity),a.dataMin,q.startMin),q.startMax=Math.max(R(b.options.threshold,-Infinity),a.dataMax,q.startMax))});p=Math.min(R(q&&q.startMin,n.dataMin),m?n.min:a.toValue(a.toPixels(n.min)-a.minPixelPadding));r=Math.max(R(q&&q.startMax,n.dataMax),m?n.max:a.toValue(a.toPixels(n.max)+a.minPixelPadding));a.panningState=q;a.isOrdinal||(m=p-k,0<m&&(E+=m,k=p),m=E-r,0<m&&(E=r,k-=m),a.series.length&&k!==n.min&&E!==n.max&&k>=p&&E<=r&&(a.setExtremes(k,E,!1,
    !1,{trigger:"pan"}),c.resetZoomButton||g||k===p||E===r||!f.match("y")||(c.showResetZoom(),a.displayBtn=!1),h=!0),e[d]=l)}});X(e,function(b,a){c[a]=b});h&&c.redraw(!1);O(c.container,{cursor:"move"})})};return a}();M(a.prototype,{callbacks:[],collectionsWithInit:{xAxis:[a.prototype.addAxis,[!0]],yAxis:[a.prototype.addAxis,[!1]],series:[a.prototype.addSeries]},collectionsWithUpdate:["xAxis","yAxis","series"],propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
    propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")});"";return a});M(a,"Core/Legend/LegendSymbol.js",[a["Core/Utilities.js"]],function(a){var v=a.merge,z=a.pick,F;(function(a){a.drawLineMarker=function(a){var u=this.options,A=a.symbolWidth,q=a.symbolHeight,n=q/2,k=this.chart.renderer,
    e=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var c={},h=u.marker;this.chart.styledMode||(c={"stroke-width":u.lineWidth||0},u.dashStyle&&(c.dashstyle=u.dashStyle));this.legendLine=k.path([["M",0,a],["L",A,a]]).addClass("highcharts-graph").attr(c).add(e);h&&!1!==h.enabled&&A&&(u=Math.min(z(h.radius,n),n),0===this.symbol.indexOf("url")&&(h=v(h,{width:q,height:q}),u=0),this.legendSymbol=A=k.symbol(this.symbol,A/2-u,a-u,2*u,2*u,h).addClass("highcharts-point").add(e),A.isMarker=!0)};a.drawRectangle=
    function(a,v){var u=a.symbolHeight,q=a.options.squareSymbol;v.legendSymbol=this.chart.renderer.rect(q?(a.symbolWidth-u)/2:0,a.baseline-u+1,q?u:a.symbolWidth,u,z(a.options.symbolRadius,u/2)).addClass("highcharts-point").attr({zIndex:3}).add(v.legendGroup)}})(F||(F={}));return F});M(a,"Core/Series/SeriesDefaults.js",[],function(){return{lineWidth:2,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{enabledThreshold:2,lineColor:"#ffffff",lineWidth:0,radius:4,states:{normal:{animation:!0},
            hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{animation:{},align:"center",defer:!0,formatter:function(){var a=this.series.chart.numberFormatter;return"number"!==typeof this.y?"":a(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},
        hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"}});M(a,"Core/Series/Series.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/DefaultOptions.js"],a["Core/Foundation.js"],a["Core/Globals.js"],a["Core/Legend/LegendSymbol.js"],a["Core/Series/Point.js"],a["Core/Series/SeriesDefaults.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/SVGElement.js"],
    a["Core/Utilities.js"]],function(a,u,z,F,y,G,H,A,q,n){var k=a.animObject,e=a.setAnimation,c=u.defaultOptions,h=z.registerEventOptions,f=F.hasTouch,w=F.svg,p=F.win,B=A.seriesTypes,t=n.addEvent,v=n.arrayMax,C=n.arrayMin,r=n.clamp,l=n.cleanRecursively,b=n.correctFloat,g=n.defined,d=n.erase,m=n.error,D=n.extend,x=n.find,I=n.fireEvent,P=n.getNestedProperty,S=n.isArray,O=n.isNumber,U=n.isString,Y=n.merge,L=n.objectEach,K=n.pick,M=n.removeEvent,da=n.splat,Q=n.syncTimeout;a=function(){function a(){this.zones=
    this.yAxis=this.xAxis=this.userOptions=this.tooltipOptions=this.processedYData=this.processedXData=this.points=this.options=this.linkedSeries=this.index=this.eventsToUnbind=this.eventOptions=this.data=this.chart=this._i=void 0}a.prototype.init=function(a,b){I(this,"init",{options:b});var c=this,d=a.series;this.eventsToUnbind=[];c.chart=a;c.options=c.setOptions(b);b=c.options;c.linkedSeries=[];c.bindAxes();D(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});h(this,b);var e=
    b.events;if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();c.parallelArrays.forEach(function(a){c[a+"Data"]||(c[a+"Data"]=[])});c.isCartesian&&(a.hasCartesianSeries=!0);var g;d.length&&(g=d[d.length-1]);c._i=K(g&&g._i,-1)+1;c.opacity=c.options.opacity;a.orderSeries(this.insert(d));b.dataSorting&&b.dataSorting.enabled?c.setDataSortingOptions():c.points||c.data||c.setData(b.data,!1);I(this,"afterInit")};a.prototype.is=function(a){return B[a]&&
    this instanceof B[a]};a.prototype.insert=function(a){var b=this.options.index,c;if(O(b)){for(c=a.length;c--;)if(b>=K(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return K(c,a.length-1)};a.prototype.bindAxes=function(){var a=this,b=a.options,c=a.chart,d;I(this,"bindAxes",null,function(){(a.axisTypes||[]).forEach(function(e){var g=0;c[e].forEach(function(c){d=c.options;if(b[e]===g&&!d.isInternal||"undefined"!==typeof b[e]&&b[e]===d.id||"undefined"===
    typeof b[e]&&0===d.index)a.insert(c.series),a[e]=c,c.isDirty=!0;d.isInternal||g++});a[e]||a.optionalAxis===e||m(18,!0,c)})});I(this,"afterBindAxes")};a.prototype.updateParallelArrays=function(a,b){var c=a.series,d=arguments,e=O(b)?function(d){var e="y"===d&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=e}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};c.parallelArrays.forEach(e)};a.prototype.hasData=function(){return this.visible&&"undefined"!==typeof this.dataMax&&
    "undefined"!==typeof this.dataMin||this.visible&&this.yData&&0<this.yData.length};a.prototype.autoIncrement=function(a){var b=this.options,c=b.pointIntervalUnit,d=b.relativeXValue,e=this.chart.time,g=this.xIncrement,f;g=K(g,b.pointStart,0);this.pointInterval=f=K(this.pointInterval,b.pointInterval,1);d&&O(a)&&(f*=a);c&&(b=new e.Date(g),"day"===c?e.set("Date",b,e.get("Date",b)+f):"month"===c?e.set("Month",b,e.get("Month",b)+f):"year"===c&&e.set("FullYear",b,e.get("FullYear",b)+f),f=b.getTime()-g);if(d&&
    O(a))return g+f;this.xIncrement=g+f;return g};a.prototype.setDataSortingOptions=function(){var a=this.options;D(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1});g(a.pointRange)||(a.pointRange=1)};a.prototype.setOptions=function(a){var b=this.chart,d=b.options,e=d.plotOptions,f=b.userOptions||{};a=Y(a);b=b.styledMode;var h={plotOptions:e,userOptions:a};I(this,"setOptions",h);var l=h.plotOptions[this.type],k=f.plotOptions||{};this.userOptions=h.userOptions;f=Y(l,e.series,f.plotOptions&&
    f.plotOptions[this.type],a);this.tooltipOptions=Y(c.tooltip,c.plotOptions.series&&c.plotOptions.series.tooltip,c.plotOptions[this.type].tooltip,d.tooltip.userOptions,e.series&&e.series.tooltip,e[this.type].tooltip,a.tooltip);this.stickyTracking=K(a.stickyTracking,k[this.type]&&k[this.type].stickyTracking,k.series&&k.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:f.stickyTracking);null===l.marker&&delete f.marker;this.zoneAxis=f.zoneAxis;e=this.zones=(f.zones||[]).slice();
    !f.negativeColor&&!f.negativeFillColor||f.zones||(d={value:f[this.zoneAxis+"Threshold"]||f.threshold||0,className:"highcharts-negative"},b||(d.color=f.negativeColor,d.fillColor=f.negativeFillColor),e.push(d));e.length&&g(e[e.length-1].value)&&e.push(b?{}:{color:this.color,fillColor:this.fillColor});I(this,"afterSetOptions",{options:f});return f};a.prototype.getName=function(){return K(this.options.name,"Series "+(this.index+1))};a.prototype.getCyclic=function(a,b,c){var d=this.chart,e=this.userOptions,
    f=a+"Index",h=a+"Counter",l=c?c.length:K(d.options.chart[a+"Count"],d[a+"Count"]);if(!b){var k=K(e[f],e["_"+f]);g(k)||(d.series.length||(d[h]=0),e["_"+f]=k=d[h]%l,d[h]+=1);c&&(b=c[k])}"undefined"!==typeof k&&(this[f]=k);this[a]=b};a.prototype.getColor=function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.color="#cccccc":this.getCyclic("color",this.options.color||c.plotOptions[this.type].color,this.chart.options.colors)};a.prototype.getPointsCollection=function(){return(this.hasGroupedData?
    this.points:this.data)||[]};a.prototype.getSymbol=function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)};a.prototype.findPointIndex=function(a,b){var c=a.id,d=a.x,e=this.points,g=this.options.dataSorting,f,h;if(c)g=this.chart.get(c),g instanceof G&&(f=g);else if(this.linkedParent||this.enabledDataSorting||this.options.relativeXValue)if(f=function(b){return!b.touched&&b.index===a.index},g&&g.matchByName?f=function(b){return!b.touched&&b.name===a.name}:this.options.relativeXValue&&
    (f=function(b){return!b.touched&&b.options.x===a.x}),f=x(e,f),!f)return;if(f){var l=f&&f.index;"undefined"!==typeof l&&(h=!0)}"undefined"===typeof l&&O(d)&&(l=this.xData.indexOf(d,b));-1!==l&&"undefined"!==typeof l&&this.cropped&&(l=l>=this.cropStart?l-this.cropStart:l);!h&&O(l)&&e[l]&&e[l].touched&&(l=void 0);return l};a.prototype.updateData=function(a,b){var c=this.options,d=c.dataSorting,e=this.points,f=[],h=this.requireSorting,l=a.length===e.length,k,m,p,n=!0;this.xIncrement=null;a.forEach(function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                b){var m=g(a)&&this.pointClass.prototype.optionsToObject.call({series:this},a)||{},n=m.x;if(m.id||O(n)){if(m=this.findPointIndex(m,p),-1===m||"undefined"===typeof m?f.push(a):e[m]&&a!==c.data[m]?(e[m].update(a,!1,null,!1),e[m].touched=!0,h&&(p=m+1)):e[m]&&(e[m].touched=!0),!l||b!==m||d&&d.enabled||this.hasDerivedData)k=!0}else f.push(a)},this);if(k)for(a=e.length;a--;)(m=e[a])&&!m.touched&&m.remove&&m.remove(!1,b);else!l||d&&d.enabled?n=!1:(a.forEach(function(a,b){a!==e[b].y&&e[b].update&&e[b].update(a,
    !1,null,!1)}),f.length=0);e.forEach(function(a){a&&(a.touched=!1)});if(!n)return!1;f.forEach(function(a){this.addPoint(a,!1,null,null,!1)},this);null===this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=v(this.xData),this.autoIncrement());return!0};a.prototype.setData=function(a,b,c,d){var e=this,g=e.points,f=g&&g.length||0,h=e.options,l=e.chart,k=h.dataSorting,p=e.xAxis,n=h.turboThreshold,r=this.xData,E=this.yData,t=e.pointArrayMap;t=t&&t.length;var q=h.keys,w,B=0,C=1,x=null;a=a||[];
    var v=a.length;b=K(b,!0);k&&k.enabled&&(a=this.sortData(a));!1!==d&&v&&f&&!e.cropped&&!e.hasGroupedData&&e.visible&&!e.isSeriesBoosting&&(w=this.updateData(a,c));if(!w){e.xIncrement=null;e.colorCounter=0;this.parallelArrays.forEach(function(a){e[a+"Data"].length=0});if(n&&v>n)if(x=e.getFirstValidPoint(a),O(x))for(c=0;c<v;c++)r[c]=this.autoIncrement(),E[c]=a[c];else if(S(x))if(t)if(x.length===t)for(c=0;c<v;c++)r[c]=this.autoIncrement(),E[c]=a[c];else for(c=0;c<v;c++)d=a[c],r[c]=d[0],E[c]=d.slice(1,
        t+1);else if(q&&(B=q.indexOf("x"),C=q.indexOf("y"),B=0<=B?B:0,C=0<=C?C:1),1===x.length&&(C=0),B===C)for(c=0;c<v;c++)r[c]=this.autoIncrement(),E[c]=a[c][C];else for(c=0;c<v;c++)d=a[c],r[c]=d[B],E[c]=d[C];else m(12,!1,l);else for(c=0;c<v;c++)"undefined"!==typeof a[c]&&(d={series:e},e.pointClass.prototype.applyOptions.apply(d,[a[c]]),e.updateParallelArrays(d,c));E&&U(E[0])&&m(14,!0,l);e.data=[];e.options.data=e.userOptions.data=a;for(c=f;c--;)g[c]&&g[c].destroy&&g[c].destroy();p&&(p.minRange=p.userMinRange);
        e.isDirty=l.isDirtyBox=!0;e.isDirtyData=!!g;c=!1}"point"===h.legendType&&(this.processData(),this.generatePoints());b&&l.redraw(c)};a.prototype.sortData=function(a){var b=this,c=b.options.dataSorting.sortKey||"y",d=function(a,b){return g(b)&&a.pointClass.prototype.optionsToObject.call({series:a},b)||{}};a.forEach(function(c,e){a[e]=d(b,c);a[e].index=e},this);a.concat().sort(function(a,b){a=P(c,a);b=P(c,b);return b<a?-1:b>a?1:0}).forEach(function(a,b){a.x=b},this);b.linkedSeries&&b.linkedSeries.forEach(function(b){var c=
    b.options,e=c.data;c.dataSorting&&c.dataSorting.enabled||!e||(e.forEach(function(c,g){e[g]=d(b,c);a[g]&&(e[g].x=a[g].x,e[g].index=g)}),b.setData(e,!1))});return a};a.prototype.getProcessedData=function(a){var b=this.xAxis,c=this.options,d=c.cropThreshold,e=a||this.getExtremesFromAll||c.getExtremesFromAll,g=this.isCartesian;a=b&&b.val2lin;c=!(!b||!b.logarithmic);var f=0,h=this.xData,l=this.yData,k=this.requireSorting;var p=!1;var n=h.length;if(b){p=b.getExtremes();var r=p.min;var E=p.max;p=b.categories&&
    !b.names.length}if(g&&this.sorted&&!e&&(!d||n>d||this.forceCrop))if(h[n-1]<r||h[0]>E)h=[],l=[];else if(this.yData&&(h[0]<r||h[n-1]>E)){var t=this.cropData(this.xData,this.yData,r,E);h=t.xData;l=t.yData;f=t.start;t=!0}for(d=h.length||1;--d;)if(b=c?a(h[d])-a(h[d-1]):h[d]-h[d-1],0<b&&("undefined"===typeof q||b<q))var q=b;else 0>b&&k&&!p&&(m(15,!1,this.chart),k=!1);return{xData:h,yData:l,cropped:t,cropStart:f,closestPointRange:q}};a.prototype.processData=function(a){var b=this.xAxis;if(this.isCartesian&&
    !this.isDirty&&!b.isDirty&&!this.yAxis.isDirty&&!a)return!1;a=this.getProcessedData();this.cropped=a.cropped;this.cropStart=a.cropStart;this.processedXData=a.xData;this.processedYData=a.yData;this.closestPointRange=this.basePointRange=a.closestPointRange;I(this,"afterProcessData")};a.prototype.cropData=function(a,b,c,d,e){var g=a.length,f,h=0,l=g;e=K(e,this.cropShoulder);for(f=0;f<g;f++)if(a[f]>=c){h=Math.max(0,f-e);break}for(c=f;c<g;c++)if(a[c]>d){l=c+e;break}return{xData:a.slice(h,l),yData:b.slice(h,
        l),start:h,end:l}};a.prototype.generatePoints=function(){var a=this.options,b=a.data,c=this.processedXData,d=this.processedYData,e=this.pointClass,g=c.length,f=this.cropStart||0,h=this.hasGroupedData,l=a.keys,k=[];a=a.dataGrouping&&a.dataGrouping.groupAll?f:0;var m,p,n=this.data;if(!n&&!h){var r=[];r.length=b.length;n=this.data=r}l&&h&&(this.options.keys=!1);for(p=0;p<g;p++){r=f+p;if(h){var t=(new e).init(this,[c[p]].concat(da(d[p])));t.dataGroup=this.groupMap[a+p];t.dataGroup.options&&(t.options=
    t.dataGroup.options,D(t,t.dataGroup.options),delete t.dataLabels)}else(t=n[r])||"undefined"===typeof b[r]||(n[r]=t=(new e).init(this,b[r],c[p]));t&&(t.index=h?a+p:r,k[p]=t)}this.options.keys=l;if(n&&(g!==(m=n.length)||h))for(p=0;p<m;p++)p!==f||h||(p+=g),n[p]&&(n[p].destroyElements(),n[p].plotX=void 0);this.data=n;this.points=k;I(this,"afterGeneratePoints")};a.prototype.getXExtremes=function(a){return{min:C(a),max:v(a)}};a.prototype.getExtremes=function(a,b){var c=this.xAxis,d=this.yAxis,e=this.processedXData||
    this.xData,g=[],f=this.requireSorting?this.cropShoulder:0;d=d?d.positiveValuesOnly:!1;var h,l=0,k=0,m=0;a=a||this.stackedYData||this.processedYData||[];var p=a.length;if(c){var n=c.getExtremes();l=n.min;k=n.max}for(h=0;h<p;h++){var r=e[h];n=a[h];var t=(O(n)||S(n))&&(n.length||0<n||!d);r=b||this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!c||(e[h+f]||r)>=l&&(e[h-f]||r)<=k;if(t&&r)if(t=n.length)for(;t--;)O(n[t])&&(g[m++]=n[t]);else g[m++]=n}a={activeYData:g,dataMin:C(g),dataMax:v(g)};
    I(this,"afterGetExtremes",{dataExtremes:a});return a};a.prototype.applyExtremes=function(){var a=this.getExtremes();this.dataMin=a.dataMin;this.dataMax=a.dataMax;return a};a.prototype.getFirstValidPoint=function(a){for(var b=a.length,c=0,d=null;null===d&&c<b;)d=a[c],c++;return d};a.prototype.translate=function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,c=a.stacking,d=this.xAxis,e=d.categories,f=this.enabledDataSorting,h=this.yAxis,l=this.points,k=l.length,m=
    this.pointPlacementToXValue(),p=!!m,n=a.threshold,t=a.startFromThreshold?n:0,q=this.zoneAxis||"y",w,B,C=Number.MAX_VALUE;for(w=0;w<k;w++){var x=l[w],v=x.x,u=void 0,D=void 0,J=x.y,A=x.low,y=c&&h.stacking&&h.stacking.stacks[(this.negStacks&&J<(t?0:n)?"-":"")+this.stackKey];if(h.positiveValuesOnly&&!h.validatePositiveValue(J)||d.positiveValuesOnly&&!d.validatePositiveValue(v))x.isNull=!0;x.plotX=B=b(r(d.translate(v,0,0,0,1,m,"flags"===this.type),-1E5,1E5));if(c&&this.visible&&y&&y[v]){var z=this.getStackIndicator(z,
    v,this.index);x.isNull||(u=y[v],D=u.points[z.key])}S(D)&&(A=D[0],J=D[1],A===t&&z.key===y[v].base&&(A=K(O(n)&&n,h.min)),h.positiveValuesOnly&&0>=A&&(A=null),x.total=x.stackTotal=u.total,x.percentage=u.total&&x.y/u.total*100,x.stackY=J,this.irregularWidths||u.setOffset(this.pointXOffset||0,this.barW||0));x.yBottom=g(A)?r(h.translate(A,0,1,0,1),-1E5,1E5):null;this.dataModify&&(J=this.dataModify.modifyValue(J,w));x.plotY=void 0;O(J)&&(u=h.translate(J,!1,!0,!1,!0),"undefined"!==typeof u&&(x.plotY=r(u,
    -1E5,1E5)));x.isInside=this.isPointInside(x);x.clientX=p?b(d.translate(v,0,0,0,1,m)):B;x.negative=x[q]<(a[q+"Threshold"]||n||0);x.category=e&&"undefined"!==typeof e[x.x]?e[x.x]:x.x;if(!x.isNull&&!1!==x.visible){"undefined"!==typeof F&&(C=Math.min(C,Math.abs(B-F)));var F=B}x.zone=this.zones.length?x.getZone():void 0;!x.graphic&&this.group&&f&&(x.isNew=!0)}this.closestPointRangePx=C;I(this,"afterTranslate")};a.prototype.getValidPoints=function(a,b,c){var d=this.chart;return(a||this.points||[]).filter(function(a){return b&&
!d.isInsidePlot(a.plotX,a.plotY,{inverted:d.inverted})?!1:!1!==a.visible&&(c||!a.isNull)})};a.prototype.getClipBox=function(){var a=this.chart,b=this.xAxis,c=this.yAxis,d=Y(a.clipBox);b&&b.len!==a.plotSizeX&&(d.width=b.len);c&&c.len!==a.plotSizeY&&(d.height=c.len);return d};a.prototype.getSharedClipKey=function(){return this.sharedClipKey=(this.options.xAxis||0)+","+(this.options.yAxis||0)};a.prototype.setClip=function(){var a=this.chart,b=this.group,c=this.markerGroup,d=a.sharedClips;a=a.renderer;
    var e=this.getClipBox(),g=this.getSharedClipKey(),f=d[g];f?f.animate(e):d[g]=f=a.clipRect(e);b&&b.clip(!1===this.options.clip?void 0:f);c&&c.clip()};a.prototype.animate=function(a){var b=this.chart,c=this.group,d=this.markerGroup,e=b.inverted,g=k(this.options.animation),f=[this.getSharedClipKey(),g.duration,g.easing,g.defer].join(),h=b.sharedClips[f],l=b.sharedClips[f+"m"];if(a&&c)g=this.getClipBox(),h?h.attr("height",g.height):(g.width=0,e&&(g.x=b.plotHeight),h=b.renderer.clipRect(g),b.sharedClips[f]=
    h,l=b.renderer.clipRect({x:e?(b.plotSizeX||0)+99:-99,y:e?-b.plotLeft:-b.plotTop,width:99,height:e?b.chartWidth:b.chartHeight}),b.sharedClips[f+"m"]=l),c.clip(h),d&&d.clip(l);else if(h&&!h.hasClass("highcharts-animating")){b=this.getClipBox();var m=g.step;d&&d.element.childNodes.length&&(g.step=function(a,b){m&&m.apply(b,arguments);l&&l.element&&l.attr(b.prop,"width"===b.prop?a+99:a)});h.addClass("highcharts-animating").animate(b,g)}};a.prototype.afterAnimate=function(){var a=this;this.setClip();L(this.chart.sharedClips,
    function(b,c,d){b&&!a.chart.container.querySelector('[clip-path="url(#'+b.id+')"]')&&(b.destroy(),delete d[c])});this.finishedAnimating=!0;I(this,"afterAnimate")};a.prototype.drawPoints=function(){var a=this.points,b=this.chart,c=this.options.marker,d=this[this.specialGroup]||this.markerGroup,e=this.xAxis,g=K(c.enabled,!e||e.isRadial?!0:null,this.closestPointRangePx>=c.enabledThreshold*c.radius),f,h;if(!1!==c.enabled||this._hasPointMarkers)for(f=0;f<a.length;f++){var l=a[f];var k=(h=l.graphic)?"animate":
    "attr";var m=l.marker||{};var p=!!l.marker;if((g&&"undefined"===typeof m.enabled||m.enabled)&&!l.isNull&&!1!==l.visible){var n=K(m.symbol,this.symbol,"rect");var r=this.markerAttribs(l,l.selected&&"select");this.enabledDataSorting&&(l.startXPos=e.reversed?-(r.width||0):e.width);var t=!1!==l.isInside;h?h[t?"show":"hide"](t).animate(r):t&&(0<(r.width||0)||l.hasImage)&&(l.graphic=h=b.renderer.symbol(n,r.x,r.y,r.width,r.height,p?m:c).add(d),this.enabledDataSorting&&b.hasRendered&&(h.attr({x:l.startXPos}),
    k="animate"));h&&"animate"===k&&h[t?"show":"hide"](t).animate(r);if(h&&!b.styledMode)h[k](this.pointAttribs(l,l.selected&&"select"));h&&h.addClass(l.getClassName(),!0)}else h&&(l.graphic=h.destroy())}};a.prototype.markerAttribs=function(a,b){var c=this.options,d=c.marker,e=a.marker||{},g=e.symbol||d.symbol,f=K(e.radius,d.radius);b&&(d=d.states[b],b=e.states&&e.states[b],f=K(b&&b.radius,d&&d.radius,f+(d&&d.radiusPlus||0)));a.hasImage=g&&0===g.indexOf("url");a.hasImage&&(f=0);a={x:c.crisp?Math.floor(a.plotX-
        f):a.plotX-f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a};a.prototype.pointAttribs=function(a,b){var c=this.options.marker,d=a&&a.options,e=d&&d.marker||{},g=d&&d.color,f=a&&a.color,h=a&&a.zone&&a.zone.color,l=this.color;a=K(e.lineWidth,c.lineWidth);d=1;l=g||h||f||l;g=e.fillColor||c.fillColor||l;f=e.lineColor||c.lineColor||l;b=b||"normal";c=c.states[b]||{};b=e.states&&e.states[b]||{};a=K(b.lineWidth,c.lineWidth,a+K(b.lineWidthPlus,c.lineWidthPlus,0));g=b.fillColor||c.fillColor||g;f=b.lineColor||
    c.lineColor||f;d=K(b.opacity,c.opacity,d);return{stroke:f,"stroke-width":a,fill:g,opacity:d}};a.prototype.destroy=function(a){var b=this,c=b.chart,e=/AppleWebKit\/533/.test(p.navigator.userAgent),g=b.data||[],f,h,l,k;I(b,"destroy");this.removeEvents(a);(b.axisTypes||[]).forEach(function(a){(k=b[a])&&k.series&&(d(k.series,b),k.isDirty=k.forceRedraw=!0)});b.legendItem&&b.chart.legend.destroyItem(b);for(h=g.length;h--;)(l=g[h])&&l.destroy&&l.destroy();b.clips&&b.clips.forEach(function(a){return a.destroy()});
    n.clearTimeout(b.animationTimeout);L(b,function(a,b){a instanceof q&&!a.survive&&(f=e&&"group"===b?"hide":"destroy",a[f]())});c.hoverSeries===b&&(c.hoverSeries=void 0);d(c.series,b);c.orderSeries();L(b,function(c,d){a&&"hcEvents"===d||delete b[d]})};a.prototype.applyZones=function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e=this.clips||[],g=this.graph,f=this.area,h=Math.max(b.chartWidth,b.chartHeight),l=this[(this.zoneAxis||"y")+"Axis"],k=b.inverted,m,p,n,t,q,x,w,B,C=!1;if(d.length&&(g||
    f)&&l&&"undefined"!==typeof l.min){var v=l.reversed;var u=l.horiz;g&&!this.showLine&&g.hide();f&&f.hide();var D=l.getExtremes();d.forEach(function(d,E){m=v?u?b.plotWidth:0:u?0:l.toPixels(D.min)||0;m=r(K(p,m),0,h);p=r(Math.round(l.toPixels(K(d.value,D.max),!0)||0),0,h);C&&(m=p=l.toPixels(D.max));t=Math.abs(m-p);q=Math.min(m,p);x=Math.max(m,p);l.isXAxis?(n={x:k?x:q,y:0,width:t,height:h},u||(n.x=b.plotHeight-n.x)):(n={x:0,y:k?x:q,width:h,height:t},u&&(n.y=b.plotWidth-n.y));k&&c.isVML&&(n=l.isXAxis?{x:0,
    y:v?q:x,height:n.width,width:b.chartWidth}:{x:n.y-b.plotLeft-b.spacingBox.x,y:0,width:n.height,height:b.chartHeight});e[E]?e[E].animate(n):e[E]=c.clipRect(n);w=a["zone-area-"+E];B=a["zone-graph-"+E];g&&B&&B.clip(e[E]);f&&w&&w.clip(e[E]);C=d.value>D.max;a.resetZones&&0===p&&(p=void 0)});this.clips=e}else a.visible&&(g&&g.show(!0),f&&f.show(!0))};a.prototype.invertGroups=function(a){function b(){["group","markerGroup"].forEach(function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),
    c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(c.isRadialSeries?!1:a))})}var c=this,d=c.chart;c.xAxis&&(c.eventsToUnbind.push(t(d,"resize",b)),b(),c.invertGroups=b)};a.prototype.plotGroup=function(a,b,c,d,e){var f=this[a],h=!f;c={visibility:c,zIndex:d||.1};"undefined"===typeof this.opacity||this.chart.styledMode||"inactive"===this.state||(c.opacity=this.opacity);h&&(this[a]=f=this.chart.renderer.g().add(e));f.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+
    "-series "+(g(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(f.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);f.attr(c)[h?"attr":"animate"](this.getPlotBox());return f};a.prototype.getPlotBox=function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}};a.prototype.removeEvents=function(a){a||M(this);this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(a){a()}),
    this.eventsToUnbind.length=0)};a.prototype.render=function(){var a=this,b=a.chart,c=a.options,d=k(c.animation),e=a.visible?"inherit":"hidden",g=c.zIndex,f=a.hasRendered,h=b.seriesGroup,l=b.inverted;b=!a.finishedAnimating&&b.renderer.isSVG?d.duration:0;I(this,"render");var m=a.plotGroup("group","series",e,g,h);a.markerGroup=a.plotGroup("markerGroup","markers",e,g,h);!1!==c.clip&&a.setClip();a.animate&&b&&a.animate(!0);m.inverted=K(a.invertible,a.isCartesian)?l:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());
    a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(l);a.animate&&b&&a.animate();f||(b&&d.defer&&(b+=d.defer),a.animationTimeout=Q(function(){a.afterAnimate()},b||0));a.isDirty=!1;a.hasRendered=!0;I(a,"afterRender")};a.prototype.redraw=function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,
    height:a.plotHeight}),c.animate({translateX:K(d&&d.left,a.plotLeft),translateY:K(e&&e.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree};a.prototype.searchPoint=function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b,a)};a.prototype.buildKDTree=function(a){function b(a,d,e){var g=a&&a.length;if(g){var f=c.kdAxisArray[d%e];a.sort(function(a,b){return a[f]-
    b[f]});g=Math.floor(g/2);return{point:a[g],left:b(a.slice(0,g),d+1,e),right:b(a.slice(g+1),d+1,e)}}}this.buildingKdTree=!0;var c=this,d=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;Q(function(){c.kdTree=b(c.getValidPoints(null,!c.directTouch),d,d);c.buildingKdTree=!1},c.options.kdNow||a&&"touchstart"===a.type?0:1)};a.prototype.searchKDTree=function(a,b,c){function d(a,b,c,k){var m=b.point,p=e.kdAxisArray[c%k],n=m,r=g(a[f])&&g(m[f])?Math.pow(a[f]-m[f],2):null;var t=g(a[h])&&g(m[h])?
    Math.pow(a[h]-m[h],2):null;t=(r||0)+(t||0);m.dist=g(t)?Math.sqrt(t):Number.MAX_VALUE;m.distX=g(r)?Math.sqrt(r):Number.MAX_VALUE;p=a[p]-m[p];t=0>p?"left":"right";r=0>p?"right":"left";b[t]&&(t=d(a,b[t],c+1,k),n=t[l]<n[l]?t:m);b[r]&&Math.sqrt(p*p)<n[l]&&(a=d(a,b[r],c+1,k),n=a[l]<n[l]?a:n);return n}var e=this,f=this.kdAxisArray[0],h=this.kdAxisArray[1],l=b?"distX":"dist";b=-1<e.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(c);if(this.kdTree)return d(a,
    this.kdTree,b,b)};a.prototype.pointPlacementToXValue=function(){var a=this.options,b=a.pointRange,c=this.xAxis;a=a.pointPlacement;"between"===a&&(a=c.reversed?-.5:.5);return O(a)?a*(b||c.pointRange):0};a.prototype.isPointInside=function(a){var b=this.chart,c=this.xAxis,d=this.yAxis;return"undefined"!==typeof a.plotY&&"undefined"!==typeof a.plotX&&0<=a.plotY&&a.plotY<=(d?d.len:b.plotHeight)&&0<=a.plotX&&a.plotX<=(c?c.len:b.plotWidth)};a.prototype.drawTracker=function(){var a=this,b=a.options,c=b.trackByArea,
    d=[].concat(c?a.areaPath:a.graphPath),e=a.chart,g=e.pointer,h=e.renderer,l=e.options.tooltip.snap,m=a.tracker,k=function(b){if(e.hoverSeries!==a)a.onMouseOver()},p="rgba(192,192,192,"+(w?.0001:.002)+")";m?m.attr({d:d}):a.graph&&(a.tracker=h.path(d).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),e.styledMode||a.tracker.attr({"stroke-linecap":"round","stroke-linejoin":"round",stroke:p,fill:c?p:"none","stroke-width":a.graph.strokeWidth()+
        (c?0:2*l)}),[a.tracker,a.markerGroup,a.dataLabelsGroup].forEach(function(a){if(a&&(a.addClass("highcharts-tracker").on("mouseover",k).on("mouseout",function(a){g.onTrackerMouseOut(a)}),b.cursor&&!e.styledMode&&a.css({cursor:b.cursor}),f))a.on("touchstart",k)}));I(this,"afterDrawTracker")};a.prototype.addPoint=function(a,b,c,d,e){var g=this.options,f=this.data,h=this.chart,l=this.xAxis;l=l&&l.hasNames&&l.names;var m=g.data,k=this.xData,p;b=K(b,!0);var n={series:this};this.pointClass.prototype.applyOptions.apply(n,
    [a]);var r=n.x;var t=k.length;if(this.requireSorting&&r<k[t-1])for(p=!0;t&&k[t-1]>r;)t--;this.updateParallelArrays(n,"splice",t,0,0);this.updateParallelArrays(n,t);l&&n.name&&(l[r]=n.name);m.splice(t,0,a);p&&(this.data.splice(t,0,null),this.processData());"point"===g.legendType&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(n,"shift"),m.shift()));!1!==e&&I(this,"addPoint",{point:n});this.isDirtyData=this.isDirty=!0;b&&h.redraw(d)};a.prototype.removePoint=
    function(a,b,c){var d=this,g=d.data,f=g[a],h=d.points,l=d.chart,k=function(){h&&h.length===g.length&&h.splice(a,1);g.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&l.redraw()};e(c,l);b=K(b,!0);f?f.firePointEvent("remove",null,k):k()};a.prototype.remove=function(a,b,c,d){function e(){g.destroy(d);f.isDirtyLegend=f.isDirtyBox=!0;f.linkSeries();K(a,!0)&&f.redraw(b)}var g=this,f=g.chart;!1!==c?I(g,"remove",null,
    e):e()};a.prototype.update=function(a,b){a=l(a,this.userOptions);I(this,"update",{options:a});var c=this,d=c.chart,e=c.userOptions,g=c.initialType||c.type,f=d.options.plotOptions,h=B[g].prototype,k=c.finishedAnimating&&{animation:!1},p={},n,r=["eventOptions","navigatorSeries","baseSeries"],t=a.type||e.type||d.options.chart.type,q=!(this.hasDerivedData||t&&t!==this.type||"undefined"!==typeof a.pointStart||"undefined"!==typeof a.pointInterval||"undefined"!==typeof a.relativeXValue||c.hasOptionChanged("dataGrouping")||
    c.hasOptionChanged("pointStart")||c.hasOptionChanged("pointInterval")||c.hasOptionChanged("pointIntervalUnit")||c.hasOptionChanged("keys"));t=t||g;q&&(r.push("data","isDirtyData","points","processedXData","processedYData","xIncrement","cropped","_hasPointMarkers","_hasPointLabels","clips","nodes","layout","mapMap","mapData","minY","maxY","minX","maxX"),!1!==a.visible&&r.push("area","graph"),c.parallelArrays.forEach(function(a){r.push(a+"Data")}),a.data&&(a.dataSorting&&D(c.options.dataSorting,a.dataSorting),
    this.setData(a.data,!1)));a=Y(e,k,{index:"undefined"===typeof e.index?c.index:e.index,pointStart:K(f&&f.series&&f.series.pointStart,e.pointStart,c.xData[0])},!q&&{data:c.options.data},a);q&&a.data&&(a.data=c.options.data);r=["group","markerGroup","dataLabelsGroup","transformGroup"].concat(r);r.forEach(function(a){r[a]=c[a];delete c[a]});f=!1;if(B[t]){if(f=t!==c.type,c.remove(!1,!1,!1,!0),f)if(Object.setPrototypeOf)Object.setPrototypeOf(c,B[t].prototype);else{k=Object.hasOwnProperty.call(c,"hcEvents")&&
    c.hcEvents;for(n in h)c[n]=void 0;D(c,B[t].prototype);k?c.hcEvents=k:delete c.hcEvents}}else m(17,!0,d,{missingModuleFor:t});r.forEach(function(a){c[a]=r[a]});c.init(d,a);if(q&&this.points){var x=c.options;!1===x.visible?(p.graphic=1,p.dataLabel=1):c._hasPointLabels||(a=x.marker,h=x.dataLabels,!a||!1!==a.enabled&&(e.marker&&e.marker.symbol)===a.symbol||(p.graphic=1),h&&!1===h.enabled&&(p.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(p).length&&a.destroyElements(p),
!1===x.showInLegend&&a.legendItem&&d.legend.destroyItem(a))},this)}c.initialType=g;d.linkSeries();f&&c.linkedSeries.length&&(c.isDirtyData=!0);I(this,"afterUpdate");K(b,!0)&&d.redraw(q?void 0:!1)};a.prototype.setName=function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0};a.prototype.hasOptionChanged=function(a){var b=this.options[a],c=this.chart.options.plotOptions,d=this.userOptions[a];return d?b!==d:b!==K(c&&c[this.type]&&c[this.type][a],c&&c.series&&c.series[a],
    b)};a.prototype.onMouseOver=function(){var a=this.chart,b=a.hoverSeries;a.pointer.setHoverChartIndex();if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&I(this,"mouseOver");this.setState("hover");a.hoverSeries=this};a.prototype.onMouseOut=function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&I(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();b.series.forEach(function(a){a.setState("",
    !0)})};a.prototype.setState=function(a,b){var c=this,d=c.options,e=c.graph,g=d.inactiveOtherPoints,f=d.states,h=K(f[a||"normal"]&&f[a||"normal"].animation,c.chart.options.chart.animation),l=d.lineWidth,k=0,m=d.opacity;a=a||"";if(c.state!==a&&([c.group,c.markerGroup,c.dataLabelsGroup].forEach(function(b){b&&(c.state&&b.removeClass("highcharts-series-"+c.state),a&&b.addClass("highcharts-series-"+a))}),c.state=a,!c.chart.styledMode)){if(f[a]&&!1===f[a].enabled)return;a&&(l=f[a].lineWidth||l+(f[a].lineWidthPlus||
    0),m=K(f[a].opacity,m));if(e&&!e.dashstyle)for(d={"stroke-width":l},e.animate(d,h);c["zone-graph-"+k];)c["zone-graph-"+k].animate(d,h),k+=1;g||[c.group,c.markerGroup,c.dataLabelsGroup,c.labelBySeries].forEach(function(a){a&&a.animate({opacity:m},h)})}b&&g&&c.points&&c.setAllPointsToState(a||void 0)};a.prototype.setAllPointsToState=function(a){this.points.forEach(function(b){b.setState&&b.setState(a)})};a.prototype.setVisible=function(a,b){var c=this,d=c.chart,e=c.legendItem,g=d.options.chart.ignoreHiddenSeries,
    f=c.visible,h=(c.visible=a=c.options.visible=c.userOptions.visible="undefined"===typeof a?!f:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(c[a])c[a][h]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&d.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});c.linkedSeries.forEach(function(b){b.setVisible(a,!1)});g&&(d.isDirtyBox=!0);
    I(c,h);!1!==b&&d.redraw()};a.prototype.show=function(){this.setVisible(!0)};a.prototype.hide=function(){this.setVisible(!1)};a.prototype.select=function(a){this.selected=a=this.options.selected="undefined"===typeof a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);I(this,a?"select":"unselect")};a.prototype.shouldShowTooltip=function(a,b,c){void 0===c&&(c={});c.series=this;c.visiblePlotOnly=!0;return this.chart.isInsidePlot(a,b,c)};a.defaultOptions=H;return a}();D(a.prototype,{axisTypes:["xAxis",
        "yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,drawLegendSymbol:y.drawLineMarker,isCartesian:!0,kdAxisArray:["clientX","plotY"],parallelArrays:["x","y"],pointClass:G,requireSorting:!0,sorted:!0});A.series=a;"";"";return a});M(a,"Extensions/ScrollablePlotArea.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Axis/Axis.js"],a["Core/Chart/Chart.js"],a["Core/Series/Series.js"],a["Core/Renderer/RendererRegistry.js"],a["Core/Utilities.js"]],function(a,u,z,F,y,G){var v=a.stop,A=
    G.addEvent,q=G.createElement,n=G.merge,k=G.pick;A(z,"afterSetChartSize",function(a){var c=this.options.chart.scrollablePlotArea,e=c&&c.minWidth;c=c&&c.minHeight;if(!this.renderer.forExport){if(e){if(this.scrollablePixelsX=e=Math.max(0,e-this.chartWidth)){this.scrollablePlotBox=this.renderer.scrollablePlotBox=n(this.plotBox);this.plotBox.width=this.plotWidth+=e;this.inverted?this.clipBox.height+=e:this.clipBox.width+=e;var f={1:{name:"right",value:e}}}}else c&&(this.scrollablePixelsY=e=Math.max(0,
    c-this.chartHeight))&&(this.scrollablePlotBox=this.renderer.scrollablePlotBox=n(this.plotBox),this.plotBox.height=this.plotHeight+=e,this.inverted?this.clipBox.width+=e:this.clipBox.height+=e,f={2:{name:"bottom",value:e}});f&&!a.skipAxes&&this.axes.forEach(function(a){f[a.side]?a.getPlotLinePath=function(){var c=f[a.side].name,e=this[c];this[c]=e-f[a.side].value;var h=u.prototype.getPlotLinePath.apply(this,arguments);this[c]=e;return h}:(a.setAxisSize(),a.setAxisTranslation())})}});A(z,"render",function(){this.scrollablePixelsX||
this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});z.prototype.setUpScrolling=function(){var a=this,c={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(c.overflowX="auto");this.scrollablePixelsY&&(c.overflowY="auto");this.scrollingParent=q("div",{className:"highcharts-scrolling-parent"},{position:"relative"},this.renderTo);this.scrollingContainer=q("div",{className:"highcharts-scrolling"},
    c,this.scrollingParent);A(this.scrollingContainer,"scroll",function(){a.pointer&&delete a.pointer.chartPosition});this.innerContainer=q("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};z.prototype.moveFixedElements=function(){var a=this.container,c=this.fixedRenderer,h=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
    f;this.scrollablePixelsX&&!this.inverted?f=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?f=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?f=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(f=".highcharts-yaxis");f&&h.push(f+":not(.highcharts-radial-axis)",f+"-labels:not(.highcharts-radial-axis-labels)");h.forEach(function(e){[].forEach.call(a.querySelectorAll(e),function(a){(a.namespaceURI===c.SVG_NS?c.box:c.box.parentNode).appendChild(a);a.style.pointerEvents="auto"})})};
    z.prototype.applyFixed=function(){var a=!this.fixedDiv,c=this.options.chart,h=c.scrollablePlotArea,f=y.getRendererType();a?(this.fixedDiv=q("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:(c.style&&c.style.zIndex||0)+2,top:0},null,!0),this.scrollingContainer&&this.scrollingContainer.parentNode.insertBefore(this.fixedDiv,this.scrollingContainer),this.renderTo.style.overflow="visible",this.fixedRenderer=c=new f(this.fixedDiv,this.chartWidth,this.chartHeight,
        this.options.chart.style),this.scrollableMask=c.path().attr({fill:this.options.chart.backgroundColor||"#fff","fill-opacity":k(h.opacity,.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),A(this,"afterShowResetZoom",this.moveFixedElements),A(this,"afterDrilldown",this.moveFixedElements),A(this,"afterLayOutTitles",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);if(this.scrollableDirty||a)this.scrollableDirty=!1,this.moveFixedElements();c=this.chartWidth+
        (this.scrollablePixelsX||0);f=this.chartHeight+(this.scrollablePixelsY||0);v(this.container);this.container.style.width=c+"px";this.container.style.height=f+"px";this.renderer.boxWrapper.attr({width:c,height:f,viewBox:[0,0,c,f].join(" ")});this.chartBackground.attr({width:c,height:f});this.scrollingContainer.style.height=this.chartHeight+"px";a&&(h.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*h.scrollPositionX),h.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*
        h.scrollPositionY));f=this.axisOffset;a=this.plotTop-f[0]-1;h=this.plotLeft-f[3]-1;c=this.plotTop+this.plotHeight+f[2]+1;f=this.plotLeft+this.plotWidth+f[1]+1;var n=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),p=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);a=this.scrollablePixelsX?[["M",0,a],["L",this.plotLeft-1,a],["L",this.plotLeft-1,c],["L",0,c],["Z"],["M",n,a],["L",this.chartWidth,a],["L",this.chartWidth,c],["L",n,c],["Z"]]:this.scrollablePixelsY?[["M",h,0],["L",h,this.plotTop-
    1],["L",f,this.plotTop-1],["L",f,0],["Z"],["M",h,p],["L",h,this.chartHeight],["L",f,this.chartHeight],["L",f,p],["Z"]]:[["M",0,0]];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:a})};A(u,"afterInit",function(){this.chart.scrollableDirty=!0});A(F,"show",function(){this.chart.scrollableDirty=!0});""});M(a,"Core/Axis/StackingAxis.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Axis/Axis.js"],a["Core/Utilities.js"]],function(a,u,z){var v=a.getDeferredAnimation,y=z.addEvent,G=
    z.destroyObjectProperties,H=z.fireEvent,A=z.isNumber,q=z.objectEach,n;(function(a){function e(){var a=this.stacking;if(a){var c=a.stacks;q(c,function(a,e){G(a);c[e]=null});a&&a.stackTotalGroup&&a.stackTotalGroup.destroy()}}function c(){this.stacking||(this.stacking=new f(this))}var h=[];a.compose=function(a){-1===h.indexOf(a)&&(h.push(a),y(a,"init",c),y(a,"destroy",e));return a};var f=function(){function a(a){this.oldStacks={};this.stacks={};this.stacksTouched=0;this.axis=a}a.prototype.buildStacks=
    function(){var a=this.axis,c=a.series,e=a.options.reversedStacks,f=c.length,h;if(!a.isXAxis){this.usePercentage=!1;for(h=f;h--;){var k=c[e?h:f-h-1];k.setStackedPoints();k.setGroupedPoints()}for(h=0;h<f;h++)c[h].modifyStacks();H(a,"afterBuildStacks")}};a.prototype.cleanStacks=function(){if(!this.axis.isXAxis){if(this.oldStacks)var a=this.stacks=this.oldStacks;q(a,function(a){q(a,function(a){a.cumulative=a.total})})}};a.prototype.resetStacks=function(){var a=this,c=a.stacks;a.axis.isXAxis||q(c,function(c){q(c,
    function(e,f){A(e.touched)&&e.touched<a.stacksTouched?(e.destroy(),delete c[f]):(e.total=null,e.cumulative=null)})})};a.prototype.renderStackTotals=function(){var a=this.axis,c=a.chart,e=c.renderer,f=this.stacks;a=v(c,a.options.stackLabels&&a.options.stackLabels.animation||!1);var h=this.stackTotalGroup=this.stackTotalGroup||e.g("stack-labels").attr({visibility:"visible",zIndex:6,opacity:0}).add();h.translate(c.plotLeft,c.plotTop);q(f,function(a){q(a,function(a){a.render(h)})});h.animate({opacity:1},
    a)};return a}();a.Additions=f})(n||(n={}));return n});M(a,"Extensions/Stacking.js",[a["Core/Axis/Axis.js"],a["Core/Chart/Chart.js"],a["Core/FormatUtilities.js"],a["Core/Globals.js"],a["Core/Series/Series.js"],a["Core/Axis/StackingAxis.js"],a["Core/Utilities.js"]],function(a,u,z,F,y,G,H){var v=z.format,q=H.correctFloat,n=H.defined,k=H.destroyObjectProperties,e=H.isArray,c=H.isNumber,h=H.objectEach,f=H.pick,w=function(){function a(a,c,e,f,h){var l=a.chart.inverted;this.axis=a;this.isNegative=e;this.options=
    c=c||{};this.x=f;this.total=null;this.points={};this.hasValidPoints=!1;this.stack=h;this.rightCliff=this.leftCliff=0;this.alignOptions={align:c.align||(l?e?"left":"right":"center"),verticalAlign:c.verticalAlign||(l?"middle":e?"bottom":"top"),y:c.y,x:c.x};this.textAlign=c.textAlign||(l?e?"right":"left":"center")}a.prototype.destroy=function(){k(this,this.axis)};a.prototype.render=function(a){var c=this.axis.chart,e=this.options,h=e.format;h=h?v(h,this,c):e.formatter.call(this);this.label?this.label.attr({text:h,
    visibility:"hidden"}):(this.label=c.renderer.label(h,null,null,e.shape,null,null,e.useHTML,!1,"stack-labels"),h={r:e.borderRadius||0,text:h,rotation:e.rotation,padding:f(e.padding,5),visibility:"hidden"},c.styledMode||(h.fill=e.backgroundColor,h.stroke=e.borderColor,h["stroke-width"]=e.borderWidth,this.label.css(e.style)),this.label.attr(h),this.label.added||this.label.add(a));this.label.labelrank=c.plotSizeY};a.prototype.setOffset=function(a,e,h,k,p){var l=this.axis,b=l.chart;k=l.translate(l.stacking.usePercentage?
    100:k?k:this.total,0,0,0,1);h=l.translate(h?h:0);h=n(k)&&Math.abs(k-h);a=f(p,b.xAxis[0].translate(this.x))+a;l=n(k)&&this.getStackBox(b,this,a,k,e,h,l);e=this.label;h=this.isNegative;a="justify"===f(this.options.overflow,"justify");var g=this.textAlign;e&&l&&(p=e.getBBox(),k=e.padding,g="left"===g?b.inverted?-k:k:"right"===g?p.width:b.inverted&&"center"===g?p.width/2:b.inverted?h?p.width+k:-k:p.width/2,h=b.inverted?p.height/2:h?-k:p.height,this.alignOptions.x=f(this.options.x,0),this.alignOptions.y=
    f(this.options.y,0),l.x-=g,l.y-=h,e.align(this.alignOptions,null,l),b.isInsidePlot(e.alignAttr.x+g-this.alignOptions.x,e.alignAttr.y+h-this.alignOptions.y)?e.show():(e.alignAttr.y=-9999,a=!1),a&&y.prototype.justifyDataLabel.call(this.axis,e,this.alignOptions,e.alignAttr,p,l),e.attr({x:e.alignAttr.x,y:e.alignAttr.y}),f(!a&&this.options.crop,!0)&&((b=c(e.x)&&c(e.y)&&b.isInsidePlot(e.x-k+e.width,e.y)&&b.isInsidePlot(e.x+k,e.y))||e.hide()))};a.prototype.getStackBox=function(a,c,e,f,h,l,b){var g=c.axis.reversed,
    d=a.inverted,k=b.height+b.pos-(d?a.plotLeft:a.plotTop);c=c.isNegative&&!g||!c.isNegative&&g;return{x:d?c?f-b.right:f-l+b.pos-a.plotLeft:e+a.xAxis[0].transB-a.plotLeft,y:d?b.height-e-h:c?k-f-l:k-f,width:d?l:h,height:d?h:l}};return a}();u.prototype.getStacks=function(){var a=this,c=a.inverted;a.yAxis.forEach(function(a){a.stacking&&a.stacking.stacks&&a.hasVisibleSeries&&(a.stacking.oldStacks=a.stacking.stacks)});a.series.forEach(function(e){var h=e.xAxis&&e.xAxis.options||{};!e.options.stacking||!0!==
e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=[e.type,f(e.options.stack,""),c?h.top:h.left,c?h.height:h.width].join())})};G.compose(a);y.prototype.setGroupedPoints=function(){var a=this.yAxis.stacking;this.options.centerInCategory&&(this.is("column")||this.is("columnrange"))&&!this.options.stacking&&1<this.chart.series.length?y.prototype.setStackedPoints.call(this,"group"):a&&h(a.stacks,function(c,e){"group"===e.slice(-5)&&(h(c,function(a){return a.destroy()}),delete a.stacks[e])})};
    y.prototype.setStackedPoints=function(a){var c=a||this.options.stacking;if(c&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var h=this.processedXData,k=this.processedYData,p=[],r=k.length,l=this.options,b=l.threshold,g=f(l.startFromThreshold&&b,0);l=l.stack;a=a?this.type+","+c:this.stackKey;var d="-"+a,m=this.negStacks,v=this.yAxis,x=v.stacking.stacks,u=v.stacking.oldStacks,A,y;v.stacking.stacksTouched+=1;for(y=0;y<r;y++){var z=h[y];var F=k[y];var H=this.getStackIndicator(H,
        z,this.index);var G=H.key;var K=(A=m&&F<(g?0:b))?d:a;x[K]||(x[K]={});x[K][z]||(u[K]&&u[K][z]?(x[K][z]=u[K][z],x[K][z].total=null):x[K][z]=new w(v,v.options.stackLabels,A,z,l));K=x[K][z];null!==F?(K.points[G]=K.points[this.index]=[f(K.cumulative,g)],n(K.cumulative)||(K.base=G),K.touched=v.stacking.stacksTouched,0<H.index&&!1===this.singleStacks&&(K.points[G][0]=K.points[this.index+","+z+",0"][0])):K.points[G]=K.points[this.index]=null;"percent"===c?(A=A?a:d,m&&x[A]&&x[A][z]?(A=x[A][z],K.total=A.total=
        Math.max(A.total,K.total)+Math.abs(F)||0):K.total=q(K.total+(Math.abs(F)||0))):"group"===c?(e(F)&&(F=F[0]),null!==F&&(K.total=(K.total||0)+1)):K.total=q(K.total+(F||0));K.cumulative="group"===c?(K.total||1)-1:f(K.cumulative,g)+(F||0);null!==F&&(K.points[G].push(K.cumulative),p[y]=K.cumulative,K.hasValidPoints=!0)}"percent"===c&&(v.stacking.usePercentage=!0);"group"!==c&&(this.stackedYData=p);v.stacking.oldStacks={}}};y.prototype.modifyStacks=function(){var a=this,c=a.stackKey,e=a.yAxis.stacking.stacks,
        f=a.processedXData,h,k=a.options.stacking;a[k+"Stacker"]&&[c,"-"+c].forEach(function(c){for(var b=f.length,g,d;b--;)if(g=f[b],h=a.getStackIndicator(h,g,a.index,c),d=(g=e[c]&&e[c][g])&&g.points[h.key])a[k+"Stacker"](d,g,b)})};y.prototype.percentStacker=function(a,c,e){c=c.total?100/c.total:0;a[0]=q(a[0]*c);a[1]=q(a[1]*c);this.stackedYData[e]=a[1]};y.prototype.getStackIndicator=function(a,c,e,f){!n(a)||a.x!==c||f&&a.key!==f?a={x:c,index:0,key:f}:a.index++;a.key=[e,c,a.index].join();return a};F.StackItem=
        w;"";return F.StackItem});M(a,"Series/Line/LineSeries.js",[a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,u,z){var v=this&&this.__extends||function(){var a=function(v,q){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,k){a.__proto__=k}||function(a,k){for(var e in k)k.hasOwnProperty(e)&&(a[e]=k[e])};return a(v,q)};return function(v,q){function n(){this.constructor=v}a(v,q);v.prototype=null===q?Object.create(q):(n.prototype=q.prototype,
    new n)}}(),y=z.defined,G=z.merge;z=function(u){function A(){var a=null!==u&&u.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}v(A,u);A.prototype.drawGraph=function(){var a=this,n=this.options,k=(this.gappedPath||this.getGraphPath).call(this),e=this.chart.styledMode,c=[["graph","highcharts-graph"]];e||c[0].push(n.lineColor||this.color||"#cccccc",n.dashStyle);c=a.getZonesGraphs(c);c.forEach(function(c,f){var h=c[0],p=a[h],q=p?"animate":"attr";p?(p.endX=a.preventGraphAnimation?
    null:k.xMap,p.animate({d:k})):k.length&&(a[h]=p=a.chart.renderer.path(k).addClass(c[1]).attr({zIndex:1}).add(a.group));p&&!e&&(h={stroke:c[2],"stroke-width":n.lineWidth,fill:a.fillGraph&&a.color||"none"},c[3]?h.dashstyle=c[3]:"square"!==n.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),p[q](h).shadow(2>f&&n.shadow));p&&(p.startX=k.xMap,p.isArea=k.isArea)})};A.prototype.getGraphPath=function(a,n,k){var e=this,c=e.options,h=[],f=[],q,p=c.step;a=a||e.points;var v=a.reversed;v&&a.reverse();
    (p={right:1,center:2}[p]||p&&3)&&v&&(p=4-p);a=this.getValidPoints(a,!1,!(c.connectNulls&&!n&&!k));a.forEach(function(t,v){var w=t.plotX,r=t.plotY,l=a[v-1];(t.leftCliff||l&&l.rightCliff)&&!k&&(q=!0);t.isNull&&!y(n)&&0<v?q=!c.connectNulls:t.isNull&&!n?q=!0:(0===v||q?v=[["M",t.plotX,t.plotY]]:e.getPointSpline?v=[e.getPointSpline(a,t,v)]:p?(v=1===p?[["L",l.plotX,r]]:2===p?[["L",(l.plotX+w)/2,l.plotY],["L",(l.plotX+w)/2,r]]:[["L",w,l.plotY]],v.push(["L",w,r])):v=[["L",w,r]],f.push(t.x),p&&(f.push(t.x),
    2===p&&f.push(t.x)),h.push.apply(h,v),q=!1)});h.xMap=f;return e.graphPath=h};A.prototype.getZonesGraphs=function(a){this.zones.forEach(function(n,k){k=["zone-graph-"+k,"highcharts-graph highcharts-zone-graph-"+k+" "+(n.className||"")];this.chart.styledMode||k.push(n.color||this.color,n.dashStyle||this.options.dashStyle);a.push(k)},this);return a};A.defaultOptions=G(a.defaultOptions,{});return A}(a);u.registerSeriesType("line",z);"";return z});M(a,"Series/Area/AreaSeries.js",[a["Core/Color/Color.js"],
    a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,u,z,F){var v=this&&this.__extends||function(){var a=function(e,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])};return a(e,c)};return function(e,c){function h(){this.constructor=e}a(e,c);e.prototype=null===c?Object.create(c):(h.prototype=c.prototype,new h)}}(),G=a.parse,H=z.seriesTypes.line;a=
    F.extend;var A=F.merge,q=F.objectEach,n=F.pick;F=function(a){function e(){var c=null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;return c}v(e,a);e.prototype.drawGraph=function(){this.areaPath=[];a.prototype.drawGraph.apply(this);var c=this,e=this.areaPath,f=this.options,k=[["area","highcharts-area",this.color,f.fillColor]];this.zones.forEach(function(a,e){k.push(["zone-area-"+e,"highcharts-area highcharts-zone-area-"+e+" "+a.className,a.color||c.color,a.fillColor||
f.fillColor])});k.forEach(function(a){var h=a[0],k=c[h],p=k?"animate":"attr",q={};k?(k.endX=c.preventGraphAnimation?null:e.xMap,k.animate({d:e})):(q.zIndex=0,k=c[h]=c.chart.renderer.path(e).addClass(a[1]).add(c.group),k.isArea=!0);c.chart.styledMode||(q.fill=n(a[3],G(a[2]).setOpacity(n(f.fillOpacity,.75)).get()));k[p](q);k.startX=e.xMap;k.shiftUnit=f.step?2:1})};e.prototype.getGraphPath=function(a){var c=H.prototype.getGraphPath,e=this.options,k=e.stacking,p=this.yAxis,q,t=[],v=[],u=this.index,r=
    p.stacking.stacks[this.stackKey],l=e.threshold,b=Math.round(p.getThreshold(e.threshold));e=n(e.connectNulls,"percent"===k);var g=function(c,d,e){var g=a[c];c=k&&r[g.x].points[u];var f=g[e+"Null"]||0;e=g[e+"Cliff"]||0;g=!0;if(e||f){var h=(f?c[0]:c[1])+e;var n=c[0]+e;g=!!f}else!k&&a[d]&&a[d].isNull&&(h=n=l);"undefined"!==typeof h&&(v.push({plotX:m,plotY:null===h?b:p.getThreshold(h),isNull:g,isCliff:!0}),t.push({plotX:m,plotY:null===n?b:p.getThreshold(n),doCurve:!1}))};a=a||this.points;k&&(a=this.getStackPoints(a));
    for(q=0;q<a.length;q++){k||(a[q].leftCliff=a[q].rightCliff=a[q].leftNull=a[q].rightNull=void 0);var d=a[q].isNull;var m=n(a[q].rectPlotX,a[q].plotX);var D=k?n(a[q].yBottom,b):b;if(!d||e)e||g(q,q-1,"left"),d&&!k&&e||(v.push(a[q]),t.push({x:q,plotX:m,plotY:D})),e||g(q,q+1,"right")}q=c.call(this,v,!0,!0);t.reversed=!0;d=c.call(this,t,!0,!0);(D=d[0])&&"M"===D[0]&&(d[0]=["L",D[1],D[2]]);d=q.concat(d);d.length&&d.push(["Z"]);c=c.call(this,v,!1,e);d.xMap=q.xMap;this.areaPath=d;return c};e.prototype.getStackPoints=
    function(a){var c=this,e=[],k=[],p=this.xAxis,v=this.yAxis,t=v.stacking.stacks[this.stackKey],u={},C=v.series,r=C.length,l=v.options.reversedStacks?1:-1,b=C.indexOf(c);a=a||this.points;if(this.options.stacking){for(var g=0;g<a.length;g++)a[g].leftNull=a[g].rightNull=void 0,u[a[g].x]=a[g];q(t,function(a,b){null!==a.total&&k.push(b)});k.sort(function(a,b){return a-b});var d=C.map(function(a){return a.visible});k.forEach(function(a,g){var f=0,h,m;if(u[a]&&!u[a].isNull)e.push(u[a]),[-1,1].forEach(function(e){var f=
        1===e?"rightNull":"leftNull",n=0,p=t[k[g+e]];if(p)for(var q=b;0<=q&&q<r;){var v=C[q].index;h=p.points[v];h||(v===c.index?u[a][f]=!0:d[q]&&(m=t[a].points[v])&&(n-=m[1]-m[0]));q+=l}u[a][1===e?"rightCliff":"leftCliff"]=n});else{for(var q=b;0<=q&&q<r;){if(h=t[a].points[C[q].index]){f=h[1];break}q+=l}f=n(f,0);f=v.translate(f,0,1,0,1);e.push({isNull:!0,plotX:p.translate(a,0,0,0,1),x:a,plotY:f,yBottom:f})}})}return e};e.defaultOptions=A(H.defaultOptions,{threshold:0});return e}(H);a(F.prototype,{singleStacks:!1,
    drawLegendSymbol:u.drawRectangle});z.registerSeriesType("area",F);"";return F});M(a,"Series/Spline/SplineSeries.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,u){var v=this&&this.__extends||function(){var a=function(v,q){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,k){a.__proto__=k}||function(a,k){for(var e in k)k.hasOwnProperty(e)&&(a[e]=k[e])};return a(v,q)};return function(v,q){function n(){this.constructor=v}a(v,q);v.prototype=null===q?Object.create(q):
    (n.prototype=q.prototype,new n)}}(),F=a.seriesTypes.line,y=u.merge,G=u.pick;u=function(a){function u(){var q=null!==a&&a.apply(this,arguments)||this;q.data=void 0;q.options=void 0;q.points=void 0;return q}v(u,a);u.prototype.getPointSpline=function(a,n,k){var e=n.plotX||0,c=n.plotY||0,h=a[k-1];k=a[k+1];if(h&&!h.isNull&&!1!==h.doCurve&&!n.isCliff&&k&&!k.isNull&&!1!==k.doCurve&&!n.isCliff){a=h.plotY||0;var f=k.plotX||0;k=k.plotY||0;var q=0;var p=(1.5*e+(h.plotX||0))/2.5;var v=(1.5*c+a)/2.5;f=(1.5*e+
    f)/2.5;var t=(1.5*c+k)/2.5;f!==p&&(q=(t-v)*(f-e)/(f-p)+c-t);v+=q;t+=q;v>a&&v>c?(v=Math.max(a,c),t=2*c-v):v<a&&v<c&&(v=Math.min(a,c),t=2*c-v);t>k&&t>c?(t=Math.max(k,c),v=2*c-t):t<k&&t<c&&(t=Math.min(k,c),v=2*c-t);n.rightContX=f;n.rightContY=t}n=["C",G(h.rightContX,h.plotX,0),G(h.rightContY,h.plotY,0),G(p,e,0),G(v,c,0),e,c];h.rightContX=h.rightContY=void 0;return n};u.defaultOptions=y(F.defaultOptions);return u}(F);a.registerSeriesType("spline",u);"";return u});M(a,"Series/AreaSpline/AreaSplineSeries.js",
    [a["Series/Area/AreaSeries.js"],a["Series/Spline/SplineSeries.js"],a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,u,z,F,y){var v=this&&this.__extends||function(){var a=function(k,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var c in e)e.hasOwnProperty(c)&&(a[c]=e[c])};return a(k,e)};return function(k,e){function c(){this.constructor=k}a(k,e);k.prototype=null===e?Object.create(e):
        (c.prototype=e.prototype,new c)}}(),H=a.prototype,A=y.extend,q=y.merge;y=function(n){function k(){var a=null!==n&&n.apply(this,arguments)||this;a.data=void 0;a.points=void 0;a.options=void 0;return a}v(k,n);k.defaultOptions=q(u.defaultOptions,a.defaultOptions);return k}(u);A(y.prototype,{getGraphPath:H.getGraphPath,getStackPoints:H.getStackPoints,drawGraph:H.drawGraph,drawLegendSymbol:z.drawRectangle});F.registerSeriesType("areaspline",y);"";return y});M(a,"Series/Column/ColumnSeries.js",[a["Core/Animation/AnimationUtilities.js"],
    a["Core/Color/Color.js"],a["Core/Globals.js"],a["Core/Legend/LegendSymbol.js"],a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,u,z,F,y,G,H){var v=this&&this.__extends||function(){var a=function(c,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(c,b)};return function(c,b){function e(){this.constructor=c}a(c,b);c.prototype=null===b?Object.create(b):
    (e.prototype=b.prototype,new e)}}(),q=a.animObject,n=u.parse,k=z.hasTouch;a=z.noop;var e=H.clamp,c=H.css,h=H.defined,f=H.extend,w=H.fireEvent,p=H.isArray,B=H.isNumber,t=H.merge,J=H.pick,C=H.objectEach;H=function(a){function l(){var b=null!==a&&a.apply(this,arguments)||this;b.borderWidth=void 0;b.data=void 0;b.group=void 0;b.options=void 0;b.points=void 0;return b}v(l,a);l.prototype.animate=function(a){var b=this,c=this.yAxis,h=b.options,l=this.chart.inverted,k={},n=l?"translateX":"translateY";if(a)k.scaleY=
    .001,a=e(c.toPixels(h.threshold),c.pos,c.pos+c.len),l?k.translateX=a-c.len:k.translateY=a,b.clipBox&&b.setClip(),b.group.attr(k);else{var p=Number(b.group.attr(n));b.group.animate({scaleY:1},f(q(b.options.animation),{step:function(a,d){b.group&&(k[n]=p+d.pos*(c.pos-p),b.group.attr(k))}}))}};l.prototype.init=function(b,c){a.prototype.init.apply(this,arguments);var d=this;b=d.chart;b.hasRendered&&b.series.forEach(function(a){a.type===d.type&&(a.isDirty=!0)})};l.prototype.getColumnMetrics=function(){var a=
    this,c=a.options,d=a.xAxis,e=a.yAxis,f=d.options.reversedStacks;f=d.reversed&&!f||!d.reversed&&f;var h={},l,k=0;!1===c.grouping?k=1:a.chart.series.forEach(function(b){var c=b.yAxis,d=b.options;if(b.type===a.type&&(b.visible||!a.chart.options.chart.ignoreHiddenSeries)&&e.len===c.len&&e.pos===c.pos){if(d.stacking&&"group"!==d.stacking){l=b.stackKey;"undefined"===typeof h[l]&&(h[l]=k++);var g=h[l]}else!1!==d.grouping&&(g=k++);b.columnIndex=g}});var n=Math.min(Math.abs(d.transA)*(d.ordinal&&d.ordinal.slope||
    c.pointRange||d.closestPointRange||d.tickInterval||1),d.len),p=n*c.groupPadding,r=(n-2*p)/(k||1);c=Math.min(c.maxPointWidth||d.len,J(c.pointWidth,r*(1-2*c.pointPadding)));a.columnMetrics={width:c,offset:(r-c)/2+(p+((a.columnIndex||0)+(f?1:0))*r-n/2)*(f?-1:1),paddedWidth:r,columnCount:k};return a.columnMetrics};l.prototype.crispCol=function(a,c,d,e){var b=this.chart,g=this.borderWidth,f=-(g%2?.5:0);g=g%2?.5:1;b.inverted&&b.renderer.isVML&&(g+=1);this.options.crisp&&(d=Math.round(a+d)+f,a=Math.round(a)+
    f,d-=a);e=Math.round(c+e)+g;f=.5>=Math.abs(c)&&.5<e;c=Math.round(c)+g;e-=c;f&&e&&(--c,e+=1);return{x:a,y:c,width:d,height:e}};l.prototype.adjustForMissingColumns=function(a,c,d,e){var b=this,g=this.options.stacking;if(!d.isNull&&1<e.columnCount){var f=0,h=0;C(this.yAxis.stacking&&this.yAxis.stacking.stacks,function(a){if("number"===typeof d.x&&(a=a[d.x.toString()])){var c=a.points[b.index],e=a.total;g?(c&&(f=h),a.hasValidPoints&&h++):p(c)&&(f=c[1],h=e||0)}});a=(d.plotX||0)+((h-1)*e.paddedWidth+c)/
    2-c-f*e.paddedWidth}return a};l.prototype.translate=function(){var a=this,c=a.chart,d=a.options,f=a.dense=2>a.closestPointRange*a.xAxis.transA;f=a.borderWidth=J(d.borderWidth,f?0:1);var l=a.xAxis,k=a.yAxis,n=d.threshold,p=a.translatedThreshold=k.getThreshold(n),r=J(d.minPointLength,5),q=a.getColumnMetrics(),t=q.width,v=a.pointXOffset=q.offset,u=a.dataMin,w=a.dataMax,C=a.barW=Math.max(t,1+2*f);c.inverted&&(p-=.5);d.pointPadding&&(C=Math.ceil(C));y.prototype.translate.apply(a);a.points.forEach(function(b){var g=
    J(b.yBottom,p),f=999+Math.abs(g),m=b.plotX||0;f=e(b.plotY,-f,k.len+f);var x=Math.min(f,g),D=Math.max(f,g)-x,y=t,A=m+v,z=C;r&&Math.abs(D)<r&&(D=r,m=!k.reversed&&!b.negative||k.reversed&&b.negative,B(n)&&B(w)&&b.y===n&&w<=n&&(k.min||0)<n&&(u!==w||(k.max||0)<=n)&&(m=!m),x=Math.abs(x-p)>r?g-r:p-(m?r:0));h(b.options.pointWidth)&&(y=z=Math.ceil(b.options.pointWidth),A-=Math.round((y-t)/2));d.centerInCategory&&(A=a.adjustForMissingColumns(A,y,b,q));b.barX=A;b.pointWidth=y;b.tooltipPos=c.inverted?[e(k.len+
    k.pos-c.plotLeft-f,k.pos-c.plotLeft,k.len+k.pos-c.plotLeft),l.len+l.pos-c.plotTop-A-z/2,D]:[l.left-c.plotLeft+A+z/2,e(f+k.pos-c.plotTop,k.pos-c.plotTop,k.len+k.pos-c.plotTop),D];b.shapeType=a.pointClass.prototype.shapeType||"rect";b.shapeArgs=a.crispCol.apply(a,b.isNull?[A,p,z,0]:[A,x,z,D])})};l.prototype.drawGraph=function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")};l.prototype.pointAttribs=function(a,c){var b=this.options,e=this.pointAttrToOptions||{},g=e.stroke||
    "borderColor",f=e["stroke-width"]||"borderWidth",h=a&&a.color||this.color,l=a&&a[g]||b[g]||h;e=a&&a.options.dashStyle||b.dashStyle;var k=a&&a[f]||b[f]||this[f]||0,p=J(a&&a.opacity,b.opacity,1);if(a&&this.zones.length){var r=a.getZone();h=a.options.color||r&&(r.color||a.nonZonedColor)||this.color;r&&(l=r.borderColor||l,e=r.dashStyle||e,k=r.borderWidth||k)}c&&a&&(a=t(b.states[c],a.options.states&&a.options.states[c]||{}),c=a.brightness,h=a.color||"undefined"!==typeof c&&n(h).brighten(a.brightness).get()||
    h,l=a[g]||l,k=a[f]||k,e=a.dashStyle||e,p=J(a.opacity,p));g={fill:h,stroke:l,"stroke-width":k,opacity:p};e&&(g.dashstyle=e);return g};l.prototype.drawPoints=function(){var a=this,c=this.chart,d=a.options,e=c.renderer,f=d.animationLimit||250,h;a.points.forEach(function(b){var g=b.graphic,l=!!g,k=g&&c.pointCount<f?"animate":"attr";if(B(b.plotY)&&null!==b.y){h=b.shapeArgs;g&&b.hasNewShapeType()&&(g=g.destroy());a.enabledDataSorting&&(b.startXPos=a.xAxis.reversed?-(h?h.width||0:0):a.xAxis.width);g||(b.graphic=
    g=e[b.shapeType](h).add(b.group||a.group))&&a.enabledDataSorting&&c.hasRendered&&c.pointCount<f&&(g.attr({x:b.startXPos}),l=!0,k="animate");if(g&&l)g[k](t(h));if(d.borderRadius)g[k]({r:d.borderRadius});c.styledMode||g[k](a.pointAttribs(b,b.selected&&"select")).shadow(!1!==b.allowShadow&&d.shadow,null,d.stacking&&!d.borderRadius);g&&(g.addClass(b.getClassName(),!0),g.attr({visibility:b.visible?"inherit":"hidden"}))}else g&&(b.graphic=g.destroy())})};l.prototype.drawTracker=function(){var a=this,e=
    a.chart,d=e.pointer,f=function(a){var b=d.getPointFromEvent(a);"undefined"!==typeof b&&(d.isDirectTouch=!0,b.onMouseOver(a))},h;a.points.forEach(function(a){h=p(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);h.forEach(function(b){b.div?b.div.point=a:b.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(b){if(a[b]){a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){d.onTrackerMouseOut(a)});if(k)a[b].on("touchstart",
    f);!e.styledMode&&a.options.cursor&&a[b].css(c).css({cursor:a.options.cursor})}}),a._hasTracking=!0);w(this,"afterDrawTracker")};l.prototype.remove=function(){var a=this,c=a.chart;c.hasRendered&&c.series.forEach(function(b){b.type===a.type&&(b.isDirty=!0)});y.prototype.remove.apply(a,arguments)};l.defaultOptions=t(y.defaultOptions,{borderRadius:0,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},
        select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"});return l}(y);f(H.prototype,{cropShoulder:0,directTouch:!0,drawLegendSymbol:F.drawRectangle,getSymbol:a,negStacks:!0,trackerGroups:["group","dataLabelsGroup"]});G.registerSeriesType("column",H);"";"";return H});M(a,"Core/Series/DataLabel.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/FormatUtilities.js"],
    a["Core/Utilities.js"]],function(a,u,z){var v=a.getDeferredAnimation,y=u.format,G=z.defined,H=z.extend,A=z.fireEvent,q=z.isArray,n=z.merge,k=z.objectEach,e=z.pick,c=z.splat,h;(function(a){function f(a,b,c,d,f){var g=this,h=this.chart,l=this.isCartesian&&h.inverted,k=this.enabledDataSorting,m=e(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),n=e(a.plotY,-9999),p=b.getBBox(),r=c.rotation,q=c.align,t=h.isInsidePlot(m,Math.round(n),{inverted:l,paneCoordinates:!0,series:g}),v=function(c){k&&g.xAxis&&!u&&g.setDataLabelStartPos(a,
    b,f,t,c)},u="justify"===e(c.overflow,k?"none":"justify"),w=this.visible&&!1!==a.visible&&(a.series.forceDL||k&&!u||t||e(c.inside,!!this.options.stacking)&&d&&h.isInsidePlot(m,l?d.x+1:d.y+d.height-1,{inverted:l,paneCoordinates:!0,series:g}));if(w){var C=h.renderer.fontMetrics(h.styledMode?void 0:c.style.fontSize,b).b;d=H({x:l?this.yAxis.len-n:m,y:Math.round(l?this.xAxis.len-m:n),width:0,height:0},d);H(c,{width:p.width,height:p.height});r?(u=!1,m=h.renderer.rotCorr(C,r),m={x:d.x+(c.x||0)+d.width/2+
        m.x,y:d.y+(c.y||0)+{top:0,middle:.5,bottom:1}[c.verticalAlign]*d.height},v(m),b[f?"attr":"animate"](m).attr({align:q}),v=(r+720)%360,v=180<v&&360>v,"left"===q?m.y-=v?p.height:0:"center"===q?(m.x-=p.width/2,m.y-=p.height/2):"right"===q&&(m.x-=p.width,m.y-=v?0:p.height),b.placed=!0,b.alignAttr=m):(v(d),b.align(c,void 0,d),m=b.alignAttr);u&&0<=d.height?this.justifyDataLabel(b,c,m,p,d,f):e(c.crop,!0)&&(w=h.isInsidePlot(m.x,m.y,{paneCoordinates:!0,series:g})&&h.isInsidePlot(m.x+p.width,m.y+p.height,{paneCoordinates:!0,
    series:g}));if(c.shape&&!r)b[f?"attr":"animate"]({anchorX:l?h.plotWidth-a.plotY:a.plotX,anchorY:l?h.plotHeight-a.plotX:a.plotY})}f&&k&&(b.placed=!1);w||k&&!u||(b.hide(!0),b.placed=!1)}function h(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,">"===b&&a>c||"<"===b&&a<c||">="===b&&a>=c||"<="===b&&a<=c||"=="===b&&a==c||"==="===b&&a===c?!0:!1):!0}function u(){var a=this,b=a.chart,g=a.options,d=a.points,f=a.hasRendered||0,n=b.renderer,p=g.dataLabels,r,t=p.animation;t=p.defer?v(b,
    t,a):{defer:0,duration:0};p=z(z(b.options.plotOptions&&b.options.plotOptions.series&&b.options.plotOptions.series.dataLabels,b.options.plotOptions&&b.options.plotOptions[a.type]&&b.options.plotOptions[a.type].dataLabels),p);A(this,"drawDataLabels");if(q(p)||p.enabled||a._hasPointLabels){var u=a.plotGroup("dataLabelsGroup","data-labels",f?"inherit":"hidden",p.zIndex||6);u.attr({opacity:+f});!f&&(f=a.dataLabelsGroup)&&(a.visible&&u.show(!0),f[g.animation?"animate":"attr"]({opacity:1},t));d.forEach(function(d){r=
    c(z(p,d.dlOptions||d.options&&d.options.dataLabels));r.forEach(function(c,f){var l=c.enabled&&(!d.isNull||d.dataLabelOnNull)&&h(d,c),m=d.connectors?d.connectors[f]:d.connector,p=d.dataLabels?d.dataLabels[f]:d.dataLabel,r=e(c.distance,d.labelDistance),q=!p;if(l){var t=d.getLabelConfig();var v=e(c[d.formatPrefix+"Format"],c.format);t=G(v)?y(v,t,b):(c[d.formatPrefix+"Formatter"]||c.formatter).call(t,c);v=c.style;var w=c.rotation;b.styledMode||(v.color=e(c.color,v.color,a.color,"#000000"),"contrast"===
v.color?(d.contrastColor=n.getContrast(d.color||a.color),v.color=!G(r)&&c.inside||0>r||g.stacking?d.contrastColor:"#000000"):delete d.contrastColor,g.cursor&&(v.cursor=g.cursor));var C={r:c.borderRadius||0,rotation:w,padding:c.padding,zIndex:1};b.styledMode||(C.fill=c.backgroundColor,C.stroke=c.borderColor,C["stroke-width"]=c.borderWidth);k(C,function(a,b){"undefined"===typeof a&&delete C[b]})}!p||l&&G(t)&&!!p.div===!!c.useHTML||(d.dataLabel=p=d.dataLabel&&d.dataLabel.destroy(),d.dataLabels&&(1===
d.dataLabels.length?delete d.dataLabels:delete d.dataLabels[f]),f||delete d.dataLabel,m&&(d.connector=d.connector.destroy(),d.connectors&&(1===d.connectors.length?delete d.connectors:delete d.connectors[f])));l&&G(t)&&(p?C.text=t:(d.dataLabels=d.dataLabels||[],p=d.dataLabels[f]=w?n.text(t,0,-9999,c.useHTML).addClass("highcharts-data-label"):n.label(t,0,-9999,c.shape,null,null,c.useHTML,null,"data-label"),f||(d.dataLabel=p),p.addClass(" highcharts-data-label-color-"+d.colorIndex+" "+(c.className||
    "")+(c.useHTML?" highcharts-tracker":""))),p.options=c,p.attr(C),b.styledMode||p.css(v).shadow(c.shadow),p.added||p.add(u),c.textPath&&!c.useHTML&&(p.setTextPath(d.getDataLabelPath&&d.getDataLabelPath(p)||d.graphic,c.textPath),d.dataLabelPath&&!c.textPath.enabled&&(d.dataLabelPath=d.dataLabelPath.destroy())),a.alignDataLabel(d,p,c,null,q))})})}A(this,"afterDrawDataLabels")}function t(a,b,c,d,e,f){var g=this.chart,h=b.align,k=b.verticalAlign,l=a.box?0:a.padding||0,m=b.x;m=void 0===m?0:m;var n=b.y;
    n=void 0===n?0:n;var p=(c.x||0)+l;if(0>p){"right"===h&&0<=m?(b.align="left",b.inside=!0):m-=p;var r=!0}p=(c.x||0)+d.width-l;p>g.plotWidth&&("left"===h&&0>=m?(b.align="right",b.inside=!0):m+=g.plotWidth-p,r=!0);p=c.y+l;0>p&&("bottom"===k&&0<=n?(b.verticalAlign="top",b.inside=!0):n-=p,r=!0);p=(c.y||0)+d.height-l;p>g.plotHeight&&("top"===k&&0>=n?(b.verticalAlign="bottom",b.inside=!0):n+=g.plotHeight-p,r=!0);r&&(b.x=m,b.y=n,a.placed=!f,a.align(b,void 0,e));return r}function z(a,b){var c=[],d;if(q(a)&&
    !q(b))c=a.map(function(a){return n(a,b)});else if(q(b)&&!q(a))c=b.map(function(b){return n(a,b)});else if(q(a)||q(b))for(d=Math.max(a.length,b.length);d--;)c[d]=n(a[d],b[d]);else c=n(a,b);return c}function C(a,b,c,d,e){var g=this.chart,f=g.inverted,h=this.xAxis,k=h.reversed,l=f?b.height/2:b.width/2;a=(a=a.pointWidth)?a/2:0;b.startXPos=f?e.x:k?-l-a:h.width-l+a;b.startYPos=f?k?this.yAxis.height-l+a:-l-a:e.y;d?"hidden"===b.visibility&&(b.show(),b.attr({opacity:0}).animate({opacity:1})):b.attr({opacity:1}).animate({opacity:0},
    void 0,b.hide);g.hasRendered&&(c&&b.attr({x:b.startXPos,y:b.startYPos}),b.placed=!0)}var r=[];a.compose=function(a){if(-1===r.indexOf(a)){var b=a.prototype;r.push(a);b.alignDataLabel=f;b.drawDataLabels=u;b.justifyDataLabel=t;b.setDataLabelStartPos=C}}})(h||(h={}));"";return h});M(a,"Series/Column/ColumnDataLabel.js",[a["Core/Series/DataLabel.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,u,z){var v=u.series,y=z.merge,G=z.pick,H;(function(u){function q(a,e,c,h,f){var k=
    this.chart.inverted,n=a.series,q=(n.xAxis?n.xAxis.len:this.chart.plotSizeX)||0;n=(n.yAxis?n.yAxis.len:this.chart.plotSizeY)||0;var t=a.dlBox||a.shapeArgs,u=G(a.below,a.plotY>G(this.translatedThreshold,n)),C=G(c.inside,!!this.options.stacking);t&&(h=y(t),0>h.y&&(h.height+=h.y,h.y=0),t=h.y+h.height-n,0<t&&t<h.height&&(h.height-=t),k&&(h={x:n-h.y-h.height,y:q-h.x-h.width,width:h.height,height:h.width}),C||(k?(h.x+=u?0:h.width,h.width=0):(h.y+=u?h.height:0,h.height=0)));c.align=G(c.align,!k||C?"center":
    u?"right":"left");c.verticalAlign=G(c.verticalAlign,k||C?"middle":u?"top":"bottom");v.prototype.alignDataLabel.call(this,a,e,c,h,f);c.inside&&a.contrastColor&&e.css({color:a.contrastColor})}var n=[];u.compose=function(k){a.compose(v);-1===n.indexOf(k)&&(n.push(k),k.prototype.alignDataLabel=q)}})(H||(H={}));return H});M(a,"Series/Bar/BarSeries.js",[a["Series/Column/ColumnSeries.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,u,z){var v=this&&this.__extends||function(){var a=
    function(v,q){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,k){a.__proto__=k}||function(a,k){for(var e in k)k.hasOwnProperty(e)&&(a[e]=k[e])};return a(v,q)};return function(v,q){function n(){this.constructor=v}a(v,q);v.prototype=null===q?Object.create(q):(n.prototype=q.prototype,new n)}}(),y=z.extend,G=z.merge;z=function(u){function y(){var a=null!==u&&u.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}v(y,u);y.defaultOptions=G(a.defaultOptions,
    {});return y}(a);y(z.prototype,{inverted:!0});u.registerSeriesType("bar",z);"";return z});M(a,"Series/Scatter/ScatterSeries.js",[a["Series/Column/ColumnSeries.js"],a["Series/Line/LineSeries.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,u,z,F){var v=this&&this.__extends||function(){var a=function(n,k){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])};return a(n,k)};return function(n,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    k){function e(){this.constructor=n}a(n,k);n.prototype=null===k?Object.create(k):(e.prototype=k.prototype,new e)}}(),G=F.addEvent,H=F.extend,A=F.merge;F=function(a){function n(){var k=null!==a&&a.apply(this,arguments)||this;k.data=void 0;k.options=void 0;k.points=void 0;return k}v(n,a);n.prototype.applyJitter=function(){var a=this,e=this.options.jitter,c=this.points.length;e&&this.points.forEach(function(h,f){["x","y"].forEach(function(k,n){var p="plot"+k.toUpperCase();if(e[k]&&!h.isNull){var q=a[k+
"Axis"];var v=e[k]*q.transA;if(q&&!q.isLog){var u=Math.max(0,h[p]-v);q=Math.min(q.len,h[p]+v);n=1E4*Math.sin(f+n*c);h[p]=u+(q-u)*(n-Math.floor(n));"x"===k&&(h.clientX=h.plotX)}}})})};n.prototype.drawGraph=function(){this.options.lineWidth?a.prototype.drawGraph.call(this):this.graph&&(this.graph=this.graph.destroy())};n.defaultOptions=A(u.defaultOptions,{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
        pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});return n}(u);H(F.prototype,{drawTracker:a.prototype.drawTracker,sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1});G(F,"afterTranslate",function(){this.applyJitter()});z.registerSeriesType("scatter",F);"";return F});M(a,"Series/CenteredUtilities.js",[a["Core/Globals.js"],a["Core/Series/Series.js"],a["Core/Utilities.js"]],function(a,u,z){var v=a.deg2rad,y=z.isNumber,
    G=z.pick,H=z.relativeLength,A;(function(a){a.getCenter=function(){var a=this.options,k=this.chart,e=2*(a.slicedOffset||0),c=k.plotWidth-2*e,h=k.plotHeight-2*e,f=a.center,q=Math.min(c,h),p=a.size,v=a.innerSize||0;"string"===typeof p&&(p=parseFloat(p));"string"===typeof v&&(v=parseFloat(v));a=[G(f[0],"50%"),G(f[1],"50%"),G(p&&0>p?void 0:a.size,"100%"),G(v&&0>v?void 0:a.innerSize||0,"0%")];!k.angular||this instanceof u||(a[3]=0);for(f=0;4>f;++f)p=a[f],k=2>f||2===f&&/%$/.test(p),a[f]=H(p,[c,h,q,a[2]][f])+
    (k?e:0);a[3]>a[2]&&(a[3]=a[2]);return a};a.getStartAndEndRadians=function(a,k){a=y(a)?a:0;k=y(k)&&k>a&&360>k-a?k:a+360;return{start:v*(a+-90),end:v*(k+-90)}}})(A||(A={}));"";return A});M(a,"Series/Pie/PiePoint.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Series/Point.js"],a["Core/Utilities.js"]],function(a,u,z){var v=this&&this.__extends||function(){var a=function(e,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)c.hasOwnProperty(e)&&
(a[e]=c[e])};return a(e,c)};return function(e,c){function h(){this.constructor=e}a(e,c);e.prototype=null===c?Object.create(c):(h.prototype=c.prototype,new h)}}(),y=a.setAnimation,G=z.addEvent,H=z.defined;a=z.extend;var A=z.isNumber,q=z.pick,n=z.relativeLength;u=function(a){function e(){var c=null!==a&&a.apply(this,arguments)||this;c.labelDistance=void 0;c.options=void 0;c.series=void 0;return c}v(e,a);e.prototype.getConnectorPath=function(){var a=this.labelPosition,e=this.series.options.dataLabels,
    f=this.connectorShapes,k=e.connectorShape;f[k]&&(k=f[k]);return k.call(this,{x:a.final.x,y:a.final.y,alignment:a.alignment},a.connectorPosition,e)};e.prototype.getTranslate=function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}};e.prototype.haloPath=function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:c.r-1,start:c.start,end:c.end})};e.prototype.init=function(){var c=this;a.prototype.init.apply(this,
    arguments);this.name=q(this.name,"Slice");var e=function(a){c.slice("select"===a.type)};G(this,"select",e);G(this,"unselect",e);return this};e.prototype.isValid=function(){return A(this.y)&&0<=this.y};e.prototype.setVisible=function(a,e){var c=this,h=this.series,k=h.chart,n=h.options.ignoreHiddenPoint;e=q(e,n);a!==this.visible&&(this.visible=this.options.visible=a="undefined"===typeof a?!this.visible:a,h.options.data[h.data.indexOf(this)]=this.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(e){if(c[e])c[e][a?
    "show":"hide"](a)}),this.legendItem&&k.legend.colorizeItem(this,a),a||"hover"!==this.state||this.setState(""),n&&(h.isDirty=!0),e&&k.redraw())};e.prototype.slice=function(a,e,f){var c=this.series;y(f,c.chart);q(e,!0);this.sliced=this.options.sliced=H(a)?a:!this.sliced;c.options.data[c.data.indexOf(this)]=this.options;this.graphic&&this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())};return e}(u);a(u.prototype,{connectorShapes:{fixedOffset:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              e,c){var h=e.breakAt;e=e.touchingSliceAt;return[["M",a.x,a.y],c.softConnector?["C",a.x+("left"===a.alignment?-5:5),a.y,2*h.x-e.x,2*h.y-e.y,h.x,h.y]:["L",h.x,h.y],["L",e.x,e.y]]},straight:function(a,e){e=e.touchingSliceAt;return[["M",a.x,a.y],["L",e.x,e.y]]},crookedLine:function(a,e,c){e=e.touchingSliceAt;var h=this.series,f=h.center[0],k=h.chart.plotWidth,p=h.chart.plotLeft;h=a.alignment;var q=this.shapeArgs.r;c=n(c.crookDistance,1);k="left"===h?f+q+(k+p-f-q)*(1-c):p+(f-q)*c;c=["L",k,a.y];f=!0;if("left"===
        h?k>a.x||k<e.x:k<a.x||k>e.x)f=!1;a=[["M",a.x,a.y]];f&&a.push(c);a.push(["L",e.x,e.y]);return a}}});return u});M(a,"Series/Pie/PieSeries.js",[a["Series/CenteredUtilities.js"],a["Series/Column/ColumnSeries.js"],a["Core/Globals.js"],a["Core/Legend/LegendSymbol.js"],a["Series/Pie/PiePoint.js"],a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Renderer/SVG/Symbols.js"],a["Core/Utilities.js"]],function(a,u,z,F,y,G,H,A,q){var n=this&&this.__extends||function(){var a=function(c,e){a=Object.setPrototypeOf||
    {__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])};return a(c,e)};return function(c,e){function f(){this.constructor=c}a(c,e);c.prototype=null===e?Object.create(e):(f.prototype=e.prototype,new f)}}(),k=a.getStartAndEndRadians;z=z.noop;var e=q.clamp,c=q.extend,h=q.fireEvent,f=q.merge,v=q.pick,p=q.relativeLength;q=function(a){function c(){var c=null!==a&&a.apply(this,arguments)||this;c.center=void 0;c.data=void 0;c.maxLabelDistance=
    void 0;c.options=void 0;c.points=void 0;return c}n(c,a);c.prototype.animate=function(a){var c=this,e=c.points,f=c.startAngleRad;a||e.forEach(function(a){var b=a.graphic,d=a.shapeArgs;b&&d&&(b.attr({r:v(a.startR,c.center&&c.center[3]/2),start:f,end:f}),b.animate({r:d.r,start:d.start,end:d.end},c.options.animation))})};c.prototype.drawEmpty=function(){var a=this.startAngleRad,c=this.endAngleRad,e=this.options;if(0===this.total&&this.center){var f=this.center[0];var b=this.center[1];this.graph||(this.graph=
    this.chart.renderer.arc(f,b,this.center[1]/2,0,a,c).addClass("highcharts-empty-series").add(this.group));this.graph.attr({d:A.arc(f,b,this.center[2]/2,0,{start:a,end:c,innerR:this.center[3]/2})});this.chart.styledMode||this.graph.attr({"stroke-width":e.borderWidth,fill:e.fillColor||"none",stroke:e.color||"#cccccc"})}else this.graph&&(this.graph=this.graph.destroy())};c.prototype.drawPoints=function(){var a=this.chart.renderer;this.points.forEach(function(c){c.graphic&&c.hasNewShapeType()&&(c.graphic=
    c.graphic.destroy());c.graphic||(c.graphic=a[c.shapeType](c.shapeArgs).add(c.series.group),c.delayedRendering=!0)})};c.prototype.generatePoints=function(){a.prototype.generatePoints.call(this);this.updateTotals()};c.prototype.getX=function(a,c,f){var h=this.center,b=this.radii?this.radii[f.index]||0:h[2]/2;a=Math.asin(e((a-h[1])/(b+f.labelDistance),-1,1));return h[0]+(c?-1:1)*Math.cos(a)*(b+f.labelDistance)+(0<f.labelDistance?(c?-1:1)*this.options.dataLabels.padding:0)};c.prototype.hasData=function(){return!!this.processedXData.length};
    c.prototype.redrawPoints=function(){var a=this,c=a.chart,e=c.renderer,h=a.options.shadow,b,g,d,k;this.drawEmpty();!h||a.shadowGroup||c.styledMode||(a.shadowGroup=e.g("shadow").attr({zIndex:-1}).add(a.group));a.points.forEach(function(l){var m={};g=l.graphic;if(!l.isNull&&g){var n=void 0;k=l.shapeArgs;b=l.getTranslate();c.styledMode||(n=l.shadowGroup,h&&!n&&(n=l.shadowGroup=e.g("shadow").add(a.shadowGroup)),n&&n.attr(b),d=a.pointAttribs(l,l.selected&&"select"));l.delayedRendering?(g.setRadialReference(a.center).attr(k).attr(b),
    c.styledMode||g.attr(d).attr({"stroke-linejoin":"round"}).shadow(h,n),l.delayedRendering=!1):(g.setRadialReference(a.center),c.styledMode||f(!0,m,d),f(!0,m,k,b),g.animate(m));g.attr({visibility:l.visible?"inherit":"hidden"});g.addClass(l.getClassName(),!0)}else g&&(l.graphic=g.destroy())})};c.prototype.sortByAngle=function(a,c){a.sort(function(a,e){return"undefined"!==typeof a.angle&&(e.angle-a.angle)*c})};c.prototype.translate=function(a){this.generatePoints();var c=this.options,e=c.slicedOffset,
        f=e+(c.borderWidth||0),b=k(c.startAngle,c.endAngle),g=this.startAngleRad=b.start;b=(this.endAngleRad=b.end)-g;var d=this.points,m=c.dataLabels.distance;c=c.ignoreHiddenPoint;var n=d.length,q,t=0;a||(this.center=a=this.getCenter());for(q=0;q<n;q++){var u=d[q];var w=g+t*b;!u.isValid()||c&&!u.visible||(t+=u.percentage/100);var y=g+t*b;var B={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*w)/1E3,end:Math.round(1E3*y)/1E3};u.shapeType="arc";u.shapeArgs=B;u.labelDistance=v(u.options.dataLabels&&
        u.options.dataLabels.distance,m);u.labelDistance=p(u.labelDistance,B.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,u.labelDistance);y=(y+w)/2;y>1.5*Math.PI?y-=2*Math.PI:y<-Math.PI/2&&(y+=2*Math.PI);u.slicedTranslation={translateX:Math.round(Math.cos(y)*e),translateY:Math.round(Math.sin(y)*e)};B=Math.cos(y)*a[2]/2;var A=Math.sin(y)*a[2]/2;u.tooltipPos=[a[0]+.7*B,a[1]+.7*A];u.half=y<-Math.PI/2||y>Math.PI/2?1:0;u.angle=y;w=Math.min(f,u.labelDistance/5);u.labelPosition={natural:{x:a[0]+B+
                Math.cos(y)*u.labelDistance,y:a[1]+A+Math.sin(y)*u.labelDistance},"final":{},alignment:0>u.labelDistance?"center":u.half?"right":"left",connectorPosition:{breakAt:{x:a[0]+B+Math.cos(y)*w,y:a[1]+A+Math.sin(y)*w},touchingSliceAt:{x:a[0]+B,y:a[1]+A}}}}h(this,"afterTranslate")};c.prototype.updateTotals=function(){var a=this.points,c=a.length,e=this.options.ignoreHiddenPoint,f,b=0;for(f=0;f<c;f++){var g=a[f];!g.isValid()||e&&!g.visible||(b+=g.y)}this.total=b;for(f=0;f<c;f++)g=a[f],g.percentage=0<b&&(g.visible||
        !e)?g.y/b*100:0,g.total=b};c.defaultOptions=f(G.defaultOptions,{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,connectorShape:"fixedOffset",crookDistance:"70%",distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",
        borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}});return c}(G);c(q.prototype,{axisTypes:[],directTouch:!0,drawGraph:void 0,drawLegendSymbol:F.drawRectangle,drawTracker:u.prototype.drawTracker,getCenter:a.getCenter,getSymbol:z,isCartesian:!1,noSharedTooltip:!0,pointAttribs:u.prototype.pointAttribs,pointClass:y,requireSorting:!1,searchPoint:z,trackerGroups:["group","dataLabelsGroup"]});H.registerSeriesType("pie",q);"";return q});M(a,"Series/Pie/PieDataLabel.js",[a["Core/Series/DataLabel.js"],
    a["Core/Globals.js"],a["Core/Renderer/RendererUtilities.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,u,z,F,y){var v=u.noop,H=z.distribute,A=F.series,q=y.arrayMax,n=y.clamp,k=y.defined,e=y.merge,c=y.pick,h=y.relativeLength,f;(function(f){function p(){var a=this,f=a.data,b=a.chart,g=a.options.dataLabels||{},d=g.connectorPadding,h=b.plotWidth,n=b.plotHeight,p=b.plotLeft,v=Math.round(b.chartWidth/3),t=a.center,u=t[2]/2,w=t[1],C=[[],[]],y=[0,0,0,0],B=a.dataLabelPositioners,
    z,F,G,J,M,E,T,N,V,W,X,R;a.visible&&(g.enabled||a._hasPointLabels)&&(f.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),A.prototype.drawDataLabels.apply(a),f.forEach(function(a){a.dataLabel&&(a.visible?(C[a.half].push(a),a.dataLabel._pos=null,!k(g.style.width)&&!k(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>v&&(a.dataLabel.css({width:Math.round(.7*
        v)+"px"}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),C.forEach(function(e,f){var l=e.length,m=[],r;if(l){a.sortByAngle(e,f-.5);if(0<a.maxLabelDistance){var q=Math.max(0,w-u-a.maxLabelDistance);var v=Math.min(w+u+a.maxLabelDistance,b.plotHeight);e.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,w-u-a.labelDistance),a.bottom=Math.min(w+u+a.labelDistance,b.plotHeight),r=a.dataLabel.getBBox().height||
    21,a.distributeBox={target:a.labelPosition.natural.y-a.top+r/2,size:r,rank:a.y},m.push(a.distributeBox))});q=v+r-q;H(m,q,q/5)}for(X=0;X<l;X++){z=e[X];E=z.labelPosition;J=z.dataLabel;W=!1===z.visible?"hidden":"inherit";V=q=E.natural.y;m&&k(z.distributeBox)&&("undefined"===typeof z.distributeBox.pos?W="hidden":(T=z.distributeBox.size,V=B.radialDistributionY(z)));delete z.positionIndex;if(g.justify)N=B.justify(z,u,t);else switch(g.alignTo){case "connectors":N=B.alignToConnectors(e,f,h,p);break;case "plotEdges":N=
    B.alignToPlotEdges(J,f,h,p);break;default:N=B.radialDistributionX(a,z,V,q)}J._attr={visibility:W,align:E.alignment};R=z.options.dataLabels||{};J._pos={x:N+c(R.x,g.x)+({left:d,right:-d}[E.alignment]||0),y:V+c(R.y,g.y)-10};E.final.x=N;E.final.y=V;c(g.crop,!0)&&(M=J.getBBox().width,q=null,N-M<d&&1===f?(q=Math.round(M-N+d),y[3]=Math.max(q,y[3])):N+M>h-d&&0===f&&(q=Math.round(N+M-h+d),y[1]=Math.max(q,y[1])),0>V-T/2?y[0]=Math.max(Math.round(-V+T/2),y[0]):V+T/2>n&&(y[2]=Math.max(Math.round(V+T/2-n),y[2])),
    J.sideOverflow=q)}}}),0===q(y)||this.verifyDataLabelOverflow(y))&&(this.placeDataLabels(),this.points.forEach(function(d){R=e(g,d.options.dataLabels);if(F=c(R.connectorWidth,1)){var f;G=d.connector;if((J=d.dataLabel)&&J._pos&&d.visible&&0<d.labelDistance){W=J._attr.visibility;if(f=!G)d.connector=G=b.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+d.colorIndex+(d.className?" "+d.className:"")).add(a.dataLabelsGroup),b.styledMode||G.attr({"stroke-width":F,stroke:R.connectorColor||
        d.color||"#666666"});G[f?"attr":"animate"]({d:d.getConnectorPath()});G.attr("visibility",W)}else G&&(d.connector=G.destroy())}}))}function u(){this.points.forEach(function(a){var c=a.dataLabel,b;c&&a.visible&&((b=c._pos)?(c.sideOverflow&&(c._attr.width=Math.max(c.getBBox().width-c.sideOverflow,0),c.css({width:c._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),c.shortened=!0),c.attr(c._attr),c[c.moved?"animate":"attr"](b),c.moved=!0):c&&c.attr({y:-9999}));
    delete a.distributeBox},this)}function t(a){var c=this.center,b=this.options,e=b.center,d=b.minSize||80,f=null!==b.size;if(!f){if(null!==e[0])var k=Math.max(c[2]-Math.max(a[1],a[3]),d);else k=Math.max(c[2]-a[1]-a[3],d),c[0]+=(a[3]-a[1])/2;null!==e[1]?k=n(k,d,c[2]-Math.max(a[0],a[2])):(k=n(k,d,c[2]-a[0]-a[2]),c[1]+=(a[0]-a[2])/2);k<c[2]?(c[2]=k,c[3]=Math.min(h(b.innerSize||0,k),k),this.translate(c),this.drawDataLabels&&this.drawDataLabels()):f=!0}return f}var w=[],C={radialDistributionY:function(a){return a.top+
        a.distributeBox.pos},radialDistributionX:function(a,c,b,e){return a.getX(b<c.top+2||b>c.bottom-2?e:b,c.half,c)},justify:function(a,c,b){return b[0]+(a.half?-1:1)*(c+a.labelDistance)},alignToPlotEdges:function(a,c,b,e){a=a.getBBox().width;return c?a+e:b-a-e},alignToConnectors:function(a,c,b,e){var d=0,g;a.forEach(function(a){g=a.dataLabel.getBBox().width;g>d&&(d=g)});return c?d+e:b-d-e}};f.compose=function(c){a.compose(A);-1===w.indexOf(c)&&(w.push(c),c=c.prototype,c.dataLabelPositioners=C,c.alignDataLabel=
    v,c.drawDataLabels=p,c.placeDataLabels=u,c.verifyDataLabelOverflow=t)}})(f||(f={}));return f});M(a,"Extensions/OverlappingDataLabels.js",[a["Core/Chart/Chart.js"],a["Core/Utilities.js"]],function(a,u){function v(a,k){var e=!1;if(a){var c=a.newOpacity;a.oldOpacity!==c&&(a.alignAttr&&a.placed?(a[c?"removeClass":"addClass"]("highcharts-data-label-hidden"),e=!0,a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,function(){k.styledMode||a.css({pointerEvents:c?"auto":"none"})}),y(k,"afterHideOverlappingLabel")):
    a.attr({opacity:c}));a.isOld=!0}return e}var F=u.addEvent,y=u.fireEvent,G=u.isArray,H=u.isNumber,A=u.objectEach,q=u.pick;F(a,"render",function(){var a=this,k=[];(this.labelCollectors||[]).forEach(function(a){k=k.concat(a())});(this.yAxis||[]).forEach(function(a){a.stacking&&a.options.stackLabels&&!a.options.stackLabels.allowOverlap&&A(a.stacking.stacks,function(a){A(a,function(a){a.label&&"hidden"!==a.label.visibility&&k.push(a.label)})})});(this.series||[]).forEach(function(e){var c=e.options.dataLabels;
    e.visible&&(!1!==c.enabled||e._hasPointLabels)&&(c=function(c){return c.forEach(function(c){c.visible&&(G(c.dataLabels)?c.dataLabels:c.dataLabel?[c.dataLabel]:[]).forEach(function(e){var f=e.options;e.labelrank=q(f.labelrank,c.labelrank,c.shapeArgs&&c.shapeArgs.height);f.allowOverlap?(e.oldOpacity=e.opacity,e.newOpacity=1,v(e,a)):k.push(e)})})},c(e.nodes||[]),c(e.points))});this.hideOverlappingLabels(k)});a.prototype.hideOverlappingLabels=function(a){var k=this,e=a.length,c=k.renderer,h,f,n,p=!1;
    var q=function(a){var e,f=a.box?0:a.padding||0,b=e=0,g;if(a&&(!a.alignAttr||a.placed)){var d=a.alignAttr||{x:a.attr("x"),y:a.attr("y")};var h=a.parentGroup;a.width||(e=a.getBBox(),a.width=e.width,a.height=e.height,e=c.fontMetrics(null,a.element).h);var k=a.width-2*f;(g={left:"0",center:"0.5",right:"1"}[a.alignValue])?b=+g*k:H(a.x)&&Math.round(a.x)!==a.translateX&&(b=a.x-a.translateX);return{x:d.x+(h.translateX||0)+f-(b||0),y:d.y+(h.translateY||0)+f-e,width:a.width-2*f,height:a.height-2*f}}};for(f=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            0;f<e;f++)if(h=a[f])h.oldOpacity=h.opacity,h.newOpacity=1,h.absoluteBox=q(h);a.sort(function(a,c){return(c.labelrank||0)-(a.labelrank||0)});for(f=0;f<e;f++){var t=(q=a[f])&&q.absoluteBox;for(h=f+1;h<e;++h){var u=(n=a[h])&&n.absoluteBox;!t||!u||q===n||0===q.newOpacity||0===n.newOpacity||u.x>=t.x+t.width||u.x+u.width<=t.x||u.y>=t.y+t.height||u.y+u.height<=t.y||((q.labelrank<n.labelrank?q:n).newOpacity=0)}}a.forEach(function(a){v(a,k)&&(p=!0)});p&&y(k,"afterHideAllOverlappingLabels")}});M(a,"Core/Responsive.js",
    [a["Core/Utilities.js"]],function(a){var v=a.extend,z=a.find,F=a.isArray,y=a.isObject,G=a.merge,H=a.objectEach,A=a.pick,q=a.splat,n=a.uniqueKey,k;(function(a){var c=[];a.compose=function(a){-1===c.indexOf(a)&&(c.push(a),v(a.prototype,e.prototype));return a};var e=function(){function a(){}a.prototype.currentOptions=function(a){function c(a,f,h,k){var b;H(a,function(a,d){if(!k&&-1<e.collectionsWithUpdate.indexOf(d)&&f[d])for(a=q(a),h[d]=[],b=0;b<Math.max(a.length,f[d].length);b++)f[d][b]&&(void 0===
    a[b]?h[d][b]=f[d][b]:(h[d][b]={},c(a[b],f[d][b],h[d][b],k+1)));else y(a)?(h[d]=F(a)?[]:{},c(a,f[d]||{},h[d],k+1)):h[d]="undefined"===typeof f[d]?null:f[d]})}var e=this,f={};c(a,this.options,f,0);return f};a.prototype.matchResponsiveRule=function(a,c){var e=a.condition;(e.callback||function(){return this.chartWidth<=A(e.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=A(e.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=A(e.minWidth,0)&&this.chartHeight>=A(e.minHeight,0)}).call(this)&&c.push(a._id)};a.prototype.setResponsive=
        function(a,c){var e=this,f=this.options.responsive,h=this.currentResponsive,k=[];!c&&f&&f.rules&&f.rules.forEach(function(a){"undefined"===typeof a._id&&(a._id=n());e.matchResponsiveRule(a,k)},this);c=G.apply(void 0,k.map(function(a){return z((f||{}).rules||[],function(c){return c._id===a})}).map(function(a){return a&&a.chartOptions}));c.isResponsiveOptions=!0;k=k.toString()||void 0;k!==(h&&h.ruleIds)&&(h&&this.update(h.undoOptions,a,!0),k?(h=this.currentOptions(c),h.isResponsiveOptions=!0,this.currentResponsive=
            {ruleIds:k,mergedOptions:c,undoOptions:h},this.update(c,a,!0)):this.currentResponsive=void 0)};return a}()})(k||(k={}));"";"";return k});M(a,"masters/highcharts.src.js",[a["Core/Globals.js"],a["Core/Utilities.js"],a["Core/DefaultOptions.js"],a["Core/Animation/Fx.js"],a["Core/Animation/AnimationUtilities.js"],a["Core/Renderer/HTML/AST.js"],a["Core/FormatUtilities.js"],a["Core/Renderer/RendererUtilities.js"],a["Core/Renderer/SVG/SVGElement.js"],a["Core/Renderer/SVG/SVGRenderer.js"],a["Core/Renderer/HTML/HTMLElement.js"],
    a["Core/Renderer/HTML/HTMLRenderer.js"],a["Core/Axis/Axis.js"],a["Core/Axis/DateTimeAxis.js"],a["Core/Axis/LogarithmicAxis.js"],a["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],a["Core/Axis/Tick.js"],a["Core/Tooltip.js"],a["Core/Series/Point.js"],a["Core/Pointer.js"],a["Core/MSPointer.js"],a["Core/Legend/Legend.js"],a["Core/Chart/Chart.js"],a["Core/Series/Series.js"],a["Core/Series/SeriesRegistry.js"],a["Series/Column/ColumnSeries.js"],a["Series/Column/ColumnDataLabel.js"],a["Series/Pie/PieSeries.js"],
    a["Series/Pie/PieDataLabel.js"],a["Core/Series/DataLabel.js"],a["Core/Responsive.js"],a["Core/Color/Color.js"],a["Core/Time.js"]],function(a,u,z,F,y,G,H,A,q,n,k,e,c,h,f,w,p,B,t,J,C,r,l,b,g,d,m,D,x,I,M,S,O){a.animate=y.animate;a.animObject=y.animObject;a.getDeferredAnimation=y.getDeferredAnimation;a.setAnimation=y.setAnimation;a.stop=y.stop;a.timers=F.timers;a.AST=G;a.Axis=c;a.Chart=l;a.chart=l.chart;a.Fx=F;a.Legend=r;a.PlotLineOrBand=w;a.Point=t;a.Pointer=C.isRequired()?C:J;a.Series=b;a.SVGElement=
    q;a.SVGRenderer=n;a.Tick=p;a.Time=O;a.Tooltip=B;a.Color=S;a.color=S.parse;e.compose(n);k.compose(q);a.defaultOptions=z.defaultOptions;a.getOptions=z.getOptions;a.time=z.defaultTime;a.setOptions=z.setOptions;a.dateFormat=H.dateFormat;a.format=H.format;a.numberFormat=H.numberFormat;a.addEvent=u.addEvent;a.arrayMax=u.arrayMax;a.arrayMin=u.arrayMin;a.attr=u.attr;a.clearTimeout=u.clearTimeout;a.correctFloat=u.correctFloat;a.createElement=u.createElement;a.css=u.css;a.defined=u.defined;a.destroyObjectProperties=
    u.destroyObjectProperties;a.discardElement=u.discardElement;a.distribute=A.distribute;a.erase=u.erase;a.error=u.error;a.extend=u.extend;a.extendClass=u.extendClass;a.find=u.find;a.fireEvent=u.fireEvent;a.getMagnitude=u.getMagnitude;a.getStyle=u.getStyle;a.inArray=u.inArray;a.isArray=u.isArray;a.isClass=u.isClass;a.isDOMElement=u.isDOMElement;a.isFunction=u.isFunction;a.isNumber=u.isNumber;a.isObject=u.isObject;a.isString=u.isString;a.keys=u.keys;a.merge=u.merge;a.normalizeTickInterval=u.normalizeTickInterval;
    a.objectEach=u.objectEach;a.offset=u.offset;a.pad=u.pad;a.pick=u.pick;a.pInt=u.pInt;a.relativeLength=u.relativeLength;a.removeEvent=u.removeEvent;a.seriesType=g.seriesType;a.splat=u.splat;a.stableSort=u.stableSort;a.syncTimeout=u.syncTimeout;a.timeUnits=u.timeUnits;a.uniqueKey=u.uniqueKey;a.useSerialIds=u.useSerialIds;a.wrap=u.wrap;m.compose(d);I.compose(b);h.compose(c);f.compose(c);x.compose(D);w.compose(c);M.compose(l);return a});a["masters/highcharts.src.js"]._modules=a;return a["masters/highcharts.src.js"]});

/*!
 * Chartkick.js
 * Create beautiful charts with one line of JavaScript
 * https://github.com/ankane/chartkick.js
 * v4.2.0
 * MIT License
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Chartkick = factory());
})(this, (function () { 'use strict';

  function isArray(variable) {
    return Object.prototype.toString.call(variable) === "[object Array]";
  }

  function isFunction(variable) {
    return variable instanceof Function;
  }

  function isPlainObject(variable) {
    // protect against prototype pollution, defense 2
    return Object.prototype.toString.call(variable) === "[object Object]" && !isFunction(variable) && variable instanceof Object;
  }

  // https://github.com/madrobby/zepto/blob/master/src/zepto.js
  function extend(target, source) {
    var key;
    for (key in source) {
      // protect against prototype pollution, defense 1
      if (key === "__proto__") { continue; }

      if (isPlainObject(source[key]) || isArray(source[key])) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
          target[key] = {};
        }
        if (isArray(source[key]) && !isArray(target[key])) {
          target[key] = [];
        }
        extend(target[key], source[key]);
      } else if (source[key] !== undefined) {
        target[key] = source[key];
      }
    }
  }

  function merge(obj1, obj2) {
    var target = {};
    extend(target, obj1);
    extend(target, obj2);
    return target;
  }

  var DATE_PATTERN = /^(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)$/i;

  function negativeValues(series) {
    var i, j, data;
    for (i = 0; i < series.length; i++) {
      data = series[i].data;
      for (j = 0; j < data.length; j++) {
        if (data[j][1] < 0) {
          return true;
        }
      }
    }
    return false;
  }

  function toStr(n) {
    return "" + n;
  }

  function toFloat(n) {
    return parseFloat(n);
  }

  function toDate(n) {
    var matches, year, month, day;
    if (typeof n !== "object") {
      if (typeof n === "number") {
        n = new Date(n * 1000); // ms
      } else {
        n = toStr(n);
        if ((matches = n.match(DATE_PATTERN))) {
          year = parseInt(matches[1], 10);
          month = parseInt(matches[3], 10) - 1;
          day = parseInt(matches[5], 10);
          return new Date(year, month, day);
        } else {
          // try our best to get the str into iso8601
          // TODO be smarter about this
          var str = n.replace(/ /, "T").replace(" ", "").replace("UTC", "Z");
          // Date.parse returns milliseconds if valid and NaN if invalid
          n = new Date(Date.parse(str) || n);
        }
      }
    }
    return n;
  }

  function toArr(n) {
    if (!isArray(n)) {
      var arr = [], i;
      for (i in n) {
        if (n.hasOwnProperty(i)) {
          arr.push([i, n[i]]);
        }
      }
      n = arr;
    }
    return n;
  }

  function jsOptionsFunc(defaultOptions, hideLegend, setTitle, setMin, setMax, setStacked, setXtitle, setYtitle) {
    return function (chart, opts, chartOptions) {
      var series = chart.data;
      var options = merge({}, defaultOptions);
      options = merge(options, chartOptions || {});

      if (chart.singleSeriesFormat || "legend" in opts) {
        hideLegend(options, opts.legend, chart.singleSeriesFormat);
      }

      if (opts.title) {
        setTitle(options, opts.title);
      }

      // min
      if ("min" in opts) {
        setMin(options, opts.min);
      } else if (!negativeValues(series)) {
        setMin(options, 0);
      }

      // max
      if (opts.max) {
        setMax(options, opts.max);
      }

      if ("stacked" in opts) {
        setStacked(options, opts.stacked);
      }

      if (opts.colors) {
        options.colors = opts.colors;
      }

      if (opts.xtitle) {
        setXtitle(options, opts.xtitle);
      }

      if (opts.ytitle) {
        setYtitle(options, opts.ytitle);
      }

      // merge library last
      options = merge(options, opts.library || {});

      return options;
    };
  }

  function sortByTime(a, b) {
    return a[0].getTime() - b[0].getTime();
  }

  function sortByNumberSeries(a, b) {
    return a[0] - b[0];
  }

  function sortByNumber(a, b) {
    return a - b;
  }

  function isMinute(d) {
    return d.getMilliseconds() === 0 && d.getSeconds() === 0;
  }

  function isHour(d) {
    return isMinute(d) && d.getMinutes() === 0;
  }

  function isDay(d) {
    return isHour(d) && d.getHours() === 0;
  }

  function isWeek(d, dayOfWeek) {
    return isDay(d) && d.getDay() === dayOfWeek;
  }

  function isMonth(d) {
    return isDay(d) && d.getDate() === 1;
  }

  function isYear(d) {
    return isMonth(d) && d.getMonth() === 0;
  }

  function isDate(obj) {
    return !isNaN(toDate(obj)) && toStr(obj).length >= 6;
  }

  function isNumber(obj) {
    return typeof obj === "number";
  }

  var byteSuffixes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB"];

  function formatValue(pre, value, options, axis) {
    pre = pre || "";
    if (options.prefix) {
      if (value < 0) {
        value = value * -1;
        pre += "-";
      }
      pre += options.prefix;
    }

    var suffix = options.suffix || "";
    var precision = options.precision;
    var round = options.round;

    if (options.byteScale) {
      var suffixIdx;
      var baseValue = axis ? options.byteScale : value;

      if (baseValue >= 1152921504606846976) {
        value /= 1152921504606846976;
        suffixIdx = 6;
      } else if (baseValue >= 1125899906842624) {
        value /= 1125899906842624;
        suffixIdx = 5;
      } else if (baseValue >= 1099511627776) {
        value /= 1099511627776;
        suffixIdx = 4;
      } else if (baseValue >= 1073741824) {
        value /= 1073741824;
        suffixIdx = 3;
      } else if (baseValue >= 1048576) {
        value /= 1048576;
        suffixIdx = 2;
      } else if (baseValue >= 1024) {
        value /= 1024;
        suffixIdx = 1;
      } else {
        suffixIdx = 0;
      }

      // TODO handle manual precision case
      if (precision === undefined && round === undefined) {
        if (value >= 1023.5) {
          if (suffixIdx < byteSuffixes.length - 1) {
            value = 1.0;
            suffixIdx += 1;
          }
        }
        precision = value >= 1000 ? 4 : 3;
      }
      suffix = " " + byteSuffixes[suffixIdx];
    }

    if (precision !== undefined && round !== undefined) {
      throw Error("Use either round or precision, not both");
    }

    if (!axis) {
      if (precision !== undefined) {
        value = value.toPrecision(precision);
        if (!options.zeros) {
          value = parseFloat(value);
        }
      }

      if (round !== undefined) {
        if (round < 0) {
          var num = Math.pow(10, -1 * round);
          value = parseInt((1.0 * value / num).toFixed(0)) * num;
        } else {
          value = value.toFixed(round);
          if (!options.zeros) {
            value = parseFloat(value);
          }
        }
      }
    }

    if (options.thousands || options.decimal) {
      value = toStr(value);
      var parts = value.split(".");
      value = parts[0];
      if (options.thousands) {
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, options.thousands);
      }
      if (parts.length > 1) {
        value += (options.decimal || ".") + parts[1];
      }
    }

    return pre + value + suffix;
  }

  function seriesOption(chart, series, option) {
    if (option in series) {
      return series[option];
    } else if (option in chart.options) {
      return chart.options[option];
    }
    return null;
  }

  function allZeros(data) {
    var i, j, d;
    for (i = 0; i < data.length; i++) {
      d = data[i].data;
      for (j = 0; j < d.length; j++) {
        if (d[j][1] != 0) {
          return false;
        }
      }
    }
    return true;
  }

  var baseOptions = {
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: {},
      tooltip: {
        displayColors: false,
        callbacks: {}
      },
      title: {
        font: {
          size: 20
        },
        color: "#333"
      }
    },
    interaction: {}
  };

  var defaultOptions$2 = {
    scales: {
      y: {
        ticks: {
          maxTicksLimit: 4
        },
        title: {
          font: {
            size: 16
          },
          color: "#333"
        },
        grid: {}
      },
      x: {
        grid: {
          drawOnChartArea: false
        },
        title: {
          font: {
            size: 16
          },
          color: "#333"
        },
        time: {},
        ticks: {}
      }
    }
  };

  // http://there4.io/2012/05/02/google-chart-color-list/
  var defaultColors = [
    "#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC", "#0099C6",
    "#DD4477", "#66AA00", "#B82E2E", "#316395", "#994499", "#22AA99", "#AAAA11",
    "#6633CC", "#E67300", "#8B0707", "#329262", "#5574A6", "#651067"
  ];

  var hideLegend$2 = function (options, legend, hideLegend) {
    if (legend !== undefined) {
      options.plugins.legend.display = !!legend;
      if (legend && legend !== true) {
        options.plugins.legend.position = legend;
      }
    } else if (hideLegend) {
      options.plugins.legend.display = false;
    }
  };

  var setTitle$2 = function (options, title) {
    options.plugins.title.display = true;
    options.plugins.title.text = title;
  };

  var setMin$2 = function (options, min) {
    if (min !== null) {
      options.scales.y.min = toFloat(min);
    }
  };

  var setMax$2 = function (options, max) {
    options.scales.y.max = toFloat(max);
  };

  var setBarMin$1 = function (options, min) {
    if (min !== null) {
      options.scales.x.min = toFloat(min);
    }
  };

  var setBarMax$1 = function (options, max) {
    options.scales.x.max = toFloat(max);
  };

  var setStacked$2 = function (options, stacked) {
    options.scales.x.stacked = !!stacked;
    options.scales.y.stacked = !!stacked;
  };

  var setXtitle$2 = function (options, title) {
    options.scales.x.title.display = true;
    options.scales.x.title.text = title;
  };

  var setYtitle$2 = function (options, title) {
    options.scales.y.title.display = true;
    options.scales.y.title.text = title;
  };

  // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  var addOpacity = function (hex, opacity) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? "rgba(" + parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16) + ", " + opacity + ")" : hex;
  };

  // check if not null or undefined
  // https://stackoverflow.com/a/27757708/1177228
  var notnull = function (x) {
    return x != null;
  };

  var setLabelSize = function (chart, data, options) {
    var maxLabelSize = Math.ceil(chart.element.offsetWidth / 4.0 / data.labels.length);
    if (maxLabelSize > 25) {
      maxLabelSize = 25;
    } else if (maxLabelSize < 10) {
      maxLabelSize = 10;
    }
    if (!options.scales.x.ticks.callback) {
      options.scales.x.ticks.callback = function (value) {
        value = toStr(this.getLabelForValue(value));
        if (value.length > maxLabelSize) {
          return value.substring(0, maxLabelSize - 2) + "...";
        } else {
          return value;
        }
      };
    }
  };

  var setFormatOptions$1 = function (chart, options, chartType) {
    var formatOptions = {
      prefix: chart.options.prefix,
      suffix: chart.options.suffix,
      thousands: chart.options.thousands,
      decimal: chart.options.decimal,
      precision: chart.options.precision,
      round: chart.options.round,
      zeros: chart.options.zeros
    };

    if (chart.options.bytes) {
      var series = chart.data;
      if (chartType === "pie") {
        series = [{data: series}];
      }

      // calculate max
      var max = 0;
      for (var i = 0; i < series.length; i++) {
        var s = series[i];
        for (var j = 0; j < s.data.length; j++) {
          if (s.data[j][1] > max) {
            max = s.data[j][1];
          }
        }
      }

      // calculate scale
      var scale = 1;
      while (max >= 1024) {
        scale *= 1024;
        max /= 1024;
      }

      // set step size
      formatOptions.byteScale = scale;
    }

    if (chartType !== "pie") {
      var axis = options.scales.y;
      if (chartType === "bar") {
        axis = options.scales.x;
      }

      if (formatOptions.byteScale) {
        if (!axis.ticks.stepSize) {
          axis.ticks.stepSize = formatOptions.byteScale / 2;
        }
        if (!axis.ticks.maxTicksLimit) {
          axis.ticks.maxTicksLimit = 4;
        }
      }

      if (!axis.ticks.callback) {
        axis.ticks.callback = function (value) {
          return formatValue("", value, formatOptions, true);
        };
      }
    }

    if (!options.plugins.tooltip.callbacks.label) {
      if (chartType === "scatter") {
        options.plugins.tooltip.callbacks.label = function (context) {
          var label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          return label + '(' + context.label + ', ' + context.formattedValue + ')';
        };
      } else if (chartType === "bubble") {
        options.plugins.tooltip.callbacks.label = function (context) {
          var label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          var dataPoint = context.raw;
          return label + '(' + dataPoint.x + ', ' + dataPoint.y + ', ' + dataPoint.v + ')';
        };
      } else if (chartType === "pie") {
        // need to use separate label for pie charts
        options.plugins.tooltip.callbacks.label = function (context) {
          var dataLabel = context.label;
          var value = ': ';

          if (isArray(dataLabel)) {
            // show value on first line of multiline label
            // need to clone because we are changing the value
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }

          return formatValue(dataLabel, context.parsed, formatOptions);
        };
      } else {
        var valueLabel = chartType === "bar" ? "x" : "y";
        options.plugins.tooltip.callbacks.label = function (context) {
          // don't show null values for stacked charts
          if (context.parsed[valueLabel] === null) {
            return;
          }

          var label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          return formatValue(label, context.parsed[valueLabel], formatOptions);
        };
      }
    }
  };

  var jsOptions$2 = jsOptionsFunc(merge(baseOptions, defaultOptions$2), hideLegend$2, setTitle$2, setMin$2, setMax$2, setStacked$2, setXtitle$2, setYtitle$2);

  var createDataTable = function (chart, options, chartType) {
    var datasets = [];
    var labels = [];

    var colors = chart.options.colors || defaultColors;

    var day = true;
    var week = true;
    var dayOfWeek;
    var month = true;
    var year = true;
    var hour = true;
    var minute = true;

    var series = chart.data;

    var max = 0;
    if (chartType === "bubble") {
      for (var i$1 = 0; i$1 < series.length; i$1++) {
        var s$1 = series[i$1];
        for (var j$1 = 0; j$1 < s$1.data.length; j$1++) {
          if (s$1.data[j$1][2] > max) {
            max = s$1.data[j$1][2];
          }
        }
      }
    }

    var i, j, s, d, key, rows = [], rows2 = [];

    if (chartType === "bar" || chartType === "column" || (chart.xtype !== "number" && chart.xtype !== "bubble")) {
      var sortedLabels = [];

      for (i = 0; i < series.length; i++) {
        s = series[i];

        for (j = 0; j < s.data.length; j++) {
          d = s.data[j];
          key = chart.xtype == "datetime" ? d[0].getTime() : d[0];
          if (!rows[key]) {
            rows[key] = new Array(series.length);
          }
          rows[key][i] = toFloat(d[1]);
          if (sortedLabels.indexOf(key) === -1) {
            sortedLabels.push(key);
          }
        }
      }

      if (chart.xtype === "datetime" || chart.xtype === "number") {
        sortedLabels.sort(sortByNumber);
      }

      for (j = 0; j < series.length; j++) {
        rows2.push([]);
      }

      var value;
      var k;
      for (k = 0; k < sortedLabels.length; k++) {
        i = sortedLabels[k];
        if (chart.xtype === "datetime") {
          value = new Date(toFloat(i));
          // TODO make this efficient
          day = day && isDay(value);
          if (!dayOfWeek) {
            dayOfWeek = value.getDay();
          }
          week = week && isWeek(value, dayOfWeek);
          month = month && isMonth(value);
          year = year && isYear(value);
          hour = hour && isHour(value);
          minute = minute && isMinute(value);
        } else {
          value = i;
        }
        labels.push(value);
        for (j = 0; j < series.length; j++) {
          // Chart.js doesn't like undefined
          rows2[j].push(rows[i][j] === undefined ? null : rows[i][j]);
        }
      }
    } else {
      for (var i$2 = 0; i$2 < series.length; i$2++) {
        var s$2 = series[i$2];
        var d$1 = [];
        for (var j$2 = 0; j$2 < s$2.data.length; j$2++) {
          var point = {
            x: toFloat(s$2.data[j$2][0]),
            y: toFloat(s$2.data[j$2][1])
          };
          if (chartType === "bubble") {
            point.r = toFloat(s$2.data[j$2][2]) * 20 / max;
            // custom attribute, for tooltip
            point.v = s$2.data[j$2][2];
          }
          d$1.push(point);
        }
        rows2.push(d$1);
      }
    }

    var color;
    var backgroundColor;

    for (i = 0; i < series.length; i++) {
      s = series[i];

      // use colors for each bar for single series format
      if (chart.options.colors && chart.singleSeriesFormat && (chartType === "bar" || chartType === "column") && !s.color && isArray(chart.options.colors) && !isArray(chart.options.colors[0])) {
        color = colors;
        backgroundColor = [];
        for (var j$3 = 0; j$3 < colors.length; j$3++) {
          backgroundColor[j$3] = addOpacity(color[j$3], 0.5);
        }
      } else {
        color = s.color || colors[i];
        backgroundColor = chartType !== "line" ? addOpacity(color, 0.5) : color;
      }

      var dataset = {
        label: s.name || "",
        data: rows2[i],
        fill: chartType === "area",
        borderColor: color,
        backgroundColor: backgroundColor,
        borderWidth: 2
      };

      var pointChart = chartType === "line" || chartType === "area" || chartType === "scatter" || chartType === "bubble";
      if (pointChart) {
        dataset.pointBackgroundColor = color;
        dataset.pointHoverBackgroundColor = color;
        dataset.pointHitRadius = 50;
      }

      if (chartType === "bubble") {
        dataset.pointBackgroundColor = backgroundColor;
        dataset.pointHoverBackgroundColor = backgroundColor;
        dataset.pointHoverBorderWidth = 2;
      }

      if (s.stack) {
        dataset.stack = s.stack;
      }

      var curve = seriesOption(chart, s, "curve");
      if (curve === false) {
        dataset.tension = 0;
      } else if (pointChart) {
        dataset.tension = 0.4;
      }

      var points = seriesOption(chart, s, "points");
      if (points === false) {
        dataset.pointRadius = 0;
        dataset.pointHoverRadius = 0;
      }

      dataset = merge(dataset, chart.options.dataset || {});
      dataset = merge(dataset, s.library || {});
      dataset = merge(dataset, s.dataset || {});

      datasets.push(dataset);
    }

    var xmin = chart.options.xmin;
    var xmax = chart.options.xmax;

    if (chart.xtype === "datetime") {
      if (notnull(xmin)) {
        options.scales.x.min = toDate(xmin).getTime();
      }
      if (notnull(xmax)) {
        options.scales.x.max = toDate(xmax).getTime();
      }
    } else if (chart.xtype === "number") {
      if (notnull(xmin)) {
        options.scales.x.min = xmin;
      }
      if (notnull(xmax)) {
        options.scales.x.max = xmax;
      }
    }

    // for empty datetime chart
    if (chart.xtype === "datetime" && labels.length === 0) {
      if (notnull(xmin)) {
        labels.push(toDate(xmin));
      }
      if (notnull(xmax)) {
        labels.push(toDate(xmax));
      }
      day = false;
      week = false;
      month = false;
      year = false;
      hour = false;
      minute = false;
    }

    if (chart.xtype === "datetime" && labels.length > 0) {
      var minTime = (notnull(xmin) ? toDate(xmin) : labels[0]).getTime();
      var maxTime = (notnull(xmax) ? toDate(xmax) : labels[0]).getTime();

      for (i = 1; i < labels.length; i++) {
        var value$1 = labels[i].getTime();
        if (value$1 < minTime) {
          minTime = value$1;
        }
        if (value$1 > maxTime) {
          maxTime = value$1;
        }
      }

      var timeDiff = (maxTime - minTime) / (86400 * 1000.0);

      if (!options.scales.x.time.unit) {
        var step;
        if (year || timeDiff > 365 * 10) {
          options.scales.x.time.unit = "year";
          step = 365;
        } else if (month || timeDiff > 30 * 10) {
          options.scales.x.time.unit = "month";
          step = 30;
        } else if (day || timeDiff > 10) {
          options.scales.x.time.unit = "day";
          step = 1;
        } else if (hour || timeDiff > 0.5) {
          options.scales.x.time.displayFormats = {hour: "MMM d, h a"};
          options.scales.x.time.unit = "hour";
          step = 1 / 24.0;
        } else if (minute) {
          options.scales.x.time.displayFormats = {minute: "h:mm a"};
          options.scales.x.time.unit = "minute";
          step = 1 / 24.0 / 60.0;
        }

        if (step && timeDiff > 0) {
          // width not available for hidden elements
          var width = chart.element.offsetWidth;
          if (width > 0) {
            var unitStepSize = Math.ceil(timeDiff / step / (width / 100.0));
            if (week && step === 1) {
              unitStepSize = Math.ceil(unitStepSize / 7.0) * 7;
            }
            options.scales.x.time.stepSize = unitStepSize;
          }
        }
      }

      if (!options.scales.x.time.tooltipFormat) {
        if (day) {
          options.scales.x.time.tooltipFormat = "PP";
        } else if (hour) {
          options.scales.x.time.tooltipFormat = "MMM d, h a";
        } else if (minute) {
          options.scales.x.time.tooltipFormat = "h:mm a";
        }
      }
    }

    var data = {
      labels: labels,
      datasets: datasets
    };

    return data;
  };

  var defaultExport$2 = function defaultExport(library) {
    this.name = "chartjs";
    this.library = library;
  };

  defaultExport$2.prototype.renderLineChart = function renderLineChart (chart, chartType) {
    var chartOptions = {};
    // fix for https://github.com/chartjs/Chart.js/issues/2441
    if (!chart.options.max && allZeros(chart.data)) {
      chartOptions.max = 1;
    }

    var options = jsOptions$2(chart, merge(chartOptions, chart.options));
    setFormatOptions$1(chart, options, chartType);

    var data = createDataTable(chart, options, chartType || "line");

    if (chart.xtype === "number") {
      options.scales.x.type = options.scales.x.type || "linear";
      options.scales.x.position = options.scales.x.position ||"bottom";
    } else {
      options.scales.x.type = chart.xtype === "string" ? "category" : "time";
    }

    this.drawChart(chart, "line", data, options);
  };

  defaultExport$2.prototype.renderPieChart = function renderPieChart (chart) {
    var options = merge({}, baseOptions);
    if (chart.options.donut) {
      options.cutout = "50%";
    }

    if ("legend" in chart.options) {
      hideLegend$2(options, chart.options.legend);
    }

    if (chart.options.title) {
      setTitle$2(options, chart.options.title);
    }

    options = merge(options, chart.options.library || {});
    setFormatOptions$1(chart, options, "pie");

    var labels = [];
    var values = [];
    for (var i = 0; i < chart.data.length; i++) {
      var point = chart.data[i];
      labels.push(point[0]);
      values.push(point[1]);
    }

    var dataset = {
      data: values,
      backgroundColor: chart.options.colors || defaultColors
    };
    dataset = merge(dataset, chart.options.dataset || {});

    var data = {
      labels: labels,
      datasets: [dataset]
    };

    this.drawChart(chart, "pie", data, options);
  };

  defaultExport$2.prototype.renderColumnChart = function renderColumnChart (chart, chartType) {
    var options;
    if (chartType === "bar") {
      var barOptions = merge(baseOptions, defaultOptions$2);
      barOptions.indexAxis = "y";

      // ensure gridlines have proper orientation
      barOptions.scales.x.grid.drawOnChartArea = true;
      barOptions.scales.y.grid.drawOnChartArea = false;
      delete barOptions.scales.y.ticks.maxTicksLimit;

      options = jsOptionsFunc(barOptions, hideLegend$2, setTitle$2, setBarMin$1, setBarMax$1, setStacked$2, setXtitle$2, setYtitle$2)(chart, chart.options);
    } else {
      options = jsOptions$2(chart, chart.options);
    }
    setFormatOptions$1(chart, options, chartType);
    var data = createDataTable(chart, options, "column");
    if (chartType !== "bar") {
      setLabelSize(chart, data, options);
    }
    this.drawChart(chart, "bar", data, options);
  };

  defaultExport$2.prototype.renderAreaChart = function renderAreaChart (chart) {
    this.renderLineChart(chart, "area");
  };

  defaultExport$2.prototype.renderBarChart = function renderBarChart (chart) {
    this.renderColumnChart(chart, "bar");
  };

  defaultExport$2.prototype.renderScatterChart = function renderScatterChart (chart, chartType) {
    chartType = chartType || "scatter";

    var options = jsOptions$2(chart, chart.options);
    setFormatOptions$1(chart, options, chartType);

    if (!("showLine" in options)) {
      options.showLine = false;
    }

    var data = createDataTable(chart, options, chartType);

    options.scales.x.type = options.scales.x.type || "linear";
    options.scales.x.position = options.scales.x.position || "bottom";

    // prevent grouping hover and tooltips
    if (!("mode" in options.interaction)) {
      options.interaction.mode = "nearest";
    }

    this.drawChart(chart, chartType, data, options);
  };

  defaultExport$2.prototype.renderBubbleChart = function renderBubbleChart (chart) {
    this.renderScatterChart(chart, "bubble");
  };

  defaultExport$2.prototype.destroy = function destroy (chart) {
    if (chart.chart) {
      chart.chart.destroy();
    }
  };

  defaultExport$2.prototype.drawChart = function drawChart (chart, type, data, options) {
    this.destroy(chart);
    if (chart.destroyed) { return; }

    var chartOptions = {
      type: type,
      data: data,
      options: options
    };

    if (chart.options.code) {
      window.console.log("new Chart(ctx, " + JSON.stringify(chartOptions) + ");");
    }

    chart.element.innerHTML = "<canvas></canvas>";
    var ctx = chart.element.getElementsByTagName("CANVAS")[0];
    chart.chart = new this.library(ctx, chartOptions);
  };

  var defaultOptions$1 = {
    chart: {},
    xAxis: {
      title: {
        text: null
      },
      labels: {
        style: {
          fontSize: "12px"
        }
      }
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        style: {
          fontSize: "12px"
        }
      }
    },
    title: {
      text: null
    },
    credits: {
      enabled: false
    },
    legend: {
      borderWidth: 0
    },
    tooltip: {
      style: {
        fontSize: "12px"
      }
    },
    plotOptions: {
      areaspline: {},
      area: {},
      series: {
        marker: {}
      }
    },
    time: {
      useUTC: false
    }
  };

  var hideLegend$1 = function (options, legend, hideLegend) {
    if (legend !== undefined) {
      options.legend.enabled = !!legend;
      if (legend && legend !== true) {
        if (legend === "top" || legend === "bottom") {
          options.legend.verticalAlign = legend;
        } else {
          options.legend.layout = "vertical";
          options.legend.verticalAlign = "middle";
          options.legend.align = legend;
        }
      }
    } else if (hideLegend) {
      options.legend.enabled = false;
    }
  };

  var setTitle$1 = function (options, title) {
    options.title.text = title;
  };

  var setMin$1 = function (options, min) {
    options.yAxis.min = min;
  };

  var setMax$1 = function (options, max) {
    options.yAxis.max = max;
  };

  var setStacked$1 = function (options, stacked) {
    var stackedValue = stacked ? (stacked === true ? "normal" : stacked) : null;
    options.plotOptions.series.stacking = stackedValue;
    options.plotOptions.area.stacking = stackedValue;
    options.plotOptions.areaspline.stacking = stackedValue;
  };

  var setXtitle$1 = function (options, title) {
    options.xAxis.title.text = title;
  };

  var setYtitle$1 = function (options, title) {
    options.yAxis.title.text = title;
  };

  var jsOptions$1 = jsOptionsFunc(defaultOptions$1, hideLegend$1, setTitle$1, setMin$1, setMax$1, setStacked$1, setXtitle$1, setYtitle$1);

  var setFormatOptions = function(chart, options, chartType) {
    var formatOptions = {
      prefix: chart.options.prefix,
      suffix: chart.options.suffix,
      thousands: chart.options.thousands,
      decimal: chart.options.decimal,
      precision: chart.options.precision,
      round: chart.options.round,
      zeros: chart.options.zeros
    };

    // skip when axis is an array (like with min/max)
    if (chartType !== "pie" && !isArray(options.yAxis) && !options.yAxis.labels.formatter) {
      options.yAxis.labels.formatter = function () {
        return formatValue("", this.value, formatOptions);
      };
    }

    if (!options.tooltip.pointFormatter && !options.tooltip.pointFormat) {
      options.tooltip.pointFormatter = function () {
        return '<span style="color:' + this.color + '">\u25CF</span> ' + formatValue(this.series.name + ': <b>', this.y, formatOptions) + '</b><br/>';
      };
    }
  };

  var defaultExport$1 = function defaultExport(library) {
    this.name = "highcharts";
    this.library = library;
  };

  defaultExport$1.prototype.renderLineChart = function renderLineChart (chart, chartType) {
    chartType = chartType || "spline";
    var chartOptions = {};
    if (chartType === "areaspline") {
      chartOptions = {
        plotOptions: {
          areaspline: {
            stacking: "normal"
          },
          area: {
            stacking: "normal"
          },
          series: {
            marker: {
              enabled: false
            }
          }
        }
      };
    }

    if (chart.options.curve === false) {
      if (chartType === "areaspline") {
        chartType = "area";
      } else if (chartType === "spline") {
        chartType = "line";
      }
    }

    var options = jsOptions$1(chart, chart.options, chartOptions), data, i, j;
    if (chart.xtype === "number") {
      options.xAxis.type = options.xAxis.type || "linear";
    } else {
      options.xAxis.type = chart.xtype === "string" ? "category" : "datetime";
    }
    if (!options.chart.type) {
      options.chart.type = chartType;
    }
    setFormatOptions(chart, options, chartType);

    var series = chart.data;
    for (i = 0; i < series.length; i++) {
      series[i].name = series[i].name || "Value";
      data = series[i].data;
      if (chart.xtype === "datetime") {
        for (j = 0; j < data.length; j++) {
          data[j][0] = data[j][0].getTime();
        }
      }
      series[i].marker = {symbol: "circle"};
      if (chart.options.points === false) {
        series[i].marker.enabled = false;
      }
    }

    this.drawChart(chart, series, options);
  };

  defaultExport$1.prototype.renderScatterChart = function renderScatterChart (chart) {
    var options = jsOptions$1(chart, chart.options, {});
    options.chart.type = "scatter";
    this.drawChart(chart, chart.data, options);
  };

  defaultExport$1.prototype.renderPieChart = function renderPieChart (chart) {
    var chartOptions = merge(defaultOptions$1, {});

    if (chart.options.colors) {
      chartOptions.colors = chart.options.colors;
    }
    if (chart.options.donut) {
      chartOptions.plotOptions = {pie: {innerSize: "50%"}};
    }

    if ("legend" in chart.options) {
      hideLegend$1(chartOptions, chart.options.legend);
    }

    if (chart.options.title) {
      setTitle$1(chartOptions, chart.options.title);
    }

    var options = merge(chartOptions, chart.options.library || {});
    setFormatOptions(chart, options, "pie");
    var series = [{
      type: "pie",
      name: chart.options.label || "Value",
      data: chart.data
    }];

    this.drawChart(chart, series, options);
  };

  defaultExport$1.prototype.renderColumnChart = function renderColumnChart (chart, chartType) {
    chartType = chartType || "column";
    var series = chart.data;
    var options = jsOptions$1(chart, chart.options), i, j, s, d, rows = [], categories = [];
    options.chart.type = chartType;
    setFormatOptions(chart, options, chartType);

    for (i = 0; i < series.length; i++) {
      s = series[i];

      for (j = 0; j < s.data.length; j++) {
        d = s.data[j];
        if (!rows[d[0]]) {
          rows[d[0]] = new Array(series.length);
          categories.push(d[0]);
        }
        rows[d[0]][i] = d[1];
      }
    }

    if (chart.xtype === "number") {
      categories.sort(sortByNumber);
    }

    options.xAxis.categories = categories;

    var newSeries = [], d2;
    for (i = 0; i < series.length; i++) {
      d = [];
      for (j = 0; j < categories.length; j++) {
        d.push(rows[categories[j]][i] || 0);
      }

      d2 = {
        name: series[i].name || "Value",
        data: d
      };
      if (series[i].stack) {
        d2.stack = series[i].stack;
      }

      newSeries.push(d2);
    }

    this.drawChart(chart, newSeries, options);
  };

  defaultExport$1.prototype.renderBarChart = function renderBarChart (chart) {
    this.renderColumnChart(chart, "bar");
  };

  defaultExport$1.prototype.renderAreaChart = function renderAreaChart (chart) {
    this.renderLineChart(chart, "areaspline");
  };

  defaultExport$1.prototype.destroy = function destroy (chart) {
    if (chart.chart) {
      chart.chart.destroy();
    }
  };

  defaultExport$1.prototype.drawChart = function drawChart (chart, data, options) {
    this.destroy(chart);
    if (chart.destroyed) { return; }

    options.chart.renderTo = chart.element.id;
    options.series = data;

    if (chart.options.code) {
      window.console.log("new Highcharts.Chart(" + JSON.stringify(options) + ");");
    }

    chart.chart = new this.library.Chart(options);
  };

  var loaded = {};
  var callbacks = [];

  // Set chart options
  var defaultOptions = {
    chartArea: {},
    fontName: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",
    pointSize: 6,
    legend: {
      textStyle: {
        fontSize: 12,
        color: "#444"
      },
      alignment: "center",
      position: "right"
    },
    curveType: "function",
    hAxis: {
      textStyle: {
        color: "#666",
        fontSize: 12
      },
      titleTextStyle: {},
      gridlines: {
        color: "transparent"
      },
      baselineColor: "#ccc",
      viewWindow: {}
    },
    vAxis: {
      textStyle: {
        color: "#666",
        fontSize: 12
      },
      titleTextStyle: {},
      baselineColor: "#ccc",
      viewWindow: {}
    },
    tooltip: {
      textStyle: {
        color: "#666",
        fontSize: 12
      }
    }
  };

  var hideLegend = function (options, legend, hideLegend) {
    if (legend !== undefined) {
      var position;
      if (!legend) {
        position = "none";
      } else if (legend === true) {
        position = "right";
      } else {
        position = legend;
      }
      options.legend.position = position;
    } else if (hideLegend) {
      options.legend.position = "none";
    }
  };

  var setTitle = function (options, title) {
    options.title = title;
    options.titleTextStyle = {color: "#333", fontSize: "20px"};
  };

  var setMin = function (options, min) {
    options.vAxis.viewWindow.min = min;
  };

  var setMax = function (options, max) {
    options.vAxis.viewWindow.max = max;
  };

  var setBarMin = function (options, min) {
    options.hAxis.viewWindow.min = min;
  };

  var setBarMax = function (options, max) {
    options.hAxis.viewWindow.max = max;
  };

  var setStacked = function (options, stacked) {
    options.isStacked = stacked ? stacked : false;
  };

  var setXtitle = function (options, title) {
    options.hAxis.title = title;
    options.hAxis.titleTextStyle.italic = false;
  };

  var setYtitle = function (options, title) {
    options.vAxis.title = title;
    options.vAxis.titleTextStyle.italic = false;
  };

  var jsOptions = jsOptionsFunc(defaultOptions, hideLegend, setTitle, setMin, setMax, setStacked, setXtitle, setYtitle);

  var resize = function (callback) {
    if (window.attachEvent) {
      window.attachEvent("onresize", callback);
    } else if (window.addEventListener) {
      window.addEventListener("resize", callback, true);
    }
    callback();
  };

  var defaultExport = function defaultExport(library) {
    this.name = "google";
    this.library = library;
  };

  defaultExport.prototype.renderLineChart = function renderLineChart (chart) {
      var this$1$1 = this;

    this.waitForLoaded(chart, function () {
      var chartOptions = {};

      if (chart.options.curve === false) {
        chartOptions.curveType = "none";
      }

      if (chart.options.points === false) {
        chartOptions.pointSize = 0;
      }

      var options = jsOptions(chart, chart.options, chartOptions);
      var data = this$1$1.createDataTable(chart.data, chart.xtype);

      this$1$1.drawChart(chart, "LineChart", data, options);
    });
  };

  defaultExport.prototype.renderPieChart = function renderPieChart (chart) {
      var this$1$1 = this;

    this.waitForLoaded(chart, function () {
      var chartOptions = {
        chartArea: {
          top: "10%",
          height: "80%"
        },
        legend: {}
      };
      if (chart.options.colors) {
        chartOptions.colors = chart.options.colors;
      }
      if (chart.options.donut) {
        chartOptions.pieHole = 0.5;
      }
      if ("legend" in chart.options) {
        hideLegend(chartOptions, chart.options.legend);
      }
      if (chart.options.title) {
        setTitle(chartOptions, chart.options.title);
      }
      var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});

      var data = new this$1$1.library.visualization.DataTable();
      data.addColumn("string", "");
      data.addColumn("number", "Value");
      data.addRows(chart.data);

      this$1$1.drawChart(chart, "PieChart", data, options);
    });
  };

  defaultExport.prototype.renderColumnChart = function renderColumnChart (chart) {
      var this$1$1 = this;

    this.waitForLoaded(chart, function () {
      var options = jsOptions(chart, chart.options);
      var data = this$1$1.createDataTable(chart.data, chart.xtype);

      this$1$1.drawChart(chart, "ColumnChart", data, options);
    });
  };

  defaultExport.prototype.renderBarChart = function renderBarChart (chart) {
      var this$1$1 = this;

    this.waitForLoaded(chart, function () {
      var chartOptions = {
        hAxis: {
          gridlines: {
            color: "#ccc"
          }
        }
      };
      var options = jsOptionsFunc(defaultOptions, hideLegend, setTitle, setBarMin, setBarMax, setStacked, setXtitle, setYtitle)(chart, chart.options, chartOptions);
      var data = this$1$1.createDataTable(chart.data, chart.xtype);

      this$1$1.drawChart(chart, "BarChart", data, options);
    });
  };

  defaultExport.prototype.renderAreaChart = function renderAreaChart (chart) {
      var this$1$1 = this;

    this.waitForLoaded(chart, function () {
      var chartOptions = {
        isStacked: true,
        pointSize: 0,
        areaOpacity: 0.5
      };

      var options = jsOptions(chart, chart.options, chartOptions);
      var data = this$1$1.createDataTable(chart.data, chart.xtype);

      this$1$1.drawChart(chart, "AreaChart", data, options);
    });
  };

  defaultExport.prototype.renderGeoChart = function renderGeoChart (chart) {
      var this$1$1 = this;

    this.waitForLoaded(chart, "geochart", function () {
      var chartOptions = {
        legend: "none",
        colorAxis: {
          colors: chart.options.colors || ["#f6c7b6", "#ce502d"]
        }
      };
      var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});

      var data = new this$1$1.library.visualization.DataTable();
      data.addColumn("string", "");
      data.addColumn("number", chart.options.label || "Value");
      data.addRows(chart.data);

      this$1$1.drawChart(chart, "GeoChart", data, options);
    });
  };

  defaultExport.prototype.renderScatterChart = function renderScatterChart (chart) {
      var this$1$1 = this;

    this.waitForLoaded(chart, function () {
      var chartOptions = {};
      var options = jsOptions(chart, chart.options, chartOptions);

      var series = chart.data, rows2 = [], i, j, data, d;
      for (i = 0; i < series.length; i++) {
        series[i].name = series[i].name || "Value";
        d = series[i].data;
        for (j = 0; j < d.length; j++) {
          var row = new Array(series.length + 1);
          row[0] = d[j][0];
          row[i + 1] = d[j][1];
          rows2.push(row);
        }
      }

      data = new this$1$1.library.visualization.DataTable();
      data.addColumn("number", "");
      for (i = 0; i < series.length; i++) {
        data.addColumn("number", series[i].name);
      }
      data.addRows(rows2);

      this$1$1.drawChart(chart, "ScatterChart", data, options);
    });
  };

  defaultExport.prototype.renderTimeline = function renderTimeline (chart) {
      var this$1$1 = this;

    this.waitForLoaded(chart, "timeline", function () {
      var chartOptions = {
        legend: "none"
      };

      if (chart.options.colors) {
        chartOptions.colors = chart.options.colors;
      }
      var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});

      var data = new this$1$1.library.visualization.DataTable();
      data.addColumn({type: "string", id: "Name"});
      data.addColumn({type: "date", id: "Start"});
      data.addColumn({type: "date", id: "End"});
      data.addRows(chart.data);

      chart.element.style.lineHeight = "normal";

      this$1$1.drawChart(chart, "Timeline", data, options);
    });
  };

  // TODO remove resize events
  defaultExport.prototype.destroy = function destroy (chart) {
    if (chart.chart) {
      chart.chart.clearChart();
    }
  };

  defaultExport.prototype.drawChart = function drawChart (chart, type, data, options) {
    this.destroy(chart);
    if (chart.destroyed) { return; }

    if (chart.options.code) {
      window.console.log("var data = new google.visualization.DataTable(" + data.toJSON() + ");\nvar chart = new google.visualization." + type + "(element);\nchart.draw(data, " + JSON.stringify(options) + ");");
    }

    chart.chart = new this.library.visualization[type](chart.element);
    resize(function () {
      chart.chart.draw(data, options);
    });
  };

  defaultExport.prototype.waitForLoaded = function waitForLoaded (chart, pack, callback) {
      var this$1$1 = this;

    if (!callback) {
      callback = pack;
      pack = "corechart";
    }

    callbacks.push({pack: pack, callback: callback});

    if (loaded[pack]) {
      this.runCallbacks();
    } else {
      loaded[pack] = true;

      // https://groups.google.com/forum/#!topic/google-visualization-api/fMKJcyA2yyI
      var loadOptions = {
        packages: [pack],
        callback: function () { this$1$1.runCallbacks(); }
      };
      var config = chart.__config();
      if (config.language) {
        loadOptions.language = config.language;
      }
      if (pack === "geochart" && config.mapsApiKey) {
        loadOptions.mapsApiKey = config.mapsApiKey;
      }

      this.library.charts.load("current", loadOptions);
    }
  };

  defaultExport.prototype.runCallbacks = function runCallbacks () {
    var cb, call;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      call = this.library.visualization && ((cb.pack === "corechart" && this.library.visualization.LineChart) || (cb.pack === "timeline" && this.library.visualization.Timeline) || (cb.pack === "geochart" && this.library.visualization.GeoChart));
      if (call) {
        cb.callback();
        callbacks.splice(i, 1);
        i--;
      }
    }
  };

  // cant use object as key
  defaultExport.prototype.createDataTable = function createDataTable (series, columnType) {
    var i, j, s, d, key, rows = [], sortedLabels = [];
    for (i = 0; i < series.length; i++) {
      s = series[i];
      series[i].name = series[i].name || "Value";

      for (j = 0; j < s.data.length; j++) {
        d = s.data[j];
        key = (columnType === "datetime") ? d[0].getTime() : d[0];
        if (!rows[key]) {
          rows[key] = new Array(series.length);
          sortedLabels.push(key);
        }
        rows[key][i] = toFloat(d[1]);
      }
    }

    var rows2 = [];
    var day = true;
    var value;
    for (j = 0; j < sortedLabels.length; j++) {
      i = sortedLabels[j];
      if (columnType === "datetime") {
        value = new Date(toFloat(i));
        day = day && isDay(value);
      } else if (columnType === "number") {
        value = toFloat(i);
      } else {
        value = i;
      }
      rows2.push([value].concat(rows[i]));
    }
    if (columnType === "datetime") {
      rows2.sort(sortByTime);
    } else if (columnType === "number") {
      rows2.sort(sortByNumberSeries);

      for (i = 0; i < rows2.length; i++) {
        rows2[i][0] = toStr(rows2[i][0]);
      }

      columnType = "string";
    }

    // create datatable
    var data = new this.library.visualization.DataTable();
    columnType = columnType === "datetime" && day ? "date" : columnType;
    data.addColumn(columnType, "");
    for (i = 0; i < series.length; i++) {
      data.addColumn("number", series[i].name);
    }
    data.addRows(rows2);

    return data;
  };

  function formatSeriesData(data, keyType) {
    var r = [], j, keyFunc;

    if (keyType === "number") {
      keyFunc = toFloat;
    } else if (keyType === "datetime") {
      keyFunc = toDate;
    } else {
      keyFunc = toStr;
    }

    if (keyType === "bubble") {
      for (j = 0; j < data.length; j++) {
        r.push([toFloat(data[j][0]), toFloat(data[j][1]), toFloat(data[j][2])]);
      }
    } else {
      for (j = 0; j < data.length; j++) {
        r.push([keyFunc(data[j][0]), toFloat(data[j][1])]);
      }
    }

    if (keyType === "datetime") {
      r.sort(sortByTime);
    } else if (keyType === "number") {
      r.sort(sortByNumberSeries);
    }

    return r;
  }

  function detectXType(series, noDatetime, options) {
    if (dataEmpty(series)) {
      if ((options.xmin || options.xmax) && (!options.xmin || isDate(options.xmin)) && (!options.xmax || isDate(options.xmax))) {
        return "datetime";
      } else {
        return "number";
      }
    } else if (detectXTypeWithFunction(series, isNumber)) {
      return "number";
    } else if (!noDatetime && detectXTypeWithFunction(series, isDate)) {
      return "datetime";
    } else {
      return "string";
    }
  }

  function detectXTypeWithFunction(series, func) {
    var i, j, data;
    for (i = 0; i < series.length; i++) {
      data = toArr(series[i].data);
      for (j = 0; j < data.length; j++) {
        if (!func(data[j][0])) {
          return false;
        }
      }
    }
    return true;
  }

  // creates a shallow copy of each element of the array
  // elements are expected to be objects
  function copySeries(series) {
    var newSeries = [], i, j;
    for (i = 0; i < series.length; i++) {
      var copy = {};
      for (j in series[i]) {
        if (series[i].hasOwnProperty(j)) {
          copy[j] = series[i][j];
        }
      }
      newSeries.push(copy);
    }
    return newSeries;
  }

  function processSeries(chart, keyType, noDatetime) {
    var i;

    var opts = chart.options;
    var series = chart.rawData;

    // see if one series or multiple
    chart.singleSeriesFormat = (!isArray(series) || typeof series[0] !== "object" || isArray(series[0]));
    if (chart.singleSeriesFormat) {
      series = [{name: opts.label, data: series}];
    }

    // convert to array
    // must come before dataEmpty check
    series = copySeries(series);
    for (i = 0; i < series.length; i++) {
      series[i].data = toArr(series[i].data);
    }

    chart.xtype = keyType ? keyType : (opts.discrete ? "string" : detectXType(series, noDatetime, opts));

    // right format
    for (i = 0; i < series.length; i++) {
      series[i].data = formatSeriesData(series[i].data, chart.xtype);
    }

    return series;
  }

  function processSimple(chart) {
    var perfectData = toArr(chart.rawData), i;
    for (i = 0; i < perfectData.length; i++) {
      perfectData[i] = [toStr(perfectData[i][0]), toFloat(perfectData[i][1])];
    }
    return perfectData;
  }

  function dataEmpty(data, chartType) {
    if (chartType === "PieChart" || chartType === "GeoChart" || chartType === "Timeline") {
      return data.length === 0;
    } else {
      for (var i = 0; i < data.length; i++) {
        if (data[i].data.length > 0) {
          return false;
        }
      }
      return true;
    }
  }

  function addDownloadButton(chart) {
    var element = chart.element;
    var link = document.createElement("a");

    var download = chart.options.download;
    if (download === true) {
      download = {};
    } else if (typeof download === "string") {
      download = {filename: download};
    }
    link.download = download.filename || "chart.png"; // https://caniuse.com/download

    link.style.position = "absolute";
    link.style.top = "20px";
    link.style.right = "20px";
    link.style.zIndex = 1000;
    link.style.lineHeight = "20px";
    link.target = "_blank"; // for safari
    var image = document.createElement("img");
    image.alt = "Download";
    image.style.border = "none";
    // icon from font-awesome
    // http://fa2png.io/
    image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABCFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMywEsqxAAAAV3RSTlMAAQIDBggJCgsMDQ4PERQaHB0eISIjJCouLzE0OTo/QUJHSUpLTU5PUllhYmltcHh5foWLjI+SlaCio6atr7S1t7m6vsHHyM7R2tze5Obo7fHz9ff5+/1hlxK2AAAA30lEQVQYGUXBhVYCQQBA0TdYWAt2d3d3YWAHyur7/z9xgD16Lw0DW+XKx+1GgX+FRzM3HWQWrHl5N/oapW5RPe0PkBu+UYeICvozTWZVK23Ao04B79oJrOsJDOoxkZoQPWgX29pHpCZEk7rEvQYiNSFq1UMqvlCjJkRBS1R8hb00Vb/TajtBL7nTHE1X1vyMQF732dQhyF2o6SAwrzP06iUQzvwsArlnzcOdrgBhJyHa1QOgO9U1GsKuvjUTjavliZYQ8nNPapG6sap/3nrIdJ6bOWzmX/fy0XVpfzZP3S8OJT3g9EEiJwAAAABJRU5ErkJggg==";
    link.appendChild(image);
    element.style.position = "relative";

    chart.__downloadAttached = true;

    // mouseenter
    chart.__enterEvent = addEvent(element, "mouseover", function(e) {
      var related = e.relatedTarget;
      // check download option again to ensure it wasn't changed
      if ((!related || (related !== this && !childOf(this, related))) && chart.options.download) {
        link.href = chart.toImage(download);
        element.appendChild(link);
      }
    });

    // mouseleave
    chart.__leaveEvent = addEvent(element, "mouseout", function(e) {
      var related = e.relatedTarget;
      if (!related || (related !== this && !childOf(this, related))) {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      }
    });
  }

  // https://stackoverflow.com/questions/10149963/adding-event-listener-cross-browser
  function addEvent(elem, event, fn) {
    if (elem.addEventListener) {
      elem.addEventListener(event, fn, false);
      return fn;
    } else {
      var fn2 = function() {
        // set the this pointer same as addEventListener when fn is called
        return(fn.call(elem, window.event));
      };
      elem.attachEvent("on" + event, fn2);
      return fn2;
    }
  }

  function removeEvent(elem, event, fn) {
    if (elem.removeEventListener) {
      elem.removeEventListener(event, fn, false);
    } else {
      elem.detachEvent("on" + event, fn);
    }
  }

  // https://gist.github.com/shawnbot/4166283
  function childOf(p, c) {
    if (p === c) { return false; }
    while (c && c !== p) { c = c.parentNode; }
    return c === p;
  }

  var pendingRequests = [], runningRequests = 0, maxRequests = 4;

  function pushRequest(url, success, error) {
    pendingRequests.push([url, success, error]);
    runNext();
  }

  function runNext() {
    if (runningRequests < maxRequests) {
      var request = pendingRequests.shift();
      if (request) {
        runningRequests++;
        getJSON(request[0], request[1], request[2]);
        runNext();
      }
    }
  }

  function requestComplete() {
    runningRequests--;
    runNext();
  }

  function getJSON(url, success, error) {
    ajaxCall(url, success, function (jqXHR, textStatus, errorThrown) {
      var message = (typeof errorThrown === "string") ? errorThrown : errorThrown.message;
      error(message);
    });
  }

  function ajaxCall(url, success, error) {
    var $ = window.jQuery || window.Zepto || window.$;

    if ($ && $.ajax) {
      $.ajax({
        dataType: "json",
        url: url,
        success: success,
        error: error,
        complete: requestComplete
      });
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function () {
        requestComplete();
        if (xhr.status === 200) {
          success(JSON.parse(xhr.responseText), xhr.statusText, xhr);
        } else {
          error(xhr, "error", xhr.statusText);
        }
      };
      xhr.send();
    }
  }

  var config = {};
  var adapters = [];

  // helpers

  function setText(element, text) {
    if (document.body.innerText) {
      element.innerText = text;
    } else {
      element.textContent = text;
    }
  }

  // TODO remove prefix for all messages
  function chartError(element, message, noPrefix) {
    if (!noPrefix) {
      message = "Error Loading Chart: " + message;
    }
    setText(element, message);
    element.style.color = "#ff0000";
  }

  function errorCatcher(chart) {
    try {
      chart.__render();
    } catch (err) {
      chartError(chart.element, err.message);
      throw err;
    }
  }

  function fetchDataSource(chart, dataSource, showLoading) {
    // only show loading message for urls and callbacks
    if (showLoading && chart.options.loading && (typeof dataSource === "string" || typeof dataSource === "function")) {
      setText(chart.element, chart.options.loading);
    }

    if (typeof dataSource === "string") {
      pushRequest(dataSource, function (data) {
        chart.rawData = data;
        errorCatcher(chart);
      }, function (message) {
        chartError(chart.element, message);
      });
    } else if (typeof dataSource === "function") {
      try {
        dataSource(function (data) {
          chart.rawData = data;
          errorCatcher(chart);
        }, function (message) {
          chartError(chart.element, message, true);
        });
      } catch (err) {
        chartError(chart.element, err, true);
      }
    } else {
      chart.rawData = dataSource;
      errorCatcher(chart);
    }
  }

  function getAdapterType(library) {
    if (library) {
      if (library.product === "Highcharts") {
        return defaultExport$1;
      } else if (library.charts) {
        return defaultExport;
      } else if (isFunction(library)) {
        return defaultExport$2;
      }
    }
    throw new Error("Unknown adapter");
  }

  function addAdapter(library) {
    var adapterType = getAdapterType(library);
    var adapter = new adapterType(library);

    if (adapters.indexOf(adapter) === -1) {
      adapters.push(adapter);
    }
  }

  function loadAdapters() {
    if ("Chart" in window) {
      addAdapter(window.Chart);
    }

    if ("Highcharts" in window) {
      addAdapter(window.Highcharts);
    }

    if (window.google && window.google.charts) {
      addAdapter(window.google);
    }
  }

  function renderChart(chartType, chart) {
    if (dataEmpty(chart.data, chartType)) {
      var message = chart.options.empty || (chart.options.messages && chart.options.messages.empty) || "No data";
      setText(chart.element, message);
    } else {
      callAdapter(chartType, chart);
      if (chart.options.download && !chart.__downloadAttached && chart.adapter === "chartjs") {
        addDownloadButton(chart);
      }
    }
  }

  // TODO remove chartType if cross-browser way
  // to get the name of the chart class
  function callAdapter(chartType, chart) {
    var i, adapter, fnName, adapterName;
    fnName = "render" + chartType;
    adapterName = chart.options.adapter;

    loadAdapters();

    for (i = 0; i < adapters.length; i++) {
      adapter = adapters[i];
      if ((!adapterName || adapterName === adapter.name) && isFunction(adapter[fnName])) {
        chart.adapter = adapter.name;
        chart.__adapterObject = adapter;
        return adapter[fnName](chart);
      }
    }

    if (adapters.length > 0) {
      throw new Error("No charting library found for " + chartType);
    } else {
      throw new Error("No charting libraries found - be sure to include one before your charts");
    }
  }

  // define classes

  var Chart = function Chart(element, dataSource, options) {
    var elementId;
    if (typeof element === "string") {
      elementId = element;
      element = document.getElementById(element);
      if (!element) {
        throw new Error("No element with id " + elementId);
      }
    }
    this.element = element;
    this.options = merge(Chartkick.options, options || {});
    this.dataSource = dataSource;

    Chartkick.charts[element.id] = this;

    fetchDataSource(this, dataSource, true);

    if (this.options.refresh) {
      this.startRefresh();
    }
  };

  Chart.prototype.getElement = function getElement () {
    return this.element;
  };

  Chart.prototype.getDataSource = function getDataSource () {
    return this.dataSource;
  };

  Chart.prototype.getData = function getData () {
    return this.data;
  };

  Chart.prototype.getOptions = function getOptions () {
    return this.options;
  };

  Chart.prototype.getChartObject = function getChartObject () {
    return this.chart;
  };

  Chart.prototype.getAdapter = function getAdapter () {
    return this.adapter;
  };

  Chart.prototype.updateData = function updateData (dataSource, options) {
    this.dataSource = dataSource;
    if (options) {
      this.__updateOptions(options);
    }
    fetchDataSource(this, dataSource, true);
  };

  Chart.prototype.setOptions = function setOptions (options) {
    this.__updateOptions(options);
    this.redraw();
  };

  Chart.prototype.redraw = function redraw () {
    fetchDataSource(this, this.rawData);
  };

  Chart.prototype.refreshData = function refreshData () {
    if (typeof this.dataSource === "string") {
      // prevent browser from caching
      var sep = this.dataSource.indexOf("?") === -1 ? "?" : "&";
      var url = this.dataSource + sep + "_=" + (new Date()).getTime();
      fetchDataSource(this, url);
    } else if (typeof this.dataSource === "function") {
      fetchDataSource(this, this.dataSource);
    }
  };

  Chart.prototype.startRefresh = function startRefresh () {
      var this$1$1 = this;

    var refresh = this.options.refresh;

    if (refresh && typeof this.dataSource !== "string" && typeof this.dataSource !== "function") {
      throw new Error("Data source must be a URL or callback for refresh");
    }

    if (!this.intervalId) {
      if (refresh) {
        this.intervalId = setInterval( function () {
          this$1$1.refreshData();
        }, refresh * 1000);
      } else {
        throw new Error("No refresh interval");
      }
    }
  };

  Chart.prototype.stopRefresh = function stopRefresh () {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  Chart.prototype.toImage = function toImage (download) {
    if (this.adapter === "chartjs") {
      if (download && download.background && download.background !== "transparent") {
        // https://stackoverflow.com/questions/30464750/chartjs-line-chart-set-background-color
        var canvas = this.chart.canvas;
        var ctx = this.chart.ctx;
        var tmpCanvas = document.createElement("canvas");
        var tmpCtx = tmpCanvas.getContext("2d");
        tmpCanvas.width = ctx.canvas.width;
        tmpCanvas.height = ctx.canvas.height;
        tmpCtx.fillStyle = download.background;
        tmpCtx.fillRect(0, 0, tmpCanvas.width, tmpCanvas.height);
        tmpCtx.drawImage(canvas, 0, 0);
        return tmpCanvas.toDataURL("image/png");
      } else {
        return this.chart.toBase64Image();
      }
    } else {
      throw new Error("Feature only available for Chart.js");
    }
  };

  Chart.prototype.destroy = function destroy () {
    this.destroyed = true;
    this.stopRefresh();

    if (this.__adapterObject) {
      this.__adapterObject.destroy(this);
    }

    if (this.__enterEvent) {
      removeEvent(this.element, "mouseover", this.__enterEvent);
    }

    if (this.__leaveEvent) {
      removeEvent(this.element, "mouseout", this.__leaveEvent);
    }
  };

  Chart.prototype.__updateOptions = function __updateOptions (options) {
    var updateRefresh = options.refresh && options.refresh !== this.options.refresh;
    this.options = merge(Chartkick.options, options);
    if (updateRefresh) {
      this.stopRefresh();
      this.startRefresh();
    }
  };

  Chart.prototype.__render = function __render () {
    this.data = this.__processData();
    renderChart(this.__chartName(), this);
  };

  Chart.prototype.__config = function __config () {
    return config;
  };

  var LineChart = /*@__PURE__*/(function (Chart) {
    function LineChart () {
      Chart.apply(this, arguments);
    }

    if ( Chart ) LineChart.__proto__ = Chart;
    LineChart.prototype = Object.create( Chart && Chart.prototype );
    LineChart.prototype.constructor = LineChart;

    LineChart.prototype.__processData = function __processData () {
      return processSeries(this);
    };

    LineChart.prototype.__chartName = function __chartName () {
      return "LineChart";
    };

    return LineChart;
  }(Chart));

  var PieChart = /*@__PURE__*/(function (Chart) {
    function PieChart () {
      Chart.apply(this, arguments);
    }

    if ( Chart ) PieChart.__proto__ = Chart;
    PieChart.prototype = Object.create( Chart && Chart.prototype );
    PieChart.prototype.constructor = PieChart;

    PieChart.prototype.__processData = function __processData () {
      return processSimple(this);
    };

    PieChart.prototype.__chartName = function __chartName () {
      return "PieChart";
    };

    return PieChart;
  }(Chart));

  var ColumnChart = /*@__PURE__*/(function (Chart) {
    function ColumnChart () {
      Chart.apply(this, arguments);
    }

    if ( Chart ) ColumnChart.__proto__ = Chart;
    ColumnChart.prototype = Object.create( Chart && Chart.prototype );
    ColumnChart.prototype.constructor = ColumnChart;

    ColumnChart.prototype.__processData = function __processData () {
      return processSeries(this, null, true);
    };

    ColumnChart.prototype.__chartName = function __chartName () {
      return "ColumnChart";
    };

    return ColumnChart;
  }(Chart));

  var BarChart = /*@__PURE__*/(function (Chart) {
    function BarChart () {
      Chart.apply(this, arguments);
    }

    if ( Chart ) BarChart.__proto__ = Chart;
    BarChart.prototype = Object.create( Chart && Chart.prototype );
    BarChart.prototype.constructor = BarChart;

    BarChart.prototype.__processData = function __processData () {
      return processSeries(this, null, true);
    };

    BarChart.prototype.__chartName = function __chartName () {
      return "BarChart";
    };

    return BarChart;
  }(Chart));

  var AreaChart = /*@__PURE__*/(function (Chart) {
    function AreaChart () {
      Chart.apply(this, arguments);
    }

    if ( Chart ) AreaChart.__proto__ = Chart;
    AreaChart.prototype = Object.create( Chart && Chart.prototype );
    AreaChart.prototype.constructor = AreaChart;

    AreaChart.prototype.__processData = function __processData () {
      return processSeries(this);
    };

    AreaChart.prototype.__chartName = function __chartName () {
      return "AreaChart";
    };

    return AreaChart;
  }(Chart));

  var GeoChart = /*@__PURE__*/(function (Chart) {
    function GeoChart () {
      Chart.apply(this, arguments);
    }

    if ( Chart ) GeoChart.__proto__ = Chart;
    GeoChart.prototype = Object.create( Chart && Chart.prototype );
    GeoChart.prototype.constructor = GeoChart;

    GeoChart.prototype.__processData = function __processData () {
      return processSimple(this);
    };

    GeoChart.prototype.__chartName = function __chartName () {
      return "GeoChart";
    };

    return GeoChart;
  }(Chart));

  var ScatterChart = /*@__PURE__*/(function (Chart) {
    function ScatterChart () {
      Chart.apply(this, arguments);
    }

    if ( Chart ) ScatterChart.__proto__ = Chart;
    ScatterChart.prototype = Object.create( Chart && Chart.prototype );
    ScatterChart.prototype.constructor = ScatterChart;

    ScatterChart.prototype.__processData = function __processData () {
      return processSeries(this, "number");
    };

    ScatterChart.prototype.__chartName = function __chartName () {
      return "ScatterChart";
    };

    return ScatterChart;
  }(Chart));

  var BubbleChart = /*@__PURE__*/(function (Chart) {
    function BubbleChart () {
      Chart.apply(this, arguments);
    }

    if ( Chart ) BubbleChart.__proto__ = Chart;
    BubbleChart.prototype = Object.create( Chart && Chart.prototype );
    BubbleChart.prototype.constructor = BubbleChart;

    BubbleChart.prototype.__processData = function __processData () {
      return processSeries(this, "bubble");
    };

    BubbleChart.prototype.__chartName = function __chartName () {
      return "BubbleChart";
    };

    return BubbleChart;
  }(Chart));

  var Timeline = /*@__PURE__*/(function (Chart) {
    function Timeline () {
      Chart.apply(this, arguments);
    }

    if ( Chart ) Timeline.__proto__ = Chart;
    Timeline.prototype = Object.create( Chart && Chart.prototype );
    Timeline.prototype.constructor = Timeline;

    Timeline.prototype.__processData = function __processData () {
      var i, data = this.rawData;
      for (i = 0; i < data.length; i++) {
        data[i][1] = toDate(data[i][1]);
        data[i][2] = toDate(data[i][2]);
      }
      return data;
    };

    Timeline.prototype.__chartName = function __chartName () {
      return "Timeline";
    };

    return Timeline;
  }(Chart));

  var Chartkick = {
    LineChart: LineChart,
    PieChart: PieChart,
    ColumnChart: ColumnChart,
    BarChart: BarChart,
    AreaChart: AreaChart,
    GeoChart: GeoChart,
    ScatterChart: ScatterChart,
    BubbleChart: BubbleChart,
    Timeline: Timeline,
    charts: {},
    configure: function (options) {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          config[key] = options[key];
        }
      }
    },
    setDefaultOptions: function (opts) {
      Chartkick.options = opts;
    },
    eachChart: function (callback) {
      for (var chartId in Chartkick.charts) {
        if (Chartkick.charts.hasOwnProperty(chartId)) {
          callback(Chartkick.charts[chartId]);
        }
      }
    },
    destroyAll: function() {
      for (var chartId in Chartkick.charts) {
        if (Chartkick.charts.hasOwnProperty(chartId)) {
          Chartkick.charts[chartId].destroy();
          delete Chartkick.charts[chartId];
        }
      }
    },
    config: config,
    options: {},
    adapters: adapters,
    addAdapter: addAdapter,
    use: function(adapter) {
      addAdapter(adapter);
      return Chartkick;
    }
  };

  // not ideal, but allows for simpler integration
  if (typeof window !== "undefined" && !window.Chartkick) {
    window.Chartkick = Chartkick;

    // clean up previous charts before Turbolinks loads new page
    document.addEventListener("turbolinks:before-render", function() {
      if (config.autoDestroy !== false) {
        Chartkick.destroyAll();
      }
    });
    document.addEventListener("turbo:before-render", function() {
      if (config.autoDestroy !== false) {
        Chartkick.destroyAll();
      }
    });

    // use setTimeout so charting library can come later in same JS file
    setTimeout(function() {
      window.dispatchEvent(new Event("chartkick:load"));
    }, 0);
  }

  // backwards compatibility for esm require
  Chartkick.default = Chartkick;

  return Chartkick;

}));
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//

















// require Chart.bundle
// require_tree .;
