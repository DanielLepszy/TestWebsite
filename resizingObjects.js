function scrollPageDown(x) {
    var currentY = window.pageYOffset;
    var secondPage = document.getElementById(x).offsetTop
    var lengthOfMove = currentY + (secondPage - currentY);
    var position = currentY;

    var id = setInterval(speedY, 0.1);

    function speedY() {
        if (position >= lengthOfMove) {
            clearInterval(id);
        } else {
            window.scroll(0, position);
            position += 4;
        }
    }

}