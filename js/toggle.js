//jQuery(document).ready(function () {
//
//	$('#membermenu-toggle').click(function () {
//	$('#membernav').toggleClass('open');
//    e.preventDefault();
//    });
//    
//});

jQuery(document).ready(function() {
    jQuery('#membermenu-toggle').click(function(e) {
        jQuery(this).toggleClass('open');
        jQuery('#membernav').toggleClass('open');
 
        e.preventDefault();
    });
});
