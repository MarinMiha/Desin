function generate_layout() {
    var gallery_width = document.getElementById("gallery").offsetWidth;
    var image_percentages = [.40,.295,.29,.60,.389];
    for(var i=0; i<5; i++) {
        var num = (i+1).toString();
        var el_width = (image_percentages[i] * gallery_width).toString();
        console.log(el_width);
        document.getElementById("img_"+num+"").style.width = el_width + "px";
        document.getElementById("img_"+num+"").style.height = "330px";
    }
}
generate_layout();