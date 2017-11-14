/* Menu Functionality */

var menu = false
var menuLaunch = function () {
    if (menu) {
        undoMenu();
    } else {
        doMenu();
    }
}

function doMenu() {
    document.querySelector(".outer").style.right = "-40vw";
    document.querySelector(".smallLogo").style.display = "none";
    menu = true;
}

function undoMenu() {
    document.querySelector(".outer").style.right = "0vw";
    document.querySelector(".smallLogo").style.display = "inline";
    menu = false;
}


/* Links Functionality */

$.each($('[data-linkedPage]'), function (i, v) {
    var page = $(v).attr('data-linkedPage');
    //console.log(page);
    v.addEventListener('click', function () {
        displayNone();
        $('.' + page).removeClass('hide');
        undoMenu();
    })
});

function displayNone() {
    $.each($('[data-linkedPage]'), function (i, v) {
        var page = $(v).attr('data-linkedPage');
        $('.' + page).addClass('hide');
    });
}

/* Show More Content */

$.each($('.contentDiv'), function (i, v) {
    v.addEventListener('click', function () {
        if ($(v).hasClass('showContentDiv')) {
            $(v).removeClass('showContentDiv');
        } else {
            $(v).addClass('showContentDiv');
        }
    });
});

/* Attempt at getting rid of address bar NOT WORKING */
/* Attempt at scrolling down on Chat div after reload NOT WORKING */
window.onload = function () {
    setTimeout(function () {
        //window.scrollTo(0, 1000);
        //document.body.scrollTo(0, 1000);
        scroll();
    }, 0);
}
