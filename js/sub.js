$(document).ready(function () {

    $('#menu .ham').click(function () {
        $('#header').fadeIn();
    });

    $('#header .icon_close, #header .list > li > a').click(function () {
        $('#header').fadeOut();
    });




    $('#popup .icon_close').click(function () {
        $('#popup').fadeOut();
        $('#character').fadeIn();
    });




    $('#character .button .button_in .character_button_1').on('click', function () {
        $('#character').fadeOut();
        $('#popup').fadeIn(function () {
            $('#slick-slide01').trigger('click');
        });
    });

    $('#character .button .button_in .character_button_2').on('click', function () {
        $('#character').fadeOut();
        $('#popup').fadeIn(function () {
            $('#slick-slide02').trigger('click');
        });
    });

    $('#character .button .button_in .character_button_3').on('click', function () {
        $('#character').fadeOut();
        $('#popup').fadeIn(function () {
            $('#slick-slide00').trigger('click');
        });
    });

    $('#character .button .button_in .character_button_4').on('click', function () {
        $('#character').fadeOut();
        $('#popup').fadeIn(function () {
            $('#slick-slide04').trigger('click');
        });
    });

    $('#character .button .button_in .character_button_5').on('click', function () {
        $('#character').fadeOut();
        $('#popup').fadeIn(function () {
            $('#slick-slide03').trigger('click');
        });
    });






    $("#slides").slick({
        dots: true, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        variableWidth: true,

    });

    $("#popup").on("mousewheel", function (event, delta) {
        if (delta > 0) {  //마우스 휠을 올렸을때
            $("#slides").slick('slickPrev');
        } else if (delta < 0) {//마우스 휠을 내렸을때
            $("#slides").slick('slickNext');
        }
    });

    $('#slides')
        .on('init', function (event, slick) {
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('#slides .slide_wrap').removeClass('on');
            // starList()
        })
        .on('afterChange', function (event, slick, currentSlide, nextSlide) {
            starList_4()
        });

    function list01_4() {
        $('#slides .character_clara').addClass('on');
    }

    function list02_4() {
        $('#slides .character_drossel').addClass('on');
    }

    function list03_4() {
        $('#slides .character_sugar').addClass('on');
    }

    function list04_4() {
        $('#slides .character_mother').addClass('on');
    }

    function list05_4() {
        $('#slides .character_philip').addClass('on');
    }


    function starList_4() {
        if ($('#slick-slide00').hasClass('slick-active')) {
            list01_4();
        }
        if ($('#slick-slide01').hasClass('slick-active')) {
            list02_4();
        }
        if ($('#slick-slide02').hasClass('slick-active')) {
            list03_4();
        }
        if ($('#slick-slide03').hasClass('slick-active')) {
            list04_4();
        }
        if ($('#slick-slide04').hasClass('slick-active')) {
            list05_4();
        }

    }


});











//
// $('.left').click(function () {
//     $('.box').addClass('add');
// });
//
//
// $('.right').click(function () {
//     $('.box').addClass('add2');
// });
//
// $('#slides').slidesjs({
//     width:970,
//     height:465,
//     play: {
//         //active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
//         interval: 3000, // 대기시간, 1000=1초,
//         effect: "slide", // 효과, slide/fade
//         auto: false, // 자동시작
//         pauseOnHover: false, // 마우스 오버시 멈춤
//         restartDelay: 2500 // 마우스 아웃시 재동작 시간
//     },
//     navigation: {// 이전/다음 버튼
//         active: true, // 버튼 활성화/비활성화
//         effect: "slide"
//     },
//     pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
//         active: false,
//         effect: "slide"
//     },
//     effect: { // 효과 옵션
//         fade: {
//             speed: 800
//         },
//         slide: {
//             speed: 1600
//         }
//     }
// });