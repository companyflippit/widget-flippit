flippitwidget.loadBundle("m9fya8gd",["exports"],function(e){var t=window.flippitwidget.h,i=function(){function e(){this.buttonHide=!1,this.sliderHide=!0,this.dashboardHide=!0,this.profileGradient="linear-gradient(138deg, #45f2b7, #4396ff)",this.closeIconFill="white",this.gradients={home:"linear-gradient(138deg, #45f2b7, #4396ff)",profile:"linear-gradient(138deg, #4223ae, #ff0079)",buy:"linear-gradient(138deg, #ffffff, #ffffff)"},this.initialBalance=0}return e.prototype.buttonHandler=function(){this.buttonHide=!this.buttonHide,this.sliderHide=!this.sliderHide},e.prototype.dashboardHandler=function(){this.sliderHide=!this.sliderHide,this.dashboardHide=!this.dashboardHide},e.prototype.dashboardColorHandler=function(e){this.closeIconFill="white","profile"===e.detail?this.profileGradient=this.gradients.profile:"buy"===e.detail?(this.profileGradient=this.gradients.buy,this.closeIconFill="#3BBFBD"):this.profileGradient=this.gradients.home},e.prototype.setWalletBalance=function(e){this.initialBalance=e.detail.balance},e.prototype.componentWillLoad=function(){window.localStorage.getItem("FLIPPIT_route")?"profile"===window.localStorage.getItem("FLIPPIT_route")&&(this.profileGradient=this.gradients.profile):(window.localStorage.setItem("FLIPPIT_route","home"),this.dashboardColorHandler({detail:"home"}))},e.prototype.render=function(){return t("div",null,t("ion-open-button",{buttonHide:this.buttonHide}),t("ion-slider",{sliderHide:this.sliderHide,initialBalance:this.initialBalance}),t("ion-lateral-dashboard",{closeIconFill:this.closeIconFill,dashboardHide:this.dashboardHide,profileGradient:this.profileGradient}))},Object.defineProperty(e,"is",{get:function(){return"ion-app"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{buttonHide:{state:!0},closeIconFill:{state:!0},dashboardHide:{state:!0},gradients:{state:!0},initialBalance:{state:!0},profileGradient:{state:!0},sliderHide:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"buttonHandler",method:"buttonHandler"},{name:"dashboardHandler",method:"dashboardHandler"},{name:"giveFlips",method:"dashboardHandler"},{name:"dashboardColor",method:"dashboardColorHandler"},{name:"wallet",method:"setWalletBalance"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}(),n=function(){function e(){}return e.prototype.render=function(){var e=this;return this.dashboardHide?null:t("div",{class:"flippit-lateral-dashboard-container backgroundColor"},t("style",null,"\n          .backgroundColor{\n            background-image: "+this.profileGradient+";\n            box-shadow: 0 36px 540px 0 rgba(0, 0, 0, 0.15);\n          }\n          svg{\n            fill: "+this.closeIconFill+"\n          }\n        "),t("div",{class:"flippit-lateral-dashboard-content"},t("div",{class:"flippit-lateral-dashboard-content-header"},t("div",{class:"closeIcon",onClick:function(){return e.dashboardHandler.emit("button")}},t("svg",{viewBox:"0 0 20 20"},t("g",{id:"closeIcon",transform:"translate(-1358.000000, -62.000000)"},t("path",{d:"M1369.53557,72 L1377.68181,63.8537557 C1378.10606,63.4302262 1378.10606,62.7417195 1377.68181,62.31819 C1377.25756,61.8939367 1376.5705,61.8939367 1376.14624,62.31819 L1368,70.4644344 L1359.85376,62.31819 C1359.4295,61.8939367 1358.74244,61.8939367 1358.31819,62.31819 C1357.89394,62.7417195 1357.89394,63.4302262 1358.31819,63.8537557 L1366.46443,72 L1358.31819,80.1462443 C1357.89394,80.5697738 1357.89394,81.2582805 1358.31819,81.68181 C1358.53032,81.8939367 1358.80833,81.999638 1359.08633,81.999638 C1359.36434,81.999638 1359.64163,81.8939367 1359.85376,81.68181 L1368,73.5355656 L1376.14624,81.68181 C1376.35837,81.8939367 1376.63638,81.999638 1376.91439,81.999638 C1377.1924,81.999638 1377.46968,81.8939367 1377.68181,81.68181 C1378.10606,81.2582805 1378.10606,80.5697738 1377.68181,80.1462443 L1369.53557,72"}))))),t("div",{class:"flippit-lateral-dashboard-content-body"},t("ion-router",null))))},Object.defineProperty(e,"is",{get:function(){return"ion-lateral-dashboard"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{closeIconFill:{type:String,attr:"close-icon-fill"},dashboardHide:{type:Boolean,attr:"dashboard-hide"},profileGradient:{type:String,attr:"profile-gradient"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"dashboardHandler",method:"dashboardHandler",bubbles:!0,cancelable:!0,composed:!0},{name:"navigate",method:"navigate",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".flippit-lateral-dashboard-container{width:200vh;height:200vh;padding:0;border-radius:50%;position:fixed;bottom:-50vh;right:-100vh;z-index:2147483647;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.flippit-lateral-dashboard-container .flippit-lateral-dashboard-content{-webkit-box-sizing:border-box;box-sizing:border-box;height:100vh;width:100vh;position:absolute;top:calc(100vh - 50vh);padding-top:58px}.flippit-lateral-dashboard-container .flippit-lateral-dashboard-content .flippit-lateral-dashboard-content-header{height:32px;width:100%;position:relative}.flippit-lateral-dashboard-container .flippit-lateral-dashboard-content .flippit-lateral-dashboard-content-header .closeIcon{width:20px;height:32px;position:absolute;top:0;right:58px;display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.flippit-lateral-dashboard-container .flippit-lateral-dashboard-content .flippit-lateral-dashboard-content-header .closeIcon svg{height:20px;cursor:pointer}.flippit-lateral-dashboard-container .flippit-lateral-dashboard-content .flippit-lateral-dashboard-content-body{height:100%;width:100%}\@media only screen and (max-width:800px){.flippit-lateral-dashboard-container{width:100%;height:100%;min-height:700px;padding:0;border-radius:0;position:fixed;top:0;left:0;z-index:2147483647;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.flippit-lateral-dashboard-container .flippit-lateral-dashboard-content{-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;width:100%;position:absolute;top:0;padding-top:0}.flippit-lateral-dashboard-container .flippit-lateral-dashboard-content .flippit-lateral-dashboard-content-header{height:40px;width:100%;max-width:400px;position:absolute;right:0}.flippit-lateral-dashboard-container .flippit-lateral-dashboard-content .flippit-lateral-dashboard-content-header .closeIcon{width:20px;height:32px;position:absolute;top:0;right:16px;display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.flippit-lateral-dashboard-container .flippit-lateral-dashboard-content .flippit-lateral-dashboard-content-header .closeIcon svg{height:20px;cursor:pointer}.flippit-lateral-dashboard-container .flippit-lateral-dashboard-content .flippit-lateral-dashboard-content-body{height:100%;width:100%;max-width:400px;margin:0 auto}}"},enumerable:!0,configurable:!0}),e}();e.IonApp=i,e.IonLateralDashboard=n,Object.defineProperty(e,"__esModule",{value:!0})});