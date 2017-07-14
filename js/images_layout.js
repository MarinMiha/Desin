function generate_layout() {
    var gallery_width = document.getElementById("gallery").offsetWidth;
    var gallery_height = document.getElementById("gallery").offsetWidth / 1.7;
    var image_percentages = [.40,.295,.29,.60,.389];
    for(var i=0; i<5; i++) {
        var num = (i+1).toString();
        var el_width = (image_percentages[i] * gallery_width).toString();
        var el_height = (gallery_height * 0.49).toString();
        document.getElementById("img_"+num+"").style.width = el_width + "px";
        document.getElementById("img_"+num+"").style.height = el_height + "px";
    }
}

function generate_column_layout() {
    var gallery_width = document.getElementById("gallery").offsetWidth;
    var gallery_height = document.getElementById("gallery").offsetWidth / 1.7;
    for(var i=1; i<6; i++) {
        document.getElementById("img_"+i+"").style.width = gallery_width.toString() + "px";
        document.getElementById("img_"+i+"").style.height = gallery_height.toString() + "px";
    }
}