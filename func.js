// zoom feature
// note that this practically only zooms out as the way ive designed the website uses a grid system where the ads stay the same size, a revision to this would be to change the size of the ads when zoomed

function zoomIn()
{
    var map = document.getElementById("map");
    var current = map.clientWidth;
    map.style.width = (current + 100) + "px"; 
}
function zoomOut()
{
    var map = document.getElementById("map");
    var current = map.clientWidth;
    map.style.width = (current - 100) + "px"; 
}