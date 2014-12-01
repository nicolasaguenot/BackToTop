/************************************************************************
*************************************************************************
@Name :       	BackToTop - jQuery Plugin
@Revison :    	1.1
@Date : 		08/2013
@Author:     	ALPIXEL AGENCY - (www.myjqueryplugins.com - www.alpixel.fr)
@Support:    	FF, IE7, IE8, MAC Firefox, MAC Safari
@License :		Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php

**************************************************************************
*************************************************************************/
(function($){$.BackToTop={defaults:{text:'Back to top',autoShow:true,autoShowOffset:0,timeEffect:500,effectScroll:'linear',appearMethod:'slide',top:0,bottom:0,opacity:0.9},init:function(options){opts=$.extend({},$.BackToTop.defaults,options);var cssArray=new Array();if(opts.bottom!=0){cssArray['bottom']=opts.bottom}if(opts.top!=0){cssArray['top']=opts.top}if(opts.opacity!=0){cssArray['opacity']=opts.opacity}$.BackToTop._constructLink(cssArray);if(opts.autoShow)$(window).scroll(function(){if($(this).scrollTop()>opts.autoShowOffset){switch(opts.appearMethod){case'fade':divBack.stop(true,true).fadeIn('fast');break;case'slide':divBack.stop(true,true).slideDown('fast');break;default:divBack.stop(true,true).show()}}else{switch(opts.appearMethod){case'fade':divBack.stop(true,true).fadeOut('fast');break;case'slide':divBack.stop(true,true).slideUp('fast');break;default:divBack.stop(true,true).hide()}}});$('#BackToTop').click(function(e){e.preventDefault();$('body,html').animate({scrollTop:0},opts.timeEffect,opts.effectScroll)})},_constructLink:function(cssArray){divBack=$('<a />',{id:'BackToTop',href:'#body',css:cssArray,html:'<span>'+opts.text+'</span>'}).prependTo('body');if(!opts.autoShow)divBack.show()}};BackToTop=function(options){$.BackToTop.init(options)}})(jQuery);