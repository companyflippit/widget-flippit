flippitwidget.loadBundle("pn1bjg7h",["exports","./chunk-f73036b1.js"],function(t,o){var n=window.flippitwidget.h,e=function(){function t(){this.color="white",this.backgroundColor="#3d1980",this.logoutColor="white"}return t.prototype.logOut=function(){o.removeCookies(),this.navigate.emit("login")},t.prototype.render=function(){var t=this,o=!1;return"#3bbfbd"===this.backgroundColor&&(o=!0),n("div",{class:"logout"},n("style",null,"\n              button{\n                background-color: "+this.backgroundColor+";\n                color: "+this.color+"\n              }\n              p {\n                color: "+this.logoutColor+"\n              }\n            "),o?n("div",{class:"buttons-container"},n("button",{class:"back",onClick:function(){return t.navigate.emit("types")}},"Atrás"),n("button",{onClick:function(){return t.action()}},"Continuar")):n("div",{class:"button-container"},n("button",{onClick:function(){return t.action()}},"Continuar")),n("p",{onClick:function(){return t.logOut()}},n("span",null,"¿Quieres salir de tu cuenta?"),n("br",null),n("b",null,"Cerrar sesión")))},Object.defineProperty(t,"is",{get:function(){return"ion-logout"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{action:{type:"Any",attr:"action"},backgroundColor:{type:String,attr:"background-color"},color:{type:String,attr:"color"},logoutColor:{type:String,attr:"logout-color"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"navigate",method:"navigate",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".logout{width:100%;position:fixed;max-width:400px;bottom:18px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.logout .button-container{width:100%;height:56px}.logout .button-container button{width:100%;height:56px;border-radius:4px;-webkit-box-shadow:1px 1px 2px 0 rgba(0,0,0,.15);box-shadow:1px 1px 2px 0 rgba(0,0,0,.15);font-family:WorkSans,sans-serif;font-size:18px;font-weight:600;border:none;cursor:pointer;outline:none}.logout .buttons-container{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;height:56px}.logout .buttons-container button{width:49%;height:56px;border-radius:4px;-webkit-box-shadow:1px 1px 2px 0 rgba(0,0,0,.15);box-shadow:1px 1px 2px 0 rgba(0,0,0,.15);font-family:WorkSans,sans-serif;font-size:18px;font-weight:600;border:none;cursor:pointer;outline:none}.logout .buttons-container .back{border:1px solid #3bbfbd;background-color:#fff;color:#3bbfbd}.logout p{cursor:default;font-family:WorkSans,sans-serif;font-size:18px;line-height:1.28;letter-spacing:-.6px;text-align:center}.logout p b{cursor:pointer}.logout p b:hover{text-decoration:underline}\@media only screen and (max-width:800px){.logout{margin-top:8px;position:relative;bottom:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.logout .button-container button,.logout .buttons-container,.logout .buttons-container button{height:40px}.logout p{font-size:14px;margin:8px auto}.logout p br,.logout p span{display:none}}"},enumerable:!0,configurable:!0}),t}();t.IonLogout=e,Object.defineProperty(t,"__esModule",{value:!0})});