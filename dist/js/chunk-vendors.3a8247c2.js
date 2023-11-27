"use strict";(self["webpackChunkupdater"]=self["webpackChunkupdater"]||[]).push([[998],{444:function(t,e,n){n.d(e,{BH:function(){return v},L:function(){return u},LL:function(){return C},P0:function(){return m},Sg:function(){return w},ZR:function(){return T},aH:function(){return y},eu:function(){return _},hl:function(){return b},m9:function(){return R},vZ:function(){return k}});
/**
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
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(1023&u))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|u>>6,f=63&u;a||(f=64,s||(h=64)),r.push(n[c],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;const u=i<t.length,c=u?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==c||null==h)throw new o;const f=e<<2|a>>4;if(r.push(f),64!==c){const t=a<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return s.encodeByteArray(e,!0)},u=function(t){return a(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
/**
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
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
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
 */function b(){try{return"object"===typeof indexedDB}catch(t){return!1}}function _(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
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
 */
const E="FirebaseError";class T extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=E,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?S(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new T(r,o,n);return a}}function S(t,e){return t.replace(I,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const I=/\{\$([^}]+)}/g;
/**
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
 */function k(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(A(n)&&A(s)){if(!k(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function A(t){return null!==t&&"object"===typeof t}
/**
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
 */
/**
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
 */
function R(t){return t&&t._delegate?t._delegate:t}},262:function(t,e,n){n.d(e,{$y:function(){return Pt},B:function(){return o},BK:function(){return re},Bj:function(){return s},EB:function(){return c},Fl:function(){return ce},IU:function(){return Ut},Jd:function(){return A},OT:function(){return Nt},PG:function(){return Lt},SU:function(){return Yt},Tn:function(){return Xt},Um:function(){return Dt},Vh:function(){return oe},WL:function(){return te},X$:function(){return N},X3:function(){return Vt},XI:function(){return Gt},Xl:function(){return Bt},YS:function(){return Mt},ZM:function(){return ne},cE:function(){return C},dq:function(){return zt},iH:function(){return Kt},j:function(){return x},lk:function(){return R},nZ:function(){return u},oR:function(){return Jt},qj:function(){return xt},qq:function(){return E},sT:function(){return S},yT:function(){return Ft}});var r=n(577);let i;class s{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function o(t){return new s(t)}function a(t,e=i){e&&e.active&&e.effects.push(t)}function u(){return i}function c(t){i&&i.cleanups.push(t)}const l=t=>{const e=new Set(t);return e.w=0,e.n=0,e},h=t=>(t.w&y)>0,f=t=>(t.n&y)>0,d=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=y},p=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];h(i)&&!f(i)?i.delete(t):e[n++]=i,i.w&=~y,i.n&=~y}e.length=n}},g=new WeakMap;let m=0,y=1;const v=30;let w;const b=Symbol(""),_=Symbol("");class E{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=w,e=I;while(t){if(t===this)return;t=t.parent}try{return this.parent=w,w=this,I=!0,y=1<<++m,m<=v?d(this):T(this),this.fn()}finally{m<=v&&p(this),y=1<<--m,w=this.parent,I=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){w===this?this.deferStop=!0:this.active&&(T(this),this.onStop&&this.onStop(),this.active=!1)}}function T(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function C(t,e){t.effect&&(t=t.effect.fn);const n=new E(t);e&&((0,r.l7)(n,e),e.scope&&a(n,e.scope)),e&&e.lazy||n.run();const i=n.run.bind(n);return i.effect=n,i}function S(t){t.effect.stop()}let I=!0;const k=[];function A(){k.push(I),I=!1}function R(){const t=k.pop();I=void 0===t||t}function x(t,e,n){if(I&&w){let e=g.get(t);e||g.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=l());const i=void 0;D(r,i)}}function D(t,e){let n=!1;m<=v?f(t)||(t.n|=y,n=!h(t)):n=!t.has(w),n&&(t.add(w),w.deps.push(t))}function N(t,e,n,i,s,o){const a=g.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&(0,r.kJ)(t)){const t=Number(i);a.forEach(((e,n)=>{("length"===n||n>=t)&&u.push(e)}))}else switch(void 0!==n&&u.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(b)),(0,r._N)(t)&&u.push(a.get(_)));break;case"delete":(0,r.kJ)(t)||(u.push(a.get(b)),(0,r._N)(t)&&u.push(a.get(_)));break;case"set":(0,r._N)(t)&&u.push(a.get(b));break}if(1===u.length)u[0]&&M(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);M(l(t))}}function M(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&O(r,e);for(const r of n)r.computed||O(r,e)}function O(t,e){(t!==w||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function L(t,e){var n;return null==(n=g.get(t))?void 0:n.get(e)}const P=(0,r.fY)("__proto__,__v_isRef,__isVue"),F=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),V=z(),U=z(!1,!0),B=z(!0),j=z(!0,!0),q=$();function $(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Ut(this);for(let e=0,i=this.length;e<i;e++)x(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Ut)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){A();const n=Ut(this)[e].apply(this,t);return R(),n}})),t}function H(t){const e=Ut(this);return x(e,"has",t),e.hasOwnProperty(t)}function z(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?kt:It:e?St:Ct).get(n))return n;const o=(0,r.kJ)(n);if(!t){if(o&&(0,r.RI)(q,i))return Reflect.get(q,i,s);if("hasOwnProperty"===i)return H}const a=Reflect.get(n,i,s);return((0,r.yk)(i)?F.has(i):P(i))?a:(t||x(n,"get",i),e?a:zt(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?t?Nt(a):xt(a):a)}}const K=W(),G=W(!0);function W(t=!1){return function(e,n,i,s){let o=e[n];if(Pt(o)&&zt(o)&&!zt(i))return!1;if(!t&&(Ft(i)||Pt(i)||(o=Ut(o),i=Ut(i)),!(0,r.kJ)(e)&&zt(o)&&!zt(i)))return o.value=i,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),u=Reflect.set(e,n,i,s);return e===Ut(s)&&(a?(0,r.aU)(i,o)&&N(e,"set",n,i,o):N(e,"add",n,i)),u}}function Q(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&N(t,"delete",e,void 0,i),s}function J(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&F.has(e)||x(t,"has",e),n}function Y(t){return x(t,"iterate",(0,r.kJ)(t)?"length":b),Reflect.ownKeys(t)}const X={get:V,set:K,deleteProperty:Q,has:J,ownKeys:Y},Z={get:B,set(t,e){return!0},deleteProperty(t,e){return!0}},tt=(0,r.l7)({},X,{get:U,set:G}),et=(0,r.l7)({},Z,{get:j}),nt=t=>t,rt=t=>Reflect.getPrototypeOf(t);function it(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Ut(t),s=Ut(e);n||(e!==s&&x(i,"get",e),x(i,"get",s));const{has:o}=rt(i),a=r?nt:n?qt:jt;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function st(t,e=!1){const n=this["__v_raw"],r=Ut(n),i=Ut(t);return e||(t!==i&&x(r,"has",t),x(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ot(t,e=!1){return t=t["__v_raw"],!e&&x(Ut(t),"iterate",b),Reflect.get(t,"size",t)}function at(t){t=Ut(t);const e=Ut(this),n=rt(e),r=n.has.call(e,t);return r||(e.add(t),N(e,"add",t,t)),this}function ut(t,e){e=Ut(e);const n=Ut(this),{has:i,get:s}=rt(n);let o=i.call(n,t);o||(t=Ut(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&N(n,"set",t,e,a):N(n,"add",t,e),this}function ct(t){const e=Ut(this),{has:n,get:r}=rt(e);let i=n.call(e,t);i||(t=Ut(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&N(e,"delete",t,void 0,s),o}function lt(){const t=Ut(this),e=0!==t.size,n=void 0,r=t.clear();return e&&N(t,"clear",void 0,void 0,n),r}function ht(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Ut(s),a=e?nt:t?qt:jt;return!t&&x(o,"iterate",b),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function ft(t,e,n){return function(...i){const s=this["__v_raw"],o=Ut(s),a=(0,r._N)(o),u="entries"===t||t===Symbol.iterator&&a,c="keys"===t&&a,l=s[t](...i),h=n?nt:e?qt:jt;return!e&&x(o,"iterate",c?_:b),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:u?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function dt(t){return function(...e){return"delete"!==t&&this}}function pt(){const t={get(t){return it(this,t)},get size(){return ot(this)},has:st,add:at,set:ut,delete:ct,clear:lt,forEach:ht(!1,!1)},e={get(t){return it(this,t,!1,!0)},get size(){return ot(this)},has:st,add:at,set:ut,delete:ct,clear:lt,forEach:ht(!1,!0)},n={get(t){return it(this,t,!0)},get size(){return ot(this,!0)},has(t){return st.call(this,t,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:ht(!0,!1)},r={get(t){return it(this,t,!0,!0)},get size(){return ot(this,!0)},has(t){return st.call(this,t,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:ht(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=ft(i,!1,!1),n[i]=ft(i,!0,!1),e[i]=ft(i,!1,!0),r[i]=ft(i,!0,!0)})),[t,n,e,r]}const[gt,mt,yt,vt]=pt();function wt(t,e){const n=e?t?vt:yt:t?mt:gt;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const bt={get:wt(!1,!1)},_t={get:wt(!1,!0)},Et={get:wt(!0,!1)},Tt={get:wt(!0,!0)};const Ct=new WeakMap,St=new WeakMap,It=new WeakMap,kt=new WeakMap;function At(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:At((0,r.W7)(t))}function xt(t){return Pt(t)?t:Ot(t,!1,X,bt,Ct)}function Dt(t){return Ot(t,!1,tt,_t,St)}function Nt(t){return Ot(t,!0,Z,Et,It)}function Mt(t){return Ot(t,!0,et,Tt,kt)}function Ot(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=Rt(t);if(0===a)return t;const u=new Proxy(t,2===a?i:n);return s.set(t,u),u}function Lt(t){return Pt(t)?Lt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Pt(t){return!(!t||!t["__v_isReadonly"])}function Ft(t){return!(!t||!t["__v_isShallow"])}function Vt(t){return Lt(t)||Pt(t)}function Ut(t){const e=t&&t["__v_raw"];return e?Ut(e):t}function Bt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const jt=t=>(0,r.Kn)(t)?xt(t):t,qt=t=>(0,r.Kn)(t)?Nt(t):t;function $t(t){I&&w&&(t=Ut(t),D(t.dep||(t.dep=l())))}function Ht(t,e){t=Ut(t);const n=t.dep;n&&M(n)}function zt(t){return!(!t||!0!==t.__v_isRef)}function Kt(t){return Wt(t,!1)}function Gt(t){return Wt(t,!0)}function Wt(t,e){return zt(t)?t:new Qt(t,e)}class Qt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ut(t),this._value=e?t:jt(t)}get value(){return $t(this),this._value}set value(t){const e=this.__v_isShallow||Ft(t)||Pt(t);t=e?t:Ut(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:jt(t),Ht(this,t))}}function Jt(t){Ht(t,void 0)}function Yt(t){return zt(t)?t.value:t}function Xt(t){return(0,r.mf)(t)?t():Yt(t)}const Zt={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return zt(i)&&!zt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function te(t){return Lt(t)?t:new Proxy(t,Zt)}class ee{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:e,set:n}=t((()=>$t(this)),(()=>Ht(this)));this._get=e,this._set=n}get value(){return this._get()}set value(t){this._set(t)}}function ne(t){return new ee(t)}function re(t){const e=(0,r.kJ)(t)?new Array(t.length):{};for(const n in t)e[n]=ae(t,n);return e}class ie{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return L(Ut(this._object),this._key)}}class se{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function oe(t,e,n){return zt(t)?t:(0,r.mf)(t)?new se(t):(0,r.Kn)(t)&&arguments.length>1?ae(t,e,n):Kt(t)}function ae(t,e,n){const r=t[e];return zt(r)?r:new ie(t,e,n)}class ue{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new E(t,(()=>{this._dirty||(this._dirty=!0,Ht(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Ut(this);return $t(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ce(t,e,n=!1){let i,s;const o=(0,r.mf)(t);o?(i=t,s=r.dG):(i=t.get,s=t.set);const a=new ue(i,s,o||!s,n);return a}},252:function(t,e,n){n.d(e,{$d:function(){return u},$y:function(){return r.$y},Ah:function(){return te},B:function(){return r.B},BK:function(){return r.BK},Bj:function(){return r.Bj},Bz:function(){return Ce},C3:function(){return ur},C_:function(){return i.C_},Cn:function(){return q},EB:function(){return r.EB},EM:function(){return an},Eo:function(){return Nn},F4:function(){return gr},FN:function(){return Rr},Fl:function(){return Jr},G:function(){return si},Gn:function(){return Ae},HX:function(){return $},HY:function(){return Kn},Ho:function(){return mr},IU:function(){return r.IU},JJ:function(){return sn},Jd:function(){return Zt},KU:function(){return a},Ko:function(){return de},LL:function(){return ce},MW:function(){return Te},MX:function(){return ei},Mr:function(){return ti},Nv:function(){return pe},OT:function(){return r.OT},Ob:function(){return Ut},P$:function(){return It},PG:function(){return r.PG},Q2:function(){return le},Q6:function(){return Nt},RC:function(){return Lt},Rh:function(){return ft},Rr:function(){return xe},S3:function(){return c},SU:function(){return r.SU},Tn:function(){return r.Tn},U2:function(){return At},Uc:function(){return Xr},Uk:function(){return yr},Um:function(){return r.Um},Us:function(){return Dn},Vf:function(){return Pe},Vh:function(){return r.Vh},WI:function(){return ge},WL:function(){return r.WL},WY:function(){return Se},Wl:function(){return ke},Wm:function(){return dr},Wu:function(){return o},X3:function(){return r.X3},XI:function(){return r.XI},Xl:function(){return r.Xl},Xn:function(){return Yt},Y1:function(){return qr},Y3:function(){return b},Y8:function(){return Et},YP:function(){return gt},YS:function(){return r.YS},Yq:function(){return ne},Yu:function(){return Ie},ZK:function(){return s},ZM:function(){return r.ZM},Zq:function(){return Zr},_:function(){return fr},_A:function(){return i._A},aZ:function(){return Mt},b9:function(){return Re},bT:function(){return re},bv:function(){return Jt},cE:function(){return r.cE},d1:function(){return ie},dD:function(){return j},dG:function(){return Tr},dl:function(){return jt},dq:function(){return r.dq},ec:function(){return O},eq:function(){return oi},f3:function(){return on},h:function(){return Yr},hR:function(){return i.hR},i8:function(){return ri},iD:function(){return ir},iH:function(){return r.iH},ic:function(){return Xt},j4:function(){return sr},j5:function(){return i.j5},kC:function(){return i.kC},kq:function(){return wr},l1:function(){return De},lA:function(){return or},lR:function(){return Hn},m0:function(){return ht},mW:function(){return D},mv:function(){return Ve},mx:function(){return ye},n4:function(){return tt},nJ:function(){return Ct},nK:function(){return Dt},nQ:function(){return ni},nZ:function(){return r.nZ},oR:function(){return r.oR},of:function(){return $r},p1:function(){return Fe},qG:function(){return Qn},qZ:function(){return nr},qb:function(){return S},qj:function(){return r.qj},qq:function(){return r.qq},ry:function(){return ai},sT:function(){return r.sT},se:function(){return qt},sv:function(){return Wn},tT:function(){return Ne},uE:function(){return vr},u_:function(){return Le},up:function(){return ae},vl:function(){return ee},vs:function(){return i.vs},w5:function(){return H},wF:function(){return Qt},wg:function(){return Xn},wy:function(){return bt},xv:function(){return Gn},yT:function(){return r.yT},yX:function(){return dt},zw:function(){return i.zw}});var r=n(262),i=n(577);function s(t,...e){}function o(t,e){}function a(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){c(s,e,n)}return i}function u(t,e,n,r){if((0,i.mf)(t)){const s=a(t,e,n,r);return s&&(0,i.tI)(s)&&s.catch((t=>{c(t,e,n)})),s}const s=[];for(let i=0;i<t.length;i++)s.push(u(t[i],e,n,r));return s}function c(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,s=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,s))return;r=r.parent}const o=e.appContext.config.errorHandler;if(o)return void a(o,null,10,[t,i,s])}l(t,n,i,r)}function l(t,e,n,r=!0){console.error(t)}let h=!1,f=!1;const d=[];let p=0;const g=[];let m=null,y=0;const v=Promise.resolve();let w=null;function b(t){const e=w||v;return t?e.then(this?t.bind(this):t):e}function _(t){let e=p+1,n=d.length;while(e<n){const r=e+n>>>1,i=A(d[r]);i<t?e=r+1:n=r}return e}function E(t){d.length&&d.includes(t,h&&t.allowRecurse?p+1:p)||(null==t.id?d.push(t):d.splice(_(t.id),0,t),T())}function T(){h||f||(f=!0,w=v.then(x))}function C(t){const e=d.indexOf(t);e>p&&d.splice(e,1)}function S(t){(0,i.kJ)(t)?g.push(...t):m&&m.includes(t,t.allowRecurse?y+1:y)||g.push(t),T()}function I(t,e=(h?p+1:0)){for(0;e<d.length;e++){const t=d[e];t&&t.pre&&(d.splice(e,1),e--,t())}}function k(t){if(g.length){const t=[...new Set(g)];if(g.length=0,m)return void m.push(...t);for(m=t,m.sort(((t,e)=>A(t)-A(e))),y=0;y<m.length;y++)m[y]();m=null,y=0}}const A=t=>null==t.id?1/0:t.id,R=(t,e)=>{const n=A(t)-A(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function x(t){f=!1,h=!0,d.sort(R);i.dG;try{for(p=0;p<d.length;p++){const t=d[p];t&&!1!==t.active&&a(t,null,14)}}finally{p=0,d.length=0,k(t),h=!1,w=null,(d.length||g.length)&&x(t)}}let D,N=[],M=!1;function O(t,e){var n,r;if(D=t,D)D.enabled=!0,N.forEach((({event:t,args:e})=>D.emit(t,...e))),N=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null==(r=null==(n=window.navigator)?void 0:n.userAgent)?void 0:r.includes("jsdom"))){const t=e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[];t.push((t=>{O(t,e)})),setTimeout((()=>{D||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,M=!0,N=[])}),3e3)}else M=!0,N=[]}function L(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let s=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in r){const t=`${"modelValue"===a?"model":a}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o&&(s=n.map((t=>(0,i.HD)(t)?t.trim():t))),e&&(s=n.map(i.h5))}let c;let l=r[c=(0,i.hR)(e)]||r[c=(0,i.hR)((0,i._A)(e))];!l&&o&&(l=r[c=(0,i.hR)((0,i.rs)(e))]),l&&u(l,t,6,s);const h=r[c+"Once"];if(h){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,u(h,t,6,s)}}function P(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},u=!1;if(!(0,i.mf)(t)){const r=t=>{const n=P(t,e,!0);n&&(u=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||u?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),(0,i.Kn)(t)&&r.set(t,a),a):((0,i.Kn)(t)&&r.set(t,null),null)}function F(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let V=null,U=null;function B(t){const e=V;return V=t,U=t&&t.type.__scopeId||null,e}function j(t){U=t}function q(){U=null}const $=t=>H;function H(t,e=V,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&nr(-1);const i=B(e);let s;try{s=t(...n)}finally{B(i),r._d&&nr(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function z(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t;let v,w;const b=B(t);try{if(4&n.shapeFlag){const t=s||r;v=br(f.call(t,t,d,o,g,p,m)),w=l}else{const t=e;0,v=br(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:G(l)}}catch(E){Jn.length=0,c(E,t,1),v=dr(Wn)}let _=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=_;t.length&&7&e&&(a&&t.some(i.tR)&&(w=W(w,a)),_=mr(_,w))}return n.dirs&&(_=mr(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,B(b),v}function K(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(!or(r))return;if(r.type!==Wn||"v-if"===r.children){if(e)return;e=r}}return e}const G=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},W=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function Q(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:u}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&u>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||J(r,o,c):!!o);if(1024&u)return!0;if(16&u)return r?J(r,o,c):!!o;if(8&u){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!F(c,n))return!0}}return!1}function J(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!F(n,s))return!0}return!1}function Y({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const X=t=>t.__isSuspense,Z={name:"Suspense",__isSuspense:!0,process(t,e,n,r,i,s,o,a,u,c){null==t?nt(e,n,r,i,s,o,a,u,c):rt(t,e,n,r,i,o,a,u,c)},hydrate:st,create:it,normalize:ot},tt=Z;function et(t,e){const n=t.props&&t.props[e];(0,i.mf)(n)&&n()}function nt(t,e,n,r,i,s,o,a,u){const{p:c,o:{createElement:l}}=u,h=l("div"),f=t.suspense=it(t,i,r,e,h,n,s,o,a,u);c(null,f.pendingBranch=t.ssContent,h,null,r,f,s,o),f.deps>0?(et(t,"onPending"),et(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,s,o),ct(f,t.ssFallback)):f.resolve(!1,!0)}function rt(t,e,n,r,i,s,o,a,{p:u,um:c,o:{createElement:l}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:g,isInFallback:m,isHydrating:y}=h;if(g)h.pendingBranch=f,ar(f,g)?(u(g,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():m&&(u(p,d,n,r,i,null,s,o,a),ct(h,d))):(h.pendingId++,y?(h.isHydrating=!1,h.activeBranch=g):c(g,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),m?(u(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():(u(p,d,n,r,i,null,s,o,a),ct(h,d))):p&&ar(f,p)?(u(p,f,n,r,i,h,s,o,a),h.resolve(!0)):(u(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0&&h.resolve()));else if(p&&ar(f,p))u(p,f,n,r,i,h,s,o,a),ct(h,f);else if(et(e,"onPending"),h.pendingBranch=f,h.pendingId++,u(null,f,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:t,pendingId:e}=h;t>0?setTimeout((()=>{h.pendingId===e&&h.fallback(d)}),t):0===t&&h.fallback(d)}}function it(t,e,n,r,s,o,a,u,l,h,f=!1){const{p:d,m:p,um:g,n:m,o:{parentNode:y,remove:v}}=h;let w;const b=lt(t);b&&(null==e?void 0:e.pendingBranch)&&(w=e.pendingId,e.deps++);const _=t.props?(0,i.He)(t.props.timeout):void 0;const E={vnode:t,parent:e,parentComponent:n,isSVG:a,container:r,hiddenContainer:s,anchor:o,deps:0,pendingId:0,timeout:"number"===typeof _?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(t=!1,n=!1){const{vnode:r,activeBranch:i,pendingBranch:s,pendingId:o,effects:a,parentComponent:u,container:c}=E;if(E.isHydrating)E.isHydrating=!1;else if(!t){const t=i&&s.transition&&"out-in"===s.transition.mode;t&&(i.transition.afterLeave=()=>{o===E.pendingId&&p(s,c,e,0)});let{anchor:e}=E;i&&(e=m(i),g(i,u,E,!0)),t||p(s,c,e,0)}ct(E,s),E.pendingBranch=null,E.isInFallback=!1;let l=E.parent,h=!1;while(l){if(l.pendingBranch){l.effects.push(...a),h=!0;break}l=l.parent}h||S(a),E.effects=[],b&&e&&e.pendingBranch&&w===e.pendingId&&(e.deps--,0!==e.deps||n||e.resolve()),et(r,"onResolve")},fallback(t){if(!E.pendingBranch)return;const{vnode:e,activeBranch:n,parentComponent:r,container:i,isSVG:s}=E;et(e,"onFallback");const o=m(n),a=()=>{E.isInFallback&&(d(null,t,i,o,r,null,s,u,l),ct(E,t))},c=t.transition&&"out-in"===t.transition.mode;c&&(n.transition.afterLeave=a),E.isInFallback=!0,g(n,r,null,!0),c||a()},move(t,e,n){E.activeBranch&&p(E.activeBranch,t,e,n),E.container=t},next(){return E.activeBranch&&m(E.activeBranch)},registerDep(t,e){const n=!!E.pendingBranch;n&&E.deps++;const r=t.vnode.el;t.asyncDep.catch((e=>{c(e,t,0)})).then((i=>{if(t.isUnmounted||E.isUnmounted||E.pendingId!==t.suspenseId)return;t.asyncResolved=!0;const{vnode:s}=t;jr(t,i,!1),r&&(s.el=r);const o=!r&&t.subTree.el;e(t,s,y(r||t.subTree.el),r?null:m(t.subTree),E,a,l),o&&v(o),Y(t,s.el),n&&0===--E.deps&&E.resolve()}))},unmount(t,e){E.isUnmounted=!0,E.activeBranch&&g(E.activeBranch,n,t,e),E.pendingBranch&&g(E.pendingBranch,n,t,e)}};return E}function st(t,e,n,r,i,s,o,a,u){const c=e.suspense=it(e,r,n,t.parentNode,document.createElement("div"),null,i,s,o,a,!0),l=u(t,c.pendingBranch=e.ssContent,n,c,s,o);return 0===c.deps&&c.resolve(!1,!0),l}function ot(t){const{shapeFlag:e,children:n}=t,r=32&e;t.ssContent=at(r?n.default:n),t.ssFallback=r?at(n.fallback):dr(Wn)}function at(t){let e;if((0,i.mf)(t)){const n=er&&t._c;n&&(t._d=!1,Xn()),t=t(),n&&(t._d=!0,e=Yn,Zn())}if((0,i.kJ)(t)){const e=K(t);0,t=e}return t=br(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter((e=>e!==t))),t}function ut(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):S(t)}function ct(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,i=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=i,Y(r,i))}function lt(t){var e;return null!=(null==(e=t.props)?void 0:e.suspensible)&&!1!==t.props.suspensible}function ht(t,e){return mt(t,null,e)}function ft(t,e){return mt(t,null,{flush:"post"})}function dt(t,e){return mt(t,null,{flush:"sync"})}const pt={};function gt(t,e,n){return mt(t,e,n)}function mt(t,e,{immediate:n,deep:s,flush:o,onTrack:c,onTrigger:l}=i.kT){var h;const f=(0,r.nZ)()===(null==(h=Ar)?void 0:h.scope)?Ar:null;let d,p,g=!1,m=!1;if((0,r.dq)(t)?(d=()=>t.value,g=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,s=!0):(0,i.kJ)(t)?(m=!0,g=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?wt(t):(0,i.mf)(t)?a(t,f,2):void 0))):d=(0,i.mf)(t)?e?()=>a(t,f,2):()=>{if(!f||!f.isUnmounted)return p&&p(),u(t,f,3,[v])}:i.dG,e&&s){const t=d;d=()=>wt(t())}let y,v=t=>{p=T.onStop=()=>{a(t,f,4)}};if(Vr){if(v=i.dG,e?n&&u(e,f,3,[d(),m?[]:void 0,v]):d(),"sync"!==o)return i.dG;{const t=Zr();y=t.__watcherHandles||(t.__watcherHandles=[])}}let w=m?new Array(t.length).fill(pt):pt;const b=()=>{if(T.active)if(e){const t=T.run();(s||g||(m?t.some(((t,e)=>(0,i.aU)(t,w[e]))):(0,i.aU)(t,w)))&&(p&&p(),u(e,f,3,[t,w===pt?void 0:m&&w[0]===pt?[]:w,v]),w=t)}else T.run()};let _;b.allowRecurse=!!e,"sync"===o?_=b:"post"===o?_=()=>xn(b,f&&f.suspense):(b.pre=!0,f&&(b.id=f.uid),_=()=>E(b));const T=new r.qq(d,_);e?n?b():w=T.run():"post"===o?xn(T.run.bind(T),f&&f.suspense):T.run();const C=()=>{T.stop(),f&&f.scope&&(0,i.Od)(f.scope.effects,T)};return y&&y.push(C),C}function yt(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?vt(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=Ar;Mr(this);const u=mt(s,o.bind(r),n);return a?Mr(a):Or(),u}function vt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function wt(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))wt(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)wt(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{wt(t,e)}));else if((0,i.PO)(t))for(const n in t)wt(t[n],e);return t}function bt(t,e){const n=V;if(null===n)return t;const r=Gr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,u=i.kT]=e[o];t&&((0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&wt(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:u}))}return t}function _t(t,e,n,i){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let l=c.dir[i];l&&((0,r.Jd)(),u(l,n,8,[t.el,c,t,e]),(0,r.lk)())}}function Et(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Jt((()=>{t.isMounted=!0})),Zt((()=>{t.isUnmounting=!0})),t}const Tt=[Function,Array],Ct={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tt,onEnter:Tt,onAfterEnter:Tt,onEnterCancelled:Tt,onBeforeLeave:Tt,onLeave:Tt,onAfterLeave:Tt,onLeaveCancelled:Tt,onBeforeAppear:Tt,onAppear:Tt,onAfterAppear:Tt,onAppearCancelled:Tt},St={name:"BaseTransition",props:Ct,setup(t,{slots:e}){const n=Rr(),i=Et();let s;return()=>{const o=e.default&&Nt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Wn){0,a=e,t=!0;break}}const u=(0,r.IU)(t),{mode:c}=u;if(i.isLeaving)return Rt(a);const l=xt(a);if(!l)return Rt(a);const h=At(l,u,i,n);Dt(l,h);const f=n.subTree,d=f&&xt(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(d&&d.type!==Wn&&(!ar(l,d)||p)){const t=At(d,u,i,n);if(Dt(d,t),"out-in"===c)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},Rt(a);"in-out"===c&&l.type!==Wn&&(t.delayLeave=(t,e,n)=>{const r=kt(i,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},It=St;function kt(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function At(t,e,n,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=e,_=String(t.key),E=kt(n,t),T=(t,e)=>{t&&u(t,r,9,e)},C=(t,e)=>{const n=e[1];T(t,e),(0,i.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:o,persisted:a,beforeEnter(e){let r=c;if(!n.isMounted){if(!s)return;r=y||c}e._leaveCb&&e._leaveCb(!0);const i=E[_];i&&ar(t,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[e])},enter(t){let e=l,r=h,i=f;if(!n.isMounted){if(!s)return;e=v||l,r=w||h,i=b||f}let o=!1;const a=t._enterCb=e=>{o||(o=!0,T(e?i:r,[t]),S.delayedLeave&&S.delayedLeave(),t._enterCb=void 0)};e?C(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();T(d,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),T(n?m:g,[e]),e._leaveCb=void 0,E[i]===t&&delete E[i])};E[i]=t,p?C(p,[e,o]):o()},clone(t){return At(t,e,n,r)}};return S}function Rt(t){if(Ft(t))return t=mr(t),t.children=null,t}function xt(t){return Ft(t)?t.children?t.children[0]:void 0:t}function Dt(t,e){6&t.shapeFlag&&t.component?Dt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Nt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Kn?(128&o.patchFlag&&i++,r=r.concat(Nt(o.children,e,a))):(e||o.type!==Wn)&&r.push(null!=a?mr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Mt(t,e){return(0,i.mf)(t)?(()=>(0,i.l7)({name:t.name},e,{setup:t}))():t}const Ot=t=>!!t.type.__asyncLoader;function Lt(t){(0,i.mf)(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:o=200,timeout:a,suspensible:u=!0,onError:l}=t;let h,f=null,d=0;const p=()=>(d++,f=null,g()),g=()=>{let t;return f||(t=f=e().catch((t=>{if(t=t instanceof Error?t:new Error(String(t)),l)return new Promise(((e,n)=>{const r=()=>e(p()),i=()=>n(t);l(t,r,i,d+1)}));throw t})).then((e=>t!==f&&f?f:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),h=e,e))))};return Mt({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return h},setup(){const t=Ar;if(h)return()=>Pt(h,t);const e=e=>{f=null,c(e,t,13,!s)};if(u&&t.suspense||Vr)return g().then((e=>()=>Pt(e,t))).catch((t=>(e(t),()=>s?dr(s,{error:t}):null)));const i=(0,r.iH)(!1),l=(0,r.iH)(),d=(0,r.iH)(!!o);return o&&setTimeout((()=>{d.value=!1}),o),null!=a&&setTimeout((()=>{if(!i.value&&!l.value){const t=new Error(`Async component timed out after ${a}ms.`);e(t),l.value=t}}),a),g().then((()=>{i.value=!0,t.parent&&Ft(t.parent.vnode)&&E(t.parent.update)})).catch((t=>{e(t),l.value=t})),()=>i.value&&h?Pt(h,t):l.value&&s?dr(s,{error:l.value}):n&&!d.value?dr(n):void 0}})}function Pt(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=dr(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Ft=t=>t.type.__isKeepAlive,Vt={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Rr(),r=n.ctx;if(!r.renderer)return()=>{const t=e.default&&e.default();return t&&1===t.length?t[0]:t};const s=new Map,o=new Set;let a=null;const u=n.suspense,{renderer:{p:c,m:l,um:h,o:{createElement:f}}}=r,d=f("div");function p(t){zt(t),h(t,n,u,!0)}function g(t){s.forEach(((e,n)=>{const r=Wr(e.type);!r||t&&t(r)||m(n)}))}function m(t){const e=s.get(t);a&&ar(e,a)?a&&zt(a):p(e),s.delete(t),o.delete(t)}r.activate=(t,e,n,r,s)=>{const o=t.component;l(t,e,n,0,u),c(o.vnode,t,e,n,o,u,r,t.slotScopeIds,s),xn((()=>{o.isDeactivated=!1,o.a&&(0,i.ir)(o.a);const e=t.props&&t.props.onVnodeMounted;e&&Cr(e,o.parent,t)}),u)},r.deactivate=t=>{const e=t.component;l(t,d,null,1,u),xn((()=>{e.da&&(0,i.ir)(e.da);const n=t.props&&t.props.onVnodeUnmounted;n&&Cr(n,e.parent,t),e.isDeactivated=!0}),u)},gt((()=>[t.include,t.exclude]),(([t,e])=>{t&&g((e=>Bt(t,e))),e&&g((t=>!Bt(e,t)))}),{flush:"post",deep:!0});let y=null;const v=()=>{null!=y&&s.set(y,Kt(n.subTree))};return Jt(v),Xt(v),Zt((()=>{s.forEach((t=>{const{subTree:e,suspense:r}=n,i=Kt(e);if(t.type!==i.type||t.key!==i.key)p(t);else{zt(i);const t=i.component.da;t&&xn(t,r)}}))})),()=>{if(y=null,!e.default)return null;const n=e.default(),r=n[0];if(n.length>1)return a=null,n;if(!or(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let i=Kt(r);const u=i.type,c=Wr(Ot(i)?i.type.__asyncResolved||{}:u),{include:l,exclude:h,max:f}=t;if(l&&(!c||!Bt(l,c))||h&&c&&Bt(h,c))return a=i,r;const d=null==i.key?u:i.key,p=s.get(d);return i.el&&(i=mr(i),128&r.shapeFlag&&(r.ssContent=i)),y=d,p?(i.el=p.el,i.component=p.component,i.transition&&Dt(i,i.transition),i.shapeFlag|=512,o.delete(d),o.add(d)):(o.add(d),f&&o.size>parseInt(f,10)&&m(o.values().next().value)),i.shapeFlag|=256,a=i,X(r.type)?r:i}}},Ut=Vt;function Bt(t,e){return(0,i.kJ)(t)?t.some((t=>Bt(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!(0,i.Kj)(t)&&t.test(e)}function jt(t,e){$t(t,"a",e)}function qt(t,e){$t(t,"da",e)}function $t(t,e,n=Ar){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Gt(e,r,n),n){let t=n.parent;while(t&&t.parent)Ft(t.parent.vnode)&&Ht(r,e,n,t),t=t.parent}}function Ht(t,e,n,r){const s=Gt(e,t,r,!0);te((()=>{(0,i.Od)(r[e],s)}),n)}function zt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Kt(t){return 128&t.shapeFlag?t.ssContent:t}function Gt(t,e,n=Ar,i=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Mr(n);const s=u(e,n,t,i);return Or(),(0,r.lk)(),s});return i?s.unshift(o):s.push(o),o}}const Wt=t=>(e,n=Ar)=>(!Vr||"sp"===t)&&Gt(t,((...t)=>e(...t)),n),Qt=Wt("bm"),Jt=Wt("m"),Yt=Wt("bu"),Xt=Wt("u"),Zt=Wt("bum"),te=Wt("um"),ee=Wt("sp"),ne=Wt("rtg"),re=Wt("rtc");function ie(t,e=Ar){Gt("ec",t,e)}const se="components",oe="directives";function ae(t,e){return he(se,t,!0,e)||t}const ue=Symbol.for("v-ndc");function ce(t){return(0,i.HD)(t)?he(se,t,!1)||t:t||ue}function le(t){return he(oe,t)}function he(t,e,n=!0,r=!1){const s=V||Ar;if(s){const n=s.type;if(t===se){const t=Wr(n,!1);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=fe(s[t]||n[t],e)||fe(s.appContext[t],e);return!o&&r?n:o}}function fe(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}function de(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function pe(t,e){for(let n=0;n<e.length;n++){const r=e[n];if((0,i.kJ)(r))for(let e=0;e<r.length;e++)t[r[e].name]=r[e].fn;else r&&(t[r.name]=r.key?(...t)=>{const e=r.fn(...t);return e&&(e.key=r.key),e}:r.fn)}return t}function ge(t,e,n={},r,i){if(V.isCE||V.parent&&Ot(V.parent)&&V.parent.isCE)return"default"!==e&&(n.name=e),dr("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),Xn();const o=s&&me(s(n)),a=sr(Kn,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function me(t){return t.some((t=>!or(t)||t.type!==Wn&&!(t.type===Kn&&!me(t.children))))?t:null}function ye(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:(0,i.hR)(r)]=t[r];return n}const ve=t=>t?Lr(t)?Gr(t)||t.proxy:ve(t.parent):null,we=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ve(t.parent),$root:t=>ve(t.root),$emit:t=>t.emit,$options:t=>He(t),$forceUpdate:t=>t.f||(t.f=()=>E(t.update)),$nextTick:t=>t.n||(t.n=b.bind(t.proxy)),$watch:t=>yt.bind(t)}),be=(t,e)=>t!==i.kT&&!t.__isScriptSetup&&(0,i.RI)(t,e),_e={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:u,type:c,appContext:l}=t;let h;if("$"!==e[0]){const r=u[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(be(s,e))return u[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return u[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return u[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return u[e]=4,n[e];Ue&&(u[e]=0)}}const f=we[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=c.__cssModules)&&(d=d[e])?d:n!==i.kT&&(0,i.RI)(n,e)?(u[e]=4,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return be(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let u;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||be(e,a)||(u=o[0])&&(0,i.RI)(u,a)||(0,i.RI)(r,a)||(0,i.RI)(we,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};const Ee=(0,i.l7)({},_e,{get(t,e){if(e!==Symbol.unscopables)return _e.get(t,e,t)},has(t,e){const n="_"!==e[0]&&!(0,i.e1)(e);return n}});function Te(){return null}function Ce(){return null}function Se(t){0}function Ie(t){0}function ke(){return null}function Ae(){0}function Re(t,e){return null}function xe(){return Me().slots}function De(){return Me().attrs}function Ne(t,e,n){const i=Rr();if(n&&n.local){const n=(0,r.iH)(t[e]);return gt((()=>t[e]),(t=>n.value=t)),gt(n,(n=>{n!==t[e]&&i.emit(`update:${e}`,n)})),n}return{__v_isRef:!0,get value(){return t[e]},set value(t){i.emit(`update:${e}`,t)}}}function Me(){const t=Rr();return t.setupContext||(t.setupContext=Kr(t))}function Oe(t){return(0,i.kJ)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}function Le(t,e){const n=Oe(t);for(const r in e){if(r.startsWith("__skip"))continue;let t=n[r];t?(0,i.kJ)(t)||(0,i.mf)(t)?t=n[r]={type:t,default:e[r]}:t.default=e[r]:null===t&&(t=n[r]={default:e[r]}),t&&e[`__skip_${r}`]&&(t.skipFactory=!0)}return n}function Pe(t,e){return t&&e?(0,i.kJ)(t)&&(0,i.kJ)(e)?t.concat(e):(0,i.l7)({},Oe(t),Oe(e)):t||e}function Fe(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function Ve(t){const e=Rr();let n=t();return Or(),(0,i.tI)(n)&&(n=n.catch((t=>{throw Mr(e),t}))),[n,()=>Mr(e)]}let Ue=!0;function Be(t){const e=He(t),n=t.proxy,s=t.ctx;Ue=!1,e.beforeCreate&&qe(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:u,watch:c,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:T,renderTracked:C,renderTriggered:S,errorCaptured:I,serverPrefetch:k,expose:A,inheritAttrs:R,components:x,directives:D,filters:N}=e,M=null;if(h&&je(h,s,M),u)for(const r in u){const t=u[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Ue=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,u=Jr({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>u.value,set:t=>u.value=t})}if(c)for(const r in c)$e(c[r],s,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{sn(e,t[e])}))}function O(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&qe(f,t,"c"),O(Qt,d),O(Jt,p),O(Yt,g),O(Xt,m),O(jt,y),O(qt,v),O(ie,I),O(re,C),O(ne,S),O(Zt,b),O(te,E),O(ee,k),(0,i.kJ)(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.dG&&(t.render=T),null!=R&&(t.inheritAttrs=R),x&&(t.components=x),D&&(t.directives=D)}function je(t,e,n=i.dG){(0,i.kJ)(t)&&(t=Qe(t));for(const s in t){const n=t[s];let o;o=(0,i.Kn)(n)?"default"in n?on(n.from||s,n.default,!0):on(n.from||s):on(n),(0,r.dq)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function qe(t,e,n){u((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function $e(t,e,n,r){const s=r.includes(".")?vt(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&gt(s,n)}else if((0,i.mf)(t))gt(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>$e(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&gt(s,r,t)}else 0}function He(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,u=o.get(e);let c;return u?c=u:s.length||n||r?(c={},s.length&&s.forEach((t=>ze(c,t,a,!0))),ze(c,e,a)):c=e,(0,i.Kn)(e)&&o.set(e,c),c}function ze(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ze(t,s,n,!0),i&&i.forEach((e=>ze(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Ke[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Ke={data:Ge,props:Xe,emits:Xe,methods:Ye,computed:Ye,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:Ye,directives:Ye,watch:Ze,provide:Ge,inject:We};function Ge(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function We(t,e){return Ye(Qe(t),Qe(e))}function Qe(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Je(t,e){return t?[...new Set([].concat(t,e))]:e}function Ye(t,e){return t?(0,i.l7)(Object.create(null),t,e):e}function Xe(t,e){return t?(0,i.kJ)(t)&&(0,i.kJ)(e)?[...new Set([...t,...e])]:(0,i.l7)(Object.create(null),Oe(t),Oe(null!=e?e:{})):e}function Ze(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=Je(t[r],e[r]);return n}function tn(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let en=0;function nn(t,e){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=tn();const o=new Set;let a=!1;const u=s.app={_uid:en++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:ri,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(u,...e)):(0,i.mf)(t)&&(o.add(t),t(u,...e))),u},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),u},component(t,e){return e?(s.components[t]=e,u):s.components[t]},directive(t,e){return e?(s.directives[t]=e,u):s.directives[t]},mount(i,o,c){if(!a){0;const l=dr(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,c),a=!0,u._container=i,i.__vue_app__=u,Gr(l.component)||l.component.proxy}},unmount(){a&&(t(null,u._container),delete u._container.__vue_app__)},provide(t,e){return s.provides[t]=e,u},runWithContext(t){rn=u;try{return t()}finally{rn=null}}};return u}}let rn=null;function sn(t,e){if(Ar){let n=Ar.provides;const r=Ar.parent&&Ar.parent.provides;r===n&&(n=Ar.provides=Object.create(r)),n[t]=e}else 0}function on(t,e,n=!1){const r=Ar||V;if(r||rn){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:rn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r&&r.proxy):e}else 0}function an(){return!!(Ar||V||rn)}function un(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,cr,1),t.propsDefaults=Object.create(null),ln(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function cn(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:u}}=t,c=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(s||u>0)||16&u){let r;ln(t,e,o,a)&&(h=!0);for(const s in c)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=hn(l,c,s,void 0,t,!0)):delete o[s]);if(a!==c)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&u){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(F(t.emitsOptions,s))continue;const u=e[s];if(l)if((0,i.RI)(a,s))u!==a[s]&&(a[s]=u,h=!0);else{const e=(0,i._A)(s);o[e]=hn(l,c,e,u,t,!1)}else u!==a[s]&&(a[s]=u,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function ln(t,e,n,s){const[o,a]=t.propsOptions;let u,c=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const l=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(u||(u={}))[h]=l:n[h]=l:F(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,c=!0)}if(a){const e=(0,r.IU)(n),s=u||i.kT;for(let r=0;r<a.length;r++){const u=a[r];n[u]=hn(o,e,u,s[u],t,!(0,i.RI)(s,u))}}return c}function hn(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(Mr(s),r=i[n]=t.call(null,e),Or())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function fn(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},u=[];let c=!1;if(!(0,i.mf)(t)){const r=t=>{c=!0;const[n,r]=fn(t,e,!0);(0,i.l7)(a,n),r&&u.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!c)return(0,i.Kn)(t)&&r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);dn(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(dn(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const t=mn(Boolean,r.type),n=mn(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&u.push(e)}}}}const l=[a,u];return(0,i.Kn)(t)&&r.set(t,l),l}function dn(t){return"$"!==t[0]}function pn(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function gn(t,e){return pn(t)===pn(e)}function mn(t,e){return(0,i.kJ)(e)?e.findIndex((e=>gn(e,t))):(0,i.mf)(e)&&gn(e,t)?0:-1}const yn=t=>"_"===t[0]||"$stable"===t,vn=t=>(0,i.kJ)(t)?t.map(br):[br(t)],wn=(t,e,n)=>{if(e._n)return e;const r=H(((...t)=>vn(e(...t))),n);return r._c=!1,r},bn=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yn(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=wn(s,n,r);else if(null!=n){0;const t=vn(n);e[s]=()=>t}}},_n=(t,e)=>{const n=vn(e);t.slots.default=()=>n},En=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):bn(e,t.slots={})}else t.slots={},e&&_n(t,e);(0,i.Nj)(t.slots,cr,1)},Tn=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,bn(e,s)),a=e}else e&&(_n(t,e),a={default:1});if(o)for(const i in s)yn(i)||i in a||delete s[i]};function Cn(t,e,n,s,o=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>Cn(t,e&&((0,i.kJ)(e)?e[r]:e),n,s,o)));if(Ot(s)&&!o)return;const u=4&s.shapeFlag?Gr(s.component)||s.component.proxy:s.el,c=o?null:u,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,i.HD)(f)?(d[f]=null,(0,i.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,i.mf)(h))a(h,l,12,[c,d]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const r=()=>{if(t.f){const n=e?(0,i.RI)(p,h)?p[h]:d[h]:h.value;o?(0,i.kJ)(n)&&(0,i.Od)(n,u):(0,i.kJ)(n)?n.includes(u)||n.push(u):e?(d[h]=[u],(0,i.RI)(p,h)&&(p[h]=d[h])):(h.value=[u],t.k&&(d[t.k]=h.value))}else e?(d[h]=c,(0,i.RI)(p,h)&&(p[h]=c)):s&&(h.value=c,t.k&&(d[t.k]=c))};c?(r.id=-1,xn(r,n)):r()}else 0}}let Sn=!1;const In=t=>/svg/.test(t.namespaceURI)&&"foreignObject"!==t.tagName,kn=t=>8===t.nodeType;function An(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:o,parentNode:a,remove:u,insert:c,createComment:l}}=t,h=(t,e)=>{if(!e.hasChildNodes())return n(null,t,e),k(),void(e._vnode=t);Sn=!1,f(e.firstChild,t,null,null,null),k(),e._vnode=t,Sn&&console.error("Hydration completed but contains mismatches.")},f=(n,r,i,u,l,h=!1)=>{const v=kn(n)&&"["===n.data,w=()=>m(n,r,i,u,l,v),{type:b,ref:_,shapeFlag:E,patchFlag:T}=r;let C=n.nodeType;r.el=n,-2===T&&(h=!1,r.dynamicChildren=null);let S=null;switch(b){case Gn:3!==C?""===r.children?(c(r.el=s(""),a(n),n),S=n):S=w():(n.data!==r.children&&(Sn=!0,n.data=r.children),S=o(n));break;case Wn:S=8!==C||v?w():o(n);break;case Qn:if(v&&(n=o(n),C=n.nodeType),1===C||3===C){S=n;const t=!r.children.length;for(let e=0;e<r.staticCount;e++)t&&(r.children+=1===S.nodeType?S.outerHTML:S.data),e===r.staticCount-1&&(r.anchor=S),S=o(S);return v?o(S):S}w();break;case Kn:S=v?g(n,r,i,u,l,h):w();break;default:if(1&E)S=1!==C||r.type.toLowerCase()!==n.tagName.toLowerCase()?w():d(n,r,i,u,l,h);else if(6&E){r.slotScopeIds=l;const t=a(n);if(e(r,t,null,i,u,In(t),h),S=v?y(n):o(n),S&&kn(S)&&"teleport end"===S.data&&(S=o(S)),Ot(r)){let e;v?(e=dr(Kn),e.anchor=S?S.previousSibling:t.lastChild):e=3===n.nodeType?yr(""):dr("div"),e.el=n,r.component.subTree=e}}else 64&E?S=8!==C?w():r.type.hydrate(n,r,i,u,l,h,t,p):128&E&&(S=r.type.hydrate(n,r,i,u,In(a(n)),l,h,t,f))}return null!=_&&Cn(_,null,u,r),S},d=(t,e,n,s,o,a)=>{a=a||!!e.dynamicChildren;const{type:c,props:l,patchFlag:h,shapeFlag:f,dirs:d}=e,g="input"===c&&d||"option"===c;if(g||-1!==h){if(d&&_t(e,null,n,"created"),l)if(g||!a||48&h)for(const e in l)(g&&e.endsWith("value")||(0,i.F7)(e)&&!(0,i.Gg)(e))&&r(t,e,null,l[e],!1,void 0,n);else l.onClick&&r(t,"onClick",null,l.onClick,!1,void 0,n);let c;if((c=l&&l.onVnodeBeforeMount)&&Cr(c,n,e),d&&_t(e,null,n,"beforeMount"),((c=l&&l.onVnodeMounted)||d)&&ut((()=>{c&&Cr(c,n,e),d&&_t(e,null,n,"mounted")}),s),16&f&&(!l||!l.innerHTML&&!l.textContent)){let r=p(t.firstChild,e,t,n,s,o,a);while(r){Sn=!0;const t=r;r=r.nextSibling,u(t)}}else 8&f&&t.textContent!==e.children&&(Sn=!0,t.textContent=e.children)}return t.nextSibling},p=(t,e,r,i,s,o,a)=>{a=a||!!e.dynamicChildren;const u=e.children,c=u.length;for(let l=0;l<c;l++){const e=a?u[l]:u[l]=br(u[l]);if(t)t=f(t,e,i,s,o,a);else{if(e.type===Gn&&!e.children)continue;Sn=!0,n(null,e,r,null,i,s,In(r),o)}}return t},g=(t,e,n,r,i,s)=>{const{slotScopeIds:u}=e;u&&(i=i?i.concat(u):u);const h=a(t),f=p(o(t),e,h,n,r,i,s);return f&&kn(f)&&"]"===f.data?o(e.anchor=f):(Sn=!0,c(e.anchor=l("]"),h,f),f)},m=(t,e,r,i,s,c)=>{if(Sn=!0,e.el=null,c){const e=y(t);while(1){const n=o(t);if(!n||n===e)break;u(n)}}const l=o(t),h=a(t);return u(t),n(null,e,h,l,r,i,In(h),s),l},y=t=>{let e=0;while(t)if(t=o(t),t&&kn(t)&&("["===t.data&&e++,"]"===t.data)){if(0===e)return o(t);e--}return t};return[h,f]}function Rn(){}const xn=ut;function Dn(t){return Mn(t)}function Nn(t){return Mn(t,An)}function Mn(t,e){Rn();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:u,createText:c,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.dG,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,s=null,o=!1,a=null,u=!!e.dynamicChildren)=>{if(t===e)return;t&&!ar(t,e)&&(r=X(t),H(t,i,s,!0),t=null),-2===e.patchFlag&&(u=!1,e.dynamicChildren=null);const{type:c,ref:l,shapeFlag:h}=e;switch(c){case Gn:v(t,e,n,r);break;case Wn:w(t,e,n,r);break;case Qn:null==t&&b(e,n,r,o);break;case Kn:O(t,e,n,r,i,s,o,a,u);break;default:1&h?S(t,e,n,r,i,s,o,a,u):6&h?L(t,e,n,r,i,s,o,a,u):(64&h||128&h)&&c.process(t,e,n,r,i,s,o,a,u,tt)}null!=l&&i&&Cn(l,t&&t.ref,s,e||t,!e)},v=(t,e,n,r)=>{if(null==t)s(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},_=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},T=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},S=(t,e,n,r,i,s,o,a,u)=>{o=o||"svg"===e.type,null==t?A(e,n,r,i,s,o,a,u):D(t,e,i,s,o,a,u)},A=(t,e,n,r,o,c,l,h)=>{let d,p;const{type:g,props:m,shapeFlag:y,transition:v,dirs:w}=t;if(d=t.el=u(t.type,c,m&&m.is,m),8&y?f(d,t.children):16&y&&x(t.children,d,null,r,o,c&&"foreignObject"!==g,l,h),w&&_t(t,null,r,"created"),R(d,t,t.scopeId,l,r),m){for(const e in m)"value"===e||(0,i.Gg)(e)||a(d,e,null,m[e],c,t.children,r,o,J);"value"in m&&a(d,"value",null,m.value),(p=m.onVnodeBeforeMount)&&Cr(p,r,t)}w&&_t(t,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(d),s(d,e,n),((p=m&&m.onVnodeMounted)||b||w)&&xn((()=>{p&&Cr(p,r,t),b&&v.enter(d),w&&_t(t,null,r,"mounted")}),o)},R=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;R(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},x=(t,e,n,r,i,s,o,a,u=0)=>{for(let c=u;c<t.length;c++){const u=t[c]=a?_r(t[c]):br(t[c]);y(null,u,e,n,r,i,s,o,a)}},D=(t,e,n,r,s,o,u)=>{const c=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.kT,g=e.props||i.kT;let m;n&&On(n,!1),(m=g.onVnodeBeforeUpdate)&&Cr(m,n,e,t),d&&_t(e,t,n,"beforeUpdate"),n&&On(n,!0);const y=s&&"foreignObject"!==e.type;if(h?N(t.dynamicChildren,h,c,n,r,y,o):u||B(t,e,c,null,n,r,y,o,!1),l>0){if(16&l)M(c,e,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(c,"class",null,g.class,s),4&l&&a(c,"style",p.style,g.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],u=p[o],l=g[o];l===u&&"value"!==o||a(c,o,u,l,s,t.children,n,r,J)}}1&l&&t.children!==e.children&&f(c,e.children)}else u||null!=h||M(c,e,p,g,n,r,s);((m=g.onVnodeUpdated)||d)&&xn((()=>{m&&Cr(m,n,e,t),d&&_t(e,t,n,"updated")}),r)},N=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const u=t[a],c=e[a],l=u.el&&(u.type===Kn||!ar(u,c)||70&u.shapeFlag)?d(u.el):n;y(u,c,l,null,r,i,s,o,!0)}},M=(t,e,n,r,s,o,u)=>{if(n!==r){if(n!==i.kT)for(const c in n)(0,i.Gg)(c)||c in r||a(t,c,n[c],null,u,e.children,s,o,J);for(const c in r){if((0,i.Gg)(c))continue;const l=r[c],h=n[c];l!==h&&"value"!==c&&a(t,c,h,l,u,e.children,s,o,J)}"value"in r&&a(t,"value",n.value,r.value)}},O=(t,e,n,r,i,o,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(s(h,n,r),s(f,n,r),x(e.children,n,f,i,o,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(N(t.dynamicChildren,p,n,i,o,a,u),(null!=e.key||i&&e===i.subTree)&&Ln(t,e,!0)):B(t,e,n,f,i,o,a,u,l)},L=(t,e,n,r,i,s,o,a,u)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,u):P(e,n,r,i,s,o,u):F(t,e,u)},P=(t,e,n,r,i,s,o)=>{const a=t.component=kr(t,r,i);if(Ft(t)&&(a.ctx.renderer=tt),Ur(a),a.asyncDep){if(i&&i.registerDep(a,V),!t.el){const t=a.subTree=dr(Wn);w(null,t,e,n)}}else V(a,t,e,n,i,s,o)},F=(t,e,n)=>{const r=e.component=t.component;if(Q(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,e,n);r.next=e,C(r.update),r.update()}else e.el=t.el,r.vnode=e},V=(t,e,n,s,o,a,u)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:c,vnode:l}=t,h=n;0,On(t,!1),n?(n.el=l.el,U(t,n,u)):n=l,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Cr(e,c,n,l),On(t,!0);const f=z(t);0;const p=t.subTree;t.subTree=f,y(p,f,d(p.el),X(p),t,o,a),n.el=f.el,null===h&&Y(t,f.el),s&&xn(s,o),(e=n.props&&n.props.onVnodeUpdated)&&xn((()=>Cr(e,c,n,l)),o)}else{let r;const{el:u,props:c}=e,{bm:l,m:h,parent:f}=t,d=Ot(e);if(On(t,!1),l&&(0,i.ir)(l),!d&&(r=c&&c.onVnodeBeforeMount)&&Cr(r,f,e),On(t,!0),u&&nt){const n=()=>{t.subTree=z(t),nt(u,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=z(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&xn(h,o),!d&&(r=c&&c.onVnodeMounted)){const t=e;xn((()=>Cr(r,f,t)),o)}(256&e.shapeFlag||f&&Ot(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&xn(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.qq(c,(()=>E(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,On(t,!0),h()},U=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,cn(t,e.props,i,n),Tn(t,e.children,n),(0,r.Jd)(),I(),(0,r.lk)()},B=(t,e,n,r,i,s,o,a,u=!1)=>{const c=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void q(c,h,n,r,i,s,o,a,u);if(256&d)return void j(c,h,n,r,i,s,o,a,u)}8&p?(16&l&&J(c,i,s),h!==c&&f(n,h)):16&l?16&p?q(c,h,n,r,i,s,o,a,u):J(c,i,s,!0):(8&l&&f(n,""),16&p&&x(h,n,r,i,s,o,a,u))},j=(t,e,n,r,s,o,a,u,c)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=c?_r(e[d]):br(e[d]);y(t[d],r,n,null,s,o,a,u,c)}l>h?J(t,s,o,!0,!1,f):x(e,n,r,s,o,a,u,c,f)},q=(t,e,n,r,s,o,a,u,c)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=c?_r(e[l]):br(e[l]);if(!ar(r,i))break;y(r,i,n,null,s,o,a,u,c),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=c?_r(e[d]):br(e[d]);if(!ar(r,i))break;y(r,i,n,null,s,o,a,u,c),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)y(null,e[l]=c?_r(e[l]):br(e[l]),n,i,s,o,a,u,c),l++}}else if(l>d)while(l<=f)H(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=c?_r(e[l]):br(e[l]);null!=t.key&&m.set(t.key,l)}let v,w=0;const b=d-g+1;let _=!1,E=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=b){H(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&ar(r,e[v])){i=v;break}void 0===i?H(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:_=!0,y(r,e[i],n,null,s,o,a,u,c),w++)}const C=_?Pn(T):i.Z6;for(v=C.length-1,l=b-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?y(null,i,n,f,s,o,a,u,c):_&&(v<0||l!==C[v]?$(i,n,f,2):v--)}}},$=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:u,children:c,shapeFlag:l}=t;if(6&l)return void $(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,tt);if(a===Kn){s(o,e,n);for(let t=0;t<c.length;t++)$(c[t],e,n,r);return void s(t.anchor,e,n)}if(a===Qn)return void _(t,e,n);const h=2!==r&&1&l&&u;if(h)if(0===r)u.beforeEnter(o),s(o,e,n),xn((()=>u.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=u,a=()=>s(o,e,n),c=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,e,n)},H=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:u,dynamicChildren:c,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&Cn(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!Ot(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&Cr(g,e,t),6&l)W(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&_t(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,tt,r):c&&(s!==Kn||h>0&&64&h)?J(c,e,n,!1,!0):(s===Kn&&384&h||!i&&16&l)&&J(u,e,n),r&&K(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&xn((()=>{g&&Cr(g,e,t),d&&_t(t,null,e,"unmounted")}),n)},K=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Kn)return void G(n,r);if(e===Qn)return void T(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},G=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},W=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:u}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,H(a,t,e,n)),u&&xn(u,e),xn((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)H(t[o],e,n,r,i)},X=t=>6&t.shapeFlag?X(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),Z=(t,e,n)=>{null==t?e._vnode&&H(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),I(),k(),e._vnode=t},tt={p:y,um:H,m:$,r:K,mt:P,mc:x,pc:B,pbc:N,n:X,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:Z,hydrate:et,createApp:nn(Z,et)}}function On({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ln(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=_r(s[i]),e.el=t.el),n||Ln(t,e)),e.type===Gn&&(e.el=t.el)}}function Pn(t){const e=t.slice(),n=[0];let r,i,s,o,a;const u=t.length;for(r=0;r<u;r++){const u=t[r];if(0!==u){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Fn=t=>t.__isTeleport,Vn=t=>t&&(t.disabled||""===t.disabled),Un=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,Bn=(t,e)=>{const n=t&&t.to;if((0,i.HD)(n)){if(e){const t=e(n);return t}return null}return n},jn={__isTeleport:!0,process(t,e,n,r,i,s,o,a,u,c){const{mc:l,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:g,createComment:m}}=c,y=Vn(e.props);let{shapeFlag:v,children:w,dynamicChildren:b}=e;if(null==t){const t=e.el=g(""),c=e.anchor=g("");d(t,n,r),d(c,n,r);const h=e.target=Bn(e.props,p),f=e.targetAnchor=g("");h&&(d(f,h),o=o||Un(h));const m=(t,e)=>{16&v&&l(w,t,e,i,s,o,a,u)};y?m(n,c):h&&m(h,f)}else{e.el=t.el;const r=e.anchor=t.anchor,l=e.target=t.target,d=e.targetAnchor=t.targetAnchor,g=Vn(t.props),m=g?n:l,v=g?r:d;if(o=o||Un(l),b?(f(t.dynamicChildren,b,m,i,s,o,a),Ln(t,e,!0)):u||h(t,e,m,v,i,s,o,a,!1),y)g||qn(e,n,r,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=Bn(e.props,p);t&&qn(e,t,null,c,0)}else g&&qn(e,l,d,c,1)}zn(e)},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:u,anchor:c,targetAnchor:l,target:h,props:f}=t;if(h&&s(l),(o||!Vn(f))&&(s(c),16&a))for(let d=0;d<u.length;d++){const t=u[d];i(t,e,n,!0,!!t.dynamicChildren)}},move:qn,hydrate:$n};function qn(t,e,n,{o:{insert:r},m:i},s=2){0===s&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:u,children:c,props:l}=t,h=2===s;if(h&&r(o,e,n),(!h||Vn(l))&&16&u)for(let f=0;f<c.length;f++)i(c[f],e,n,2);h&&r(a,e,n)}function $n(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:u}},c){const l=e.target=Bn(e.props,u);if(l){const u=l._lpa||l.firstChild;if(16&e.shapeFlag)if(Vn(e.props))e.anchor=c(o(t),e,a(t),n,r,i,s),e.targetAnchor=u;else{e.anchor=o(t);let a=u;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){e.targetAnchor=a,l._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(u,e,l,n,r,i,s)}zn(e)}return e.anchor&&o(e.anchor)}const Hn=jn;function zn(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;while(n!==t.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Kn=Symbol.for("v-fgt"),Gn=Symbol.for("v-txt"),Wn=Symbol.for("v-cmt"),Qn=Symbol.for("v-stc"),Jn=[];let Yn=null;function Xn(t=!1){Jn.push(Yn=t?null:[])}function Zn(){Jn.pop(),Yn=Jn[Jn.length-1]||null}let tr,er=1;function nr(t){er+=t}function rr(t){return t.dynamicChildren=er>0?Yn||i.Z6:null,Zn(),er>0&&Yn&&Yn.push(t),t}function ir(t,e,n,r,i,s){return rr(fr(t,e,n,r,i,s,!0))}function sr(t,e,n,r,i){return rr(dr(t,e,n,r,i,!0))}function or(t){return!!t&&!0===t.__v_isVNode}function ar(t,e){return t.type===e.type&&t.key===e.key}function ur(t){tr=t}const cr="__vInternal",lr=({key:t})=>null!=t?t:null,hr=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:V,r:t,k:e,f:!!n}:t:null);function fr(t,e=null,n=null,r=0,s=null,o=(t===Kn?0:1),a=!1,u=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lr(e),ref:e&&hr(e),scopeId:U,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:V};return u?(Er(c,n),128&o&&t.normalize(c)):n&&(c.shapeFlag|=(0,i.HD)(n)?8:16),er>0&&!a&&Yn&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Yn.push(c),c}const dr=pr;function pr(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==ue||(t=Wn),or(t)){const r=mr(t,e,!0);return n&&Er(r,n),er>0&&!a&&Yn&&(6&r.shapeFlag?Yn[Yn.indexOf(t)]=r:Yn.push(r)),r.patchFlag|=-2,r}if(Qr(t)&&(t=t.__vccOpts),e){e=gr(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const u=(0,i.HD)(t)?1:X(t)?128:Fn(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return fr(t,e,n,s,o,u,a,!0)}function gr(t){return t?(0,r.X3)(t)||cr in t?(0,i.l7)({},t):t:null}function mr(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,u=e?Tr(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&lr(u),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(hr(e)):[s,hr(e)]:hr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Kn?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mr(t.ssContent),ssFallback:t.ssFallback&&mr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c}function yr(t=" ",e=0){return dr(Gn,null,t,e)}function vr(t,e){const n=dr(Qn,null,t);return n.staticCount=e,n}function wr(t="",e=!1){return e?(Xn(),sr(Wn,null,t)):dr(Wn,null,t)}function br(t){return null==t||"boolean"===typeof t?dr(Wn):(0,i.kJ)(t)?dr(Kn,null,t.slice()):"object"===typeof t?_r(t):dr(Gn,null,String(t))}function _r(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:mr(t)}function Er(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),Er(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||cr in e?3===r&&V&&(1===V.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=V}}else(0,i.mf)(e)?(e={default:e,_ctx:V},n=32):(e=String(e),64&r?(n=16,e=[yr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Tr(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function Cr(t,e,n,r=null){u(t,e,7,[n,r])}const Sr=tn();let Ir=0;function kr(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||Sr,a={uid:Ir++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fn(s,o),emitsOptions:P(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=L.bind(null,a),t.ce&&t.ce(a),a}let Ar=null;const Rr=()=>Ar||V;let xr,Dr,Nr="__VUE_INSTANCE_SETTERS__";(Dr=(0,i.E9)()[Nr])||(Dr=(0,i.E9)()[Nr]=[]),Dr.push((t=>Ar=t)),xr=t=>{Dr.length>1?Dr.forEach((e=>e(t))):Dr[0](t)};const Mr=t=>{xr(t),t.scope.on()},Or=()=>{Ar&&Ar.scope.off(),xr(null)};function Lr(t){return 4&t.vnode.shapeFlag}let Pr,Fr,Vr=!1;function Ur(t,e=!1){Vr=e;const{props:n,children:r}=t.vnode,i=Lr(t);un(t,n,i,e),En(t,r);const s=i?Br(t,e):void 0;return Vr=!1,s}function Br(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,_e));const{setup:s}=n;if(s){const n=t.setupContext=s.length>1?Kr(t):null;Mr(t),(0,r.Jd)();const o=a(s,t,0,[t.props,n]);if((0,r.lk)(),Or(),(0,i.tI)(o)){if(o.then(Or,Or),e)return o.then((n=>{jr(t,n,e)})).catch((e=>{c(e,t,0)}));t.asyncDep=o}else jr(t,o,e)}else Hr(t,e)}function jr(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Hr(t,n)}function qr(t){Pr=t,Fr=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Ee))}}const $r=()=>!Pr;function Hr(t,e,n){const s=t.type;if(!t.render){if(!e&&Pr&&!s.render){const e=s.template||He(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,u=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Pr(e,u)}}t.render=s.render||i.dG,Fr&&Fr(t)}Mr(t),(0,r.Jd)(),Be(t),(0,r.lk)(),Or()}function zr(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}}))}function Kr(t){const e=e=>{t.exposed=e||{}};return{get attrs(){return zr(t)},slots:t.slots,emit:t.emit,expose:e}}function Gr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in we?we[n](t):void 0},has(t,e){return e in t||e in we}}))}function Wr(t,e=!0){return(0,i.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Qr(t){return(0,i.mf)(t)&&"__vccOpts"in t}const Jr=(t,e)=>(0,r.Fl)(t,e,Vr);function Yr(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?or(e)?dr(t,null,[e]):dr(t,e):dr(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&or(n)&&(n=[n]),dr(t,e,n))}const Xr=Symbol.for("v-scx"),Zr=()=>{{const t=on(Xr);return t}};function ti(){return void 0}function ei(t,e,n,r){const i=n[r];if(i&&ni(i,t))return i;const s=e();return s.memo=t.slice(),n[r]=s}function ni(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if((0,i.aU)(n[r],e[r]))return!1;return er>0&&Yn&&Yn.push(t),!0}const ri="3.3.4",ii={createComponentInstance:kr,setupComponent:Ur,renderComponentRoot:z,setCurrentRenderingInstance:B,isVNode:or,normalizeVNode:br},si=ii,oi=null,ai=null},963:function(t,e,n){n.d(e,{$d:function(){return i.$d},$y:function(){return i.$y},Ah:function(){return O},B:function(){return i.B},BK:function(){return i.BK},Bj:function(){return i.Bj},Bz:function(){return i.Bz},C3:function(){return i.C3},C_:function(){return i.C_},Cn:function(){return i.Cn},D2:function(){return Mt},EB:function(){return i.EB},EM:function(){return i.EM},Eo:function(){return i.Eo},F4:function(){return i.F4},F8:function(){return Ot},FN:function(){return i.FN},Fl:function(){return i.Fl},G:function(){return i.G},G2:function(){return bt},Gn:function(){return i.Gn},HX:function(){return i.HX},HY:function(){return i.HY},Ho:function(){return i.Ho},IU:function(){return i.IU},JJ:function(){return i.JJ},Jd:function(){return i.Jd},KU:function(){return i.KU},Ko:function(){return i.Ko},LL:function(){return i.LL},MW:function(){return M},MX:function(){return i.MX},Mr:function(){return i.Mr},Nd:function(){return Wt},Nv:function(){return i.Nv},OT:function(){return i.OT},Ob:function(){return i.Ob},P$:function(){return i.P$},PG:function(){return i.PG},Q2:function(){return i.Q2},Q6:function(){return i.Q6},RC:function(){return i.RC},Rh:function(){return i.Rh},Rr:function(){return i.Rr},S3:function(){return i.S3},SK:function(){return i.Ah},SU:function(){return i.SU},Tn:function(){return i.Tn},U2:function(){return i.U2},Uc:function(){return i.Uc},Uk:function(){return i.Uk},Um:function(){return i.Um},Us:function(){return i.Us},Vf:function(){return i.Vf},Vh:function(){return i.Vh},W3:function(){return ct},WI:function(){return i.WI},WL:function(){return i.WL},WY:function(){return i.WY},Wl:function(){return i.Wl},Wm:function(){return i.Wm},Wu:function(){return i.Wu},X3:function(){return i.X3},XI:function(){return i.XI},Xl:function(){return i.Xl},Xn:function(){return i.Xn},Y1:function(){return i.Y1},Y3:function(){return i.Y3},Y8:function(){return i.Y8},YP:function(){return i.YP},YS:function(){return i.YS},YZ:function(){return St},Yq:function(){return i.Yq},Yu:function(){return i.Yu},ZB:function(){return $t},ZK:function(){return i.ZK},ZM:function(){return i.ZM},Zq:function(){return i.Zq},_:function(){return i._},_A:function(){return i._A},a2:function(){return P},aZ:function(){return i.aZ},b9:function(){return i.b9},bM:function(){return _t},bT:function(){return i.bT},bv:function(){return i.bv},cE:function(){return i.cE},d1:function(){return i.d1},dD:function(){return i.dD},dG:function(){return i.dG},dl:function(){return i.dl},dq:function(){return i.dq},e8:function(){return vt},ec:function(){return i.ec},eq:function(){return i.eq},f3:function(){return i.f3},fb:function(){return F},h:function(){return i.h},hR:function(){return i.hR},i8:function(){return i.i8},iD:function(){return i.iD},iH:function(){return i.iH},iM:function(){return Dt},ic:function(){return i.ic},j4:function(){return i.j4},j5:function(){return i.j5},kC:function(){return i.kC},kq:function(){return i.kq},l1:function(){return i.l1},lA:function(){return i.lA},lR:function(){return i.lR},m0:function(){return i.m0},mW:function(){return i.mW},mv:function(){return i.mv},mx:function(){return i.mx},n4:function(){return i.n4},nJ:function(){return i.nJ},nK:function(){return i.nK},nQ:function(){return i.nQ},nZ:function(){return i.nZ},nr:function(){return yt},oR:function(){return i.oR},of:function(){return i.of},p1:function(){return i.p1},qG:function(){return i.qG},qZ:function(){return i.qZ},qb:function(){return i.qb},qj:function(){return i.qj},qq:function(){return i.qq},ri:function(){return Ht},ry:function(){return i.ry},sT:function(){return i.sT},sY:function(){return qt},se:function(){return i.se},sj:function(){return V},sv:function(){return i.sv},tT:function(){return i.tT},uE:function(){return i.uE},uT:function(){return $},u_:function(){return i.u_},up:function(){return i.up},vl:function(){return i.vl},vr:function(){return zt},vs:function(){return i.vs},w5:function(){return i.w5},wF:function(){return i.wF},wg:function(){return i.wg},wy:function(){return i.wy},xv:function(){return i.xv},yT:function(){return i.yT},yX:function(){return i.yX},yb:function(){return i.MW},zw:function(){return i.zw}});var r=n(577),i=n(252),s=n(262);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,u=a&&a.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?a.createElementNS(o,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{u.innerHTML=r?`<svg>${t}</svg>`:t;const i=u.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h(t,e,n){const i=t.style,s=(0,r.HD)(n);if(n&&!s){if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&d(i,t,"");for(const t in n)d(i,t,n[t])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const f=/\s*!important$/;function d(t,e,n){if((0,r.kJ)(n))n.forEach((n=>d(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=m(t,e);f.test(n)?t.setProperty((0,r.rs)(i),n.replace(f,""),"important"):t[i]=n}}const p=["Webkit","Moz","ms"],g={};function m(t,e){const n=g[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return g[e]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in t)return g[e]=n}return e}const y="http://www.w3.org/1999/xlink";function v(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(y,e.slice(6,e.length)):t.setAttributeNS(y,e,n);else{const i=(0,r.Pq)(e);null==n||i&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function w(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);const u=t.tagName;if("value"===e&&"PROGRESS"!==u&&!u.includes("-")){t._value=n;const r="OPTION"===u?t.getAttribute("value"):t.value,i=null==n?"":n;return r!==i&&(t.value=i),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{t[e]=n}catch(l){0}c&&t.removeAttribute(e)}function b(t,e,n,r){t.addEventListener(e,n,r)}function _(t,e,n,r){t.removeEventListener(e,n,r)}function E(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=C(e);if(r){const o=s[e]=A(r,i);b(t,n,o,a)}else o&&(_(t,n,o,a),s[e]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function C(t){let e;if(T.test(t)){let n;e={};while(n=t.match(T))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.rs)(t.slice(2));return[n,e]}let S=0;const I=Promise.resolve(),k=()=>S||(I.then((()=>S=0)),S=Date.now());function A(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,i.$d)(R(t,n.value),e,5,[t])};return n.value=t,n.attached=k(),n}function R(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const x=/^on[a-z]/,D=(t,e,n,i,s=!1,o,a,u,c)=>{"class"===e?l(t,i,s):"style"===e?h(t,n,i):(0,r.F7)(e)?(0,r.tR)(e)||E(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):N(t,e,i,s))?w(t,e,i,o,a,u,c):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),v(t,e,i,s))};function N(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&x.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!x.test(e)||!(0,r.HD)(n))&&e in t))))}function M(t,e){const n=(0,i.aZ)(t);class r extends P{constructor(t){super(n,t,e)}}return r.def=n,r}const O=t=>M(t,$t),L="undefined"!==typeof HTMLElement?HTMLElement:class{};class P extends L{constructor(t,e={},n){super(),this._def=t,this._props=e,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,(0,i.Y3)((()=>{this._connected||(qt(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);new MutationObserver((t=>{for(const e of t)this._setAttr(e.attributeName)})).observe(this,{attributes:!0});const t=(t,e=!1)=>{const{props:n,styles:i}=t;let s;if(n&&!(0,r.kJ)(n))for(const o in n){const t=n[o];(t===Number||t&&t.type===Number)&&(o in this._props&&(this._props[o]=(0,r.He)(this._props[o])),(s||(s=Object.create(null)))[(0,r._A)(o)]=!0)}this._numberProps=s,e&&this._resolveProps(t),this._applyStyles(i),this._update()},e=this._def.__asyncLoader;e?e().then((e=>t(e,!0))):t(this._def)}_resolveProps(t){const{props:e}=t,n=(0,r.kJ)(e)?e:Object.keys(e||{});for(const r of Object.keys(this))"_"!==r[0]&&n.includes(r)&&this._setProp(r,this[r],!0,!1);for(const i of n.map(r._A))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(t){this._setProp(i,t)}})}_setAttr(t){let e=this.getAttribute(t);const n=(0,r._A)(t);this._numberProps&&this._numberProps[n]&&(e=(0,r.He)(e)),this._setProp(n,e,!1)}_getProp(t){return this._props[t]}_setProp(t,e,n=!0,i=!0){e!==this._props[t]&&(this._props[t]=e,i&&this._instance&&this._update(),n&&(!0===e?this.setAttribute((0,r.rs)(t),""):"string"===typeof e||"number"===typeof e?this.setAttribute((0,r.rs)(t),e+""):e||this.removeAttribute((0,r.rs)(t))))}_update(){qt(this._createVNode(),this.shadowRoot)}_createVNode(){const t=(0,i.Wm)(this._def,(0,r.l7)({},this._props));return this._instance||(t.ce=t=>{this._instance=t,t.isCE=!0;const e=(t,e)=>{this.dispatchEvent(new CustomEvent(t,{detail:e}))};t.emit=(t,...n)=>{e(t,n),(0,r.rs)(t)!==t&&e((0,r.rs)(t),n)};let n=this;while(n=n&&(n.parentNode||n.host))if(n instanceof P){t.parent=n._instance,t.provides=n._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach((t=>{const e=document.createElement("style");e.textContent=t,this.shadowRoot.appendChild(e)}))}}function F(t="$style"){{const e=(0,i.FN)();if(!e)return r.kT;const n=e.type.__cssModules;if(!n)return r.kT;const s=n[t];return s||r.kT}}function V(t){const e=(0,i.FN)();if(!e)return;const n=e.ut=(n=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach((t=>B(t,n)))},r=()=>{const r=t(e.proxy);U(e.subTree,r),n(r)};(0,i.Rh)(r),(0,i.bv)((()=>{const t=new MutationObserver(r);t.observe(e.subTree.el.parentNode,{childList:!0}),(0,i.Ah)((()=>t.disconnect()))}))}function U(t,e){if(128&t.shapeFlag){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{U(n.activeBranch,e)}))}while(t.component)t=t.component.subTree;if(1&t.shapeFlag&&t.el)B(t.el,e);else if(t.type===i.HY)t.children.forEach((t=>U(t,e)));else if(t.type===i.qG){let{el:n,anchor:r}=t;while(n){if(B(n,e),n===r)break;n=n.nextSibling}}}function B(t,e){if(1===t.nodeType){const n=t.style;for(const t in e)n.setProperty(`--${t}`,e[t])}}const j="transition",q="animation",$=(t,{slots:e})=>(0,i.h)(i.P$,W(t),e);$.displayName="Transition";const H={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},z=$.props=(0,r.l7)({},i.nJ,H),K=(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},G=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function W(t){const e={};for(const r in t)r in H||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:u=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:l=a,appearToClass:h=u,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=Q(s),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:E,onBeforeAppear:T=v,onAppear:C=w,onAppearCancelled:S=b}=e,I=(t,e,n)=>{X(t,e?h:u),X(t,e?l:a),n&&n()},k=(t,e)=>{t._isLeaving=!1,X(t,f),X(t,p),X(t,d),e&&e()},A=t=>(e,n)=>{const r=t?C:w,s=()=>I(e,t,n);K(r,[e,s]),Z((()=>{X(e,t?c:o),Y(e,t?h:u),G(r)||et(e,i,m,s)}))};return(0,r.l7)(e,{onBeforeEnter(t){K(v,[t]),Y(t,o),Y(t,a)},onBeforeAppear(t){K(T,[t]),Y(t,c),Y(t,l)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>k(t,e);Y(t,f),st(),Y(t,d),Z((()=>{t._isLeaving&&(X(t,f),Y(t,p),G(_)||et(t,i,y,n))})),K(_,[t,n])},onEnterCancelled(t){I(t,!1),K(b,[t])},onAppearCancelled(t){I(t,!0),K(S,[t])},onLeaveCancelled(t){k(t),K(E,[t])}})}function Q(t){if(null==t)return null;if((0,r.Kn)(t))return[J(t.enter),J(t.leave)];{const e=J(t);return[e,e]}}function J(t){const e=(0,r.He)(t);return e}function Y(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function X(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Z(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let tt=0;function et(t,e,n,r){const i=t._endId=++tt,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:u}=nt(t,e);if(!o)return r();const c=o+"end";let l=0;const h=()=>{t.removeEventListener(c,f),s()},f=e=>{e.target===t&&++l>=u&&h()};setTimeout((()=>{l<u&&h()}),a+1),t.addEventListener(c,f)}function nt(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${j}Delay`),s=r(`${j}Duration`),o=rt(i,s),a=r(`${q}Delay`),u=r(`${q}Duration`),c=rt(a,u);let l=null,h=0,f=0;e===j?o>0&&(l=j,h=o,f=s.length):e===q?c>0&&(l=q,h=c,f=u.length):(h=Math.max(o,c),l=h>0?o>c?j:q:null,f=l?l===j?s.length:u.length:0);const d=l===j&&/\b(transform|all)(,|$)/.test(r(`${j}Property`).toString());return{type:l,timeout:h,propCount:f,hasTransform:d}}function rt(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>it(e)+it(t[n]))))}function it(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function st(){return document.body.offsetHeight}const ot=new WeakMap,at=new WeakMap,ut={name:"TransitionGroup",props:(0,r.l7)({},z,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!dt(o[0].el,n.vnode.el,e))return;o.forEach(lt),o.forEach(ht);const r=o.filter(ft);st(),r.forEach((t=>{const n=t.el,r=n.style;Y(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,X(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const u=(0,s.IU)(t),c=W(u);let l=u.tag||i.HY;o=a,a=e.default?(0,i.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,i.nK)(e,(0,i.U2)(e,c,r,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,i.nK)(e,(0,i.U2)(e,c,r,n)),ot.set(e,e.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}};ut.props;const ct=ut;function lt(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function ht(t){at.set(t,t.el.getBoundingClientRect())}function ft(t){const e=ot.get(t),n=at.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function dt(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const i=1===e.nodeType?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=nt(r);return i.removeChild(r),s}const pt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function gt(t){t.target.composing=!0}function mt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=pt(s);const o=i||s.props&&"number"===s.props.type;b(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),o&&(i=(0,r.h5)(i)),t._assign(i)})),n&&b(t,"change",(()=>{t.value=t.value.trim()})),e||(b(t,"compositionstart",gt),b(t,"compositionend",mt),b(t,"change",mt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=pt(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,r.h5)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}},vt={deep:!0,created(t,e,n){t._assign=pt(n),b(t,"change",(()=>{const e=t._modelValue,n=Tt(t),i=t.checked,s=t._assign;if((0,r.kJ)(e)){const t=(0,r.hq)(e,n),o=-1!==t;if(i&&!o)s(e.concat(n));else if(!i&&o){const n=[...e];n.splice(t,1),s(n)}}else if((0,r.DM)(e)){const t=new Set(e);i?t.add(n):t.delete(n),s(t)}else s(Ct(t,i))}))},mounted:wt,beforeUpdate(t,e,n){t._assign=pt(n),wt(t,e,n)}};function wt(t,{value:e,oldValue:n},i){t._modelValue=e,(0,r.kJ)(e)?t.checked=(0,r.hq)(e,i.props.value)>-1:(0,r.DM)(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=(0,r.WV)(e,Ct(t,!0)))}const bt={created(t,{value:e},n){t.checked=(0,r.WV)(e,n.props.value),t._assign=pt(n),b(t,"change",(()=>{t._assign(Tt(t))}))},beforeUpdate(t,{value:e,oldValue:n},i){t._assign=pt(i),e!==n&&(t.checked=(0,r.WV)(e,i.props.value))}},_t={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=(0,r.DM)(e);b(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,r.h5)(Tt(t)):Tt(t)));t._assign(t.multiple?s?new Set(e):e:e[0])})),t._assign=pt(i)},mounted(t,{value:e}){Et(t,e)},beforeUpdate(t,e,n){t._assign=pt(n)},updated(t,{value:e}){Et(t,e)}};function Et(t,e){const n=t.multiple;if(!n||(0,r.kJ)(e)||(0,r.DM)(e)){for(let i=0,s=t.options.length;i<s;i++){const s=t.options[i],o=Tt(s);if(n)(0,r.kJ)(e)?s.selected=(0,r.hq)(e,o)>-1:s.selected=e.has(o);else if((0,r.WV)(Tt(s),e))return void(t.selectedIndex!==i&&(t.selectedIndex=i))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function Tt(t){return"_value"in t?t._value:t.value}function Ct(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const St={created(t,e,n){kt(t,e,n,null,"created")},mounted(t,e,n){kt(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){kt(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){kt(t,e,n,r,"updated")}};function It(t,e){switch(t){case"SELECT":return _t;case"TEXTAREA":return yt;default:switch(e){case"checkbox":return vt;case"radio":return bt;default:return yt}}}function kt(t,e,n,r,i){const s=It(t.tagName,n.props&&n.props.type),o=s[i];o&&o(t,e,n,r)}function At(){yt.getSSRProps=({value:t})=>({value:t}),bt.getSSRProps=({value:t},e)=>{if(e.props&&(0,r.WV)(e.props.value,t))return{checked:!0}},vt.getSSRProps=({value:t},e)=>{if((0,r.kJ)(t)){if(e.props&&(0,r.hq)(t,e.props.value)>-1)return{checked:!0}}else if((0,r.DM)(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},St.getSSRProps=(t,e)=>{if("string"!==typeof e.type)return;const n=It(e.type.toUpperCase(),e.props&&e.props.type);return n.getSSRProps?n.getSSRProps(t,e):void 0}}const Rt=["ctrl","shift","alt","meta"],xt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Rt.some((n=>t[`${n}Key`]&&!e.includes(n)))},Dt=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=xt[e[t]];if(r&&r(n,e))return}return t(n,...r)},Nt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Mt=(t,e)=>n=>{if(!("key"in n))return;const i=(0,r.rs)(n.key);return e.some((t=>t===i||Nt[t]===i))?t(n):void 0},Ot={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):Lt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),Lt(t,!0),r.enter(t)):r.leave(t,(()=>{Lt(t,!1)})):Lt(t,e))},beforeUnmount(t,{value:e}){Lt(t,e)}};function Lt(t,e){t.style.display=e?t._vod:"none"}function Pt(){Ot.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Ft=(0,r.l7)({patchProp:D},c);let Vt,Ut=!1;function Bt(){return Vt||(Vt=(0,i.Us)(Ft))}function jt(){return Vt=Ut?Vt:(0,i.Eo)(Ft),Ut=!0,Vt}const qt=(...t)=>{Bt().render(...t)},$t=(...t)=>{jt().hydrate(...t)},Ht=(...t)=>{const e=Bt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=Kt(t);if(!i)return;const s=e._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},zt=(...t)=>{const e=jt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const e=Kt(t);if(e)return n(e,!0,e instanceof SVGElement)},e};function Kt(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}let Gt=!1;const Wt=()=>{Gt||(Gt=!0,At(),Pt())}},577:function(t,e,n){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return X},DM:function(){return y},E9:function(){return H},F7:function(){return c},Gg:function(){return x},HD:function(){return _},He:function(){return q},Kj:function(){return w},Kn:function(){return T},NO:function(){return a},Nj:function(){return B},Od:function(){return f},PO:function(){return A},Pq:function(){return et},RI:function(){return p},S0:function(){return R},W7:function(){return k},WV:function(){return it},Z6:function(){return s},_A:function(){return M},_N:function(){return m},aU:function(){return V},dG:function(){return o},e1:function(){return K},fY:function(){return r},h5:function(){return j},hR:function(){return F},hq:function(){return st},ir:function(){return U},j5:function(){return G},kC:function(){return P},kJ:function(){return g},kT:function(){return i},l7:function(){return h},mf:function(){return b},rs:function(){return L},tI:function(){return C},tR:function(){return l},vs:function(){return Z},yA:function(){return nt},yk:function(){return E},zw:function(){return ot}});const i={},s=[],o=()=>{},a=()=>!1,u=/^on[^a-z]/,c=t=>u.test(t),l=t=>t.startsWith("onUpdate:"),h=Object.assign,f=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,p=(t,e)=>d.call(t,e),g=Array.isArray,m=t=>"[object Map]"===I(t),y=t=>"[object Set]"===I(t),v=t=>"[object Date]"===I(t),w=t=>"[object RegExp]"===I(t),b=t=>"function"===typeof t,_=t=>"string"===typeof t,E=t=>"symbol"===typeof t,T=t=>null!==t&&"object"===typeof t,C=t=>T(t)&&b(t.then)&&b(t.catch),S=Object.prototype.toString,I=t=>S.call(t),k=t=>I(t).slice(8,-1),A=t=>"[object Object]"===I(t),R=t=>_(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,x=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),D=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},N=/-(\w)/g,M=D((t=>t.replace(N,((t,e)=>e?e.toUpperCase():"")))),O=/\B([A-Z])/g,L=D((t=>t.replace(O,"-$1").toLowerCase())),P=D((t=>t.charAt(0).toUpperCase()+t.slice(1))),F=D((t=>t?`on${P(t)}`:"")),V=(t,e)=>!Object.is(t,e),U=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},B=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},q=t=>{const e=_(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const H=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",K=r(z);function G(t){if(g(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=_(r)?Y(r):G(r);if(i)for(const t in i)e[t]=i[t]}return e}return _(t)||T(t)?t:void 0}const W=/;(?![^(]*\))/g,Q=/:([^]+)/,J=/\/\*[^]*?\*\//g;function Y(t){const e={};return t.replace(J,"").split(W).forEach((t=>{if(t){const n=t.split(Q);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function X(t){let e="";if(_(t))e=t;else if(g(t))for(let n=0;n<t.length;n++){const r=X(t[n]);r&&(e+=r+" ")}else if(T(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Z(t){if(!t)return null;let{class:e,style:n}=t;return e&&!_(e)&&(t.class=X(e)),n&&(t.style=G(n)),t}const tt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",et=r(tt);function nt(t){return!!t||""===t}function rt(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=it(t[r],e[r]);return n}function it(t,e){if(t===e)return!0;let n=v(t),r=v(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=E(t),r=E(e),n||r)return t===e;if(n=g(t),r=g(e),n||r)return!(!n||!r)&&rt(t,e);if(n=T(t),r=T(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!it(t[n],e[n]))return!1}}return String(t)===String(e)}function st(t,e){return t.findIndex((t=>it(t,e)))}const ot=t=>_(t)?t:null==t?"":g(t)||T(t)&&(t.toString===S||!b(t.toString))?JSON.stringify(t,at,2):String(t),at=(t,e)=>e&&e.__v_isRef?at(t,e.value):m(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:y(e)?{[`Set(${e.size})`]:[...e.values()]}:!T(e)||g(e)||A(e)?e:String(e)},567:function(t,e,n){n.r(e)},744:function(t,e){e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},305:function(t,e,n){var r=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r};e.__esModule=!0;var i=n(812),s=n(574);e["default"]=i.defineComponent({name:"DraggableContainer",props:{disabled:{type:Boolean,default:!1},adsorbParent:{type:Boolean,default:!0},adsorbCols:{type:Array,default:null},adsorbRows:{type:Array,default:null},referenceLineVisible:{type:Boolean,default:!0},referenceLineColor:{type:String,default:"#f00"}},setup:function(t){var e=i.reactive({}),n=function(t,n){e[t]=n},r=function(t){var n=Object.assign({},e);return t&&delete n[t],n},o=i.reactive({matchedLine:null}),a=i.computed((function(){return o.matchedLine&&o.matchedLine.row||[]})),u=i.computed((function(){return o.matchedLine&&o.matchedLine.col||[]})),c=function(t){o.matchedLine=t};return i.provide("identity",s.IDENTITY),i.provide("updatePosition",n),i.provide("getPositionStore",r),i.provide("setMatchedLine",c),i.provide("disabled",i.toRef(t,"disabled")),i.provide("adsorbParent",i.toRef(t,"adsorbParent")),i.provide("adsorbCols",t.adsorbCols||[]),i.provide("adsorbRows",t.adsorbRows||[]),{matchedRows:a,matchedCols:u}},methods:{renderReferenceLine:function(){var t=this;return this.referenceLineVisible?r(this.matchedCols.map((function(e){return i.h("div",{style:{width:"0",height:"100%",top:"0",left:e+"px",borderLeft:"1px dashed "+t.referenceLineColor,position:"absolute"}})})),this.matchedRows.map((function(e){return i.h("div",{style:{width:"100%",height:"0",left:"0",top:e+"px",borderTop:"1px dashed "+t.referenceLineColor,position:"absolute"}})}))):[]}},render:function(){return i.h("div",{style:{width:"100%",height:"100%",position:"relative"}},r([this.$slots["default"]&&this.$slots["default"]()],this.renderReferenceLine()))}})},724:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r};e.__esModule=!0,e.ALL_HANDLES=void 0;var s=n(812),o=n(742);n(567);var a=n(574);e.ALL_HANDLES=["tl","tm","tr","ml","mr","bl","bm","br"];var u={initW:{type:Number,default:null},initH:{type:Number,default:null},w:{type:Number,default:0},h:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},disabledX:{type:Boolean,default:!1},disabledY:{type:Boolean,default:!1},disabledW:{type:Boolean,default:!1},disabledH:{type:Boolean,default:!1},minW:{type:Number,default:20},minH:{type:Number,default:20},active:{type:Boolean,default:!1},parent:{type:Boolean,default:!1},handles:{type:Array,default:e.ALL_HANDLES,validator:function(t){return a.filterHandles(t).length===t.length}},classNameDraggable:{type:String,default:"draggable"},classNameResizable:{type:String,default:"resizable"},classNameDragging:{type:String,default:"dragging"},classNameResizing:{type:String,default:"resizing"},classNameActive:{type:String,default:"active"},classNameHandle:{type:String,default:"handle"},lockAspectRatio:{type:Boolean,default:!1}},c=["activated","deactivated","drag-start","resize-start","dragging","resizing","drag-end","resize-end","update:w","update:h","update:x","update:y","update:active"],l=s.defineComponent({name:"Vue3DraggableResizable",props:u,emits:c,setup:function(t,e){var n=e.emit,i=o.initState(t,n),u=s.inject("identity",Symbol()),c=null;u===a.IDENTITY&&(c={updatePosition:s.inject("updatePosition"),getPositionStore:s.inject("getPositionStore"),disabled:s.inject("disabled"),adsorbParent:s.inject("adsorbParent"),adsorbCols:s.inject("adsorbCols"),adsorbRows:s.inject("adsorbRows"),setMatchedLine:s.inject("setMatchedLine")});var l=s.ref(),h=o.initParent(l),f=o.initLimitSizeAndMethods(t,h,i);o.initDraggableContainer(l,i,f,s.toRef(t,"draggable"),n,c,h);var d=o.initResizeHandle(i,f,h,t,n);return o.watchProps(t,f),r(r(r(r({containerRef:l,containerProvider:c},i),h),f),d)},computed:{style:function(){return{width:this.width+"px",height:this.height+"px",top:this.top+"px",left:this.left+"px"}},klass:function(){var t;return t={},t[this.classNameActive]=this.enable,t[this.classNameDragging]=this.dragging,t[this.classNameResizing]=this.resizing,t[this.classNameDraggable]=this.draggable,t[this.classNameResizable]=this.resizable,t}},mounted:function(){if(this.containerRef){this.containerRef.ondragstart=function(){return!1};var t=a.getElSize(this.containerRef),e=t.width,n=t.height;this.setWidth(null===this.initW?this.w||e:this.initW),this.setHeight(null===this.initH?this.h||n:this.initH),this.containerProvider&&this.containerProvider.updatePosition(this.id,{x:this.left,y:this.top,w:this.width,h:this.height})}},render:function(){var t=this;return s.h("div",{ref:"containerRef",class:["vdr-container",this.klass],style:this.style},i([this.$slots["default"]&&this.$slots["default"]()],this.handlesFiltered.map((function(e){return s.h("div",{class:["vdr-handle","vdr-handle-"+e,t.classNameHandle,t.classNameHandle+"-"+e],style:{display:t.enable?"block":"none"},onMousedown:function(n){return t.resizeHandleDown(n,e)},onTouchstart:function(n){return t.resizeHandleDown(n,e)}})}))))}});e["default"]=l},742:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};e.__esModule=!0,e.watchProps=e.initResizeHandle=e.initDraggableContainer=e.initLimitSizeAndMethods=e.initParent=e.initState=e.useState=void 0;var i=n(812),s=n(574);function o(t){var e=i.ref(t),n=function(t){return e.value=t,t};return[e,n]}function a(t,e){var n=o(t.initW),r=n[0],a=n[1],u=o(t.initH),c=u[0],l=u[1],h=o(t.x),f=h[0],d=h[1],p=o(t.y),g=p[0],m=p[1],y=o(t.active),v=y[0],w=y[1],b=o(!1),_=b[0],E=b[1],T=o(!1),C=T[0],S=T[1],I=o(""),k=I[0],A=I[1],R=o(1/0),x=R[0],D=R[1],N=o(1/0),M=N[0],O=N[1],L=o(t.minW),P=L[0],F=L[1],V=o(t.minH),U=V[0],B=V[1],j=i.computed((function(){return c.value/r.value}));return i.watch(r,(function(t){e("update:w",t)}),{immediate:!0}),i.watch(c,(function(t){e("update:h",t)}),{immediate:!0}),i.watch(g,(function(t){e("update:y",t)})),i.watch(f,(function(t){e("update:x",t)})),i.watch(v,(function(t,n){e("update:active",t),!n&&t?e("activated"):n&&!t&&e("deactivated")})),i.watch((function(){return t.active}),(function(t){w(t)})),{id:s.getId(),width:r,height:c,top:g,left:f,enable:v,dragging:_,resizing:C,resizingHandle:k,resizingMaxHeight:M,resizingMaxWidth:x,resizingMinWidth:P,resizingMinHeight:U,aspectRatio:j,setEnable:w,setDragging:E,setResizing:S,setResizingHandle:A,setResizingMaxHeight:O,setResizingMaxWidth:D,setResizingMinWidth:F,setResizingMinHeight:B,setWidth:function(t){return a(Math.floor(t))},setHeight:function(t){return l(Math.floor(t))},setTop:function(t){return m(Math.floor(t))},setLeft:function(t){return d(Math.floor(t))}}}function u(t){var e=i.ref(0),n=i.ref(0);return i.onMounted((function(){if(t.value&&t.value.parentElement){var r=s.getElSize(t.value.parentElement),i=r.width,o=r.height;e.value=i,n.value=o}})),{parentWidth:e,parentHeight:n}}function c(t,e,n){var s=n.width,o=n.height,a=n.left,u=n.top,c=n.resizingMaxWidth,l=n.resizingMaxHeight,h=n.resizingMinWidth,f=n.resizingMinHeight,d=n.setWidth,p=n.setHeight,g=n.setTop,m=n.setLeft,y=e.parentWidth,v=e.parentHeight,w={minWidth:i.computed((function(){return h.value})),minHeight:i.computed((function(){return f.value})),maxWidth:i.computed((function(){var e=1/0;return t.parent&&(e=Math.min(y.value,c.value)),e})),maxHeight:i.computed((function(){var e=1/0;return t.parent&&(e=Math.min(v.value,l.value)),e})),minLeft:i.computed((function(){return t.parent?0:-1/0})),minTop:i.computed((function(){return t.parent?0:-1/0})),maxLeft:i.computed((function(){return t.parent?y.value-s.value:1/0})),maxTop:i.computed((function(){return t.parent?v.value-o.value:1/0}))},b={setWidth:function(e){return t.disabledW?s.value:d(Math.min(w.maxWidth.value,Math.max(w.minWidth.value,e)))},setHeight:function(e){return t.disabledH?o.value:p(Math.min(w.maxHeight.value,Math.max(w.minHeight.value,e)))},setTop:function(e){return t.disabledY?u.value:g(Math.min(w.maxTop.value,Math.max(w.minTop.value,e)))},setLeft:function(e){return t.disabledX?a.value:m(Math.min(w.maxLeft.value,Math.max(w.minLeft.value,e)))}};return r(r({},w),b)}e.useState=o,e.initState=a,e.initParent=u,e.initLimitSizeAndMethods=c;var l=["mousedown","touchstart"],h=["mouseup","touchend"],f=["mousemove","touchmove"];function d(t){return"touches"in t?[t.touches[0].pageX,t.touches[0].pageY]:[t.pageX,t.pageY]}function p(t,e,n,r,o,a,u){var c=e.left,p=e.top,g=e.width,m=e.height,y=e.dragging,v=e.id,w=e.setDragging,b=e.setEnable,_=e.setResizing,E=e.setResizingHandle,T=n.setTop,C=n.setLeft,S=0,I=0,k=0,A=0,R=null,x=document.documentElement,D=function(e){var n,r=e.target;(null===(n=t.value)||void 0===n?void 0:n.contains(r))||(b(!1),w(!1),_(!1),E(""))},N=function(){w(!1),s.removeEvent(x,h,N),s.removeEvent(x,f,M),R=null,a&&(a.updatePosition(v,{x:c.value,y:p.value,w:g.value,h:m.value}),a.setMatchedLine(null))},M=function(e){if(e.preventDefault(),y.value&&t.value){var n=d(e),r=n[0],i=n[1],s=r-k,u=i-A,c=S+s,l=I+u;if(null!==R){var h={col:[c,c+g.value/2,c+g.value],row:[l,l+m.value/2,l+m.value]},f={row:h.row.map((function(t,e){var n=null;return Object.values(R.row).forEach((function(e){t>=e.min&&t<=e.max&&(n=e.value)})),null!==n&&(0===e?l=n:1===e?l=Math.floor(n-m.value/2):2===e&&(l=Math.floor(n-m.value))),n})).filter((function(t){return null!==t})),col:h.col.map((function(t,e){var n=null;return Object.values(R.col).forEach((function(e){t>=e.min&&t<=e.max&&(n=e.value)})),null!==n&&(0===e?c=n:1===e?c=Math.floor(n-g.value/2):2===e&&(c=Math.floor(n-g.value))),n})).filter((function(t){return null!==t}))};a.setMatchedLine(f)}o("dragging",{x:C(c),y:T(l)})}},O=function(t){r.value&&(w(!0),S=c.value,I=p.value,k=d(t)[0],A=d(t)[1],s.addEvent(x,f,M),s.addEvent(x,h,N),a&&!a.disabled.value&&(R=s.getReferenceLineMap(a,u,v)))};return i.watch(y,(function(t,e){!e&&t?(o("drag-start",{x:c.value,y:p.value}),b(!0),w(!0)):(o("drag-end",{x:c.value,y:p.value}),w(!1))})),i.onMounted((function(){var e=t.value;e&&(e.style.left=c+"px",e.style.top=p+"px",s.addEvent(x,l,D),s.addEvent(e,l,O))})),i.onUnmounted((function(){t.value&&(s.removeEvent(x,l,D),s.removeEvent(x,h,N),s.removeEvent(x,f,M))})),{containerRef:t}}function g(t,e,n,r,o){var a=e.setWidth,u=e.setHeight,c=e.setLeft,l=e.setTop,p=t.width,g=t.height,m=t.left,y=t.top,v=t.aspectRatio,w=t.setResizing,b=t.setResizingHandle,_=t.setResizingMaxWidth,E=t.setResizingMaxHeight,T=t.setResizingMinWidth,C=t.setResizingMinHeight,S=n.parentWidth,I=n.parentHeight,k=0,A=0,R=0,x=0,D=0,N=0,M=1,O="",L="",P=document.documentElement,F=function(t){t.preventDefault();var e=d(t),n=e[0],i=e[1],s=n-D,h=i-N,f=s,v=h;r.lockAspectRatio&&(s=Math.abs(s),h=s*M,(f<0||"m"===L&&v<0)&&(s=-s,h=-h)),"t"===O?(u(A-h),l(x-(g.value-A))):"b"===O&&u(A+h),"l"===L?(a(k-s),c(R-(p.value-k))):"r"===L&&a(k+s),o("resizing",{x:m.value,y:y.value,w:p.value,h:g.value})},V=function(){o("resize-end",{x:m.value,y:y.value,w:p.value,h:g.value}),b(""),w(!1),_(1/0),E(1/0),T(r.minW),C(r.minH),s.removeEvent(P,f,F),s.removeEvent(P,h,V)},U=function(t,e){if(r.resizable){t.stopPropagation(),b(e),w(!0),O=e[0],L=e[1],r.lockAspectRatio&&(["tl","tm","ml","bl"].includes(e)?(O="t",L="l"):(O="b",L="r"));var n=r.minH,i=r.minW;if(r.lockAspectRatio&&(n/i>v.value?i=n/v.value:n=i*v.value),T(i),C(n),r.parent){var a="t"===O?y.value+g.value:I.value-y.value,u="l"===L?m.value+p.value:S.value-m.value;r.lockAspectRatio&&(a/u<v.value?u=a/v.value:a=u*v.value),E(a),_(u)}k=p.value,A=g.value,R=m.value,x=y.value;var c=d(t);D=c[0],N=c[1],M=v.value,o("resize-start",{x:m.value,y:y.value,w:p.value,h:g.value}),s.addEvent(P,f,F),s.addEvent(P,h,V)}};i.onUnmounted((function(){s.removeEvent(P,h,V),s.removeEvent(P,f,F)}));var B=i.computed((function(){return r.resizable?s.filterHandles(r.handles):[]}));return{handlesFiltered:B,resizeHandleDown:U}}function m(t,e){var n=e.setWidth,r=e.setHeight,s=e.setLeft,o=e.setTop;i.watch((function(){return t.w}),(function(t){n(t)})),i.watch((function(){return t.h}),(function(t){r(t)})),i.watch((function(){return t.x}),(function(t){s(t)})),i.watch((function(){return t.y}),(function(t){o(t)}))}e.initDraggableContainer=p,e.initResizeHandle=g,e.watchProps=m},574:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};e.__esModule=!0,e.getReferenceLineMap=e.getId=e.filterHandles=e.removeEvent=e.addEvent=e.getElSize=e.IDENTITY=void 0;var i=n(724);function s(t){var e=window.getComputedStyle(t);return{width:parseFloat(e.getPropertyValue("width")),height:parseFloat(e.getPropertyValue("height"))}}function o(t){return function(e,n,r){e&&("string"===typeof n&&(n=[n]),n.forEach((function(n){return e[t](n,r,{passive:!1})})))}}function a(t){if(t&&t.length>0){var e=[];return t.forEach((function(t){i.ALL_HANDLES.includes(t)&&!e.includes(t)&&e.push(t)})),e}return[]}function u(){return String(Math.random()).substr(2)+String(Date.now())}function c(t,e,n){var i,s;if(t.disabled.value)return null;var o={row:[],col:[]},a=e.parentWidth,u=e.parentHeight;(i=o.row).push.apply(i,t.adsorbRows),(s=o.col).push.apply(s,t.adsorbCols),t.adsorbParent.value&&(o.row.push(0,u.value,u.value/2),o.col.push(0,a.value,a.value/2));var c=t.getPositionStore(n);Object.values(c).forEach((function(t){var e=t.x,n=t.y,r=t.w,i=t.h;o.row.push(n,n+i,n+i/2),o.col.push(e,e+r,e+r/2)}));var l={row:o.row.reduce((function(t,e){var n;return r(r({},t),(n={},n[e]={min:e-5,max:e+5,value:e},n))}),{}),col:o.col.reduce((function(t,e){var n;return r(r({},t),(n={},n[e]={min:e-5,max:e+5,value:e},n))}),{})};return l}e.IDENTITY=Symbol("Vue3DraggableResizable"),e.getElSize=s,e.addEvent=o("addEventListener"),e.removeEvent=o("removeEventListener"),e.filterHandles=a,e.getId=u,e.getReferenceLineMap=c},527:function(t,e,n){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]});e.__esModule=!0;var i=n(724),s=n(305);i["default"].install=function(t){return t.component(i["default"].name,i["default"]),t.component(s["default"].name,s["default"]),t};var o=n(305);r(e,o,"default","DraggableContainer"),e["default"]=i["default"]},812:function(t,e,n){n.r(e),n.d(e,{BaseTransition:function(){return r.P$},BaseTransitionPropsValidators:function(){return r.nJ},Comment:function(){return r.sv},EffectScope:function(){return r.Bj},Fragment:function(){return r.HY},KeepAlive:function(){return r.Ob},ReactiveEffect:function(){return r.qq},Static:function(){return r.qG},Suspense:function(){return r.n4},Teleport:function(){return r.lR},Text:function(){return r.xv},Transition:function(){return r.uT},TransitionGroup:function(){return r.W3},VueElement:function(){return r.a2},assertNumber:function(){return r.Wu},callWithAsyncErrorHandling:function(){return r.$d},callWithErrorHandling:function(){return r.KU},camelize:function(){return r._A},capitalize:function(){return r.kC},cloneVNode:function(){return r.Ho},compatUtils:function(){return r.ry},compile:function(){return i},computed:function(){return r.Fl},createApp:function(){return r.ri},createBlock:function(){return r.j4},createCommentVNode:function(){return r.kq},createElementBlock:function(){return r.iD},createElementVNode:function(){return r._},createHydrationRenderer:function(){return r.Eo},createPropsRestProxy:function(){return r.p1},createRenderer:function(){return r.Us},createSSRApp:function(){return r.vr},createSlots:function(){return r.Nv},createStaticVNode:function(){return r.uE},createTextVNode:function(){return r.Uk},createVNode:function(){return r.Wm},customRef:function(){return r.ZM},defineAsyncComponent:function(){return r.RC},defineComponent:function(){return r.aZ},defineCustomElement:function(){return r.MW},defineEmits:function(){return r.Bz},defineExpose:function(){return r.WY},defineModel:function(){return r.Gn},defineOptions:function(){return r.Yu},defineProps:function(){return r.yb},defineSSRCustomElement:function(){return r.Ah},defineSlots:function(){return r.Wl},devtools:function(){return r.mW},effect:function(){return r.cE},effectScope:function(){return r.B},getCurrentInstance:function(){return r.FN},getCurrentScope:function(){return r.nZ},getTransitionRawChildren:function(){return r.Q6},guardReactiveProps:function(){return r.F4},h:function(){return r.h},handleError:function(){return r.S3},hasInjectionContext:function(){return r.EM},hydrate:function(){return r.ZB},initCustomFormatter:function(){return r.Mr},initDirectivesForSSR:function(){return r.Nd},inject:function(){return r.f3},isMemoSame:function(){return r.nQ},isProxy:function(){return r.X3},isReactive:function(){return r.PG},isReadonly:function(){return r.$y},isRef:function(){return r.dq},isRuntimeOnly:function(){return r.of},isShallow:function(){return r.yT},isVNode:function(){return r.lA},markRaw:function(){return r.Xl},mergeDefaults:function(){return r.u_},mergeModels:function(){return r.Vf},mergeProps:function(){return r.dG},nextTick:function(){return r.Y3},normalizeClass:function(){return r.C_},normalizeProps:function(){return r.vs},normalizeStyle:function(){return r.j5},onActivated:function(){return r.dl},onBeforeMount:function(){return r.wF},onBeforeUnmount:function(){return r.Jd},onBeforeUpdate:function(){return r.Xn},onDeactivated:function(){return r.se},onErrorCaptured:function(){return r.d1},onMounted:function(){return r.bv},onRenderTracked:function(){return r.bT},onRenderTriggered:function(){return r.Yq},onScopeDispose:function(){return r.EB},onServerPrefetch:function(){return r.vl},onUnmounted:function(){return r.SK},onUpdated:function(){return r.ic},openBlock:function(){return r.wg},popScopeId:function(){return r.Cn},provide:function(){return r.JJ},proxyRefs:function(){return r.WL},pushScopeId:function(){return r.dD},queuePostFlushCb:function(){return r.qb},reactive:function(){return r.qj},readonly:function(){return r.OT},ref:function(){return r.iH},registerRuntimeCompiler:function(){return r.Y1},render:function(){return r.sY},renderList:function(){return r.Ko},renderSlot:function(){return r.WI},resolveComponent:function(){return r.up},resolveDirective:function(){return r.Q2},resolveDynamicComponent:function(){return r.LL},resolveFilter:function(){return r.eq},resolveTransitionHooks:function(){return r.U2},setBlockTracking:function(){return r.qZ},setDevtoolsHook:function(){return r.ec},setTransitionHooks:function(){return r.nK},shallowReactive:function(){return r.Um},shallowReadonly:function(){return r.YS},shallowRef:function(){return r.XI},ssrContextKey:function(){return r.Uc},ssrUtils:function(){return r.G},stop:function(){return r.sT},toDisplayString:function(){return r.zw},toHandlerKey:function(){return r.hR},toHandlers:function(){return r.mx},toRaw:function(){return r.IU},toRef:function(){return r.Vh},toRefs:function(){return r.BK},toValue:function(){return r.Tn},transformVNodeArgs:function(){return r.C3},triggerRef:function(){return r.oR},unref:function(){return r.SU},useAttrs:function(){return r.l1},useCssModule:function(){return r.fb},useCssVars:function(){return r.sj},useModel:function(){return r.tT},useSSRContext:function(){return r.Zq},useSlots:function(){return r.Rr},useTransitionState:function(){return r.Y8},vModelCheckbox:function(){return r.e8},vModelDynamic:function(){return r.YZ},vModelRadio:function(){return r.G2},vModelSelect:function(){return r.bM},vModelText:function(){return r.nr},vShow:function(){return r.F8},version:function(){return r.i8},warn:function(){return r.ZK},watch:function(){return r.YP},watchEffect:function(){return r.m0},watchPostEffect:function(){return r.Rh},watchSyncEffect:function(){return r.yX},withAsyncContext:function(){return r.mv},withCtx:function(){return r.w5},withDefaults:function(){return r.b9},withDirectives:function(){return r.wy},withKeys:function(){return r.D2},withMemo:function(){return r.MX},withModifiers:function(){return r.iM},withScopeId:function(){return r.HX}});var r=n(963);const i=()=>{0}},816:function(t,e,n){n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return vt}});var r=n(463),i=n(333),s=n(444);const o=(t,e)=>e.some((e=>t instanceof e));let a,u;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,c())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],k=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(k.get(e))return k.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return k.set(e,s),s}w((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
/**
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
 */
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(x(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function x(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const D="@firebase/app",N="0.9.23",M=new i.Yd("@firebase/app"),O="@firebase/app-compat",L="@firebase/analytics-compat",P="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="10.6.0",st="[DEFAULT]",ot={[D]:"fire-core",[O]:"fire-core-compat",[P]:"fire-analytics",[L]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ut=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){M.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ut.has(e))return M.debug(`There were multiple attempts to register component ${e}.`),!1;ut.set(e,t);for(const n of at.values())ct(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new s.LL("app","Firebase",ft);
/**
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
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
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
 */const gt=it;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw dt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw dt.create("no-options");const a=at.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw dt.create("duplicate-app",{appName:o})}const u=new r.H0(o);for(const r of ut.values())u.addComponent(r);const c=new pt(n,i,u);return at.set(o,c),c}function yt(t=st){const e=at.get(t);if(!e&&t===st&&(0,s.aH)())return mt();if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void M.warn(t.join(" "))}lt(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
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
 */
const wt="firebase-heartbeat-database",bt=1,_t="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=C(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function Ct(t){try{const e=await Tt(),n=await e.transaction(_t).objectStore(_t).get(It(t));return n}catch(e){if(e instanceof s.ZR)M.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});M.warn(t.message)}}}async function St(t,e){try{const n=await Tt(),r=n.transaction(_t,"readwrite"),i=r.objectStore(_t);await i.put(e,It(t)),await r.done}catch(n){if(n instanceof s.ZR)M.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});M.warn(t.message)}}}function It(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const kt=1024,At=2592e6;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t;const e=this.container.getProvider("platform-logger").getImmediate(),n=e.getPlatformInfoString(),r=xt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=xt(),{heartbeatsToSend:n,unsentEntries:r}=Dt(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xt(){const t=new Date;return t.toISOString().substring(0,10)}function Dt(t,e=kt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Mt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Mt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function Ot(t){lt(new r.wA("platform-logger",(t=>new R(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Rt(t)),"PRIVATE")),vt(D,N,t),vt(D,N,"esm2017"),vt("fire-js","")}Ot("")},463:function(t,e,n){n.d(e,{H0:function(){return c},wA:function(){return i}});var r=n(444);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
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
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},333:function(t,e,n){n.d(e,{Yd:function(){return c},in:function(){return i}});
/**
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
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},977:function(t,e,n){n.d(e,{ZF:function(){return r.ZF}});var r=n(816),i="firebase",s="10.6.0";
/**
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
 */
(0,r.KN)(i,s,"app")},100:function(t,e,n){n.d(e,{ET:function(){return Gh},hJ:function(){return nh},JU:function(){return rh},ad:function(){return ah},cf:function(){return Wh},r7:function(){return Kh}});var r,i=n(816),s=n(463),o=n(333),a=n(444),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},c={},l=l||{},h=u||self;function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,w.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function k(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",(()=>{}),e),h.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function R(t){return/^[\s\xa0]*$/.test(t)}function x(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function D(t){return-1!=x().indexOf(t)}function N(t){return N[" "](t),t}function M(t,e){var n=br;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}N[" "]=function(){};var O,L,P=D("Opera"),F=D("Trident")||D("MSIE"),V=D("Edge"),U=V||F,B=D("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),j=-1!=x().toLowerCase().indexOf("webkit")&&!D("Edge");function q(){var t=h.document;return t?t.documentMode:void 0}t:{var $="",H=function(){var t=x();return B?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):j?/WebKit\/(\S+)/.exec(t):P?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(H&&($=H?H[1]:""),F){var z=q();if(null!=z&&z>parseFloat($)){O=String(z);break t}}O=$}if(h.document&&F){var K=q();L=K||(parseInt(O,10)||void 0)}else L=void 0;var G=L;function W(t,e){if(k.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{N(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&W.$.h.call(this)}}_(W,k);var Q={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Y,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=C(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}st.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new X(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var ut="closure_lm_"+(1e6*Math.random()|0),ct={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,r,i);return null}return n=bt(n),t&&t[J]?t.O(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=d(i)?!!i.capture:!!i,a=vt(t);if(a||(t[ut]=a=new st(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)A||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=bt(n),t&&t[J]?t.P(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);else r=d(r)?!!r.capture:!!r,n=bt(n),t&&t[J]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,r,i),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[J])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ut]=null)):Z(t)}}}function mt(t){return t in ct?ct[t]:ct[t]="on"+t}function yt(t,e){if(t.fa)t=!0;else{e=new W(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gt(t),t=n.call(r,e)}return t}function vt(t){return t=t[ut],t instanceof st?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function bt(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function _t(){E.call(this),this.i=new st(this),this.S=this,this.J=null}function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new k(e,t);else if(e instanceof k)e.target=e.target||t;else{var i=e;e=new k(r,t),it(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Tt(o,r,!0,e)&&i}if(o=e.g=t,i=Tt(o,r,!0,e)&&i,i=Tt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Tt(o,r,!1,e)&&i}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&ot(t.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}_(_t,E),_t.prototype[J]=!0,_t.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.J=null},_t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},_t.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=h.JSON.stringify;class St{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function It(){var t=Ot;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kt{constructor(){this.h=this.g=null}add(t,e){const n=At.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var At=new St((()=>new Rt),(t=>t.reset()));class Rt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function xt(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Dt(t){h.setTimeout((()=>{throw t}),0)}let Nt,Mt=!1,Ot=new kt,Lt=()=>{const t=h.Promise.resolve(void 0);Nt=()=>{t.then(Pt)}};var Pt=()=>{for(var t;t=It();){try{t.h.call(t.g)}catch(n){Dt(n)}var e=At;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mt=!1};function Ft(t,e){_t.call(this),this.h=t||1,this.g=e||h,this.j=w(this.qb,this),this.l=Date.now()}function Vt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ut(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Bt(t){t.g=Ut((()=>{t.g=null,t.i&&(t.i=!1,Bt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Ft,_t),r=Ft.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Vt(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ft.$.N.call(this),Vt(this),delete this.g};class jt extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Bt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qt(t){E.call(this),this.h=t,this.g={}}_(qt,E);var $t=[];function Ht(t,e,n,r){Array.isArray(n)||(n&&($t[0]=n.toString()),n=$t);for(var i=0;i<n.length;i++){var s=lt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function zt(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}function Kt(){this.g=!0}function Gt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Wt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Qt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Yt(t,n)+(r?" "+r:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Yt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ct(n)}catch(a){return e}}qt.prototype.N=function(){qt.$.N.call(this),zt(this)},qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Kt.prototype.Ea=function(){this.g=!1},Kt.prototype.info=function(){};var Xt={},Zt=null;function te(){return Zt=Zt||new _t}function ee(t){k.call(this,Xt.Ta,t)}function ne(t){const e=te();Et(e,new ee(e))}function re(t,e){k.call(this,Xt.STAT_EVENT,t),this.stat=e}function ie(t){const e=te();Et(e,new re(e,t))}function se(t,e){k.call(this,Xt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}Xt.Ta="serverreachability",_(ee,k),Xt.STAT_EVENT="statevent",_(re,k),Xt.Ua="timingevent",_(se,k);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ue={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ce(){}function le(t){return t.h||(t.h=t.i())}function he(){}ce.prototype.h=null;var fe,de={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){k.call(this,"d")}function ge(){k.call(this,"c")}function me(){}function ye(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new qt(this),this.P=we,t=U?125:void 0,this.V=new Ft(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}_(pe,k),_(ge,k),_(me,ce),me.prototype.g=function(){return new XMLHttpRequest},me.prototype.i=function(){return{}},fe=new me;var we=45e3,be={},_e={};function Ee(t,e,n){t.L=1,t.v=He(Ue(e)),t.s=n,t.S=!0,Te(t,null)}function Te(t,e){t.G=Date.now(),ke(t),t.A=Ue(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ve,t.g=cr(t.l,n?e:null,!t.s),0<t.O&&(t.M=new jt(w(t.Pa,t,t.g),t.O)),Ht(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ne(),Gt(t.j,t.u,t.A,t.m,t.W,t.s)}function Ce(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Se(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=Ie(t,n),r==_e){4==e&&(t.o=4,ie(14),i=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(r==be){t.o=4,ie(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Qt(t.j,t.m,r,null),Ne(t,r)}Ce(t)&&r!=_e&&r!=be&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.M=!0,ie(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),De(t),xe(t))}function Ie(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?_e:(n=Number(e.substring(n,r)),isNaN(n)?be:(r+=1,r+n>e.length?_e:(e=e.slice(r,r+n),t.C=r+n,e)))}function ke(t){t.Y=Date.now()+t.P,Ae(t,t.P)}function Ae(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=oe(w(t.lb,t),e)}function Re(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function xe(t){0==t.l.H||t.J||ir(t.l,t)}function De(t){Re(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Vt(t.V),zt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ne(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||fn(n.i,t)))if(!t.K&&fn(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;rr(n),Kn(n)}tr(n),ie(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(w(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(c){}n.oa=void 0}}else or(n,11)}else if((t.K||n.g==t)&&rr(n),!R(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=c[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=c[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(dn(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,$e(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ur(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Re(a),ke(a)),r.g=o}else Zn(r);0<n.j.length&&Wn(n)}else"stop"!=c[0]&&"close"!=c[0]||or(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?or(n,7):zn(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}ne(4)}catch(c){}}function Me(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Oe(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Le(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Oe(t),r=Me(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=ye.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Vn(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Vn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>l)&&(3!=l||U||this.g&&(this.h.h||this.g.ja()||Un(this.g)))){this.J||4!=l||7==e||ne(8==e||0>=f?3:2),Re(this);var n=this.g.da();this.ca=n;e:if(Ce(this)){var r=Un(this.g);t="";var i=r.length,s=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){De(this),xe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Wt(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,ie(12),De(this),xe(this);break t}Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ne(this,n)}this.S?(Se(this,l,o),U&&this.i&&3==l&&(Ht(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),Ne(this,o)),4==l&&De(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,ke(this)))}else Bn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ie(12)):(this.o=0,ie(13)),De(this),xe(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.C<e.length&&(Re(this),Se(this,t,e),this.i&&4!=t&&ke(this))}},r.cancel=function(){this.J=!0,De(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Jt(this.j,this.A),2!=this.L&&(ne(),ie(17)),De(this),this.o=2,xe(this)):Ae(this,this.Y-t)};var Pe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ve(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ve){this.h=t.h,Be(this,t.j),this.s=t.s,this.g=t.g,je(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qe(this,n),this.o=t.o}else t&&(e=String(t).match(Pe))?(this.h=!1,Be(this,e[1]||"",!0),this.s=ze(e[2]||""),this.g=ze(e[3]||"",!0),je(this,e[4]),this.l=ze(e[5]||"",!0),qe(this,e[6]||"",!0),this.o=ze(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function Ue(t){return new Ve(t)}function Be(t,e,n){t.j=n?ze(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qe(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=Ke(e,Ye)),t.i=new Ze(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function He(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ze(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ke(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ge),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ge(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ve.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ke(e,We,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ke(e,We,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ke(n,"/"==n.charAt(0)?Je:Qe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ke(n,Xe)),t.join("")};var We=/[#\/\?@]/g,Qe=/[#\?:]/g,Je=/[#\?]/g,Ye=/[#\?@]/g,Xe=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Fe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=sn(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),S(n)),t.h+=n.length)}function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))}),t)),t.j=e}r=Ze.prototype,r.add=function(t,e){tn(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return tn(this),this.i=null,t=sn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function un(t){this.l=t||cn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cn=10;function ln(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return S(t.i)}un.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var mn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function yn(){this.g=new mn}function vn(t,e,n){const r=n||"";try{Le(t,(function(t,n){let i=t;d(t)&&(i=Ct(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function wn(t,e){const n=new Kt;if(h.Image){const r=new Image;r.onload=b(bn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(bn,n,r,"TestLoadImage: error",!1,e),r.onabort=b(bn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(bn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function bn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function _n(t){this.l=t.ec||null,this.j=t.ob||!1}function En(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_(_n,ce),_n.prototype.g=function(){return new En(this.l,this.j)},_n.prototype.i=function(t){return function(){return t}}({}),_(En,_t);var Tn=0;function Cn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,In(t)}function In(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,In(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=Tn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):In(this),3==this.readyState&&Cn(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,Sn(this))},r.Ya=function(t){this.g&&(this.response=t,Sn(this))},r.ka=function(){this.g&&Sn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var kn=h.JSON.parse;function An(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rn,this.L=this.M=!1}_(An,_t);var Rn="",xn=/^https?$/i,Dn=["POST","PUT"];function Nn(t){return F&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Mn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,On(t),Pn(t)}function On(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}function Ln(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Vn(t)||2!=t.da()))if(t.v&&4==Vn(t))Ut(t.La,0,t);else if(Et(t,"readystatechange"),4==Vn(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(Pe)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!xn.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",On(t)}}finally{Pn(t)}}}function Pn(t,e){if(t.g){Fn(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Fn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}function Un(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Rn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Jr){return null}}function Bn(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(R(t[r]))continue;var n=xt(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}et(e,(function(t){return t.join(", ")}))}function jn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function qn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=jn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):$e(t,e,n))}function $n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hn(t){this.Ga=0,this.j=[],this.l=new Kt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$n("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$n("baseRetryDelayMs",5e3,t),this.hb=$n("retryDelaySeedMs",1e4,t),this.eb=$n("forwardChannelMaxRetries",2,t),this.xa=$n("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new un(t&&t.concurrentRequestLimit),this.Ja=new yn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function zn(t){if(Gn(t),3==t.H){var e=t.W++,n=Ue(t.I);if($e(n,"SID",t.K),$e(n,"RID",e),$e(n,"TYPE","terminate"),Yn(t,n),e=new ye(t,t.l,e),e.L=2,e.v=He(Ue(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=cr(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ke(e)}ar(t)}function Kn(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function Gn(t){Kn(t),t.u&&(h.clearTimeout(t.u),t.u=null),rr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Wn(t){if(!ln(t.i)&&!t.m){t.m=!0;var e=t.Na;Nt||Lt(),Mt||(Nt(),Mt=!0),Ot.add(e,t),t.C=0}}function Qn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(w(t.Na,t,e),sr(t,t.C)),t.C++,!0))}function Jn(t,e){var n;n=e?e.m:t.W++;const r=Ue(t.I);$e(r,"SID",t.K),$e(r,"RID",n),$e(r,"AID",t.V),Yn(t,r),t.o&&t.s&&qn(r,t.o,t.s),n=new ye(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Xn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dn(t.i,n),Ee(n,r,e)}function Yn(t,e){t.na&&tt(t.na,(function(t,n){$e(e,n,t)})),t.h&&Le({},(function(t,n){$e(e,n,t)}))}function Xn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?w(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const u=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{vn(u,t,"req"+n+"_")}catch(s){r&&r(u)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Nt||Lt(),Mt||(Nt(),Mt=!0),Ot.add(e,t),t.A=0}}function tr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(w(t.Ma,t),sr(t,t.A)),t.A++,!0)}function er(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function nr(t){t.g=new ye(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Ue(t.wa);$e(e,"RID","rpc"),$e(e,"SID",t.K),$e(e,"AID",t.V),$e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&$e(e,"TO",t.qa),$e(e,"TYPE","xmlhttp"),Yn(t,e),t.o&&t.s&&qn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=He(Ue(e)),n.s=null,n.S=!0,Te(n,t)}function rr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ir(t,e){var n=null;if(t.g==e){rr(t),er(t),t.g=null;var r=2}else{if(!fn(t.i,e))return;n=e.F,pn(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=te(),Et(r,new se(r,n)),Wn(t)}else Zn(t);else if(i=e.o,3==i||0==i&&0<e.ca||!(1==r&&Qn(t,e)||2==r&&tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}function sr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function or(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=w(t.pb,t);n||(n=new Ve("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Be(n,"https"),He(n)),wn(n.toString(),r)}else ie(2);t.H=0,t.h&&t.h.za(e),ar(t),Gn(t)}function ar(t){if(t.H=0,t.ma=[],t.h){const e=gn(t.i);0==e.length&&0==t.j.length||(I(t.ma,e),I(t.ma,t.j),t.i.i.length=0,S(t.j),t.j.length=0),t.h.ya()}}function ur(t,e,n){var r=n instanceof Ve?Ue(n):new Ve(n);if(""!=r.g)e&&(r.g=e+"."+r.g),je(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ve(null);r&&Be(s,r),e&&(s.g=e),i&&je(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&$e(r,n,e),$e(r,"VER",t.ra),Yn(t,r),r}function cr(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new An(new _n({ob:!0})):new An(t.va),e.Oa(t.J),e}function lr(){}function hr(){if(F&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function fr(t,e){_t.call(this),this.g=new Hn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gr(this)}function dr(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pr(){ge.call(this),this.status=1}function gr(t){this.g=t}function mr(){this.blockSize=-1}function yr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function wr(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}r=An.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fe.g(),this.C=this.u?le(this.u):le(fe),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Mn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=C(Dn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=Nn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=Ut(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Mn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Pn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pn(this,!0)),An.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Ln(this):this.kb())},r.kb=function(){Ln(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),kn(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Hn.prototype,r.ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ye(this,this.l,t);let s=this.s;if(this.U&&(s?(s=nt(s),it(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Xn(this,i,e),n=Ue(this.I),$e(n,"RID",t),$e(n,"CVER",22),this.F&&$e(n,"X-HTTP-Session-Id",this.F),Yn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(jn(s)))+"&"+e:this.o&&qn(n,this.o,s)),dn(this.i,i),this.bb&&$e(n,"TYPE","init"),this.P?($e(n,"$req",e),$e(n,"SID","null"),i.aa=!0,Ee(i,n,null)):Ee(i,n,e),this.H=2}}else 3==this.H&&(t?Jn(this,t):0==this.j.length||ln(this.i)||Jn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(w(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ie(10),Kn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Kn(this),tr(this),ie(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ie(2)):(this.l.info("Failed to ping google.com"),ie(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(t,e){return new fr(t,e)},_(fr,_t),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ur(t,null,t.Y),Wn(t)},fr.prototype.close=function(){zn(this.g)},fr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ct(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Wn(e)},fr.prototype.N=function(){this.g.h=null,delete this.j,zn(this.g),delete this.g,fr.$.N.call(this)},_(dr,pe),_(pr,ge),_(gr,lr),gr.prototype.Ba=function(){Et(this.g,"a")},gr.prototype.Aa=function(t){Et(this.g,new dr(t))},gr.prototype.za=function(t){Et(this.g,new pr)},gr.prototype.ya=function(){Et(this.g,"b")},_(yr,mr),yr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)vr(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){vr(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){vr(this,r),i=0;break}}this.h=i,this.i+=e},yr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var br={};function _r(t){return-128<=t&&128>t?M(t,(function(t){return new wr([0|t],0>t?-1:0)})):new wr([0|t],0>t?-1:0)}function Er(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return xr(Er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cr;return new wr(e,0)}function Tr(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return xr(Tr(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(e,8)),r=Sr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Er(Math.pow(e,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Cr=4294967296,Sr=_r(0),Ir=_r(1),kr=_r(16777216);function Ar(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Rr(t){return-1==t.h}function xr(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new wr(n,~t.h).add(Ir)}function Dr(t,e){return t.add(xr(e))}function Nr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Mr(t,e){this.g=t,this.h=e}function Or(t,e){if(Ar(e))throw Error("division by zero");if(Ar(t))return new Mr(Sr,Sr);if(Rr(t))return e=Or(xr(t),e),new Mr(xr(e.g),xr(e.h));if(Rr(e))return e=Or(t,xr(e)),new Mr(xr(e.g),e.h);if(30<t.g.length){if(Rr(t)||Rr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ir,r=e;0>=r.X(t);)n=Lr(n),r=Lr(r);var i=Pr(n,1),s=Pr(r,1);for(r=Pr(r,2),n=Pr(n,2);!Ar(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Pr(r,1),n=Pr(n,1)}return e=Dr(t,i.R(e)),new Mr(i,e)}for(i=Sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(e);Rr(o)||0<o.X(t);)n-=r,s=Er(n),o=s.R(e);Ar(s)&&(s=Ir),i=i.add(s),t=Dr(t,o)}return new Mr(i,t)}function Lr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new wr(n,t.h)}function Pr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new wr(i,t.h)}r=wr.prototype,r.ea=function(){if(Rr(this))return-xr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cr+r)*e,e*=Cr}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ar(this))return"0";if(Rr(this))return"-"+xr(this).toString(t);for(var e=Er(Math.pow(t,6)),n=this,r="";;){var i=Or(n,e).g;n=Dr(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ar(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=Dr(this,t),Rr(t)?-1:Ar(t)?0:1},r.abs=function(){return Rr(this)?xr(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new wr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(Ar(this)||Ar(t))return Sr;if(Rr(this))return Rr(t)?xr(this).R(xr(t)):xr(xr(this).R(t));if(Rr(t))return xr(this.R(xr(t)));if(0>this.X(kr)&&0>t.X(kr))return Er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,u=65535&t.D(i);n[2*r+2*i]+=o*u,Nr(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Nr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Nr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Nr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new wr(n,0)},r.gb=function(t){return Or(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new wr(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new wr(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new wr(n,this.h^t.h)},hr.prototype.createWebChannel=hr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ue.COMPLETE="complete",he.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",_t.prototype.listen=_t.prototype.O,An.prototype.listenOnce=An.prototype.P,An.prototype.getLastError=An.prototype.Sa,An.prototype.getLastErrorCode=An.prototype.Ia,An.prototype.getStatus=An.prototype.da,An.prototype.getResponseJson=An.prototype.Wa,An.prototype.getResponseText=An.prototype.ja,An.prototype.send=An.prototype.ha,An.prototype.setWithCredentials=An.prototype.Oa,yr.prototype.digest=yr.prototype.l,yr.prototype.reset=yr.prototype.reset,yr.prototype.update=yr.prototype.j,wr.prototype.add=wr.prototype.add,wr.prototype.multiply=wr.prototype.R,wr.prototype.modulo=wr.prototype.gb,wr.prototype.compare=wr.prototype.X,wr.prototype.toNumber=wr.prototype.ea,wr.prototype.toString=wr.prototype.toString,wr.prototype.getBits=wr.prototype.D,wr.fromNumber=Er,wr.fromString=Tr;var Fr=c.createWebChannelTransport=function(){return new hr},Vr=c.getStatEventTarget=function(){return te()},Ur=c.ErrorCode=ae,Br=c.EventType=ue,jr=c.Event=Xt,qr=c.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$r=c.FetchXmlHttpFactory=_n,Hr=c.WebChannel=he,zr=c.XhrIo=An,Kr=c.Md5=yr,Gr=c.Integer=wr;const Wr="@firebase/firestore";
/**
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
 */class Qr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qr.UNAUTHENTICATED=new Qr(null),Qr.GOOGLE_CREDENTIALS=new Qr("google-credentials-uid"),Qr.FIRST_PARTY=new Qr("first-party-uid"),Qr.MOCK_USER=new Qr("mock-user");
/**
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
 */
let Jr="10.5.2";
/**
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
 */const Yr=new o.Yd("@firebase/firestore");function Xr(){return Yr.logLevel}function Zr(t,...e){if(Yr.logLevel<=o["in"].DEBUG){const n=e.map(ni);Yr.debug(`Firestore (${Jr}): ${t}`,...n)}}function ti(t,...e){if(Yr.logLevel<=o["in"].ERROR){const n=e.map(ni);Yr.error(`Firestore (${Jr}): ${t}`,...n)}}function ei(t,...e){if(Yr.logLevel<=o["in"].WARN){const n=e.map(ni);Yr.warn(`Firestore (${Jr}): ${t}`,...n)}}function ni(t){if("string"==typeof t)return t;try{
/**
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
 */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
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
 */function ri(t="Unexpected state"){const e=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+t;throw ti(e),new Error(e)}function ii(t,e){t||ri()}function si(t,e){return t}
/**
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
 */const oi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ai extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class ui{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class ci{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class li{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Qr.UNAUTHENTICATED)))}shutdown(){}}class hi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class fi{constructor(t){this.t=t,this.currentUser=Qr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ui,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ui)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ii("string"==typeof e.accessToken),new ci(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ii(null===t||"string"==typeof t),new Qr(t)}}class di{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Qr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pi{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new di(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Qr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mi{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):Zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ii("string"==typeof t.token),this.R=t.token,new gi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function yi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class vi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=yi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function wi(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
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
 */
class _i{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return _i.fromMillis(Date.now())}static fromDate(t){return _i.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new _i(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?wi(this.nanoseconds,t.nanoseconds):wi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class Ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ei(t)}static min(){return new Ei(new _i(0,0))}static max(){return new Ei(new _i(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class Ti{constructor(t,e,n){void 0===e?e=0:e>t.length&&ri(),void 0===n?n=t.length-e:n>t.length-e&&ri(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ti.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ti?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ci extends Ti{construct(t,e,n){return new Ci(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ai(oi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ci(e)}static emptyPath(){return new Ci([])}}const Si=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ii extends Ti{construct(t,e,n){return new Ii(t,e,n)}static isValidIdentifier(t){return Si.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ii.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ii(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ai(oi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ai(oi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ai(oi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new ai(oi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ii(e)}static emptyPath(){return new Ii([])}}
/**
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
 */class ki{constructor(t){this.path=t}static fromPath(t){return new ki(Ci.fromString(t))}static fromName(t){return new ki(Ci.fromString(t).popFirst(5))}static empty(){return new ki(Ci.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ci.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ci.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ki(new Ci(t.slice()))}}
/**
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
 */class Ai{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Ai.UNKNOWN_ID=-1;function Ri(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ei.fromTimestamp(1e9===r?new _i(n+1,0):new _i(n,r));return new Di(i,ki.empty(),e)}function xi(t){return new Di(t.readTime,t.key,-1)}class Di{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Di(Ei.min(),ki.empty(),-1)}static max(){return new Di(Ei.max(),ki.empty(),-1)}}function Ni(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ki.comparator(t.documentKey,e.documentKey),0!==n?n:wi(t.largestBatchId,e.largestBatchId))}
/**
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
 */const Mi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Oi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */async function Li(t){if(t.code!==oi.FAILED_PRECONDITION||t.message!==Mi)throw t;Zr("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Pi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ri(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Pi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Pi?e:Pi.resolve(e)}catch(t){return Pi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Pi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Pi.reject(e)}static resolve(t){return new Pi(((e,n)=>{e(t)}))}static reject(t){return new Pi(((e,n)=>{n(t)}))}static waitFor(t){return new Pi(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Pi.resolve(!1);for(const n of t)e=e.next((t=>t?Pi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Pi(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;e(t[u]).next((t=>{s[u]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Pi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
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
 */function Fi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class Vi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function Ui(t){return null==t}function Bi(t){return 0===t&&1/t==-1/0}function ji(t){return"number"==typeof t&&Number.isInteger(t)&&!Bi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */Vi._e=-1;const qi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$i=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Hi=$i;
/**
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
 */
/**
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
 */
function zi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class Wi{constructor(t,e){this.comparator=t,this.root=e||Ji.EMPTY}insert(t,e){return new Wi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ji.BLACK,null,null))}remove(t){return new Wi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ji.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qi(this.root,t,this.comparator,!0)}}class Qi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ji{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ji.RED,this.left=null!=r?r:Ji.EMPTY,this.right=null!=i?i:Ji.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ji(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ji.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ji.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ji.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ji.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ri();if(this.right.isRed())throw ri();const t=this.left.check();if(t!==this.right.check())throw ri();return t+(this.isRed()?0:1)}}Ji.EMPTY=null,Ji.RED=!0,Ji.BLACK=!1,Ji.EMPTY=new class{constructor(){this.size=0}get key(){throw ri()}get value(){throw ri()}get color(){throw ri()}get left(){throw ri()}get right(){throw ri()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ji(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Yi{constructor(t){this.comparator=t,this.data=new Wi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Yi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Yi(this.comparator);return e.data=t,e}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class Zi{constructor(t){this.fields=t,t.sort(Ii.comparator)}static empty(){return new Zi([])}unionWith(t){let e=new Yi(Ii.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Zi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return bi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ts extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class es{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ts("Invalid base64 string: "+t):t}}(t);return new es(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new es(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return wi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}es.EMPTY_BYTE_STRING=new es("");const ns=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(t){if(ii(!!t),"string"==typeof t){let e=0;const n=ns.exec(t);if(ii(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:is(t.seconds),nanos:is(t.nanos)}}function is(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ss(t){return"string"==typeof t?es.fromBase64String(t):es.fromUint8Array(t)}
/**
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
 */function os(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function as(t){const e=t.mapValue.fields.__previous_value__;return os(e)?as(e):e}function us(t){const e=rs(t.mapValue.fields.__local_write_time__.timestampValue);return new _i(e.seconds,e.nanos)}
/**
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
 */class cs{constructor(t,e,n,r,i,s,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u}}class ls{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ls("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ls&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const hs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?os(t)?4:Ss(t)?9007199254740991:10:ri()}function ds(t,e){if(t===e)return!0;const n=fs(t);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return us(t).isEqual(us(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=rs(t.timestampValue),r=rs(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ss(t.bytesValue).isEqual(ss(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return is(t.geoPointValue.latitude)===is(e.geoPointValue.latitude)&&is(t.geoPointValue.longitude)===is(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return is(t.integerValue)===is(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=is(t.doubleValue),r=is(e.doubleValue);return n===r?Bi(n)===Bi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],ds);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(zi(n)!==zi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ds(n[i],r[i])))return!1;return!0}(t,e);default:return ri()}}function ps(t,e){return void 0!==(t.values||[]).find((t=>ds(t,e)))}function gs(t,e){if(t===e)return 0;const n=fs(t),r=fs(e);if(n!==r)return wi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return wi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=is(t.integerValue||t.doubleValue),r=is(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ms(t.timestampValue,e.timestampValue);case 4:return ms(us(t),us(e));case 5:return wi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ss(t),r=ss(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=wi(n[i],r[i]);if(0!==t)return t}return wi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=wi(is(t.latitude),is(e.latitude));return 0!==n?n:wi(is(t.longitude),is(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=gs(n[i],r[i]);if(t)return t}return wi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===hs.mapValue&&e===hs.mapValue)return 0;if(t===hs.mapValue)return 1;if(e===hs.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=wi(r[o],s[o]);if(0!==t)return t;const e=gs(n[r[o]],i[s[o]]);if(0!==e)return e}return wi(r.length,s.length)}(t.mapValue,e.mapValue);default:throw ri()}}function ms(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return wi(t,e);const n=rs(t),r=rs(e),i=wi(n.seconds,r.seconds);return 0!==i?i:wi(n.nanos,r.nanos)}function ys(t){return vs(t)}function vs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=rs(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return ss(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return ki.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=vs(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${vs(t.fields[i])}`;return n+"}"}(t.mapValue):ri()}function ws(t){return!!t&&"integerValue"in t}function bs(t){return!!t&&"arrayValue"in t}function _s(t){return!!t&&"nullValue"in t}function Es(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ts(t){return!!t&&"mapValue"in t}function Cs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ki(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Cs(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ss(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class Is{constructor(t){this.value=t}static empty(){return new Is({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ts(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Cs(e)}setAll(t){let e=Ii.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Cs(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ts(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ds(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ts(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ki(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Is(Cs(this.value))}}function ks(t){const e=[];return Ki(t.fields,((t,n)=>{const r=new Ii([t]);if(Ts(n)){const t=ks(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Zi(e)
/**
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
 */}class As{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new As(t,0,Ei.min(),Ei.min(),Ei.min(),Is.empty(),0)}static newFoundDocument(t,e,n,r){return new As(t,1,e,Ei.min(),n,r,0)}static newNoDocument(t,e){return new As(t,2,e,Ei.min(),Ei.min(),Is.empty(),0)}static newUnknownDocument(t,e){return new As(t,3,e,Ei.min(),Ei.min(),Is.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ei.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Is.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Is.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ei.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof As&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new As(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Rs{constructor(t,e){this.position=t,this.inclusive=e}}function xs(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?ki.comparator(ki.fromName(o.referenceValue),n.key):gs(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ds(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ds(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class Ns{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ms(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class Os{}class Ls extends Os{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new $s(t,e,n):"array-contains"===e?new Gs(t,n):"in"===e?new Ws(t,n):"not-in"===e?new Qs(t,n):"array-contains-any"===e?new Js(t,n):new Ls(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Hs(t,n):new zs(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(gs(e,this.value)):null!==e&&fs(this.value)===fs(e)&&this.matchesComparison(gs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ri()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ps extends Os{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Ps(t,e)}matches(t){return Fs(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Fs(t){return"and"===t.op}function Vs(t){return Us(t)&&Fs(t)}function Us(t){for(const e of t.filters)if(e instanceof Ps)return!1;return!0}function Bs(t){if(t instanceof Ls)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(Vs(t))return t.filters.map((t=>Bs(t))).join(",");{const e=t.filters.map((t=>Bs(t))).join(",");return`${t.op}(${e})`}}function js(t,e){return t instanceof Ls?function(t,e){return e instanceof Ls&&t.op===e.op&&t.field.isEqual(e.field)&&ds(t.value,e.value)}(t,e):t instanceof Ps?function(t,e){return e instanceof Ps&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&js(n,e.filters[r])),!0)}(t,e):void ri()}function qs(t){return t instanceof Ls?function(t){return`${t.field.canonicalString()} ${t.op} ${ys(t.value)}`}(t):t instanceof Ps?function(t){return t.op.toString()+" {"+t.getFilters().map(qs).join(" ,")+"}"}(t):"Filter"}class $s extends Ls{constructor(t,e,n){super(t,e,n),this.key=ki.fromName(n.referenceValue)}matches(t){const e=ki.comparator(t.key,this.key);return this.matchesComparison(e)}}class Hs extends Ls{constructor(t,e){super(t,"in",e),this.keys=Ks("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class zs extends Ls{constructor(t,e){super(t,"not-in",e),this.keys=Ks("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ks(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ki.fromName(t.referenceValue)))}class Gs extends Ls{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return bs(e)&&ps(e.arrayValue,this.value)}}class Ws extends Ls{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ps(this.value.arrayValue,e)}}class Qs extends Ls{constructor(t,e){super(t,"not-in",e)}matches(t){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ps(this.value.arrayValue,e)}}class Js extends Ls{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!bs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ps(this.value.arrayValue,t)))}}
/**
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
 */class Ys{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function Xs(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ys(t,e,n,r,i,s,o)}function Zs(t){const e=si(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Bs(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ys(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ys(t))).join(",")),e.ce=t}return e.ce}function to(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ms(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!js(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ds(t.startAt,e.startAt)&&Ds(t.endAt,e.endAt)}function eo(t){return ki.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
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
 */
class no{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ro(t,e,n,r,i,s,o,a){return new no(t,e,n,r,i,s,o,a)}function io(t){return new no(t)}function so(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function oo(t){return null!==t.collectionGroup}function ao(t){const e=si(t);if(null===e.le){e.le=[];const t=new Set;for(const i of e.explicitOrderBy)e.le.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new Yi(Ii.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new Ns(r,n))})),t.has(Ii.keyField().canonicalString())||e.le.push(new Ns(Ii.keyField(),n))}return e.le}function uo(t){const e=si(t);return e.he||(e.he=co(e,ao(t))),e.he}function co(t,e){if("F"===t.limitType)return Xs(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Ns(t.field,e)}));const n=t.endAt?new Rs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rs(t.startAt.position,t.startAt.inclusive):null;return Xs(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lo(t,e,n){return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ho(t,e){return to(uo(t),uo(e))&&t.limitType===e.limitType}function fo(t){return`${Zs(uo(t))}|lt:${t.limitType}`}function po(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>qs(t))).join(", ")}]`),Ui(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ys(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ys(t))).join(",")),`Target(${e})`}(uo(t))}; limitType=${t.limitType})`}function go(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ki.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of ao(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=xs(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,ao(t),e))&&!(t.endAt&&!function(t,e,n){const r=xs(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,ao(t),e))}(t,e)}function mo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yo(t){return(e,n)=>{let r=!1;for(const i of ao(t)){const t=vo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function vo(t,e,n){const r=t.field.isKeyField()?ki.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?gs(r,i):ri()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ri()}}
/**
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
 */class wo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ki(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Gi(this.inner)}size(){return this.innerSize}}
/**
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
 */const bo=new Wi(ki.comparator);function _o(){return bo}const Eo=new Wi(ki.comparator);function To(...t){let e=Eo;for(const n of t)e=e.insert(n.key,n);return e}function Co(t){let e=Eo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function So(){return ko()}function Io(){return ko()}function ko(){return new wo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ao=new Wi(ki.comparator),Ro=new Yi(ki.comparator);function xo(...t){let e=Ro;for(const n of t)e=e.add(n);return e}const Do=new Yi(wi);function No(){return Do}
/**
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
 */function Mo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bi(e)?"-0":e}}function Oo(t){return{integerValue:""+t}}function Lo(t,e){return ji(e)?Oo(e):Mo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Po{constructor(){this._=void 0}}function Fo(t,e,n){return t instanceof Bo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&os(e)&&(e=as(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof jo?qo(t,e):t instanceof $o?Ho(t,e):function(t,e){const n=Uo(t,e),r=Ko(n)+Ko(t.Ie);return ws(n)&&ws(t.Ie)?Oo(r):Mo(t.serializer,r)}(t,e)}function Vo(t,e,n){return t instanceof jo?qo(t,e):t instanceof $o?Ho(t,e):n}function Uo(t,e){return t instanceof zo?function(t){return ws(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Bo extends Po{}class jo extends Po{constructor(t){super(),this.elements=t}}function qo(t,e){const n=Go(e);for(const r of t.elements)n.some((t=>ds(t,r)))||n.push(r);return{arrayValue:{values:n}}}class $o extends Po{constructor(t){super(),this.elements=t}}function Ho(t,e){let n=Go(e);for(const r of t.elements)n=n.filter((t=>!ds(t,r)));return{arrayValue:{values:n}}}class zo extends Po{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Ko(t){return is(t.integerValue||t.doubleValue)}function Go(t){return bs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */function Wo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof jo&&e instanceof jo||t instanceof $o&&e instanceof $o?bi(t.elements,e.elements,ds):t instanceof zo&&e instanceof zo?ds(t.Ie,e.Ie):t instanceof Bo&&e instanceof Bo}(t.transform,e.transform)}class Qo{constructor(t,e){this.version=t,this.transformResults=e}}class Jo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Jo}static exists(t){return new Jo(void 0,t)}static updateTime(t){return new Jo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Yo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Xo{}function Zo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ca(t.key,Jo.none()):new ia(t.key,t.data,Jo.none());{const n=t.data,r=Is.empty();let i=new Yi(Ii.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new sa(t.key,r,new Zi(i.toArray()),Jo.none())}}function ta(t,e,n){t instanceof ia?function(t,e,n){const r=t.value.clone(),i=aa(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof sa?function(t,e,n){if(!Yo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=aa(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(oa(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ea(t,e,n,r){return t instanceof ia?function(t,e,n,r){if(!Yo(t.precondition,e))return n;const i=t.value.clone(),s=ua(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof sa?function(t,e,n,r){if(!Yo(t.precondition,e))return n;const i=ua(t.fieldTransforms,r,e),s=e.data;return s.setAll(oa(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Yo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function na(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Uo(r.transform,t||null);null!=i&&(null===n&&(n=Is.empty()),n.set(r.field,i))}return n||null}function ra(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&bi(t,e,((t,e)=>Wo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ia extends Xo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class sa extends Xo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function oa(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function aa(t,e,n){const r=new Map;ii(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Vo(o,a,n[i]))}return r}function ua(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Fo(t,s,e))}return r}class ca extends Xo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class la extends Xo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class ha{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ta(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ea(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ea(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Io();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Zo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ei.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),xo())}isEqual(t){return this.batchId===t.batchId&&bi(this.mutations,t.mutations,((t,e)=>ra(t,e)))&&bi(this.baseMutations,t.baseMutations,((t,e)=>ra(t,e)))}}class fa{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ii(t.mutations.length===n.length);let r=function(){return Ao}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new fa(t,e,n,r)}}
/**
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
 */class da{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
/**
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
 */
class pa{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
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
 */var ga,ma;function ya(t){switch(t){default:return ri();case oi.CANCELLED:case oi.UNKNOWN:case oi.DEADLINE_EXCEEDED:case oi.RESOURCE_EXHAUSTED:case oi.INTERNAL:case oi.UNAVAILABLE:case oi.UNAUTHENTICATED:return!1;case oi.INVALID_ARGUMENT:case oi.NOT_FOUND:case oi.ALREADY_EXISTS:case oi.PERMISSION_DENIED:case oi.FAILED_PRECONDITION:case oi.ABORTED:case oi.OUT_OF_RANGE:case oi.UNIMPLEMENTED:case oi.DATA_LOSS:return!0}}function va(t){if(void 0===t)return ti("GRPC error has no .code"),oi.UNKNOWN;switch(t){case ga.OK:return oi.OK;case ga.CANCELLED:return oi.CANCELLED;case ga.UNKNOWN:return oi.UNKNOWN;case ga.DEADLINE_EXCEEDED:return oi.DEADLINE_EXCEEDED;case ga.RESOURCE_EXHAUSTED:return oi.RESOURCE_EXHAUSTED;case ga.INTERNAL:return oi.INTERNAL;case ga.UNAVAILABLE:return oi.UNAVAILABLE;case ga.UNAUTHENTICATED:return oi.UNAUTHENTICATED;case ga.INVALID_ARGUMENT:return oi.INVALID_ARGUMENT;case ga.NOT_FOUND:return oi.NOT_FOUND;case ga.ALREADY_EXISTS:return oi.ALREADY_EXISTS;case ga.PERMISSION_DENIED:return oi.PERMISSION_DENIED;case ga.FAILED_PRECONDITION:return oi.FAILED_PRECONDITION;case ga.ABORTED:return oi.ABORTED;case ga.OUT_OF_RANGE:return oi.OUT_OF_RANGE;case ga.UNIMPLEMENTED:return oi.UNIMPLEMENTED;case ga.DATA_LOSS:return oi.DATA_LOSS;default:return ri()}}(ma=ga||(ga={}))[ma.OK=0]="OK",ma[ma.CANCELLED=1]="CANCELLED",ma[ma.UNKNOWN=2]="UNKNOWN",ma[ma.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ma[ma.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ma[ma.NOT_FOUND=5]="NOT_FOUND",ma[ma.ALREADY_EXISTS=6]="ALREADY_EXISTS",ma[ma.PERMISSION_DENIED=7]="PERMISSION_DENIED",ma[ma.UNAUTHENTICATED=16]="UNAUTHENTICATED",ma[ma.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ma[ma.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ma[ma.ABORTED=10]="ABORTED",ma[ma.OUT_OF_RANGE=11]="OUT_OF_RANGE",ma[ma.UNIMPLEMENTED=12]="UNIMPLEMENTED",ma[ma.INTERNAL=13]="INTERNAL",ma[ma.UNAVAILABLE=14]="UNAVAILABLE",ma[ma.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
let wa=null;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */function ba(){return new TextEncoder}
/**
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
 */const _a=new Gr([4294967295,4294967295],0);function Ea(t){const e=ba().encode(t),n=new Kr;return n.update(e),new Uint8Array(n.digest())}function Ta(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([i,s],0)]}class Ca{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Sa(`Invalid padding: ${e}`);if(n<0)throw new Sa(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Sa(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Sa(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Gr.fromNumber(this.Te)}de(t,e,n){let r=t.add(e.multiply(Gr.fromNumber(n)));return 1===r.compare(_a)&&(r=new Gr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=Ea(t),[n,r]=Ta(e);for(let i=0;i<this.hashCount;i++){const t=this.de(n,r,i);if(!this.Ae(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new Ca(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Te)return;const e=Ea(t),[n,r]=Ta(e);for(let i=0;i<this.hashCount;i++){const t=this.de(n,r,i);this.Re(t)}}Re(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class Ia{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ka.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ia(Ei.min(),r,new Wi(wi),_o(),xo())}}class ka{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ka(n,e,xo(),xo(),xo())}}
/**
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
 */class Aa{constructor(t,e,n,r){this.Ve=t,this.removedTargetIds=e,this.key=n,this.me=r}}class Ra{constructor(t,e){this.targetId=t,this.fe=e}}class xa{constructor(t,e,n=es.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Da{constructor(){this.ge=0,this.pe=Oa(),this.ye=es.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=xo(),e=xo(),n=xo();return this.pe.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ri()}})),new ka(this.ye,this.we,t,e,n)}Fe(){this.Se=!1,this.pe=Oa()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class Na{constructor(t){this.Le=t,this.ke=new Map,this.qe=_o(),this.Qe=Ma(),this.Ke=new Wi(wi)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.Ce(t.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(t.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(e);break;case 3:this.je(e)&&(n.Be(),n.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.Ce(t.resumeToken));break;default:ri()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.fe.count,r=this.Ye(e);if(r){const i=r.target;if(eo(i))if(0===n){const t=new ki(i.path);this.We(e,t,As.newNoDocument(t,Ei.min()))}else ii(1===n);else{const r=this.Ze(e);if(r!==n){const n=this.Xe(t),i=n?this.et(n,t,r):1;if(0!==i){this.He(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==wa||wa.tt(function(t,e,n,r,i){var s,o,a,u,c,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},f=e.unchangedNames;return f&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==f?void 0:f.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(u=null===(a=null===(o=null==f?void 0:f.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==u?u:0,padding:null!==(l=null===(c=null==f?void 0:f.bits)||void 0===c?void 0:c.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
/**
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
 */(r,t.fe,this.Le.nt(),n,i))}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=ss(n).toUint8Array()}catch(t){if(t instanceof ts)return ei("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Ca(s,r,i)}catch(t){return ei(t instanceof Sa?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Te?null:o}et(t,e,n){return e.fe.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.We(e,n,null),r++)})),r}it(t){const e=new Map;this.ke.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&eo(i.target)){const e=new ki(i.target.path);null!==this.qe.get(e)||this.st(r,e)||this.We(r,e,As.newNoDocument(e,t))}n.De&&(e.set(r,n.ve()),n.Fe())}}));let n=xo();this.Qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.qe.forEach(((e,n)=>n.setReadTime(t)));const r=new Ia(t,e,this.Ke,this.qe,n);return this.qe=_o(),this.Qe=Ma(),this.Ke=new Wi(wi),r}Ue(t,e){if(!this.je(t))return;const n=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,n),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const r=this.ze(t);this.st(t,e)?r.Me(e,1):r.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),n&&(this.qe=this.qe.insert(e,n))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Da,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Yi(wi),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||Zr("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Da),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ma(){return new Wi(ki.comparator)}function Oa(){return new Wi(ki.comparator)}const La=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Pa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Fa=(()=>{const t={and:"AND",or:"OR"};return t})();class Va{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ua(t,e){return t.useProto3Json||Ui(e)?e:{value:e}}function Ba(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ja(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qa(t,e){return Ba(t,e.toTimestamp())}function $a(t){return ii(!!t),Ei.fromTimestamp(function(t){const e=rs(t);return new _i(e.seconds,e.nanos)}(t))}function Ha(t,e){return function(t){return new Ci(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function za(t){const e=Ci.fromString(t);return ii(pu(e)),e}function Ka(t,e){return Ha(t.databaseId,e.path)}function Ga(t,e){const n=za(e);if(n.get(1)!==t.databaseId.projectId)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ki(Ya(n))}function Wa(t,e){return Ha(t.databaseId,e)}function Qa(t){const e=za(t);return 4===e.length?Ci.emptyPath():Ya(e)}function Ja(t){return new Ci(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ya(t){return ii(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Xa(t,e,n){return{name:Ka(t,e),fields:n.value.mapValue.fields}}function Za(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ri()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(ii(void 0===e||"string"==typeof e),es.fromBase64String(e||"")):(ii(void 0===e||e instanceof Uint8Array),es.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?oi.UNKNOWN:va(t.code);return new ai(e,t.message||"")}(o);n=new xa(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ga(t,r.document.name),s=$a(r.document.updateTime),o=r.document.createTime?$a(r.document.createTime):Ei.min(),a=new Is({mapValue:{fields:r.document.fields}}),u=As.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Aa(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ga(t,r.document),s=r.readTime?$a(r.readTime):Ei.min(),o=As.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Aa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ga(t,r.document),s=r.removedTargetIds||[];n=new Aa([],s,i,null)}else{if(!("filter"in e))return ri();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new pa(r,i),o=t.targetId;n=new Ra(o,s)}}return n}function tu(t,e){let n;if(e instanceof ia)n={update:Xa(t,e.key,e.value)};else if(e instanceof ca)n={delete:Ka(t,e.key)};else if(e instanceof sa)n={update:Xa(t,e.key,e.data),updateMask:du(e.fieldMask)};else{if(!(e instanceof la))return ri();n={verify:Ka(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Bo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof jo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof $o)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof zo)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw ri()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:qa(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ri()}(t,e.precondition)),n}function eu(t,e){return t&&t.length>0?(ii(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?$a(t.updateTime):$a(e);return n.isEqual(Ei.min())&&(n=$a(e)),new Qo(n,t.transformResults||[])}(t,e)))):[]}function nu(t,e){return{documents:[Wa(t,e.path)]}}function ru(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Wa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Wa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return fu(Ps.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:lu(t.field),direction:au(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ua(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function iu(t){let e=Qa(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ii(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=ou(t);return e instanceof Ps&&Vs(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Ns(hu(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ui(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new Rs(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Rs(n,e)}(n.endAt)),ro(e,i,o,s,a,"F",u,c)}function su(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ri()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function ou(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hu(t.unaryFilter.field);return Ls.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hu(t.unaryFilter.field);return Ls.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hu(t.unaryFilter.field);return Ls.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=hu(t.unaryFilter.field);return Ls.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ri()}}(t):void 0!==t.fieldFilter?function(t){return Ls.create(hu(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ri()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Ps.create(t.compositeFilter.filters.map((t=>ou(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ri()}}(t.compositeFilter.op))}(t):ri()}function au(t){return La[t]}function uu(t){return Pa[t]}function cu(t){return Fa[t]}function lu(t){return{fieldPath:t.canonicalString()}}function hu(t){return Ii.fromServerFormat(t.fieldPath)}function fu(t){return t instanceof Ls?function(t){if("=="===t.op){if(Es(t.value))return{unaryFilter:{field:lu(t.field),op:"IS_NAN"}};if(_s(t.value))return{unaryFilter:{field:lu(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Es(t.value))return{unaryFilter:{field:lu(t.field),op:"IS_NOT_NAN"}};if(_s(t.value))return{unaryFilter:{field:lu(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lu(t.field),op:uu(t.op),value:t.value}}}(t):t instanceof Ps?function(t){const e=t.getFilters().map((t=>fu(t)));return 1===e.length?e[0]:{compositeFilter:{op:cu(t.op),filters:e}}}(t):ri()}function du(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function pu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */class gu{constructor(t,e,n,r,i=Ei.min(),s=Ei.min(),o=es.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new gu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new gu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new gu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new gu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
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
 */class mu{constructor(t){this.ut=t}}function yu(t){const e=iu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?lo(e,e.limit,"L"):e}
/**
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
 */
class vu{constructor(){}ht(t,e){this.Pt(t,e),e.It()}Pt(t,e){if("nullValue"in t)this.Tt(e,5);else if("booleanValue"in t)this.Tt(e,10),e.Et(t.booleanValue?1:0);else if("integerValue"in t)this.Tt(e,15),e.Et(is(t.integerValue));else if("doubleValue"in t){const n=is(t.doubleValue);isNaN(n)?this.Tt(e,13):(this.Tt(e,15),Bi(n)?e.Et(0):e.Et(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Tt(e,20),"string"==typeof n?e.dt(n):(e.dt(`${n.seconds||""}`),e.Et(n.nanos||0))}else if("stringValue"in t)this.At(t.stringValue,e),this.Rt(e);else if("bytesValue"in t)this.Tt(e,30),e.Vt(ss(t.bytesValue)),this.Rt(e);else if("referenceValue"in t)this.ft(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Tt(e,45),e.Et(n.latitude||0),e.Et(n.longitude||0)}else"mapValue"in t?Ss(t)?this.Tt(e,Number.MAX_SAFE_INTEGER):(this.gt(t.mapValue,e),this.Rt(e)):"arrayValue"in t?(this.yt(t.arrayValue,e),this.Rt(e)):ri()}At(t,e){this.Tt(e,25),this.wt(t,e)}wt(t,e){e.dt(t)}gt(t,e){const n=t.fields||{};this.Tt(e,55);for(const r of Object.keys(n))this.At(r,e),this.Pt(n[r],e)}yt(t,e){const n=t.values||[];this.Tt(e,50);for(const r of n)this.Pt(r,e)}ft(t,e){this.Tt(e,37),ki.fromName(t).path.forEach((t=>{this.Tt(e,60),this.wt(t,e)}))}Tt(t,e){t.Et(e)}Rt(t){t.Et(2)}}vu.St=new vu;
/**
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
 */
class wu{constructor(){this.on=new bu}addToCollectionParentIndex(t,e){return this.on.add(e),Pi.resolve()}getCollectionParents(t,e){return Pi.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return Pi.resolve()}deleteFieldIndex(t,e){return Pi.resolve()}deleteAllFieldIndexes(t){return Pi.resolve()}createTargetIndexes(t,e){return Pi.resolve()}getDocumentsMatchingTarget(t,e){return Pi.resolve(null)}getIndexType(t,e){return Pi.resolve(0)}getFieldIndexes(t,e){return Pi.resolve([])}getNextCollectionGroupToUpdate(t){return Pi.resolve(null)}getMinOffset(t,e){return Pi.resolve(Di.min())}getMinOffsetFromCollectionGroup(t,e){return Pi.resolve(Di.min())}updateCollectionGroup(t,e,n){return Pi.resolve()}updateIndexEntries(t,e){return Pi.resolve()}}class bu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Yi(Ci.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Yi(Ci.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class _u{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new _u(t,_u.DEFAULT_COLLECTION_PERCENTILE,_u.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */_u.DEFAULT_COLLECTION_PERCENTILE=10,_u.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_u.DEFAULT=new _u(41943040,_u.DEFAULT_COLLECTION_PERCENTILE,_u.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_u.DISABLED=new _u(-1,0,0);
/**
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
 */
class Eu{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Eu(0)}static Nn(){return new Eu(-1)}}
/**
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
 */
/**
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
 */
class Tu{constructor(){this.changes=new wo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,As.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Pi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class Cu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class Su{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ea(n.mutation,t,Zi.empty(),_i.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,xo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=xo()){const r=So();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=To();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=So();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,xo())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=_o();const s=ko(),o=function(){return ko()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof sa)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),ea(o.mutation,e,o.mutation.getFieldMask(),_i.now())):s.set(e.key,Zi.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Cu(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ko();let r=new Wi(((t,e)=>t-e)),i=xo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Zi.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||xo()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=Io();u.forEach((t=>{if(!i.has(t)){const r=Zo(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Pi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return ki.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):oo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Pi.resolve(So());let o=-1,a=i;return s.next((e=>Pi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Pi.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,xo()))).next((t=>({batchId:o,changes:Co(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ki(e)).next((t=>{let e=To();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=To();return this.indexManager.getCollectionParents(t,i).next((o=>Pi.forEach(o,(o=>{const a=function(t,e){return new no(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,As.newInvalidDocument(r)))}));let n=To();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&ea(s.mutation,r,Zi.empty(),_i.now()),go(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
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
 */class Iu{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return Pi.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(t){return{id:t.id,version:t.version,createTime:$a(t.createTime)}}(e)),Pi.resolve()}getNamedQuery(t,e){return Pi.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(t){return{name:t.name,query:yu(t.bundledQuery),readTime:$a(t.readTime)}}(e)),Pi.resolve()}}
/**
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
 */class ku{constructor(){this.overlays=new Wi(ki.comparator),this.lr=new Map}getOverlay(t,e){return Pi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=So();return Pi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.lt(t,e,r)})),Pi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.lr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.lr.delete(n)),Pi.resolve()}getOverlaysForCollection(t,e,n){const r=So(),i=e.length+1,s=new ki(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Pi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Wi(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=So(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=So(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Pi.resolve(o)}lt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new da(e,n));let i=this.lr.get(e);void 0===i&&(i=xo(),this.lr.set(e,i)),this.lr.set(e,i.add(n.key))}}
/**
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
 */class Au{constructor(){this.hr=new Yi(Ru.Pr),this.Ir=new Yi(Ru.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const n=new Ru(t,e);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.dr(new Ru(t,e))}Ar(t,e){t.forEach((t=>this.removeReference(t,e)))}Rr(t){const e=new ki(new Ci([])),n=new Ru(e,t),r=new Ru(e,t+1),i=[];return this.Ir.forEachInRange([n,r],(t=>{this.dr(t),i.push(t.key)})),i}Vr(){this.hr.forEach((t=>this.dr(t)))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new ki(new Ci([])),n=new Ru(e,t),r=new Ru(e,t+1);let i=xo();return this.Ir.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Ru(t,0),n=this.hr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ru{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return ki.comparator(t.key,e.key)||wi(t.gr,e.gr)}static Tr(t,e){return wi(t.gr,e.gr)||ki.comparator(t.key,e.key)}}
/**
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
 */class xu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new Yi(Ru.Pr)}checkEmpty(t){return Pi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ha(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.yr=this.yr.add(new Ru(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Pi.resolve(s)}lookupMutationBatch(t,e){return Pi.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Sr(n),i=r<0?0:r;return Pi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Pi.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(t){return Pi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ru(e,0),r=new Ru(e,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([n,r],(t=>{const e=this.wr(t.gr);i.push(e)})),Pi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Yi(wi);return e.forEach((t=>{const e=new Ru(t,0),r=new Ru(t,Number.POSITIVE_INFINITY);this.yr.forEachInRange([e,r],(t=>{n=n.add(t.gr)}))})),Pi.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;ki.isDocumentKey(i)||(i=i.child(""));const s=new Ru(new ki(i),0);let o=new Yi(wi);return this.yr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.gr)),!0)}),s),Pi.resolve(this.br(o))}br(t){const e=[];return t.forEach((t=>{const n=this.wr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ii(0===this.Dr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return Pi.forEach(e.mutations,(r=>{const i=new Ru(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.yr=n}))}Fn(t){}containsKey(t,e){const n=new Ru(e,0),r=this.yr.firstAfterOrEqual(n);return Pi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Pi.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class Du{constructor(t){this.Cr=t,this.docs=function(){return new Wi(ki.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Pi.resolve(n?n.document.mutableCopy():As.newInvalidDocument(e))}getEntries(t,e){let n=_o();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():As.newInvalidDocument(t))})),Pi.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=_o();const s=e.path,o=new ki(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Ni(xi(o),n)<=0||(r.has(o.key)||go(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Pi.resolve(i)}getAllFromCollectionGroup(t,e,n,r){ri()}vr(t,e){return Pi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Nu(this)}getSize(t){return Pi.resolve(this.size)}}class Nu extends Tu{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this._r.addEntry(t,r)):this._r.removeEntry(n)})),Pi.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}
/**
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
 */class Mu{constructor(t){this.persistence=t,this.Fr=new wo((t=>Zs(t)),to),this.lastRemoteSnapshotVersion=Ei.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Au,this.targetCount=0,this.Nr=Eu.On()}forEachTarget(t,e){return this.Fr.forEach(((t,n)=>e(n))),Pi.resolve()}getLastRemoteSnapshotVersion(t){return Pi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Pi.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),Pi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Mr&&(this.Mr=e),Pi.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new Eu(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,Pi.resolve()}updateTargetData(t,e){return this.kn(e),Pi.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,Pi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Fr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Pi.waitFor(i).next((()=>r))}getTargetCount(t){return Pi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fr.get(e)||null;return Pi.resolve(n)}addMatchingKeys(t,e,n){return this.Or.Er(e,n),Pi.resolve()}removeMatchingKeys(t,e,n){this.Or.Ar(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Pi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),Pi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Or.mr(e);return Pi.resolve(n)}containsKey(t,e){return Pi.resolve(this.Or.containsKey(e))}}
/**
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
 */class Ou{constructor(t,e){this.Br={},this.overlays={},this.Lr=new Vi(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Mu(this),this.indexManager=new wu,this.remoteDocumentCache=function(t){return new Du(t)}((t=>this.referenceDelegate.Qr(t))),this.serializer=new mu(e),this.Kr=new Iu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ku,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new xu(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,n){Zr("MemoryPersistence","Starting transaction:",t);const r=new Lu(this.Lr.next());return this.referenceDelegate.$r(),n(r).next((t=>this.referenceDelegate.Ur(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Wr(t,e){return Pi.or(Object.values(this.Br).map((n=>()=>n.containsKey(t,e))))}}class Lu extends Oi{constructor(t){super(),this.currentSequenceNumber=t}}class Pu{constructor(t){this.persistence=t,this.Gr=new Au,this.zr=null}static jr(t){return new Pu(t)}get Hr(){if(this.zr)return this.zr;throw ri()}addReference(t,e,n){return this.Gr.addReference(n,e),this.Hr.delete(n.toString()),Pi.resolve()}removeReference(t,e,n){return this.Gr.removeReference(n,e),this.Hr.add(n.toString()),Pi.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),Pi.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach((t=>this.Hr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Pi.forEach(this.Hr,(n=>{const r=ki.fromPath(n);return this.Jr(t,r).next((t=>{t||e.removeEntry(r,Ei.min())}))})).next((()=>(this.zr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Jr(t,e).next((t=>{t?this.Hr.delete(e.toString()):this.Hr.add(e.toString())}))}Qr(t){return 0}Jr(t,e){return Pi.or([()=>Pi.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}
/**
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
 */
class Fu{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ki=n,this.qi=r}static Qi(t,e){let n=xo(),r=xo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Fu(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Vu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
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
 */class Uu{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.zi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.ji(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Vu;return this.Hi(t,e,n).next((r=>{if(i.result=r,this.$i)return this.Ji(t,e,n,r.size)}))})).next((()=>i.result))}Ji(t,e,n,r){return n.documentReadCount<this.Ui?(Xr()<=o["in"].DEBUG&&Zr("QueryEngine","SDK will not create cache indexes for query:",po(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),Pi.resolve()):(Xr()<=o["in"].DEBUG&&Zr("QueryEngine","Query:",po(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(Xr()<=o["in"].DEBUG&&Zr("QueryEngine","The SDK decides to create cache indexes for query:",po(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,uo(e))):Pi.resolve())}zi(t,e){if(so(e))return Pi.resolve(null);let n=uo(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=lo(e,null,"F"),n=uo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=xo(...r);return this.Gi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Yi(e,r);return this.Zi(e,s,i,n.readTime)?this.zi(t,lo(e,null,"F")):this.Xi(t,s,e,n)}))))})))))}ji(t,e,n,r){return so(e)||r.isEqual(Ei.min())?Pi.resolve(null):this.Gi.getDocuments(t,n).next((i=>{const s=this.Yi(e,i);return this.Zi(e,s,n,r)?Pi.resolve(null):(Xr()<=o["in"].DEBUG&&Zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),po(e)),this.Xi(t,s,e,Ri(r,-1)).next((t=>t)))}))}Yi(t,e){let n=new Yi(yo(t));return e.forEach(((e,r)=>{go(t,r)&&(n=n.add(r))})),n}Zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(t,e,n){return Xr()<=o["in"].DEBUG&&Zr("QueryEngine","Using full collection scan to execute query:",po(e)),this.Gi.getDocumentsMatchingQuery(t,e,Di.min(),n)}Xi(t,e,n,r){return this.Gi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class Bu{constructor(t,e,n,r){this.persistence=t,this.es=e,this.serializer=r,this.ts=new Wi(wi),this.ns=new wo((t=>Zs(t)),to),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(n)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Su(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ts)))}}function ju(t,e,n,r){return new Bu(t,e,n,r)}async function qu(t,e){const n=si(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=xo();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({_s:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function $u(t,e){const n=si(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Pi.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);ii(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=xo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Hu(t){const e=si(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qr.getLastRemoteSnapshotVersion(t)))}function zu(t,e){const n=si(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const o=[];e.targetChanges.forEach(((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.qr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.qr.addMatchingKeys(t,s.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?c=c.withResumeToken(es.EMPTY_BYTE_STRING,Ei.min()).withLastLimboFreeSnapshotVersion(Ei.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,s)&&o.push(n.qr.updateTargetData(t,c))}));let a=_o(),u=xo();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Ku(t,s,e.documentUpdates).next((t=>{a=t.us,u=t.cs}))),!r.isEqual(Ei.min())){const e=n.qr.getLastRemoteSnapshotVersion(t).next((e=>n.qr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Pi.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.ts=i,t)))}function Ku(t,e,n){let r=xo(),i=xo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=_o();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ei.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{us:r,cs:i}}))}function Gu(t,e){const n=si(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Wu(t,e){const n=si(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.qr.getTargetData(t,e).next((i=>i?(r=i,Pi.resolve(r)):n.qr.allocateTargetId(t).next((i=>(r=new gu(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.qr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.ts.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(t.targetId,t),n.ns.set(e,t.targetId)),t}))}async function Qu(t,e,n){const r=si(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Fi(t))throw t;Zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Ju(t,e,n){const r=si(t);let i=Ei.min(),s=xo();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=si(t),i=r.ns.get(n);return void 0!==i?Pi.resolve(r.ts.get(i)):r.qr.getTargetData(e,n)}(r,t,uo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.es.getDocumentsMatchingQuery(t,e,n?i:Ei.min(),n?s:xo()))).next((t=>(Yu(r,mo(e),t),{documents:t,ls:s})))))}function Yu(t,e,n){let r=t.rs.get(e)||Ei.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.rs.set(e,r)}class Xu{constructor(){this.activeTargetIds=No()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zu{constructor(){this.eo=new Xu,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,n){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Xu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class tc{ro(t){}shutdown(){}}
/**
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
 */class ec{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){Zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let nc=null;function rc(){return null===nc?nc=function(){return 268435456+Math.round(2147483648*Math.random())}():nc++,"0x"+nc.toString(16)
/**
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
 */}const ic={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class sc{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}
/**
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
 */const oc="WebChannelConnection";class ac extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=e+"://"+t.host,this.fo=`projects/${n}/databases/${r}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get yo(){return!1}wo(t,e,n,r,i){const s=rc(),o=this.So(t,e);Zr("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(a,r,i),this.Do(t,o,a,n).then((e=>(Zr("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw ei("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Co(t,e,n,r,i,s){return this.wo(t,e,n,r,i)}bo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}So(t,e){const n=ic[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,n,r){const i=rc();return new Promise(((s,o)=>{const a=new zr;a.setWithCredentials(!0),a.listenOnce(Br.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ur.NO_ERROR:const e=a.getResponseJson();Zr(oc,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case Ur.TIMEOUT:Zr(oc,`RPC '${t}' ${i} timed out`),o(new ai(oi.DEADLINE_EXCEEDED,"Request time out"));break;case Ur.HTTP_ERROR:const n=a.getStatus();if(Zr(oc,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(oi).indexOf(e)>=0?e:oi.UNKNOWN}(e.status);o(new ai(t,e.message))}else o(new ai(oi.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ai(oi.UNAVAILABLE,"Connection failed."));break;default:ri()}}finally{Zr(oc,`RPC '${t}' ${i} completed.`)}}));const u=JSON.stringify(r);Zr(oc,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",u,n,15)}))}vo(t,e,n){const r=rc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Fr(),o=Vr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.xmlHttpFactory=new $r({})),this.bo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");Zr(oc,`Creating RPC '${t}' stream ${r}: ${c}`,a);const l=s.createWebChannel(c,a);let h=!1,f=!1;const d=new sc({co:e=>{f?Zr(oc,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Zr(oc,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Zr(oc,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},lo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,Hr.EventType.OPEN,(()=>{f||Zr(oc,`RPC '${t}' stream ${r} transport opened.`)})),p(l,Hr.EventType.CLOSE,(()=>{f||(f=!0,Zr(oc,`RPC '${t}' stream ${r} transport closed`),d.Ro())})),p(l,Hr.EventType.ERROR,(e=>{f||(f=!0,ei(oc,`RPC '${t}' stream ${r} transport errored:`,e),d.Ro(new ai(oi.UNAVAILABLE,"The operation could not be completed")))})),p(l,Hr.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];ii(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Zr(oc,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=ga[t];if(void 0!==e)return va(e)}(e),i=o.message;void 0===n&&(n=oi.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),f=!0,d.Ro(new ai(n,i)),l.close()}else Zr(oc,`RPC '${t}' stream ${r} received:`,i),d.Vo(i)}})),p(o,jr.STAT_EVENT,(e=>{e.stat===qr.PROXY?Zr(oc,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===qr.NOPROXY&&Zr(oc,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.Ao()}),0),d}}
/**
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
 */
/**
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
 */function uc(){return"undefined"!=typeof document?document:null}
/**
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
 */function cc(t){return new Va(t,!0)}
/**
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
 */class lc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.si=t,this.timerId=e,this.Fo=n,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,e-n);r>0&&Zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Bo=Date.now(),t()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
/**
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
 */class hc{constructor(t,e,n,r,i,s,o,a){this.si=t,this.Ko=n,this.$o=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new lc(t,e)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==t?this.zo.reset():e&&e.code===oi.RESOURCE_EXHAUSTED?(ti(e.toString()),ti("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===oi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Uo===e&&this.s_(t,n)}),(e=>{t((()=>{const t=new ai(oi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.o_(t)}))}))}s_(t,e){const n=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho((()=>{n((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((t=>{n((()=>this.o_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(t){return Zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget((()=>this.Uo===t?e():(Zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fc extends hc{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=Za(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ei.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ei.min():e.readTime?$a(e.readTime):Ei.min()}(t);return this.listener.a_(e,n)}u_(t){const e={};e.database=Ja(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=eo(r)?{documents:nu(t,r)}:{query:ru(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=ja(t,e.resumeToken);const r=Ua(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Ei.min())>0){n.readTime=Ba(t,e.snapshotVersion.toTimestamp());const r=Ua(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=su(this.serializer,t);n&&(e.labels=n),this.e_(e)}c_(t){const e={};e.database=Ja(this.serializer),e.removeTarget=t,this.e_(e)}}class dc extends hc{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(ii(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=eu(t.writeResults,t.commitTime),n=$a(t.commitTime);return this.listener.I_(n,e)}return ii(!t.writeResults||0===t.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Ja(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>tu(this.serializer,t)))};this.e_(e)}}
/**
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
 */class pc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.wo(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(oi.UNKNOWN,t.toString())}))}Co(t,e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Co(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(oi.UNKNOWN,t.toString())}))}terminate(){this.d_=!0}}class gc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(t){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,"Online"===t&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(ti(e),this.f_=!1):Zr("OnlineStateTracker",e)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
/**
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
 */class mc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro((t=>{n.enqueueAndForget((async()=>{Sc(this)&&(Zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=si(t);e.C_.add(4),await vc(e),e.M_.set("Unknown"),e.C_.delete(4),await yc(e)}(this))}))})),this.M_=new gc(n,r)}}async function yc(t){if(Sc(t))for(const e of t.v_)await e(!0)}async function vc(t){for(const e of t.v_)await e(!1)}function wc(t,e){const n=si(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Cc(n)?Tc(n):$c(n).Ho()&&_c(n,e))}function bc(t,e){const n=si(t),r=$c(n);n.D_.delete(e),r.Ho()&&Ec(n,e),0===n.D_.size&&(r.Ho()?r.Zo():Sc(n)&&n.M_.set("Unknown"))}function _c(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ei.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$c(t).u_(e)}function Ec(t,e){t.x_.Oe(e),$c(t).c_(e)}function Tc(t){t.x_=new Na({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),$c(t).start(),t.M_.g_()}function Cc(t){return Sc(t)&&!$c(t).jo()&&t.D_.size>0}function Sc(t){return 0===si(t).C_.size}function Ic(t){t.x_=void 0}async function kc(t){t.D_.forEach(((e,n)=>{_c(t,e)}))}async function Ac(t,e){Ic(t),Cc(t)?(t.M_.w_(e),Tc(t)):t.M_.set("Unknown")}async function Rc(t,e,n){if(t.M_.set("Online"),e instanceof xa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.D_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.D_.delete(r),t.x_.removeTarget(r))}(t,e)}catch(n){Zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await xc(t,n)}else if(e instanceof Aa?t.x_.$e(e):e instanceof Ra?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(Ei.min()))try{const e=await Hu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.x_.it(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.D_.get(r);i&&t.D_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.D_.get(e);if(!r)return;t.D_.set(e,r.withResumeToken(es.EMPTY_BYTE_STRING,r.snapshotVersion)),Ec(t,e);const i=new gu(r.target,e,n,r.sequenceNumber);_c(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zr("RemoteStore","Failed to raise snapshot:",e),await xc(t,e)}}async function xc(t,e,n){if(!Fi(e))throw e;t.C_.add(1),await vc(t),t.M_.set("Offline"),n||(n=()=>Hu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Zr("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await yc(t)}))}function Dc(t,e){return e().catch((n=>xc(t,n,e)))}async function Nc(t){const e=si(t),n=Hc(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Mc(e);)try{const t=await Gu(e.localStore,r);if(null===t){0===e.b_.length&&n.Zo();break}r=t.batchId,Oc(e,t)}catch(t){await xc(e,t)}Lc(e)&&Pc(e)}function Mc(t){return Sc(t)&&t.b_.length<10}function Oc(t,e){t.b_.push(e);const n=Hc(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Lc(t){return Sc(t)&&!Hc(t).jo()&&t.b_.length>0}function Pc(t){Hc(t).start()}async function Fc(t){Hc(t).E_()}async function Vc(t){const e=Hc(t);for(const n of t.b_)e.P_(n.mutations)}async function Uc(t,e,n){const r=t.b_.shift(),i=fa.from(r,e,n);await Dc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Nc(t)}async function Bc(t,e){e&&Hc(t).h_&&await async function(t,e){if(function(t){return ya(t)&&t!==oi.ABORTED}(e.code)){const n=t.b_.shift();Hc(t).Yo(),await Dc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Nc(t)}}(t,e),Lc(t)&&Pc(t)}async function jc(t,e){const n=si(t);n.asyncQueue.verifyOperationInProgress(),Zr("RemoteStore","RemoteStore received new credentials");const r=Sc(n);n.C_.add(3),await vc(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await yc(n)}async function qc(t,e){const n=si(t);e?(n.C_.delete(2),await yc(n)):e||(n.C_.add(2),await vc(n),n.M_.set("Unknown"))}function $c(t){return t.O_||(t.O_=function(t,e,n){const r=si(t);return r.A_(),new fc(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(t.datastore,t.asyncQueue,{ho:kc.bind(null,t),Io:Ac.bind(null,t),a_:Rc.bind(null,t)}),t.v_.push((async e=>{e?(t.O_.Yo(),Cc(t)?Tc(t):t.M_.set("Unknown")):(await t.O_.stop(),Ic(t))}))),t.O_}function Hc(t){return t.N_||(t.N_=function(t,e,n){const r=si(t);return r.A_(),new dc(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{ho:Fc.bind(null,t),Io:Bc.bind(null,t),T_:Vc.bind(null,t),I_:Uc.bind(null,t)}),t.v_.push((async e=>{e?(t.N_.Yo(),await Nc(t)):(await t.N_.stop(),t.b_.length>0&&(Zr("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))}))),t.N_
/**
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
 */}class zc{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new zc(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ai(oi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kc(t,e){if(ti("AsyncQueue",`${e}: ${t}`),Fi(t))return new ai(oi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class Gc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ki.comparator(e.key,n.key):(t,e)=>ki.comparator(t.key,e.key),this.keyedMap=To(),this.sortedSet=new Wi(this.comparator)}static emptySet(t){return new Gc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Gc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Gc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class Wc{constructor(){this.B_=new Wi(ki.comparator)}track(t){const e=t.doc.key,n=this.B_.get(e);n?0!==t.type&&3===n.type?this.B_=this.B_.insert(e,t):3===t.type&&1!==n.type?this.B_=this.B_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.B_=this.B_.remove(e):1===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):ri():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Qc{constructor(t,e,n,r,i,s,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Qc(t,e,Gc.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ho(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class Jc{constructor(){this.k_=void 0,this.listeners=[]}}class Yc{constructor(){this.queries=new wo((t=>fo(t)),ho),this.onlineState="Unknown",this.q_=new Set}}async function Xc(t,e){const n=si(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Jc),i)try{s.k_=await n.onListen(r)}catch(t){const n=Kc(t,`Initialization of query '${po(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&nl(n)}async function Zc(t,e){const n=si(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function tl(t,e){const n=si(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.K_(i)&&(r=!0);e.k_=i}}r&&nl(n)}function el(t,e,n){const r=si(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function nl(t){t.q_.forEach((t=>{t.next()}))}class rl{constructor(t,e,n){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}K_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Qc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.J_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}H_(t){t=Qc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}
/**
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
 */
/**
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
 */
class il{constructor(t){this.key=t}}class sl{constructor(t){this.key=t}}class ol{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=xo(),this.mutatedKeys=xo(),this._a=yo(t),this.aa=new Gc(this._a)}get ua(){return this.ia}ca(t,e){const n=e?e.la:new Wc,r=e?e.aa:this.aa;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),l=go(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;c&&l?c.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.ha(c,l)||(n.track({type:2,doc:l}),d=!0,(a&&this._a(l,a)>0||u&&this._a(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),d=!0):c&&!l&&(n.track({type:1,doc:c}),d=!0,(a||u)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{aa:s,la:n,Zi:o,mutatedKeys:i}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const i=t.la.L_();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ri()}};return n(t)-n(e)}
/**
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
 */(t.type,e.type)||this._a(t.doc,e.doc))),this.Pa(n);const s=e?this.Ia():[],o=0===this.oa.size&&this.current?1:0,a=o!==this.sa;return this.sa=o,0!==i.length||a?{snapshot:new Qc(this.query,t.aa,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:s}:{Ta:s}}Q_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({aa:this.aa,la:new Wc,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach((t=>this.ia=this.ia.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.ia=this.ia.delete(t))),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=xo(),this.aa.forEach((t=>{this.Ea(t.key)&&(this.oa=this.oa.add(t.key))}));const e=[];return t.forEach((t=>{this.oa.has(t)||e.push(new sl(t))})),this.oa.forEach((n=>{t.has(n)||e.push(new il(n))})),e}da(t){this.ia=t.ls,this.oa=xo();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return Qc.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class al{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ul{constructor(t){this.key=t,this.Ra=!1}}class cl{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new wo((t=>fo(t)),ho),this.fa=new Map,this.ga=new Set,this.pa=new Wi(ki.comparator),this.ya=new Map,this.wa=new Au,this.Sa={},this.ba=new Map,this.Da=Eu.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function ll(t,e){const n=Rl(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const t=await Wu(n.localStore,uo(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await hl(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&wc(n.remoteStore,t)}return i}async function hl(t,e,n,r,i){t.va=(e,n,r)=>async function(t,e,n,r){let i=e.view.ca(n);i.Zi&&(i=await Ju(t.localStore,e.query,!1).then((({documents:t})=>e.view.ca(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Tl(t,e.targetId,o.Ta),o.snapshot}(t,e,n,r);const s=await Ju(t.localStore,e,!0),o=new ol(e,s.ls),a=o.ca(s.documents),u=ka.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),c=o.applyChanges(a,t.isPrimaryClient,u);Tl(t,n,c.Ta);const l=new al(e,n,o);return t.ma.set(e,l),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function fl(t,e){const n=si(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter((t=>!ho(t,e)))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Qu(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),bc(n.remoteStore,r.targetId),_l(n,r.targetId)})).catch(Li)):(_l(n,r.targetId),await Qu(n.localStore,r.targetId,!0))}async function dl(t,e,n){const r=xl(t);try{const t=await function(t,e){const n=si(t),r=_i.now(),i=e.reduce(((t,e)=>t.add(e.key)),xo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=_o(),u=xo();return n.ss.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=na(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new sa(t.key,e,ks(e.value.mapValue),Jo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Co(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Sa[t.currentUser.toKey()];r||(r=new Wi(wi)),r=r.insert(e,n),t.Sa[t.currentUser.toKey()]=r}(r,t.batchId,n),await Il(r,t.changes),await Nc(r.remoteStore)}catch(t){const e=Kc(t,"Failed to persist write");n.reject(e)}}async function pl(t,e){const n=si(t);try{const t=await zu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ya.get(e);r&&(ii(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ra=!0:t.modifiedDocuments.size>0?ii(r.Ra):t.removedDocuments.size>0&&(ii(r.Ra),r.Ra=!1))})),await Il(n,t,e)}catch(t){await Li(t)}}function gl(t,e,n){const r=si(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ma.forEach(((n,r)=>{const i=r.view.Q_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=si(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Q_(e)&&(r=!0)})),r&&nl(n)}(r.eventManager,e),t.length&&r.Va.a_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ml(t,e,n){const r=si(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let t=new Wi(ki.comparator);t=t.insert(s,As.newNoDocument(s,Ei.min()));const n=xo().add(s),i=new Ia(Ei.min(),new Map,new Wi(wi),t,n);await pl(r,i),r.pa=r.pa.remove(s),r.ya.delete(e),Sl(r)}else await Qu(r.localStore,e,!1).then((()=>_l(r,e,n))).catch(Li)}async function yl(t,e){const n=si(t),r=e.batch.batchId;try{const t=await $u(n.localStore,e);bl(n,r,null),wl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Il(n,t)}catch(t){await Li(t)}}async function vl(t,e,n){const r=si(t);try{const t=await function(t,e){const n=si(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ii(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);bl(r,e,n),wl(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Il(r,t)}catch(n){await Li(n)}}function wl(t,e){(t.ba.get(e)||[]).forEach((t=>{t.resolve()})),t.ba.delete(e)}function bl(t,e,n){const r=si(t);let i=r.Sa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function _l(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach((e=>{t.wa.containsKey(e)||El(t,e)}))}function El(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);null!==n&&(bc(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Sl(t))}function Tl(t,e,n){for(const r of n)r instanceof il?(t.wa.addReference(r.key,e),Cl(t,r)):r instanceof sl?(Zr("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||El(t,r.key)):ri()}function Cl(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(Zr("SyncEngine","New document in limbo: "+n),t.ga.add(r),Sl(t))}function Sl(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new ki(Ci.fromString(e)),r=t.Da.next();t.ya.set(r,new ul(n)),t.pa=t.pa.insert(n,r),wc(t.remoteStore,new gu(uo(io(n.path)),r,"TargetPurposeLimboResolution",Vi._e))}}async function Il(t,e,n){const r=si(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach(((t,a)=>{o.push(r.va(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Fu.Qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Va.a_(i),await async function(t,e){const n=si(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Pi.forEach(e,(e=>Pi.forEach(e.ki,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Pi.forEach(e.qi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Fi(t))throw t;Zr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.ts.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ts=n.ts.insert(t,i)}}}(r.localStore,s))}async function kl(t,e){const n=si(t);if(!n.currentUser.isEqual(e)){Zr("SyncEngine","User change. New user:",e.toKey());const t=await qu(n.localStore,e);n.currentUser=e,function(t,e){t.ba.forEach((t=>{t.forEach((t=>{t.reject(new ai(oi.CANCELLED,e))}))})),t.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Il(n,t._s)}}function Al(t,e){const n=si(t),r=n.ya.get(e);if(r&&r.Ra)return xo().add(r.key);{let t=xo();const r=n.fa.get(e);if(!r)return t;for(const e of r){const r=n.ma.get(e);t=t.unionWith(r.view.ua)}return t}}function Rl(t){const e=si(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Al.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ml.bind(null,e),e.Va.a_=tl.bind(null,e.eventManager),e.Va.Fa=el.bind(null,e.eventManager),e}function xl(t){const e=si(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vl.bind(null,e),e}class Dl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=cc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ju(this.persistence,new Uu,t.initialUser,this.serializer)}createPersistence(t){return new Ou(Pu.jr,this.serializer)}createSharedClientState(t){return new Zu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>gl(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=kl.bind(null,this.syncEngine),await qc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Yc}()}createDatastore(t){const e=cc(t.databaseInfo.databaseId),n=function(t){return new ac(t)}(t.databaseInfo);return function(t,e,n,r){return new pc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new mc(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>gl(this.syncEngine,t,0)),function(){return ec.D()?new ec:new tc}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new cl(t,e,n,r,i,s);return o&&(a.Ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=si(t);Zr("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await vc(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
/**
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
 */
class Ml{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):ti("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
 */
/**
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
 */
class Ol{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Qr.UNAUTHENTICATED,this.clientId=vi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Zr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Zr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Kc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Ll(t,e){t.asyncQueue.verifyOperationInProgress(),Zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await qu(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Pl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Vl(t);Zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>jc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>jc(e.remoteStore,n))),t._onlineComponents=e}function Fl(t){return"FirebaseError"===t.name?t.code===oi.FAILED_PRECONDITION||t.code===oi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Vl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Zr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Fl(n))throw n;ei("Error using user provided cache. Falling back to memory cache: "+n),await Ll(t,new Dl)}}else Zr("FirestoreClient","Using default OfflineComponentProvider"),await Ll(t,new Dl);return t._offlineComponents}async function Ul(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Zr("FirestoreClient","Using user provided OnlineComponentProvider"),await Pl(t,t._uninitializedComponentsProvider._online)):(Zr("FirestoreClient","Using default OnlineComponentProvider"),await Pl(t,new Nl))),t._onlineComponents}function Bl(t){return Ul(t).then((t=>t.syncEngine))}async function jl(t){const e=await Ul(t),n=e.eventManager;return n.onListen=ll.bind(null,e.syncEngine),n.onUnlisten=fl.bind(null,e.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
function ql(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const $l=new Map;
/**
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
 */function Hl(t,e,n){if(!n)throw new ai(oi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zl(t,e,n,r){if(!0===e&&!0===r)throw new ai(oi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kl(t){if(!ki.isDocumentKey(t))throw new ai(oi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gl(t){if(ki.isDocumentKey(t))throw new ai(oi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ri()}function Ql(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ai(oi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wl(t);throw new ai(oi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class Jl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ai(oi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ai(oi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ql(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Yl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ai(oi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ai(oi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new li;switch(t.type){case"firstParty":return new pi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ai(oi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=$l.get(t);e&&(Zr("ComponentProvider","Removing Datastore"),$l.delete(t),e.terminate())}(this),Promise.resolve()}}function Xl(t,e,n,r={}){var i;const s=(t=Ql(t,Yl))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Qr.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ai(oi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Qr(s)}t._authCredentials=new hi(new ci(e,n))}}
/**
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
 */class Zl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Zl(this.firestore,t,this._query)}}class th{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new eh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new th(this.firestore,t,this._key)}}class eh extends Zl{constructor(t,e,n){super(t,e,io(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new th(this.firestore,null,new ki(t))}withConverter(t){return new eh(this.firestore,t,this._path)}}function nh(t,e,...n){if(t=(0,a.m9)(t),Hl("collection","path",e),t instanceof Yl){const r=Ci.fromString(e,...n);return Gl(r),new eh(t,null,r)}{if(!(t instanceof th||t instanceof eh))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ci.fromString(e,...n));return Gl(r),new eh(t.firestore,null,r)}}function rh(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=vi.newId()),Hl("doc","path",e),t instanceof Yl){const r=Ci.fromString(e,...n);return Kl(r),new th(t,null,new ki(r))}{if(!(t instanceof th||t instanceof eh))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ci.fromString(e,...n));return Kl(r),new th(t.firestore,t instanceof eh?t.converter:null,new ki(r))}}
/**
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
 */
class ih{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new lc(this,"async_queue_retry"),this.iu=()=>{const t=uc();t&&Zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const t=uc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=uc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise((()=>{}));const e=new ui;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ya.push(t),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Fi(t))throw t;Zr("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(t){const e=this.Ja.then((()=>(this.tu=!0,t().catch((t=>{this.eu=t,this.tu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw ti("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.tu=!1,t))))));return this.Ja=e,e}enqueueAfterDelay(t,e,n){this.su(),this.ru.indexOf(t)>-1&&(e=0);const r=zc.createAndSchedule(this,t,e,n,(t=>this.au(t)));return this.Xa.push(r),r}su(){this.eu&&ri()}verifyOperationInProgress(){}async uu(){let t;do{t=this.Ja,await t}while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then((()=>{this.Xa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Xa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.uu()}))}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}function sh(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
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
 */(t,["next","error","complete"])}class oh extends Yl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new ih}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ch(this),this._firestoreClient.terminate()}}function ah(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.P0)("firestore");t&&Xl(s,...t)}return s}function uh(t){return t._firestoreClient||ch(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ch(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new cs(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,ql(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Ol(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
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
 */
class lh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new lh(es.fromBase64String(t))}catch(t){throw new ai(oi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new lh(es.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class hh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ai(oi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ii(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class fh{constructor(t){this._methodName=t}}
/**
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
 */class dh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ai(oi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ai(oi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return wi(this._lat,t._lat)||wi(this._long,t._long)}}
/**
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
 */const ph=/^__.*__$/;class gh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new sa(t,this.data,this.fieldMask,e,this.fieldTransforms):new ia(t,this.data,e,this.fieldTransforms)}}class mh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new sa(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function yh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ri()}}class vh{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new vh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Au(t),r}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Pu(),r}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Nh(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(0===t.length)throw this.mu("Document fields must not be empty");if(yh(this.Iu)&&ph.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class wh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||cc(t)}pu(t,e,n,r=!1){return new vh({Iu:t,methodName:e,gu:n,path:Ii.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bh(t){const e=t._freezeSettings(),n=cc(t._databaseId);return new wh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _h(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Ah("Data must be an object, but it was:",o,r);const a=Ih(r,o);let u,c;if(s.merge)u=new Zi(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Rh(e,r,n);if(!o.contains(i))throw new ai(oi.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Mh(t,i)||t.push(i)}u=new Zi(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new gh(new Is(a),u,c)}class Eh extends fh{_toFieldTransform(t){if(2!==t.Iu)throw 1===t.Iu?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Eh}}function Th(t,e,n,r){const i=t.pu(1,e,n);Ah("Data must be an object, but it was:",i,r);const s=[],o=Is.empty();Ki(r,((t,r)=>{const u=Dh(e,t,n);r=(0,a.m9)(r);const c=i.Ru(u);if(r instanceof Eh)s.push(u);else{const t=Sh(r,c);null!=t&&(s.push(u),o.set(u,t))}}));const u=new Zi(s);return new mh(o,u,i.fieldTransforms)}function Ch(t,e,n,r,i,s){const o=t.pu(1,e,n),u=[Rh(e,r,n)],c=[i];if(s.length%2!=0)throw new ai(oi.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)u.push(Rh(e,s[a])),c.push(s[a+1]);const l=[],h=Is.empty();for(let d=u.length-1;d>=0;--d)if(!Mh(l,u[d])){const t=u[d];let e=c[d];e=(0,a.m9)(e);const n=o.Ru(t);if(e instanceof Eh)l.push(t);else{const r=Sh(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new Zi(l);return new mh(h,f,o.fieldTransforms)}function Sh(t,e){if(kh(t=(0,a.m9)(t)))return Ah("Unsupported field value:",e,t),Ih(t,e);if(t instanceof fh)return function(t,e){if(!yh(e.Iu))throw e.mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&4!==e.Iu)throw e.mu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Sh(i,e.Vu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Lo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=_i.fromDate(t);return{timestampValue:Ba(e.serializer,n)}}if(t instanceof _i){const n=new _i(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ba(e.serializer,n)}}if(t instanceof dh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof lh)return{bytesValue:ja(e.serializer,t._byteString)};if(t instanceof th){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ha(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.mu(`Unsupported field value: ${Wl(t)}`)}(t,e)}function Ih(t,e){const n={};return Gi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(t,((t,r)=>{const i=Sh(r,e.Eu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function kh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof _i||t instanceof dh||t instanceof lh||t instanceof th||t instanceof fh)}function Ah(t,e,n){if(!kh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Wl(n);throw"an object"===r?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Rh(t,e,n){if((e=(0,a.m9)(e))instanceof hh)return e._internalPath;if("string"==typeof e)return Dh(t,e);throw Nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const xh=new RegExp("[~\\*/\\[\\]]");function Dh(t,e,n){if(e.search(xh)>=0)throw Nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hh(...e.split("."))._internalPath}catch(_){throw Nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ai(oi.INVALID_ARGUMENT,a+t+u)}function Mh(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class Oh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new th(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Lh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ph("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Lh extends Oh{data(){return super.data()}}function Ph(t,e){return"string"==typeof e?Dh(t,e):e instanceof hh?e._internalPath:e._delegate._internalPath}
/**
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
 */function Fh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ai(oi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vh{convertValue(t,e="none"){switch(fs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return is(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ss(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ri()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ki(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new dh(is(t.latitude),is(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=as(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(us(t));default:return null}}convertTimestamp(t){const e=rs(t);return new _i(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ci.fromString(t);ii(pu(n));const r=new ls(n.get(1),n.get(3)),i=new ki(n.popFirst(5));return r.isEqual(e)||ti(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
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
 */function Uh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
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
 */
class Bh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class jh extends Oh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ph("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class qh extends jh{data(t={}){return super.data(t)}}class $h{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Bh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new qh(this._firestore,this._userDataWriter,n.key,n,new Bh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ai(oi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new qh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Bh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new qh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Bh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Hh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Hh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ri()}}class zh extends Vh{constructor(t){super(),this.firestore=t}convertBytes(t){return new lh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new th(this.firestore,null,e)}}function Kh(t,e,n,...r){t=Ql(t,th);const i=Ql(t.firestore,oh),s=bh(i);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof hh?Ch(s,"updateDoc",t._key,e,n,r):Th(s,"updateDoc",t._key,e),Qh(i,[o.toMutation(t._key,Jo.exists(!0))])}function Gh(t,e){const n=Ql(t.firestore,oh),r=rh(t),i=Uh(t.converter,e);return Qh(n,[_h(bh(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Jo.exists(!1))]).then((()=>r))}function Wh(t,...e){var n,r,i;t=(0,a.m9)(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||sh(e[o])||(s=e[o],o++);const u={includeMetadataChanges:s.includeMetadataChanges};if(sh(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,l,h;if(t instanceof th)l=Ql(t.firestore,oh),h=io(t._key.path),c={next:n=>{e[o]&&e[o](Jh(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Ql(t,Zl);l=Ql(n.firestore,oh),h=n._query;const r=new zh(l);c={next:t=>{e[o]&&e[o](new $h(l,r,n,t))},error:e[o+1],complete:e[o+2]},Fh(t._query)}return function(t,e,n,r){const i=new Ml(r),s=new rl(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>Xc(await jl(t),s))),()=>{i.Na(),t.asyncQueue.enqueueAndForget((async()=>Zc(await jl(t),s)))}}(uh(l),h,u,c)}function Qh(t,e){return function(t,e){const n=new ui;return t.asyncQueue.enqueueAndForget((async()=>dl(await Bl(t),e,n))),n.promise}(uh(t),e)}function Jh(t,e,n){const r=n.docs.get(e._key),i=new zh(t);return new jh(t,i,e._key,r,new Bh(n.hasPendingWrites,n.fromCache),e.converter)}
/**
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
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */!function(t,e=!0){!function(t){Jr=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new oh(new fi(t.getProvider("auth-internal")),new mi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ai(oi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Wr,"4.3.2",t),(0,i.KN)(Wr,"4.3.2","esm2017")}()},201:function(t,e,n){n.d(e,{PO:function(){return U},p7:function(){return ee}});var r=n(252),i=n(262);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function u(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const c=()=>{},l=Array.isArray;const h=/\/$/,f=t=>t.replace(h,"");function d(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let u=e.indexOf("?");return a<u&&a>=0&&(u=-1),u>-1&&(r=e.slice(0,u),s=e.slice(u+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=_(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(e.matched[r],n.matched[i])&&v(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!w(t[n],e[n]))return!1;return!0}function w(t,e){return l(t)?b(t,e):l(e)?b(e,t):t===e}function b(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function _(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var E,T;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(T||(T={}));function C(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),f(t)}const S=/^[^#]+#/;function I(t,e){return t.replace(S,"#")+e}function k(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=k(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function x(t,e){const n=history.state?history.state.position-e:-1;return n+t}const D=new Map;function N(t,e){D.set(t,e)}function M(t){const e=D.get(t);return D.delete(t),e}let O=()=>location.protocol+"//"+location.host;function L(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,t);return o+r+i}function P(t,e,n,r){let i=[],s=[],o=null;const u=({state:s})=>{const a=L(t,location),u=n.value,c=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===u)return void(o=null);l=c?s.position-c.position:0}else r(a);i.forEach((t=>{t(n.value,u,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function c(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:A()}),"")}function f(){for(const t of s)t();s=[],window.removeEventListener("popstate",u),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",u),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function F(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function V(t){const{history:e,location:n}=window,r={value:L(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:O()+t+r;try{e[o?"replaceState":"pushState"](s,"",u),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](u)}}function o(t,n){const o=a({},e.state,F(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function u(t,n){const o=a({},i.value,e.state,{forward:t,scroll:A()});s(o.current,o,!0);const u=a({},F(r.value,t,null),{position:o.position+1},n);s(t,u,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:u,replace:o}}function U(t){t=C(t);const e=V(t),n=P(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:I.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function B(t){return"string"===typeof t||t&&"object"===typeof t}function j(t){return"string"===typeof t||"symbol"===typeof t}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$=Symbol("");var H;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(H||(H={}));function z(t,e){return a(new Error,{type:t,[$]:!0},e)}function K(t,e){return t instanceof Error&&$ in t&&(null==e||!!(t.type&e))}const G="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function J(t,e){const n=a({},W,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:u,regexp:c}=r;s.push({name:t,repeatable:n,optional:u});const l=c||G;if(l!==G){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(f=u&&a.length<2?`(?:/${f})`:"/"+f),u&&(f+="?"),i+=f,o+=20,u&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function u(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,u=s in e?e[s]:"";if(l(u)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=l(u)?u.join("/"):u;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n||"/"}return{re:o,score:r,keys:s,parse:u,stringify:c}}function Y(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function X(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=Y(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${c}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,u=0,c="",l="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}while(u<t.length)if(a=t[u++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:et.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&u--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&u--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function rt(t,e,n){const r=J(nt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function it(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,u=ot(t);u.aliasOf=r&&r.record;const h=lt(e,t),f=[u];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},u,{components:r?r.record.components:u.components,path:t,aliasOf:r?r.record:u}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=rt(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!ut(d)&&o(t.name)),u.children){const t=u.children;for(let e=0;e<t.length;e++)s(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{o(p)}:c}function o(t){if(j(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function u(){return n}function l(t){let e=0;while(e<n.length&&X(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ht(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ut(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,u={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw z(1,{location:t});0,o=i.record.name,u=a(st(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&st(t.params,i.keys.map((t=>t.name)))),s=i.stringify(u)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(u=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw z(1,{location:t,currentLocation:e});o=i.record.name,u=a({},e.params,t.params),s=i.stringify(u)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:u,matched:c,meta:ct(c)}}return e=lt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:u,getRecordMatcher:i}}function st(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ot(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function ut(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ct(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function lt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ht(t,e){return e.children.some((e=>e===t||ht(t,e)))}const ft=/#/g,dt=/&/g,pt=/\//g,gt=/=/g,mt=/\?/g,yt=/\+/g,vt=/%5B/g,wt=/%5D/g,bt=/%5E/g,_t=/%60/g,Et=/%7B/g,Tt=/%7C/g,Ct=/%7D/g,St=/%20/g;function It(t){return encodeURI(""+t).replace(Tt,"|").replace(vt,"[").replace(wt,"]")}function kt(t){return It(t).replace(Et,"{").replace(Ct,"}").replace(bt,"^")}function At(t){return It(t).replace(yt,"%2B").replace(St,"+").replace(ft,"%23").replace(dt,"%26").replace(_t,"`").replace(Et,"{").replace(Ct,"}").replace(bt,"^")}function Rt(t){return At(t).replace(gt,"%3D")}function xt(t){return It(t).replace(ft,"%23").replace(mt,"%3F")}function Dt(t){return null==t?"":xt(t).replace(pt,"%2F")}function Nt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Mt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(yt," "),n=t.indexOf("="),s=Nt(n<0?t:t.slice(0,n)),o=n<0?null:Nt(t.slice(n+1));if(s in e){let t=e[s];l(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Ot(t){let e="";for(let n in t){const r=t[n];if(n=Rt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map((t=>t&&At(t))):[r&&At(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Lt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Pt=Symbol(""),Ft=Symbol(""),Vt=Symbol(""),Ut=Symbol(""),Bt=Symbol("");function jt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const u=t=>{!1===t?a(z(4,{from:n,to:e})):t instanceof Error?a(t):B(t)?a(z(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},c=t.call(r&&r.instances[i],e,n,u);let l=Promise.resolve(c);t.length<3&&(l=l.then(u)),l.catch((t=>a(t)))}))}function $t(t,e,n,r){const i=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Ht(a)){const o=a.__vccOpts||a,u=o[e];u&&i.push(qt(u,n,r,s,t))}else{let u=a();0,i.push((()=>u.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[t]=a;const u=a.__vccOpts||a,c=u[e];return c&&qt(c,n,r,s,t)()}))))}}}return i}function Ht(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function zt(t){const e=(0,r.f3)(Vt),n=(0,r.f3)(Ut),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Jt(t[e-2]);return e>1&&Jt(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qt(n.params,s.value.params))),u=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function l(n={}){return Wt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(c):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:u,navigate:l}}const Kt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zt,setup(t,{slots:e}){const n=(0,i.qj)(zt(t)),{options:s}=(0,r.f3)(Vt),o=(0,r.Fl)((()=>({[Yt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Gt=Kt;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Jt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(Bt),o=(0,r.Fl)((()=>t.route||s.value)),u=(0,r.f3)(Ft,0),c=(0,r.Fl)((()=>{let t=(0,i.SU)(u);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>o.value.matched[c.value]));(0,r.JJ)(Ft,(0,r.Fl)((()=>c.value+1))),(0,r.JJ)(Pt,l),(0,r.JJ)(Bt,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&y(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,u=l.value,c=u&&u.components[s];if(!c)return Zt(n.default,{Component:c,route:i});const f=u.props[s],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(u.instances[s]=null)},g=(0,r.h)(c,a({},d,e,{onVnodeUnmounted:p,ref:h}));return Zt(n.default,{Component:g,route:i})||g}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Xt;function ee(t){const e=it(t.routes,t),n=t.parseQuery||Mt,o=t.stringifyQuery||Ot,h=t.history;const f=jt(),g=jt(),y=jt(),v=(0,i.XI)(q);let w=q;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=u.bind(null,(t=>""+t)),_=u.bind(null,Dt),T=u.bind(null,Nt);function C(t,n){let r,i;return j(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function S(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function I(){return e.getRoutes().map((t=>t.record))}function k(t){return!!e.getRecordMatcher(t)}function D(t,r){if(r=a({},r||v.value),"string"===typeof t){const i=d(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:Nt(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in t)i=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:_(e)}),r.params=_(r.params)}const s=e.resolve(i,r),u=t.hash||"";s.params=b(T(s.params));const c=p(o,a({},t,{hash:kt(u),path:s.path})),l=h.createHref(c);return a({fullPath:c,hash:u,query:o===Ot?Lt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:l})}function O(t){return"string"===typeof t?d(n,t,v.value.path):a({},t)}function L(t,e){if(w!==t)return z(8,{from:e,to:t})}function P(t){return U(t)}function F(t){return P(a(O(t),{replace:!0}))}function V(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=O(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function U(t,e){const n=w=D(t),r=v.value,i=t.state,s=t.force,u=!0===t.replace,c=V(n);if(c)return U(a(O(c),{state:"object"===typeof c?a({},i,c.state):i,force:s,replace:u}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&m(o,r,n)&&(h=z(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):H(l,r)).catch((t=>K(t)?K(t,2)?t:nt(t):tt(t,l,r))).then((t=>{if(t){if(K(t,2))return U(a({replace:u},O(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:s}),e||l)}else t=W(l,r,!0,u,i);return G(l,r,t),t}))}function B(t,e){const n=L(t,e);return n?Promise.reject(n):Promise.resolve()}function $(t){const e=at.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function H(t,e){let n;const[r,i,s]=ne(t,e);n=$t(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qt(r,t,e))}));const o=B.bind(null,t,e);return n.push(o),ct(n).then((()=>{n=[];for(const r of f.list())n.push(qt(r,t,e));return n.push(o),ct(n)})).then((()=>{n=$t(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(qt(r,t,e))}));return n.push(o),ct(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qt(i,t,e));else n.push(qt(r.beforeEnter,t,e));return n.push(o),ct(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=$t(s,"beforeRouteEnter",t,e),n.push(o),ct(n)))).then((()=>{n=[];for(const r of g.list())n.push(qt(r,t,e));return n.push(o),ct(n)})).catch((t=>K(t,8)?t:Promise.reject(t)))}function G(t,e,n){y.list().forEach((r=>$((()=>r(t,e,n)))))}function W(t,e,n,r,i){const o=L(t,e);if(o)return o;const u=e===q,c=s?history.state:{};n&&(r||u?h.replace(t.fullPath,a({scroll:u&&c&&c.scroll},i)):h.push(t.fullPath,i)),v.value=t,rt(t,e,n,u),nt()}let Q;function J(){Q||(Q=h.listen(((t,e,n)=>{if(!ut.listening)return;const r=D(t),i=V(r);if(i)return void U(a(i,{replace:!0}),r).catch(c);w=r;const o=v.value;s&&N(x(o.fullPath,n.delta),A()),H(r,o).catch((t=>K(t,12)?t:K(t,2)?(U(t.to,r).then((t=>{K(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(c),Promise.reject()):(n.delta&&h.go(-n.delta,!1),tt(t,r,o)))).then((t=>{t=t||W(r,o,!1),t&&(n.delta&&!K(t,8)?h.go(-n.delta,!1):n.type===E.pop&&K(t,20)&&h.go(-1,!1)),G(r,o,t)})).catch(c)})))}let Y,X=jt(),Z=jt();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function et(){return Y&&v.value!==q?Promise.resolve():new Promise(((t,e)=>{X.add([t,e])}))}function nt(t){return Y||(Y=!t,J(),X.list().forEach((([e,n])=>t?n(t):e())),X.reset()),t}function rt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const u=!i&&M(x(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,u))).then((t=>t&&R(t))).catch((t=>tt(t,e,n)))}const st=t=>h.go(t);let ot;const at=new Set,ut={currentRoute:v,listening:!0,addRoute:C,removeRoute:S,hasRoute:k,getRoutes:I,resolve:D,options:t,push:P,replace:F,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:f.add,beforeResolve:g.add,afterEach:y.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!ot&&v.value===q&&(ot=!0,P(h.location).catch((t=>{0})));const n={};for(const i in q)Object.defineProperty(n,i,{get:()=>v.value[i],enumerable:!0});t.provide(Vt,e),t.provide(Ut,(0,i.Um)(n)),t.provide(Bt,v);const r=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(w=q,Q&&Q(),Q=null,v.value=q,ot=!1,Y=!1),r()}}};function ct(t){return t.reduce(((t,e)=>t.then((()=>$(e)))),Promise.resolve())}return ut}function ne(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>y(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>y(t,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.3a8247c2.js.map