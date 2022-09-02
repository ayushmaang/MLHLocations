const Wh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}};Wh();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(n,e){if(!n)throw Nn(e)},Nn=function(n){return new Error("Firebase Database ("+ml.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},jh=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],p=n[t++],m=((s&7)<<18|(a&63)<<12|(u&63)<<6|p&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const a=n[t++],u=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Ps={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,p=u?n[s+1]:0,m=s+2<n.length,y=m?n[s+2]:0,S=a>>2,w=(a&3)<<4|p>>4;let x=(p&15)<<2|y>>6,W=y&63;m||(W=64,u||(x=64)),i.push(t[S],t[w],t[x],t[W])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],p=s<n.length?t[n.charAt(s)]:0;++s;const y=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||p==null||y==null||w==null)throw Error();const x=a<<2|p>>4;if(i.push(x),y!==64){const W=p<<4&240|y>>2;if(i.push(W),w!==64){const M=y<<6&192|w;i.push(M)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},vl=function(n){const e=yl(n);return Ps.encodeByteArray(e,!0)},Cl=function(n){return vl(n).replace(/\./g,"")},ds=function(n){try{return Ps.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n){return bl(void 0,n)}function bl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!qh(t)||(n[t]=bl(n[t],e[t]));return n}function qh(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ds(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Vh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function El(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $h(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wl(){return ml.NODE_ADMIN===!0}function zh(){return typeof indexedDB=="object"}function Gh(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="FirebaseError";class Mt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Kh,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?Yh(a,i):"Error",p=`${this.serviceName}: ${u} (${s}).`;return new Mt(s,p,i)}}function Yh(n,e){return n.replace(Qh,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Qh=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n){return JSON.parse(n)}function be(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=function(n){let e={},t={},i={},s="";try{const a=n.split(".");e=ti(ds(a[0])||""),t=ti(ds(a[1])||""),s=a[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Xh=function(n){const e=Tl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Jh=function(n){const e=Tl(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function bn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function fs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zi(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Gi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const a=n[s],u=e[s];if(ga(a)&&ga(u)){if(!Gi(a,u))return!1}else if(a!==u)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function ga(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)i[w]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let w=0;w<16;w++)i[w]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let w=16;w<80;w++){const x=i[w-3]^i[w-8]^i[w-14]^i[w-16];i[w]=(x<<1|x>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],p=this.chain_[3],m=this.chain_[4],y,S;for(let w=0;w<80;w++){w<40?w<20?(y=p^a&(u^p),S=1518500249):(y=a^u^p,S=1859775393):w<60?(y=a&u|p&(a|u),S=2400959708):(y=a^u^p,S=3395469782);const x=(s<<5|s>>>27)+y+m+S+i[w]&4294967295;m=p,p=u,u=(a<<30|a>>>2)&4294967295,a=s,s=x}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[i]=this.chain_[s]>>a&255,++i;return e}}function ed(n,e){const t=new td(n,e);return t.subscribe.bind(t)}class td{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");nd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Jr),s.error===void 0&&(s.error=Jr),s.complete===void 0&&(s.complete=Jr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Jr(){}function Os(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const a=s-55296;i++,F(i<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(i)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},fr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n){return n&&n._delegate?n._delegate:n}class Qt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new dr;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(od(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,u]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);i===p&&u.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sd(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sd(n){return n===Vt?void 0:n}function od(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const ld={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},cd=he.INFO,ud={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},hd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ud[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ms{constructor(e){this.name=e,this._logLevel=cd,this._logHandler=hd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ld[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const dd=(n,e)=>e.some(t=>n instanceof t);let _a,ma;function fd(){return _a||(_a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pd(){return ma||(ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,ps=new WeakMap,Sl=new WeakMap,Zr=new WeakMap,Ls=new WeakMap;function gd(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Rt(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Il.set(t,n)}).catch(()=>{}),Ls.set(e,n),e}function _d(n){if(ps.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});ps.set(n,e)}let gs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ps.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function md(n){gs=n(gs)}function yd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(es(this),e,...t);return Sl.set(i,e.sort?e.sort():[e]),Rt(i)}:pd().includes(n)?function(...e){return n.apply(es(this),e),Rt(Il.get(this))}:function(...e){return Rt(n.apply(es(this),e))}}function vd(n){return typeof n=="function"?yd(n):(n instanceof IDBTransaction&&_d(n),dd(n,fd())?new Proxy(n,gs):n)}function Rt(n){if(n instanceof IDBRequest)return gd(n);if(Zr.has(n))return Zr.get(n);const e=vd(n);return e!==n&&(Zr.set(n,e),Ls.set(e,n)),e}const es=n=>Ls.get(n);function Cd(n,e,{blocked:t,upgrade:i,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),p=Rt(u);return i&&u.addEventListener("upgradeneeded",m=>{i(Rt(u.result),m.oldVersion,m.newVersion,Rt(u.transaction))}),t&&u.addEventListener("blocked",()=>t()),p.then(m=>{a&&m.addEventListener("close",()=>a()),s&&m.addEventListener("versionchange",()=>s())}).catch(()=>{}),p}const bd=["get","getKey","getAll","getAllKeys","count"],Ed=["put","add","delete","clear"],ts=new Map;function ya(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ts.get(e))return ts.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Ed.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||bd.includes(t)))return;const a=async function(u,...p){const m=this.transaction(u,s?"readwrite":"readonly");let y=m.store;return i&&(y=y.index(p.shift())),(await Promise.all([y[t](...p),s&&m.done]))[0]};return ts.set(e,a),a}md(n=>({...n,get:(e,t,i)=>ya(e,t)||n.get(e,t,i),has:(e,t)=>!!ya(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Td(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Td(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _s="@firebase/app",va="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Ms("@firebase/app"),Id="@firebase/app-compat",Sd="@firebase/analytics-compat",Nd="@firebase/analytics",Rd="@firebase/app-check-compat",xd="@firebase/app-check",kd="@firebase/auth",Ad="@firebase/auth-compat",Pd="@firebase/database",Dd="@firebase/database-compat",Od="@firebase/functions",Md="@firebase/functions-compat",Ld="@firebase/installations",Fd="@firebase/installations-compat",Ud="@firebase/messaging",Hd="@firebase/messaging-compat",Wd="@firebase/performance",jd="@firebase/performance-compat",Bd="@firebase/remote-config",qd="@firebase/remote-config-compat",Vd="@firebase/storage",$d="@firebase/storage-compat",zd="@firebase/firestore",Gd="@firebase/firestore-compat",Kd="firebase",Yd="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="[DEFAULT]",Qd={[_s]:"fire-core",[Id]:"fire-core-compat",[Nd]:"fire-analytics",[Sd]:"fire-analytics-compat",[xd]:"fire-app-check",[Rd]:"fire-app-check-compat",[kd]:"fire-auth",[Ad]:"fire-auth-compat",[Pd]:"fire-rtdb",[Dd]:"fire-rtdb-compat",[Od]:"fire-fn",[Md]:"fire-fn-compat",[Ld]:"fire-iid",[Fd]:"fire-iid-compat",[Ud]:"fire-fcm",[Hd]:"fire-fcm-compat",[Wd]:"fire-perf",[jd]:"fire-perf-compat",[Bd]:"fire-rc",[qd]:"fire-rc-compat",[Vd]:"fire-gcs",[$d]:"fire-gcs-compat",[zd]:"fire-fst",[Gd]:"fire-fst-compat","fire-js":"fire-js",[Kd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new Map,ms=new Map;function Xd(n,e){try{n.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function En(n){const e=n.name;if(ms.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;ms.set(e,n);for(const t of Ki.values())Xd(t,n);return!0}function Fs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jt=new fi("app","Firebase",Jd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=Yd;function ef(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Nl,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Jt.create("bad-app-name",{appName:String(i)});const s=Ki.get(i);if(s){if(Gi(n,s.options)&&Gi(t,s.config))return s;throw Jt.create("duplicate-app",{appName:i})}const a=new ad(i);for(const p of ms.values())a.addComponent(p);const u=new Zd(n,t,a);return Ki.set(i,u),u}function Rl(n=Nl){const e=Ki.get(n);if(!e)throw Jt.create("no-app",{appName:n});return e}function xt(n,e,t){var i;let s=(i=Qd[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const p=[`Unable to register library "${s}" with version "${e}":`];a&&p.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&p.push("and"),u&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(p.join(" "));return}En(new Qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="firebase-heartbeat-database",nf=1,ni="firebase-heartbeat-store";let ns=null;function xl(){return ns||(ns=Cd(tf,nf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ni)}}}).catch(n=>{throw Jt.create("idb-open",{originalErrorMessage:n.message})})),ns}async function rf(n){var e;try{return(await xl()).transaction(ni).objectStore(ni).get(kl(n))}catch(t){if(t instanceof Mt)Xt.warn(t.message);else{const i=Jt.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});Xt.warn(i.message)}}}async function Ca(n,e){var t;try{const s=(await xl()).transaction(ni,"readwrite");return await s.objectStore(ni).put(e,kl(n)),s.done}catch(i){if(i instanceof Mt)Xt.warn(i.message);else{const s=Jt.create("idb-set",{originalErrorMessage:(t=i)===null||t===void 0?void 0:t.message});Xt.warn(s.message)}}}function kl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=1024,of=30*24*60*60*1e3;class af{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ba();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=of}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ba(),{heartbeatsToSend:t,unsentEntries:i}=lf(this._heartbeatsCache.heartbeats),s=Cl(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ba(){return new Date().toISOString().substring(0,10)}function lf(n,e=sf){const t=[];let i=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Ea(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ea(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class cf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zh()?Gh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ea(n){return Cl(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n){En(new Qt("platform-logger",e=>new wd(e),"PRIVATE")),En(new Qt("heartbeat",e=>new af(e),"PRIVATE")),xt(_s,va,n),xt(_s,va,"esm2017"),xt("fire-js","")}uf("");var hf="firebase",df="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(hf,df,"app");function Us(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Al(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ff=Al,Pl=new fi("auth","Firebase",Al());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Ms("@firebase/auth");function Bi(n,...e){wa.logLevel<=he.ERROR&&wa.error(`Auth (${pi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(n,...e){throw Hs(n,...e)}function it(n,...e){return Hs(n,...e)}function Dl(n,e,t){const i=Object.assign(Object.assign({},ff()),{[e]:t});return new fi("auth","Firebase",i).create(e,{appName:n.name})}function pf(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&st(n,"argument-error"),Dl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hs(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Pl.create(n,...e)}function Z(n,e,...t){if(!n)throw Hs(e,...t)}function pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bi(e),new Error(e)}function yt(n,e){n||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Map;function gt(n){yt(n instanceof Function,"Expected a class definition");let e=Ta.get(n);return e?(yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ta.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n,e){const t=Fs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Gi(a,e!=null?e:{}))return s;st(s,"already-initialized")}return t.initialize({options:e})}function _f(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(gt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function mf(){return Ia()==="http:"||Ia()==="https:"}function Ia(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mf()||Vh()||"connection"in navigator)?navigator.onLine:!0}function vf(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){this.shortDelay=e,this.longDelay=t,yt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ds()||El()}get(){return yf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n,e){yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new gi(3e4,6e4);function Ef(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function pr(n,e,t,i,s={}){return Ml(n,s,async()=>{let a={},u={};i&&(e==="GET"?u=i:a={body:JSON.stringify(i)});const p=Rn(Object.assign({key:n.config.apiKey},u)).slice(1),m=await n._getAdditionalHeaders();return m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode),Ol.fetch()(Ll(n,n.config.apiHost,t,p),Object.assign({method:e,headers:m,referrerPolicy:"no-referrer"},a))})}async function Ml(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Cf),e);try{const s=new Tf(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Hi(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const p=a.ok?u.errorMessage:u.error.message,[m,y]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hi(n,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw Hi(n,"email-already-in-use",u);if(m==="USER_DISABLED")throw Hi(n,"user-disabled",u);const S=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Dl(n,S,y);st(n,S)}}catch(s){if(s instanceof Mt)throw s;st(n,"network-request-failed")}}async function wf(n,e,t,i,s={}){const a=await pr(n,e,t,i,s);return"mfaPendingCredential"in a&&st(n,"multi-factor-auth-required",{_serverResponse:a}),a}function Ll(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Ws(n.config,s):`${n.config.apiScheme}://${s}`}class Tf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(it(this.auth,"network-request-failed")),bf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hi(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=it(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(n,e){return pr(n,"POST","/v1/accounts:delete",e)}async function Sf(n,e){return pr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nf(n,e=!1){const t=Ct(n),i=await t.getIdToken(e),s=js(i);Z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:i,authTime:Qn(is(s.auth_time)),issuedAtTime:Qn(is(s.iat)),expirationTime:Qn(is(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function is(n){return Number(n)*1e3}function js(n){var e;const[t,i,s]=n.split(".");if(t===void 0||i===void 0||s===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const a=ds(i);return a?JSON.parse(a):(Bi("Failed to decode base64 JWT payload"),null)}catch(a){return Bi("Caught error parsing JWT payload as JSON",(e=a)===null||e===void 0?void 0:e.toString()),null}}function Rf(n){const e=js(n);return Z(e,"internal-error"),Z(typeof e.exp!="undefined","internal-error"),Z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Mt&&xf(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function xf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(n){var e;const t=n.auth,i=await n.getIdToken(),s=await ii(n,Sf(t,{idToken:i}));Z(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Df(a.providerUserInfo):[],p=Pf(n.providerData,u),m=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!(p!=null&&p.length),S=m?y:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:p,metadata:new Fl(a.createdAt,a.lastLoginAt),isAnonymous:S};Object.assign(n,w)}async function Af(n){const e=Ct(n);await Yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pf(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Df(n){return n.map(e=>{var{providerId:t}=e,i=Us(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Of(n,e){const t=await Ml(n,{},async()=>{const i=Rn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=Ll(n,s,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Ol.fetch()(u,{method:"POST",headers:p,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken!="undefined","internal-error"),Z(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:a}=await Of(e,t);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:a}=t,u=new ri;return i&&(Z(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),s&&(Z(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Z(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n,e){Z(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Kt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,a=Us(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Fl(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ii(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Nf(this,e)}reload(){return Af(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Yi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ii(this,If(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,a,u,p,m,y,S;const w=(i=t.displayName)!==null&&i!==void 0?i:void 0,x=(s=t.email)!==null&&s!==void 0?s:void 0,W=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,M=(u=t.photoURL)!==null&&u!==void 0?u:void 0,j=(p=t.tenantId)!==null&&p!==void 0?p:void 0,le=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,Q=(y=t.createdAt)!==null&&y!==void 0?y:void 0,at=(S=t.lastLoginAt)!==null&&S!==void 0?S:void 0,{uid:Ze,emailVerified:$e,isAnonymous:Pn,providerData:h,stsTokenManager:on}=t;Z(Ze&&on,e,"internal-error");const lt=ri.fromJSON(this.name,on);Z(typeof Ze=="string",e,"internal-error"),Tt(w,e.name),Tt(x,e.name),Z(typeof $e=="boolean",e,"internal-error"),Z(typeof Pn=="boolean",e,"internal-error"),Tt(W,e.name),Tt(M,e.name),Tt(j,e.name),Tt(le,e.name),Tt(Q,e.name),Tt(at,e.name);const et=new Kt({uid:Ze,auth:e,email:x,emailVerified:$e,displayName:w,isAnonymous:Pn,photoURL:M,phoneNumber:W,tenantId:j,stsTokenManager:lt,createdAt:Q,lastLoginAt:at});return h&&Array.isArray(h)&&(et.providerData=h.map(Ti=>Object.assign({},Ti))),le&&(et._redirectEventId=le),et}static async _fromIdTokenResponse(e,t,i=!1){const s=new ri;s.updateFromServerResponse(t);const a=new Kt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Yi(a),a}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ul.type="NONE";const Sa=Ul;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n,e,t){return`firebase:${n}:${e}:${t}`}class mn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=qi(this.userKey,s.apiKey,a),this.fullPersistenceKey=qi("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new mn(gt(Sa),e,i);const s=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=s[0]||gt(Sa);const u=qi(i,e.config.apiKey,e.name);let p=null;for(const y of t)try{const S=await y._get(u);if(S){const w=Kt._fromJSON(e,S);y!==a&&(p=w),a=y;break}}catch{}const m=s.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!m.length?new mn(a,e,i):(a=m[0],p&&await a._set(u,p.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(u)}catch{}})),new mn(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ql(e))return"Blackberry";if(Vl(e))return"Webos";if(Bs(e))return"Safari";if((e.includes("chrome/")||Wl(e))&&!e.includes("edge/"))return"Chrome";if(Bl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Hl(n=Re()){return/firefox\//i.test(n)}function Bs(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wl(n=Re()){return/crios\//i.test(n)}function jl(n=Re()){return/iemobile/i.test(n)}function Bl(n=Re()){return/android/i.test(n)}function ql(n=Re()){return/blackberry/i.test(n)}function Vl(n=Re()){return/webos/i.test(n)}function gr(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Mf(n=Re()){var e;return gr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lf(){return $h()&&document.documentMode===10}function $l(n=Re()){return gr(n)||Bl(n)||Vl(n)||ql(n)||/windows phone/i.test(n)||jl(n)}function Ff(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(n,e=[]){let t;switch(n){case"Browser":t=Na(Re());break;case"Worker":t=`${Na(Re())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${pi}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((u,p)=>{try{const m=e(a);u(m)}catch(m){p(m)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const a of i)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=s)===null||t===void 0?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ra(this),this.idTokenSubscription=new Ra(this),this.beforeStateQueue=new Uf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gt(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await mn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===p)&&(m==null?void 0:m.user)&&(s=m.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Yi(e)}catch(i){if(((t=i)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ct(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gt(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await mn.create(this,[gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t),u=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(u,this,"internal-error"),u.then(()=>a(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function _r(n){return Ct(n)}class Ra{constructor(e){this.auth=e,this.observer=null,this.addObserver=ed(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(n,e){return wf(n,"POST","/v1/accounts:signInWithIdp",Ef(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="http://localhost";class Zt extends Gl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):st("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,a=Us(t,["providerId","signInMethod"]);if(!i||!s)return null;const u=new Zt(i,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return yn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,yn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yn(e,t)}buildRequest(){const e={requestUri:Wf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends qs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends _i{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends _i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ft.credential(t,i)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends _i{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends _i{constructor(){super("twitter.com")}static credential(e,t){return Zt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Nt.credential(t,i)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const a=await Kt._fromIdTokenResponse(e,i,s),u=xa(i);return new wn({user:a,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=xa(i);return new wn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function xa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends Mt{constructor(e,t,i,s){var a;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Qi.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Qi(e,t,i,s)}}function Kl(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Qi._fromErrorAndOperation(n,a,e,i):a})}async function jf(n,e,t=!1){const i=await ii(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(n,e,t=!1){var i;const{auth:s}=n,a="reauthenticate";try{const u=await ii(n,Kl(s,a,e,n),t);Z(u.idToken,s,"internal-error");const p=js(u.idToken);Z(p,s,"internal-error");const{sub:m}=p;return Z(n.uid===m,s,"user-mismatch"),wn._forOperation(n,a,u)}catch(u){throw((i=u)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&st(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(n,e,t=!1){const i="signIn",s=await Kl(n,i,e),a=await wn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(a.user),a}const Xi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xi,"1"),this.storage.removeItem(Xi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(){const n=Re();return Bs(n)||gr(n)}const $f=1e3,zf=10;class Ql extends Yl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Vf()&&Ff(),this.fallbackToPolling=$l(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,p,m)=>{this.notifyListeners(u,m)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const u=this.storage.getItem(i);if(e.newValue!==u)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},a=this.storage.getItem(i);Lf()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zf):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},$f)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ql.type="LOCAL";const Gf=Ql;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Yl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xl.type="SESSION";const Jl=Xl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new mr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const p=Array.from(u).map(async y=>y(t.origin,a)),m=await Kf(p);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((p,m)=>{const y=Vs("",20);s.port1.start();const S=setTimeout(()=>{m(new Error("unsupported_event"))},i);u={messageChannel:s,onMessage(w){const x=w;if(x.data.eventId===y)switch(x.data.status){case"ack":clearTimeout(S),a=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(x.data.response);break;default:clearTimeout(S),clearTimeout(a),m(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function Qf(n){rt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){return typeof rt().WorkerGlobalScope!="undefined"&&typeof rt().importScripts=="function"}async function Xf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Zf(){return Zl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="firebaseLocalStorageDb",ep=1,Ji="firebaseLocalStorage",tc="fbase_key";class mi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yr(n,e){return n.transaction([Ji],e?"readwrite":"readonly").objectStore(Ji)}function tp(){const n=indexedDB.deleteDatabase(ec);return new mi(n).toPromise()}function vs(){const n=indexedDB.open(ec,ep);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ji,{keyPath:tc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ji)?e(i):(i.close(),await tp(),e(await vs()))})})}async function ka(n,e,t){const i=yr(n,!0).put({[tc]:e,value:t});return new mi(i).toPromise()}async function np(n,e){const t=yr(n,!1).get(e),i=await new mi(t).toPromise();return i===void 0?null:i.value}function Aa(n,e){const t=yr(n,!0).delete(e);return new mi(t).toPromise()}const ip=800,rp=3;class nc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>rp)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mr._getInstance(Zf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Xf(),!this.activeServiceWorker)return;this.sender=new Yf(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vs();return await ka(e,Xi,"1"),await Aa(e,Xi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ka(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>np(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Aa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=yr(s,!1).getAll();return new mi(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ip)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nc.type="LOCAL";const sp=nc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ap(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const a=it("internal-error");a.customData=s,t(a)},i.type="text/javascript",i.charset="UTF-8",op().appendChild(i)})}function lp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new gi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n,e){return e?gt(e):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Gl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cp(n){return qf(n.auth,new $s(n),n.bypassAuthState)}function up(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),Bf(t,new $s(n),n.bypassAuthState)}async function hp(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),jf(t,new $s(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:a,error:u,type:p}=e;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cp;case"linkViaPopup":case"linkViaRedirect":return hp;case"reauthViaPopup":case"reauthViaRedirect":return up;default:st(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new gi(2e3,1e4);class gn extends rc{constructor(e,t,i,s,a){super(e,t,s,a),this.provider=i,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");const e=Vs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,dp.get())};e()}}gn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="pendingRedirect",Vi=new Map;class pp extends rc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Vi.get(this.auth._key());if(!e){try{const i=await gp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Vi.set(this.auth._key(),e)}return this.bypassAuthState||Vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gp(n,e){const t=oc(e),i=sc(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function _p(n,e){return sc(n)._set(oc(e),"true")}function mp(n,e){Vi.set(n._key(),e)}function sc(n){return gt(n._redirectPersistence)}function oc(n){return qi(fp,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n,e,t){return vp(n,e,t)}async function vp(n,e,t){const i=_r(n);pf(n,e,qs);const s=ic(i,t);return await _p(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function Cp(n,e){return await _r(n)._initializationPromise,ac(n,e,!1)}async function ac(n,e,t=!1){const i=_r(n),s=ic(i,e),u=await new pp(i,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=10*60*1e3;class Ep{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!lc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(it(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pa(e))}saveEventToCache(e){this.cachedEventUids.add(Pa(e)),this.lastProcessedEventTime=Date.now()}}function Pa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function lc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(n,e={}){return pr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sp=/^https?/;async function Np(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Tp(n);for(const t of e)try{if(Rp(t))return}catch{}st(n,"unauthorized-domain")}function Rp(n){const e=ys(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!Sp.test(t))return!1;if(Ip.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=new gi(3e4,6e4);function Da(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function kp(n){return new Promise((e,t)=>{var i,s,a;function u(){Da(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Da(),t(it(n,"network-request-failed"))},timeout:xp.get()})}if(!((s=(i=rt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=rt().gapi)===null||a===void 0)&&a.load)u();else{const p=lp("iframefcb");return rt()[p]=()=>{gapi.load?u():t(it(n,"network-request-failed"))},ap(`https://apis.google.com/js/api.js?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw $i=null,e})}let $i=null;function Ap(n){return $i=$i||kp(n),$i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new gi(5e3,15e3),Dp="__/auth/iframe",Op="emulator/auth/iframe",Mp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fp(n){const e=n.config;Z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ws(e,Op):`https://${n.config.authDomain}/${Dp}`,i={apiKey:e.apiKey,appName:n.name,v:pi},s=Lp.get(n.config.apiHost);s&&(i.eid=s);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Rn(i).slice(1)}`}async function Up(n){const e=await Ap(n),t=rt().gapi;return Z(t,n,"internal-error"),e.open({where:document.body,url:Fp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mp,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const u=it(n,"network-request-failed"),p=rt().setTimeout(()=>{a(u)},Pp.get());function m(){rt().clearTimeout(p),s(i)}i.ping(m).then(m,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wp=500,jp=600,Bp="_blank",qp="http://localhost";class Oa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vp(n,e,t,i=Wp,s=jp){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let p="";const m=Object.assign(Object.assign({},Hp),{width:i.toString(),height:s.toString(),top:a,left:u}),y=Re().toLowerCase();t&&(p=Wl(y)?Bp:t),Hl(y)&&(e=e||qp,m.scrollbars="yes");const S=Object.entries(m).reduce((x,[W,M])=>`${x}${W}=${M},`,"");if(Mf(y)&&p!=="_self")return $p(e||"",p),new Oa(null);const w=window.open(e||"",p,S);Z(w,n,"popup-blocked");try{w.focus()}catch{}return new Oa(w)}function $p(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="__/auth/handler",Gp="emulator/auth/handler";function Ma(n,e,t,i,s,a){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:pi,eventId:s};if(e instanceof qs){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",fs(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries(a||{}))u[m]=y}if(e instanceof _i){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(u.scopes=m.join(","))}n.tenantId&&(u.tid=n.tenantId);const p=u;for(const m of Object.keys(p))p[m]===void 0&&delete p[m];return`${Kp(n)}?${Rn(p).slice(1)}`}function Kp({config:n}){return n.emulator?Ws(n,Gp):`https://${n.authDomain}/${zp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="webStorageSupport";class Yp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jl,this._completeRedirectFn=ac,this._overrideRedirectResult=mp}async _openPopup(e,t,i,s){var a;yt((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=Ma(e,t,i,ys(),s);return Vp(e,u,Vs())}async _openRedirect(e,t,i,s){return await this._originValidation(e),Qf(Ma(e,t,i,ys(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(yt(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Up(e),i=new Ep(e);return t.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rs,{type:rs},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[rs];u!==void 0&&t(!!u),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Np(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $l()||Bs()||gr()}}const Qp=Yp;var La="@firebase/auth",Fa="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zp(n){En(new Qt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:a,authDomain:u}=i.options;return((p,m)=>{Z(a&&!a.includes(":"),"invalid-api-key",{appName:p.name}),Z(!(u!=null&&u.includes(":")),"argument-error",{appName:p.name});const y={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zl(n)},S=new Hf(p,m,y);return _f(S,t),S})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),En(new Qt("auth-internal",e=>{const t=_r(e.getProvider("auth").getImmediate());return(i=>new Xp(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(La,Fa,Jp(n)),xt(La,Fa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n=Rl()){const e=Fs(n,"auth");return e.isInitialized()?e.getImmediate():gf(n,{popupRedirectResolver:Qp,persistence:[sp,Gf,Jl]})}Zp("Browser");const Ua="@firebase/database",Ha="0.13.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc="";function tg(n){cc=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ti(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ng(e)}}catch{}return new ig},zt=uc("localStorage"),Cs=uc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Ms("@firebase/database"),rg=function(){let n=1;return function(){return n++}}(),hc=function(n){const e=id(n),t=new Zh;t.update(e);const i=t.digest();return Ps.encodeByteArray(i)},yi=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=yi.apply(null,i):typeof i=="object"?e+=be(i):e+=i,e+=" "}return e};let Yt=null,Wa=!0;const sg=function(n,e){F(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(vn.logLevel=he.VERBOSE,Yt=vn.log.bind(vn),e&&Cs.set("logging_enabled",!0)):typeof n=="function"?Yt=n:(Yt=null,Cs.remove("logging_enabled"))},Ne=function(...n){if(Wa===!0&&(Wa=!1,Yt===null&&Cs.get("logging_enabled")===!0&&sg(!0)),Yt){const e=yi.apply(null,n);Yt(e)}},vi=function(n){return function(...e){Ne(n,...e)}},bs=function(...n){const e="FIREBASE INTERNAL ERROR: "+yi(...n);vn.error(e)},en=function(...n){const e=`FIREBASE FATAL ERROR: ${yi(...n)}`;throw vn.error(e),new Error(e)},Le=function(...n){const e="FIREBASE WARNING: "+yi(...n);vn.warn(e)},og=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ag=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Tn="[MIN_NAME]",tn="[MAX_NAME]",xn=function(n,e){if(n===e)return 0;if(n===Tn||e===tn)return-1;if(e===Tn||n===tn)return 1;{const t=ja(n),i=ja(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},lg=function(n,e){return n===e?0:n<e?-1:1},$n=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+be(e))},zs=function(n){if(typeof n!="object"||n===null)return be(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=be(e[i]),t+=":",t+=zs(n[e[i]]);return t+="}",t},fc=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Fe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const pc=function(n){F(!dc(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,a,u,p,m;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(p=Math.min(Math.floor(Math.log(n)/Math.LN2),i),a=p+i,u=Math.round(n*Math.pow(2,t-p)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-i-t))));const y=[];for(m=t;m;m-=1)y.push(u%2?1:0),u=Math.floor(u/2);for(m=e;m;m-=1)y.push(a%2?1:0),a=Math.floor(a/2);y.push(s?1:0),y.reverse();const S=y.join("");let w="";for(m=0;m<64;m+=8){let x=parseInt(S.substr(m,8),2).toString(16);x.length===1&&(x="0"+x),w=w+x}return w.toLowerCase()},cg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ug=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hg(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const dg=new RegExp("^-?(0*)\\d{1,10}$"),fg=-2147483648,pg=2147483647,ja=function(n){if(dg.test(n)){const e=Number(n);if(e>=fg&&e<=pg)return e}return null},kn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Le("Exception was thrown by user callback.",t),e},Math.floor(0))}},gg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xn=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(e)}}class Es{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Es.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="5",gc="v",_c="s",mc="r",yc="f",vc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cc="ls",bc="p",ws="ac",Ec="websocket",wc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t,i,s,a=!1,u="",p=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function vg(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Tc(n,e,t){F(typeof e=="string","typeof type must == string"),F(typeof t=="object","typeof params must == object");let i;if(e===Ec)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===wc)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vg(n)&&(t.ns=n.namespace);const s=[];return Fe(t,(a,u)=>{s.push(a+"="+u)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.counters_={}}incrementCounter(e,t=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Bh(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss={},os={};function Ks(n){const e=n.toString();return ss[e]||(ss[e]=new Cg),ss[e]}function bg(n,e){const t=n.toString();return os[t]||(os[t]=e()),os[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&kn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="start",wg="close",Tg="pLPCommand",Ig="pRTLPCB",Ic="id",Sc="pw",Nc="ser",Sg="cb",Ng="seg",Rg="ts",xg="d",kg="dframe",Rc=1870,xc=30,Ag=Rc-xc,Pg=25e3,Dg=3e4;class _n{constructor(e,t,i,s,a,u,p){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vi(e),this.stats_=Ks(t),this.urlFn=m=>(this.appCheckToken&&(m[ws]=this.appCheckToken),Tc(t,wc,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Eg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Dg)),ag(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ys((...a)=>{const[u,p,m,y,S]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Ba)this.id=p,this.password=m;else if(u===wg)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,p]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,p)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ba]="t",i[Nc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Sg]=this.scriptTagHolder.uniqueCallbackIdentifier),i[gc]=Gs,this.transportSessionId&&(i[_c]=this.transportSessionId),this.lastSessionId&&(i[Cc]=this.lastSessionId),this.applicationId&&(i[bc]=this.applicationId),this.appCheckToken&&(i[ws]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&vc.test(location.hostname)&&(i[mc]=yc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_n.forceAllow_=!0}static forceDisallow(){_n.forceDisallow_=!0}static isAvailable(){return _n.forceAllow_?!0:!_n.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!cg()&&!ug()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=vl(t),s=fc(i,Ag);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[kg]="t",i[Ic]=e,i[Sc]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=be(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ys{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rg(),window[Tg+this.uniqueCallbackIdentifier]=e,window[Ig+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ys.createIFrame_();let a="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const p=document.domain;a='<script>document.domain="'+p+'";<\/script>'}const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(p){Ne("frame writing exception"),p.stack&&Ne(p.stack),Ne(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ic]=this.myID,e[Sc]=this.myPW,e[Nc]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xc+i.length<=Rc;){const u=this.pendingSegs.shift();i=i+"&"+Ng+s+"="+u.seg+"&"+Rg+s+"="+u.ts+"&"+xg+s+"="+u.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Pg)),a=()=>{clearTimeout(s),i()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=16384,Mg=45e3;let Zi=null;typeof MozWebSocket!="undefined"?Zi=MozWebSocket:typeof WebSocket!="undefined"&&(Zi=WebSocket);class Ye{constructor(e,t,i,s,a,u,p){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vi(this.connId),this.stats_=Ks(t),this.connURL=Ye.connectionURL_(t,u,p,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,a){const u={};return u[gc]=Gs,typeof location!="undefined"&&location.hostname&&vc.test(location.hostname)&&(u[mc]=yc),t&&(u[_c]=t),i&&(u[Cc]=i),s&&(u[ws]=s),a&&(u[bc]=a),Tc(e,Ec,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let i;wl(),this.mySock=new Zi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Zi!==null&&!Ye.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=ti(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=fc(t,Og);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Mg))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_n,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ye&&Ye.isAvailable();let i=t&&!Ye.previouslyFailed();if(e.webSocketOnly&&(t||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ye];else{const s=this.transports_=[];for(const a of si.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);si.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}si.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=6e4,Fg=5e3,Ug=10*1024,Hg=100*1024,as="t",qa="d",Wg="s",Va="r",jg="e",$a="o",za="a",Ga="n",Ka="p",Bg="h";class qg{constructor(e,t,i,s,a,u,p,m,y,S){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=p,this.onDisconnect_=m,this.onKill_=y,this.lastSessionId=S,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vi("c:"+this.id+":"),this.transportManager_=new si(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Xn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ug?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(as in e){const t=e[as];t===za?this.upgradeIfSecondaryHealthy_():t===Va?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===$a&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=$n("t",e),i=$n("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ka,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:za,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ga,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=$n("t",e),i=$n("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=$n(as,e);if(qa in e){const i=e[qa];if(t===Bg)this.onHandshake_(i);else if(t===Ga){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Wg?this.onConnectionShutdown_(i):t===Va?this.onReset_(i):t===jg?bs("Server Error: "+i):t===$a?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Gs!==i&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Xn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Lg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Fg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ka,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!i||i===s[a].context)){s.splice(a,1);return}}validateEventType_(e){F(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Ac{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Ds()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new er}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=32,Qa=768;class de{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function se(){return new de("")}function ie(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Pt(n){return n.pieces_.length-n.pieceNum_}function fe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new de(n.pieces_,e)}function Pc(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Vg(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Dc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Oc(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new de(e,0)}function Ee(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof de)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new de(t,0)}function ne(n){return n.pieceNum_>=n.pieces_.length}function xe(n,e){const t=ie(n),i=ie(e);if(t===null)return e;if(t===i)return xe(fe(n),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Mc(n,e){if(Pt(n)!==Pt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Qe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Pt(n)>Pt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class $g{constructor(e,t){this.errorPrefix_=t,this.parts_=Dc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=fr(this.parts_[i]);Lc(this)}}function zg(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=fr(e),Lc(n)}function Gg(n){const e=n.parts_.pop();n.byteLength_-=fr(e),n.parts_.length>0&&(n.byteLength_-=1)}function Lc(n){if(n.byteLength_>Qa)throw new Error(n.errorPrefix_+"has a key path longer than "+Qa+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ya)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ya+") or object contains a cycle "+$t(n))}function $t(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Ac{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Qs}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=1e3,Kg=60*5*1e3,Xa=30*1e3,Yg=1.3,Qg=3e4,Xg="server_kill",Ja=3;class mt extends kc{constructor(e,t,i,s,a,u,p,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=p,this.authOverride_=m,this.id=mt.nextPersistentConnectionId_++,this.log_=vi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zn,this.maxReconnectDelay_=Kg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m&&!wl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&er.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(be(a)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new dr,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:u=>{const p=u.d;u.s==="ok"?t.resolve(p):t.reject(p)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,i,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const p={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(u).set(a,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const a={p:i},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,p=>{const m=p.d,y=p.s;mt.warnOnListenWarnings_(m,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",p),y!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(y,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&vt(e,"w")){const i=bn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Jh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Xh(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=i,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const a={p:t,d:i};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,a){this.initConnection_();const u={p:t,d:i};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const a=i.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):bs("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Qg&&(this.reconnectDelay_=zn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Yg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+mt.nextConnectionId_++,a=this.lastSessionId;let u=!1,p=null;const m=function(){p?p.close():(u=!0,i())},y=function(w){F(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(w)};this.realtime_={close:m,sendRequest:y};const S=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,x]=await Promise.all([this.authTokenProvider_.getToken(S),this.appCheckTokenProvider_.getToken(S)]);u?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=x&&x.token,p=new qg(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,W=>{Le(W+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xg)},a))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&Le(w),m())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fs(this.interruptReasons_)&&(this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(a=>zs(a)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new de(e).toString();let s;if(this.listens.has(i)){const a=this.listens.get(i);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ne("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ja&&(this.reconnectDelay_=Xa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ne("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ja&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+cc.replace(/\./g,"-")]=1,Ds()?e["framework.cordova"]=1:El()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=er.getInstance().currentlyOnline();return fs(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new te(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new te(Tn,e),s=new te(Tn,t);return this.compare(i,s)!==0}minPost(){return te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi;class Fc extends vr{static get __EMPTY_NODE(){return Wi}static set __EMPTY_NODE(e){Wi=e}compare(e,t){return xn(e.name,t.name)}isDefinedOn(e){throw Nn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return te.MIN}maxPost(){return new te(tn,Wi)}makePost(e,t){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Wi)}toString(){return".key"}}const Cn=new Fc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,i,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?i(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,t,i,s,a){this.key=e,this.value=t,this.color=i!=null?i:Te.RED,this.left=s!=null?s:Me.EMPTY_NODE,this.right=a!=null?a:Me.EMPTY_NODE}copy(e,t,i,s,a){return new Te(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,a!=null?a:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const a=i(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class Jg{copy(e,t,i,s,a){return this}insert(e,t,i){return new Te(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,t=Me.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Me(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ji(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ji(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ji(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ji(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new Jg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(n,e){return xn(n.name,e.name)}function Xs(n,e){return xn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;function e_(n){Ts=n}const Uc=function(n){return typeof n=="number"?"number:"+pc(n):"string:"+n},Hc=function(n){if(n.isLeafNode()){const e=n.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else F(n===Ts||n.isEmpty(),"priority of unexpected type.");F(n===Ts||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za;class we{constructor(e,t=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hc(this.priorityNode_)}static set __childrenNodeConstructor(e){Za=e}static get __childrenNodeConstructor(){return Za}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:ie(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=ie(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(F(i!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=pc(this.value_):e+=this.value_,this.lazyHash_=hc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=we.VALUE_TYPE_ORDER.indexOf(t),a=we.VALUE_TYPE_ORDER.indexOf(i);return F(s>=0,"Unknown leaf type: "+t),F(a>=0,"Unknown leaf type: "+i),s===a?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc,jc;function t_(n){Wc=n}function n_(n){jc=n}class i_ extends vr{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),a=i.compareTo(s);return a===0?xn(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return te.MIN}maxPost(){return new te(tn,new we("[PRIORITY-POST]",jc))}makePost(e,t){const i=Wc(e);return new te(t,new we("[PRIORITY-POST]",i))}toString(){return".priority"}}const me=new i_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=Math.log(2);class s_{constructor(e){const t=a=>parseInt(Math.log(a)/r_,10),i=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const tr=function(n,e,t,i){n.sort(e);const s=function(m,y){const S=y-m;let w,x;if(S===0)return null;if(S===1)return w=n[m],x=t?t(w):w,new Te(x,w.node,Te.BLACK,null,null);{const W=parseInt(S/2,10)+m,M=s(m,W),j=s(W+1,y);return w=n[W],x=t?t(w):w,new Te(x,w.node,Te.BLACK,M,j)}},a=function(m){let y=null,S=null,w=n.length;const x=function(M,j){const le=w-M,Q=w;w-=M;const at=s(le+1,Q),Ze=n[le],$e=t?t(Ze):Ze;W(new Te($e,Ze.node,j,null,at))},W=function(M){y?(y.left=M,y=M):(S=M,y=M)};for(let M=0;M<m.count;++M){const j=m.nextBitIsOne(),le=Math.pow(2,m.count-(M+1));j?x(le,Te.BLACK):(x(le,Te.BLACK),x(le,Te.RED))}return S},u=new s_(n.length),p=a(u);return new Me(i||e,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls;const pn={};class _t{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return F(pn&&me,"ChildrenNode.ts has not been loaded"),ls=ls||new _t({".priority":pn},{".priority":me}),ls}get(e){const t=bn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Me?t:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,t){F(e!==Cn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const a=t.getIterator(te.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),i.push(u),u=a.getNext();let p;s?p=tr(i,e.getCompare()):p=pn;const m=e.toString(),y=Object.assign({},this.indexSet_);y[m]=e;const S=Object.assign({},this.indexes_);return S[m]=p,new _t(S,y)}addToIndexes(e,t){const i=zi(this.indexes_,(s,a)=>{const u=bn(this.indexSet_,a);if(F(u,"Missing index implementation for "+a),s===pn)if(u.isDefinedOn(e.node)){const p=[],m=t.getIterator(te.Wrap);let y=m.getNext();for(;y;)y.name!==e.name&&p.push(y),y=m.getNext();return p.push(e),tr(p,u.getCompare())}else return pn;else{const p=t.get(e.name);let m=s;return p&&(m=m.remove(new te(e.name,p))),m.insert(e,e.node)}});return new _t(i,this.indexSet_)}removeFromIndexes(e,t){const i=zi(this.indexes_,s=>{if(s===pn)return s;{const a=t.get(e.name);return a?s.remove(new te(e.name,a)):s}});return new _t(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn;class Y{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Hc(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Gn||(Gn=new Y(new Me(Xs),null,_t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gn}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Gn:t}}getChild(e){const t=ie(e);return t===null?this:this.getImmediateChild(t).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(F(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new te(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(i,this.children_));const u=s.isEmpty()?Gn:this.priorityNode_;return new Y(s,u,a)}}updateChild(e,t){const i=ie(e);if(i===null)return t;{F(ie(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(fe(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,a=!0;if(this.forEachChild(me,(u,p)=>{t[u]=p.val(e),i++,a&&Y.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*i){const u=[];for(const p in t)u[p]=t[p];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uc(this.getPriority().val())+":"),this.forEachChild(me,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":hc(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const a=s.getPredecessorKey(new te(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new te(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new te(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,te.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ci?-1:0}withIndex(e){if(e===Cn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Cn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(me),s=t.getIterator(me);let a=i.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=i.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Cn?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class o_ extends Y{constructor(){super(new Me(Xs),Y.EMPTY_NODE,_t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const Ci=new o_;Object.defineProperties(te,{MIN:{value:new te(Tn,Y.EMPTY_NODE)},MAX:{value:new te(tn,Ci)}});Fc.__EMPTY_NODE=Y.EMPTY_NODE;we.__childrenNodeConstructor=Y;e_(Ci);n_(Ci);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=!0;function Ie(n,e=null){if(n===null)return Y.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new we(t,Ie(e))}if(!(n instanceof Array)&&a_){const t=[];let i=!1;if(Fe(n,(u,p)=>{if(u.substring(0,1)!=="."){const m=Ie(p);m.isEmpty()||(i=i||!m.getPriority().isEmpty(),t.push(new te(u,m)))}}),t.length===0)return Y.EMPTY_NODE;const a=tr(t,Zg,u=>u.name,Xs);if(i){const u=tr(t,me.getCompare());return new Y(a,Ie(e),new _t({".priority":u},{".priority":me}))}else return new Y(a,Ie(e),_t.Default)}else{let t=Y.EMPTY_NODE;return Fe(n,(i,s)=>{if(vt(n,i)&&i.substring(0,1)!=="."){const a=Ie(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(i,a))}}),t.updatePriority(Ie(e))}}t_(Ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_ extends vr{constructor(e){super(),this.indexPath_=e,F(!ne(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),a=i.compareTo(s);return a===0?xn(e.name,t.name):a}makePost(e,t){const i=Ie(e),s=Y.EMPTY_NODE.updateChild(this.indexPath_,i);return new te(t,s)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,Ci);return new te(tn,e)}toString(){return Dc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_ extends vr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?xn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,t){const i=Ie(e);return new te(t,i)}toString(){return".value"}}const u_=new c_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n){return{type:"value",snapshotNode:n}}function In(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function oi(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ai(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function h_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.index_=e}updateChild(e,t,i,s,a,u){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const p=e.getImmediateChild(t);return p.getChild(s).equals(i.getChild(s))&&p.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?e.hasChild(t)?u.trackChildChange(oi(t,p)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):p.isEmpty()?u.trackChildChange(In(t,i)):u.trackChildChange(ai(t,i,p))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(me,(s,a)=>{t.hasChild(s)||i.trackChildChange(oi(s,a))}),t.isLeafNode()||t.forEachChild(me,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||i.trackChildChange(ai(s,a,u))}else i.trackChildChange(In(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.indexedFilter_=new Js(e.getIndex()),this.index_=e.getIndex(),this.startPost_=li.getStartPost_(e),this.endPost_=li.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,a,u){return this.matches(new te(t,i))||(i=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,a,u)}updateFullNode(e,t,i){t.isLeafNode()&&(t=Y.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Y.EMPTY_NODE);const a=this;return t.forEachChild(me,(u,p)=>{a.matches(new te(u,p))||(s=s.updateImmediateChild(u,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.rangedFilter_=new li(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,a,u){return this.rangedFilter_.matches(new te(t,i))||(i=Y.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,a,u):this.fullLimitUpdateChild_(e,t,i,a,u)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Y.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const p=a.getNext();let m;if(this.reverse_?m=this.index_.compare(this.rangedFilter_.getStartPost(),p)<=0:m=this.index_.compare(p,this.rangedFilter_.getEndPost())<=0,m)s=s.updateImmediateChild(p.name,p.node),u++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(Y.EMPTY_NODE);let a,u,p,m;if(this.reverse_){m=s.getReverseIterator(this.index_),a=this.rangedFilter_.getEndPost(),u=this.rangedFilter_.getStartPost();const w=this.index_.getCompare();p=(x,W)=>w(W,x)}else m=s.getIterator(this.index_),a=this.rangedFilter_.getStartPost(),u=this.rangedFilter_.getEndPost(),p=this.index_.getCompare();let y=0,S=!1;for(;m.hasNext();){const w=m.getNext();!S&&p(a,w)<=0&&(S=!0),S&&y<this.limit_&&p(w,u)<=0?y++:s=s.updateImmediateChild(w.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,a){let u;if(this.reverse_){const w=this.index_.getCompare();u=(x,W)=>w(W,x)}else u=this.index_.getCompare();const p=e;F(p.numChildren()===this.limit_,"");const m=new te(t,i),y=this.reverse_?p.getFirstChild(this.index_):p.getLastChild(this.index_),S=this.rangedFilter_.matches(m);if(p.hasChild(t)){const w=p.getImmediateChild(t);let x=s.getChildAfterChild(this.index_,y,this.reverse_);for(;x!=null&&(x.name===t||p.hasChild(x.name));)x=s.getChildAfterChild(this.index_,x,this.reverse_);const W=x==null?1:u(x,m);if(S&&!i.isEmpty()&&W>=0)return a!=null&&a.trackChildChange(ai(t,i,w)),p.updateImmediateChild(t,i);{a!=null&&a.trackChildChange(oi(t,w));const j=p.updateImmediateChild(t,Y.EMPTY_NODE);return x!=null&&this.rangedFilter_.matches(x)?(a!=null&&a.trackChildChange(In(x.name,x.node)),j.updateImmediateChild(x.name,x.node)):j}}else return i.isEmpty()?e:S&&u(y,m)>=0?(a!=null&&(a.trackChildChange(oi(y.name,y.node)),a.trackChildChange(In(t,i))),p.updateImmediateChild(t,i).updateImmediateChild(y.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Tn}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Zs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function f_(n){return n.loadsAllData()?new Js(n.getIndex()):n.hasLimit()?new d_(n):new li(n)}function el(n){const e={};if(n.isDefault())return e;let t;return n.index_===me?t="$priority":n.index_===u_?t="$value":n.index_===Cn?t="$key":(F(n.index_ instanceof l_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=be(t),n.startSet_&&(e.startAt=be(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+be(n.indexStartName_))),n.endSet_&&(e.endAt=be(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+be(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function tl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==me&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends kc{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=vi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=nr.getListenId_(e,i),p={};this.listens_[u]=p;const m=el(e._queryParams);this.restRequest_(a+".json",m,(y,S)=>{let w=S;if(y===404&&(w=null,y=null),y===null&&this.onDataUpdate_(a,w,!1,i),bn(this.listens_,u)===p){let x;y?y===401?x="permission_denied":x="rest_error:"+y:x="ok",s(x,null)}})}unlisten(e,t){const i=nr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=el(e._queryParams),i=e._path.toString(),s=new dr;return this.restRequest_(i+".json",t,(a,u)=>{let p=u;a===404&&(p=null,a=null),a===null?(this.onDataUpdate_(i,p,!1,null),s.resolve(p)):s.reject(new Error(p))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rn(t);this.log_("Sending REST request for "+u);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(i&&p.readyState===4){this.log_("REST Response for "+u+" received. status:",p.status,"response:",p.responseText);let m=null;if(p.status>=200&&p.status<300){try{m=ti(p.responseText)}catch{Le("Failed to parse JSON response for "+u+": "+p.responseText)}i(null,m)}else p.status!==401&&p.status!==404&&Le("Got unsuccessful REST response for "+u+" Status: "+p.status),i(p.status);i=null}},p.open("GET",u,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return{value:null,children:new Map}}function qc(n,e,t){if(ne(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=ie(e);n.children.has(i)||n.children.set(i,ir());const s=n.children.get(i);e=fe(e),qc(s,e,t)}}function Is(n,e,t){n.value!==null?t(e,n.value):g_(n,(i,s)=>{const a=new de(e.toString()+"/"+i);Is(s,a,t)})}function g_(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Fe(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=10*1e3,m_=30*1e3,y_=5*60*1e3;class v_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new __(e);const i=nl+(m_-nl)*Math.random();Xn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Fe(e,(s,a)=>{a>0&&vt(this.statsToReport_,s)&&(t[s]=a,i=!0)}),i&&this.server_.reportStats(t),Xn(this.reportStats_.bind(this),Math.floor(Math.random()*2*y_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function Vc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function eo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function to(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Xe.ACK_USER_WRITE,this.source=Vc()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new de(e));return new rr(se(),t,this.revert)}}else return F(ie(this.path)===e,"operationForChild called for unrelated child."),new rr(fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.source=e,this.path=t,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new ci(this.source,se()):new ci(this.source,fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Xe.OVERWRITE}operationForChild(e){return ne(this.path)?new nn(this.source,se(),this.snap.getImmediateChild(e)):new nn(this.source,fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Xe.MERGE}operationForChild(e){if(ne(this.path)){const t=this.children.subtree(new de(e));return t.isEmpty()?null:t.value?new nn(this.source,se(),t.value):new ui(this.source,se(),t)}else return F(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ui(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const t=ie(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function b_(n,e,t,i){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(h_(u.childName,u.snapshotNode))}),Kn(n,s,"child_removed",e,i,t),Kn(n,s,"child_added",e,i,t),Kn(n,s,"child_moved",a,i,t),Kn(n,s,"child_changed",e,i,t),Kn(n,s,"value",e,i,t),s}function Kn(n,e,t,i,s,a){const u=i.filter(p=>p.type===t);u.sort((p,m)=>w_(n,p,m)),u.forEach(p=>{const m=E_(n,p,a);s.forEach(y=>{y.respondsTo(p.type)&&e.push(y.createEvent(m,n.query_))})})}function E_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function w_(n,e,t){if(e.childName==null||t.childName==null)throw Nn("Should only compare child_ events.");const i=new te(e.childName,e.snapshotNode),s=new te(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n,e){return{eventCache:n,serverCache:e}}function Jn(n,e,t,i){return Cr(new Dt(e,t,i),n.serverCache)}function $c(n,e,t,i){return Cr(n.eventCache,new Dt(e,t,i))}function sr(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function rn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs;const T_=()=>(cs||(cs=new Me(lg)),cs);class pe{constructor(e,t=T_()){this.value=e,this.children=t}static fromObject(e){let t=new pe(null);return Fe(e,(i,s)=>{t=t.set(new de(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:se(),value:this.value};if(ne(e))return null;{const i=ie(e),s=this.children.get(i);if(s!==null){const a=s.findRootMostMatchingPathAndValue(fe(e),t);return a!=null?{path:Ee(new de(i),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const t=ie(e),i=this.children.get(t);return i!==null?i.subtree(fe(e)):new pe(null)}}set(e,t){if(ne(e))return new pe(t,this.children);{const i=ie(e),a=(this.children.get(i)||new pe(null)).set(fe(e),t),u=this.children.insert(i,a);return new pe(this.value,u)}}remove(e){if(ne(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const t=ie(e),i=this.children.get(t);if(i){const s=i.remove(fe(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new pe(null):new pe(this.value,a)}else return this}}get(e){if(ne(e))return this.value;{const t=ie(e),i=this.children.get(t);return i?i.get(fe(e)):null}}setTree(e,t){if(ne(e))return t;{const i=ie(e),a=(this.children.get(i)||new pe(null)).setTree(fe(e),t);let u;return a.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,a),new pe(this.value,u)}}fold(e){return this.fold_(se(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,a)=>{i[s]=a.fold_(Ee(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,se(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(ne(e))return null;{const a=ie(e),u=this.children.get(a);return u?u.findOnPath_(fe(e),Ee(t,a),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,se(),t)}foreachOnPath_(e,t,i){if(ne(e))return this;{this.value&&i(t,this.value);const s=ie(e),a=this.children.get(s);return a?a.foreachOnPath_(fe(e),Ee(t,s),i):new pe(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Ee(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new pe(null))}}function Zn(n,e,t){if(ne(e))return new Je(new pe(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let a=i.value;const u=xe(s,e);return a=a.updateChild(u,t),new Je(n.writeTree_.set(s,a))}else{const s=new pe(t),a=n.writeTree_.setTree(e,s);return new Je(a)}}}function il(n,e,t){let i=n;return Fe(t,(s,a)=>{i=Zn(i,Ee(e,s),a)}),i}function rl(n,e){if(ne(e))return Je.empty();{const t=n.writeTree_.setTree(e,new pe(null));return new Je(t)}}function Ss(n,e){return sn(n,e)!=null}function sn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(xe(t.path,e)):null}function sl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(me,(i,s)=>{e.push(new te(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new te(i,s.value))}),e}function kt(n,e){if(ne(e))return n;{const t=sn(n,e);return t!=null?new Je(new pe(t)):new Je(n.writeTree_.subtree(e))}}function Ns(n){return n.writeTree_.isEmpty()}function Sn(n,e){return zc(se(),n.writeTree_,e)}function zc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(F(a.value!==null,"Priority writes must always be leaf nodes"),i=a.value):t=zc(Ee(n,s),a,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Ee(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n,e){return Qc(e,n)}function I_(n,e,t,i,s){F(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Zn(n.visibleWrites,e,t)),n.lastWriteId=i}function S_(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function N_(n,e){const t=n.allWrites.findIndex(p=>p.writeId===e);F(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const p=n.allWrites[u];p.visible&&(u>=t&&R_(p,i.path)?s=!1:Qe(i.path,p.path)&&(a=!0)),u--}if(s){if(a)return x_(n),!0;if(i.snap)n.visibleWrites=rl(n.visibleWrites,i.path);else{const p=i.children;Fe(p,m=>{n.visibleWrites=rl(n.visibleWrites,Ee(i.path,m))})}return!0}else return!1}function R_(n,e){if(n.snap)return Qe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Qe(Ee(n.path,t),e))return!0;return!1}function x_(n){n.visibleWrites=Gc(n.allWrites,k_,se()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function k_(n){return n.visible}function Gc(n,e,t){let i=Je.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let p;if(a.snap)Qe(t,u)?(p=xe(t,u),i=Zn(i,p,a.snap)):Qe(u,t)&&(p=xe(u,t),i=Zn(i,se(),a.snap.getChild(p)));else if(a.children){if(Qe(t,u))p=xe(t,u),i=il(i,p,a.children);else if(Qe(u,t))if(p=xe(u,t),ne(p))i=il(i,se(),a.children);else{const m=bn(a.children,ie(p));if(m){const y=m.getChild(fe(p));i=Zn(i,se(),y)}}}else throw Nn("WriteRecord should have .snap or .children")}}return i}function Kc(n,e,t,i,s){if(!i&&!s){const a=sn(n.visibleWrites,e);if(a!=null)return a;{const u=kt(n.visibleWrites,e);if(Ns(u))return t;if(t==null&&!Ss(u,se()))return null;{const p=t||Y.EMPTY_NODE;return Sn(u,p)}}}else{const a=kt(n.visibleWrites,e);if(!s&&Ns(a))return t;if(!s&&t==null&&!Ss(a,se()))return null;{const u=function(y){return(y.visible||s)&&(!i||!~i.indexOf(y.writeId))&&(Qe(y.path,e)||Qe(e,y.path))},p=Gc(n.allWrites,u,e),m=t||Y.EMPTY_NODE;return Sn(p,m)}}}function A_(n,e,t){let i=Y.EMPTY_NODE;const s=sn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(me,(a,u)=>{i=i.updateImmediateChild(a,u)}),i;if(t){const a=kt(n.visibleWrites,e);return t.forEachChild(me,(u,p)=>{const m=Sn(kt(a,new de(u)),p);i=i.updateImmediateChild(u,m)}),sl(a).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const a=kt(n.visibleWrites,e);return sl(a).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function P_(n,e,t,i,s){F(i||s,"Either existingEventSnap or existingServerSnap must exist");const a=Ee(e,t);if(Ss(n.visibleWrites,a))return null;{const u=kt(n.visibleWrites,a);return Ns(u)?s.getChild(t):Sn(u,s.getChild(t))}}function D_(n,e,t,i){const s=Ee(e,t),a=sn(n.visibleWrites,s);if(a!=null)return a;if(i.isCompleteForChild(t)){const u=kt(n.visibleWrites,s);return Sn(u,i.getNode().getImmediateChild(t))}else return null}function O_(n,e){return sn(n.visibleWrites,e)}function M_(n,e,t,i,s,a,u){let p;const m=kt(n.visibleWrites,e),y=sn(m,se());if(y!=null)p=y;else if(t!=null)p=Sn(m,t);else return[];if(p=p.withIndex(u),!p.isEmpty()&&!p.isLeafNode()){const S=[],w=u.getCompare(),x=a?p.getReverseIteratorFrom(i,u):p.getIteratorFrom(i,u);let W=x.getNext();for(;W&&S.length<s;)w(W,i)!==0&&S.push(W),W=x.getNext();return S}else return[]}function L_(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function or(n,e,t,i){return Kc(n.writeTree,n.treePath,e,t,i)}function no(n,e){return A_(n.writeTree,n.treePath,e)}function ol(n,e,t,i){return P_(n.writeTree,n.treePath,e,t,i)}function ar(n,e){return O_(n.writeTree,Ee(n.treePath,e))}function F_(n,e,t,i,s,a){return M_(n.writeTree,n.treePath,e,t,i,s,a)}function io(n,e,t){return D_(n.writeTree,n.treePath,e,t)}function Yc(n,e){return Qc(Ee(n.treePath,e),n.writeTree)}function Qc(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;F(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),F(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(i,ai(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(i,oi(i,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(i,In(i,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(i,ai(i,e.snapshotNode,s.oldSnap));else throw Nn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Xc=new H_;class ro{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Dt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return io(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rn(this.viewCache_),a=F_(this.writes_,s,t,1,i,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(n){return{filter:n}}function j_(n,e){F(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function B_(n,e,t,i,s){const a=new U_;let u,p;if(t.type===Xe.OVERWRITE){const y=t;y.source.fromUser?u=Rs(n,e,y.path,y.snap,i,s,a):(F(y.source.fromServer,"Unknown source."),p=y.source.tagged||e.serverCache.isFiltered()&&!ne(y.path),u=lr(n,e,y.path,y.snap,i,s,p,a))}else if(t.type===Xe.MERGE){const y=t;y.source.fromUser?u=V_(n,e,y.path,y.children,i,s,a):(F(y.source.fromServer,"Unknown source."),p=y.source.tagged||e.serverCache.isFiltered(),u=xs(n,e,y.path,y.children,i,s,p,a))}else if(t.type===Xe.ACK_USER_WRITE){const y=t;y.revert?u=G_(n,e,y.path,i,s,a):u=$_(n,e,y.path,y.affectedTree,i,s,a)}else if(t.type===Xe.LISTEN_COMPLETE)u=z_(n,e,t.path,i,a);else throw Nn("Unknown operation type: "+t.type);const m=a.getChanges();return q_(e,u,m),{viewCache:u,changes:m}}function q_(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),a=sr(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(a)||!i.getNode().getPriority().equals(a.getPriority()))&&t.push(Bc(sr(e)))}}function Jc(n,e,t,i,s,a){const u=e.eventCache;if(ar(i,t)!=null)return e;{let p,m;if(ne(t))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const y=rn(e),S=y instanceof Y?y:Y.EMPTY_NODE,w=no(i,S);p=n.filter.updateFullNode(e.eventCache.getNode(),w,a)}else{const y=or(i,rn(e));p=n.filter.updateFullNode(e.eventCache.getNode(),y,a)}else{const y=ie(t);if(y===".priority"){F(Pt(t)===1,"Can't have a priority with additional path components");const S=u.getNode();m=e.serverCache.getNode();const w=ol(i,t,S,m);w!=null?p=n.filter.updatePriority(S,w):p=u.getNode()}else{const S=fe(t);let w;if(u.isCompleteForChild(y)){m=e.serverCache.getNode();const x=ol(i,t,u.getNode(),m);x!=null?w=u.getNode().getImmediateChild(y).updateChild(S,x):w=u.getNode().getImmediateChild(y)}else w=io(i,y,e.serverCache);w!=null?p=n.filter.updateChild(u.getNode(),y,w,S,s,a):p=u.getNode()}}return Jn(e,p,u.isFullyInitialized()||ne(t),n.filter.filtersNodes())}}function lr(n,e,t,i,s,a,u,p){const m=e.serverCache;let y;const S=u?n.filter:n.filter.getIndexedFilter();if(ne(t))y=S.updateFullNode(m.getNode(),i,null);else if(S.filtersNodes()&&!m.isFiltered()){const W=m.getNode().updateChild(t,i);y=S.updateFullNode(m.getNode(),W,null)}else{const W=ie(t);if(!m.isCompleteForPath(t)&&Pt(t)>1)return e;const M=fe(t),le=m.getNode().getImmediateChild(W).updateChild(M,i);W===".priority"?y=S.updatePriority(m.getNode(),le):y=S.updateChild(m.getNode(),W,le,M,Xc,null)}const w=$c(e,y,m.isFullyInitialized()||ne(t),S.filtersNodes()),x=new ro(s,w,a);return Jc(n,w,t,s,x,p)}function Rs(n,e,t,i,s,a,u){const p=e.eventCache;let m,y;const S=new ro(s,e,a);if(ne(t))y=n.filter.updateFullNode(e.eventCache.getNode(),i,u),m=Jn(e,y,!0,n.filter.filtersNodes());else{const w=ie(t);if(w===".priority")y=n.filter.updatePriority(e.eventCache.getNode(),i),m=Jn(e,y,p.isFullyInitialized(),p.isFiltered());else{const x=fe(t),W=p.getNode().getImmediateChild(w);let M;if(ne(x))M=i;else{const j=S.getCompleteChild(w);j!=null?Pc(x)===".priority"&&j.getChild(Oc(x)).isEmpty()?M=j:M=j.updateChild(x,i):M=Y.EMPTY_NODE}if(W.equals(M))m=e;else{const j=n.filter.updateChild(p.getNode(),w,M,x,S,u);m=Jn(e,j,p.isFullyInitialized(),n.filter.filtersNodes())}}}return m}function al(n,e){return n.eventCache.isCompleteForChild(e)}function V_(n,e,t,i,s,a,u){let p=e;return i.foreach((m,y)=>{const S=Ee(t,m);al(e,ie(S))&&(p=Rs(n,p,S,y,s,a,u))}),i.foreach((m,y)=>{const S=Ee(t,m);al(e,ie(S))||(p=Rs(n,p,S,y,s,a,u))}),p}function ll(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function xs(n,e,t,i,s,a,u,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,y;ne(t)?y=i:y=new pe(null).setTree(t,i);const S=e.serverCache.getNode();return y.children.inorderTraversal((w,x)=>{if(S.hasChild(w)){const W=e.serverCache.getNode().getImmediateChild(w),M=ll(n,W,x);m=lr(n,m,new de(w),M,s,a,u,p)}}),y.children.inorderTraversal((w,x)=>{const W=!e.serverCache.isCompleteForChild(w)&&x.value===null;if(!S.hasChild(w)&&!W){const M=e.serverCache.getNode().getImmediateChild(w),j=ll(n,M,x);m=lr(n,m,new de(w),j,s,a,u,p)}}),m}function $_(n,e,t,i,s,a,u){if(ar(s,t)!=null)return e;const p=e.serverCache.isFiltered(),m=e.serverCache;if(i.value!=null){if(ne(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return lr(n,e,t,m.getNode().getChild(t),s,a,p,u);if(ne(t)){let y=new pe(null);return m.getNode().forEachChild(Cn,(S,w)=>{y=y.set(new de(S),w)}),xs(n,e,t,y,s,a,p,u)}else return e}else{let y=new pe(null);return i.foreach((S,w)=>{const x=Ee(t,S);m.isCompleteForPath(x)&&(y=y.set(S,m.getNode().getChild(x)))}),xs(n,e,t,y,s,a,p,u)}}function z_(n,e,t,i,s){const a=e.serverCache,u=$c(e,a.getNode(),a.isFullyInitialized()||ne(t),a.isFiltered());return Jc(n,u,t,i,Xc,s)}function G_(n,e,t,i,s,a){let u;if(ar(i,t)!=null)return e;{const p=new ro(i,e,s),m=e.eventCache.getNode();let y;if(ne(t)||ie(t)===".priority"){let S;if(e.serverCache.isFullyInitialized())S=or(i,rn(e));else{const w=e.serverCache.getNode();F(w instanceof Y,"serverChildren would be complete if leaf node"),S=no(i,w)}S=S,y=n.filter.updateFullNode(m,S,a)}else{const S=ie(t);let w=io(i,S,e.serverCache);w==null&&e.serverCache.isCompleteForChild(S)&&(w=m.getImmediateChild(S)),w!=null?y=n.filter.updateChild(m,S,w,fe(t),p,a):e.eventCache.getNode().hasChild(S)?y=n.filter.updateChild(m,S,Y.EMPTY_NODE,fe(t),p,a):y=m,y.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=or(i,rn(e)),u.isLeafNode()&&(y=n.filter.updateFullNode(y,u,a)))}return u=e.serverCache.isFullyInitialized()||ar(i,se())!=null,Jn(e,y,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Js(i.getIndex()),a=f_(i);this.processor_=W_(a);const u=t.serverCache,p=t.eventCache,m=s.updateFullNode(Y.EMPTY_NODE,u.getNode(),null),y=a.updateFullNode(Y.EMPTY_NODE,p.getNode(),null),S=new Dt(m,u.isFullyInitialized(),s.filtersNodes()),w=new Dt(y,p.isFullyInitialized(),a.filtersNodes());this.viewCache_=Cr(w,S),this.eventGenerator_=new C_(this.query_)}get query(){return this.query_}}function Y_(n){return n.viewCache_.serverCache.getNode()}function Q_(n){return sr(n.viewCache_)}function X_(n,e){const t=rn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ne(e)&&!t.getImmediateChild(ie(e)).isEmpty())?t.getChild(e):null}function cl(n){return n.eventRegistrations_.length===0}function J_(n,e){n.eventRegistrations_.push(e)}function ul(n,e,t){const i=[];if(t){F(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&i.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function hl(n,e,t,i){e.type===Xe.MERGE&&e.source.queryId!==null&&(F(rn(n.viewCache_),"We should always have a full cache before handling merges"),F(sr(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=B_(n.processor_,s,e,t,i);return j_(n.processor_,a.viewCache),F(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,Zc(n,a.changes,a.viewCache.eventCache.getNode(),null)}function Z_(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(me,(a,u)=>{i.push(In(a,u))}),t.isFullyInitialized()&&i.push(Bc(t.getNode())),Zc(n,i,t.getNode(),e)}function Zc(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return b_(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr;class eu{constructor(){this.views=new Map}}function em(n){F(!cr,"__referenceConstructor has already been defined"),cr=n}function tm(){return F(cr,"Reference.ts has not been loaded"),cr}function nm(n){return n.views.size===0}function so(n,e,t,i){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return F(a!=null,"SyncTree gave us an op for an invalid query."),hl(a,e,t,i)}else{let a=[];for(const u of n.views.values())a=a.concat(hl(u,e,t,i));return a}}function tu(n,e,t,i,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let p=or(t,s?i:null),m=!1;p?m=!0:i instanceof Y?(p=no(t,i),m=!1):(p=Y.EMPTY_NODE,m=!1);const y=Cr(new Dt(p,m,!1),new Dt(i,s,!1));return new K_(e,y)}return u}function im(n,e,t,i,s,a){const u=tu(n,e,i,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),J_(u,t),Z_(u,t)}function rm(n,e,t,i){const s=e._queryIdentifier,a=[];let u=[];const p=Ot(n);if(s==="default")for(const[m,y]of n.views.entries())u=u.concat(ul(y,t,i)),cl(y)&&(n.views.delete(m),y.query._queryParams.loadsAllData()||a.push(y.query));else{const m=n.views.get(s);m&&(u=u.concat(ul(m,t,i)),cl(m)&&(n.views.delete(s),m.query._queryParams.loadsAllData()||a.push(m.query)))}return p&&!Ot(n)&&a.push(new(tm())(e._repo,e._path)),{removed:a,events:u}}function nu(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function At(n,e){let t=null;for(const i of n.views.values())t=t||X_(i,e);return t}function iu(n,e){if(e._queryParams.loadsAllData())return Er(n);{const i=e._queryIdentifier;return n.views.get(i)}}function ru(n,e){return iu(n,e)!=null}function Ot(n){return Er(n)!=null}function Er(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;function sm(n){F(!ur,"__referenceConstructor has already been defined"),ur=n}function om(){return F(ur,"Reference.ts has not been loaded"),ur}let am=1;class dl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=L_(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function su(n,e,t,i,s){return I_(n.pendingWriteTree_,e,t,i,s),s?Ei(n,new nn(Vc(),e,t)):[]}function Gt(n,e,t=!1){const i=S_(n.pendingWriteTree_,e);if(N_(n.pendingWriteTree_,e)){let a=new pe(null);return i.snap!=null?a=a.set(se(),!0):Fe(i.children,u=>{a=a.set(new de(u),!0)}),Ei(n,new rr(i.path,a,t))}else return[]}function bi(n,e,t){return Ei(n,new nn(eo(),e,t))}function lm(n,e,t){const i=pe.fromObject(t);return Ei(n,new ui(eo(),e,i))}function cm(n,e){return Ei(n,new ci(eo(),e))}function um(n,e,t){const i=ao(n,t);if(i){const s=lo(i),a=s.path,u=s.queryId,p=xe(a,e),m=new ci(to(u),p);return co(n,a,m)}else return[]}function ou(n,e,t,i,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let p=[];if(u&&(e._queryIdentifier==="default"||ru(u,e))){const m=rm(u,e,t,i);nm(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const y=m.removed;if(p=m.events,!s){const S=y.findIndex(x=>x._queryParams.loadsAllData())!==-1,w=n.syncPointTree_.findOnPath(a,(x,W)=>Ot(W));if(S&&!w){const x=n.syncPointTree_.subtree(a);if(!x.isEmpty()){const W=pm(x);for(let M=0;M<W.length;++M){const j=W[M],le=j.query,Q=uu(n,j);n.listenProvider_.startListening(ei(le),hi(n,le),Q.hashFn,Q.onComplete)}}}!w&&y.length>0&&!i&&(S?n.listenProvider_.stopListening(ei(e),null):y.forEach(x=>{const W=n.queryToTagMap.get(wr(x));n.listenProvider_.stopListening(ei(x),W)}))}gm(n,y)}return p}function au(n,e,t,i){const s=ao(n,i);if(s!=null){const a=lo(s),u=a.path,p=a.queryId,m=xe(u,e),y=new nn(to(p),m,t);return co(n,u,y)}else return[]}function hm(n,e,t,i){const s=ao(n,i);if(s){const a=lo(s),u=a.path,p=a.queryId,m=xe(u,e),y=pe.fromObject(t),S=new ui(to(p),m,y);return co(n,u,S)}else return[]}function dm(n,e,t,i=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(x,W)=>{const M=xe(x,s);a=a||At(W,M),u=u||Ot(W)});let p=n.syncPointTree_.get(s);p?(u=u||Ot(p),a=a||At(p,se())):(p=new eu,n.syncPointTree_=n.syncPointTree_.set(s,p));let m;a!=null?m=!0:(m=!1,a=Y.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((W,M)=>{const j=At(M,se());j&&(a=a.updateImmediateChild(W,j))}));const y=ru(p,e);if(!y&&!e._queryParams.loadsAllData()){const x=wr(e);F(!n.queryToTagMap.has(x),"View does not exist, but we have a tag");const W=_m();n.queryToTagMap.set(x,W),n.tagToQueryMap.set(W,x)}const S=br(n.pendingWriteTree_,s);let w=im(p,e,t,S,a,m);if(!y&&!u&&!i){const x=iu(p,e);w=w.concat(mm(n,e,x))}return w}function oo(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,p)=>{const m=xe(u,e),y=At(p,m);if(y)return y});return Kc(s,e,a,t,!0)}function fm(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(y,S)=>{const w=xe(y,t);i=i||At(S,w)});let s=n.syncPointTree_.get(t);s?i=i||At(s,se()):(s=new eu,n.syncPointTree_=n.syncPointTree_.set(t,s));const a=i!=null,u=a?new Dt(i,!0,!1):null,p=br(n.pendingWriteTree_,e._path),m=tu(s,e,p,a?u.getNode():Y.EMPTY_NODE,a);return Q_(m)}function Ei(n,e){return lu(e,n.syncPointTree_,null,br(n.pendingWriteTree_,se()))}function lu(n,e,t,i){if(ne(n.path))return cu(n,e,t,i);{const s=e.get(se());t==null&&s!=null&&(t=At(s,se()));let a=[];const u=ie(n.path),p=n.operationForChild(u),m=e.children.get(u);if(m&&p){const y=t?t.getImmediateChild(u):null,S=Yc(i,u);a=a.concat(lu(p,m,y,S))}return s&&(a=a.concat(so(s,n,i,t))),a}}function cu(n,e,t,i){const s=e.get(se());t==null&&s!=null&&(t=At(s,se()));let a=[];return e.children.inorderTraversal((u,p)=>{const m=t?t.getImmediateChild(u):null,y=Yc(i,u),S=n.operationForChild(u);S&&(a=a.concat(cu(S,p,m,y)))}),s&&(a=a.concat(so(s,n,i,t))),a}function uu(n,e){const t=e.query,i=hi(n,t);return{hashFn:()=>(Y_(e)||Y.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?um(n,t._path,i):cm(n,t._path);{const a=hg(s,t);return ou(n,t,null,a)}}}}function hi(n,e){const t=wr(e);return n.queryToTagMap.get(t)}function wr(n){return n._path.toString()+"$"+n._queryIdentifier}function ao(n,e){return n.tagToQueryMap.get(e)}function lo(n){const e=n.indexOf("$");return F(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new de(n.substr(0,e))}}function co(n,e,t){const i=n.syncPointTree_.get(e);F(i,"Missing sync point for query tag that we're tracking");const s=br(n.pendingWriteTree_,e);return so(i,t,s,null)}function pm(n){return n.fold((e,t,i)=>{if(t&&Ot(t))return[Er(t)];{let s=[];return t&&(s=nu(t)),Fe(i,(a,u)=>{s=s.concat(u)}),s}})}function ei(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(om())(n._repo,n._path):n}function gm(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=wr(i),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function _m(){return am++}function mm(n,e,t){const i=e._path,s=hi(n,e),a=uu(n,t),u=n.listenProvider_.startListening(ei(e),s,a.hashFn,a.onComplete),p=n.syncPointTree_.subtree(i);if(s)F(!Ot(p.value),"If we're adding a query, it shouldn't be shadowed");else{const m=p.fold((y,S,w)=>{if(!ne(y)&&S&&Ot(S))return[Er(S).query];{let x=[];return S&&(x=x.concat(nu(S).map(W=>W.query))),Fe(w,(W,M)=>{x=x.concat(M)}),x}});for(let y=0;y<m.length;++y){const S=m[y];n.listenProvider_.stopListening(ei(S),hi(n,S))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new uo(t)}node(){return this.node_}}class ho{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ee(this.path_,e);return new ho(this.syncTree_,t)}node(){return oo(this.syncTree_,this.path_)}}const ym=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},fl=function(n,e,t){if(!n||typeof n!="object")return n;if(F(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return vm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Cm(n[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},vm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:F(!1,"Unexpected server value: "+n)}},Cm=function(n,e,t){n.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&F(!1,"Unexpected increment value: "+i);const s=e.node();if(F(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const u=s.getValue();return typeof u!="number"?i:u+i},bm=function(n,e,t,i){return fo(e,new ho(t,n),i)},hu=function(n,e,t){return fo(n,new uo(e),t)};function fo(n,e,t){const i=n.getPriority().val(),s=fl(i,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,p=fl(u.getValue(),e,t);return p!==u.getValue()||s!==u.getPriority().val()?new we(p,Ie(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new we(s))),u.forEachChild(me,(p,m)=>{const y=fo(m,e.getImmediateChild(p),t);y!==m&&(a=a.updateImmediateChild(p,y))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function go(n,e){let t=e instanceof de?e:new de(e),i=n,s=ie(t);for(;s!==null;){const a=bn(i.node.children,s)||{children:{},childCount:0};i=new po(s,i,a),t=fe(t),s=ie(t)}return i}function An(n){return n.node.value}function du(n,e){n.node.value=e,ks(n)}function fu(n){return n.node.childCount>0}function Em(n){return An(n)===void 0&&!fu(n)}function Tr(n,e){Fe(n.node.children,(t,i)=>{e(new po(t,n,i))})}function pu(n,e,t,i){t&&!i&&e(n),Tr(n,s=>{pu(s,e,!0,i)}),t&&i&&e(n)}function wm(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function wi(n){return new de(n.parent===null?n.name:wi(n.parent)+"/"+n.name)}function ks(n){n.parent!==null&&Tm(n.parent,n.name,n)}function Tm(n,e,t){const i=Em(t),s=vt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ks(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ks(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=/[\[\].#$\/\u0000-\u001F\u007F]/,Sm=/[\[\].#$\u0000-\u001F\u007F]/,us=10*1024*1024,gu=function(n){return typeof n=="string"&&n.length!==0&&!Im.test(n)},_u=function(n){return typeof n=="string"&&n.length!==0&&!Sm.test(n)},Nm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_u(n)},Rm=function(n,e,t,i){i&&e===void 0||_o(Os(n,"value"),e,t)},_o=function(n,e,t){const i=t instanceof de?new $g(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+$t(i));if(typeof e=="function")throw new Error(n+"contains a function "+$t(i)+" with contents = "+e.toString());if(dc(e))throw new Error(n+"contains "+e.toString()+" "+$t(i));if(typeof e=="string"&&e.length>us/3&&fr(e)>us)throw new Error(n+"contains a string greater than "+us+" utf8 bytes "+$t(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(Fe(e,(u,p)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!gu(u)))throw new Error(n+" contains an invalid key ("+u+") "+$t(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zg(i,u),_o(n,p,i),Gg(i)}),s&&a)throw new Error(n+' contains ".value" child '+$t(i)+" in addition to actual children.")}},mu=function(n,e,t,i){if(!(i&&t===void 0)&&!_u(t))throw new Error(Os(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xm=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mu(n,e,t,i)},km=function(n,e){if(ie(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Am=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Nm(t))throw new Error(Os(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yu(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],a=s.getPath();t!==null&&!Mc(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function ot(n,e,t){yu(n,t),Dm(n,i=>Qe(i,e)||Qe(e,i))}function Dm(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const a=s.path;e(a)?(Om(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Om(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Yt&&Ne("event: "+t.toString()),kn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="repo_interrupt",Lm=25;class Fm{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Pm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ir(),this.transactionQueueTree_=new po,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Um(n,e,t){if(n.stats_=Ks(n.repoInfo_),n.forceRestClient_||gg())n.server_=new nr(n.repoInfo_,(i,s,a,u)=>{pl(n,i,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>gl(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new mt(n.repoInfo_,e,(i,s,a,u)=>{pl(n,i,s,a,u)},i=>{gl(n,i)},i=>{Wm(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=bg(n.repoInfo_,()=>new v_(n.stats_,n.server_)),n.infoData_=new p_,n.infoSyncTree_=new dl({startListening:(i,s,a,u)=>{let p=[];const m=n.infoData_.getNode(i._path);return m.isEmpty()||(p=bi(n.infoSyncTree_,i._path,m),setTimeout(()=>{u("ok")},0)),p},stopListening:()=>{}}),yo(n,"connected",!1),n.serverSyncTree_=new dl({startListening:(i,s,a,u)=>(n.server_.listen(i,a,s,(p,m)=>{const y=u(p,m);ot(n.eventQueue_,i._path,y)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Hm(n){const t=n.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function mo(n){return ym({timestamp:Hm(n)})}function pl(n,e,t,i,s){n.dataUpdateCount++;const a=new de(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(i){const m=zi(t,y=>Ie(y));u=hm(n.serverSyncTree_,a,m,s)}else{const m=Ie(t);u=au(n.serverSyncTree_,a,m,s)}else if(i){const m=zi(t,y=>Ie(y));u=lm(n.serverSyncTree_,a,m)}else{const m=Ie(t);u=bi(n.serverSyncTree_,a,m)}let p=a;u.length>0&&(p=Sr(n,a)),ot(n.eventQueue_,p,u)}function gl(n,e){yo(n,"connected",e),e===!1&&qm(n)}function Wm(n,e){Fe(e,(t,i)=>{yo(n,t,i)})}function yo(n,e,t){const i=new de("/.info/"+e),s=Ie(t);n.infoData_.updateSnapshot(i,s);const a=bi(n.infoSyncTree_,i,s);ot(n.eventQueue_,i,a)}function vu(n){return n.nextWriteId_++}function jm(n,e,t){const i=fm(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const a=Ie(s).withIndex(e._queryParams.getIndex());dm(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=bi(n.serverSyncTree_,e._path,a);else{const p=hi(n.serverSyncTree_,e);u=au(n.serverSyncTree_,e._path,a,p)}return ot(n.eventQueue_,e._path,u),ou(n.serverSyncTree_,e,t,null,!0),a},s=>(Ir(n,"get for query "+be(e)+" failed: "+s),Promise.reject(new Error(s))))}function Bm(n,e,t,i,s){Ir(n,"set",{path:e.toString(),value:t,priority:i});const a=mo(n),u=Ie(t,i),p=oo(n.serverSyncTree_,e),m=hu(u,p,a),y=vu(n),S=su(n.serverSyncTree_,e,m,y,!0);yu(n.eventQueue_,S),n.server_.put(e.toString(),u.val(!0),(x,W)=>{const M=x==="ok";M||Le("set at "+e+" failed: "+x);const j=Gt(n.serverSyncTree_,y,!M);ot(n.eventQueue_,e,j),$m(n,s,x,W)});const w=Tu(n,e);Sr(n,w),ot(n.eventQueue_,w,[])}function qm(n){Ir(n,"onDisconnectEvents");const e=mo(n),t=ir();Is(n.onDisconnect_,se(),(s,a)=>{const u=bm(s,a,n.serverSyncTree_,e);qc(t,s,u)});let i=[];Is(t,se(),(s,a)=>{i=i.concat(bi(n.serverSyncTree_,s,a));const u=Tu(n,s);Sr(n,u)}),n.onDisconnect_=ir(),ot(n.eventQueue_,se(),i)}function Vm(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Mm)}function Ir(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ne(t,...e)}function $m(n,e,t,i){e&&kn(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;i&&(a+=": "+i);const u=new Error(a);u.code=s,e(u)}})}function Cu(n,e,t){return oo(n.serverSyncTree_,e,t)||Y.EMPTY_NODE}function vo(n,e=n.transactionQueueTree_){if(e||Nr(n,e),An(e)){const t=Eu(n,e);F(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&zm(n,wi(e),t)}else fu(e)&&Tr(e,t=>{vo(n,t)})}function zm(n,e,t){const i=t.map(y=>y.currentWriteId),s=Cu(n,e,i);let a=s;const u=s.hash();for(let y=0;y<t.length;y++){const S=t[y];F(S.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),S.status=1,S.retryCount++;const w=xe(e,S.path);a=a.updateChild(w,S.currentOutputSnapshotRaw)}const p=a.val(!0),m=e;n.server_.put(m.toString(),p,y=>{Ir(n,"transaction put response",{path:m.toString(),status:y});let S=[];if(y==="ok"){const w=[];for(let x=0;x<t.length;x++)t[x].status=2,S=S.concat(Gt(n.serverSyncTree_,t[x].currentWriteId)),t[x].onComplete&&w.push(()=>t[x].onComplete(null,!0,t[x].currentOutputSnapshotResolved)),t[x].unwatcher();Nr(n,go(n.transactionQueueTree_,e)),vo(n,n.transactionQueueTree_),ot(n.eventQueue_,e,S);for(let x=0;x<w.length;x++)kn(w[x])}else{if(y==="datastale")for(let w=0;w<t.length;w++)t[w].status===3?t[w].status=4:t[w].status=0;else{Le("transaction at "+m.toString()+" failed: "+y);for(let w=0;w<t.length;w++)t[w].status=4,t[w].abortReason=y}Sr(n,e)}},u)}function Sr(n,e){const t=bu(n,e),i=wi(t),s=Eu(n,t);return Gm(n,s,i),i}function Gm(n,e,t){if(e.length===0)return;const i=[];let s=[];const u=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const m=e[p],y=xe(t,m.path);let S=!1,w;if(F(y!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)S=!0,w=m.abortReason,s=s.concat(Gt(n.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=Lm)S=!0,w="maxretry",s=s.concat(Gt(n.serverSyncTree_,m.currentWriteId,!0));else{const x=Cu(n,m.path,u);m.currentInputSnapshot=x;const W=e[p].update(x.val());if(W!==void 0){_o("transaction failed: Data returned ",W,m.path);let M=Ie(W);typeof W=="object"&&W!=null&&vt(W,".priority")||(M=M.updatePriority(x.getPriority()));const le=m.currentWriteId,Q=mo(n),at=hu(M,x,Q);m.currentOutputSnapshotRaw=M,m.currentOutputSnapshotResolved=at,m.currentWriteId=vu(n),u.splice(u.indexOf(le),1),s=s.concat(su(n.serverSyncTree_,m.path,at,m.currentWriteId,m.applyLocally)),s=s.concat(Gt(n.serverSyncTree_,le,!0))}else S=!0,w="nodata",s=s.concat(Gt(n.serverSyncTree_,m.currentWriteId,!0))}ot(n.eventQueue_,t,s),s=[],S&&(e[p].status=2,function(x){setTimeout(x,Math.floor(0))}(e[p].unwatcher),e[p].onComplete&&(w==="nodata"?i.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):i.push(()=>e[p].onComplete(new Error(w),!1,null))))}Nr(n,n.transactionQueueTree_);for(let p=0;p<i.length;p++)kn(i[p]);vo(n,n.transactionQueueTree_)}function bu(n,e){let t,i=n.transactionQueueTree_;for(t=ie(e);t!==null&&An(i)===void 0;)i=go(i,t),e=fe(e),t=ie(e);return i}function Eu(n,e){const t=[];return wu(n,e,t),t.sort((i,s)=>i.order-s.order),t}function wu(n,e,t){const i=An(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Tr(e,s=>{wu(n,s,t)})}function Nr(n,e){const t=An(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,du(e,t.length>0?t:void 0)}Tr(e,i=>{Nr(n,i)})}function Tu(n,e){const t=wi(bu(n,e)),i=go(n.transactionQueueTree_,e);return wm(i,s=>{hs(n,s)}),hs(n,i),pu(i,s=>{hs(n,s)}),t}function hs(n,e){const t=An(e);if(t){const i=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(F(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(F(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(Gt(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&i.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?du(e,void 0):t.length=a+1,ot(n.eventQueue_,wi(e),s);for(let u=0;u<i.length;u++)kn(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Ym(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Le(`Invalid query segment '${t}' in query '${n}'`)}return e}const _l=function(n,e){const t=Qm(n),i=t.namespace;t.domain==="firebase.com"&&en(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||og();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new yg(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new de(t.pathString)}},Qm=function(n){let e="",t="",i="",s="",a="",u=!0,p="https",m=443;if(typeof n=="string"){let y=n.indexOf("//");y>=0&&(p=n.substring(0,y-1),n=n.substring(y+2));let S=n.indexOf("/");S===-1&&(S=n.length);let w=n.indexOf("?");w===-1&&(w=n.length),e=n.substring(0,Math.min(S,w)),S<w&&(s=Km(n.substring(S,w)));const x=Ym(n.substring(Math.min(n.length,w)));y=e.indexOf(":"),y>=0?(u=p==="https"||p==="wss",m=parseInt(e.substring(y+1),10)):y=e.length;const W=e.slice(0,y);if(W.toLowerCase()==="localhost")t="localhost";else if(W.split(".").length<=2)t=W;else{const M=e.indexOf(".");i=e.substring(0,M).toLowerCase(),t=e.substring(M+1),a=i}"ns"in x&&(a=x.ns)}return{host:e,port:m,domain:t,subdomain:i,secure:u,scheme:p,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class Jm{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return ne(this._path)?null:Pc(this._path)}get ref(){return new bt(this._repo,this._path)}get _queryIdentifier(){const e=tl(this._queryParams),t=zs(e);return t==="{}"?"default":t}get _queryObject(){return tl(this._queryParams)}isEqual(e){if(e=Ct(e),!(e instanceof Co))return!1;const t=this._repo===e._repo,i=Mc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Vg(this._path)}}class bt extends Co{constructor(e,t){super(e,t,new Zs,!1)}get parent(){const e=Oc(this._path);return e===null?null:new bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class di{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new de(e),i=hr(this.ref,e);return new di(this._node.getChild(t),i,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new di(s,hr(this.ref,i),me)))}hasChild(e){const t=new de(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Iu(n,e){return n=Ct(n),n._checkNotDeleted("ref"),e!==void 0?hr(n._root,e):n._root}function hr(n,e){return n=Ct(n),ie(n._path)===null?xm("child","path",e,!1):mu("child","path",e,!1),new bt(n._repo,Ee(n._path,e))}function ey(n,e){n=Ct(n),km("set",n._path),Rm("set",e,n._path,!1);const t=new dr;return Bm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ty(n){n=Ct(n);const e=new Zm(()=>{}),t=new bo(e);return jm(n._repo,n,t).then(i=>new di(i,new bt(n._repo,n._path),n._queryParams.getIndex()))}class bo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Xm("value",this,new di(e.snapshotNode,new bt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Jm(this,e,t):null}matches(e){return e instanceof bo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}em(bt);sm(bt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="FIREBASE_DATABASE_EMULATOR_HOST",As={};let iy=!1;function ry(n,e,t,i,s){let a=i||n.options.databaseURL;a===void 0&&(n.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=_l(a,s),p=u.repoInfo,m,y;typeof process!="undefined"&&process.env&&(y=process.env[ny]),y?(m=!0,a=`http://${y}?ns=${p.namespace}`,u=_l(a,s),p=u.repoInfo):m=!u.repoInfo.secure;const S=s&&m?new Es(Es.OWNER):new mg(n.name,n.options,e);Am("Invalid Firebase Database URL",u),ne(u.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const w=oy(p,n,S,new _g(n.name,t));return new ay(w,n)}function sy(n,e){const t=As[e];(!t||t[n.key]!==n)&&en(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Vm(n),delete t[n.key]}function oy(n,e,t,i){let s=As[e.name];s||(s={},As[e.name]=s);let a=s[n.toURLString()];return a&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new Fm(n,iy,t,i),s[n.toURLString()]=a,a}class ay{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Um(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bt(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function Su(n=Rl(),e){return Fs(n,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){tg(pi),En(new Qt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return ry(i,s,a,t)},"PUBLIC").setMultipleInstances(!0)),xt(Ua,Ha,n),xt(Ua,Ha,"esm2017")}mt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};mt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ly();var cy=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Nu={exports:{}};/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return t(i)}})(typeof window!="undefined"?window:cy,function(e,t){var i=[],s=Object.getPrototypeOf,a=i.slice,u=i.flat?function(r){return i.flat.call(r)}:function(r){return i.concat.apply([],r)},p=i.push,m=i.indexOf,y={},S=y.toString,w=y.hasOwnProperty,x=w.toString,W=x.call(Object),M={},j=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},le=function(o){return o!=null&&o===o.window},Q=e.document,at={type:!0,src:!0,nonce:!0,noModule:!0};function Ze(r,o,l){l=l||Q;var c,d,f=l.createElement("script");if(f.text=r,o)for(c in at)d=o[c]||o.getAttribute&&o.getAttribute(c),d&&f.setAttribute(c,d);l.head.appendChild(f).parentNode.removeChild(f)}function $e(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?y[S.call(r)]||"object":typeof r}var Pn="3.6.1",h=function(r,o){return new h.fn.init(r,o)};h.fn=h.prototype={jquery:Pn,constructor:h,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=h.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return h.each(this,r)},map:function(r){return this.pushStack(h.map(this,function(o,l){return r.call(o,l,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(h.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(h.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,l=+r+(r<0?o:0);return this.pushStack(l>=0&&l<o?[this[l]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:i.sort,splice:i.splice},h.extend=h.fn.extend=function(){var r,o,l,c,d,f,g=arguments[0]||{},b=1,v=arguments.length,I=!1;for(typeof g=="boolean"&&(I=g,g=arguments[b]||{},b++),typeof g!="object"&&!j(g)&&(g={}),b===v&&(g=this,b--);b<v;b++)if((r=arguments[b])!=null)for(o in r)c=r[o],!(o==="__proto__"||g===c)&&(I&&c&&(h.isPlainObject(c)||(d=Array.isArray(c)))?(l=g[o],d&&!Array.isArray(l)?f=[]:!d&&!h.isPlainObject(l)?f={}:f=l,d=!1,g[o]=h.extend(I,f,c)):c!==void 0&&(g[o]=c));return g},h.extend({expando:"jQuery"+(Pn+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,l;return!r||S.call(r)!=="[object Object]"?!1:(o=s(r),o?(l=w.call(o,"constructor")&&o.constructor,typeof l=="function"&&x.call(l)===W):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,l){Ze(r,{nonce:o&&o.nonce},l)},each:function(r,o){var l,c=0;if(on(r))for(l=r.length;c<l&&o.call(r[c],c,r[c])!==!1;c++);else for(c in r)if(o.call(r[c],c,r[c])===!1)break;return r},makeArray:function(r,o){var l=o||[];return r!=null&&(on(Object(r))?h.merge(l,typeof r=="string"?[r]:r):p.call(l,r)),l},inArray:function(r,o,l){return o==null?-1:m.call(o,r,l)},merge:function(r,o){for(var l=+o.length,c=0,d=r.length;c<l;c++)r[d++]=o[c];return r.length=d,r},grep:function(r,o,l){for(var c,d=[],f=0,g=r.length,b=!l;f<g;f++)c=!o(r[f],f),c!==b&&d.push(r[f]);return d},map:function(r,o,l){var c,d,f=0,g=[];if(on(r))for(c=r.length;f<c;f++)d=o(r[f],f,l),d!=null&&g.push(d);else for(f in r)d=o(r[f],f,l),d!=null&&g.push(d);return u(g)},guid:1,support:M}),typeof Symbol=="function"&&(h.fn[Symbol.iterator]=i[Symbol.iterator]),h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){y["[object "+o+"]"]=o.toLowerCase()});function on(r){var o=!!r&&"length"in r&&r.length,l=$e(r);return j(r)||le(r)?!1:l==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}var lt=function(r){var o,l,c,d,f,g,b,v,I,R,D,N,k,B,J,q,ve,ye,Ue,ae="sizzle"+1*new Date,X=r.document,De=0,re=0,_e=Mi(),jn=Mi(),Pi=Mi(),He=Mi(),Ht=function(_,C){return _===C&&(D=!0),0},Wt={}.hasOwnProperty,Oe=[],Et=Oe.pop,Ve=Oe.push,wt=Oe.push,oa=Oe.slice,jt=function(_,C){for(var E=0,A=_.length;E<A;E++)if(_[E]===C)return E;return-1},Vr="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",oe="[\\x20\\t\\r\\n\\f]",Bt="(?:\\\\[\\da-fA-F]{1,6}"+oe+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",aa="\\["+oe+"*("+Bt+")(?:"+oe+"*([*^$|!~]?=)"+oe+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Bt+"))|)"+oe+"*\\]",$r=":("+Bt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+aa+")*)|.*)\\)|)",Sh=new RegExp(oe+"+","g"),Di=new RegExp("^"+oe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+oe+"+$","g"),Nh=new RegExp("^"+oe+"*,"+oe+"*"),la=new RegExp("^"+oe+"*([>+~]|"+oe+")"+oe+"*"),Rh=new RegExp(oe+"|>"),xh=new RegExp($r),kh=new RegExp("^"+Bt+"$"),Oi={ID:new RegExp("^#("+Bt+")"),CLASS:new RegExp("^\\.("+Bt+")"),TAG:new RegExp("^("+Bt+"|[*])"),ATTR:new RegExp("^"+aa),PSEUDO:new RegExp("^"+$r),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+oe+"*(even|odd|(([+-]|)(\\d*)n|)"+oe+"*(?:([+-]|)"+oe+"*(\\d+)|))"+oe+"*\\)|)","i"),bool:new RegExp("^(?:"+Vr+")$","i"),needsContext:new RegExp("^"+oe+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+oe+"*((?:-\\d)?\\d*)"+oe+"*\\)|)(?=[^-]|$)","i")},Ah=/HTML$/i,Ph=/^(?:input|select|textarea|button)$/i,Dh=/^h\d$/i,Bn=/^[^{]+\{\s*\[native \w/,Oh=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,zr=/[+~]/,ht=new RegExp("\\\\[\\da-fA-F]{1,6}"+oe+"?|\\\\([^\\r\\n\\f])","g"),dt=function(_,C){var E="0x"+_.slice(1)-65536;return C||(E<0?String.fromCharCode(E+65536):String.fromCharCode(E>>10|55296,E&1023|56320))},ca=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ua=function(_,C){return C?_==="\0"?"\uFFFD":_.slice(0,-1)+"\\"+_.charCodeAt(_.length-1).toString(16)+" ":"\\"+_},ha=function(){N()},Mh=Fi(function(_){return _.disabled===!0&&_.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{wt.apply(Oe=oa.call(X.childNodes),X.childNodes),Oe[X.childNodes.length].nodeType}catch{wt={apply:Oe.length?function(C,E){Ve.apply(C,oa.call(E))}:function(C,E){for(var A=C.length,T=0;C[A++]=E[T++];);C.length=A-1}}}function ce(_,C,E,A){var T,P,O,U,H,z,V,K=C&&C.ownerDocument,ee=C?C.nodeType:9;if(E=E||[],typeof _!="string"||!_||ee!==1&&ee!==9&&ee!==11)return E;if(!A&&(N(C),C=C||k,J)){if(ee!==11&&(H=Oh.exec(_)))if(T=H[1]){if(ee===9)if(O=C.getElementById(T)){if(O.id===T)return E.push(O),E}else return E;else if(K&&(O=K.getElementById(T))&&Ue(C,O)&&O.id===T)return E.push(O),E}else{if(H[2])return wt.apply(E,C.getElementsByTagName(_)),E;if((T=H[3])&&l.getElementsByClassName&&C.getElementsByClassName)return wt.apply(E,C.getElementsByClassName(T)),E}if(l.qsa&&!He[_+" "]&&(!q||!q.test(_))&&(ee!==1||C.nodeName.toLowerCase()!=="object")){if(V=_,K=C,ee===1&&(Rh.test(_)||la.test(_))){for(K=zr.test(_)&&Kr(C.parentNode)||C,(K!==C||!l.scope)&&((U=C.getAttribute("id"))?U=U.replace(ca,ua):C.setAttribute("id",U=ae)),z=g(_),P=z.length;P--;)z[P]=(U?"#"+U:":scope")+" "+Li(z[P]);V=z.join(",")}try{return wt.apply(E,K.querySelectorAll(V)),E}catch{He(_,!0)}finally{U===ae&&C.removeAttribute("id")}}}return v(_.replace(Di,"$1"),C,E,A)}function Mi(){var _=[];function C(E,A){return _.push(E+" ")>c.cacheLength&&delete C[_.shift()],C[E+" "]=A}return C}function Ge(_){return _[ae]=!0,_}function Ke(_){var C=k.createElement("fieldset");try{return!!_(C)}catch{return!1}finally{C.parentNode&&C.parentNode.removeChild(C),C=null}}function Gr(_,C){for(var E=_.split("|"),A=E.length;A--;)c.attrHandle[E[A]]=C}function da(_,C){var E=C&&_,A=E&&_.nodeType===1&&C.nodeType===1&&_.sourceIndex-C.sourceIndex;if(A)return A;if(E){for(;E=E.nextSibling;)if(E===C)return-1}return _?1:-1}function Lh(_){return function(C){var E=C.nodeName.toLowerCase();return E==="input"&&C.type===_}}function Fh(_){return function(C){var E=C.nodeName.toLowerCase();return(E==="input"||E==="button")&&C.type===_}}function fa(_){return function(C){return"form"in C?C.parentNode&&C.disabled===!1?"label"in C?"label"in C.parentNode?C.parentNode.disabled===_:C.disabled===_:C.isDisabled===_||C.isDisabled!==!_&&Mh(C)===_:C.disabled===_:"label"in C?C.disabled===_:!1}}function qt(_){return Ge(function(C){return C=+C,Ge(function(E,A){for(var T,P=_([],E.length,C),O=P.length;O--;)E[T=P[O]]&&(E[T]=!(A[T]=E[T]))})})}function Kr(_){return _&&typeof _.getElementsByTagName!="undefined"&&_}l=ce.support={},f=ce.isXML=function(_){var C=_&&_.namespaceURI,E=_&&(_.ownerDocument||_).documentElement;return!Ah.test(C||E&&E.nodeName||"HTML")},N=ce.setDocument=function(_){var C,E,A=_?_.ownerDocument||_:X;return A==k||A.nodeType!==9||!A.documentElement||(k=A,B=k.documentElement,J=!f(k),X!=k&&(E=k.defaultView)&&E.top!==E&&(E.addEventListener?E.addEventListener("unload",ha,!1):E.attachEvent&&E.attachEvent("onunload",ha)),l.scope=Ke(function(T){return B.appendChild(T).appendChild(k.createElement("div")),typeof T.querySelectorAll!="undefined"&&!T.querySelectorAll(":scope fieldset div").length}),l.attributes=Ke(function(T){return T.className="i",!T.getAttribute("className")}),l.getElementsByTagName=Ke(function(T){return T.appendChild(k.createComment("")),!T.getElementsByTagName("*").length}),l.getElementsByClassName=Bn.test(k.getElementsByClassName),l.getById=Ke(function(T){return B.appendChild(T).id=ae,!k.getElementsByName||!k.getElementsByName(ae).length}),l.getById?(c.filter.ID=function(T){var P=T.replace(ht,dt);return function(O){return O.getAttribute("id")===P}},c.find.ID=function(T,P){if(typeof P.getElementById!="undefined"&&J){var O=P.getElementById(T);return O?[O]:[]}}):(c.filter.ID=function(T){var P=T.replace(ht,dt);return function(O){var U=typeof O.getAttributeNode!="undefined"&&O.getAttributeNode("id");return U&&U.value===P}},c.find.ID=function(T,P){if(typeof P.getElementById!="undefined"&&J){var O,U,H,z=P.getElementById(T);if(z){if(O=z.getAttributeNode("id"),O&&O.value===T)return[z];for(H=P.getElementsByName(T),U=0;z=H[U++];)if(O=z.getAttributeNode("id"),O&&O.value===T)return[z]}return[]}}),c.find.TAG=l.getElementsByTagName?function(T,P){if(typeof P.getElementsByTagName!="undefined")return P.getElementsByTagName(T);if(l.qsa)return P.querySelectorAll(T)}:function(T,P){var O,U=[],H=0,z=P.getElementsByTagName(T);if(T==="*"){for(;O=z[H++];)O.nodeType===1&&U.push(O);return U}return z},c.find.CLASS=l.getElementsByClassName&&function(T,P){if(typeof P.getElementsByClassName!="undefined"&&J)return P.getElementsByClassName(T)},ve=[],q=[],(l.qsa=Bn.test(k.querySelectorAll))&&(Ke(function(T){var P;B.appendChild(T).innerHTML="<a id='"+ae+"'></a><select id='"+ae+"-\r\\' msallowcapture=''><option selected=''></option></select>",T.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+oe+`*(?:''|"")`),T.querySelectorAll("[selected]").length||q.push("\\["+oe+"*(?:value|"+Vr+")"),T.querySelectorAll("[id~="+ae+"-]").length||q.push("~="),P=k.createElement("input"),P.setAttribute("name",""),T.appendChild(P),T.querySelectorAll("[name='']").length||q.push("\\["+oe+"*name"+oe+"*="+oe+`*(?:''|"")`),T.querySelectorAll(":checked").length||q.push(":checked"),T.querySelectorAll("a#"+ae+"+*").length||q.push(".#.+[+~]"),T.querySelectorAll("\\\f"),q.push("[\\r\\n\\f]")}),Ke(function(T){T.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var P=k.createElement("input");P.setAttribute("type","hidden"),T.appendChild(P).setAttribute("name","D"),T.querySelectorAll("[name=d]").length&&q.push("name"+oe+"*[*^$|!~]?="),T.querySelectorAll(":enabled").length!==2&&q.push(":enabled",":disabled"),B.appendChild(T).disabled=!0,T.querySelectorAll(":disabled").length!==2&&q.push(":enabled",":disabled"),T.querySelectorAll("*,:x"),q.push(",.*:")})),(l.matchesSelector=Bn.test(ye=B.matches||B.webkitMatchesSelector||B.mozMatchesSelector||B.oMatchesSelector||B.msMatchesSelector))&&Ke(function(T){l.disconnectedMatch=ye.call(T,"*"),ye.call(T,"[s!='']:x"),ve.push("!=",$r)}),q=q.length&&new RegExp(q.join("|")),ve=ve.length&&new RegExp(ve.join("|")),C=Bn.test(B.compareDocumentPosition),Ue=C||Bn.test(B.contains)?function(T,P){var O=T.nodeType===9?T.documentElement:T,U=P&&P.parentNode;return T===U||!!(U&&U.nodeType===1&&(O.contains?O.contains(U):T.compareDocumentPosition&&T.compareDocumentPosition(U)&16))}:function(T,P){if(P){for(;P=P.parentNode;)if(P===T)return!0}return!1},Ht=C?function(T,P){if(T===P)return D=!0,0;var O=!T.compareDocumentPosition-!P.compareDocumentPosition;return O||(O=(T.ownerDocument||T)==(P.ownerDocument||P)?T.compareDocumentPosition(P):1,O&1||!l.sortDetached&&P.compareDocumentPosition(T)===O?T==k||T.ownerDocument==X&&Ue(X,T)?-1:P==k||P.ownerDocument==X&&Ue(X,P)?1:R?jt(R,T)-jt(R,P):0:O&4?-1:1)}:function(T,P){if(T===P)return D=!0,0;var O,U=0,H=T.parentNode,z=P.parentNode,V=[T],K=[P];if(!H||!z)return T==k?-1:P==k?1:H?-1:z?1:R?jt(R,T)-jt(R,P):0;if(H===z)return da(T,P);for(O=T;O=O.parentNode;)V.unshift(O);for(O=P;O=O.parentNode;)K.unshift(O);for(;V[U]===K[U];)U++;return U?da(V[U],K[U]):V[U]==X?-1:K[U]==X?1:0}),k},ce.matches=function(_,C){return ce(_,null,null,C)},ce.matchesSelector=function(_,C){if(N(_),l.matchesSelector&&J&&!He[C+" "]&&(!ve||!ve.test(C))&&(!q||!q.test(C)))try{var E=ye.call(_,C);if(E||l.disconnectedMatch||_.document&&_.document.nodeType!==11)return E}catch{He(C,!0)}return ce(C,k,null,[_]).length>0},ce.contains=function(_,C){return(_.ownerDocument||_)!=k&&N(_),Ue(_,C)},ce.attr=function(_,C){(_.ownerDocument||_)!=k&&N(_);var E=c.attrHandle[C.toLowerCase()],A=E&&Wt.call(c.attrHandle,C.toLowerCase())?E(_,C,!J):void 0;return A!==void 0?A:l.attributes||!J?_.getAttribute(C):(A=_.getAttributeNode(C))&&A.specified?A.value:null},ce.escape=function(_){return(_+"").replace(ca,ua)},ce.error=function(_){throw new Error("Syntax error, unrecognized expression: "+_)},ce.uniqueSort=function(_){var C,E=[],A=0,T=0;if(D=!l.detectDuplicates,R=!l.sortStable&&_.slice(0),_.sort(Ht),D){for(;C=_[T++];)C===_[T]&&(A=E.push(T));for(;A--;)_.splice(E[A],1)}return R=null,_},d=ce.getText=function(_){var C,E="",A=0,T=_.nodeType;if(T){if(T===1||T===9||T===11){if(typeof _.textContent=="string")return _.textContent;for(_=_.firstChild;_;_=_.nextSibling)E+=d(_)}else if(T===3||T===4)return _.nodeValue}else for(;C=_[A++];)E+=d(C);return E},c=ce.selectors={cacheLength:50,createPseudo:Ge,match:Oi,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(_){return _[1]=_[1].replace(ht,dt),_[3]=(_[3]||_[4]||_[5]||"").replace(ht,dt),_[2]==="~="&&(_[3]=" "+_[3]+" "),_.slice(0,4)},CHILD:function(_){return _[1]=_[1].toLowerCase(),_[1].slice(0,3)==="nth"?(_[3]||ce.error(_[0]),_[4]=+(_[4]?_[5]+(_[6]||1):2*(_[3]==="even"||_[3]==="odd")),_[5]=+(_[7]+_[8]||_[3]==="odd")):_[3]&&ce.error(_[0]),_},PSEUDO:function(_){var C,E=!_[6]&&_[2];return Oi.CHILD.test(_[0])?null:(_[3]?_[2]=_[4]||_[5]||"":E&&xh.test(E)&&(C=g(E,!0))&&(C=E.indexOf(")",E.length-C)-E.length)&&(_[0]=_[0].slice(0,C),_[2]=E.slice(0,C)),_.slice(0,3))}},filter:{TAG:function(_){var C=_.replace(ht,dt).toLowerCase();return _==="*"?function(){return!0}:function(E){return E.nodeName&&E.nodeName.toLowerCase()===C}},CLASS:function(_){var C=_e[_+" "];return C||(C=new RegExp("(^|"+oe+")"+_+"("+oe+"|$)"))&&_e(_,function(E){return C.test(typeof E.className=="string"&&E.className||typeof E.getAttribute!="undefined"&&E.getAttribute("class")||"")})},ATTR:function(_,C,E){return function(A){var T=ce.attr(A,_);return T==null?C==="!=":C?(T+="",C==="="?T===E:C==="!="?T!==E:C==="^="?E&&T.indexOf(E)===0:C==="*="?E&&T.indexOf(E)>-1:C==="$="?E&&T.slice(-E.length)===E:C==="~="?(" "+T.replace(Sh," ")+" ").indexOf(E)>-1:C==="|="?T===E||T.slice(0,E.length+1)===E+"-":!1):!0}},CHILD:function(_,C,E,A,T){var P=_.slice(0,3)!=="nth",O=_.slice(-4)!=="last",U=C==="of-type";return A===1&&T===0?function(H){return!!H.parentNode}:function(H,z,V){var K,ee,ue,G,Ce,Se,We=P!==O?"nextSibling":"previousSibling",ge=H.parentNode,qn=U&&H.nodeName.toLowerCase(),Vn=!V&&!U,je=!1;if(ge){if(P){for(;We;){for(G=H;G=G[We];)if(U?G.nodeName.toLowerCase()===qn:G.nodeType===1)return!1;Se=We=_==="only"&&!Se&&"nextSibling"}return!0}if(Se=[O?ge.firstChild:ge.lastChild],O&&Vn){for(G=ge,ue=G[ae]||(G[ae]={}),ee=ue[G.uniqueID]||(ue[G.uniqueID]={}),K=ee[_]||[],Ce=K[0]===De&&K[1],je=Ce&&K[2],G=Ce&&ge.childNodes[Ce];G=++Ce&&G&&G[We]||(je=Ce=0)||Se.pop();)if(G.nodeType===1&&++je&&G===H){ee[_]=[De,Ce,je];break}}else if(Vn&&(G=H,ue=G[ae]||(G[ae]={}),ee=ue[G.uniqueID]||(ue[G.uniqueID]={}),K=ee[_]||[],Ce=K[0]===De&&K[1],je=Ce),je===!1)for(;(G=++Ce&&G&&G[We]||(je=Ce=0)||Se.pop())&&!((U?G.nodeName.toLowerCase()===qn:G.nodeType===1)&&++je&&(Vn&&(ue=G[ae]||(G[ae]={}),ee=ue[G.uniqueID]||(ue[G.uniqueID]={}),ee[_]=[De,je]),G===H)););return je-=T,je===A||je%A===0&&je/A>=0}}},PSEUDO:function(_,C){var E,A=c.pseudos[_]||c.setFilters[_.toLowerCase()]||ce.error("unsupported pseudo: "+_);return A[ae]?A(C):A.length>1?(E=[_,_,"",C],c.setFilters.hasOwnProperty(_.toLowerCase())?Ge(function(T,P){for(var O,U=A(T,C),H=U.length;H--;)O=jt(T,U[H]),T[O]=!(P[O]=U[H])}):function(T){return A(T,0,E)}):A}},pseudos:{not:Ge(function(_){var C=[],E=[],A=b(_.replace(Di,"$1"));return A[ae]?Ge(function(T,P,O,U){for(var H,z=A(T,null,U,[]),V=T.length;V--;)(H=z[V])&&(T[V]=!(P[V]=H))}):function(T,P,O){return C[0]=T,A(C,null,O,E),C[0]=null,!E.pop()}}),has:Ge(function(_){return function(C){return ce(_,C).length>0}}),contains:Ge(function(_){return _=_.replace(ht,dt),function(C){return(C.textContent||d(C)).indexOf(_)>-1}}),lang:Ge(function(_){return kh.test(_||"")||ce.error("unsupported lang: "+_),_=_.replace(ht,dt).toLowerCase(),function(C){var E;do if(E=J?C.lang:C.getAttribute("xml:lang")||C.getAttribute("lang"))return E=E.toLowerCase(),E===_||E.indexOf(_+"-")===0;while((C=C.parentNode)&&C.nodeType===1);return!1}}),target:function(_){var C=r.location&&r.location.hash;return C&&C.slice(1)===_.id},root:function(_){return _===B},focus:function(_){return _===k.activeElement&&(!k.hasFocus||k.hasFocus())&&!!(_.type||_.href||~_.tabIndex)},enabled:fa(!1),disabled:fa(!0),checked:function(_){var C=_.nodeName.toLowerCase();return C==="input"&&!!_.checked||C==="option"&&!!_.selected},selected:function(_){return _.parentNode&&_.parentNode.selectedIndex,_.selected===!0},empty:function(_){for(_=_.firstChild;_;_=_.nextSibling)if(_.nodeType<6)return!1;return!0},parent:function(_){return!c.pseudos.empty(_)},header:function(_){return Dh.test(_.nodeName)},input:function(_){return Ph.test(_.nodeName)},button:function(_){var C=_.nodeName.toLowerCase();return C==="input"&&_.type==="button"||C==="button"},text:function(_){var C;return _.nodeName.toLowerCase()==="input"&&_.type==="text"&&((C=_.getAttribute("type"))==null||C.toLowerCase()==="text")},first:qt(function(){return[0]}),last:qt(function(_,C){return[C-1]}),eq:qt(function(_,C,E){return[E<0?E+C:E]}),even:qt(function(_,C){for(var E=0;E<C;E+=2)_.push(E);return _}),odd:qt(function(_,C){for(var E=1;E<C;E+=2)_.push(E);return _}),lt:qt(function(_,C,E){for(var A=E<0?E+C:E>C?C:E;--A>=0;)_.push(A);return _}),gt:qt(function(_,C,E){for(var A=E<0?E+C:E;++A<C;)_.push(A);return _})}},c.pseudos.nth=c.pseudos.eq;for(o in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[o]=Lh(o);for(o in{submit:!0,reset:!0})c.pseudos[o]=Fh(o);function pa(){}pa.prototype=c.filters=c.pseudos,c.setFilters=new pa,g=ce.tokenize=function(_,C){var E,A,T,P,O,U,H,z=jn[_+" "];if(z)return C?0:z.slice(0);for(O=_,U=[],H=c.preFilter;O;){(!E||(A=Nh.exec(O)))&&(A&&(O=O.slice(A[0].length)||O),U.push(T=[])),E=!1,(A=la.exec(O))&&(E=A.shift(),T.push({value:E,type:A[0].replace(Di," ")}),O=O.slice(E.length));for(P in c.filter)(A=Oi[P].exec(O))&&(!H[P]||(A=H[P](A)))&&(E=A.shift(),T.push({value:E,type:P,matches:A}),O=O.slice(E.length));if(!E)break}return C?O.length:O?ce.error(_):jn(_,U).slice(0)};function Li(_){for(var C=0,E=_.length,A="";C<E;C++)A+=_[C].value;return A}function Fi(_,C,E){var A=C.dir,T=C.next,P=T||A,O=E&&P==="parentNode",U=re++;return C.first?function(H,z,V){for(;H=H[A];)if(H.nodeType===1||O)return _(H,z,V);return!1}:function(H,z,V){var K,ee,ue,G=[De,U];if(V){for(;H=H[A];)if((H.nodeType===1||O)&&_(H,z,V))return!0}else for(;H=H[A];)if(H.nodeType===1||O)if(ue=H[ae]||(H[ae]={}),ee=ue[H.uniqueID]||(ue[H.uniqueID]={}),T&&T===H.nodeName.toLowerCase())H=H[A]||H;else{if((K=ee[P])&&K[0]===De&&K[1]===U)return G[2]=K[2];if(ee[P]=G,G[2]=_(H,z,V))return!0}return!1}}function Yr(_){return _.length>1?function(C,E,A){for(var T=_.length;T--;)if(!_[T](C,E,A))return!1;return!0}:_[0]}function Uh(_,C,E){for(var A=0,T=C.length;A<T;A++)ce(_,C[A],E);return E}function Ui(_,C,E,A,T){for(var P,O=[],U=0,H=_.length,z=C!=null;U<H;U++)(P=_[U])&&(!E||E(P,A,T))&&(O.push(P),z&&C.push(U));return O}function Qr(_,C,E,A,T,P){return A&&!A[ae]&&(A=Qr(A)),T&&!T[ae]&&(T=Qr(T,P)),Ge(function(O,U,H,z){var V,K,ee,ue=[],G=[],Ce=U.length,Se=O||Uh(C||"*",H.nodeType?[H]:H,[]),We=_&&(O||!C)?Ui(Se,ue,_,H,z):Se,ge=E?T||(O?_:Ce||A)?[]:U:We;if(E&&E(We,ge,H,z),A)for(V=Ui(ge,G),A(V,[],H,z),K=V.length;K--;)(ee=V[K])&&(ge[G[K]]=!(We[G[K]]=ee));if(O){if(T||_){if(T){for(V=[],K=ge.length;K--;)(ee=ge[K])&&V.push(We[K]=ee);T(null,ge=[],V,z)}for(K=ge.length;K--;)(ee=ge[K])&&(V=T?jt(O,ee):ue[K])>-1&&(O[V]=!(U[V]=ee))}}else ge=Ui(ge===U?ge.splice(Ce,ge.length):ge),T?T(null,U,ge,z):wt.apply(U,ge)})}function Xr(_){for(var C,E,A,T=_.length,P=c.relative[_[0].type],O=P||c.relative[" "],U=P?1:0,H=Fi(function(K){return K===C},O,!0),z=Fi(function(K){return jt(C,K)>-1},O,!0),V=[function(K,ee,ue){var G=!P&&(ue||ee!==I)||((C=ee).nodeType?H(K,ee,ue):z(K,ee,ue));return C=null,G}];U<T;U++)if(E=c.relative[_[U].type])V=[Fi(Yr(V),E)];else{if(E=c.filter[_[U].type].apply(null,_[U].matches),E[ae]){for(A=++U;A<T&&!c.relative[_[A].type];A++);return Qr(U>1&&Yr(V),U>1&&Li(_.slice(0,U-1).concat({value:_[U-2].type===" "?"*":""})).replace(Di,"$1"),E,U<A&&Xr(_.slice(U,A)),A<T&&Xr(_=_.slice(A)),A<T&&Li(_))}V.push(E)}return Yr(V)}function Hh(_,C){var E=C.length>0,A=_.length>0,T=function(P,O,U,H,z){var V,K,ee,ue=0,G="0",Ce=P&&[],Se=[],We=I,ge=P||A&&c.find.TAG("*",z),qn=De+=We==null?1:Math.random()||.1,Vn=ge.length;for(z&&(I=O==k||O||z);G!==Vn&&(V=ge[G])!=null;G++){if(A&&V){for(K=0,!O&&V.ownerDocument!=k&&(N(V),U=!J);ee=_[K++];)if(ee(V,O||k,U)){H.push(V);break}z&&(De=qn)}E&&((V=!ee&&V)&&ue--,P&&Ce.push(V))}if(ue+=G,E&&G!==ue){for(K=0;ee=C[K++];)ee(Ce,Se,O,U);if(P){if(ue>0)for(;G--;)Ce[G]||Se[G]||(Se[G]=Et.call(H));Se=Ui(Se)}wt.apply(H,Se),z&&!P&&Se.length>0&&ue+C.length>1&&ce.uniqueSort(H)}return z&&(De=qn,I=We),Ce};return E?Ge(T):T}return b=ce.compile=function(_,C){var E,A=[],T=[],P=Pi[_+" "];if(!P){for(C||(C=g(_)),E=C.length;E--;)P=Xr(C[E]),P[ae]?A.push(P):T.push(P);P=Pi(_,Hh(T,A)),P.selector=_}return P},v=ce.select=function(_,C,E,A){var T,P,O,U,H,z=typeof _=="function"&&_,V=!A&&g(_=z.selector||_);if(E=E||[],V.length===1){if(P=V[0]=V[0].slice(0),P.length>2&&(O=P[0]).type==="ID"&&C.nodeType===9&&J&&c.relative[P[1].type]){if(C=(c.find.ID(O.matches[0].replace(ht,dt),C)||[])[0],C)z&&(C=C.parentNode);else return E;_=_.slice(P.shift().value.length)}for(T=Oi.needsContext.test(_)?0:P.length;T--&&(O=P[T],!c.relative[U=O.type]);)if((H=c.find[U])&&(A=H(O.matches[0].replace(ht,dt),zr.test(P[0].type)&&Kr(C.parentNode)||C))){if(P.splice(T,1),_=A.length&&Li(P),!_)return wt.apply(E,A),E;break}}return(z||b(_,V))(A,C,!J,E,!C||zr.test(_)&&Kr(C.parentNode)||C),E},l.sortStable=ae.split("").sort(Ht).join("")===ae,l.detectDuplicates=!!D,N(),l.sortDetached=Ke(function(_){return _.compareDocumentPosition(k.createElement("fieldset"))&1}),Ke(function(_){return _.innerHTML="<a href='#'></a>",_.firstChild.getAttribute("href")==="#"})||Gr("type|href|height|width",function(_,C,E){if(!E)return _.getAttribute(C,C.toLowerCase()==="type"?1:2)}),(!l.attributes||!Ke(function(_){return _.innerHTML="<input/>",_.firstChild.setAttribute("value",""),_.firstChild.getAttribute("value")===""}))&&Gr("value",function(_,C,E){if(!E&&_.nodeName.toLowerCase()==="input")return _.defaultValue}),Ke(function(_){return _.getAttribute("disabled")==null})||Gr(Vr,function(_,C,E){var A;if(!E)return _[C]===!0?C.toLowerCase():(A=_.getAttributeNode(C))&&A.specified?A.value:null}),ce}(e);h.find=lt,h.expr=lt.selectors,h.expr[":"]=h.expr.pseudos,h.uniqueSort=h.unique=lt.uniqueSort,h.text=lt.getText,h.isXMLDoc=lt.isXML,h.contains=lt.contains,h.escapeSelector=lt.escape;var et=function(r,o,l){for(var c=[],d=l!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(d&&h(r).is(l))break;c.push(r)}return c},Ti=function(r,o){for(var l=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&l.push(r);return l},wo=h.expr.match.needsContext;function Be(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var To=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Rr(r,o,l){return j(o)?h.grep(r,function(c,d){return!!o.call(c,d,c)!==l}):o.nodeType?h.grep(r,function(c){return c===o!==l}):typeof o!="string"?h.grep(r,function(c){return m.call(o,c)>-1!==l}):h.filter(o,r,l)}h.filter=function(r,o,l){var c=o[0];return l&&(r=":not("+r+")"),o.length===1&&c.nodeType===1?h.find.matchesSelector(c,r)?[c]:[]:h.find.matches(r,h.grep(o,function(d){return d.nodeType===1}))},h.fn.extend({find:function(r){var o,l,c=this.length,d=this;if(typeof r!="string")return this.pushStack(h(r).filter(function(){for(o=0;o<c;o++)if(h.contains(d[o],this))return!0}));for(l=this.pushStack([]),o=0;o<c;o++)h.find(r,d[o],l);return c>1?h.uniqueSort(l):l},filter:function(r){return this.pushStack(Rr(this,r||[],!1))},not:function(r){return this.pushStack(Rr(this,r||[],!0))},is:function(r){return!!Rr(this,typeof r=="string"&&wo.test(r)?h(r):r||[],!1).length}});var Io,xu=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ku=h.fn.init=function(r,o,l){var c,d;if(!r)return this;if(l=l||Io,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?c=[null,r,null]:c=xu.exec(r),c&&(c[1]||!o))if(c[1]){if(o=o instanceof h?o[0]:o,h.merge(this,h.parseHTML(c[1],o&&o.nodeType?o.ownerDocument||o:Q,!0)),To.test(c[1])&&h.isPlainObject(o))for(c in o)j(this[c])?this[c](o[c]):this.attr(c,o[c]);return this}else return d=Q.getElementById(c[2]),d&&(this[0]=d,this.length=1),this;else return!o||o.jquery?(o||l).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(j(r))return l.ready!==void 0?l.ready(r):r(h)}return h.makeArray(r,this)};ku.prototype=h.fn,Io=h(Q);var Au=/^(?:parents|prev(?:Until|All))/,Pu={children:!0,contents:!0,next:!0,prev:!0};h.fn.extend({has:function(r){var o=h(r,this),l=o.length;return this.filter(function(){for(var c=0;c<l;c++)if(h.contains(this,o[c]))return!0})},closest:function(r,o){var l,c=0,d=this.length,f=[],g=typeof r!="string"&&h(r);if(!wo.test(r)){for(;c<d;c++)for(l=this[c];l&&l!==o;l=l.parentNode)if(l.nodeType<11&&(g?g.index(l)>-1:l.nodeType===1&&h.find.matchesSelector(l,r))){f.push(l);break}}return this.pushStack(f.length>1?h.uniqueSort(f):f)},index:function(r){return r?typeof r=="string"?m.call(h(r),this[0]):m.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(h.uniqueSort(h.merge(this.get(),h(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function So(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}h.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return et(r,"parentNode")},parentsUntil:function(r,o,l){return et(r,"parentNode",l)},next:function(r){return So(r,"nextSibling")},prev:function(r){return So(r,"previousSibling")},nextAll:function(r){return et(r,"nextSibling")},prevAll:function(r){return et(r,"previousSibling")},nextUntil:function(r,o,l){return et(r,"nextSibling",l)},prevUntil:function(r,o,l){return et(r,"previousSibling",l)},siblings:function(r){return Ti((r.parentNode||{}).firstChild,r)},children:function(r){return Ti(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(Be(r,"template")&&(r=r.content||r),h.merge([],r.childNodes))}},function(r,o){h.fn[r]=function(l,c){var d=h.map(this,o,l);return r.slice(-5)!=="Until"&&(c=l),c&&typeof c=="string"&&(d=h.filter(c,d)),this.length>1&&(Pu[r]||h.uniqueSort(d),Au.test(r)&&d.reverse()),this.pushStack(d)}});var tt=/[^\x20\t\r\n\f]+/g;function Du(r){var o={};return h.each(r.match(tt)||[],function(l,c){o[c]=!0}),o}h.Callbacks=function(r){r=typeof r=="string"?Du(r):h.extend({},r);var o,l,c,d,f=[],g=[],b=-1,v=function(){for(d=d||r.once,c=o=!0;g.length;b=-1)for(l=g.shift();++b<f.length;)f[b].apply(l[0],l[1])===!1&&r.stopOnFalse&&(b=f.length,l=!1);r.memory||(l=!1),o=!1,d&&(l?f=[]:f="")},I={add:function(){return f&&(l&&!o&&(b=f.length-1,g.push(l)),function R(D){h.each(D,function(N,k){j(k)?(!r.unique||!I.has(k))&&f.push(k):k&&k.length&&$e(k)!=="string"&&R(k)})}(arguments),l&&!o&&v()),this},remove:function(){return h.each(arguments,function(R,D){for(var N;(N=h.inArray(D,f,N))>-1;)f.splice(N,1),N<=b&&b--}),this},has:function(R){return R?h.inArray(R,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return d=g=[],f=l="",this},disabled:function(){return!f},lock:function(){return d=g=[],!l&&!o&&(f=l=""),this},locked:function(){return!!d},fireWith:function(R,D){return d||(D=D||[],D=[R,D.slice?D.slice():D],g.push(D),o||v()),this},fire:function(){return I.fireWith(this,arguments),this},fired:function(){return!!c}};return I};function an(r){return r}function Ii(r){throw r}function No(r,o,l,c){var d;try{r&&j(d=r.promise)?d.call(r).done(o).fail(l):r&&j(d=r.then)?d.call(r,o,l):o.apply(void 0,[r].slice(c))}catch(f){l.apply(void 0,[f])}}h.extend({Deferred:function(r){var o=[["notify","progress",h.Callbacks("memory"),h.Callbacks("memory"),2],["resolve","done",h.Callbacks("once memory"),h.Callbacks("once memory"),0,"resolved"],["reject","fail",h.Callbacks("once memory"),h.Callbacks("once memory"),1,"rejected"]],l="pending",c={state:function(){return l},always:function(){return d.done(arguments).fail(arguments),this},catch:function(f){return c.then(null,f)},pipe:function(){var f=arguments;return h.Deferred(function(g){h.each(o,function(b,v){var I=j(f[v[4]])&&f[v[4]];d[v[1]](function(){var R=I&&I.apply(this,arguments);R&&j(R.promise)?R.promise().progress(g.notify).done(g.resolve).fail(g.reject):g[v[0]+"With"](this,I?[R]:arguments)})}),f=null}).promise()},then:function(f,g,b){var v=0;function I(R,D,N,k){return function(){var B=this,J=arguments,q=function(){var ye,Ue;if(!(R<v)){if(ye=N.apply(B,J),ye===D.promise())throw new TypeError("Thenable self-resolution");Ue=ye&&(typeof ye=="object"||typeof ye=="function")&&ye.then,j(Ue)?k?Ue.call(ye,I(v,D,an,k),I(v,D,Ii,k)):(v++,Ue.call(ye,I(v,D,an,k),I(v,D,Ii,k),I(v,D,an,D.notifyWith))):(N!==an&&(B=void 0,J=[ye]),(k||D.resolveWith)(B,J))}},ve=k?q:function(){try{q()}catch(ye){h.Deferred.exceptionHook&&h.Deferred.exceptionHook(ye,ve.stackTrace),R+1>=v&&(N!==Ii&&(B=void 0,J=[ye]),D.rejectWith(B,J))}};R?ve():(h.Deferred.getStackHook&&(ve.stackTrace=h.Deferred.getStackHook()),e.setTimeout(ve))}}return h.Deferred(function(R){o[0][3].add(I(0,R,j(b)?b:an,R.notifyWith)),o[1][3].add(I(0,R,j(f)?f:an)),o[2][3].add(I(0,R,j(g)?g:Ii))}).promise()},promise:function(f){return f!=null?h.extend(f,c):c}},d={};return h.each(o,function(f,g){var b=g[2],v=g[5];c[g[1]]=b.add,v&&b.add(function(){l=v},o[3-f][2].disable,o[3-f][3].disable,o[0][2].lock,o[0][3].lock),b.add(g[3].fire),d[g[0]]=function(){return d[g[0]+"With"](this===d?void 0:this,arguments),this},d[g[0]+"With"]=b.fireWith}),c.promise(d),r&&r.call(d,d),d},when:function(r){var o=arguments.length,l=o,c=Array(l),d=a.call(arguments),f=h.Deferred(),g=function(b){return function(v){c[b]=this,d[b]=arguments.length>1?a.call(arguments):v,--o||f.resolveWith(c,d)}};if(o<=1&&(No(r,f.done(g(l)).resolve,f.reject,!o),f.state()==="pending"||j(d[l]&&d[l].then)))return f.then();for(;l--;)No(d[l],g(l),f.reject);return f.promise()}});var Ou=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;h.Deferred.exceptionHook=function(r,o){e.console&&e.console.warn&&r&&Ou.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},h.readyException=function(r){e.setTimeout(function(){throw r})};var xr=h.Deferred();h.fn.ready=function(r){return xr.then(r).catch(function(o){h.readyException(o)}),this},h.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--h.readyWait:h.isReady)||(h.isReady=!0,!(r!==!0&&--h.readyWait>0)&&xr.resolveWith(Q,[h]))}}),h.ready.then=xr.then;function Si(){Q.removeEventListener("DOMContentLoaded",Si),e.removeEventListener("load",Si),h.ready()}Q.readyState==="complete"||Q.readyState!=="loading"&&!Q.documentElement.doScroll?e.setTimeout(h.ready):(Q.addEventListener("DOMContentLoaded",Si),e.addEventListener("load",Si));var ct=function(r,o,l,c,d,f,g){var b=0,v=r.length,I=l==null;if($e(l)==="object"){d=!0;for(b in l)ct(r,o,b,l[b],!0,f,g)}else if(c!==void 0&&(d=!0,j(c)||(g=!0),I&&(g?(o.call(r,c),o=null):(I=o,o=function(R,D,N){return I.call(h(R),N)})),o))for(;b<v;b++)o(r[b],l,g?c:c.call(r[b],b,o(r[b],l)));return d?r:I?o.call(r):v?o(r[0],l):f},Mu=/^-ms-/,Lu=/-([a-z])/g;function Fu(r,o){return o.toUpperCase()}function nt(r){return r.replace(Mu,"ms-").replace(Lu,Fu)}var Dn=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function On(){this.expando=h.expando+On.uid++}On.uid=1,On.prototype={cache:function(r){var o=r[this.expando];return o||(o={},Dn(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,l){var c,d=this.cache(r);if(typeof o=="string")d[nt(o)]=l;else for(c in o)d[nt(c)]=o[c];return d},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][nt(o)]},access:function(r,o,l){return o===void 0||o&&typeof o=="string"&&l===void 0?this.get(r,o):(this.set(r,o,l),l!==void 0?l:o)},remove:function(r,o){var l,c=r[this.expando];if(c!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(nt):(o=nt(o),o=o in c?[o]:o.match(tt)||[]),l=o.length;l--;)delete c[o[l]];(o===void 0||h.isEmptyObject(c))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!h.isEmptyObject(o)}};var $=new On,ke=new On,Uu=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Hu=/[A-Z]/g;function Wu(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:Uu.test(r)?JSON.parse(r):r}function Ro(r,o,l){var c;if(l===void 0&&r.nodeType===1)if(c="data-"+o.replace(Hu,"-$&").toLowerCase(),l=r.getAttribute(c),typeof l=="string"){try{l=Wu(l)}catch{}ke.set(r,o,l)}else l=void 0;return l}h.extend({hasData:function(r){return ke.hasData(r)||$.hasData(r)},data:function(r,o,l){return ke.access(r,o,l)},removeData:function(r,o){ke.remove(r,o)},_data:function(r,o,l){return $.access(r,o,l)},_removeData:function(r,o){$.remove(r,o)}}),h.fn.extend({data:function(r,o){var l,c,d,f=this[0],g=f&&f.attributes;if(r===void 0){if(this.length&&(d=ke.get(f),f.nodeType===1&&!$.get(f,"hasDataAttrs"))){for(l=g.length;l--;)g[l]&&(c=g[l].name,c.indexOf("data-")===0&&(c=nt(c.slice(5)),Ro(f,c,d[c])));$.set(f,"hasDataAttrs",!0)}return d}return typeof r=="object"?this.each(function(){ke.set(this,r)}):ct(this,function(b){var v;if(f&&b===void 0)return v=ke.get(f,r),v!==void 0||(v=Ro(f,r),v!==void 0)?v:void 0;this.each(function(){ke.set(this,r,b)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){ke.remove(this,r)})}}),h.extend({queue:function(r,o,l){var c;if(r)return o=(o||"fx")+"queue",c=$.get(r,o),l&&(!c||Array.isArray(l)?c=$.access(r,o,h.makeArray(l)):c.push(l)),c||[]},dequeue:function(r,o){o=o||"fx";var l=h.queue(r,o),c=l.length,d=l.shift(),f=h._queueHooks(r,o),g=function(){h.dequeue(r,o)};d==="inprogress"&&(d=l.shift(),c--),d&&(o==="fx"&&l.unshift("inprogress"),delete f.stop,d.call(r,g,f)),!c&&f&&f.empty.fire()},_queueHooks:function(r,o){var l=o+"queueHooks";return $.get(r,l)||$.access(r,l,{empty:h.Callbacks("once memory").add(function(){$.remove(r,[o+"queue",l])})})}}),h.fn.extend({queue:function(r,o){var l=2;return typeof r!="string"&&(o=r,r="fx",l--),arguments.length<l?h.queue(this[0],r):o===void 0?this:this.each(function(){var c=h.queue(this,r,o);h._queueHooks(this,r),r==="fx"&&c[0]!=="inprogress"&&h.dequeue(this,r)})},dequeue:function(r){return this.each(function(){h.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var l,c=1,d=h.Deferred(),f=this,g=this.length,b=function(){--c||d.resolveWith(f,[f])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";g--;)l=$.get(f[g],r+"queueHooks"),l&&l.empty&&(c++,l.empty.add(b));return b(),d.promise(o)}});var xo=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Mn=new RegExp("^(?:([+-])=|)("+xo+")([a-z%]*)$","i"),ut=["Top","Right","Bottom","Left"],Lt=Q.documentElement,ln=function(r){return h.contains(r.ownerDocument,r)},ju={composed:!0};Lt.getRootNode&&(ln=function(r){return h.contains(r.ownerDocument,r)||r.getRootNode(ju)===r.ownerDocument});var Ni=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&ln(r)&&h.css(r,"display")==="none"};function ko(r,o,l,c){var d,f,g=20,b=c?function(){return c.cur()}:function(){return h.css(r,o,"")},v=b(),I=l&&l[3]||(h.cssNumber[o]?"":"px"),R=r.nodeType&&(h.cssNumber[o]||I!=="px"&&+v)&&Mn.exec(h.css(r,o));if(R&&R[3]!==I){for(v=v/2,I=I||R[3],R=+v||1;g--;)h.style(r,o,R+I),(1-f)*(1-(f=b()/v||.5))<=0&&(g=0),R=R/f;R=R*2,h.style(r,o,R+I),l=l||[]}return l&&(R=+R||+v||0,d=l[1]?R+(l[1]+1)*l[2]:+l[2],c&&(c.unit=I,c.start=R,c.end=d)),d}var Ao={};function Bu(r){var o,l=r.ownerDocument,c=r.nodeName,d=Ao[c];return d||(o=l.body.appendChild(l.createElement(c)),d=h.css(o,"display"),o.parentNode.removeChild(o),d==="none"&&(d="block"),Ao[c]=d,d)}function cn(r,o){for(var l,c,d=[],f=0,g=r.length;f<g;f++)c=r[f],c.style&&(l=c.style.display,o?(l==="none"&&(d[f]=$.get(c,"display")||null,d[f]||(c.style.display="")),c.style.display===""&&Ni(c)&&(d[f]=Bu(c))):l!=="none"&&(d[f]="none",$.set(c,"display",l)));for(f=0;f<g;f++)d[f]!=null&&(r[f].style.display=d[f]);return r}h.fn.extend({show:function(){return cn(this,!0)},hide:function(){return cn(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Ni(this)?h(this).show():h(this).hide()})}});var Ln=/^(?:checkbox|radio)$/i,Po=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Do=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=Q.createDocumentFragment(),o=r.appendChild(Q.createElement("div")),l=Q.createElement("input");l.setAttribute("type","radio"),l.setAttribute("checked","checked"),l.setAttribute("name","t"),o.appendChild(l),M.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",M.option=!!o.lastChild})();var qe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qe.tbody=qe.tfoot=qe.colgroup=qe.caption=qe.thead,qe.th=qe.td,M.option||(qe.optgroup=qe.option=[1,"<select multiple='multiple'>","</select>"]);function Ae(r,o){var l;return typeof r.getElementsByTagName!="undefined"?l=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll!="undefined"?l=r.querySelectorAll(o||"*"):l=[],o===void 0||o&&Be(r,o)?h.merge([r],l):l}function kr(r,o){for(var l=0,c=r.length;l<c;l++)$.set(r[l],"globalEval",!o||$.get(o[l],"globalEval"))}var qu=/<|&#?\w+;/;function Oo(r,o,l,c,d){for(var f,g,b,v,I,R,D=o.createDocumentFragment(),N=[],k=0,B=r.length;k<B;k++)if(f=r[k],f||f===0)if($e(f)==="object")h.merge(N,f.nodeType?[f]:f);else if(!qu.test(f))N.push(o.createTextNode(f));else{for(g=g||D.appendChild(o.createElement("div")),b=(Po.exec(f)||["",""])[1].toLowerCase(),v=qe[b]||qe._default,g.innerHTML=v[1]+h.htmlPrefilter(f)+v[2],R=v[0];R--;)g=g.lastChild;h.merge(N,g.childNodes),g=D.firstChild,g.textContent=""}for(D.textContent="",k=0;f=N[k++];){if(c&&h.inArray(f,c)>-1){d&&d.push(f);continue}if(I=ln(f),g=Ae(D.appendChild(f),"script"),I&&kr(g),l)for(R=0;f=g[R++];)Do.test(f.type||"")&&l.push(f)}return D}var Mo=/^([^.]*)(?:\.(.+)|)/;function un(){return!0}function hn(){return!1}function Vu(r,o){return r===$u()==(o==="focus")}function $u(){try{return Q.activeElement}catch{}}function Ar(r,o,l,c,d,f){var g,b;if(typeof o=="object"){typeof l!="string"&&(c=c||l,l=void 0);for(b in o)Ar(r,b,l,c,o[b],f);return r}if(c==null&&d==null?(d=l,c=l=void 0):d==null&&(typeof l=="string"?(d=c,c=void 0):(d=c,c=l,l=void 0)),d===!1)d=hn;else if(!d)return r;return f===1&&(g=d,d=function(v){return h().off(v),g.apply(this,arguments)},d.guid=g.guid||(g.guid=h.guid++)),r.each(function(){h.event.add(this,o,d,c,l)})}h.event={global:{},add:function(r,o,l,c,d){var f,g,b,v,I,R,D,N,k,B,J,q=$.get(r);if(!!Dn(r))for(l.handler&&(f=l,l=f.handler,d=f.selector),d&&h.find.matchesSelector(Lt,d),l.guid||(l.guid=h.guid++),(v=q.events)||(v=q.events=Object.create(null)),(g=q.handle)||(g=q.handle=function(ve){return typeof h!="undefined"&&h.event.triggered!==ve.type?h.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(tt)||[""],I=o.length;I--;)b=Mo.exec(o[I])||[],k=J=b[1],B=(b[2]||"").split(".").sort(),k&&(D=h.event.special[k]||{},k=(d?D.delegateType:D.bindType)||k,D=h.event.special[k]||{},R=h.extend({type:k,origType:J,data:c,handler:l,guid:l.guid,selector:d,needsContext:d&&h.expr.match.needsContext.test(d),namespace:B.join(".")},f),(N=v[k])||(N=v[k]=[],N.delegateCount=0,(!D.setup||D.setup.call(r,c,B,g)===!1)&&r.addEventListener&&r.addEventListener(k,g)),D.add&&(D.add.call(r,R),R.handler.guid||(R.handler.guid=l.guid)),d?N.splice(N.delegateCount++,0,R):N.push(R),h.event.global[k]=!0)},remove:function(r,o,l,c,d){var f,g,b,v,I,R,D,N,k,B,J,q=$.hasData(r)&&$.get(r);if(!(!q||!(v=q.events))){for(o=(o||"").match(tt)||[""],I=o.length;I--;){if(b=Mo.exec(o[I])||[],k=J=b[1],B=(b[2]||"").split(".").sort(),!k){for(k in v)h.event.remove(r,k+o[I],l,c,!0);continue}for(D=h.event.special[k]||{},k=(c?D.delegateType:D.bindType)||k,N=v[k]||[],b=b[2]&&new RegExp("(^|\\.)"+B.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=N.length;f--;)R=N[f],(d||J===R.origType)&&(!l||l.guid===R.guid)&&(!b||b.test(R.namespace))&&(!c||c===R.selector||c==="**"&&R.selector)&&(N.splice(f,1),R.selector&&N.delegateCount--,D.remove&&D.remove.call(r,R));g&&!N.length&&((!D.teardown||D.teardown.call(r,B,q.handle)===!1)&&h.removeEvent(r,k,q.handle),delete v[k])}h.isEmptyObject(v)&&$.remove(r,"handle events")}},dispatch:function(r){var o,l,c,d,f,g,b=new Array(arguments.length),v=h.event.fix(r),I=($.get(this,"events")||Object.create(null))[v.type]||[],R=h.event.special[v.type]||{};for(b[0]=v,o=1;o<arguments.length;o++)b[o]=arguments[o];if(v.delegateTarget=this,!(R.preDispatch&&R.preDispatch.call(this,v)===!1)){for(g=h.event.handlers.call(this,v,I),o=0;(d=g[o++])&&!v.isPropagationStopped();)for(v.currentTarget=d.elem,l=0;(f=d.handlers[l++])&&!v.isImmediatePropagationStopped();)(!v.rnamespace||f.namespace===!1||v.rnamespace.test(f.namespace))&&(v.handleObj=f,v.data=f.data,c=((h.event.special[f.origType]||{}).handle||f.handler).apply(d.elem,b),c!==void 0&&(v.result=c)===!1&&(v.preventDefault(),v.stopPropagation()));return R.postDispatch&&R.postDispatch.call(this,v),v.result}},handlers:function(r,o){var l,c,d,f,g,b=[],v=o.delegateCount,I=r.target;if(v&&I.nodeType&&!(r.type==="click"&&r.button>=1)){for(;I!==this;I=I.parentNode||this)if(I.nodeType===1&&!(r.type==="click"&&I.disabled===!0)){for(f=[],g={},l=0;l<v;l++)c=o[l],d=c.selector+" ",g[d]===void 0&&(g[d]=c.needsContext?h(d,this).index(I)>-1:h.find(d,this,null,[I]).length),g[d]&&f.push(c);f.length&&b.push({elem:I,handlers:f})}}return I=this,v<o.length&&b.push({elem:I,handlers:o.slice(v)}),b},addProp:function(r,o){Object.defineProperty(h.Event.prototype,r,{enumerable:!0,configurable:!0,get:j(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(l){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:l})}})},fix:function(r){return r[h.expando]?r:new h.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return Ln.test(o.type)&&o.click&&Be(o,"input")&&Ri(o,"click",un),!1},trigger:function(r){var o=this||r;return Ln.test(o.type)&&o.click&&Be(o,"input")&&Ri(o,"click"),!0},_default:function(r){var o=r.target;return Ln.test(o.type)&&o.click&&Be(o,"input")&&$.get(o,"click")||Be(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function Ri(r,o,l){if(!l){$.get(r,o)===void 0&&h.event.add(r,o,un);return}$.set(r,o,!1),h.event.add(r,o,{namespace:!1,handler:function(c){var d,f,g=$.get(this,o);if(c.isTrigger&1&&this[o]){if(g.length)(h.event.special[o]||{}).delegateType&&c.stopPropagation();else if(g=a.call(arguments),$.set(this,o,g),d=l(this,o),this[o](),f=$.get(this,o),g!==f||d?$.set(this,o,!1):f={},g!==f)return c.stopImmediatePropagation(),c.preventDefault(),f&&f.value}else g.length&&($.set(this,o,{value:h.event.trigger(h.extend(g[0],h.Event.prototype),g.slice(1),this)}),c.stopImmediatePropagation())}})}h.removeEvent=function(r,o,l){r.removeEventListener&&r.removeEventListener(o,l)},h.Event=function(r,o){if(!(this instanceof h.Event))return new h.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?un:hn,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&h.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[h.expando]=!0},h.Event.prototype={constructor:h.Event,isDefaultPrevented:hn,isPropagationStopped:hn,isImmediatePropagationStopped:hn,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=un,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=un,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=un,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},h.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},h.event.addProp),h.each({focus:"focusin",blur:"focusout"},function(r,o){h.event.special[r]={setup:function(){return Ri(this,r,Vu),!1},trigger:function(){return Ri(this,r),!0},_default:function(l){return $.get(l.target,r)},delegateType:o}}),h.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){h.event.special[r]={delegateType:o,bindType:o,handle:function(l){var c,d=this,f=l.relatedTarget,g=l.handleObj;return(!f||f!==d&&!h.contains(d,f))&&(l.type=g.origType,c=g.handler.apply(this,arguments),l.type=o),c}}}),h.fn.extend({on:function(r,o,l,c){return Ar(this,r,o,l,c)},one:function(r,o,l,c){return Ar(this,r,o,l,c,1)},off:function(r,o,l){var c,d;if(r&&r.preventDefault&&r.handleObj)return c=r.handleObj,h(r.delegateTarget).off(c.namespace?c.origType+"."+c.namespace:c.origType,c.selector,c.handler),this;if(typeof r=="object"){for(d in r)this.off(d,o,r[d]);return this}return(o===!1||typeof o=="function")&&(l=o,o=void 0),l===!1&&(l=hn),this.each(function(){h.event.remove(this,r,l,o)})}});var zu=/<script|<style|<link/i,Gu=/checked\s*(?:[^=]|=\s*.checked.)/i,Ku=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Lo(r,o){return Be(r,"table")&&Be(o.nodeType!==11?o:o.firstChild,"tr")&&h(r).children("tbody")[0]||r}function Yu(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function Qu(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function Fo(r,o){var l,c,d,f,g,b,v;if(o.nodeType===1){if($.hasData(r)&&(f=$.get(r),v=f.events,v)){$.remove(o,"handle events");for(d in v)for(l=0,c=v[d].length;l<c;l++)h.event.add(o,d,v[d][l])}ke.hasData(r)&&(g=ke.access(r),b=h.extend({},g),ke.set(o,b))}}function Xu(r,o){var l=o.nodeName.toLowerCase();l==="input"&&Ln.test(r.type)?o.checked=r.checked:(l==="input"||l==="textarea")&&(o.defaultValue=r.defaultValue)}function dn(r,o,l,c){o=u(o);var d,f,g,b,v,I,R=0,D=r.length,N=D-1,k=o[0],B=j(k);if(B||D>1&&typeof k=="string"&&!M.checkClone&&Gu.test(k))return r.each(function(J){var q=r.eq(J);B&&(o[0]=k.call(this,J,q.html())),dn(q,o,l,c)});if(D&&(d=Oo(o,r[0].ownerDocument,!1,r,c),f=d.firstChild,d.childNodes.length===1&&(d=f),f||c)){for(g=h.map(Ae(d,"script"),Yu),b=g.length;R<D;R++)v=d,R!==N&&(v=h.clone(v,!0,!0),b&&h.merge(g,Ae(v,"script"))),l.call(r[R],v,R);if(b)for(I=g[g.length-1].ownerDocument,h.map(g,Qu),R=0;R<b;R++)v=g[R],Do.test(v.type||"")&&!$.access(v,"globalEval")&&h.contains(I,v)&&(v.src&&(v.type||"").toLowerCase()!=="module"?h._evalUrl&&!v.noModule&&h._evalUrl(v.src,{nonce:v.nonce||v.getAttribute("nonce")},I):Ze(v.textContent.replace(Ku,""),v,I))}return r}function Uo(r,o,l){for(var c,d=o?h.filter(o,r):r,f=0;(c=d[f])!=null;f++)!l&&c.nodeType===1&&h.cleanData(Ae(c)),c.parentNode&&(l&&ln(c)&&kr(Ae(c,"script")),c.parentNode.removeChild(c));return r}h.extend({htmlPrefilter:function(r){return r},clone:function(r,o,l){var c,d,f,g,b=r.cloneNode(!0),v=ln(r);if(!M.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!h.isXMLDoc(r))for(g=Ae(b),f=Ae(r),c=0,d=f.length;c<d;c++)Xu(f[c],g[c]);if(o)if(l)for(f=f||Ae(r),g=g||Ae(b),c=0,d=f.length;c<d;c++)Fo(f[c],g[c]);else Fo(r,b);return g=Ae(b,"script"),g.length>0&&kr(g,!v&&Ae(r,"script")),b},cleanData:function(r){for(var o,l,c,d=h.event.special,f=0;(l=r[f])!==void 0;f++)if(Dn(l)){if(o=l[$.expando]){if(o.events)for(c in o.events)d[c]?h.event.remove(l,c):h.removeEvent(l,c,o.handle);l[$.expando]=void 0}l[ke.expando]&&(l[ke.expando]=void 0)}}}),h.fn.extend({detach:function(r){return Uo(this,r,!0)},remove:function(r){return Uo(this,r)},text:function(r){return ct(this,function(o){return o===void 0?h.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return dn(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Lo(this,r);o.appendChild(r)}})},prepend:function(){return dn(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Lo(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return dn(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return dn(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(h.cleanData(Ae(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r==null?!1:r,o=o==null?r:o,this.map(function(){return h.clone(this,r,o)})},html:function(r){return ct(this,function(o){var l=this[0]||{},c=0,d=this.length;if(o===void 0&&l.nodeType===1)return l.innerHTML;if(typeof o=="string"&&!zu.test(o)&&!qe[(Po.exec(o)||["",""])[1].toLowerCase()]){o=h.htmlPrefilter(o);try{for(;c<d;c++)l=this[c]||{},l.nodeType===1&&(h.cleanData(Ae(l,!1)),l.innerHTML=o);l=0}catch{}}l&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return dn(this,arguments,function(o){var l=this.parentNode;h.inArray(this,r)<0&&(h.cleanData(Ae(this)),l&&l.replaceChild(o,this))},r)}}),h.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){h.fn[r]=function(l){for(var c,d=[],f=h(l),g=f.length-1,b=0;b<=g;b++)c=b===g?this:this.clone(!0),h(f[b])[o](c),p.apply(d,c.get());return this.pushStack(d)}});var Pr=new RegExp("^("+xo+")(?!px)[a-z%]+$","i"),Dr=/^--/,xi=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(r)},Ho=function(r,o,l){var c,d,f={};for(d in o)f[d]=r.style[d],r.style[d]=o[d];c=l.call(r);for(d in o)r.style[d]=f[d];return c},Ju=new RegExp(ut.join("|"),"i"),Wo="[\\x20\\t\\r\\n\\f]",Zu=new RegExp("^"+Wo+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Wo+"+$","g");(function(){function r(){if(!!I){v.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",I.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Lt.appendChild(v).appendChild(I);var R=e.getComputedStyle(I);l=R.top!=="1%",b=o(R.marginLeft)===12,I.style.right="60%",f=o(R.right)===36,c=o(R.width)===36,I.style.position="absolute",d=o(I.offsetWidth/3)===12,Lt.removeChild(v),I=null}}function o(R){return Math.round(parseFloat(R))}var l,c,d,f,g,b,v=Q.createElement("div"),I=Q.createElement("div");!I.style||(I.style.backgroundClip="content-box",I.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=I.style.backgroundClip==="content-box",h.extend(M,{boxSizingReliable:function(){return r(),c},pixelBoxStyles:function(){return r(),f},pixelPosition:function(){return r(),l},reliableMarginLeft:function(){return r(),b},scrollboxSize:function(){return r(),d},reliableTrDimensions:function(){var R,D,N,k;return g==null&&(R=Q.createElement("table"),D=Q.createElement("tr"),N=Q.createElement("div"),R.style.cssText="position:absolute;left:-11111px;border-collapse:separate",D.style.cssText="border:1px solid",D.style.height="1px",N.style.height="9px",N.style.display="block",Lt.appendChild(R).appendChild(D).appendChild(N),k=e.getComputedStyle(D),g=parseInt(k.height,10)+parseInt(k.borderTopWidth,10)+parseInt(k.borderBottomWidth,10)===D.offsetHeight,Lt.removeChild(R)),g}}))})();function Fn(r,o,l){var c,d,f,g,b=Dr.test(o),v=r.style;return l=l||xi(r),l&&(g=l.getPropertyValue(o)||l[o],b&&(g=g.replace(Zu,"$1")),g===""&&!ln(r)&&(g=h.style(r,o)),!M.pixelBoxStyles()&&Pr.test(g)&&Ju.test(o)&&(c=v.width,d=v.minWidth,f=v.maxWidth,v.minWidth=v.maxWidth=v.width=g,g=l.width,v.width=c,v.minWidth=d,v.maxWidth=f)),g!==void 0?g+"":g}function jo(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var Bo=["Webkit","Moz","ms"],qo=Q.createElement("div").style,Vo={};function eh(r){for(var o=r[0].toUpperCase()+r.slice(1),l=Bo.length;l--;)if(r=Bo[l]+o,r in qo)return r}function Or(r){var o=h.cssProps[r]||Vo[r];return o||(r in qo?r:Vo[r]=eh(r)||r)}var th=/^(none|table(?!-c[ea]).+)/,nh={position:"absolute",visibility:"hidden",display:"block"},$o={letterSpacing:"0",fontWeight:"400"};function zo(r,o,l){var c=Mn.exec(o);return c?Math.max(0,c[2]-(l||0))+(c[3]||"px"):o}function Mr(r,o,l,c,d,f){var g=o==="width"?1:0,b=0,v=0;if(l===(c?"border":"content"))return 0;for(;g<4;g+=2)l==="margin"&&(v+=h.css(r,l+ut[g],!0,d)),c?(l==="content"&&(v-=h.css(r,"padding"+ut[g],!0,d)),l!=="margin"&&(v-=h.css(r,"border"+ut[g]+"Width",!0,d))):(v+=h.css(r,"padding"+ut[g],!0,d),l!=="padding"?v+=h.css(r,"border"+ut[g]+"Width",!0,d):b+=h.css(r,"border"+ut[g]+"Width",!0,d));return!c&&f>=0&&(v+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-f-v-b-.5))||0),v}function Go(r,o,l){var c=xi(r),d=!M.boxSizingReliable()||l,f=d&&h.css(r,"boxSizing",!1,c)==="border-box",g=f,b=Fn(r,o,c),v="offset"+o[0].toUpperCase()+o.slice(1);if(Pr.test(b)){if(!l)return b;b="auto"}return(!M.boxSizingReliable()&&f||!M.reliableTrDimensions()&&Be(r,"tr")||b==="auto"||!parseFloat(b)&&h.css(r,"display",!1,c)==="inline")&&r.getClientRects().length&&(f=h.css(r,"boxSizing",!1,c)==="border-box",g=v in r,g&&(b=r[v])),b=parseFloat(b)||0,b+Mr(r,o,l||(f?"border":"content"),g,c,b)+"px"}h.extend({cssHooks:{opacity:{get:function(r,o){if(o){var l=Fn(r,"opacity");return l===""?"1":l}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(r,o,l,c){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var d,f,g,b=nt(o),v=Dr.test(o),I=r.style;if(v||(o=Or(b)),g=h.cssHooks[o]||h.cssHooks[b],l!==void 0){if(f=typeof l,f==="string"&&(d=Mn.exec(l))&&d[1]&&(l=ko(r,o,d),f="number"),l==null||l!==l)return;f==="number"&&!v&&(l+=d&&d[3]||(h.cssNumber[b]?"":"px")),!M.clearCloneStyle&&l===""&&o.indexOf("background")===0&&(I[o]="inherit"),(!g||!("set"in g)||(l=g.set(r,l,c))!==void 0)&&(v?I.setProperty(o,l):I[o]=l)}else return g&&"get"in g&&(d=g.get(r,!1,c))!==void 0?d:I[o]}},css:function(r,o,l,c){var d,f,g,b=nt(o),v=Dr.test(o);return v||(o=Or(b)),g=h.cssHooks[o]||h.cssHooks[b],g&&"get"in g&&(d=g.get(r,!0,l)),d===void 0&&(d=Fn(r,o,c)),d==="normal"&&o in $o&&(d=$o[o]),l===""||l?(f=parseFloat(d),l===!0||isFinite(f)?f||0:d):d}}),h.each(["height","width"],function(r,o){h.cssHooks[o]={get:function(l,c,d){if(c)return th.test(h.css(l,"display"))&&(!l.getClientRects().length||!l.getBoundingClientRect().width)?Ho(l,nh,function(){return Go(l,o,d)}):Go(l,o,d)},set:function(l,c,d){var f,g=xi(l),b=!M.scrollboxSize()&&g.position==="absolute",v=b||d,I=v&&h.css(l,"boxSizing",!1,g)==="border-box",R=d?Mr(l,o,d,I,g):0;return I&&b&&(R-=Math.ceil(l["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(g[o])-Mr(l,o,"border",!1,g)-.5)),R&&(f=Mn.exec(c))&&(f[3]||"px")!=="px"&&(l.style[o]=c,c=h.css(l,o)),zo(l,c,R)}}}),h.cssHooks.marginLeft=jo(M.reliableMarginLeft,function(r,o){if(o)return(parseFloat(Fn(r,"marginLeft"))||r.getBoundingClientRect().left-Ho(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),h.each({margin:"",padding:"",border:"Width"},function(r,o){h.cssHooks[r+o]={expand:function(l){for(var c=0,d={},f=typeof l=="string"?l.split(" "):[l];c<4;c++)d[r+ut[c]+o]=f[c]||f[c-2]||f[0];return d}},r!=="margin"&&(h.cssHooks[r+o].set=zo)}),h.fn.extend({css:function(r,o){return ct(this,function(l,c,d){var f,g,b={},v=0;if(Array.isArray(c)){for(f=xi(l),g=c.length;v<g;v++)b[c[v]]=h.css(l,c[v],!1,f);return b}return d!==void 0?h.style(l,c,d):h.css(l,c)},r,o,arguments.length>1)}});function Pe(r,o,l,c,d){return new Pe.prototype.init(r,o,l,c,d)}h.Tween=Pe,Pe.prototype={constructor:Pe,init:function(r,o,l,c,d,f){this.elem=r,this.prop=l,this.easing=d||h.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=c,this.unit=f||(h.cssNumber[l]?"":"px")},cur:function(){var r=Pe.propHooks[this.prop];return r&&r.get?r.get(this):Pe.propHooks._default.get(this)},run:function(r){var o,l=Pe.propHooks[this.prop];return this.options.duration?this.pos=o=h.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),l&&l.set?l.set(this):Pe.propHooks._default.set(this),this}},Pe.prototype.init.prototype=Pe.prototype,Pe.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=h.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){h.fx.step[r.prop]?h.fx.step[r.prop](r):r.elem.nodeType===1&&(h.cssHooks[r.prop]||r.elem.style[Or(r.prop)]!=null)?h.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},Pe.propHooks.scrollTop=Pe.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},h.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},h.fx=Pe.prototype.init,h.fx.step={};var fn,ki,ih=/^(?:toggle|show|hide)$/,rh=/queueHooks$/;function Lr(){ki&&(Q.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Lr):e.setTimeout(Lr,h.fx.interval),h.fx.tick())}function Ko(){return e.setTimeout(function(){fn=void 0}),fn=Date.now()}function Ai(r,o){var l,c=0,d={height:r};for(o=o?1:0;c<4;c+=2-o)l=ut[c],d["margin"+l]=d["padding"+l]=r;return o&&(d.opacity=d.width=r),d}function Yo(r,o,l){for(var c,d=(ze.tweeners[o]||[]).concat(ze.tweeners["*"]),f=0,g=d.length;f<g;f++)if(c=d[f].call(l,o,r))return c}function sh(r,o,l){var c,d,f,g,b,v,I,R,D="width"in o||"height"in o,N=this,k={},B=r.style,J=r.nodeType&&Ni(r),q=$.get(r,"fxshow");l.queue||(g=h._queueHooks(r,"fx"),g.unqueued==null&&(g.unqueued=0,b=g.empty.fire,g.empty.fire=function(){g.unqueued||b()}),g.unqueued++,N.always(function(){N.always(function(){g.unqueued--,h.queue(r,"fx").length||g.empty.fire()})}));for(c in o)if(d=o[c],ih.test(d)){if(delete o[c],f=f||d==="toggle",d===(J?"hide":"show"))if(d==="show"&&q&&q[c]!==void 0)J=!0;else continue;k[c]=q&&q[c]||h.style(r,c)}if(v=!h.isEmptyObject(o),!(!v&&h.isEmptyObject(k))){D&&r.nodeType===1&&(l.overflow=[B.overflow,B.overflowX,B.overflowY],I=q&&q.display,I==null&&(I=$.get(r,"display")),R=h.css(r,"display"),R==="none"&&(I?R=I:(cn([r],!0),I=r.style.display||I,R=h.css(r,"display"),cn([r]))),(R==="inline"||R==="inline-block"&&I!=null)&&h.css(r,"float")==="none"&&(v||(N.done(function(){B.display=I}),I==null&&(R=B.display,I=R==="none"?"":R)),B.display="inline-block")),l.overflow&&(B.overflow="hidden",N.always(function(){B.overflow=l.overflow[0],B.overflowX=l.overflow[1],B.overflowY=l.overflow[2]})),v=!1;for(c in k)v||(q?"hidden"in q&&(J=q.hidden):q=$.access(r,"fxshow",{display:I}),f&&(q.hidden=!J),J&&cn([r],!0),N.done(function(){J||cn([r]),$.remove(r,"fxshow");for(c in k)h.style(r,c,k[c])})),v=Yo(J?q[c]:0,c,N),c in q||(q[c]=v.start,J&&(v.end=v.start,v.start=0))}}function oh(r,o){var l,c,d,f,g;for(l in r)if(c=nt(l),d=o[c],f=r[l],Array.isArray(f)&&(d=f[1],f=r[l]=f[0]),l!==c&&(r[c]=f,delete r[l]),g=h.cssHooks[c],g&&"expand"in g){f=g.expand(f),delete r[c];for(l in f)l in r||(r[l]=f[l],o[l]=d)}else o[c]=d}function ze(r,o,l){var c,d,f=0,g=ze.prefilters.length,b=h.Deferred().always(function(){delete v.elem}),v=function(){if(d)return!1;for(var D=fn||Ko(),N=Math.max(0,I.startTime+I.duration-D),k=N/I.duration||0,B=1-k,J=0,q=I.tweens.length;J<q;J++)I.tweens[J].run(B);return b.notifyWith(r,[I,B,N]),B<1&&q?N:(q||b.notifyWith(r,[I,1,0]),b.resolveWith(r,[I]),!1)},I=b.promise({elem:r,props:h.extend({},o),opts:h.extend(!0,{specialEasing:{},easing:h.easing._default},l),originalProperties:o,originalOptions:l,startTime:fn||Ko(),duration:l.duration,tweens:[],createTween:function(D,N){var k=h.Tween(r,I.opts,D,N,I.opts.specialEasing[D]||I.opts.easing);return I.tweens.push(k),k},stop:function(D){var N=0,k=D?I.tweens.length:0;if(d)return this;for(d=!0;N<k;N++)I.tweens[N].run(1);return D?(b.notifyWith(r,[I,1,0]),b.resolveWith(r,[I,D])):b.rejectWith(r,[I,D]),this}}),R=I.props;for(oh(R,I.opts.specialEasing);f<g;f++)if(c=ze.prefilters[f].call(I,r,R,I.opts),c)return j(c.stop)&&(h._queueHooks(I.elem,I.opts.queue).stop=c.stop.bind(c)),c;return h.map(R,Yo,I),j(I.opts.start)&&I.opts.start.call(r,I),I.progress(I.opts.progress).done(I.opts.done,I.opts.complete).fail(I.opts.fail).always(I.opts.always),h.fx.timer(h.extend(v,{elem:r,anim:I,queue:I.opts.queue})),I}h.Animation=h.extend(ze,{tweeners:{"*":[function(r,o){var l=this.createTween(r,o);return ko(l.elem,r,Mn.exec(o),l),l}]},tweener:function(r,o){j(r)?(o=r,r=["*"]):r=r.match(tt);for(var l,c=0,d=r.length;c<d;c++)l=r[c],ze.tweeners[l]=ze.tweeners[l]||[],ze.tweeners[l].unshift(o)},prefilters:[sh],prefilter:function(r,o){o?ze.prefilters.unshift(r):ze.prefilters.push(r)}}),h.speed=function(r,o,l){var c=r&&typeof r=="object"?h.extend({},r):{complete:l||!l&&o||j(r)&&r,duration:r,easing:l&&o||o&&!j(o)&&o};return h.fx.off?c.duration=0:typeof c.duration!="number"&&(c.duration in h.fx.speeds?c.duration=h.fx.speeds[c.duration]:c.duration=h.fx.speeds._default),(c.queue==null||c.queue===!0)&&(c.queue="fx"),c.old=c.complete,c.complete=function(){j(c.old)&&c.old.call(this),c.queue&&h.dequeue(this,c.queue)},c},h.fn.extend({fadeTo:function(r,o,l,c){return this.filter(Ni).css("opacity",0).show().end().animate({opacity:o},r,l,c)},animate:function(r,o,l,c){var d=h.isEmptyObject(r),f=h.speed(o,l,c),g=function(){var b=ze(this,h.extend({},r),f);(d||$.get(this,"finish"))&&b.stop(!0)};return g.finish=g,d||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(r,o,l){var c=function(d){var f=d.stop;delete d.stop,f(l)};return typeof r!="string"&&(l=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var d=!0,f=r!=null&&r+"queueHooks",g=h.timers,b=$.get(this);if(f)b[f]&&b[f].stop&&c(b[f]);else for(f in b)b[f]&&b[f].stop&&rh.test(f)&&c(b[f]);for(f=g.length;f--;)g[f].elem===this&&(r==null||g[f].queue===r)&&(g[f].anim.stop(l),d=!1,g.splice(f,1));(d||!l)&&h.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,l=$.get(this),c=l[r+"queue"],d=l[r+"queueHooks"],f=h.timers,g=c?c.length:0;for(l.finish=!0,h.queue(this,r,[]),d&&d.stop&&d.stop.call(this,!0),o=f.length;o--;)f[o].elem===this&&f[o].queue===r&&(f[o].anim.stop(!0),f.splice(o,1));for(o=0;o<g;o++)c[o]&&c[o].finish&&c[o].finish.call(this);delete l.finish})}}),h.each(["toggle","show","hide"],function(r,o){var l=h.fn[o];h.fn[o]=function(c,d,f){return c==null||typeof c=="boolean"?l.apply(this,arguments):this.animate(Ai(o,!0),c,d,f)}}),h.each({slideDown:Ai("show"),slideUp:Ai("hide"),slideToggle:Ai("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){h.fn[r]=function(l,c,d){return this.animate(o,l,c,d)}}),h.timers=[],h.fx.tick=function(){var r,o=0,l=h.timers;for(fn=Date.now();o<l.length;o++)r=l[o],!r()&&l[o]===r&&l.splice(o--,1);l.length||h.fx.stop(),fn=void 0},h.fx.timer=function(r){h.timers.push(r),h.fx.start()},h.fx.interval=13,h.fx.start=function(){ki||(ki=!0,Lr())},h.fx.stop=function(){ki=null},h.fx.speeds={slow:600,fast:200,_default:400},h.fn.delay=function(r,o){return r=h.fx&&h.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(l,c){var d=e.setTimeout(l,r);c.stop=function(){e.clearTimeout(d)}})},function(){var r=Q.createElement("input"),o=Q.createElement("select"),l=o.appendChild(Q.createElement("option"));r.type="checkbox",M.checkOn=r.value!=="",M.optSelected=l.selected,r=Q.createElement("input"),r.value="t",r.type="radio",M.radioValue=r.value==="t"}();var Qo,Un=h.expr.attrHandle;h.fn.extend({attr:function(r,o){return ct(this,h.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){h.removeAttr(this,r)})}}),h.extend({attr:function(r,o,l){var c,d,f=r.nodeType;if(!(f===3||f===8||f===2)){if(typeof r.getAttribute=="undefined")return h.prop(r,o,l);if((f!==1||!h.isXMLDoc(r))&&(d=h.attrHooks[o.toLowerCase()]||(h.expr.match.bool.test(o)?Qo:void 0)),l!==void 0){if(l===null){h.removeAttr(r,o);return}return d&&"set"in d&&(c=d.set(r,l,o))!==void 0?c:(r.setAttribute(o,l+""),l)}return d&&"get"in d&&(c=d.get(r,o))!==null?c:(c=h.find.attr(r,o),c==null?void 0:c)}},attrHooks:{type:{set:function(r,o){if(!M.radioValue&&o==="radio"&&Be(r,"input")){var l=r.value;return r.setAttribute("type",o),l&&(r.value=l),o}}}},removeAttr:function(r,o){var l,c=0,d=o&&o.match(tt);if(d&&r.nodeType===1)for(;l=d[c++];)r.removeAttribute(l)}}),Qo={set:function(r,o,l){return o===!1?h.removeAttr(r,l):r.setAttribute(l,l),l}},h.each(h.expr.match.bool.source.match(/\w+/g),function(r,o){var l=Un[o]||h.find.attr;Un[o]=function(c,d,f){var g,b,v=d.toLowerCase();return f||(b=Un[v],Un[v]=g,g=l(c,d,f)!=null?v:null,Un[v]=b),g}});var ah=/^(?:input|select|textarea|button)$/i,lh=/^(?:a|area)$/i;h.fn.extend({prop:function(r,o){return ct(this,h.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[h.propFix[r]||r]})}}),h.extend({prop:function(r,o,l){var c,d,f=r.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!h.isXMLDoc(r))&&(o=h.propFix[o]||o,d=h.propHooks[o]),l!==void 0?d&&"set"in d&&(c=d.set(r,l,o))!==void 0?c:r[o]=l:d&&"get"in d&&(c=d.get(r,o))!==null?c:r[o]},propHooks:{tabIndex:{get:function(r){var o=h.find.attr(r,"tabindex");return o?parseInt(o,10):ah.test(r.nodeName)||lh.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(h.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),h.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){h.propFix[this.toLowerCase()]=this});function Ft(r){var o=r.match(tt)||[];return o.join(" ")}function Ut(r){return r.getAttribute&&r.getAttribute("class")||""}function Fr(r){return Array.isArray(r)?r:typeof r=="string"?r.match(tt)||[]:[]}h.fn.extend({addClass:function(r){var o,l,c,d,f,g;return j(r)?this.each(function(b){h(this).addClass(r.call(this,b,Ut(this)))}):(o=Fr(r),o.length?this.each(function(){if(c=Ut(this),l=this.nodeType===1&&" "+Ft(c)+" ",l){for(f=0;f<o.length;f++)d=o[f],l.indexOf(" "+d+" ")<0&&(l+=d+" ");g=Ft(l),c!==g&&this.setAttribute("class",g)}}):this)},removeClass:function(r){var o,l,c,d,f,g;return j(r)?this.each(function(b){h(this).removeClass(r.call(this,b,Ut(this)))}):arguments.length?(o=Fr(r),o.length?this.each(function(){if(c=Ut(this),l=this.nodeType===1&&" "+Ft(c)+" ",l){for(f=0;f<o.length;f++)for(d=o[f];l.indexOf(" "+d+" ")>-1;)l=l.replace(" "+d+" "," ");g=Ft(l),c!==g&&this.setAttribute("class",g)}}):this):this.attr("class","")},toggleClass:function(r,o){var l,c,d,f,g=typeof r,b=g==="string"||Array.isArray(r);return j(r)?this.each(function(v){h(this).toggleClass(r.call(this,v,Ut(this),o),o)}):typeof o=="boolean"&&b?o?this.addClass(r):this.removeClass(r):(l=Fr(r),this.each(function(){if(b)for(f=h(this),d=0;d<l.length;d++)c=l[d],f.hasClass(c)?f.removeClass(c):f.addClass(c);else(r===void 0||g==="boolean")&&(c=Ut(this),c&&$.set(this,"__className__",c),this.setAttribute&&this.setAttribute("class",c||r===!1?"":$.get(this,"__className__")||""))}))},hasClass:function(r){var o,l,c=0;for(o=" "+r+" ";l=this[c++];)if(l.nodeType===1&&(" "+Ft(Ut(l))+" ").indexOf(o)>-1)return!0;return!1}});var ch=/\r/g;h.fn.extend({val:function(r){var o,l,c,d=this[0];return arguments.length?(c=j(r),this.each(function(f){var g;this.nodeType===1&&(c?g=r.call(this,f,h(this).val()):g=r,g==null?g="":typeof g=="number"?g+="":Array.isArray(g)&&(g=h.map(g,function(b){return b==null?"":b+""})),o=h.valHooks[this.type]||h.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,g,"value")===void 0)&&(this.value=g))})):d?(o=h.valHooks[d.type]||h.valHooks[d.nodeName.toLowerCase()],o&&"get"in o&&(l=o.get(d,"value"))!==void 0?l:(l=d.value,typeof l=="string"?l.replace(ch,""):l==null?"":l)):void 0}}),h.extend({valHooks:{option:{get:function(r){var o=h.find.attr(r,"value");return o!=null?o:Ft(h.text(r))}},select:{get:function(r){var o,l,c,d=r.options,f=r.selectedIndex,g=r.type==="select-one",b=g?null:[],v=g?f+1:d.length;for(f<0?c=v:c=g?f:0;c<v;c++)if(l=d[c],(l.selected||c===f)&&!l.disabled&&(!l.parentNode.disabled||!Be(l.parentNode,"optgroup"))){if(o=h(l).val(),g)return o;b.push(o)}return b},set:function(r,o){for(var l,c,d=r.options,f=h.makeArray(o),g=d.length;g--;)c=d[g],(c.selected=h.inArray(h.valHooks.option.get(c),f)>-1)&&(l=!0);return l||(r.selectedIndex=-1),f}}}}),h.each(["radio","checkbox"],function(){h.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=h.inArray(h(r).val(),o)>-1}},M.checkOn||(h.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})}),M.focusin="onfocusin"in e;var Xo=/^(?:focusinfocus|focusoutblur)$/,Jo=function(r){r.stopPropagation()};h.extend(h.event,{trigger:function(r,o,l,c){var d,f,g,b,v,I,R,D,N=[l||Q],k=w.call(r,"type")?r.type:r,B=w.call(r,"namespace")?r.namespace.split("."):[];if(f=D=g=l=l||Q,!(l.nodeType===3||l.nodeType===8)&&!Xo.test(k+h.event.triggered)&&(k.indexOf(".")>-1&&(B=k.split("."),k=B.shift(),B.sort()),v=k.indexOf(":")<0&&"on"+k,r=r[h.expando]?r:new h.Event(k,typeof r=="object"&&r),r.isTrigger=c?2:3,r.namespace=B.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+B.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=l),o=o==null?[r]:h.makeArray(o,[r]),R=h.event.special[k]||{},!(!c&&R.trigger&&R.trigger.apply(l,o)===!1))){if(!c&&!R.noBubble&&!le(l)){for(b=R.delegateType||k,Xo.test(b+k)||(f=f.parentNode);f;f=f.parentNode)N.push(f),g=f;g===(l.ownerDocument||Q)&&N.push(g.defaultView||g.parentWindow||e)}for(d=0;(f=N[d++])&&!r.isPropagationStopped();)D=f,r.type=d>1?b:R.bindType||k,I=($.get(f,"events")||Object.create(null))[r.type]&&$.get(f,"handle"),I&&I.apply(f,o),I=v&&f[v],I&&I.apply&&Dn(f)&&(r.result=I.apply(f,o),r.result===!1&&r.preventDefault());return r.type=k,!c&&!r.isDefaultPrevented()&&(!R._default||R._default.apply(N.pop(),o)===!1)&&Dn(l)&&v&&j(l[k])&&!le(l)&&(g=l[v],g&&(l[v]=null),h.event.triggered=k,r.isPropagationStopped()&&D.addEventListener(k,Jo),l[k](),r.isPropagationStopped()&&D.removeEventListener(k,Jo),h.event.triggered=void 0,g&&(l[v]=g)),r.result}},simulate:function(r,o,l){var c=h.extend(new h.Event,l,{type:r,isSimulated:!0});h.event.trigger(c,null,o)}}),h.fn.extend({trigger:function(r,o){return this.each(function(){h.event.trigger(r,o,this)})},triggerHandler:function(r,o){var l=this[0];if(l)return h.event.trigger(r,o,l,!0)}}),M.focusin||h.each({focus:"focusin",blur:"focusout"},function(r,o){var l=function(c){h.event.simulate(o,c.target,h.event.fix(c))};h.event.special[o]={setup:function(){var c=this.ownerDocument||this.document||this,d=$.access(c,o);d||c.addEventListener(r,l,!0),$.access(c,o,(d||0)+1)},teardown:function(){var c=this.ownerDocument||this.document||this,d=$.access(c,o)-1;d?$.access(c,o,d):(c.removeEventListener(r,l,!0),$.remove(c,o))}}});var Hn=e.location,Zo={guid:Date.now()},Ur=/\?/;h.parseXML=function(r){var o,l;if(!r||typeof r!="string")return null;try{o=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return l=o&&o.getElementsByTagName("parsererror")[0],(!o||l)&&h.error("Invalid XML: "+(l?h.map(l.childNodes,function(c){return c.textContent}).join(`
`):r)),o};var uh=/\[\]$/,ea=/\r?\n/g,hh=/^(?:submit|button|image|reset|file)$/i,dh=/^(?:input|select|textarea|keygen)/i;function Hr(r,o,l,c){var d;if(Array.isArray(o))h.each(o,function(f,g){l||uh.test(r)?c(r,g):Hr(r+"["+(typeof g=="object"&&g!=null?f:"")+"]",g,l,c)});else if(!l&&$e(o)==="object")for(d in o)Hr(r+"["+d+"]",o[d],l,c);else c(r,o)}h.param=function(r,o){var l,c=[],d=function(f,g){var b=j(g)?g():g;c[c.length]=encodeURIComponent(f)+"="+encodeURIComponent(b==null?"":b)};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!h.isPlainObject(r))h.each(r,function(){d(this.name,this.value)});else for(l in r)Hr(l,r[l],o,d);return c.join("&")},h.fn.extend({serialize:function(){return h.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=h.prop(this,"elements");return r?h.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!h(this).is(":disabled")&&dh.test(this.nodeName)&&!hh.test(r)&&(this.checked||!Ln.test(r))}).map(function(r,o){var l=h(this).val();return l==null?null:Array.isArray(l)?h.map(l,function(c){return{name:o.name,value:c.replace(ea,`\r
`)}}):{name:o.name,value:l.replace(ea,`\r
`)}}).get()}});var fh=/%20/g,ph=/#.*$/,gh=/([?&])_=[^&]*/,_h=/^(.*?):[ \t]*([^\r\n]*)$/mg,mh=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,yh=/^(?:GET|HEAD)$/,vh=/^\/\//,ta={},Wr={},na="*/".concat("*"),jr=Q.createElement("a");jr.href=Hn.href;function ia(r){return function(o,l){typeof o!="string"&&(l=o,o="*");var c,d=0,f=o.toLowerCase().match(tt)||[];if(j(l))for(;c=f[d++];)c[0]==="+"?(c=c.slice(1)||"*",(r[c]=r[c]||[]).unshift(l)):(r[c]=r[c]||[]).push(l)}}function ra(r,o,l,c){var d={},f=r===Wr;function g(b){var v;return d[b]=!0,h.each(r[b]||[],function(I,R){var D=R(o,l,c);if(typeof D=="string"&&!f&&!d[D])return o.dataTypes.unshift(D),g(D),!1;if(f)return!(v=D)}),v}return g(o.dataTypes[0])||!d["*"]&&g("*")}function Br(r,o){var l,c,d=h.ajaxSettings.flatOptions||{};for(l in o)o[l]!==void 0&&((d[l]?r:c||(c={}))[l]=o[l]);return c&&h.extend(!0,r,c),r}function Ch(r,o,l){for(var c,d,f,g,b=r.contents,v=r.dataTypes;v[0]==="*";)v.shift(),c===void 0&&(c=r.mimeType||o.getResponseHeader("Content-Type"));if(c){for(d in b)if(b[d]&&b[d].test(c)){v.unshift(d);break}}if(v[0]in l)f=v[0];else{for(d in l){if(!v[0]||r.converters[d+" "+v[0]]){f=d;break}g||(g=d)}f=f||g}if(f)return f!==v[0]&&v.unshift(f),l[f]}function bh(r,o,l,c){var d,f,g,b,v,I={},R=r.dataTypes.slice();if(R[1])for(g in r.converters)I[g.toLowerCase()]=r.converters[g];for(f=R.shift();f;)if(r.responseFields[f]&&(l[r.responseFields[f]]=o),!v&&c&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),v=f,f=R.shift(),f){if(f==="*")f=v;else if(v!=="*"&&v!==f){if(g=I[v+" "+f]||I["* "+f],!g){for(d in I)if(b=d.split(" "),b[1]===f&&(g=I[v+" "+b[0]]||I["* "+b[0]],g)){g===!0?g=I[d]:I[d]!==!0&&(f=b[0],R.unshift(b[1]));break}}if(g!==!0)if(g&&r.throws)o=g(o);else try{o=g(o)}catch(D){return{state:"parsererror",error:g?D:"No conversion from "+v+" to "+f}}}}return{state:"success",data:o}}h.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Hn.href,type:"GET",isLocal:mh.test(Hn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":na,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":h.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?Br(Br(r,h.ajaxSettings),o):Br(h.ajaxSettings,r)},ajaxPrefilter:ia(ta),ajaxTransport:ia(Wr),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var l,c,d,f,g,b,v,I,R,D,N=h.ajaxSetup({},o),k=N.context||N,B=N.context&&(k.nodeType||k.jquery)?h(k):h.event,J=h.Deferred(),q=h.Callbacks("once memory"),ve=N.statusCode||{},ye={},Ue={},ae="canceled",X={readyState:0,getResponseHeader:function(re){var _e;if(v){if(!f)for(f={};_e=_h.exec(d);)f[_e[1].toLowerCase()+" "]=(f[_e[1].toLowerCase()+" "]||[]).concat(_e[2]);_e=f[re.toLowerCase()+" "]}return _e==null?null:_e.join(", ")},getAllResponseHeaders:function(){return v?d:null},setRequestHeader:function(re,_e){return v==null&&(re=Ue[re.toLowerCase()]=Ue[re.toLowerCase()]||re,ye[re]=_e),this},overrideMimeType:function(re){return v==null&&(N.mimeType=re),this},statusCode:function(re){var _e;if(re)if(v)X.always(re[X.status]);else for(_e in re)ve[_e]=[ve[_e],re[_e]];return this},abort:function(re){var _e=re||ae;return l&&l.abort(_e),De(0,_e),this}};if(J.promise(X),N.url=((r||N.url||Hn.href)+"").replace(vh,Hn.protocol+"//"),N.type=o.method||o.type||N.method||N.type,N.dataTypes=(N.dataType||"*").toLowerCase().match(tt)||[""],N.crossDomain==null){b=Q.createElement("a");try{b.href=N.url,b.href=b.href,N.crossDomain=jr.protocol+"//"+jr.host!=b.protocol+"//"+b.host}catch{N.crossDomain=!0}}if(N.data&&N.processData&&typeof N.data!="string"&&(N.data=h.param(N.data,N.traditional)),ra(ta,N,o,X),v)return X;I=h.event&&N.global,I&&h.active++===0&&h.event.trigger("ajaxStart"),N.type=N.type.toUpperCase(),N.hasContent=!yh.test(N.type),c=N.url.replace(ph,""),N.hasContent?N.data&&N.processData&&(N.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(N.data=N.data.replace(fh,"+")):(D=N.url.slice(c.length),N.data&&(N.processData||typeof N.data=="string")&&(c+=(Ur.test(c)?"&":"?")+N.data,delete N.data),N.cache===!1&&(c=c.replace(gh,"$1"),D=(Ur.test(c)?"&":"?")+"_="+Zo.guid+++D),N.url=c+D),N.ifModified&&(h.lastModified[c]&&X.setRequestHeader("If-Modified-Since",h.lastModified[c]),h.etag[c]&&X.setRequestHeader("If-None-Match",h.etag[c])),(N.data&&N.hasContent&&N.contentType!==!1||o.contentType)&&X.setRequestHeader("Content-Type",N.contentType),X.setRequestHeader("Accept",N.dataTypes[0]&&N.accepts[N.dataTypes[0]]?N.accepts[N.dataTypes[0]]+(N.dataTypes[0]!=="*"?", "+na+"; q=0.01":""):N.accepts["*"]);for(R in N.headers)X.setRequestHeader(R,N.headers[R]);if(N.beforeSend&&(N.beforeSend.call(k,X,N)===!1||v))return X.abort();if(ae="abort",q.add(N.complete),X.done(N.success),X.fail(N.error),l=ra(Wr,N,o,X),!l)De(-1,"No Transport");else{if(X.readyState=1,I&&B.trigger("ajaxSend",[X,N]),v)return X;N.async&&N.timeout>0&&(g=e.setTimeout(function(){X.abort("timeout")},N.timeout));try{v=!1,l.send(ye,De)}catch(re){if(v)throw re;De(-1,re)}}function De(re,_e,jn,Pi){var He,Ht,Wt,Oe,Et,Ve=_e;v||(v=!0,g&&e.clearTimeout(g),l=void 0,d=Pi||"",X.readyState=re>0?4:0,He=re>=200&&re<300||re===304,jn&&(Oe=Ch(N,X,jn)),!He&&h.inArray("script",N.dataTypes)>-1&&h.inArray("json",N.dataTypes)<0&&(N.converters["text script"]=function(){}),Oe=bh(N,Oe,X,He),He?(N.ifModified&&(Et=X.getResponseHeader("Last-Modified"),Et&&(h.lastModified[c]=Et),Et=X.getResponseHeader("etag"),Et&&(h.etag[c]=Et)),re===204||N.type==="HEAD"?Ve="nocontent":re===304?Ve="notmodified":(Ve=Oe.state,Ht=Oe.data,Wt=Oe.error,He=!Wt)):(Wt=Ve,(re||!Ve)&&(Ve="error",re<0&&(re=0))),X.status=re,X.statusText=(_e||Ve)+"",He?J.resolveWith(k,[Ht,Ve,X]):J.rejectWith(k,[X,Ve,Wt]),X.statusCode(ve),ve=void 0,I&&B.trigger(He?"ajaxSuccess":"ajaxError",[X,N,He?Ht:Wt]),q.fireWith(k,[X,Ve]),I&&(B.trigger("ajaxComplete",[X,N]),--h.active||h.event.trigger("ajaxStop")))}return X},getJSON:function(r,o,l){return h.get(r,o,l,"json")},getScript:function(r,o){return h.get(r,void 0,o,"script")}}),h.each(["get","post"],function(r,o){h[o]=function(l,c,d,f){return j(c)&&(f=f||d,d=c,c=void 0),h.ajax(h.extend({url:l,type:o,dataType:f,data:c,success:d},h.isPlainObject(l)&&l))}}),h.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),h._evalUrl=function(r,o,l){return h.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(c){h.globalEval(c,o,l)}})},h.fn.extend({wrapAll:function(r){var o;return this[0]&&(j(r)&&(r=r.call(this[0])),o=h(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var l=this;l.firstElementChild;)l=l.firstElementChild;return l}).append(this)),this},wrapInner:function(r){return j(r)?this.each(function(o){h(this).wrapInner(r.call(this,o))}):this.each(function(){var o=h(this),l=o.contents();l.length?l.wrapAll(r):o.append(r)})},wrap:function(r){var o=j(r);return this.each(function(l){h(this).wrapAll(o?r.call(this,l):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){h(this).replaceWith(this.childNodes)}),this}}),h.expr.pseudos.hidden=function(r){return!h.expr.pseudos.visible(r)},h.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},h.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Eh={0:200,1223:204},Wn=h.ajaxSettings.xhr();M.cors=!!Wn&&"withCredentials"in Wn,M.ajax=Wn=!!Wn,h.ajaxTransport(function(r){var o,l;if(M.cors||Wn&&!r.crossDomain)return{send:function(c,d){var f,g=r.xhr();if(g.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(f in r.xhrFields)g[f]=r.xhrFields[f];r.mimeType&&g.overrideMimeType&&g.overrideMimeType(r.mimeType),!r.crossDomain&&!c["X-Requested-With"]&&(c["X-Requested-With"]="XMLHttpRequest");for(f in c)g.setRequestHeader(f,c[f]);o=function(b){return function(){o&&(o=l=g.onload=g.onerror=g.onabort=g.ontimeout=g.onreadystatechange=null,b==="abort"?g.abort():b==="error"?typeof g.status!="number"?d(0,"error"):d(g.status,g.statusText):d(Eh[g.status]||g.status,g.statusText,(g.responseType||"text")!=="text"||typeof g.responseText!="string"?{binary:g.response}:{text:g.responseText},g.getAllResponseHeaders()))}},g.onload=o(),l=g.onerror=g.ontimeout=o("error"),g.onabort!==void 0?g.onabort=l:g.onreadystatechange=function(){g.readyState===4&&e.setTimeout(function(){o&&l()})},o=o("abort");try{g.send(r.hasContent&&r.data||null)}catch(b){if(o)throw b}},abort:function(){o&&o()}}}),h.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),h.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return h.globalEval(r),r}}}),h.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),h.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,l;return{send:function(c,d){o=h("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",l=function(f){o.remove(),l=null,f&&d(f.type==="error"?404:200,f.type)}),Q.head.appendChild(o[0])},abort:function(){l&&l()}}}});var sa=[],qr=/(=)\?(?=&|$)|\?\?/;h.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=sa.pop()||h.expando+"_"+Zo.guid++;return this[r]=!0,r}}),h.ajaxPrefilter("json jsonp",function(r,o,l){var c,d,f,g=r.jsonp!==!1&&(qr.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&qr.test(r.data)&&"data");if(g||r.dataTypes[0]==="jsonp")return c=r.jsonpCallback=j(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,g?r[g]=r[g].replace(qr,"$1"+c):r.jsonp!==!1&&(r.url+=(Ur.test(r.url)?"&":"?")+r.jsonp+"="+c),r.converters["script json"]=function(){return f||h.error(c+" was not called"),f[0]},r.dataTypes[0]="json",d=e[c],e[c]=function(){f=arguments},l.always(function(){d===void 0?h(e).removeProp(c):e[c]=d,r[c]&&(r.jsonpCallback=o.jsonpCallback,sa.push(c)),f&&j(d)&&d(f[0]),f=d=void 0}),"script"}),M.createHTMLDocument=function(){var r=Q.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),h.parseHTML=function(r,o,l){if(typeof r!="string")return[];typeof o=="boolean"&&(l=o,o=!1);var c,d,f;return o||(M.createHTMLDocument?(o=Q.implementation.createHTMLDocument(""),c=o.createElement("base"),c.href=Q.location.href,o.head.appendChild(c)):o=Q),d=To.exec(r),f=!l&&[],d?[o.createElement(d[1])]:(d=Oo([r],o,f),f&&f.length&&h(f).remove(),h.merge([],d.childNodes))},h.fn.load=function(r,o,l){var c,d,f,g=this,b=r.indexOf(" ");return b>-1&&(c=Ft(r.slice(b)),r=r.slice(0,b)),j(o)?(l=o,o=void 0):o&&typeof o=="object"&&(d="POST"),g.length>0&&h.ajax({url:r,type:d||"GET",dataType:"html",data:o}).done(function(v){f=arguments,g.html(c?h("<div>").append(h.parseHTML(v)).find(c):v)}).always(l&&function(v,I){g.each(function(){l.apply(this,f||[v.responseText,I,v])})}),this},h.expr.pseudos.animated=function(r){return h.grep(h.timers,function(o){return r===o.elem}).length},h.offset={setOffset:function(r,o,l){var c,d,f,g,b,v,I,R=h.css(r,"position"),D=h(r),N={};R==="static"&&(r.style.position="relative"),b=D.offset(),f=h.css(r,"top"),v=h.css(r,"left"),I=(R==="absolute"||R==="fixed")&&(f+v).indexOf("auto")>-1,I?(c=D.position(),g=c.top,d=c.left):(g=parseFloat(f)||0,d=parseFloat(v)||0),j(o)&&(o=o.call(r,l,h.extend({},b))),o.top!=null&&(N.top=o.top-b.top+g),o.left!=null&&(N.left=o.left-b.left+d),"using"in o?o.using.call(r,N):D.css(N)}},h.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(d){h.offset.setOffset(this,r,d)});var o,l,c=this[0];if(!!c)return c.getClientRects().length?(o=c.getBoundingClientRect(),l=c.ownerDocument.defaultView,{top:o.top+l.pageYOffset,left:o.left+l.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var r,o,l,c=this[0],d={top:0,left:0};if(h.css(c,"position")==="fixed")o=c.getBoundingClientRect();else{for(o=this.offset(),l=c.ownerDocument,r=c.offsetParent||l.documentElement;r&&(r===l.body||r===l.documentElement)&&h.css(r,"position")==="static";)r=r.parentNode;r&&r!==c&&r.nodeType===1&&(d=h(r).offset(),d.top+=h.css(r,"borderTopWidth",!0),d.left+=h.css(r,"borderLeftWidth",!0))}return{top:o.top-d.top-h.css(c,"marginTop",!0),left:o.left-d.left-h.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&h.css(r,"position")==="static";)r=r.offsetParent;return r||Lt})}}),h.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var l=o==="pageYOffset";h.fn[r]=function(c){return ct(this,function(d,f,g){var b;if(le(d)?b=d:d.nodeType===9&&(b=d.defaultView),g===void 0)return b?b[o]:d[f];b?b.scrollTo(l?b.pageXOffset:g,l?g:b.pageYOffset):d[f]=g},r,c,arguments.length)}}),h.each(["top","left"],function(r,o){h.cssHooks[o]=jo(M.pixelPosition,function(l,c){if(c)return c=Fn(l,o),Pr.test(c)?h(l).position()[o]+"px":c})}),h.each({Height:"height",Width:"width"},function(r,o){h.each({padding:"inner"+r,content:o,"":"outer"+r},function(l,c){h.fn[c]=function(d,f){var g=arguments.length&&(l||typeof d!="boolean"),b=l||(d===!0||f===!0?"margin":"border");return ct(this,function(v,I,R){var D;return le(v)?c.indexOf("outer")===0?v["inner"+r]:v.document.documentElement["client"+r]:v.nodeType===9?(D=v.documentElement,Math.max(v.body["scroll"+r],D["scroll"+r],v.body["offset"+r],D["offset"+r],D["client"+r])):R===void 0?h.css(v,I,b):h.style(v,I,R,b)},o,g?d:void 0,g)}})}),h.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){h.fn[o]=function(l){return this.on(o,l)}}),h.fn.extend({bind:function(r,o,l){return this.on(r,null,o,l)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,l,c){return this.on(o,r,l,c)},undelegate:function(r,o,l){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",l)},hover:function(r,o){return this.mouseenter(r).mouseleave(o||r)}}),h.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){h.fn[o]=function(l,c){return arguments.length>0?this.on(o,null,l,c):this.trigger(o)}});var wh=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;h.proxy=function(r,o){var l,c,d;if(typeof o=="string"&&(l=r[o],o=r,r=l),!!j(r))return c=a.call(arguments,2),d=function(){return r.apply(o||this,c.concat(a.call(arguments)))},d.guid=r.guid=r.guid||h.guid++,d},h.holdReady=function(r){r?h.readyWait++:h.ready(!0)},h.isArray=Array.isArray,h.parseJSON=JSON.parse,h.nodeName=Be,h.isFunction=j,h.isWindow=le,h.camelCase=nt,h.type=$e,h.now=Date.now,h.isNumeric=function(r){var o=h.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},h.trim=function(r){return r==null?"":(r+"").replace(wh,"$1")};var Th=e.jQuery,Ih=e.$;return h.noConflict=function(r){return e.$===h&&(e.$=Ih),r&&e.jQuery===h&&(e.jQuery=Th),h},typeof t=="undefined"&&(e.jQuery=e.$=h),h})})(Nu);const uy={apiKey:"AIzaSyCjqeHkUC2oQf467G4X17JRYy9s5DZC0NM",authDomain:"mlhers-locations.firebaseapp.com",projectId:"mlhers-locations",storageBucket:"mlhers-locations.appspot.com",messagingSenderId:"619178096730",appId:"1:619178096730:web:f44ff6d2a4b882fb894063",measurementId:"G-ZB87LN6MKL",databaseURL:"https://mlhers-locations-default-rtdb.firebaseio.com/"},hy=ef(uy),Eo=eg(),dy=new ft;Cp(Eo).then(function(n){n!=null&&n.user?document.getElementById("markerAdder").classList.remove("disabled"):document.getElementById("markerAdder").classList.add("disabled")});function fy(){yp(Eo,dy)}const py=Su(hy),gy=Iu(Su());let Yn=null;function _y(){const n=Eo.currentUser,e="https://maps.googleapis.com/maps/api/geocode/json?address="+document.getElementById("autocomplete").value+"&key=AIzaSyC7khT58mCuadUv2AIR1xREKo1IVenDKnE";Nu.exports.getJSON(e,function(t){ey(Iu(py,"markers/"+(n==null?void 0:n.uid)),{username:n==null?void 0:n.displayName,lat:t.results[0].geometry.location.lat,lng:t.results[0].geometry.location.lng}),location.reload()})}let Ru=new L.Map("map",{center:new L.LatLng(20,0),zoom:2});L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"\xA9 OpenStreetMap"}).addTo(Ru);async function my(){await ty(hr(gy,"markers")).then(n=>{n.exists()?Yn=n.val():console.log("No data available")}).catch(n=>{console.error(n)}),await Object.keys(Yn).forEach(function(n,e){L.marker([parseFloat(Yn[n].lat),parseFloat(Yn[n].lng)]).addTo(Ru).bindPopup(Yn[n].username)})}my();document.getElementById("markerAdder").addEventListener("click",_y);document.getElementById("signInWithGoogle").addEventListener("click",fy);
