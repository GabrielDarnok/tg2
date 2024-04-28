$(document).ready(function(){
    var totalImages = $('.carousel-item').length;
    var currentImage = 1;
    setInterval(function(){
        var width = $('#progressBar').width();
        if(width <= 0){
            if(currentImage < totalImages){
                $('.carousel').carousel('next');
                currentImage++;
                $('#progressBar').css('width', '100%');
            }
        } else {
            $('#progressBar').css('width', width - (100 / 3)); // Dividido por 3 pois há 3 segundos de intervalo
        }
    }, 1000);
});
