import{s as e,_ as t,a as r,b as i,e as a,i as o,t as c,c as s,d,f as n,g as p,$ as l,r as u,h as m,n as f,j as h}from"./index-6a0e975e.js";import{FormfieldBase as v}from"@material/mwc-formfield/mwc-formfield-base.js";import{styles as g}from"@material/mwc-formfield/mwc-formfield.css.js";import{SelectBase as y}from"@material/mwc-select/mwc-select-base.js";import{ListBase as b}from"@material/mwc-list/mwc-list-base.js";import{ListItemBase as w}from"@material/mwc-list/mwc-list-item-base.js";import{MenuBase as _}from"@material/mwc-menu/mwc-menu-base.js";import{MenuSurfaceBase as x}from"@material/mwc-menu/mwc-menu-surface-base.js";import{styles as A}from"@material/mwc-select/mwc-select.css";import{styles as C}from"@material/mwc-list/mwc-list.css";import{styles as T}from"@material/mwc-list//mwc-list-item.css";import{styles as E}from"@material/mwc-menu/mwc-menu.css";import{styles as S}from"@material/mwc-menu/mwc-menu-surface.css";import{SwitchBase as I}from"@material/mwc-switch/deprecated/mwc-switch-base.js";import{styles as k}from"@material/mwc-switch/deprecated/mwc-switch.css";import{TextFieldBase as D}from"@material/mwc-textfield/mwc-textfield-base.js";import{styles as O}from"@material/mwc-textfield/mwc-textfield.css";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function F(e,t){return(({finisher:e,descriptor:t})=>(r,i)=>{var a;if(void 0===i){const i=null!==(a=r.originalKey)&&void 0!==a?a:r.key,o=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:{...r,key:i};return null!=e&&(o.finisher=function(t){e(t,i)}),o}{const a=r.constructor;void 0!==t&&Object.defineProperty(r,i,t(i)),null==e||e(a,i)}})({descriptor:r=>{const i={get(){var t,r;return null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():"__"+r;i.get=function(){var r,i;return void 0===this[t]&&(this[t]=null!==(i=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e))&&void 0!==i?i:null),this[t]}}return i}})}const R={"mwc-formfield":class extends v{static get styles(){return g}}};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const H=()=>{},P={get passive(){return!1}};document.addEventListener("x",H,P),document.removeEventListener("x",H);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class N extends e{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var z=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),V={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},U={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},j={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var L=["touchstart","pointerdown","mousedown","keydown"],B=["touchend","pointerup","mouseup","contextmenu"],M=[],$=function(e){function a(t){var r=e.call(this,i(i({},a.defaultAdapter),t))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(e){r.activateImpl(e)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return t(a,e),Object.defineProperty(a,"cssClasses",{get:function(){return V},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return U},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),a.prototype.init=function(){var e=this,t=this.supportsPressRipple();if(this.registerRootHandlers(t),t){var r=a.cssClasses,i=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(i),e.adapter.isUnbounded()&&(e.adapter.addClass(o),e.layoutInternal())}))}},a.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(a.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(a.cssClasses.FG_DEACTIVATION));var t=a.cssClasses,r=t.ROOT,i=t.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(r),e.adapter.removeClass(i),e.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},a.prototype.activate=function(e){this.activateImpl(e)},a.prototype.deactivate=function(){this.deactivateImpl()},a.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){e.layoutInternal(),e.layoutFrame=0}))},a.prototype.setUnbounded=function(e){var t=a.cssClasses.UNBOUNDED;e?this.adapter.addClass(t):this.adapter.removeClass(t)},a.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(a.cssClasses.BG_FOCUSED)}))},a.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(a.cssClasses.BG_FOCUSED)}))},a.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},a.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},a.prototype.registerRootHandlers=function(e){var t,i;if(e){try{for(var a=r(L),o=a.next();!o.done;o=a.next()){var c=o.value;this.adapter.registerInteractionHandler(c,this.activateHandler)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(t)throw t.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},a.prototype.registerDeactivationHandlers=function(e){var t,i;if("keydown"===e.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=r(B),o=a.next();!o.done;o=a.next()){var c=o.value;this.adapter.registerDocumentInteractionHandler(c,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(i=a.return)&&i.call(a)}finally{if(t)throw t.error}}},a.prototype.deregisterRootHandlers=function(){var e,t;try{for(var i=r(L),a=i.next();!a.done;a=i.next()){var o=a.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},a.prototype.deregisterDeactivationHandlers=function(){var e,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=r(B),a=i.next();!a.done;a=i.next()){var o=a.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}},a.prototype.removeCssVars=function(){var e=this,t=a.strings;Object.keys(t).forEach((function(r){0===r.indexOf("VAR_")&&e.adapter.updateCssVariable(t[r],null)}))},a.prototype.activateImpl=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var i=this.previousActivationEvent;if(!(i&&void 0!==e&&i.type!==e.type))r.isActivated=!0,r.isProgrammatic=void 0===e,r.activationEvent=e,r.wasActivatedByPointer=!r.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&M.length>0&&M.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState():(void 0!==e&&(M.push(e.target),this.registerDeactivationHandlers(e)),r.wasElementMadeActive=this.checkElementMadeActive(e),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){M=[],r.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(r.wasElementMadeActive=t.checkElementMadeActive(e),r.wasElementMadeActive&&t.animateActivation()),r.wasElementMadeActive||(t.activationState=t.defaultActivationState())})))}}},a.prototype.checkElementMadeActive=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},a.prototype.animateActivation=function(){var e=this,t=a.strings,r=t.VAR_FG_TRANSLATE_START,i=t.VAR_FG_TRANSLATE_END,o=a.cssClasses,c=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,d=a.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var n="",p="";if(!this.adapter.isUnbounded()){var l=this.getFgTranslationCoordinates(),u=l.startPoint,m=l.endPoint;n=u.x+"px, "+u.y+"px",p=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(r,n),this.adapter.updateCssVariable(i,p),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(c),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer=setTimeout((function(){e.activationTimerCallback()}),d)},a.prototype.getFgTranslationCoordinates=function(){var e,t=this.activationState,r=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,r){if(!e)return{x:0,y:0};var i,a,o=t.x,c=t.y,s=o+r.left,d=c+r.top;if("touchstart"===e.type){var n=e;i=n.changedTouches[0].pageX-s,a=n.changedTouches[0].pageY-d}else{var p=e;i=p.pageX-s,a=p.pageY-d}return{x:i,y:a}}(r,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2}).x-this.initialSize/2,y:e.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},a.prototype.runDeactivationUXLogicIfReady=function(){var e=this,t=a.cssClasses.FG_DEACTIVATION,r=this.activationState,i=r.hasDeactivationUXRun,o=r.isActivated;(i||!o)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(t),this.fgDeactivationRemovalTimer=setTimeout((function(){e.adapter.removeClass(t)}),j.FG_DEACTIVATION_MS))},a.prototype.rmBoundedActivationClasses=function(){var e=a.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},a.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return e.previousActivationEvent=void 0}),a.numbers.TAP_DELAY_MS)},a.prototype.deactivateImpl=function(){var e=this,t=this.activationState;if(t.isActivated){var r=i({},t);t.isProgrammatic?(requestAnimationFrame((function(){e.animateDeactivation(r)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(r),e.resetActivationState()})))}},a.prototype.animateDeactivation=function(e){var t=e.wasActivatedByPointer,r=e.wasElementMadeActive;(t||r)&&this.runDeactivationUXLogicIfReady()},a.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var t=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?t:Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2))+a.numbers.PADDING;var r=Math.floor(t*a.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},a.prototype.updateLayoutCssVars=function(){var e=a.strings,t=e.VAR_FG_SIZE,r=e.VAR_LEFT,i=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter.updateCssVariable(t,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(i,this.unboundedCoords.top+"px"))},a}(z),G=$;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q=a(class extends o{constructor(e){var t;if(super(e),e.type!==c.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var r,i;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(r=this.st)||void 0===r?void 0:r.has(e))&&this.nt.add(e);return this.render(t)}const a=e.element.classList;this.nt.forEach((e=>{e in t||(a.remove(e),this.nt.delete(e))}));for(const e in t){const r=!!t[e];r===this.nt.has(e)||(null===(i=this.st)||void 0===i?void 0:i.has(e))||(r?(a.add(e),this.nt.add(e)):(a.remove(e),this.nt.delete(e)))}return s}}),W=a(class extends o{constructor(e){var t;if(super(e),e.type!==c.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,r)=>{const i=e[r];return null==i?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:r}=e.element;if(void 0===this.vt){this.vt=new Set;for(const e in t)this.vt.add(e);return this.render(t)}this.vt.forEach((e=>{null==t[e]&&(this.vt.delete(e),e.includes("-")?r.removeProperty(e):r[e]="")}));for(const e in t){const i=t[e];null!=i&&(this.vt.add(e),e.includes("-")?r.setProperty(e,i):r[e]=i)}return s}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class X extends N{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=G}get isActive(){return e=this.parentElement||this,t=":active",(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t);var e,t}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation((()=>{this.mdcFoundation.activate(e)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}update(e){e.has("disabled")&&this.disabled&&this.endHover(),super.update(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),r={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return l`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${q(r)}"
          style="${W({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}d([F(".mdc-ripple-surface")],X.prototype,"mdcRoot",void 0),d([n({type:Boolean})],X.prototype,"primary",void 0),d([n({type:Boolean})],X.prototype,"accent",void 0),d([n({type:Boolean})],X.prototype,"unbounded",void 0),d([n({type:Boolean})],X.prototype,"disabled",void 0),d([n({type:Boolean})],X.prototype,"activated",void 0),d([n({type:Boolean})],X.prototype,"selected",void 0),d([n({type:Boolean})],X.prototype,"internalUseStateLayerCustomProperties",void 0),d([p()],X.prototype,"hovering",void 0),d([p()],X.prototype,"bgFocused",void 0),d([p()],X.prototype,"fgActivation",void 0),d([p()],X.prototype,"fgDeactivation",void 0),d([p()],X.prototype,"fgScale",void 0),d([p()],X.prototype,"fgSize",void 0),d([p()],X.prototype,"translateStart",void 0),d([p()],X.prototype,"translateEnd",void 0),d([p()],X.prototype,"leftPos",void 0),d([p()],X.prototype,"topPos",void 0);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Y={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Z={NOTCH_ELEMENT_PADDING:8},K={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},J=function(e){function r(t){return e.call(this,i(i({},r.defaultAdapter),t))||this}return t(r,e),Object.defineProperty(r,"strings",{get:function(){return Y},enumerable:!1,configurable:!0}),Object.defineProperty(r,"cssClasses",{get:function(){return K},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return Z},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),r.prototype.notch=function(e){var t=r.cssClasses.OUTLINE_NOTCHED;e>0&&(e+=Z.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(e),this.adapter.addClass(t)},r.prototype.closeNotch=function(){var e=r.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(e),this.adapter.removeNotchWidthProperty()},r}(z);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Q extends N{constructor(){super(...arguments),this.mdcFoundationClass=J,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:e=>this.mdcRoot.classList.add(e),removeClass:e=>this.mdcRoot.classList.remove(e),setNotchWidthProperty:e=>this.notchElement.style.setProperty("width",`${e}px`),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(e,t){this.mdcFoundation&&(e&&void 0!==t?this.mdcFoundation.notch(t):this.mdcFoundation.closeNotch())}render(){this.openOrClose(this.open,this.width);const e=q({"mdc-notched-outline--notched":this.open});return l`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`}}d([F(".mdc-notched-outline")],Q.prototype,"mdcRoot",void 0),d([n({type:Number})],Q.prototype,"width",void 0),d([n({type:Boolean,reflect:!0})],Q.prototype,"open",void 0),d([F(".mdc-notched-outline__notch")],Q.prototype,"notchElement",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ee=u`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */,te=u`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`,re={"mwc-select":class extends y{static get styles(){return A}},"mwc-list":class extends b{static get styles(){return C}},"mwc-list-item":class extends w{static get styles(){return T}},"mwc-ripple":class extends X{static get styles(){return ee}},"mwc-menu":class extends _{static get styles(){return E}},"mwc-menu-surface":class extends x{static get styles(){return S}},"mwc-notched-outline":class extends Q{static get styles(){return te}}},ie={"mwc-switch":class extends I{static get styles(){return k}},"mwc-ripple":class extends X{static get styles(){return ee}}},ae={"mwc-textfield":class extends D{static get styles(){return O}},"mwc-notched-outline":class extends Q{static get styles(){return te}}},oe=m("section");let ce=class extends e{constructor(){super(...arguments),this._selectedTab=0,this._selectedCard=0,this._initialized=!1}_handleSwitchTab(e){this._selectedTab=parseInt(e.detail.index,10)}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var e;return(null===(e=this._config)||void 0===e?void 0:e.name)||""}get _entity(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity)||""}get _show_warning(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_warning)||!1}get _show_error(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_error)||!1}render(){return this.hass&&this._helpers?l`
          <div class="card-config">
            <div class="toolbar">
              <mwc-tab-bar
                .activeIndex=${this._selectedTab}
                @MDCTabBar:activated=${this._handleSwitchTab}
              >
                <mwc-tab .label=${"Data"}>
                    <button role="tab" aria-selected="true" tabindex="0" class="mdc-tab mdc-tab--active">
                    <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Design</span>
                    </span>
                        <mwc-ripple primary=""></mwc-ripple>
                    </button>
                </mwc-tab>
                <mwc-tab .label=${"Design"}>
                      <button role="tab" aria-selected="true" tabindex="0" class="mdc-tab mdc-tab--active">
                        <span class="mdc-tab__content">
                            <span class="mdc-tab__text-label">Section</span>
                        </span>
                          <mwc-ripple primary=""></mwc-ripple>
                      </button>
                  </mwc-tab>
              </mwc-tab-bar>
            </div>
            <div id="editor">
              ${[this._renderDataEditor,this._renderDesignEditor][this._selectedTab].bind(this)()}
            </div>
          </div>
    `:l``}_renderDataEditor(){if(!this.hass||!this._helpers)return l``;const e=Object.keys(this.hass.states);return Object.assign({},this._config),l`        
        <div class="card-config">
            <div id="editor">
              <mwc-select
                naturalMenuWidth
                fixedMenuPosition
                label="Entity (Required)"
                .configValue=${"entity"}
                .value=${this._entity}
                @selected=${this._valueChanged}
                @closed=${e=>e.stopPropagation()}
              >
                ${e.map((e=>l`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
              </mwc-select>
              <mwc-textfield
                label="Name (Optional)"
                .value=${this._name}
                .configValue=${"name"}
                @input=${this._valueChanged}
              ></mwc-textfield>
              <mwc-formfield .label=${"Toggle warning "+(this._show_warning?"off":"on")}>
                <mwc-switch
                  .checked=${this._show_warning}
                  .configValue=${"show_warning"}
                  @change=${this._valueChanged}
                ></mwc-switch>
              </mwc-formfield>
              <mwc-formfield .label=${"Toggle error "+(this._show_error?"off":"on")}>
                <mwc-switch
                  .checked=${this._show_error}
                  .configValue=${"show_error"}
                  @change=${this._valueChanged}
                ></mwc-switch>
              </mwc-formfield>
            </div>
        </div>
    `}_renderDesignEditor(){return this._selectedCard,l`
      <p>Hello I am the design tab.</p>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;if(this[`_${t.configValue}`]!==t.value){if(t.configValue)if(""===t.value){const e=Object.assign({},this._config);delete e[t.configValue],this._config=e}else this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value});f(this,"config-changed",{config:this._config})}}};ce.elementDefinitions=Object.assign(Object.assign(Object.assign(Object.assign({},ae),re),ie),R),ce.styles=u`
    mwc-select,
    mwc-textfield {
      margin-bottom: 16px;
      display: block;
    }
    mwc-formfield {
      padding-bottom: 8px;
    }
    mwc-switch {
      --mdc-theme-secondary: var(--switch-checked-color);
    }
    mwc-tab-bar {
      border-bottom: 1px solid var(--divider-color);
    }
    .layout,
    .cards #editor {
      margin-top: 8px;
      border: 1px solid var(--divider-color);
      padding: 12px;
    }
    .cards .toolbar {
      display: flex;
      --paper-tabs-selection-bar-color: var(--primary-color);
      --paper-tab-ink: var(--primary-color);
    }
    paper-tabs {
      display: flex;
      font-size: 14px;
      flex-grow: 1;
    }
  `,d([n({attribute:!1})],ce.prototype,"hass",void 0),d([p()],ce.prototype,"_config",void 0),d([p()],ce.prototype,"_helpers",void 0),d([p()],ce.prototype,"_selectedTab",void 0),d([p()],ce.prototype,"_selectedCard",void 0),ce=d([h(oe.editor.prefixedtype)],ce);export{ce as MagicSectionCardEditor};
