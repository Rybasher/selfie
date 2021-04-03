/**!
 * lg-thumbnail.js | 1.2.0 | May 20th 2020
 * http://sachinchoolur.github.io/lg-thumbnail.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).LgThumbnail=t()}}((function(){return function t(e,i,o){function u(s,l){if(!i[s]){if(!e[s]){var h="function"==typeof require&&require;if(!l&&h)return h(s,!0);if(r)return r(s,!0);var n=new Error("Cannot find module '"+s+"'");throw n.code="MODULE_NOT_FOUND",n}var a=i[s]={exports:{}};e[s][0].call(a.exports,(function(t){return u(e[s][1][t]||t)}),a,a.exports,t,e,i,o)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)u(o[s]);return u}({1:[function(t,e,i){!function(t,e){if(void 0!==i)e();else{e(),t.lgThumbnail={}}}(this,(function(){"use strict";var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},e={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toggleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0},i=function(i){return this.el=i,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=t({},e,this.core.s),this.thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.left=0,this.init(),this};i.prototype.init=function(){var t=this;this.core.s.thumbnail&&this.core.items.length>1&&(this.core.s.showThumbByDefault&&setTimeout((function(){utils.addClass(t.core.outer,"lg-thumb-open")}),700),this.core.s.pullCaptionUp&&utils.addClass(this.core.outer,"lg-pull-caption-up"),this.build(),this.core.s.animateThumb?(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toggle(),this.thumbkeyPress())},i.prototype.build=function(){var t,e=this,i="",o="";switch(this.core.s.vimeoThumbSize){case"thumbnail_large":o="640";break;case"thumbnail_medium":o="200x150";break;case"thumbnail_small":o="100x75"}function u(t,u,r){var s,l=e.core.isVideo(t,r)||{},h="";l.youtube||l.vimeo||l.dailymotion?l.youtube?s=e.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+l.youtube[1]+"/"+e.core.s.youtubeThumbSize+".jpg":u:l.vimeo?e.core.s.loadVimeoThumbnail?(s="//i.vimeocdn.com/video/error_"+o+".jpg",h=l.vimeo[1]):s=u:l.dailymotion&&(s=e.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+l.dailymotion[1]:u):s=u,i+='<div data-vimeo-id="'+h+'" class="lg-thumb-item" style="width:'+e.core.s.thumbWidth+"px; margin-right: "+e.core.s.thumbMargin+'px"><img src="'+s+'" /></div>',h=""}if(utils.addClass(e.core.outer,"lg-has-thumb"),e.core.outer.querySelector(".lg").insertAdjacentHTML("beforeend",'<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>'),e.thumbOuter=e.core.outer.querySelector(".lg-thumb-outer"),e.thumbOuterWidth=e.thumbOuter.offsetWidth,e.core.s.animateThumb&&(e.core.outer.querySelector(".lg-thumb").style.width=e.thumbTotalWidth+"px",e.core.outer.querySelector(".lg-thumb").style.position="relative"),this.core.s.animateThumb&&(e.thumbOuter.style.height=e.core.s.thumbContHeight+"px"),e.core.s.dynamic)for(var r=0;r<e.core.s.dynamicEl.length;r++)u(e.core.s.dynamicEl[r].src,e.core.s.dynamicEl[r].thumb,r);else for(var s=0;s<e.core.items.length;s++)e.core.s.exThumbImage?u(e.core.items[s].getAttribute("href")||e.core.items[s].getAttribute("data-src"),e.core.items[s].getAttribute(e.core.s.exThumbImage),s):u(e.core.items[s].getAttribute("href")||e.core.items[s].getAttribute("data-src"),e.core.items[s].querySelector("img").getAttribute("src"),s);e.core.outer.querySelector(".lg-thumb").innerHTML=i,t=e.core.outer.querySelectorAll(".lg-thumb-item");for(var l=0;l<t.length;l++)!function(i){var o=t[i],u=o.getAttribute("data-vimeo-id");if(u){window["lgJsonP"+e.el.getAttribute("lg-uid")+l]=function(t){o.querySelector("img").setAttribute("src",t[0][e.core.s.vimeoThumbSize])};var r=document.createElement("script");r.className="lg-script",r.src="//www.vimeo.com/api/v2/video/"+u+".json?callback=lgJsonP"+e.el.getAttribute("lg-uid")+l,document.body.appendChild(r)}}(l);utils.addClass(t[e.core.index],"active"),utils.on(e.core.el,"onBeforeSlide.lgtm",(function(){for(var i=0;i<t.length;i++)utils.removeClass(t[i],"active");utils.addClass(t[e.core.index],"active")}));for(var h=0;h<t.length;h++)!function(i){utils.on(t[i],"click.lg touchend.lg",(function(){setTimeout((function(){(e.thumbClickable&&!e.core.lgBusy||!e.core.doCss())&&(e.core.index=i,e.core.slide(e.core.index,!1,!0))}),50)}))}(h);utils.on(e.core.el,"onBeforeSlide.lgtm",(function(){e.animateThumb(e.core.index)})),utils.on(window,"resize.lgthumb orientationchange.lgthumb",(function(){setTimeout((function(){e.animateThumb(e.core.index),e.thumbOuterWidth=e.thumbOuter.offsetWidth}),200)}))},i.prototype.setTranslate=function(t){utils.setVendor(this.core.outer.querySelector(".lg-thumb"),"Transform","translate3d(-"+t+"px, 0px, 0px)")},i.prototype.animateThumb=function(t){var e=this.core.outer.querySelector(".lg-thumb");if(this.core.s.animateThumb){var i;switch(this.core.s.currentPagerPosition){case"left":i=0;break;case"middle":i=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":i=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*t-1-i,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(utils.hasClass(e,"on")||utils.setVendor(this.core.outer.querySelector(".lg-thumb"),"TransitionDuration",this.core.s.speed+"ms"),this.core.doCss()||(e.style.left=-this.left+"px")):this.core.doCss()||(e.style.left=-this.left+"px"),this.setTranslate(this.left)}},i.prototype.enableThumbDrag=function(){var t=this,e=0,i=0,o=!1,u=!1,r=0;utils.addClass(t.thumbOuter,"lg-grab"),utils.on(t.core.outer.querySelector(".lg-thumb"),"mousedown.lgthumb",(function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e=i.pageX,o=!0,t.core.outer.scrollLeft+=1,t.core.outer.scrollLeft-=1,t.thumbClickable=!1,utils.removeClass(t.thumbOuter,"lg-grab"),utils.addClass(t.thumbOuter,"lg-grabbing"))})),utils.on(window,"mousemove.lgthumb",(function(s){o&&(r=t.left,u=!0,i=s.pageX,utils.addClass(t.thumbOuter,"lg-dragging"),(r-=i-e)>t.thumbTotalWidth-t.thumbOuterWidth&&(r=t.thumbTotalWidth-t.thumbOuterWidth),r<0&&(r=0),t.setTranslate(r))})),utils.on(window,"mouseup.lgthumb",(function(){u?(u=!1,utils.removeClass(t.thumbOuter,"lg-dragging"),t.left=r,Math.abs(i-e)<t.core.s.swipeThreshold&&(t.thumbClickable=!0)):t.thumbClickable=!0,o&&(o=!1,utils.removeClass(t.thumbOuter,"lg-grabbing"),utils.addClass(t.thumbOuter,"lg-grab"))}))},i.prototype.enableThumbSwipe=function(){var t=this,e=0,i=0,o=!1,u=0;utils.on(t.core.outer.querySelector(".lg-thumb"),"touchstart.lg",(function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e=i.targetTouches[0].pageX,t.thumbClickable=!1)})),utils.on(t.core.outer.querySelector(".lg-thumb"),"touchmove.lg",(function(r){t.thumbTotalWidth>t.thumbOuterWidth&&(r.preventDefault(),i=r.targetTouches[0].pageX,o=!0,utils.addClass(t.thumbOuter,"lg-dragging"),u=t.left,(u-=i-e)>t.thumbTotalWidth-t.thumbOuterWidth&&(u=t.thumbTotalWidth-t.thumbOuterWidth),u<0&&(u=0),t.setTranslate(u))})),utils.on(t.core.outer.querySelector(".lg-thumb"),"touchend.lg",(function(){t.thumbTotalWidth>t.thumbOuterWidth&&o?(o=!1,utils.removeClass(t.thumbOuter,"lg-dragging"),Math.abs(i-e)<t.core.s.swipeThreshold&&(t.thumbClickable=!0),t.left=u):t.thumbClickable=!0}))},i.prototype.toggle=function(){var t=this;t.core.s.toggleThumb&&(utils.addClass(t.core.outer,"lg-can-toggle"),t.thumbOuter.insertAdjacentHTML("beforeend",'<button aria-label="Toggle thumbnails" class="lg-toggle-thumb lg-icon"></button>'),utils.on(t.core.outer.querySelector(".lg-toggle-thumb"),"click.lg",(function(){utils.hasClass(t.core.outer,"lg-thumb-open")?utils.removeClass(t.core.outer,"lg-thumb-open"):utils.addClass(t.core.outer,"lg-thumb-open")})))},i.prototype.thumbkeyPress=function(){var t=this;utils.on(window,"keydown.lgthumb",(function(e){38===e.keyCode?(e.preventDefault(),utils.addClass(t.core.outer,"lg-thumb-open")):40===e.keyCode&&(e.preventDefault(),utils.removeClass(t.core.outer,"lg-thumb-open"))}))},i.prototype.destroy=function(t){if(this.core.s.thumbnail&&this.core.items.length>1){utils.off(window,".lgthumb"),t||this.thumbOuter.parentNode.removeChild(this.thumbOuter),utils.removeClass(this.core.outer,"lg-has-thumb");for(var e=document.getElementsByClassName("lg-script");e[0];)e[0].parentNode.removeChild(e[0])}},window.lgModules.thumbnail=i}))},{}]},{},[1])(1)}));