(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2MiI":function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(){function n(){}return n.prototype.ngOnInit=function(){},n}()},"5TGA":function(n,t,e){"use strict";e.d(t,"a",function(){return g}),e.d(t,"b",function(){return p}),e.d(t,"c",function(){return w}),e.d(t,"d",function(){return o});var i=e("B5Ai"),r=function(){return e.e(64).then(e.bind(null,"y1oY"))},l=function(){return e.e(77).then(e.bind(null,"YGkI"))};function o(n){return new Promise(function(t,e){n.queue.write(function(){(function(n){var t=n.enteringEl,e=n.leavingEl;(function(n,t,e){void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")})(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),w(t,!1),e&&w(e,!1)})(n),function(n){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(e){switch(e.label){case 0:return[4,a(n)];case 1:return[2,(t=e.sent())?c(t,n):s(n)]}})})}(n).then(function(e){e.animation&&e.animation.destroy(),u(n),t(e)},function(t){u(n),e(t)})})})}function u(n){var t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")}function a(n){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(e){switch(e.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,r()]:[2,void 0];case 1:return t=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,l()];case 3:t=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,t]}})})}function c(n,t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(i){switch(i.label){case 0:return[4,f(t,!0)];case 1:return i.sent(),[4,t.animationCtrl.create(n,t.baseEl,t)];case 2:return e=i.sent(),h(t.enteringEl,t.leavingEl),[4,v(e,t)];case 3:return i.sent(),t.progressCallback&&t.progressCallback(void 0),e.hasCompleted&&b(t.enteringEl,t.leavingEl),[2,{hasCompleted:e.hasCompleted,animation:e}]}})})}function s(n){return i.a(this,void 0,void 0,function(){var t,e;return i.c(this,function(i){switch(i.label){case 0:return t=n.enteringEl,e=n.leavingEl,[4,f(n,!1)];case 1:return i.sent(),h(t,e),b(t,e),[2,{hasCompleted:!0}]}})})}function f(n,t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(i){switch(i.label){case 0:return e=(void 0!==n.deepWait?n.deepWait:t)?[g(n.enteringEl),g(n.leavingEl)]:[m(n.enteringEl),m(n.leavingEl)],[4,Promise.all(e)];case 1:return i.sent(),[4,d(n.viewIsReady,n.enteringEl)];case 2:return i.sent(),[2]}})})}function d(n,t){return i.a(this,void 0,void 0,function(){return i.c(this,function(e){switch(e.label){case 0:return n?[4,n(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}function v(n,t){var e=t.progressCallback,i=new Promise(function(t){return n.onFinish(t)});return e?(n.progressStart(),e(n)):n.play(),i}function h(n,t){p(t,"ionViewWillLeave"),p(n,"ionViewWillEnter")}function b(n,t){p(n,"ionViewDidEnter"),p(t,"ionViewDidLeave")}function p(n,t){if(n){var e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}}function m(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function g(n){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(e){switch(e.label){case 0:return(t=n)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(g))];case 3:e.sent(),e.label=4;case 4:return[2]}})})}function w(n,t){t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}},"6Fnk":function(n,t,e){"use strict";e.d(t,"a",function(){return h}),e.d(t,"b",function(){return c}),e.d(t,"c",function(){return d}),e.d(t,"d",function(){return v}),e.d(t,"e",function(){return a}),e.d(t,"f",function(){return l}),e.d(t,"g",function(){return o}),e.d(t,"h",function(){return u});var i=e("B5Ai"),r=0;function l(n,t){var e=n.ownerDocument;(function(n){0===r&&(r=1,n.addEventListener("ionBackButton",function(t){var e=u(n);e&&e.backdropDismiss&&t.detail.register(100,function(){return e.dismiss(void 0,h)})}),n.addEventListener("keyup",function(t){if("Escape"===t.key){var e=u(n);e&&e.backdropDismiss&&e.dismiss(void 0,h)}}))})(e),Object.assign(n,t),n.classList.add("ion-page-invisible");var i=r++;return n.overlayIndex=i,n.hasAttribute("id")||(n.id="ion-overlay-"+i),s(e).appendChild(n),n.componentOnReady()}function o(n,t,e,i,r){var l=u(n,i,r);return l?l.dismiss(t,e):Promise.reject("overlay does not exist")}function u(n,t,e){var i=function(n,t){var e=Array.from(s(n).children).filter(function(n){return n.overlayIndex>0});return void 0===t?e:(t=t.toUpperCase(),e.filter(function(n){return n.tagName===t}))}(n,t);return void 0===e?i[i.length-1]:i.find(function(n){return n.id===e})}function a(n,t,e,r,l){return i.a(this,void 0,void 0,function(){var o;return i.c(this,function(i){switch(i.label){case 0:return n.presented?[2]:(n.presented=!0,n.willPresent.emit(),o=n.enterAnimation?n.enterAnimation:n.config.get(t,"ios"===n.mode?e:r),[4,f(n,o,n.el,l)]);case 1:return i.sent()&&n.didPresent.emit(),[2]}})})}function c(n,t,e,r,l,o,u){return i.a(this,void 0,void 0,function(){var a,c;return i.c(this,function(i){switch(i.label){case 0:if(!n.presented)return[2,!1];n.presented=!1,i.label=1;case 1:return i.trys.push([1,3,,4]),n.willDismiss.emit({data:t,role:e}),a=n.leaveAnimation?n.leaveAnimation:n.config.get(r,"ios"===n.mode?l:o),[4,f(n,a,n.el,u)];case 2:return i.sent(),n.didDismiss.emit({data:t,role:e}),[3,4];case 3:return c=i.sent(),console.error(c),[3,4];case 4:return n.el.remove(),[2,!0]}})})}function s(n){return n.querySelector("ion-app")||n.body}function f(n,t,e,r){return i.a(this,void 0,void 0,function(){var l,o,u;return i.c(this,function(i){switch(i.label){case 0:return n.animation?(n.animation.destroy(),n.animation=void 0,[2,!1]):[3,1];case 1:return e.classList.remove("ion-page-invisible"),o=n,[4,n.animationCtrl.create(t,e.shadowRoot||n.el,r)];case 2:return l=o.animation=i.sent(),n.animation=l,n.animated||l.duration(0),n.keyboardClose&&l.beforeAddWrite(function(){var n=e.ownerDocument.activeElement;n&&n.matches("input, ion-input, ion-textarea")&&n.blur()}),[4,l.playAsync()];case 3:return i.sent(),u=l.hasCompleted,l.destroy(),n.animation=void 0,[2,u]}})})}function d(n,t){var e,i=new Promise(function(n){return e=n});return function(n,t,e){var i=function(r){n.removeEventListener(t,i),e(r)};n.addEventListener(t,i)}(n,t,function(n){e(n.detail)}),i}function v(n){return"cancel"===n||n===h}var h="backdrop"},"6jz6":function(n,t,e){"use strict";var i=e("CcnG"),r=e("ra/t"),l=e("ntG5"),o=e("A7o+");e("LmEr"),e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a});var u=i.nb({encapsulation:0,styles:[["ion-footer[_ngcontent-%COMP%]{background:var(--ion-color-dark);padding:64px 0}h4[_ngcontent-%COMP%]{color:var(--ion-color-dark-contrast)}.links[_ngcontent-%COMP%]{display:block;margin-bottom:8px;font-size:16px;line-height:1.3;color:var(--ion-color-light)}a[_ngcontent-%COMP%]:hover{color:var(--ion-color-light-shade)}a[_ngcontent-%COMP%]{text-decoration:none}#social[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}#social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ion-color-light);font-size:2rem;padding:0 12px}#social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{padding-left:0}#social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{padding-right:0}@media screen and (max-width:991px){#social[_ngcontent-%COMP%]{order:-1}}"]],data:{}});function a(n){return i.Gb(0,[(n()(),i.pb(0,0,null,null,35,"ion-footer",[["no-border",""]],null,null,null,r.E,r.j)),i.ob(1,49152,null,0,l.u,[i.h,i.k],null,null),(n()(),i.pb(2,0,null,0,33,"ion-grid",[["fixed",""]],null,null,null,r.F,r.k)),i.ob(3,49152,null,0,l.v,[i.h,i.k],{fixed:[0,"fixed"]},null),(n()(),i.pb(4,0,null,0,31,"ion-row",[],null,null,null,r.L,r.q)),i.ob(5,49152,null,0,l.bb,[],null,null),(n()(),i.pb(6,0,null,0,13,"ion-col",[["sizeLg","3"],["sizeXs","6"]],null,null,null,r.A,r.f)),i.ob(7,49152,null,0,l.o,[i.h,i.k],{sizeXs:[0,"sizeXs"],sizeLg:[1,"sizeLg"]},null),(n()(),i.pb(8,0,null,0,2,"h4",[["translate",""]],null,null,null,null,null)),i.ob(9,8536064,null,0,o.e,[o.k,i.k,i.h],{translate:[0,"translate"]},null),(n()(),i.Eb(-1,null,["footer.company"])),(n()(),i.pb(11,0,null,0,2,"a",[["class","links"],["href","#about"],["translate",""]],null,null,null,null,null)),i.ob(12,8536064,null,0,o.e,[o.k,i.k,i.h],{translate:[0,"translate"]},null),(n()(),i.Eb(-1,null,["footer.about"])),(n()(),i.pb(14,0,null,0,2,"a",[["class","links"],["href","#team"],["translate",""]],null,null,null,null,null)),i.ob(15,8536064,null,0,o.e,[o.k,i.k,i.h],{translate:[0,"translate"]},null),(n()(),i.Eb(-1,null,["footer.team"])),(n()(),i.pb(17,0,null,0,2,"a",[["class","links"],["href","/imprint"],["translate",""]],null,null,null,null,null)),i.ob(18,8536064,null,0,o.e,[o.k,i.k,i.h],{translate:[0,"translate"]},null),(n()(),i.Eb(-1,null,["footer.imprint"])),(n()(),i.pb(20,0,null,0,7,"ion-col",[["sizeLg","3"],["sizeXs","6"]],null,null,null,r.A,r.f)),i.ob(21,49152,null,0,l.o,[i.h,i.k],{sizeXs:[0,"sizeXs"],sizeLg:[1,"sizeLg"]},null),(n()(),i.pb(22,0,null,0,2,"h4",[["translate",""]],null,null,null,null,null)),i.ob(23,8536064,null,0,o.e,[o.k,i.k,i.h],{translate:[0,"translate"]},null),(n()(),i.Eb(-1,null,["footer.resources"])),(n()(),i.pb(25,0,null,0,2,"a",[["class","links"],["href","https://fivethree-team.github.io/fivethree/"],["translate",""]],null,null,null,null,null)),i.ob(26,8536064,null,0,o.e,[o.k,i.k,i.h],{translate:[0,"translate"]},null),(n()(),i.Eb(-1,null,["footer.fivethree-components"])),(n()(),i.pb(28,0,null,0,7,"ion-col",[["id","social"],["size","6"],["sizeLg","6"],["sizeXs","12"]],null,null,null,r.A,r.f)),i.ob(29,49152,null,0,l.o,[i.h,i.k],{size:[0,"size"],sizeXs:[1,"sizeXs"],sizeLg:[2,"sizeLg"]},null),(n()(),i.pb(30,0,null,0,2,"a",[["href","https://www.github.com/fivethree-team"],["target","blank"]],null,null,null,null,null)),(n()(),i.pb(31,0,null,null,1,"ion-icon",[["name","logo-github"],["slot","icon-only"]],null,null,null,r.G,r.l)),i.ob(32,49152,null,0,l.x,[i.h,i.k],{name:[0,"name"]},null),(n()(),i.pb(33,0,null,0,2,"a",[["href","https://twitter.com/fivethreeteam"],["target","blank"]],null,null,null,null,null)),(n()(),i.pb(34,0,null,null,1,"ion-icon",[["name","logo-twitter"],["slot","icon-only"]],null,null,null,r.G,r.l)),i.ob(35,49152,null,0,l.x,[i.h,i.k],{name:[0,"name"]},null)],function(n,t){n(t,3,0,""),n(t,7,0,"6","3"),n(t,9,0,""),n(t,12,0,""),n(t,15,0,""),n(t,18,0,""),n(t,21,0,"6","3"),n(t,23,0,""),n(t,26,0,""),n(t,29,0,"6","12","6"),n(t,32,0,"logo-github"),n(t,35,0,"logo-twitter")},null)}},ATF1:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return l}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return c}),e.d(t,"e",function(){return u}),e.d(t,"f",function(){return o}),e.d(t,"g",function(){return v}),e.d(t,"h",function(){return f}),e.d(t,"i",function(){return b}),e.d(t,"j",function(){return s}),e.d(t,"k",function(){return d});var i=e("B5Ai");function r(n,t,e,r,l){return i.a(this,void 0,void 0,function(){var o;return i.c(this,function(i){switch(i.label){case 0:if(n)return[2,n.attachViewToDom(t,e,l,r)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return o="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e,r&&r.forEach(function(n){return o.classList.add(n)}),l&&Object.assign(o,l),t.appendChild(o),o.componentOnReady?[4,o.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,o]}})})}function l(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}function o(){var n=window.TapticEngine;n&&n.selection()}function u(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function a(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function c(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}function s(n,t){return null!==t.closest(n)}function f(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0}function d(n,t){var e;return(e={})[t]=!0,e[t+"-"+n]=void 0!==n,e}function v(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t}var h=/^[a-z][a-z0-9+\-.]*:/;function b(n,t,e,r){return i.a(this,void 0,void 0,function(){var l;return i.c(this,function(i){switch(i.label){case 0:return null==t||"#"===t[0]||h.test(t)?[3,2]:(l=n.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,l.componentOnReady()]):[3,2];case 1:return i.sent(),[2,l.push(t,r)];case 2:return[2,!1]}})})}},B5Ai:function(n,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"a",function(){return l}),e.d(t,"c",function(){return o});var i=function(n,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)};function r(n,t){function e(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}function l(n,t,e,i){return new(e||(e=Promise))(function(r,l){function o(n){try{a(i.next(n))}catch(t){l(t)}}function u(n){try{a(i.throw(n))}catch(t){l(t)}}function a(n){n.done?r(n.value):new e(function(t){t(n.value)}).then(o,u)}a((i=i.apply(n,t||[])).next())})}function o(n,t){var e,i,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(l){return function(u){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,i&&(r=2&l[0]?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,i=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(n,o)}catch(u){l=[6,u],i=0}finally{e=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}}},LmEr:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(){function n(){}return n.prototype.ngOnInit=function(){},n}()},Xqnl:function(n,t,e){"use strict";var i=e("CcnG"),r=e("ra/t"),l=e("ntG5");e("2MiI"),e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u});var o=i.nb({encapsulation:0,styles:[["#github[_ngcontent-%COMP%]{color:var(--ion-color-light-contrast)}"]],data:{}});function u(n){return i.Gb(0,[(n()(),i.pb(0,0,null,null,9,"ion-toolbar",[],null,null,null,r.P,r.t)),i.ob(1,49152,null,0,l.vb,[i.h,i.k],null,null),(n()(),i.pb(2,0,null,0,2,"ion-title",[],null,null,null,r.O,r.u)),i.ob(3,49152,null,0,l.wb,[i.h,i.k],null,null),(n()(),i.Eb(-1,0,[" fivethree "])),(n()(),i.pb(5,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,r.x,r.c)),i.ob(6,49152,null,0,l.g,[],null,null),(n()(),i.pb(7,0,null,0,2,"a",[["href","https://www.github.com/fivethree-team"],["id","github"],["target","blank"]],null,null,null,null,null)),(n()(),i.pb(8,0,null,null,1,"ion-icon",[["name","logo-github"],["slot","icon-only"]],null,null,null,r.G,r.l)),i.ob(9,49152,null,0,l.x,[i.h,i.k],{name:[0,"name"]},null)],function(n,t){n(t,9,0,"logo-github")},null)}},j1ZV:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var i=function(){return function(){}}()}}]);