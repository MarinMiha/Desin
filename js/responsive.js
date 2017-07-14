$(document).ready(function() {
    var window_width = $(window).width();
    if(window_width > 650) {
        generate_layout();
    } else {
        generate_column_layout();
    }
});
$(window).on('resize', function(event){
    var window_width = $(window).width();
    if(window_width > 650) {
        generate_layout();
    } else {
        generate_column_layout();
    }
});