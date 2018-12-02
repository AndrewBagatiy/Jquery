

var arr=['images/forest_1.jpg','images/forest_2.jpg','images/forest_3.jpg','images/forest_4.jpg','images/forest_5.jpg']; //an array of image sources
var pos=0; 
$(document).ready(function () {
    var interval=5000; 
    var loaderHtml='';
    arr.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });

    $('.load-images').html(loaderHtml);

    var htm='';

    for(var i=0;i<arr.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';

    }

    $('#circles').html(htm);
    $('#slider').html('<img src="'+arr[0]+'" class="img-slide image-animated"">');
    $('#0').css({'background':'#fff', 'color':'#fff'});


    
    function autoSlide(arr,interval){

        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr.length-1){
                pos=0;
            }

            $('#slider').html('<img src="'+arr[pos]+'" class="img-slide img'+pos+' image-animated">');
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});
            if(pos==0){
                $('#'+(arr.length-1)).css({'background':'transparent', 'color':'transparent'});
            }

        },interval);
    }
    

    autoSlide(arr,interval);

    function next(){
        if(pos>arr.length-2){
            pos=-1;
        }
        $('#slider').html('<img src="'+arr[pos+1]+'" class="img-slide image-animated">');
        pos++;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});
        if(pos==0){
            $('#'+(arr.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    }

    function previous() {
        if(pos<1){
            pos=arr.length;
        }
        $('#slider').html('<img src="'+arr[pos-1]+'" class="img-slide image-animated">');
        pos--;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});
        if(pos==arr.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    }

    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();
    });
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();
    });


});


function circleClick(position) {
    if(position!=pos){
        $('#slider').html('<img src="'+arr[position]+'" class="img-slide image-animated">');//show image

        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white

        pos=position;
    }

}
