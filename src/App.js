import React from 'react';
import logo from './logo.svg';
import './App.css';
import twemoji from 'twemoji';
import $ from 'jquery';

export default class App extends React.Component {
  componentDidMount() {
    $.get("/monitors.json", function(data) {
      data.forEach(function(element) {
        if (element["enabled"]) {
          if (element["name"].length > 5) {
            $("#statuses").append("<div class=\"status-item\"><span class=\"online\" id=\""+element["name"]+"\"></span> <span class=\"servicename long-name\">"+element["name"]+"</span></div>");
          } else {
            $("#statuses").append("<div class=\"status-item\"><span class=\"online\" id=\""+element["name"]+"\"></span> <span class=\"servicename\">"+element["name"]+"</span></div>");
          }
          if (!element["custom"]) {
            $.get(element["url"], function(data) {}).fail(function() {
              $("#"+element["name"]).css("background", "red");
            });
          }
        }
      });
    });
    //Minecraft needs a special entry
    window.setInterval(function() {
      $.get("https://api.mcsrvstat.us/2/koyu.space", function(data) {
        try {
          if (data["online"] === "false") {
            $("#minecraft").css("background", "red");
          }
        } catch {}
      }).fail(function() {
        $("#minecraft").css("background", "red");
      });
    }, 1000);
    var olddata = "";
    function loadIncidentHistory() {
      $.get("https://mastodon.social/api/v1/timelines/tag/koyustatus", function(data) {
        if (data !== olddata) {
          $("#incidents").html("");
          var statuscount = 0;
          $("#incidents").append("<ul>")
          data.forEach(status => {
            if (status["account"]["acct"] === "koyu@koyu.space" || status["account"]["acct"] === "zack@koyu.space") {
              var content = twemoji.parse(status["content"]);
              status["emojis"].forEach(function(element) {
                content = content.replaceAll(":"+element["shortcode"]+":", "<img src=\""+element["url"]+"\" class=\"emoji\" draggable=\"false\">");
              });
              if (status["media_attachments"].length > 0) {
                status["media_attachments"].forEach(function(element) {
                  if (element["type"] === "image") {
                    content += "<a href=\""+element["url"]+"\" target=\"_blank\"><img src=\""+element["url"]+"\" width=\"200\" class=\"attachment\"></a>";
                  }
                  if (element["type"] === "gifv") {
                    content += "<video src=\""+element["url"]+"\" width=\"200\" class=\"attachment\" controls preload autoplay loop mute></video>";
                  }
                });
              }
              $("#incidents").append("<li>"+status["created_at"]+": "+content+"<br>~@"+status["account"]["acct"]+"</li>");
              statuscount++;
            }
          });
          $("#incidents").append("</ul>");
          if (statuscount === 0) {
            $("#incidents").html("<p class=\"error\">Nothing to see here...</p>")
          }
          olddata = data;
        }
      });
    }
    loadIncidentHistory();
    window.setInterval(function() {
      loadIncidentHistory();
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <header>
          <span id="logofont"><img src={logo} id="logo" alt="Logo" /> koyu.space Status</span>
        </header>
        <div id="content">
          <div id="statuses">
          </div>
          <h2>Incident history</h2>
          <div id="incidents"></div>
          </div>
      </div>
    );
  }
}