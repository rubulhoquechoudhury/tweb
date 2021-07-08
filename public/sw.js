var serviceWorkerOption = {"assets":["/0.ac9b48752fe298135dfe.chunk.js","/1.726f909dcf7aac6d7720.chunk.worker.js","/1.e5a12e5a758c635c7e38.chunk.js","/12.11e4bbdffeea2a7ebb34.chunk.js","/13.f1cb32ee495b001e6b18.chunk.js","/14.a0edc08e316098053703.chunk.js","/15.5397d588b05484906149.chunk.js","/16.2e416aef69b700ce6119.chunk.js","/17.509f59147e2fc67b3805.chunk.js","/18.de8ad7120d606f8bf466.chunk.js","/19.07d3717288f808c94731.chunk.js","/2.eae3ab608630545837bc.chunk.js","/20.d44aaf85a6f00ca322ae.chunk.js","/21.eac2a71bfd95d62b5d9f.chunk.js","/22.682b6d3734c1cdd13317.chunk.js","/23.d03b5a792b6e65d3af4a.chunk.js","/24.291b10876028b52dd7a5.chunk.js","/25.73939ccdcdcaf2c06193.chunk.js","/26.935ffb1fad6585a07c1e.chunk.js","/27.ac4f0961a12bea8df08d.chunk.js","/28.05d41e1a74c1ca1e104d.chunk.js","/29.ca7bd232fe152e6ac2b0.chunk.js","/3.b48a534055c1b9c8dc9d.chunk.js","/30.d5e552c83e0663631434.chunk.js","/4.40d46c8f87efa89bc987.chunk.js","/5.f241851baa83dcefbb5c.chunk.js","/6.2b0e8a4a81f040a729d6.chunk.js","/7.c8cc6ccb755dacccfd42.chunk.js","/8.f260fc292fa4d79c8eb9.chunk.js","/9.3f7dfebb3d1fcb58a6ff.chunk.js","/main.1a3a7d260080d5eda842.css","/main.e61d64a1e242f63e6f13.bundle.js","/mtproto.worker.62f56a3ad8e464071443.bundle.worker.js","/npm.qr-code-styling.57154417bdffdfdd9ebf.chunk.js","/rlottie.worker.86bed2789739b353d39d.bundle.worker.js","/style-desktop.9d7b485ed526720a3aad.css","/webp.worker.eafb4e17dc09d5858dc8.bundle.worker.js"]};
        
        !function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"log",(function(){return K})),n.d(t,"deferredPromises",(function(){return H}));var o={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1};const r=o.debug;"undefined"!=typeof window?window:self;var i,s=r;!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Log=4]="Log",e[e.Debug=8]="Debug"}(i||(i={}));const a=[i.None,i.Error,i.Warn,i.Log,i.Debug],c=Date.now();function l(){return"["+((Date.now()-c)/1e3).toFixed(3)+"]"}function u(e,t=i.Log|i.Warn|i.Error){function n(...n){return t&i.Log&&console.log(l(),e,...n)}return s||(t=i.Error),n.warn=function(...n){return t&i.Warn&&console.warn(l(),e,...n)},n.info=function(...n){return t&i.Log&&console.info(l(),e,...n)},n.error=function(...n){return t&i.Error&&console.error(l(),e,...n)},n.trace=function(...n){return t&i.Log&&console.trace(l(),e,...n)},n.debug=function(...n){return t&i.Debug&&console.debug(l(),e,...n)},n.setPrefix=function(t){e="["+t+"]:"},n.setPrefix(e),n.setLevel=function(e){t=a.slice(0,e+1).reduce((e,t)=>e|t,0)},n}var h=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const d=self;function f(e){return e.ok&&200===e.status}function g(e,t){return new Promise(n=>{const o=new FileReader;o.addEventListener("loadend",e=>n(e.target.result)),o[t](e)})}function p(e){return function(e){return g(e,"readAsArrayBuffer")}(e).then(e=>new Uint8Array(e))}function m(e,t=""){let n;const o=function(e){if(-1===["image/jpeg","image/png","image/gif","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","application/json","application/pdf"].indexOf(e))return"application/octet-stream";return e}(t);try{n=new Blob(e,{type:o})}catch(t){let r=new BlobBuilder;e.forEach(e=>{r.append(e)}),n=r.getBlob(o)}return n}const v="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,y="undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope,b=()=>self.clients.matchAll({includeUncontrolled:!1,type:"window"}),w=(e,...t)=>{self.clients.matchAll({includeUncontrolled:!1,type:"window"}).then(n=>{n.length&&n.slice(e?0:-1).forEach(e=>{e.postMessage(...t)})})},S=(...e)=>{self.postMessage(...e)},P=()=>{};y&&w.bind(null,!1),y&&w.bind(null,!0);const O=navigator?navigator.userAgent:null,A=(navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),navigator.userAgent.toLowerCase().indexOf("android"),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),"undefined"!=typeof window?window:self),_=((/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&A.MSStream,!!("safari"in A)||!(!O||!(/\b(iPad|iPhone|iPod)\b/.test(O)||O.match("Safari")&&!O.match("Chrome")))),T=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;navigator.maxTouchPoints>0&&navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i);var x=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};var E=new class{constructor(){this.blobSupported=!0;try{m([],"")}catch(e){this.blobSupported=!1}}isAvailable(){return this.blobSupported}write(e,t){return t instanceof Blob?p(t).then(t=>e.write(t)):e.write(t)}getFakeFileWriter(e,t){const n=[];return{write:e=>x(this,void 0,void 0,(function*(){if(!this.blobSupported)throw!1;n.push(e)})),truncate:()=>{n.length=0},finalize:(o=!0)=>{const r=m(n,e);return o&&t&&t(r),r}}}},j=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};class C{constructor(e){this.dbName=e,this.useStorage=!0,o.test&&(this.dbName+="_test"),C.STORAGES.length&&(this.useStorage=C.STORAGES[0].useStorage),this.openDatabase(),C.STORAGES.push(this)}openDatabase(){var e;return null!==(e=this.openDbPromise)&&void 0!==e?e:this.openDbPromise=caches.open(this.dbName)}delete(e){return this.timeoutOperation(t=>t.delete("/"+e))}deleteAll(){return caches.delete(this.dbName)}get(e){return this.timeoutOperation(t=>t.match("/"+e))}save(e,t){return this.timeoutOperation(n=>n.put("/"+e,t))}getFile(e,t="blob"){return this.get(e).then(e=>{if(!e)throw"NO_ENTRY_FOUND";return e[t]()})}saveFile(e,t){t instanceof Blob||(t=m(t));const n=new Response(t,{headers:{"Content-Length":""+t.size}});return this.save(e,n).then(()=>t)}timeoutOperation(e){return this.useStorage?new Promise((t,n)=>j(this,void 0,void 0,(function*(){let o=!1;const r=setTimeout(()=>{n(),o=!0},15e3);try{const n=yield this.openDatabase();if(!n)throw this.useStorage=!1,this.openDbPromise=void 0,"no cache?";const r=yield e(n);if(o)return;t(r)}catch(e){n(e)}clearTimeout(r)}))):Promise.reject("STORAGE_OFFLINE")}getFileWriter(e,t){const n=E.getFakeFileWriter(t,t=>this.saveFile(e,t).catch(()=>t));return Promise.resolve(n)}static toggleStorage(e){return Promise.all(this.STORAGES.map(t=>{if(t.useStorage=e,!e)return t.deleteAll()}))}}C.STORAGES=[];var D=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const k=new C("cachedStreamChunks");setInterval(()=>k.timeoutOperation(e=>e.keys().then(t=>{const n=new Map,o=Date.now()/1e3|0;for(const e of t){const t=e.url.match(/\/(\d+?)\?/);t&&!n.has(t[1])&&n.set(t[1],e)}const r=[];for(const[t,i]of n){const n=e.match(i).then(n=>{if(+n.headers.get("Time-Cached")+86400<=o)return K("will delete stream chunk:",t),e.delete(i,{ignoreSearch:!0,ignoreVary:!0})});r.push(n)}return Promise.all(r)})),18e5),setInterval(()=>{b().then(e=>{for(const[t,n]of H)if(!e.find(e=>e.id===t)){for(const e in n){n[e].reject()}H.delete(t)}})},12e4);const F=new Map;class R{constructor(e){this.info=e,this.loadedOffsets=new Set,this.destroy=()=>{F.delete(this.id)},this.id=R.getId(e),F.set(this.id,this),this.limitPart=e.size>78643200?L:N,this.destroyDebounced=function(e,t,n=!0,o=!0){let r=null;return(...i)=>{r?(clearTimeout(r),r=null):n&&e(...i),r=setTimeout(()=>{o&&e(...i),r=null},t)}}(this.destroy,15e4,!1,!0)}requestFilePartFromWorker(e,t,n=!1){return D(this,void 0,void 0,(function*(){const o={type:"requestFilePart",payload:[this.info.dcId,this.info.location,e,t]},r=JSON.stringify(o);o.id=r;const i=yield b().then(e=>{if(e.length)return e.find(e=>H.has(e.id))||e[0]});if(!i)throw new Error("no window");let s=H.get(i.id);s||H.set(i.id,s={});let a=s[r];if(a)return a.then(e=>e.bytes);i.postMessage(o),this.loadedOffsets.add(e),a=s[r]=function(){let e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach(e=>e(...t))},lastNotify:void 0,listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise((n,o)=>{e.resolve=e=>{t.isFulfilled||(t.isFulfilled=!0,n(e))},e.reject=(...e)=>{t.isRejected||(t.isRejected=!0,o(...e))}});return t.finally(()=>{t.notify=null,t.listeners.length=0,t.lastNotify=null,t.cancel&&(t.cancel=()=>{})}),Object.assign(t,e),t}();const c=a.then(e=>e.bytes);return this.saveChunkToCache(c,e,t),!n&&this.preloadChunks(e,e+15*this.limitPart),c}))}requestFilePartFromCache(e,t,n){const o=this.getChunkKey(e,t);return k.getFile(o).then(e=>n?new Uint8Array:p(e),e=>{})}requestFilePart(e,t,n){return this.requestFilePartFromCache(e,t,n).then(o=>o||this.requestFilePartFromWorker(e,t,n))}saveChunkToCache(e,t,n){return e.then(e=>{const o=this.getChunkKey(t,n),r=new Response(e,{headers:{"Content-Length":""+e.length,"Content-Type":"application/octet-stream","Time-Cached":""+(Date.now()/1e3|0)}});return k.save(o,r)})}preloadChunks(e,t){for(t>this.info.size&&(t=this.info.size);e<t;e+=this.limitPart)this.loadedOffsets.has(e)||(this.loadedOffsets.add(e),this.requestFilePart(e,this.limitPart,!0))}requestRange(e){this.destroyDebounced();const t=function(e,t,n){if(0===e[0]&&1===e[1])return new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:{"Accept-Ranges":"bytes","Content-Range":"bytes 0-1/"+(n||"*"),"Content-Length":"2","Content-Type":t||"video/mp4"}});return null}(e,this.info.mimeType,this.info.size);if(t)return t;const[n,o]=e,r=o&&o<this.limitPart?function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.log(2)))}(o-n+1):this.limitPart,i=function(e,t=2048){return e-e%t}(n,r);return this.requestFilePart(i,r).then(e=>{const t={"Accept-Ranges":"bytes","Content-Range":`bytes ${i}-${i+e.byteLength-1}/${this.info.size||"*"}`,"Content-Length":""+e.byteLength};return this.info.mimeType&&(t["Content-Type"]=this.info.mimeType),_&&(e=e.slice(n-i,o-i+1),t["Content-Range"]=`bytes ${n}-${n+e.byteLength-1}/${this.info.size||"*"}`,t["Content-Length"]=""+e.byteLength),new Response(e,{status:206,statusText:"Partial Content",headers:t})})}getChunkKey(e,t){return this.id+"?offset="+e+"&limit="+t}static get(e){var t;return null!==(t=F.get(this.getId(e)))&&void 0!==t?t:new R(e)}static getId(e){return e.location.id}}const N=524288,L=1048576;var W={name:"tweb",version:7,stores:[{name:"session"},{name:"stickerSets"},{name:"users"},{name:"chats"},{name:"dialogs"},{name:"messages"}]};class M{constructor(e,t){this.storageIsAvailable=!0,function(e,t){if(t)for(let n in t)void 0!==t[n]&&(e[n]=t[n])}(this,e),o.test&&(this.name+="_test"),this.storeName=t,this.log=u("IDB-"+this.storeName),this.openDatabase(!0),M.STORAGES.push(this)}static closeDatabases(e){this.STORAGES.forEach(t=>{if(e&&e===t)return;const n=t.db;n&&(n.onclose=()=>{},n.close())})}isAvailable(){return this.storageIsAvailable}openDatabase(e=!1){if(this.openDbPromise&&!e)return this.openDbPromise;try{var t=indexedDB.open(this.name,this.version);if(!t)return Promise.reject()}catch(e){return this.log.error("error opening db",e.message),this.storageIsAvailable=!1,Promise.reject(e)}let n=!1;return setTimeout(()=>{n||t.onerror({type:"IDB_CREATE_TIMEOUT"})},3e3),this.openDbPromise=new Promise((e,o)=>{t.onsuccess=r=>{n=!0;const i=t.result;let s=!1;this.log("Opened"),i.onerror=e=>{this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),o(e)},i.onclose=e=>{this.log.error("closed:",e),!s&&this.openDatabase()},i.onabort=e=>{this.log.error("abort:",e);const t=e.target;this.openDatabase(s=!0),t.onerror&&t.onerror(e),i.close()},i.onversionchange=e=>{this.log.error("onversionchange, lol?")},e(this.db=i)},t.onerror=e=>{n=!0,this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),o(e)},t.onupgradeneeded=e=>{n=!0,this.log.warn("performing idb upgrade from",e.oldVersion,"to",e.newVersion);var t=e.target.result;this.stores.forEach(e=>{t.objectStoreNames.contains(e.name)||((e,t)=>{var n;const o=e.createObjectStore(t.name);if(null===(n=t.indexes)||void 0===n?void 0:n.length)for(const e of t.indexes)o.createIndex(e.indexName,e.keyPath,e.objectParameters)})(t,e)})}})}delete(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readwrite",t=>e.map(e=>t.delete(e)),"")}clear(e){return this.getObjectStore("readwrite",e=>e.clear(),"",e)}save(e,t){return Array.isArray(e)||(e=[].concat(e),t=[].concat(t)),this.getObjectStore("readwrite",n=>e.map((e,o)=>n.put(t[o],e)),"")}saveFile(e,t){return t instanceof Blob||(t=m([t])),this.save(e,t)}get(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readonly",t=>e.map(e=>t.get(e)),"")}getObjectStore(e,t,n,o=this.storeName){let r;return n&&(r=performance.now(),this.log(n+": start")),this.openDatabase().then(i=>new Promise((s,a)=>{const c=i.transaction([o],e);c.onerror=e=>{clearTimeout(l),a(c.error)},c.oncomplete=e=>{clearTimeout(l),n&&this.log(n+": end",performance.now()-r);const t=d.map(e=>e.result);s(h?t:t[0])};const l=setTimeout(()=>{this.log.error("transaction not finished",c)},1e4),u=t(c.objectStore(o)),h=Array.isArray(u),d=h?u:[].concat(u)}))}getAll(){return this.getObjectStore("readonly",e=>e.getAll(),"")}}M.STORAGES=[];var I=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const q=self,B=location.protocol+"//"+location.hostname+location.pathname.split("/").slice(0,-1).join("/")+"/";const G=new class{constructor(e,t,n){this.defaults=n,this.cache={},this.storage=new M(e,t)}get(e){return I(this,void 0,void 0,(function*(){if(void 0!==this.cache[e])return this.cache[e];let t;try{t=yield this.storage.get(e)}catch(e){}if(void 0!==this.cache[e])return this.cache[e];if(void 0===t){const n=this.defaults[e];t="function"==typeof n?n():n}return this.cache[e]=t}))}set(e,t){return I(this,void 0,void 0,(function*(){this.cache[e]=t;try{this.storage.save(e,t)}catch(e){}}))}}(W,"session",{push_mute_until:0,push_last_alive:0,push_lang:{},push_settings:{}});q.addEventListener("push",e=>{const t=e.data.json();K("push",t);let n=!1;const o=Promise.all([G.get("push_mute_until"),G.get("push_last_alive"),q.clients.matchAll({type:"window"})]).then(e=>{const[o,r,i]=e;if(K("matched clients",i),n=i.length>0,n)throw"Supress notification because some instance is alive";const s=Date.now();if(J()&&o&&s<o)throw`Supress notification because mute for ${Math.ceil((o-s)/6e4)} min`;if(!t.badge)throw"No badge?"});o.catch(e=>{K(e)});const r=o.then(()=>Promise.all([G.get("push_settings"),G.get("push_lang")])).then(e=>function(e,t,n){const o="assets/img/logo_filled_rounded.png";let r,i=e.title||"Telegram",s=e.description||"";e.custom&&(r=e.custom.channel_id?-e.custom.channel_id:e.custom.chat_id?-e.custom.chat_id:+e.custom.from_id||0);e.custom.peerId=""+r;let a="peer"+r;t&&t.nopreview&&(i="Telegram",s=n.push_message_nopreview||"You have a new message",a="unknown_peer");K("show notify",i,s,o,e);const c=[{action:"mute1d",title:n.push_action_mute1d||"Mute for 24H"}];return q.registration.showNotification(i,{body:s,icon:o,tag:a,data:e,actions:c}).then(e=>{var t;e&&e.notification&&(t=e.notification,$.has(t)||($.add(t),t.onclose=z))}).catch(e=>{K.error("Show notification promise",e)})}(t,e[0],e[1])).catch(()=>(K("Closing all notifications on push",n),J()||n?V():q.registration.showNotification("Telegram",{tag:"unknown_peer"}).then(()=>{if(n)return V();setTimeout(()=>V(),n?0:100)}).catch(e=>{K.error("Show notification error",e)})));e.waitUntil(r)}),q.addEventListener("notificationclick",e=>{const t=e.notification;K("On notification click: ",t.tag),t.close();const n=e.action;if("mute1d"===n&&J())return K("[SW] mute for 1d"),void G.set("push_mute_until",Date.now()+864e5);const o=t.data;if(!o)return;const r=q.clients.matchAll({type:"window"}).then(e=>{o.action=n,U={type:"push_click",payload:o};for(let t=0;t<e.length;t++){const n=e[t];if("focus"in n)return n.focus(),n.postMessage(U),void(U=void 0)}if(q.clients.openWindow)return G.get("push_settings").then(e=>q.clients.openWindow(e.baseUrl||B))}).catch(e=>{K.error("Clients.matchAll error",e)});e.waitUntil(r)}),q.addEventListener("notificationclose",z);let U,$=new Set;function z(e){var t;t=e.notification,$.delete(t)}function V(){for(const e of $)try{e.close()}catch(e){}let e;return e="getNotifications"in q.registration?q.registration.getNotifications({}).then(e=>{for(let t=0,n=e.length;t<n;++t)try{e[t].close()}catch(e){}}).catch(e=>{K.error("Offline register SW error",e)}):Promise.resolve(),$.clear(),e}function J(){return T}const K=u("SW",i.Error|i.Debug|i.Log|i.Warn),Y=self,H=new Map,X={notifications_clear:()=>{V()},ping:(e,t)=>{!function(e,t){const n=t.ports&&t.ports[0]||t.source,o=e.payload;o.localNotifications&&G.set("push_last_alive",Date.now()),U&&n&&"postMessage"in n&&(n.postMessage(U,[]),U=void 0),o.lang&&G.set("push_lang",o.lang),o.settings&&G.set("push_settings",o.settings)}(e,t)},requestFilePart:(e,t)=>{const n=t.source,o=H.get(n.id);if(!o)return;const r=o[e.id];r&&(e.error?r.reject(e.error):r.resolve(e.payload),delete o[e.id])},toggleStorage:e=>{C.toggleStorage(e.payload)}};Y.addEventListener("message",e=>{const t=e.data,n=X[t.type];n&&n(t,e)});const Q=e=>{if(0===e.request.url.indexOf(location.origin+"/")&&e.request.url.match(/\.(js|css|jpe?g|json|wasm|png|mp3|svg|tgs|ico|woff2?|ttf|webmanifest?)(?:\?.*)?$/))return e.respondWith(function(e){return h(this,void 0,void 0,(function*(){try{const t=yield d.caches.open("cachedAssets"),n=yield t.match(e.request,{ignoreVary:!0});if(n&&f(n))return n;const o={Vary:"*"};let r=yield fetch(e.request,{headers:o});if(f(r))t.put(e.request,r.clone());else if(304===r.status){const n=e.request.url.replace(/\?.+$/,"")+"?"+(1e5*Math.random()|0);r=yield fetch(n,{headers:o}),f(r)&&t.put(e.request,r.clone())}return r}catch(t){return fetch(e.request)}}))}(e));try{const[,t,n,o]=/http[:s]+\/\/.*?(\/(.*?)(?:$|\/(.*)$))/.exec(e.request.url)||[];switch(n){case"stream":!function(e,t){const n=function(e){if(!e)return[0,0];const[,t]=e.split("="),n=t.split(", "),[o,r]=n[0].split("-");return[+o,+r||0]}(e.request.headers.get("Range")),o=JSON.parse(decodeURIComponent(t)),r=R.get(o);var i;e.respondWith(Promise.race([(i=45e3,new Promise(e=>{setTimeout(()=>{e(new Response("",{status:408,statusText:"Request timed out."}))},i)})),r.requestRange(n)]))}(e,o)}}catch(t){e.respondWith(new Response("",{status:500,statusText:"Internal Server Error"}))}},Z=()=>{Y.onfetch=Q};Y.addEventListener("install",e=>{K("installing"),e.waitUntil(Y.skipWaiting())}),Y.addEventListener("activate",e=>{K("activating",Y),e.waitUntil(Y.caches.delete("cachedAssets")),e.waitUntil(Y.clients.claim())}),Y.onerror=e=>{K.error("error:",e)},Y.onunhandledrejection=e=>{K.error("onunhandledrejection:",e)},Y.onoffline=Y.ononline=Z,Z()}]);
//# sourceMappingURL=sw.js.map