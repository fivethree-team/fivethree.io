(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1hGh":function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return r});const l=async(t,e,n,l,r)=>{if(t)return t.attachViewToDom(e,n,r,l);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return l&&l.forEach(t=>i.classList.add(t)),r&&Object.assign(i,r),e.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"2MiI":function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n("ZZ/e");class l{constructor(t){this.navController=t}ngOnInit(){}onTitleClicked(){this.navController.navigateRoot("/")}}},"6jz6":function(t,e,n){"use strict";var l=n("8Y7J"),r=n("oBZk"),i=n("ZZ/e"),s=n("TSSN");n("LmEr"),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a});var o=l.rb({encapsulation:0,styles:[["ion-footer[_ngcontent-%COMP%]{background:var(--ion-color-dark);padding:64px 0}h4[_ngcontent-%COMP%]{color:var(--ion-color-dark-contrast)}.links[_ngcontent-%COMP%]{display:block;margin-bottom:8px;font-size:16px;line-height:1.3;color:var(--ion-color-light)}a[_ngcontent-%COMP%]:hover{color:var(--ion-color-light-shade)}a[_ngcontent-%COMP%]{text-decoration:none}#social[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}#social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ion-color-light);font-size:2rem;padding:0 12px}#social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{padding-left:0}#social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{padding-right:0}@media screen and (max-width:991px){#social[_ngcontent-%COMP%]{-webkit-box-ordinal-group:0;order:-1}}"]],data:{}});function a(t){return l.Nb(0,[(t()(),l.tb(0,0,null,null,35,"ion-footer",[["no-border",""]],null,null,null,r.F,r.j)),l.sb(1,49152,null,0,i.y,[l.h,l.k,l.y],null,null),(t()(),l.tb(2,0,null,0,33,"ion-grid",[["fixed",""]],null,null,null,r.G,r.k)),l.sb(3,49152,null,0,i.z,[l.h,l.k,l.y],{fixed:[0,"fixed"]},null),(t()(),l.tb(4,0,null,0,31,"ion-row",[],null,null,null,r.N,r.r)),l.sb(5,49152,null,0,i.hb,[l.h,l.k,l.y],null,null),(t()(),l.tb(6,0,null,0,13,"ion-col",[["sizeLg","3"],["sizeXs","6"]],null,null,null,r.B,r.f)),l.sb(7,49152,null,0,i.s,[l.h,l.k,l.y],{sizeLg:[0,"sizeLg"],sizeXs:[1,"sizeXs"]},null),(t()(),l.tb(8,0,null,0,2,"h4",[["translate",""]],null,null,null,null,null)),l.sb(9,8536064,null,0,s.e,[s.k,l.k,l.h],{translate:[0,"translate"]},null),(t()(),l.Lb(-1,null,["footer.company"])),(t()(),l.tb(11,0,null,0,2,"a",[["class","links"],["href","#about"],["translate",""]],null,null,null,null,null)),l.sb(12,8536064,null,0,s.e,[s.k,l.k,l.h],{translate:[0,"translate"]},null),(t()(),l.Lb(-1,null,["footer.about"])),(t()(),l.tb(14,0,null,0,2,"a",[["class","links"],["href","#team"],["translate",""]],null,null,null,null,null)),l.sb(15,8536064,null,0,s.e,[s.k,l.k,l.h],{translate:[0,"translate"]},null),(t()(),l.Lb(-1,null,["footer.team"])),(t()(),l.tb(17,0,null,0,2,"a",[["class","links"],["href","/imprint"],["translate",""]],null,null,null,null,null)),l.sb(18,8536064,null,0,s.e,[s.k,l.k,l.h],{translate:[0,"translate"]},null),(t()(),l.Lb(-1,null,["footer.imprint"])),(t()(),l.tb(20,0,null,0,7,"ion-col",[["sizeLg","3"],["sizeXs","6"]],null,null,null,r.B,r.f)),l.sb(21,49152,null,0,i.s,[l.h,l.k,l.y],{sizeLg:[0,"sizeLg"],sizeXs:[1,"sizeXs"]},null),(t()(),l.tb(22,0,null,0,2,"h4",[["translate",""]],null,null,null,null,null)),l.sb(23,8536064,null,0,s.e,[s.k,l.k,l.h],{translate:[0,"translate"]},null),(t()(),l.Lb(-1,null,["footer.resources"])),(t()(),l.tb(25,0,null,0,2,"a",[["class","links"],["href","https://fivethree-team.github.io/ionic-4-components/"],["translate",""]],null,null,null,null,null)),l.sb(26,8536064,null,0,s.e,[s.k,l.k,l.h],{translate:[0,"translate"]},null),(t()(),l.Lb(-1,null,["footer.ionic-4-components"])),(t()(),l.tb(28,0,null,0,7,"ion-col",[["id","social"],["size","6"],["sizeLg","6"],["sizeXs","12"]],null,null,null,r.B,r.f)),l.sb(29,49152,null,0,i.s,[l.h,l.k,l.y],{size:[0,"size"],sizeLg:[1,"sizeLg"],sizeXs:[2,"sizeXs"]},null),(t()(),l.tb(30,0,null,0,2,"a",[["href","https://www.github.com/fivethree-team"],["target","blank"]],null,null,null,null,null)),(t()(),l.tb(31,0,null,null,1,"ion-icon",[["name","logo-github"],["slot","icon-only"]],null,null,null,r.H,r.l)),l.sb(32,49152,null,0,i.B,[l.h,l.k,l.y],{name:[0,"name"]},null),(t()(),l.tb(33,0,null,0,2,"a",[["href","https://twitter.com/fivethreeteam"],["target","blank"]],null,null,null,null,null)),(t()(),l.tb(34,0,null,null,1,"ion-icon",[["name","logo-twitter"],["slot","icon-only"]],null,null,null,r.H,r.l)),l.sb(35,49152,null,0,i.B,[l.h,l.k,l.y],{name:[0,"name"]},null)],function(t,e){t(e,3,0,""),t(e,7,0,"3","6"),t(e,9,0,""),t(e,12,0,""),t(e,15,0,""),t(e,18,0,""),t(e,21,0,"3","6"),t(e,23,0,""),t(e,26,0,""),t(e,29,0,"6","6","12"),t(e,32,0,"logo-github"),t(e,35,0,"logo-twitter")},null)}},"7rGv":function(t,e,n){"use strict";n.d(e,"a",function(){return y}),n.d(e,"b",function(){return g}),n.d(e,"c",function(){return w}),n.d(e,"d",function(){return i});var l=n("mLBW"),r=n("9Z7W");const i=t=>new Promise((e,n)=>{Object(l.n)(()=>{s(t),o(t).then(n=>{n.animation&&n.animation.destroy(),a(t),e(n)},e=>{a(t),n(e)})})}),s=t=>{const e=t.enteringEl,n=t.leavingEl;k(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),n&&w(n,!1)},o=async t=>{const e=await u(t);return e?c(e,t):d(t)},a=t=>{const e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},u=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await(()=>n.e(95).then(n.bind(null,"0SUp")))()).iosTransitionAnimation:(await(()=>n.e(96).then(n.bind(null,"Zb87")))()).mdTransitionAnimation},c=async(t,e)=>{await h(e,!0);const l=await n.e(1).then(n.bind(null,"UGhQ")).then(n=>n.create(t,e.baseEl,e));return f(e.enteringEl,e.leavingEl),await m(l,e),e.progressCallback&&e.progressCallback(void 0),l.hasCompleted&&p(e.enteringEl,e.leavingEl),{hasCompleted:l.hasCompleted,animation:l}},d=async t=>{const e=t.enteringEl,n=t.leavingEl;return await h(t,!1),f(e,n),p(e,n),{hasCompleted:!0}},h=async(t,e)=>{const n=(void 0!==t.deepWait?t.deepWait:e)?[y(t.enteringEl),y(t.leavingEl)]:[v(t.enteringEl),v(t.leavingEl)];await Promise.all(n),await b(t.viewIsReady,t.enteringEl)},b=async(t,e)=>{t&&await t(e)},m=(t,e)=>{const n=e.progressCallback,l=new Promise(e=>t.onFinish(e));return n?(t.progressStart(),n(t)):t.play(),l},f=(t,e)=>{g(e,r.c),g(t,r.a)},p=(t,e)=>{g(t,r.b),g(e,r.d)},g=(t,e)=>{if(t){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}},v=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),y=async t=>{const e=t;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(y))}},w=(t,e)=>{e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},k=(t,e,n)=>{void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")}},EQwm:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return h}),n.d(e,"e",function(){return b}),n.d(e,"f",function(){return i}),n.d(e,"g",function(){return r}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return u}),n.d(e,"j",function(){return c}),n.d(e,"k",function(){return s});const l=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},r=t=>!!t.shadowRoot&&!!t.attachShadow,i=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},s=(t,e,n,l,i)=>{if(t||r(e)){let t=e.querySelector("input.aux-input");t||((t=e.ownerDocument.createElement("input")).type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=i,t.name=n,t.value=l||""}},o=(t,e,n)=>Math.max(t,Math.min(e,n)),a=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},u=t=>t.timeStamp||Date.now(),c=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},d=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},h=(t,e)=>{const n=t._original||t;return{_original:t,emit:b(n.emit.bind(n),e)}},b=(t,e=0)=>{let n;return(...l)=>{clearTimeout(n),n=setTimeout(t,e,...l)}}},IvgT:function(t,e,n){"use strict";n.d(e,"a",function(){return l});const l=t=>{try{if("string"!=typeof t||""===t)return t;const n=document.createDocumentFragment(),l=document.createElement("div");n.appendChild(l),l.innerHTML=t,o.forEach(t=>{const e=n.querySelectorAll(t);for(let l=e.length-1;l>=0;l--){const t=e[l];t.parentNode?t.parentNode.removeChild(t):n.removeChild(t);const s=i(t);for(let e=0;e<s.length;e++)r(s[e])}});const s=i(n);for(let t=0;t<s.length;t++)r(s[t]);const a=document.createElement("div");a.appendChild(n);const u=a.querySelector("div");return null!==u?u.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},r=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes[n],l=e.name;if(!s.includes(l.toLowerCase())){t.removeAttribute(l);continue}const r=e.value;null!=r&&r.toLowerCase().includes("javascript:")&&t.removeAttribute(l)}const e=i(t);for(let n=0;n<e.length;n++)r(e[n])},i=t=>null!=t.children?t.children:t.childNodes,s=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},Jbqe:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return o});const l=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,o=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const l=document.querySelector("ion-router");if(l)return null!=e&&e.preventDefault(),await l.componentOnReady(),l.push(t,n)}return!1}},LmEr:function(t,e,n){"use strict";n.d(e,"a",function(){return l});class l{constructor(){}ngOnInit(){}}},Xqnl:function(t,e,n){"use strict";var l=n("8Y7J"),r=n("oBZk"),i=n("ZZ/e");n("2MiI"),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o});var s=l.rb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{cursor:pointer}#github[_ngcontent-%COMP%]{color:var(--ion-color-light-contrast)}"]],data:{}});function o(t){return l.Nb(0,[(t()(),l.tb(0,0,null,null,9,"ion-toolbar",[],null,null,null,r.R,r.v)),l.sb(1,49152,null,0,i.Ab,[l.h,l.k,l.y],null,null),(t()(),l.tb(2,0,null,0,2,"ion-title",[],null,[[null,"click"]],function(t,e,n){var l=!0;return"click"===e&&(l=!1!==t.component.onTitleClicked()&&l),l},r.Q,r.u)),l.sb(3,49152,null,0,i.yb,[l.h,l.k,l.y],null,null),(t()(),l.Lb(-1,0,[" fivethree "])),(t()(),l.tb(5,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,r.y,r.c)),l.sb(6,49152,null,0,i.k,[l.h,l.k,l.y],null,null),(t()(),l.tb(7,0,null,0,2,"a",[["href","https://www.github.com/fivethree-team"],["id","github"],["target","blank"]],null,null,null,null,null)),(t()(),l.tb(8,0,null,null,1,"ion-icon",[["name","logo-github"],["slot","icon-only"]],null,null,null,r.H,r.l)),l.sb(9,49152,null,0,i.B,[l.h,l.k,l.y],{name:[0,"name"]},null)],function(t,e){t(e,9,0,"logo-github")},null)}},itPc:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return l});const l=()=>{const t=window.TapticEngine;t&&t.selection()},r=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},i=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},s=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}},j1ZV:function(t,e,n){"use strict";n.d(e,"a",function(){return l});class l{}},qwwZ:function(t,e,n){"use strict";n.r(e),n.d(e,"GESTURE_CONTROLLER",function(){return s}),n.d(e,"createGesture",function(){return d});var l=n("mLBW");n("TJLY");class r{constructor(t,e,n,l,r){this.id=e,this.name=n,this.disableScroll=r,this.priority=1e6*l+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class i{constructor(t,e,n,l){this.id=e,this.disable=n,this.disableScroll=l,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const s=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new r(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new i(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)}capture(t,e,n){if(!this.start(t,e,n))return!1;const l=this.requestedStart;let r=-1e4;if(l.forEach(t=>{r=Math.max(r,t)}),r===n){this.capturedId=e,l.clear();const n=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(n),!0}return l.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)}enableGesture(t,e){const n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add("backdrop-no-scroll")}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove("backdrop-no-scroll")}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}},o=(t,e,n,l)=>{const r=a(t)?{capture:!!l.capture,passive:!!l.passive}:!!l.capture;let i,s;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",s="__zone_symbol__removeEventListener"):(i="addEventListener",s="removeEventListener"),t[i](e,n,r),()=>{t[s](e,n,r)}},a=t=>{if(void 0===u)try{const n=Object.defineProperty({},"passive",{get:()=>{u=!0}});t.addEventListener("optsTest",()=>{},n)}catch(e){u=!1}return!!u};let u;const c=t=>t instanceof Document?t:t.ownerDocument,d=t=>{let e=!1,n=!1,r=!0,i=!1;const a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),u=a.canStart,d=a.onWillStart,f=a.onStart,p=a.onEnd,g=a.notCaptured,v=a.onMove,y=a.threshold,w={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},k=((t,e,n)=>{const l=a.maxAngle*(Math.PI/180),r="x"===a.direction,i=Math.cos(l),s=e*e;let o=0,u=0,c=!1,d=0;return{start(t,e){o=t,u=e,d=0,c=!0},detect(t,e){if(!c)return!1;const n=t-o,l=e-u,a=n*n+l*l;if(a<s)return!1;const h=Math.sqrt(a),b=(r?n:l)/h;return d=b>i?1:b<-i?-1:0,c=!1,!0},isGesture:()=>0!==d,getDirection:()=>d}})(0,a.threshold),S=s.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=()=>{e&&(i=!1,v&&v(w))},L=()=>!(S&&!S.capture()||(e=!0,r=!1,w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp,d?d(w).then(C):C(),0)),C=()=>{f&&f(w),r=!0},z=()=>{e=!1,n=!1,i=!1,r=!0,S.release()},X=t=>{const n=e,l=r;z(),l&&(h(w,t),n?p&&p(w):g&&g(w))},_=((t,e,n,l,r)=>{let i,s,a,u,d,h,b,m=0;const f=l=>{m=Date.now()+2e3,e(l)&&(!s&&n&&(s=o(t,"touchmove",n,r)),a||(a=o(t,"touchend",g,r)),u||(u=o(t,"touchcancel",g,r)))},p=l=>{m>Date.now()||e(l)&&(!h&&n&&(h=o(c(t),"mousemove",n,r)),b||(b=o(c(t),"mouseup",v,r)))},g=t=>{y(),l&&l(t)},v=t=>{w(),l&&l(t)},y=()=>{s&&s(),a&&a(),u&&u(),s=a=u=void 0},w=()=>{h&&h(),b&&b(),h=b=void 0},k=()=>{y(),w()},S=e=>{e?(i&&i(),d&&d(),i=d=void 0,k()):(i||(i=o(t,"touchstart",f,r)),d||(d=o(t,"mousedown",p,r)))};return{setDisabled:S,stop:k,destroy:()=>{S(!0),l=n=e=void 0}}})(a.el,t=>{const e=m(t);return!(n||!r)&&(b(t,w),w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp=e,w.velocityX=w.velocityY=w.deltaX=w.deltaY=0,w.event=t,(!u||!1!==u(w))&&(S.release(),!!S.start()&&(n=!0,0===y?L():(k.start(w.startX,w.startY),!0))))},t=>{e?!i&&r&&(i=!0,h(w,t),Object(l.n)(E)):(h(w,t),k.detect(w.currentX,w.currentY)&&(k.isGesture()&&L()||O()))},X,{capture:!1}),O=()=>{z(),_.stop(),g&&g(w)};return{setDisabled(t){t&&e&&X(void 0),_.setDisabled(t)},destroy(){S.destroy(),_.destroy()}}},h=(t,e)=>{if(!e)return;const n=t.currentX,l=t.currentY,r=t.timeStamp;b(e,t);const i=t.currentX,s=t.currentY,o=(t.timeStamp=m(e))-r;if(o>0&&o<100){const e=(s-l)/o;t.velocityX=(i-n)/o*.7+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}t.deltaX=i-t.startX,t.deltaY=s-t.startY,t.event=e},b=(t,e)=>{let n=0,l=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];n=t.clientX,l=t.clientY}else void 0!==t.pageX&&(n=t.pageX,l=t.pageY)}e.currentX=n,e.currentY=l},m=t=>t.timeStamp||Date.now()}}]);