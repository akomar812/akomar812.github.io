(this["webpackJsonpakomar812.github.io"]=this["webpackJsonpakomar812.github.io"]||[]).push([[0],{11:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(12),r=n.n(a),s=(n(18),n(2)),o=n(6),d="https://drive.google.com/uc?id=1gL7S3L4zUgKBmq7oiPxmhPQxeZ2Us2I0&export=download",l="https://www.linkedin.com/in/andrew-komar-24537036/",u="https://github.com/akomar812",j=n(3),h=n.n(j),b=n(8),p=(n(11),n(0));h.a.parseFont("Big",b.a);var O=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)(""),j=Object(s.a)(r,2),b=j[0],O=j[1],f=Object(c.useState)([]),g=Object(s.a)(f,2),x=g[0],m=g[1],v=Object(c.useState)(),y=Object(s.a)(v,2),w=y[0],k=y[1],C={help:"Print CLI usage",history:"CMD history",resume:"Resume file download",linkedin:"LinkedIn profile",github:"Github repos",chart:"Select asset to chart live","chart [asset]":"Chart live asset price (example asset: ETH-USD)"},S=Object.keys(C).reduce((function(e,t){return e.length>t.length?e:t})),L=function(){return document.getElementById("cli-input").children[1].focus()},E=function(){var e=["    contact: ".concat("akomar812@gmail.com"),"\n","    cmd".concat(M("cmd"),"description"),"    ---".concat(M("---"),"-----------")];for(var t in C)e.push("    ".concat(t).concat(M(t)).concat(C[t]));return e.push(""),e.push("    general"),e.push("    -------"),e.push("    enter an empty command to clear screen"),e.push('    "-c" can be used to copy links to your clipboard (when applicable)'),e.push('    "-o" can be used to open links in new tab (when applicable)'),e.push(""),e.push("\n"),e.join("\n")},M=function(e){for(var t="         ",n=0;n<S.length-e.length;n++)t+=" ";return t};return Object(c.useEffect)((function(){return L()}),[]),Object(c.useEffect)((function(){return h.a.text("Andrew Komar",{font:"Big"},(function(e,t){return a(t)}))}),[]),Object(c.useEffect)((function(){return m([[i,E()].join("\n")])}),[i]),Object(c.useEffect)((function(){return x.length>1?e.setHistory([].concat(Object(o.a)(e.history),[x[0]])):null}),[x]),Object(c.useEffect)((function(){var t=w>=0?e.history[w]:"";document.getElementById("cli-input").children[1].value=t,O(t)}),[w]),Object(p.jsx)("div",{className:"container",onClick:L,children:Object(p.jsxs)("div",{id:"cli-wrapper",children:[Object(p.jsx)("div",{id:"cli-history",children:x.map((function(e,t){return Object(p.jsx)("div",{className:"cli-history-item",children:e},t)}))}),Object(p.jsxs)("div",{id:"cli-input",children:[Object(p.jsx)("span",{children:"$"}),Object(p.jsx)("input",{type:"text",onKeyDown:function(t){switch(t.keyCode){case 13:var n=x.slice();n.push(b),n.push(function(t){if(""===t)return t;if(t.indexOf("help")>=0)return E();if(0===t.indexOf("resume"))return window.open(d,"_blank"),d;if(0===t.indexOf("linkedin"))return t.indexOf("-c")>0&&navigator.clipboard.writeText(l),t.indexOf("-o")>0&&window.open(l,"_blank"),l;if(0===t.indexOf("github"))return t.indexOf("-c")>0&&navigator.clipboard.writeText(u),t.indexOf("-o")>0&&window.open(u,"_blank"),u;if(0===t.indexOf("history"))return e.history.filter((function(e){return""!==e})).join("\n");if("chart"===t)return window.setTimeout((function(){return e.displayManager.showChartSetup()}),0),t;if(0===t.indexOf("chart")){var n=t.split(" ")[1];return window.setTimeout((function(){return n?e.displayManager.showChart(n):e.displayManager.showChartSetup()}),0),t}return"Unknown cmd: "+t}(b)),m(n.reverse().slice(0,2).reverse()),k(void 0),O(""),t.target.value="";break;case 38:e.history.length>0&&k(w&&w>0?w-1:w?void 0:e.history.length-1);break;case 40:e.history.length>0&&(w&&w<e.history.length-1?k(w+1):k(void 0))}},onChange:function(e){return O(e.target.value)}})]})]})})},f=n(4),g=n.n(f),x=n(9),m=n(13),v=n.n(m);function y(e){return Object(p.jsxs)("div",{className:"cli-chart-metric",children:[Object(p.jsxs)("div",{className:"cli-chart-metric-header",children:[e.title,":"]}),Object(p.jsx)("div",{children:e.data})]})}function w(e){var t=new Date(e.datetime);return Object(p.jsxs)("div",{children:[e.quantity,", ",e.price,", ",t.getMonth()+1,"/",t.getDate(),"/",t.getFullYear()]})}function k(e){return Object(p.jsxs)("div",{tabIndex:"0",className:e.isLoading?"hidden":"cli-chart-control",onClick:e.onClick,children:[Object(p.jsx)("div",{children:e.name}),Object(p.jsxs)("div",{children:[" - ",e.hotkey]})]})}function C(e){return Object(p.jsxs)("div",{id:"chart",children:[Object(p.jsx)("div",{children:v.a.plot(e.points,{height:e.height})}),Object(p.jsxs)("div",{id:"cli-chart-sidebar",children:[Object(p.jsxs)("div",{id:"cli-chart-transactions",children:[Object(p.jsx)("div",{children:"transactions"}),Object(p.jsx)("div",{id:"cli-chart-transactions-wrapper",children:e.transactions.map((function(e,t){return Object(p.jsx)(w,{quantity:e[0],price:e[1],datetime:e[2]},t)}))})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{style:{textAlign:"center"},children:"controls"}),Object(p.jsx)(k,{name:"exit",hotkey:"[ctrl] + [c]",onClick:e.displayManager.showCLI,isLoading:e.isLoading}),Object(p.jsx)(k,{name:"reselect",hotkey:"[ctrl] + [r]",onClick:e.displayManager.showChartSetup,isLoading:e.isLoading}),Object(p.jsx)(k,{name:"buy",hotkey:"[ctrl] + [b]",onClick:e.buy,isLoading:e.isLoading}),Object(p.jsx)(k,{name:"sell",hotkey:"[ctrl] + [s]",onClick:e.sell,isLoading:e.isLoading}),Object(p.jsx)(k,{name:"[+]",hotkey:"[ctrl] + [+]",onClick:e.zoomIn,isLoading:e.isLoading}),Object(p.jsx)(k,{name:"[-]",hotkey:"[ctrl] + [-]",onClick:e.zoomOut,isLoading:e.isLoading})]})]})]})}function S(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:["Unknown asset: ",e.asset," (example valid entry: BTC-USD)"]}),Object(p.jsx)("div",{children:"exit - [ctrl] + [c]"}),Object(p.jsx)("div",{children:"select asset - [ctrl] + [r]"})]})}function L(e){var t,n=Object(c.useState)(""),i=Object(s.a)(n,2),a=i[0],r=i[1],d=Object(c.useState)(0),l=Object(s.a)(d,2),u=l[0],j=l[1],b=Object(c.useState)(),O=Object(s.a)(b,2),f=O[0],m=O[1],v=Object(c.useState)(32),w=Object(s.a)(v,2),k=w[0],L=w[1],E=Object(c.useState)({}),M=Object(s.a)(E,2),I=M[0],F=M[1],B=Object(c.useState)(),N=Object(s.a)(B,2),D=N[0],T=N[1],U=Object(c.useState)([]),K=Object(s.a)(U,2),P=K[0],_=K[1],z=Object(c.useState)(0),A=Object(s.a)(z,2),J=A[0],q=A[1],H=Object(c.useState)([]),Q=Object(s.a)(H,2),R=Q[0],G=Q[1],W=Object(c.useState)(0),Y=Object(s.a)(W,2),Z=Y[0],$=Y[1],V=function(){j(J+1===0?0:(R.reduce((function(e,t){return e+t[0]*t[1]}),0)+parseFloat(D.price))/(R.length+1)),q(J+1),$(-1*(R.reduce((function(e,t){return e+t[0]*t[1]}),0)+parseFloat(D.price))),G([].concat(Object(o.a)(R),[[1,parseFloat(D.price),D.time]]))},X=function(){j(J-1===0?0:(R.reduce((function(e,t){return e+t[0]*t[1]}),0)-parseFloat(D.price))/(R.length+1)),q(J-1),$(-1*(R.reduce((function(e,t){return e+t[0]*t[1]}),0)-parseFloat(D.price))),G([].concat(Object(o.a)(R),[[-1,parseFloat(D.price),D.time]]))},ee=function(){return k>5?L(k-1):null},te=function(){return k<32?L(k+1):null};Object(c.useEffect)((function(){h.a.text(e.asset,{font:"Big"},(function(e,t){return r(t)})),document.getElementById("cli-wrapper").focus(),(t=new WebSocket("wss://ws-feed.pro.coinbase.com")).addEventListener("open",(function(){t.send(JSON.stringify({type:"subscribe",product_ids:[e.asset],channels:["ticker"]}))})),t.addEventListener("subscribe",(function(e){console.log("Subscription message:",e)})),t.addEventListener("message",(function(t){try{var n=JSON.parse(t.data);switch(n.type){case"ticker":return T(n);case"error":if("Failed to subscribe"===n.message&&n.reason===e.asset+" is not a valid product")return m(Object(p.jsx)(S,{asset:e.asset},"error"));default:console.log("Message from server ",t.data)}}catch(c){console.log("Received unparseable raw message:",t.data)}}))}),[]),Object(c.useEffect)(Object(x.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D&&((t=P.length<120?P.slice(0):P.slice(1)).push(parseFloat(D.price)),_(t));case 1:case"end":return e.stop()}}),e)}))),[D]),Object(c.useEffect)((function(){console.log("# asset:",e.asset),P.length>1?m(Object(p.jsx)(C,{displayManager:e.displayManager,buy:V,sell:X,zoomIn:ee,zoomOut:te,points:P,transactions:R,height:k,isLoading:ne})):m(Object(p.jsx)("div",{children:"Loading..."},"loading"))}),[P]);var ne=!f||"loading"===f.key||"error"===f.key;return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{id:"cli-wrapper",className:"cli-chart"+(ne?"-loading":""),onKeyDown:function(t){var n=Object.assign(I);return n[t.keyCode]=!0,n[17]&&n[67]?e.displayManager.showCLI():n[17]&&n[82]?e.displayManager.showChartSetup():n[17]&&n[66]?V():n[17]&&n[83]?X():n[17]&&n[61]?ee():n[17]&&n[173]?te():void F(n)},onKeyUp:function(e){var t=Object.assign(I);delete t[e.keyCode],F(t)},tabIndex:"0",children:[Object(p.jsxs)("div",{className:ne?"hidden":"cli-chart-header",children:[Object(p.jsx)("div",{id:"cli-chart-banner",children:a}),Object(p.jsxs)("div",{id:"cli-chart-metrics",children:[Object(p.jsx)(y,{title:"Price",data:D?D.price:""}),Object(p.jsx)(y,{title:"Bid",data:D?D.best_bid:""}),Object(p.jsx)(y,{title:"Ask",data:D?D.best_ask:""}),Object(p.jsx)(y,{title:"Quantity",data:J}),Object(p.jsx)(y,{title:"Cost Basis",data:u.toFixed(4)}),Object(p.jsx)(y,{title:"Total",data:Z.toFixed(4)})]})]}),Object(p.jsx)("div",{style:{width:"100%",textAlign:ne?"center":""},children:f})]})})}h.a.parseFont("Big",b.a);var E=function(e,t){return(e%t+t)%t};function M(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)(0),o=Object(s.a)(r,2),d=o[0],l=o[1],u=Object(c.useState)({}),j=Object(s.a)(u,2),h=j[0],b=j[1];return Object(c.useEffect)(Object(x.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("cli-view").focus(),e.next=3,fetch("https://api.pro.coinbase.com/products");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(n.sort((function(e,t){return e.id>t.id?1:-1})));case 8:case"end":return e.stop()}}),e)}))),[]),Object(p.jsx)("div",{tabIndex:"0",className:"container",onKeyDown:function(t){if(17===t.keyCode||h[17]){var n=Object.assign(h);return n[t.keyCode]=!0,n[17]&&n[67]?e.displayManager.showCLI():b(n)}switch(t.keyCode){case 13:e.displayManager.showChart(i[d].id);break;case 38:l(E(d-1,i.length));break;case 40:l(E(d+1,i.length))}},id:"cli-view",children:Object(p.jsxs)("div",{id:"cli-wrapper",className:"spaced-columns",children:[Object(p.jsx)("div",{id:"cli-history",children:i.slice(d,d+30).map((function(e,t){return Object(p.jsx)("div",{className:0===t?"selected":"",children:e.id},t)}))}),Object(p.jsx)("div",{children:"exit - [ctrl] + [c]"})]})})}var I=function(){var e=Object(c.useState)({name:null}),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(Object(p.jsx)("div",{})),r=Object(s.a)(a,2),o=r[0],d=r[1],l=Object(c.useState)([]),u=Object(s.a)(l,2),j=u[0],h=u[1],b=function(){i({name:"cli",params:{}}),window.history.replaceState(null,"Main","/")},f={showCLI:b,showChart:function(e){i({name:"chart",params:{asset:e}}),window.history.replaceState(null,"Chart","/#chart")},showChartSetup:function(){i({name:"chartsetup",params:{}}),window.history.replaceState(null,"Chart","/#chartsetup")}};return Object(c.useEffect)((function(){return b()}),[]),Object(c.useEffect)((function(){switch(n.name){case"chartsetup":d(Object(p.jsx)(M,{displayManager:f}));break;case"chart":d(Object(p.jsx)(L,{asset:n.params.asset,displayManager:f}));break;case"cli":default:d(Object(p.jsx)(O,{history:j,setHistory:h,displayManager:f}))}}),[n]),Object(p.jsx)("div",{className:"App",children:o})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root")),F()}},[[21,1,2]]]);
//# sourceMappingURL=main.0f147baa.chunk.js.map