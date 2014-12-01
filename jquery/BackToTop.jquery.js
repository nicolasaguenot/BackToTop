/************************************************************************
 *************************************************************************
 @Name : BackToTop - jQuery Plugin
 @Revison : 1.1
 @Date : 08/2013
 @Author: ALPIXEL - (www.myjqueryplugins.com - www.alpixel.fr)
 @Support: FF, IE7, IE8, MAC Firefox, MAC Safari
 @License : Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php
 **************************************************************************
 *************************************************************************/
/** BackToTop Plugin **/
(function($){
    $.BackToTop = {
        /**************/
        /** OPTIONS **/
        /**************/
        defaults: {
            /* vars */
            text : 'Back to top',
            autoShow : true,
            autoShowOffset : 0,
            timeEffect : 500,
            effectScroll : 'linear',
            appearMethod : 'slide',
            top: 0,
            bottom: 0,
            opacity: 0.9
        },
        /*****************/
        /** Init Method **/
        /*****************/
        init:function(options){
            /* vars **/

            opts = $.extend({}, $.BackToTop.defaults, options);
            var cssArray = new Array();
            if(opts.bottom != 0){   cssArray['bottom'] = opts.bottom;}
            if(opts.top != 0){      cssArray['top'] = opts.top;}
            if(opts.opacity != 0){  cssArray['opacity'] = opts.opacity;}

            /** Construct the link **/
                $.BackToTop._constructLink(cssArray);
            /** Appear link when scrolling the window **/
            if(opts.autoShow)
                $(window).scroll(function(){
                    if($(this).scrollTop() > opts.autoShowOffset) {
                        switch (opts.appearMethod) {
                            case 'fade' : divBack.stop(true,true).fadeIn('fast'); break;
                            case 'slide' : divBack.stop(true,true).slideDown('fast'); break;
                            default : divBack.stop(true,true).show();
                        }
                    }
                    else {
                        switch (opts.appearMethod) {
                            case 'fade' : divBack.stop(true,true).fadeOut('fast'); break;
                            case 'slide' : divBack.stop(true,true).slideUp('fast'); break;
                            default : divBack.stop(true,true).hide();
                        }
                    }
                });
            /** Scroll to top page on click **/
            $('#BackToTop').click(function(e) {
                e.preventDefault();
                $('body,html').animate({scrollTop:0},opts.timeEffect,opts.effectScroll);
            });
        },

        /** Create the link **/
        _constructLink:function(cssArray) {
            divBack = $('<a />',{
                id : 'BackToTop',
                href : '#body',
                css : cssArray,
                html : '<span>'+opts.text+'</span>'
            }).prependTo('body');
            if(!opts.autoShow) divBack.show();
        }
    };
    /** Init method **/
    BackToTop = function(options) {
        $.BackToTop.init(options);
    };
})(jQuery);

