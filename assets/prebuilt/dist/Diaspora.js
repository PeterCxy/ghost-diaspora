/* http://lorem.in  @author LoeiFy@gmail.com peter@typeblog.net */ 
var disqus_config=function(){this.page.url=$("#page_url").text(),this.page.identifier=$("#page_id").text()},go_back=function(){0==history.length?window.location.href="/":history.back()},Home=location.href,Pages=4,xhr,xhrUrl="",Diaspora={L:function(a,b,c){return a==xhrUrl?!1:(xhrUrl=a,xhr&&xhr.abort(),void(xhr=$.ajax({type:"GET",url:a,timeout:1e4,success:function(a){b(a),xhrUrl=""},error:function(b,d,e){"abort"==d?c&&c():window.location.href=a,xhrUrl=""}})))},P:function(){return!!("ontouchstart"in window)},PS:function(){window.history&&history.pushState&&(history.replaceState({u:Home,t:document.title},document.title,Home),window.addEventListener("popstate",function(a){var b=a.state;b&&(document.title=b.t,b.u==Home?($("#preview").css("position","fixed"),setTimeout(function(){$("#preview").removeClass("show").addClass("trans"),$("#container").show(),window.scrollTo(0,parseInt($("#container").data("scroll"))),setTimeout(function(){$("#preview").html(""),$(window).trigger("resize")},300)},0)):(Diaspora.loading(),Diaspora.L(b.u,function(a){document.title=b.t,$("#preview").html($(a).filter("#single")),Diaspora.preview()})))}))},HS:function(a,b){var c=a.data("id")||0,d=a.attr("href"),e=a.attr("title")||a.text();$("#preview").length&&window.history&&history.pushState||(location.href=d),Diaspora.loading();var f={d:c,t:e,u:d};Diaspora.L(d,function(a){if(!$(a).filter("#single").length)return void(location.href=d);switch(b){case"push":history.pushState(f,e,d);break;case"replace":history.replaceState(f,e,d)}switch(document.title=e,$("#preview").html($(a).filter("#single")),b){case"push":Diaspora.preview();break;case"replace":window.scrollTo(0,0),Diaspora.loaded()}setTimeout(function(){"replace"==b&&$("#top").show()},0)})},preview:function(){setTimeout(function(){$("#preview").addClass("show"),$("#container").data("scroll",window.scrollY),setTimeout(function(){$("#container").hide(),setTimeout(function(){$("#preview").css({position:"static","overflow-y":"auto"}).removeClass("trans"),$("#top").show(),$("pre code").each(function(a,b){hljs.highlightBlock(b)}),Diaspora.loaded()},500)},300)},0)},player:function(a){var b=$("#audio-"+a+"-1");return b.length?(b[0].play(),void b.on({timeupdate:function(){$(".bar").css("width",b[0].currentTime/b[0].duration*100+"%")},ended:function(){$(".icon-pause").removeClass("icon-pause").addClass("icon-play")},playing:function(){$(".icon-play").removeClass("icon-play").addClass("icon-pause")}})):void $(".icon-play").css({color:"#dedede",cursor:"not-allowed"})},loading:function(){var a=window.innerWidth,b='<style class="loaderstyle" id="loaderstyle'+a+'">@-moz-keyframes loader'+a+"{100%{background-position:"+a+"px 0}}@-webkit-keyframes loader"+a+"{100%{background-position:"+a+"px 0}}.loader"+a+"{-webkit-animation:loader"+a+" 3s linear infinite;-moz-animation:loader"+a+" 3s linear infinite;}</style>";$(".loaderstyle").remove(),$("head").append(b),$("#loader").removeClass().addClass("loader"+a).show()},loaded:function(){$("#loader").removeClass().hide(),$(".content").show()},F:function(a,b,c){var d=$(a).parent().height(),e=$(a).parent().width(),f=c/b;d/e>f?(a.style.height=d+"px",a.style.width=d/f+"px"):(a.style.width=e+"px",a.style.height=e*f+"px"),a.style.left=(e-parseInt(a.style.width))/2+"px",a.style.top=(d-parseInt(a.style.height))/2+"px"}};$(function(){if(Diaspora.P()&&$("body").addClass("touch"),$("#preview").length){var a={};a.t=$("#cover"),a.w=a.t.attr("width"),a.h=a.t.attr("height"),(a.o=function(){$("#mark").height(window.innerHeight)})(),a.t.prop("complete")&&setTimeout(function(){a.t.load()},0),a.t.on("load",function(){(a.f=function(){var b,c,d,e,f=$("#mark").width(),g=$("#mark").height();e=f>=1e3||g>=1e3?1e3:500,f>=g?(d=f/e*50,c=d,b=d*f/g):(d=g/e*50,b=d,c=d*g/f),$(".layer").css({width:f+b,height:g+c,marginLeft:-.5*b,marginTop:-.5*c}),a.w||(a.w=a.t.width(),a.h=a.t.height()),Diaspora.F($("#cover")[0],a.w,a.h)})(),setTimeout(function(){$("html, body").removeClass("loading"),$("#primary").show(),$(".content").show()},1e3),$("#mark").parallax();var b=new Vibrant(a.t[0]),c=b.swatches();c.DarkVibrant&&($("#vibrant polygon").css("fill",c.DarkVibrant.getHex()),$("#vibrant div").css("background-color",c.DarkVibrant.getHex())),c.Vibrant&&$(".icon-menu").css("color",c.Vibrant.getHex())}),a.t.attr("src")||alert("Please set the post thumbnail"),$("#preview").css("min-height",window.innerHeight),Diaspora.PS(),$(".pview a").addClass("pviewa");var b;$(window).on("resize",function(){clearTimeout(b),b=setTimeout(function(){Diaspora.P()||location.href!=Home||(a.o(),a.f()),$("#loader").attr("class")&&Diaspora.loading()},500)})}else $("#single").css("min-height",window.innerHeight),setTimeout(function(){$("html, body").removeClass("loading"),$("#primary").show(),$(".content").show()},1e3),window.addEventListener("popstate",function(a){a.state&&(location.href=a.state.u)}),$("#top").show();$(window).on("scroll",function(){if($(".scrollbar").length&&!Diaspora.P()){var a=$(window).scrollTop(),b=$(".content").height();a>b&&(a=b),$(".scrollbar").width((50+a)/b*100+"%"),a>80&&window.innerWidth>800?$(".subtitle").fadeIn():$(".subtitle").fadeOut()}}),$(window).on("touchmove",function(a){$("body").hasClass("mu")&&a.preventDefault()}),$("body").on("click",function(a){var b=$(a.target).attr("class")||"",c=$(a.target).attr("rel")||"";if(b||c)switch(!0){case-1!=b.indexOf("switchmenu"):window.scrollTo(0,0),$("html, body").toggleClass("mu");break;case-1!=b.indexOf("more"):if(b=$(".more"),"loading"==b.data("status"))return!1;var d=parseInt(b.data("page"))||1;if(1==d&&b.data("page",1),d>=Pages)return;return b.html("Loading..").data("status","loading"),Diaspora.loading(),Diaspora.L(b.attr("href"),function(a){var c=$(a).find(".more").attr("href");void 0!=c?(b.attr("href",c).html("加载更多").data("status","loaded"),b.data("page",parseInt(b.data("page"))+1)):$("#pager").remove(),$("#primary").append($(a).find(".post")),Diaspora.loaded()},function(){b.html("More").data("status","loaded")}),!1;case-1!=b.indexOf("comment"):Diaspora.loading(),$(".comment").removeClass("link").html('<div id="disqus_thread"></div>'),function(){var a=document,b=a.createElement("script");b.src="//"+$("#disqus_username").text()+".disqus.com/embed.js",b.setAttribute("data-timestamp",+new Date),(a.head||a.body).appendChild(b)}(),Diaspora.loaded();break;case-1!=b.indexOf("icon-like"):var e=$(a.target).parent(),f=e.attr("class");if(e.prev().hasClass("icon-view"))return;if(f=f.split(" "),"active"==f[1])return;e.addClass("active");var g=e.attr("id").split("like-");$.ajax({type:"POST",url:"/index.php",data:"likepost="+g[1],success:function(){var a=$("#like-"+g[1]).html(),b=/(\d)+/,c=b.exec(a);c[0]++,$("#like-"+g[1]).html('<span class="icon-like"></span><span class="count">'+c[0]+"</span>")}});break;case-1!=b.indexOf("cover"):return Diaspora.HS($(a.target).parent(),"push"),!1;case-1!=b.indexOf("posttitle"):return Diaspora.HS($(a.target),"push"),!1;case-1!=b.indexOf("relatea"):return Diaspora.HS($(a.target),"replace"),!1;case-1!=b.indexOf("relateimg"):return Diaspora.HS($(a.target).parent(),"replace"),!1;case"prev"==c||"next"==c:if("prev"==c)var e=$("#prev_next a")[0].text;else var e=$("#prev_next a")[1].text;return $(a.target).attr("title",e),Diaspora.HS($(a.target),"replace"),!1;case-1!=b.indexOf("pviewa"):return $("body").removeClass("mu"),setTimeout(function(){Diaspora.HS($(a.target),"push")},300),!1;default:return}}),console.log("%c Github %c","background:#24272A; color:#ffffff","","https://github.com/LoeiFy/Diaspora")});