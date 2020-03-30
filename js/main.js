window.onload=()=>{
    //NAVIGACIJA
    document.getElementById('productLink').addEventListener("click",function(link){
        link.preventDefault();
    })
    //slajder
    slajder();
}
var niz=["about1.jpg","baner.jpg","cover.jpg"];
var index=0;
function slajder(){
    var divSlajder=document.getElementById('slajder');
    divSlajder.style.backgroundImage=`url('../img/${niz[index]}')`
    if(index<niz.length-1){
        index++;
    }
    else{
        index=1;
    }
    setTimeout(slajder,2000)
}
$(document).ready(function(){
    $('#nav ul li a').click(function(e){
        // e.preventDefault();
        $(this).next('ul').slideToggle();
    })
    $('#cover #naslov').css('opacity',0)
    $('#cover #naslov').animate({
        left: '220px',
        opacity:1
    },2000)
})