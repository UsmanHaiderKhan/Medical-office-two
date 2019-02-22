//console.log("usman");

/*================== Read More Text ==================*/

$(function () {
    var showChar = 145;
    var moretext = "Read More";
    var lesstext = "Read Less";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content + '</span>' +
                '<a href="" class="morelinksss read-text" style="display:block;margin-top:30px;">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinksss").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-link').on('click',
        function () {
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        });
});

/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 4,
        showItems: 4

    });

});

/*===================== Date Picker Function ======================*/
$(function () {
    $("#datepicker").datepicker();
});
/*===================== Owl Carousel Slider ======================*/
//$(function () {
//    $('.owl-carousel').owlCarousel({
//        loop: true,
//        margin: 30,
//        dots: true,
//        nav: false,
//        responsiveClass: true,
//        responsive: {
//            0: {
//                items: 1,
//            },
//            600: {
//                items: 1,
//            },
//            1000: {
//                items: 1,
//            }
//        }
//    });
//});
/*===================== Owl Carousel Slider ======================*/

$(function () {
    $('.responsive').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
