(this["webpackJsonpakomar812.github.io"]=this["webpackJsonpakomar812.github.io"]||[]).push([[0],{10:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(11),r=n.n(a),s=(n(20),n(2)),o=n(15),_="https://drive.google.com/uc?id=1gL7S3L4zUgKBmq7oiPxmhPQxeZ2Us2I0&export=download",u="https://www.linkedin.com/in/andrew-komar-24537036/",d="https://github.com/akomar812",l=(n(10),n(1));var h=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)([]),h=Object(s.a)(r,2),b=h[0],j=h[1],f=Object(c.useState)(),p=Object(s.a)(f,2),O=p[0],g=p[1],m="(-c=copy url to clipboard, -o=open url in new tab)",v={help:"Print CLI usage",resume:"Resume file download",linkedin:"LinkedIn profile "+m,github:"Github repos "+m,history:"CMD history","chart bitcoin":"Graph live bitcoin price"},w=Object.keys(v).reduce((function(e,t){return e.length>t.length?e:t})),y=function(){var e=["    contact: ".concat("akomar812@gmail.com"),"\n","    cmd".concat(x("cmd"),"description"),"    ---".concat(x("---"),"-----------")];for(var t in v)e.push("    ".concat(t).concat(x(t)).concat(v[t]));return e.push(""),e.push("    general"),e.push("    -------"),e.push("    enter an empty command to clear screen"),e.push(""),e.push("\n"),e.join("\n")},x=function(e){for(var t="         ",n=0;n<w.length-e.length;n++)t+=" ";return t};return Object(c.useEffect)((function(){return j([["\n       ___            _                     _   __\n      / _ \\          | |                   | | / /\n     / /_\\ \\_ __   __| |_ __ _____      __ | |/ /  ___  _ __ ___   __ _ _ __\n     |  _  | '_ \\ / _` | '__/ _ \\ \\ /\\ / / |    \\ / _ \\| '_ ` _ \\ / _` | '__|\n     | | | | | | | (_| | | |  __/\\ V  V /  | |\\  \\ (_) | | | | | | (_| | |\n     \\_| |_/_| |_|\\__,_|_|  \\___| \\_/\\_/   \\_| \\_/\\___/|_| |_| |_|\\__,_|_|\n     ",y()].join("\n")])}),[]),Object(c.useEffect)((function(){return b.length>1?e.setHistory([].concat(Object(o.a)(e.history),[b[0]])):null}),[b]),Object(c.useEffect)((function(){var t=O>=0?e.history[O]:"";document.getElementById("cli-input").children[1].value=t,a(t)}),[O]),Object(l.jsx)("div",{className:"container",onClick:function(){return document.getElementById("cli-input").children[1].focus()},children:Object(l.jsxs)("div",{id:"cli-wrapper",children:[Object(l.jsx)("div",{id:"cli-history",children:b.map((function(e,t){return Object(l.jsx)("div",{className:"cli-history-item",children:e},t)}))}),Object(l.jsxs)("div",{id:"cli-input",children:[Object(l.jsx)("span",{children:"$"}),Object(l.jsx)("input",{type:"text",onKeyDown:function(t){switch(t.keyCode){case 13:var n=b.slice();n.push(i),n.push(function(t){if(""===t)return t;if(t.indexOf("help")>=0)return y();if(0===t.indexOf("resume"))return window.open(_,"_blank"),_;if(0===t.indexOf("linkedin"))return t.indexOf("-c")>0&&navigator.clipboard.writeText(u),t.indexOf("-o")>0&&window.open(u,"_blank"),u;if(0===t.indexOf("github"))return t.indexOf("-c")>0&&navigator.clipboard.writeText(d),t.indexOf("-o")>0&&window.open(d,"_blank"),d;if(0===t.indexOf("history"))return e.history.filter((function(e){return""!==e})).join("\n");if("chart bitcoin"===t){var n=t.split(" ")[1];return window.setTimeout((function(){return e.displayManager.showChart(n)}),0),""}return"Unknown cmd: "+t}(i)),j(n.reverse().slice(0,2).reverse()),g(void 0),a(""),t.target.value="";break;case 38:e.history.length>0&&g(O&&O>0?O-1:O?void 0:e.history.length-1);break;case 40:e.history.length>0&&(O&&O<e.history.length-1?g(O+1):g(void 0))}},onChange:function(e){return a(e.target.value)}})]})]})})},b=n(8),j=n.n(b),f=n(12),p=n(13),O=n.n(p);function g(e){var t=Object(c.useState)(),n=Object(s.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)({}),o=Object(s.a)(r,2),_=o[0],u=o[1],d=Object(c.useState)(),h=Object(s.a)(d,2),b=h[0],p=h[1],g=Object(c.useState)([]),m=Object(s.a)(g,2),v=m[0],w=m[1],y=Object(c.useState)(),x=Object(s.a)(y,2),k=(x[0],x[1]),S=Object(c.useState)(0),C=Object(s.a)(S,2);C[0],C[1];Object(c.useEffect)((function(){switch(e.asset){case"bitcoin":var t=new WebSocket("wss://ws-feed.pro.coinbase.com");t.addEventListener("open",(function(){t.send(JSON.stringify({type:"subscribe",product_ids:["BTC-USD"],channels:["ticker"]}))})),t.addEventListener("subscribe",(function(e){console.log("Subscription message:",e)})),t.addEventListener("message",(function(e){try{var t=JSON.parse(e.data);switch(t.type){case"ticker":return p(parseFloat(t.price));default:console.log("Message from server ",e.data)}}catch(n){console.log("Received unparseable raw message:",e.data)}})),k(t)}}),[]),Object(c.useEffect)(Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b&&((t=v.length<120?v.slice(0):v.slice(1)).push(b),w(t));case 1:case"end":return e.stop()}}),e)}))),[b]),Object(c.useEffect)((function(){v.length>5?a(Object(l.jsxs)("div",{id:"chart",children:[Object(l.jsx)("div",{children:O.a.plot(v,{height:32})}),Object(l.jsx)("div",{className:E?"hidden":"",onClick:e.displayManager.showCLI,style:{margin:"0 3em"},children:"exit - ctrl + c"})]})):a(Object(l.jsx)("div",{children:"Loading..."},"loading"))}),[v]);var E=!i||"loading"===i.key;return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{id:"cli-wrapper",className:"cli-chart"+(E?"-loading":""),onKeyDown:function(t){var n=Object.assign(_);if(n[t.keyCode]=!0,n[17]&&n[67])return e.displayManager.showCLI();u(n)},onKeyUp:function(e){var t=Object.assign(_);delete t[e.keyCode],u(t)},tabIndex:"0",children:[Object(l.jsx)("div",{className:E?"hidden":"",children:"\n    ____   _ _            _       \n    |  _ \\(_) |          (_)      \n    | |_) |_| |_ ___ ___  _ _ __  \n    |  _ <| | __/ __/ _ \\| | '_ \\ \n    | |_) | | || (_| (_) | | | | |\n    |____/|_|\\__\\___\\___/|_|_| |_|\n  "}),Object(l.jsx)("div",{style:{textAlign:"center",width:"100%"},children:i})]})})}var m=function(){var e=Object(c.useState)({name:null}),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(Object(l.jsx)("div",{})),r=Object(s.a)(a,2),o=r[0],_=r[1],u=Object(c.useState)([]),d=Object(s.a)(u,2),b=d[0],j=d[1],f=function(){i({name:"cli",params:{}}),window.history.replaceState(null,"Main","/")},p={showCLI:f,showChart:function(e){i({name:"chart",params:{asset:e}}),window.history.replaceState(null,"Chart","/#chart")}};return Object(c.useEffect)((function(){return f()}),[]),Object(c.useEffect)((function(){switch(n.name){case"chart":_(Object(l.jsx)(g,{asset:n.params.asset,displayManager:p}));break;case"cli":default:_(Object(l.jsx)(h,{history:b,setHistory:j,displayManager:p}))}}),[n]),Object(l.jsx)("div",{className:"App",children:o})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))},w=n(14),y=n(5),x=n(9);w.a.add(y.c,y.b,x.b,x.a,y.a),r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),v()}},[[26,1,2]]]);
//# sourceMappingURL=main.093eb1e0.chunk.js.map