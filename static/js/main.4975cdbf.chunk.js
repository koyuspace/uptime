(this.webpackJsonpuptime=this.webpackJsonpuptime||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(4),i=n.n(s),o=(n(14),n(5)),r=n(6),d=n(9),l=n(8),u=n.p+"static/media/logo.d53565a8.svg",m=(n(15),n(7)),p=n(1),h=n.n(p),f=n(0),j=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){h()("#statuses").hide(),h.a.get("/monitors.json",(function(e){e.forEach((function(e){if(e.enabled&&(e.name.length>5?h()("#statuses").append('<div class="status-item"><span class="online" id="'+e.name+'"></span> <span class="servicename long-name">'+e.name+"</span></div>"):h()("#statuses").append('<div class="status-item"><span class="online" id="'+e.name+'"></span> <span class="servicename">'+e.name+"</span></div>"),!e.custom))try{h.a.ajax({url:e.url,error:function(){h()("#"+e.name).css("background","red")},timeout:3e3})}catch(t){}})),window.setTimeout((function(){h()("#statuses").show(),h()("#loading").hide()}),3e3)})),window.setInterval((function(){h.a.get("https://tf2-servers.com/api/?object=servers&element=detail&key=1kvaO0LmAf7IseSIrf9fmDQS4M81umIlfR",(function(e){try{"0"===e.is_online&&h()("#minecraft").css("background","red")}catch(t){}})).fail((function(){h()("#minecraft").css("background","red")}))}),1e3),window.setInterval((function(){var e=document.getElementById("check").appendChild(document.createElement("img"));e.onerror=function(){h()("#mail").css("background","red")},e.src="https://office.mailbox.org/appsuite/apps/themes/org.mailbox.default/logo.png"}),1e3);var e="";function t(){h.a.get("https://mastodon.social/api/v1/timelines/tag/koyustatus?limit=5",(function(t){if(t!==e){h()("#incidents").html("");var n=0;h()("#incidents").append("<ul>"),t.forEach((function(e){if("koyuchan@koyu.space"===e.account.acct||"zack@koyu.space"===e.account.acct||"koyu@qoto.org"===e.account.acct){var t=m.a.parse(e.content);e.emojis.forEach((function(e){t=t.replaceAll(":"+e.shortcode+":",'<img src="'+e.url+'" class="emoji" draggable="false">')})),e.media_attachments.length>0&&e.media_attachments.forEach((function(e){"image"===e.type&&(t+='<a href="'+e.url+'" target="_blank"><img src="'+e.url+'" width="200" class="attachment"></a>'),"gifv"===e.type&&(t+='<video src="'+e.url+'" width="200" class="attachment" controls preload autoplay loop mute></video>')})),h()("#incidents").append("<li>"+e.created_at+": "+t+"<br>~@"+e.account.acct+"</li>"),n++}})),h()("#incidents").append("</ul>"),0===n&&h()("#incidents").html('<p class="error">Nothing to see here...</p>'),e=t}}))}t(),window.setInterval((function(){t()}),3e3)}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{children:Object(f.jsx)("span",{id:"logo",children:Object(f.jsx)("img",{src:u,id:"logo",alt:"Logo"})})}),Object(f.jsx)("div",{id:"check"}),Object(f.jsxs)("div",{id:"content",children:[Object(f.jsx)("div",{id:"loading",children:Object(f.jsxs)("div",{class:"spinner",children:[Object(f.jsx)("div",{class:"bounce1"}),Object(f.jsx)("div",{class:"bounce2"}),Object(f.jsx)("div",{class:"bounce3"})]})}),Object(f.jsx)("div",{id:"statuses"}),Object(f.jsx)("h2",{children:"Incident history"}),Object(f.jsx)("div",{id:"incidents"})]})]})}}]),n}(a.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(j,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.4975cdbf.chunk.js.map