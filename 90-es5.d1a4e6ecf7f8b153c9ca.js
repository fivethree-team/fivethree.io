(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{XCFn:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_toast",function(){return u});var i=o("9TBO"),n=o("24pd"),r=(o("lSdy"),o("XIrJ")),a=o("aEGo"),s=o("Dgxi"),d=function(t,e,o){var i=new t,n=new t,r=e.host||e,a=e.querySelector(".toast-wrapper");switch(n.addElement(a),o){case"top":n.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var s=Math.floor(r.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",n.fromTo("opacity",.01,1);break;default:n.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(i.addElement(r).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(n))},c=function(t,e,o){var i=new t,n=new t,r=e.host||e,a=e.querySelector(".toast-wrapper");switch(n.addElement(a),o){case"top":n.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(i.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(n))},l=function(t,e,o){var i=new t,n=new t,r=e.host||e,a=e.querySelector(".toast-wrapper");switch(n.addElement(a),o){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",n.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(r.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",n.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",n.fromTo("opacity",.01,1)}return Promise.resolve(i.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n))},p=function(t,e){var o=new t,i=new t,n=e.host||e,r=e.querySelector(".toast-wrapper");return i.addElement(r),i.fromTo("opacity",.99,0),Promise.resolve(o.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))},u=function(){function t(t){Object(n.m)(this,t),this.presented=!1,this.mode=Object(n.e)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0,this.didPresent=Object(n.d)(this,"ionToastDidPresent",7),this.willPresent=Object(n.d)(this,"ionToastWillPresent",7),this.willDismiss=Object(n.d)(this,"ionToastWillDismiss",7),this.didDismiss=Object(n.d)(this,"ionToastDidDismiss",7)}return t.prototype.present=function(){return i.a(this,void 0,void 0,function(){var t=this;return i.c(this,function(e){switch(e.label){case 0:return[4,Object(r.e)(this,"toastEnter",d,l,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(r.f)(this,t,e,"toastLeave",c,p,this.position)},t.prototype.onDidDismiss=function(){return Object(r.g)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(r.g)(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){var t=this,e=this.buttons?this.buttons.map(function(t){return"string"==typeof t?{text:t}:t}):[];return this.showCloseButton&&e.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(void 0,"cancel")}}),e},t.prototype.buttonClick=function(t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(o){switch(o.label){case 0:return e=t.role,Object(r.j)(e)?[2,this.dismiss(void 0,e)]:[4,this.callButtonHandler(t)];case 1:return o.sent()?[2,this.dismiss(void 0,t.role)]:[2,Promise.resolve()]}})})},t.prototype.callButtonHandler=function(t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(o){switch(o.label){case 0:if(!t||!t.handler)return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Object(r.o)(t.handler)];case 2:return!1===o.sent()?[2,!1]:[3,4];case 3:return e=o.sent(),console.error(e),[3,4];case 4:return[2,!0]}})})},t.prototype.hostData=function(){var t,e=Object(n.e)(this);return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign((t={},t[e]=!0,t),Object(a.a)(this.color),Object(a.b)(this.cssClass),{"toast-translucent":this.translucent})}},t.prototype.renderButtons=function(t,e){var o,i=this;if(0!==t.length){var r=Object(n.e)(this),a=((o={"toast-button-group":!0})["toast-button-group-"+e]=!0,o);return Object(n.i)("div",{class:a},t.map(function(t){return Object(n.i)("button",{type:"button",class:h(t),tabIndex:0,onClick:function(){return i.buttonClick(t)}},Object(n.i)("div",{class:"toast-button-inner"},t.icon&&Object(n.i)("ion-icon",{name:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===r&&Object(n.i)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))}))}},t.prototype.__stencil_render=function(){var t,e=this.getButtons(),o=e.filter(function(t){return"start"===t.side}),i=e.filter(function(t){return"start"!==t.side}),r=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(n.i)("div",{class:r},Object(n.i)("div",{class:"toast-container"},this.renderButtons(o,"start"),Object(n.i)("div",{class:"toast-content"},void 0!==this.header&&Object(n.i)("div",{class:"toast-header"},this.header),void 0!==this.message&&Object(n.i)("div",{class:"toast-message",innerHTML:Object(s.a)(this.message)})),this.renderButtons(i,"end")))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(n.i)(n.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"},enumerable:!0,configurable:!0}),t}(),h=function(t){var e;return Object.assign(((e={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text})["toast-button-"+t.role]=void 0!==t.role,e["ion-focusable"]=!0,e["ion-activatable"]=!0,e),Object(a.b)(t.cssClass))}}}]);