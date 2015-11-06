$(function () {
    $('.guider').find('li').hover(function () {
        $('.gui-child').find('.ch-contain').eq($(this).index()).show().siblings().hide();
    });
    $('.contain-left').hover(function () {
        $('.gui-child').show();
    }, function () {
        $('.gui-child').hide();
    });
    //banner轮播
    $('.banner').unslider({
        speed: 500,               //  The speed to animate each slide (in milliseconds)
        delay: 3000,              //  The delay between slide animations (in milliseconds)
        //complete: function() {},  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: false              //  Support responsive design. May break non-responsive designs
    });

    var w = $('.dots').width()/2;
    $('.banner').find('ol').css('margin-left',-w);
    $('#order').hover(function () {
        $('.order-down').show();
    }, function () {
        $('.order-down').hide();
    })
});

function varShow(that) {
    $(that).find('.gui-children').css('height', 'auto');
    $(that).find('p').css({'background': '#e8e8e8', 'color': '#ff6600'});
    $(that).find('p i').css('background', 'url("assets/css/images/paw-.png") no-repeat');
}
function varHide(that) {
    $(that).find('.gui-children').css('height', '0');
    $(that).find('p').css({'background': '', 'color': '#333'});
    $(that).find('p i').css('background', 'url("assets/css/images/paw+.png") no-repeat');
}
var that = {};
$('.se-guider li').find('p').click(function () {
    that = $(this).parent('li');
    that.find('.gui-children').height() == 0 ? varShow(that) : varHide(that)
});
$('.gui-children').find('span').hover(function () {
    $(this).find('a').css({'color': '#ff6600', 'text-decoration': 'underline'});
}, function () {
    $(this).find('a').css({'color': '#333', 'text-decoration': 'none'});
})
$('.pri-filter').find('input').focus(function () {
    $(this).css({'border': '1px solid #ff6600', 'color': '#ff6600'})
}).blur(function () {
    $(this).css({'border': '1px solid #ebebeb', 'color': '#333'})
});
$('.goods').hover(function () {
    $(this).css('z-index', '1000').find('.pre-bag').show()
}, function () {
    $(this).css('z-index', '0').find('.pre-bag').hide()
});
//品牌更多
$('#showmore').click(function () {
    var that = $('#brands');
    that.height() == 45 ? that.css('height', 'auto') : that.css('height', '45px');
});
//左侧分栏
function banLefHide() {
    $('.se-guider').find('li').each(function () {
        if ($(this).index() > 9) {
            $(this).hide();
        }
    });
    $('.button-bottom').removeClass('open').find('em').html('查看更多分类')
}
function banLefShow() {
    $('.se-guider').find('li').each(function () {
        if ($(this).index() > 9) {
            $(this).show();
        }
    })
    $('.button-bottom').addClass('open').find('em').html('收起')
}
banLefHide();
$('.button-down').click(function () {
    $('.se-guider').find('li').is(':hidden') ? banLefShow() : banLefHide()
})
$('.button-down').hover(function () {
    if ($(this).hasClass('open')) {
        $(this).addClass('open-on');
    } else {
        $(this).addClass('on');
    }
}, function () {
    $(this).removeClass('open-on').removeClass('on');
});

$('#brands').find('span').click(function () {
    var txt = '<span id="sel-brand" class="clearfix"><a></a><i></i></span>'
    $('.selected').append(txt);
    var sel_htm = $(this).find('a').html()
    $('#sel-brand').find('a').html(sel_htm)
    $('#brands').parent().hide()
    toInit();
})

$('.price').find('span').click(function () {
    var txt = '<span id="sel-price" class="clearfix"><a></a><i></i></span>'
    $('.selected').append(txt);
    var sel_htm = $(this).find('a').html()
    $('#sel-price').find('a').html(sel_htm)
    $('.price').parent().hide()
    toInit();
})
function toInit() {
    $('.selected').find('span').hover(function () {
        $(this).addClass('on')
    }, function () {
        $(this).removeClass('on')
    })

    $('#sel-brand').find('i').click(function () {
        $('#brands').parent().show()
    })

    $('#sel-price').find('i').click(function () {
        $('.price').parent().show()
    })

    $('#all-clean').click(function () {
        $('.selected').find('span').remove()
        $(this).parent().hide()
        $('#brands').parent().show()
        $('.price').parent().show()
    })

    $('.selected').find('span').find('i').click(function () {
        var that = $(this).parent()
        that.remove();
        $('.selected').find('span').length == 0 ? $('.selected').parent().hide() : $('.selected').parent().show()
    })


    $('.selected').find('span').length == 0 ? $('.selected').parent().hide() : $('.selected').parent().show()
}
toInit()
