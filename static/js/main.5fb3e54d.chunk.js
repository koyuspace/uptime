(this.webpackJsonpuptime=this.webpackJsonpuptime||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),s=n(4),i=n.n(s),o=(n(14),n(5)),r=n(6),u=n(9),d=n(8),l=n.p+"static/media/logo.779005ea.svg",p=(n(15),n(7)),m=n(0),f=n.n(m),h=n(1),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){f.a.get("/monitors.json",(function(t){t.forEach((function(t){t.enabled&&(t.name.length>5?f()("#statuses").append('<div class="status-item"><span class="online" id="'+t.name+'"></span> <span class="servicename long-name">'+t.name+"</span></div>"):f()("#statuses").append('<div class="status-item"><span class="online" id="'+t.name+'"></span> <span class="servicename">'+t.name+"</span></div>"),f.a.get(t.url,(function(t){})).fail((function(){f()("#"+t.name).css("background","red")})))}))})),window.setTimeout((function(){f.a.get("https://mcapi.us/server/status?ip=koyu.space",(function(t){try{"false"===t.online&&f()("#minecraft").css("background","red")}catch(e){}})).fail((function(){f()("#minecraft").css("background","red")}))})),window.setTimeout((function(){f.a.get("https://mastodon.social/api/v1/timelines/tag/koyustatus",(function(t){var e=0;console.log(t),f()("#incidents").append("<ul>"),t.forEach((function(t){if("koyu@koyu.space"===t.account.acct||"zack@koyu.space"===t.account.acct){var n=p.a.parse(t.content);t.emojis.forEach((function(t){n=n.replaceAll(":"+t.shortcode+":",'<img src="'+t.url+'" class="emoji" draggable="false">')})),t.media_attachments.length>0&&t.media_attachments.forEach((function(t){"image"===t.type&&(n+='<a href="'+t.url+'" target="_blank"><img src="'+t.url+'" width="200" class="attachment"></a>'),"gifv"===t.type&&(n+='<video src="'+t.url+'" width="200" class="attachment" controls preload autoplay loop mute></video>')})),f()("#incidents").append("<li>"+t.created_at+": "+n+"<br>~@"+t.account.acct+"</li>"),e++}})),f()("#incidents").append("</ul>"),0===e&&f()("#incidents").html('<p class="error">Nothing to see here...</p>')}))}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{children:Object(h.jsxs)("span",{id:"logofont",children:[Object(h.jsx)("img",{src:l,id:"logo",alt:"Logo"})," koyu.space Status"]})}),Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("div",{id:"statuses"}),Object(h.jsx)("h2",{children:"Incident history"}),Object(h.jsx)("div",{id:"incidents"})]})]})}}]),n}(c.a.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),j()}},[[17,1,2]]]);
//# sourceMappingURL=main.5fb3e54d.chunk.js.map