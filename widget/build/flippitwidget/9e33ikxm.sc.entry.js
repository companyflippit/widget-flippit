const t=window.flippitwidget.h;import{a as e,b as i}from"./chunk-956f8c0a.js";import{b as n}from"./chunk-7bf0dbe1.js";class r{render(){return t("div",{class:"confirm-flips"},t("svg",{width:"10px",height:"7px",viewBox:"0 0 10 7"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"},t("g",{transform:"translate(-475.000000, -121.000000)",stroke:"#FFFFFF"},t("g",{transform:"translate(166.000000, 47.000000)"},t("g",{transform:"translate(290.500000, 68.500000)"},t("g",{transform:"translate(19.250000, 6.250000)"},t("polyline",{points:"8 0 2.5 5.5 0 3"}))))))))}static get is(){return"ion-confirm"}static get encapsulation(){return"shadow"}static get style(){return".confirm-flips.sc-ion-confirm{position:absolute;width:34.5px;height:18px;background:#6311fa;-webkit-box-shadow:0 1px 10px 0 rgba(0,0,0,.08);box-shadow:0 1px 10px 0 rgba(0,0,0,.08);border-radius:4px;border:none;right:-22px;color:#fff;bottom:16px;cursor:pointer}.confirm-flips.sc-ion-confirm   svg.sc-ion-confirm{width:16px;position:absolute;right:2px;top:6px}"}}class s{constructor(){this.range=50,this.min=0,this.max=100,this.increment=10}handleChange(t){this.range=Math.round(t.target.value/this.increment)*this.increment,this.rangeEmitter.emit(this.range/10)}rangeHandler(t){t?this.range<100&&(this.range=Number(this.range)+this.increment):this.range>0&&(this.range=Number(this.range)-this.increment),this.rangeEmitter.emit(this.range/10)}componentWillLoad(){this.rangeEmitter.emit(this.range/10)}render(){return t("form",{class:"input-range"},t("div",{class:"input-container"},this.range<=18?t("div",{class:"left-button-big"},t("div",{class:"right-button"},this.range/10),t("div",{class:"left-button",onClick:()=>this.rangeHandler(!1)},"-")):t("div",{class:"left-button",onClick:()=>this.rangeHandler(!1)},"-"),this.range>=82?t("div",{class:"right-button-big"},t("div",{class:"left-button"},this.range/10),t("div",{class:"right-button",onClick:()=>this.rangeHandler(!0)},"+")):t("div",{class:"right-button",onClick:()=>this.rangeHandler(!0)},"+"),t("input",this.range<=18||this.range>=82?{type:"range",id:"bubble-buttons",min:this.min,max:this.max,value:this.range,onInput:t=>this.handleChange(t)}:{type:"range",min:this.min,max:this.max,value:this.range,onInput:t=>this.handleChange(t)}),this.range<=18||this.range>=82?null:t("ion-number",{range:this.range})))}static get is(){return"ion-input-range"}static get encapsulation(){return"shadow"}static get properties(){return{increment:{state:!0},max:{state:!0},min:{state:!0},range:{state:!0}}}static get events(){return[{name:"rangeEmitter",method:"rangeEmitter",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".input-range.sc-ion-input-range{position:relative;height:100%;width:100%}.input-range.sc-ion-input-range, .input-range.sc-ion-input-range   .left-button.sc-ion-input-range, .input-range.sc-ion-input-range   .right-button.sc-ion-input-range{display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.input-range.sc-ion-input-range   .left-button.sc-ion-input-range, .input-range.sc-ion-input-range   .right-button.sc-ion-input-range{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;width:24.9px;height:30px;background-color:#fff;border:0 solid hsla(0,0%,100%,.54);-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.1);box-shadow:0 0 10px 0 rgba(0,0,0,.1);color:#3d1980;letter-spacing:-.29px;cursor:pointer;font-size:12px;top:10px}.input-range.sc-ion-input-range   .left-button.sc-ion-input-range{left:-1px;border-radius:50% 0 0 50%}.input-range.sc-ion-input-range   .right-button.sc-ion-input-range{right:-1px;border-radius:0 50% 50% 0}.input-range.sc-ion-input-range   .left-button-big.sc-ion-input-range{width:49.8px;background-color:transparent}.input-range.sc-ion-input-range   .left-button-big.sc-ion-input-range, .input-range.sc-ion-input-range   .left-button-big.sc-ion-input-range   .left-button.sc-ion-input-range, .input-range.sc-ion-input-range   .left-button-big.sc-ion-input-range   .right-button.sc-ion-input-range{display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;height:30px}.input-range.sc-ion-input-range   .left-button-big.sc-ion-input-range   .left-button.sc-ion-input-range, .input-range.sc-ion-input-range   .left-button-big.sc-ion-input-range   .right-button.sc-ion-input-range{width:24.9px;background-color:#fff;border:0 solid hsla(0,0%,100%,.54);-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.1);box-shadow:0 0 10px 0 rgba(0,0,0,.1);color:#3d1980;letter-spacing:-.29px;font-size:12px;top:0}.input-range.sc-ion-input-range   .left-button-big.sc-ion-input-range   .left-button.sc-ion-input-range{left:0;border-radius:50% 0 0 50%;cursor:pointer}.input-range.sc-ion-input-range   .left-button-big.sc-ion-input-range   .right-button.sc-ion-input-range{right:0;border-radius:0 50% 50% 0}.input-range.sc-ion-input-range   .left-button-big.sc-ion-input-range{left:-1px}.input-range.sc-ion-input-range   .right-button-big.sc-ion-input-range{width:49.8px;background-color:transparent}.input-range.sc-ion-input-range   .right-button-big.sc-ion-input-range, .input-range.sc-ion-input-range   .right-button-big.sc-ion-input-range   .left-button.sc-ion-input-range, .input-range.sc-ion-input-range   .right-button-big.sc-ion-input-range   .right-button.sc-ion-input-range{display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;height:30px}.input-range.sc-ion-input-range   .right-button-big.sc-ion-input-range   .left-button.sc-ion-input-range, .input-range.sc-ion-input-range   .right-button-big.sc-ion-input-range   .right-button.sc-ion-input-range{width:24.9px;background-color:#fff;border:0 solid hsla(0,0%,100%,.54);-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.1);box-shadow:0 0 10px 0 rgba(0,0,0,.1);color:#3d1980;letter-spacing:-.29px;font-size:12px;top:0}.input-range.sc-ion-input-range   .right-button-big.sc-ion-input-range   .left-button.sc-ion-input-range{left:0;border-radius:50% 0 0 50%}.input-range.sc-ion-input-range   .right-button-big.sc-ion-input-range   .right-button.sc-ion-input-range{right:0;border-radius:0 50% 50% 0;cursor:pointer}.input-range.sc-ion-input-range   .right-button-big.sc-ion-input-range{right:-1px}.input-range.sc-ion-input-range   .input-container.sc-ion-input-range{position:relative;width:163px;height:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.input-range.sc-ion-input-range   .input-container.sc-ion-input-range   input[type=range].sc-ion-input-range{-webkit-appearance:none;width:100%;height:30px;margin:0}.input-range.sc-ion-input-range   .input-container.sc-ion-input-range   input[type=range].sc-ion-input-range:focus{outline:none}.input-range.sc-ion-input-range   .input-container.sc-ion-input-range   input[type=range].sc-ion-input-range::-webkit-slider-runnable-track{width:100%;height:10px;cursor:pointer;-webkit-animation:.2s;animation:.2s;background-image:linear-gradient(-134deg,#6311fa,#45f2b7);border:none}.input-range.sc-ion-input-range   .input-container.sc-ion-input-range   input[type=range].sc-ion-input-range:focus::-webkit-slider-runnable-track{background-image:linear-gradient(-134deg,#6311fa,#45f2b7)}.input-range.sc-ion-input-range   .input-container.sc-ion-input-range   input[type=range].sc-ion-input-range::-webkit-slider-thumb{background-color:transparent;-webkit-box-shadow:none;box-shadow:none;border-radius:50%;border:none;height:30px;width:30px;cursor:pointer;-webkit-appearance:none;margin-top:-10px;position:relative;z-index:1}.input-range.sc-ion-input-range   .input-container.sc-ion-input-range   #bubble-buttons[type=range].sc-ion-input-range::-webkit-slider-thumb{display:none;-webkit-appearance:none;border:none}"}}class a{render(){return t("div",{class:"message-container"},this.confirmation?t("p",{class:"confirmation"},"Gracias por los ",this.flips," flips!"):null,this.error?t("p",{class:"error"},"No dispones de ",this.flips," Flips!"):null)}static get is(){return"ion-message"}static get encapsulation(){return"shadow"}static get properties(){return{confirmation:{type:Boolean,attr:"confirmation"},error:{type:Boolean,attr:"error"},flips:{type:Number,attr:"flips"}}}static get style(){return".message-container.sc-ion-message{width:100%;height:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.message-container.sc-ion-message   .confirmation.sc-ion-message{margin:0;color:#3d1980}.message-container.sc-ion-message   .error.sc-ion-message{margin:0;color:#ff0079}"}}class l{constructor(){this.sliderWidth=272,this.inputWidth=.5992647059*this.sliderWidth}render(){const e=this.inputWidth/123;return t("div",null,t("p",{class:"number"},t("span",{class:"font-size"},this.range/10)),t("style",null,`\n          .number{\n            left: ${this.range*e}px;\n          }\n        `))}static get is(){return"ion-number"}static get properties(){return{inputWidth:{state:!0},range:{type:Number,attr:"range"},sliderWidth:{state:!0}}}static get style(){return".number{display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-family:WorkSans,sans-serif;color:#3d1980;position:absolute;background-color:#fff;border:1px solid #fff;border:0 solid hsla(0,0%,100%,.54);-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.1);box-shadow:0 0 10px 0 rgba(0,0,0,.1);border-radius:50%;height:30px;width:30px;cursor:pointer;top:10px;margin:0}.font-size{font-size:12px}"}}class o{constructor(){this.confirmFlipHide=!0,this.firstUpdateConfirmFlipHide=!0,this.error=!1,this.confirmation=!1,this.flips=0,this.balance=0,this.update=!1}flipsHandler(t){""===n("FLIPPIT_accessToken")?this.confirmFlipHide=!0:this.firstUpdateConfirmFlipHide?(this.firstUpdateConfirmFlipHide=!1,this.flips=t.detail):(this.confirmFlipHide=!1,this.flips=t.detail)}setMessage(t){"error"===t?this.error=!0:this.confirmation=!0,this.confirmFlipHide=!0,setTimeout(()=>{this.error=!1,this.confirmation=!1},1e3)}setInitialBalance(t){this.balance=t}componentWillLoad(){n("FLIPPIT_accessToken")&&e(`${i.baseUrl}/api/wallet`,n("FLIPPIT_accessToken")).then(t=>t.json()).then(t=>{200===t.status&&(this.balance=t.data.balance)})}render(){return this.sliderHide?null:t("div",{class:"flippit-slider-container"},t("div",{class:"flippit-close-button-container"},t("ion-arrow",{onClick:()=>this.buttonHandler.emit(),arrowUp:!1})),this.confirmFlipHide?null:t("ion-confirm",null),t("div",{class:"slider"},t("div",{class:"profile-container"},t("svg",{width:"14px",height:"17px",viewBox:"0 0 14 17",onClick:()=>this.dashboardHandler.emit("dashboard")},t("g",{id:"02_User",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"},t("g",{id:"3-estados",transform:"translate(-234.000000, -108.000000)",stroke:"#3D1980","stroke-width":"2"},t("g",{id:"Group-4",transform:"translate(166.000000, 47.000000)"},t("g",{id:"flip-bar",transform:"translate(165.000000, 65.500000) rotate(-270.000000) translate(-165.000000, -65.500000) translate(128.500000, -70.500000)"},t("g",{id:"Group-2",transform:"translate(33.000000, 187.000000)"},t("g",{id:"user",transform:"translate(7.500000, 39.000000) rotate(-90.000000) translate(-7.500000, -39.000000) translate(1.500000, 31.500000)"},t("path",{d:"M12,14.2 L12,12.5333333 C12,10.6923842 10.6568542,9.2 9,9.2 L3,9.2 C1.34314575,9.2 0,10.6923842 0,12.5333333 L0,14.2",id:"Shape"}),t("circle",{id:"Oval",cx:"6",cy:"3",r:"3"})))))))),t("div",{class:"number-of-flips-container"},this.balance," Flips")),t("div",{class:"vertical-line"}),t("div",{class:"input-range-container"},this.confirmation||this.error?t("ion-message",{flips:this.flips,error:this.error,confirmation:this.confirmation}):t("ion-input-range",null))))}static get is(){return"ion-slider"}static get encapsulation(){return"shadow"}static get properties(){return{balance:{state:!0},confirmation:{state:!0},confirmFlipHide:{state:!0},error:{state:!0},firstUpdateConfirmFlipHide:{state:!0},flips:{state:!0},initialBalance:{type:Number,attr:"initial-balance",watchCallbacks:["setInitialBalance"]},sliderHide:{type:Boolean,attr:"slider-hide"},update:{state:!0}}}static get events(){return[{name:"buttonHandler",method:"buttonHandler",bubbles:!0,cancelable:!0,composed:!0},{name:"dashboardHandler",method:"dashboardHandler",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"rangeEmitter",method:"flipsHandler"}]}static get style(){return".flippit-slider-container.sc-ion-slider{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:272px;height:80px;position:fixed;bottom:40px;left:calc(50% - 136px);z-index:2147483647;font-family:WorkSans,sans-serif}.flippit-slider-container.sc-ion-slider   .flippit-close-button-container.sc-ion-slider{height:80px;width:90px;border-radius:50% 50% 0 0;position:absolute;left:calc(50% - 45px)}.flippit-slider-container.sc-ion-slider   .slider.sc-ion-slider{padding:0;width:272px;height:50px;border:none;border-radius:25px;background-color:#fff;-webkit-box-shadow:0 2px 30px 0 rgba(0,0,0,.15);box-shadow:0 2px 30px 0 rgba(0,0,0,.15);position:absolute;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.flippit-slider-container.sc-ion-slider   .slider.sc-ion-slider   .profile-container.sc-ion-slider{display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;height:100%;width:83px}.flippit-slider-container.sc-ion-slider   .slider.sc-ion-slider   .profile-container.sc-ion-slider   svg.sc-ion-slider{cursor:pointer}.flippit-slider-container.sc-ion-slider   .slider.sc-ion-slider   .profile-container.sc-ion-slider   .number-of-flips-container.sc-ion-slider{margin-top:6px;font-size:12px;color:#3d1980;letter-spacing:.22px;text-align:center;line-height:12px}.flippit-slider-container.sc-ion-slider   .slider.sc-ion-slider   .vertical-line.sc-ion-slider{width:1px;height:100%;background:#979797;height:30px;opacity:.2}.flippit-slider-container.sc-ion-slider   .slider.sc-ion-slider   .input-range-container.sc-ion-slider{width:188px;height:100%}"}}export{r as IonConfirm,s as IonInputRange,a as IonMessage,l as IonNumber,o as IonSlider};