function t(t){return console.log(t),console.log(t.charAt(0).toUpperCase()+t.slice(1)),t.charAt(0).toUpperCase()+t.slice(1)}const e="magic-cards".split("-"),i=t(e[0]),n=`${t(e[0])} ${t(e[1])}`,s="magic-cards".split("-",1)[0].toLowerCase(),o="1.0.0b21";function r(e){return{type:`${s}-${e.toLowerCase()}-card`,name:`${n} ${t(e)} Card`,description:"",editor:{type:`${e.toLowerCase()}-card-editor`,prefixedtype:`${s}-${e.toLowerCase()}-card-editor`,file:`./${e.toLowerCase()}-card-editor`}}}var a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},a(t,e)};function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}var c=function(){return c=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},c.apply(this,arguments)};function h(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}function d(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],n=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,p=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function v(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):p(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function f(t){return v({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=({finisher:t,descriptor:e})=>(i,n)=>{var s;if(void 0===n){const n=null!==(s=i.originalKey)&&void 0!==s?s:i.key,o=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(o.finisher=function(e){t(e,n)}),o}{const s=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(s,n)}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var m;const g=null!=(null===(m=window.HTMLSlotElement)||void 0===m?void 0:m.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function $(t){const{slot:e,selector:i}=null!=t?t:{};return _({descriptor:n=>({get(){var n;const s="slot"+(e?`[name=${e}]`:":not([name])"),o=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(s),r=null!=o?g(o,t):[];return i?r.filter((t=>t.matches(i))):r},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,b=Symbol(),A=new WeakMap;class w{constructor(t,e,i){if(this._$cssResult$=!0,i!==b)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(y&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=A.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&A.set(e,t))}return t}toString(){return this.cssText}}const E=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new w(i,t,b)},S=y?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new w("string"==typeof t?t:t+"",void 0,b))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var C;const T=window.trustedTypes,x=T?T.emptyScript:"",k=window.reactiveElementPolyfillSupport,P={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},O=(t,e)=>e!==t&&(e==e||t==t),U={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:O};class H extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=U){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||U}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(S(t))}else void 0!==t&&e.push(S(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{y?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=window.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=U){var n,s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(s=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==s?s:P.toAttribute)(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i,n;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),r=t.converter,a=null!==(n=null!==(i=null==r?void 0:r.fromAttribute)&&void 0!==i?i:"function"==typeof r?r:null)&&void 0!==n?n:P.fromAttribute;this._$El=o,this[o]=a(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||O)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var R;H.finalized=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},null==k||k({ReactiveElement:H}),(null!==(C=globalThis.reactiveElementVersions)&&void 0!==C?C:globalThis.reactiveElementVersions=[]).push("1.3.4");const N=globalThis.trustedTypes,L=N?N.createPolicy("lit-html",{createHTML:t=>t}):void 0,j=`lit$${(Math.random()+"").slice(9)}$`,M="?"+j,D=`<${M}>`,z=document,I=(t="")=>z.createComment(t),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,V=Array.isArray,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,K=/>/g,Y=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),J=/'/g,X=/"/g,Z=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),G=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),tt=new WeakMap,et=z.createTreeWalker(z,129,null,!1),it=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",r=q;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===q?"!--"===l[1]?r=W:void 0!==l[1]?r=K:void 0!==l[2]?(Z.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=Y):void 0!==l[3]&&(r=Y):r===Y?">"===l[0]?(r=null!=s?s:q,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?Y:'"'===l[3]?X:J):r===X||r===J?r=Y:r===W||r===K?r=q:(r=Y,s=void 0);const d=r===Y&&t[e+1].startsWith("/>")?" ":"";o+=r===q?i+D:c>=0?(n.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+j+d):i+j+(-2===c?(n.push(void 0),e):d)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==L?L.createHTML(a):a,n]};class nt{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[l,c]=it(t,e);if(this.el=nt.createElement(l,i),et.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=et.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(j)){const i=c[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(j),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?lt:"?"===e[1]?ht:"@"===e[1]?dt:at})}else a.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(Z.test(n.tagName)){const t=n.textContent.split(j),e=t.length-1;if(e>0){n.textContent=N?N.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],I()),et.nextNode(),a.push({type:2,index:++s});n.append(t[e],I())}}}else if(8===n.nodeType)if(n.data===M)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(j,t+1));)a.push({type:7,index:s}),t+=j.length-1}s++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function st(t,e,i=t,n){var s,o,r,a;if(e===G)return e;let l=void 0!==n?null===(s=i._$Cl)||void 0===s?void 0:s[n]:i._$Cu;const c=B(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=st(t,l._$AS(t,e.values),l,n)),e}class ot{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:z).importNode(i,!0);et.currentNode=s;let o=et.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new rt(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new ut(o,this,t)),this.v.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(o=et.nextNode(),r++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class rt{constructor(t,e,i,n){var s;this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$C_=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=st(this,t,e),B(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==G&&this.T(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.k(t):(t=>V(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.S(t):this.T(t)}j(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t))}T(t){this._$AH!==Q&&B(this._$AH)?this._$AA.nextSibling.data=t:this.k(z.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=nt.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new ot(s,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=tt.get(t.strings);return void 0===e&&tt.set(t.strings,e=new nt(t)),e}S(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new rt(this.j(I()),this.j(I()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class at{constructor(t,e,i,n,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=st(this,t,e,0),o=!B(t)||t!==this._$AH&&t!==G,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=st(this,n[i+r],e,r),a===G&&(a=this._$AH[r]),o||(o=!B(a)||a!==this._$AH[r]),a===Q?t=Q:t!==Q&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.P(t)}P(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class lt extends at{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===Q?void 0:t}}const ct=N?N.emptyScript:"";class ht extends at{constructor(){super(...arguments),this.type=4}P(t){t&&t!==Q?this.element.setAttribute(this.name,ct):this.element.removeAttribute(this.name)}}class dt extends at{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=st(this,t,e,0))&&void 0!==i?i:Q)===G)return;const n=this._$AH,s=t===Q&&n!==Q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Q&&(n===Q||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class ut{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}}const pt=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var vt,ft;null==pt||pt(nt,rt),(null!==(R=globalThis.litHtmlVersions)&&void 0!==R?R:globalThis.litHtmlVersions=[]).push("2.2.7");class _t extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=o._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new rt(e.insertBefore(I(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return G}}_t.finalized=!0,_t._$litElement$=!0,null===(vt=globalThis.litElementHydrateSupport)||void 0===vt||vt.call(globalThis,{LitElement:_t});const mt=globalThis.litElementPolyfillSupport;var gt,$t;null==mt||mt({LitElement:_t}),(null!==(ft=globalThis.litElementVersions)&&void 0!==ft?ft:globalThis.litElementVersions=[]).push("3.2.2"),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(gt||(gt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}($t||($t={}));var yt=["closed","locked","off"],bt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,t.dispatchEvent(s),s},At=function(t){bt(window,"haptic",t)},wt=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(At("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&bt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),bt(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,s=function(t){return t.substr(0,t.indexOf("."))}(e),o="group"===s?"homeassistant":s;switch(s){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(o,n,{entity_id:e})})(t,e,yt.includes(t.states[e].state))}(e,i.entity),At("success"));break;case"call-service":if(!n.service)return void At("failure");var s=n.service.split(".",2);e.callService(s[0],s[1],n.service_data,n.target),At("success");break;case"fire-dom-event":bt(t,"ll-custom",n)}};function Et(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const St={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ct=t=>(...e)=>({_$litDirective$:t,values:e});class Tt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const xt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class kt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:xt?"100px":"50px",height:xt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||Event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.preventDefault(),!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},n=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?bt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,bt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,bt(t,"action",{action:"double_tap"})):bt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",n),t.addEventListener("keyup",(t=>{"13"===t.code&&n(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-magic-section",kt);const Pt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-magic-section"))return t.querySelector("action-handler-magic-section");const e=document.createElement("action-handler-magic-section");return t.appendChild(e),e})();i&&i.bind(t,e)},Ot=Ct(class extends Tt{update(t,[e]){return Pt(t.element,e),G}render(t){}});var Ut={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ht={common:Ut},Rt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Nt={common:Rt};const Lt={en:Object.freeze({__proto__:null,common:Ut,default:Ht}),nb:Object.freeze({__proto__:null,common:Rt,default:Nt})};function jt(t,e="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=t.split(".").reduce(((t,e)=>t[e]),Lt[n])}catch(e){s=t.split(".").reduce(((t,e)=>t[e]),Lt.en)}return void 0===s&&(s=t.split(".").reduce(((t,e)=>t[e]),Lt.en)),""!==e&&""!==i&&(s=s.replace(e,i)),s}const Mt=r("section");!function(t){const e=window;e.customCards=e.customCards||[],e.customCards.push(Object.assign(Object.assign({},t),{preview:!0}))}({type:Mt.type,name:Mt.name,description:Mt.description});let Dt=class extends _t{static async getConfigElement(){return await import("./editor-a83f6e19.js"),document.createElement(Mt.editor.prefixedtype)}static getStubConfig(){return{}}getCardSize(){return 1}setConfig(t){if(!t)throw new Error(jt("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({name:Mt.type},t)}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var n=e.get("hass");return!n||n.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){return this.config.show_warning?this._showWarning(jt("common.show_warning")):this.config.show_error?this._showError(jt("common.show_error")):F`
      <ha-card
        .header=${this.config.name}
        @action=${this._handleAction}
        .actionHandler=${Ot({hasHold:Et(this.config.hold_action),hasDoubleClick:Et(this.config.double_tap_action)})}
        tabindex="0"
        .label=${`${Mt.type}: ${this.config.entity||"No Entity Defined"}`}
      ></ha-card>
    `}_handleAction(t){this.hass&&this.config&&t.detail.action&&function(t,e,i,n){var s;"double_tap"===n&&i.double_tap_action?s=i.double_tap_action:"hold"===n&&i.hold_action?s=i.hold_action:"tap"===n&&i.tap_action&&(s=i.tap_action),wt(t,e,i,s)}(this,this.hass,this.config,t.detail.action)}_showWarning(t){return F` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),F` ${e} `}static get styles(){return E``}};h([v({attribute:!1})],Dt.prototype,"hass",void 0),h([f()],Dt.prototype,"config",void 0),Dt=h([u(Mt.type)],Dt),console.info(`%c 🪄 ${i} 🪄 %c ${o}`,"color: black; font-weight: bold; background: orange");export{F as $,Dt as M,l as _,c as a,h as b,Ct as c,G as d,v as e,f,d as g,r as h,Tt as i,u as j,$ as l,bt as n,_ as o,E as r,_t as s,St as t,Q as w};
