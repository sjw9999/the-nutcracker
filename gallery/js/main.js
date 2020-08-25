/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */

$(document).ready(function () {
    Logic();

    $(".container").niceScroll({
        cursorcolor: "#000a16",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });




    // ===========================================================
    //click , mouseenter , mouseleave move event section
    //===========================================================


    $('#menu .ham').click(function () {
        $('#header').fadeIn();
    });

    $('#header .icon_close, #header .list > li > a').click(function () {
        $('#header').fadeOut();
    });



    $('#section01 .image_01').click(function () {
        $('#images_popup_01').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_01').fadeOut();
    });


    $('#section01 .image_02').click(function () {
        $('#images_popup_02').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_02').fadeOut();
    });


    $('#section01 .image_03').click(function () {
        $('#images_popup_03').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_03').fadeOut();
    });


    $('#section01 .image_04').click(function () {
        $('#images_popup_04').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_04').fadeOut();
    });


    $('#section01 .image_05').click(function () {
        $('#images_popup_05').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_05').fadeOut();
    });


    $('#section02 .image_06').click(function () {
        $('#images_popup_06').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_06').fadeOut();
    });


    $('#section02 .image_07').click(function () {
        $('#images_popup_07').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_07').fadeOut();
    });


    $('#section02 .image_08').click(function () {
        $('#images_popup_08').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_08').fadeOut();
    });


    $('#section02 .image_09').click(function () {
        $('#images_popup_09').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_09').fadeOut();
    });


    $('#section03 .image_10').click(function () {
        $('#images_popup_10').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_10').fadeOut();
    });


    $('#section03 .image_11').click(function () {
        $('#images_popup_11').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_11').fadeOut();
    });


    $('#section03 .image_12').click(function () {
        $('#images_popup_12').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_12').fadeOut();
    });


    $('#section03 .image_13').click(function () {
        $('#images_popup_13').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_13').fadeOut();
    });


    $('#section03 .image_14').click(function () {
        $('#images_popup_14').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_14').fadeOut();
    });


    $('#section03 .image_15').click(function () {
        $('#images_popup_15').fadeIn();
    });

    $('#images_popup .icon_close').click(function () {
        $('#images_popup_15').fadeOut();
    });



//==============================================================
});


$(function () {

    // 메뉴부분
    $('.naviJs > li > a, .topBtn').click(function () {
        var posX = $($(this).attr('href')).position().left;
        $('.container').stop().animate({'scrollLeft': posX}, 1200, 'easeInOutExpo');
        return false;
    });

    // 스크롤 이벤트
    $('.container').scroll(function () {
        var scrollLeft = $('.container').scrollLeft();
        $('.posNum').text(scrollLeft); // 스크롤값



        // =========================
        // scroll event section
        //==========================









        //===================================================================
        // 메뉴 활성화
        $('.container .main > div').each(function (i) {
            var fastNum = 100; // 메뉴를 빨리 활성화 시키는 값
            var firstX = $('.container .main > div:first').position().left;
            var posX = $(this).position().left;
            if (scrollLeft <= firstX - fastNum) {
                $('.container .main').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollLeft >= posX - fastNum) {
                $('.container .main').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        });
    });


});