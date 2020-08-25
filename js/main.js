/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */

$(document).ready(function () {
    Logic();

    $(".container").niceScroll({
        cursorcolor: "#333",
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


    $("#section02_popup").niceScroll({
        cursorcolor: "#333",
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

    $("#section05_popup").niceScroll({
        cursorcolor: "#333",
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

    $("#section09_popup").niceScroll({
        cursorcolor: "#333",
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



    $('#loading').delay(2000).fadeOut(500);


    $("#intro2").on('transitionend', function () {
        $("#intro2").off('transitionend');
        $('.font > div:nth-child(1)').addClass('on');
        $('.font > div:nth-child(1)').on('transitionend', function () {
            $('.font > div:nth-child(1)').off('transitionend');
            $('.font > div:nth-child(2)').addClass('on');
            $('.font > div:nth-child(2)').on('transitionstart', function() {
                $('.font > div:nth-child(1)').removeClass('on');
            });

            $('.font > div:nth-child(2)').on('transitionend', function() {
                $('.font > div:nth-child(2)').off('transitionend');
                $('.font > div:nth-child(2)').removeClass('on');
                $('#intro2 .gold_key').addClass('on');
                $('#intro2 .gold_key').on('transitionstart', () => {
                });
            })
        })

    });

    $('#intro2 .intro_btn').click(function () {
        $('#container').addClass('on');
        $('#menu').addClass('on');
        $('.page').addClass('on');
        $('#intro2').addClass('out');
    });


    $("#intro2").on("mousewheel", function (event, delta) {
        console.log('mousewheel', event, delta);
        if (delta > 0) {

        } else if (delta < 0) {
            if ( $('#key').hasClass('in1')) {
                $('#container').addClass('on');
                $('#menu').addClass('on');
                $('.page').addClass('on');
                $('#intro2').addClass('out');
                // $('#intro').removeClass('on');
            }
        }
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
    //

    //
    $('#section02 .gradient .gradient_button_circle').click(function () {
        $('#section02_popup').fadeIn();
        
    });

    $('#section02_popup .bg').click(function () {
        $('#section02_popup').fadeOut();
    });


    $('#section05 .gradient .gradient_button_circle').click(function () {
        $('#section05_popup').fadeIn();
    });

    $('#section05_popup .bg').click(function () {
        $('#section05_popup').fadeOut();
    });


    $('#section09 .gradient .gradient_button_circle').click(function () {
        $('#section09_popup').fadeIn();
    });

    $('#section09_popup .bg').click(function () {
        $('#section09_popup').fadeOut();
    });

//==============================================================
});


$(function () {

    // 메뉴부분
    $('.naviJs > li > a, .topBtn, .page .circle > li > a').click(function () {
        $(this).toggleClass('on');
        var posX = $($(this).attr('href')).position().left;
        $('.container').stop().animate({'scrollLeft': posX}, 1200, 'easeInOutExpo');
        return false;
    });

    // 스크롤 이벤트
    $('.container').scroll(function () {
        var scrollLeft = $('.container').scrollLeft();
        $('.posNum').text(scrollLeft); // 스크롤값
        if (scrollLeft >= 0 &&  scrollLeft <= 6000) {
            $('.page .circle > li:nth-child(1) > a').addClass('on');
        } else {
            $('.page .circle > li:nth-child(1) > a').removeClass('on');
        }

        if (scrollLeft >= 6100 && scrollLeft <= 11150) {
            $('.page .circle > li:nth-child(2) > a').addClass('on');
        } else {
            $('.page .circle > li:nth-child(2) > a').removeClass('on');
        }

        if (scrollLeft >= 11016 && scrollLeft <= 19176) {
            $('.page .circle > li:nth-child(3) > a').addClass('on');
        } else {
            $('.page .circle > li:nth-child(3) > a').removeClass('on');
        }

        if (scrollLeft >= 19519 && scrollLeft <= 23380) {
            $('.page .circle > li:nth-child(4) > a').addClass('on');
        } else {
            $('.page .circle > li:nth-child(4) > a').removeClass('on');
        }


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
//==============================================================




//trailer_재생정지버튼
$(function () {
    $(document).ready(function () {

        Logic();

        $('#play .play_button .stop').click(function () {
            $('#video').trigger('pause');
            $(this).fadeOut();
            $('#play .play_button .play').fadeIn();
            pause();
        });

        $('#play .play_button .play').click(function () {
            $('#video').trigger('play');
            $('#play .play_button > div').addClass('on');
            $('#play .play_button .stop').fadeIn();
            $(this).fadeOut();
            play();
        });

        initVideoEvent()
    });
});




function initVideoEvent() {
    const video = document.getElementById('trailerVideo');
    const timeText = document.getElementById('time');
    const progress = document.getElementById( 'progress' );
    console.log('progress ', progress, video.duration);
    video.addEventListener('timeupdate', function() {
        let time = video.currentTime.toFixed(0);
        let minute = Number(time / 60);
        let second = Number(time % 60);
        timeText.innerHTML = timePadding(parseInt(minute)) + ':' + timePadding(parseInt(second));
        handleProgress(progress, video);
    });
}

function handleProgress(progress, video) {
    const percent = (video.currentTime / video.duration) * 100;
    progress.value= percent;
}

function timePadding(number) {
    return (number < 10 ? '0' : '') + number
}






function play() {
    let video = document.getElementById("trailerVideo");
    console.log('play ', video)
    video.play();
}

function pause() {
    let video = document.getElementById("trailerVideo");
    console.log('pause ', video)
    video.pause();
}
// =========================
// trailer
//==========================
