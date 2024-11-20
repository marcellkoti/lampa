var image = document.getElementById("lampa");
var image2 = document.getElementById("lampa2");

function bekapcsol(){
    image.src = "pic_bulbon.gif";
    document.getElementById("fel").disabled = true;
    document.getElementById("le").disabled = false;
}
function kikapcsol(){
    image.src = "pic_bulboff.gif";
    document.getElementById("fel").disabled = false;
    document.getElementById("le").disabled = true;
}
var kep = false;
function kapcsolo(){
    if (kep){
        image2.src = "pic_bulboff.gif";
        kep = false;
    }else{
        image2.src = "pic_bulbon.gif";
        kep = true;
    }
}

function eger(){
    
}