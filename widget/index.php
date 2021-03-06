
    <?php
      /*
      Plugin Name: Flippit
      */
      add_action( 'wp_head', 'my_header_scripts' );
      function my_header_scripts(){
        ?>
          <meta name="viewport" content="width=device-width, initial-scale=1", minimal-ui>
          <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
          <script src="/wp-content/plugins/widget/index.js"></script>
          <script data-resources-url="/wp-content/plugins/widget/build/flippitwidget/">
            !function(e,i,t,n,o,r,s,a,c,l,p,d,u,f){for(p=e.flippitwidget=e.flippitwidget||{},(d=i.createElement("style")).innerHTML=c+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),u=i.head.querySelector("meta[charset]"),i.head.insertBefore(d,u?u.nextSibling:i.head.firstChild),function(e,i,t){(e["s-apps"]=e["s-apps"]||[]).push("flippitwidget"),t.componentOnReady||(t.componentOnReady=function(){var i=this;function t(t){if(i.nodeName.indexOf("-")>0){for(var n=e["s-apps"],o=0,r=0;r<n.length;r++)if(e[n[r]].componentOnReady){if(e[n[r]].componentOnReady(i,t))return;o++}if(o<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([i,t])}t(null)}return e.Promise?new e.Promise(t):{then:t}})}(e,0,l),o=o||p.resourcesUrl,d=(u=i.querySelectorAll("script")).length-1;d>=0&&!(f=u[d]).src&&!f.hasAttribute("data-resources-url");d--);u=f.getAttribute("data-resources-url"),!o&&u&&(o=u),!o&&f.src&&(o=(u=f.src.split("/").slice(0,-1)).join("/")+(u.length?"/":"")+"flippitwidget/"),d=i.createElement("script"),function(e,i,t,n){return!(i.search.indexOf("core=esm")>0)&&(!(!(i.search.indexOf("core=es5")>0||"file:"===i.protocol)&&e.customElements&&e.customElements.define&&e.fetch&&e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")&&"noModule"in t)||function(e){try{return new Function('import("")'),!1}catch(e){}return!0}())}(e,e.location,d)?d.src=o+"flippitwidget.iicsd9sw.js":(d.src=o+"flippitwidget.6pmipztw.js",d.setAttribute("type","module"),d.setAttribute("crossorigin",!0)),d.setAttribute("data-resources-url",o),d.setAttribute("data-namespace","flippitwidget"),i.head.appendChild(d)}(window,document,0,0,0,0,0,0,"ion-app,ion-arrow,ion-buy,ion-call-to-action,ion-confirm,ion-header,ion-home,ion-input-range,ion-lateral-dashboard,ion-login,ion-logout,ion-message,ion-number,ion-onboarding,ion-onboarding-2,ion-onboarding-3,ion-open-button,ion-phone,ion-profile,ion-router,ion-signup,ion-slider,ion-types,ion-validation-code,ion-validation-completed",HTMLElement.prototype);
          </script>
    <?php
    }