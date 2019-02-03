var 
    breakPoints = {
        'desktop' : {
            'size': '10',
        },
        'laptop' : {
            'size': '10',
        }
    },
    desktop = '1920',
    laptop = '1440',
    tablet = '960',
    mobile = '480';

    console.log('asdasd ' + breakPoints)

function _resize () {
    var
        desktopSize = $(window).width() < parseInt(desktop) && $(window).width() > parseInt(laptop),
        laptopSize = $(window).width() < parseInt(laptop) && $(window).width() > parseInt(tablet),
        tabletSize = $(window).width() < parseInt(tablet) && $(window).width() > parseInt(mobile),
        mobileSize = $(window).width() < parseInt(mobile)
        k = $.restive.getViewportW();
    if(desktopSize) {
        $('html').css('font-size', k / parseInt(desktop) * 10);
    } else if (laptopSize) {
        $('html').css('font-size', k / parseInt(laptop) * 15);
    } else if (tabletSize) {
        $('html').css('font-size', k / parseInt(tablet) * 20);
    } else if (mobileSize) {
        $('html').css('font-size', k / parseInt(mobile) * 40);
    } else {
        $('html').css('font-size', '10px');
    }
}

function _adaptive () {
    $('html').restive({ 
        breakpoints: [mobile,tablet,laptop,desktop],
        classes: ['mobile','tablet','laptop','desktop'],
        force_dip: true,
        onResize: function(){
            _resize()
        }
    });
}

$(document).ready(
    //_adaptive(),
    //_resize()
);