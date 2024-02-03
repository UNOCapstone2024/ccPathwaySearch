/*! For license information please see ts-tables.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tables=t():e.tables=t()}(self,(()=>(()=>{var e={381:function(e,t){var i,r;i=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},i=!t.document&&!!t.postMessage,r=t.IS_PAPA_WORKER||!1,n={},s=0,a={parse:function(i,r){var o=(r=r||{}).dynamicTyping||!1;if(k(o)&&(r.dynamicTypingFunction=o,o={}),r.dynamicTyping=o,r.transform=!!k(r.transform)&&r.transform,r.worker&&a.WORKERS_SUPPORTED){var h=function(){if(!a.WORKERS_SUPPORTED)return!1;var i,r,o=(i=t.URL||t.webkitURL||null,r=e.toString(),a.BLOB_URL||(a.BLOB_URL=i.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",r,")();"],{type:"text/javascript"})))),h=new t.Worker(o);return h.onmessage=m,h.id=s++,n[h.id]=h}();return h.userStep=r.step,h.userChunk=r.chunk,h.userComplete=r.complete,h.userError=r.error,r.step=k(r.step),r.chunk=k(r.chunk),r.complete=k(r.complete),r.error=k(r.error),delete r.worker,void h.postMessage({input:i,config:r,workerId:h.id})}var f=null;return a.NODE_STREAM_INPUT,"string"==typeof i?(i=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(i),f=r.download?new l(r):new u(r)):!0===i.readable&&k(i.read)&&k(i.on)?f=new d(r):(t.File&&i instanceof File||i instanceof Object)&&(f=new c(r)),f.stream(i)},unparse:function(e,t){var i=!1,r=!0,n=",",s="\r\n",o='"',h=o+o,l=!1,c=null,u=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(l=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(h=t.escapeChar+o),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(u=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var d=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,l);if("object"==typeof e[0])return f(c||Object.keys(e[0]),e,l)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||c),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],l);throw new Error("Unable to serialize unrecognized input");function f(e,t,i){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,h=!Array.isArray(t[0]);if(o&&r){for(var l=0;l<e.length;l++)0<l&&(a+=n),a+=g(e[l],l);0<t.length&&(a+=s)}for(var c=0;c<t.length;c++){var u=o?e.length:t[c].length,d=!1,f=o?0===Object.keys(t[c]).length:0===t[c].length;if(i&&!o&&(d="greedy"===i?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===i&&o){for(var p=[],m=0;m<u;m++){var _=h?e[m]:m;p.push(t[c][_])}d=""===p.join("").trim()}if(!d){for(var y=0;y<u;y++){0<y&&!f&&(a+=n);var v=o&&h?e[y]:y;a+=g(t[c][v],y)}c<t.length-1&&(!i||0<u&&!f)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=!1;u&&"string"==typeof e&&u.test(e)&&(e="'"+e,r=!0);var s=e.toString().replace(d,h);return(r=r||!0===i||"function"==typeof i&&i(e,t)||Array.isArray(i)&&i[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(s,a.BAD_DELIMITERS)||-1<s.indexOf(n)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?o+s+o:s}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!i&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=f,a.NetworkStreamer=l,a.FileStreamer=c,a.StringStreamer=u,a.ReadableStreamStreamer=d,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var i=e.config||{},r=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)r.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},i)})})),n(),this;function n(){if(0!==r.length){var t,i,n,h=r[0];if(k(e.before)){var l=e.before(h.file,h.inputElem);if("object"==typeof l){if("abort"===l.action)return"AbortError",t=h.file,i=h.inputElem,n=l.reason,void(k(e.error)&&e.error({name:"AbortError"},t,i,n));if("skip"===l.action)return void s();"object"==typeof l.config&&(h.instanceConfig=o.extend(h.instanceConfig,l.config))}else if("skip"===l)return void s()}var c=h.instanceConfig.complete;h.instanceConfig.complete=function(e){k(c)&&c(e,h.file,h.inputElem),s()},a.parse(h.file,h.instanceConfig)}else k(e.complete)&&e.complete()}function s(){r.splice(0,1),n()}}}function h(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,i){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var h=o.meta.cursor;this._finished||(this._partialLine=s.substring(h-this._baseIndex),this._baseIndex=h),o&&o.data&&(this._rowCount+=o.data.length);var l=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)t.postMessage({results:o,workerId:a.WORKER_ID,finished:l});else if(k(this._config.chunk)&&!i){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!l||!k(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),l||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):r&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),h.call(this,e),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),i||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}i&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var i=t.statusText||e;this._sendError(new Error(i))}}function c(e){var t,i;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),h.call(this,e);var r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,i=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=i.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);r||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function u(e){var t;h.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,i=this._config.chunkSize;return i?(e=t.substring(0,i),t=t.substring(i)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function d(e){h.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function f(e){var t,i,r,n=Math.pow(2,53),s=-n,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,h=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,l=this,c=0,u=0,d=!1,f=!1,m=[],_={data:[],errors:[],meta:{}};if(k(e.step)){var y=e.step;e.step=function(t){if(_=t,E())w();else{if(w(),0===_.data.length)return;c+=t.data.length,e.preview&&c>e.preview?i.abort():(_.data=_.data[0],y(_,l))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function w(){return _&&r&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines&&(_.data=_.data.filter((function(e){return!b(e)}))),E()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;E()&&t<_.data.length;t++)_.data[t].forEach(i);_.data.splice(0,1)}else _.data.forEach(i);function i(t,i){k(e.transformHeader)&&(t=e.transformHeader(t,i)),m.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,i){var r,n=e.header?{}:[];for(r=0;r<t.length;r++){var s=r,a=t[r];e.header&&(s=r>=m.length?"__parsed_extra":m[r]),e.transform&&(a=e.transform(a,s)),a=x(s,a),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(a)):n[s]=a}return e.header&&(r>m.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+m.length+" fields but parsed "+r,u+i):r<m.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+m.length+" fields but parsed "+r,u+i)),n}var i=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),i=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=m),u+=i,_}()}function E(){return e.header&&0===m.length}function x(t,i){return r=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[r]&&(e.dynamicTyping[r]=e.dynamicTypingFunction(r)),!0===(e.dynamicTyping[r]||e.dynamicTyping)?"true"===i||"TRUE"===i||"false"!==i&&"FALSE"!==i&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<n)return!0}return!1}(i)?parseFloat(i):h.test(i)?new Date(i):""===i?null:i):i;var r}function C(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),_.errors.push(n)}this.parse=function(n,s,o){var h=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(n,h)),r=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(n),_.meta.delimiter=e.delimiter);else{var l=function(t,i,r,n,s){var o,h,l,c;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var u=0;u<s.length;u++){var d=s[u],f=0,p=0,m=0;l=void 0;for(var _=new g({comments:n,delimiter:d,newline:i,preview:10}).parse(t),y=0;y<_.data.length;y++)if(r&&b(_.data[y]))m++;else{var v=_.data[y].length;p+=v,void 0!==l?0<v&&(f+=Math.abs(v-l),l=v):l=v}0<_.data.length&&(p/=_.data.length-m),(void 0===h||f<=h)&&(void 0===c||c<p)&&1.99<p&&(h=f,o=d,c=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);l.successful?e.delimiter=l.bestDelimiter:(r=!0,e.delimiter=a.DefaultDelimiter),_.meta.delimiter=e.delimiter}var c=v(e);return e.preview&&e.header&&c.preview++,t=n,i=new g(c),_=i.parse(t,s,o),w(),d?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,i.abort(),t=k(e.chunk)?"":t.substring(i.getCharIndex())},this.resume=function(){l.streamer._halted?(d=!1,l.streamer.parseChunk(t,!0)):setTimeout(l.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,i.abort(),_.meta.aborted=!0,k(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,i=(e=e||{}).delimiter,r=e.newline,n=e.comments,s=e.step,o=e.preview,h=e.fastMode,l=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(l=e.escapeChar),("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=","),n===i)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var c=0,u=!1;this.parse=function(a,d,f){if("string"!=typeof a)throw new Error("Input must be a string");var g=a.length,m=i.length,_=r.length,y=n.length,v=k(s),b=[],w=[],E=[],x=c=0;if(!a)return W();if(e.header&&!d){var C=a.split(r)[0].split(i),S=[],R={},T=!1;for(var L in C){var O=C[L];k(e.transformHeader)&&(O=e.transformHeader(O,L));var A=O,I=R[O]||0;for(0<I&&(T=!0,A=O+"_"+I),R[O]=I+1;S.includes(A);)A=A+"_"+I;S.push(A)}if(T){var D=a.split(r);D[0]=S.join(i),a=D.join(r)}}if(h||!1!==h&&-1===a.indexOf(t)){for(var $=a.split(r),M=0;M<$.length;M++){if(E=$[M],c+=E.length,M!==$.length-1)c+=r.length;else if(f)return W();if(!n||E.substring(0,y)!==n){if(v){if(b=[],q(E.split(i)),Q(),u)return W()}else q(E.split(i));if(o&&o<=M)return b=b.slice(0,o),W(!0)}}return W()}for(var j=a.indexOf(i,c),N=a.indexOf(r,c),F=new RegExp(p(l)+p(t),"g"),H=a.indexOf(t,c);;)if(a[c]!==t)if(n&&0===E.length&&a.substring(c,c+y)===n){if(-1===N)return W();c=N+_,N=a.indexOf(r,c),j=a.indexOf(i,c)}else if(-1!==j&&(j<N||-1===N))E.push(a.substring(c,j)),c=j+m,j=a.indexOf(i,c);else{if(-1===N)break;if(E.push(a.substring(c,N)),K(N+_),v&&(Q(),u))return W();if(o&&b.length>=o)return W(!0)}else for(H=c,c++;;){if(-1===(H=a.indexOf(t,H+1)))return f||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:c}),B();if(H===g-1)return B(a.substring(c,H).replace(F,t));if(t!==l||a[H+1]!==l){if(t===l||0===H||a[H-1]!==l){-1!==j&&j<H+1&&(j=a.indexOf(i,H+1)),-1!==N&&N<H+1&&(N=a.indexOf(r,H+1));var P=U(-1===N?j:Math.min(j,N));if(a.substr(H+1+P,m)===i){E.push(a.substring(c,H).replace(F,t)),a[c=H+1+P+m]!==t&&(H=a.indexOf(t,c)),j=a.indexOf(i,c),N=a.indexOf(r,c);break}var z=U(N);if(a.substring(H+1+z,H+1+z+_)===r){if(E.push(a.substring(c,H).replace(F,t)),K(H+1+z+_),j=a.indexOf(i,c),H=a.indexOf(t,c),v&&(Q(),u))return W();if(o&&b.length>=o)return W(!0);break}w.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:c}),H++}}else H++}return B();function q(e){b.push(e),x=c}function U(e){var t=0;if(-1!==e){var i=a.substring(H+1,e);i&&""===i.trim()&&(t=i.length)}return t}function B(e){return f||(void 0===e&&(e=a.substring(c)),E.push(e),c=g,q(E),v&&Q()),W()}function K(e){c=e,q(E),E=[],N=a.indexOf(r,c)}function W(e){return{data:b,errors:w,meta:{delimiter:i,linebreak:r,aborted:u,truncated:!!e,cursor:x+(d||0)}}}function Q(){s(W()),b=[],w=[]}},this.abort=function(){u=!0},this.getCharIndex=function(){return c}}function m(e){var t=e.data,i=n[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(k(i.userStep)){for(var a=0;a<t.results.data.length&&(i.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!r);a++);delete t.results}else k(i.userChunk)&&(i.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var i=n[e];k(i.userComplete)&&i.userComplete(t),i.terminate(),delete n[e]}function y(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=v(e[i]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return r&&(t.onmessage=function(e){var i=e.data;if(void 0===a.WORKER_ID&&i&&(a.WORKER_ID=i.workerId),"string"==typeof i.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(i.input,i.config),finished:!0});else if(t.File&&i.input instanceof File||i.input instanceof Object){var r=a.parse(i.input,i.config);r&&t.postMessage({workerId:a.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(h.prototype)).constructor=l,(c.prototype=Object.create(h.prototype)).constructor=c,(u.prototype=Object.create(u.prototype)).constructor=u,(d.prototype=Object.create(h.prototype)).constructor=d,a},void 0===(r=i.apply(t,[]))||(e.exports=r)}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,i),s.exports}i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";i.r(r),i.d(r,{Table:()=>s});var e=i(381);const t=(e,t)=>{const i=e.querySelector(t);if(!i)throw new Error(`Selector ${t} didn't match any elements.`);return i},n=class{constructor(e,i){this.attributeName=e,this.classInstance=i,this.userLocale=navigator.languages[0],this.elements={tableHead:t(document,`[${this.attributeName}="thead"]`),tableBody:t(document,`[${this.attributeName}="tbody"]`),entries:t(document,`[${this.attributeName}="entries"]`),pagination:t(document,`[${this.attributeName}="pagination"]`)},this.templates={row:t(document,`[${this.attributeName}="rowTemplate"]`),cell:t(document,`[${this.attributeName}="itemTemplate"]`),header:t(document,`[${this.attributeName}="colTemplate"]`),pagination:t(document,`[${this.attributeName}="paginationTemplate"]`)}}body(e){this.elements.tableBody.innerHTML="",e.forEach((e=>{const i=this.templates.row.content.cloneNode(!0),r=t(i,"tr");Object.keys(e).forEach((i=>{const n=this.templates.cell.content.cloneNode(!0),s=t(n,"td");s.innerHTML=e[i],r.appendChild(s)})),this.elements.tableBody.appendChild(r)}))}head(e,i,r){if(""===this.elements.tableHead.innerHTML){const n=this.templates.row.content.cloneNode(!0),s=t(n,"tr");e.forEach((e=>{const n=this.templates.header.content.cloneNode(!0),a=t(n,"th"),o=n.querySelectorAll("i");t(n,"span").innerHTML=e,r===e&&(o["ascending"===i?0:1].classList.replace("bi-caret-"+("ascending"===i?"up":"down"),`bi-caret-${"ascending"===i?"up":"down"}-fill`),a.ariaSort=i),a.setAttribute("onclick",`${this.classInstance}.sort('${e}');`),a.setAttribute("onkeypress",`if (event.keyCode == 13) ${this.classInstance}.sort('${e}');`),a.ariaLabel=`${e}: activate to sort ${i}`,s.appendChild(a)})),this.elements.tableHead.appendChild(s)}else this.elements.tableHead.querySelectorAll("th").forEach((e=>{const n=e.querySelectorAll("i"),s=t(e,"span");n.forEach(((e,t)=>{e.classList.replace(`bi-caret-${0===t?"up":"down"}-fill`,"bi-caret-"+(0===t?"up":"down")),r===s.innerText&&e.classList.replace("bi-caret-"+("ascending"===i?"up":"down"),`bi-caret-${"ascending"===i?"up":"down"}-fill`)})),e.ariaSort=i,e.ariaLabel=`${s.innerText}: activate to sort ${i}`}))}entries(e,t,i){const r=(e-1)*t;let n=r+t;-1===t&&(n=i),this.elements.entries.innerHTML=`showing ${(r+1).toLocaleString(this.userLocale)} to ${(n<=i?n:i).toLocaleString(this.userLocale)} of <strong>${i.toLocaleString(this.userLocale)}</strong> entries`}pagination(e,i,r){if(-1===i)return this.elements.pagination.innerHTML="",!1;if(1===e&&1===r)return this.elements.pagination.innerHTML="",!1;const n=[{text:"Next",class:e===r?"d-none":"",action:`${this.classInstance}.page.next();`,order:"last",label:`Current page is ${e}, Activate for next page`},{text:"Previous",class:1===e?"d-none":"",action:`${this.classInstance}.page.previous();`,order:"first",label:`Current page is ${e}, Activate for previous page`},{text:String(e!==r?1===e?e:e-1:e-2),class:2===r&&2===e?"d-none":1===e?"active":"",action:`${this.classInstance}.page.goTo(event);`,order:3},{text:String(e!==r?1===e?e+1:e:e-1),class:1===e||e===r?"":"active",action:`${this.classInstance}.page.goTo(event);`,order:3},{text:String(e!==r?1===e?e+2:e+1:e),class:2===r&&1===e?"d-none":e===r?"active":"",action:`${this.classInstance}.page.goTo(event);`,order:3},{text:"1",class:r<=3||e<=2?"d-none":"",action:`${this.classInstance}.page.first();`,order:1,label:"Activate for first page"},{text:String(r),class:r<=3||r-2<e?"d-none":"",action:`${this.classInstance}.page.last();`,order:5,label:"Activate for last page"},{text:"...",class:e<=3?"d-none":"disabled",action:"",order:2,label:" "},{text:"...",class:r-3<e?"d-none":"disabled",action:"",order:4,label:" "}];""===this.elements.pagination.innerHTML?n.forEach((e=>{const i=this.templates.pagination.content.cloneNode(!0),r=t(i,"li"),n=t(i,"a");t(i,"span").innerText=e.text,n.ariaLabel=e.label?e.label:`Page ${e.text}`,r.classList.add(`order-${e.order}`),e.class&&r.classList.add(e.class),e.action&&(n.setAttribute("onclick",e.action),n.setAttribute("onkeypress",`if (event.keyCode == 13) ${e.action};`)),"d-none"!==e.class&&"active"!==e.class&&"..."!==e.text||n.removeAttribute("tabindex"),"active"===e.class&&(r.ariaCurrent="true"),"..."===e.text&&(r.ariaHidden="true"),this.elements.pagination.appendChild(r)})):n.forEach(((e,i)=>{const r=this.elements.pagination.querySelectorAll("li")[i],n=t(r,"a");t(r,"span").innerText=e.text,n.ariaLabel=e.label?e.label:`Page ${e.text}`,[...r.classList].forEach((e=>{"d-none"!==e&&"active"!==e||r.classList.remove(e)})),e.class&&r.classList.add(e.class),n.setAttribute("tabindex","0"),"d-none"!==e.class&&"active"!==e.class&&"..."!==e.text||n.removeAttribute("tabindex"),"active"===e.class&&(r.ariaCurrent="true")}))}};const s=class{constructor(e=10,t="data-table",i="Table",r=0){this.page={reload:e=>{const t=e.target;t instanceof HTMLSelectElement&&(this.state.page.per=Number(t.value),this.display(this.state.data))},next:()=>{this.state.page.current+=1,this.display(this.state.data)},previous:()=>{this.state.page.current-=1,this.display(this.state.data)},goTo:e=>{const t=e.target;t instanceof HTMLElement&&(this.state.page.current=Number(t.innerText),this.display(this.state.data))},first:()=>{this.state.page.current=1,this.display(this.state.data)},last:()=>{this.state.page.current=this.state.page.last,this.display(this.state.data)}},this.attributeName=t,this.classInstance=i,this.render=new n(this.attributeName,this.classInstance),this.state={data:[],headers:[],page:{current:1,last:1,per:e},sort:{direction:"",field:"",init:r}}}init(t){return i=this,r=void 0,s=function*(){try{(0,e.parse)(t,{download:!0,header:!0,transformHeader:e=>e.trim(),transform:e=>e.trim(),complete:e=>{if(e.data instanceof Array&&(this.state.data=e.data),!e.meta.fields)throw"Headers not found, unable to sort data.";this.state.headers=e.meta.fields,this.state.sort.init>0?this.sort(this.state.headers[this.state.sort.init-1]):this.display(this.state.data)}})}catch(e){console.error(e)}},new((n=void 0)||(n=Promise))((function(e,t){function a(e){try{h(s.next(e))}catch(e){t(e)}}function o(e){try{h(s.throw(e))}catch(e){t(e)}}function h(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(a,o)}h((s=s.apply(i,r||[])).next())}));var i,r,n,s}sort(e){this.state.page.current=1,this.state.sort.field!==e?this.state.sort={direction:"ascending",field:e,init:0}:this.state.sort.direction="ascending"===this.state.sort.direction?"descending":"ascending",this.state.data=((e,t,i)=>"ascending"===i?(e.sort(((e,i)=>""===e[t]?1:""===i[t]?-1:e[t].localeCompare(i[t]))),e):(e.sort(((e,i)=>""===e[t]?1:""===i[t]?-1:i[t].localeCompare(e[t]))),e))(this.state.data,this.state.sort.field,this.state.sort.direction),this.display(this.state.data)}search(e){const t=e.target;t instanceof HTMLInputElement&&this.display(((e,t)=>e.reduce(((e,i)=>(Object.keys(i).map((r=>{if(i[r].toLowerCase().indexOf(t.toLowerCase())>=0&&!e.includes(i))return e.push(i)})),e)),[]))(this.state.data,t.value))}display(e){this.state.page.last=Math.ceil(e.length/Number(this.state.page.per)),(this.state.page.current>this.state.page.last||this.state.page.current<=0)&&(this.state.page.current=1);const t=((e,t,i)=>{const r=(e-1)*t,n=r+t;return-1===t?i:i.slice(r,n)})(this.state.page.current,this.state.page.per,e);this.render.head(this.state.headers,this.state.sort.direction,this.state.sort.field),this.render.body(t),this.render.entries(this.state.page.current,this.state.page.per,e.length),this.render.pagination(this.state.page.current,this.state.page.per,this.state.page.last)}}})(),r})()));