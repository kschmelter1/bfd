$(document).ready(function() {
    equalize('.hideMobile .smallBox', '.img-responsive.smallGallery');
});

$(window).resize(function() {
    equalize('.hideMobile .smallBox', '.img-responsive.smallGallery');
});

function equalize(targetItem, targetHeight){
    $(targetItem).each(function() {
        myHeight = $(targetHeight).height();
        $(this).height(myHeight);
    });
}
