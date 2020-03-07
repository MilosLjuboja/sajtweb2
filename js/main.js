window.onload=()=>{
    //NAVIGACIJA
    
}

$(document).ready(function(){
    $('#nav ul li a').click(function(e){
        e.preventDefault();
        $(this).next('ul').slideToggle();
    })
    $('#cover #naslov').css('opacity',0)
    $('#cover #naslov').animate({
        left: '220px',
        opacity:1
    },2000)
})