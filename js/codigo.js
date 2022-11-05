
var x=0;//si esta dentro de la funcion cuando "x++" sume uno al regresar la funcion volveria a cero
var imagenes = ["img/Banner1.png","img/Banner2.png", "img/Banner3.png"];

function rotar(){
    
    if(x==3) {x=0;} // cuando es falso (x=0) no se realiza
    document.getElementsByClassName("imagenes")[0].src = imagenes[x];
    x++;
    setTimeout("rotar()",3000);
}
function adelante(){
    
    if(x==3){x=0};
    document.getElementsByClassName("imagenes")[0].src = imagenes[x];
    x++;
}
function atras(){
    let y=x;
    y--;
    if(y==-1){y=2};
    document.getElementsByClassName("imagenes")[0].src = imagenes[y];
    x=y;
}


/*
var check1 = document.getElementsByName("pasar")[0];
var check2 = document.getElementsByName("pasar")[1];
var check3 = document.getElementsByName("pasar")[2];

check1.addEventListener("load",rotarMuñon);

function rotarMuñon(){

    
    if(check1==true){x=0}
    
    

    document.getElementsByClassName("nameee")[0].innerHTML = x +"asd" + check1 ;
    
    setTimeout("rotarMuñon()",1000);
    


}*/


function img1(){
    document.getElementsByClassName("imagenes")[0].src = imagenes[0]
}
function img2(){
    document.getElementsByClassName("imagenes")[0].src = imagenes[1]
}
function img3(){
    document.getElementsByClassName("imagenes")[0].src = imagenes[2]
}



function girar1(){
    document.getElementsByClassName("imgLogo")[0].style.transform = "rotate(360deg)";
}
function original1(){
    document.getElementsByClassName("imgLogo")[0].style.transform = "rotate(0deg)";
}
function girar2(){
    document.getElementsByClassName("imgLogo")[1].style.transform = "rotate(360deg)";
}
function original2(){
    document.getElementsByClassName("imgLogo")[1].style.transform = "rotate(0deg)";
}
function girar3(){
    document.getElementsByClassName("imgLogo")[2].style.transform = "rotate(360deg)";
}
function original3(){
    document.getElementsByClassName("imgLogo")[2].style.transform = "rotate(0deg)";
}


function ampliar1(){
    document.getElementsByClassName("imgBice")[0].style.transform = "scale(1.2)";
}
function reducir1(){
    document.getElementsByClassName("imgBice")[0].style.transform = "scale(1)";
}

/* tiempo */

function tiempo(){
    
    let fecha=new Date();
    
    let hora=fecha.getHours();
    let min=fecha.getMinutes();
    let seg=fecha.getSeconds();
    
    var meridiano
    if(hora>=12) meridiano="P.M."
    else meridiano="A.M."
    
    
    document.getElementsByClassName("blanco2")[0].innerHTML= hora + ":" + min + ":" + seg + " " + meridiano;
    
    setTimeout("tiempo()",1000)
}

document.body.setAttribute("onload", "rotar() ; tiempo()");

/* Logo EsSalud */
function vaiven(){
    document.getElementsByClassName("logoSalud")[0].style.animation = "movimiento 3s infinite";
}
function noVaiven(){
    document.getElementsByClassName("logoSalud")[0].style.animation = "nada 5s infinite";
    document.getElementsByClassName("logoSalud")[0].style.transform = "translate(0rem) rotate(0deg)"
}

/* Ampliar cuadros de consejos */
function ampliarConsejo(){
    document.getElementsByClassName("imgConsejo")[0].style.transform = "scale(1.1)";
    document.getElementsByClassName("consejo1h3")[0].style.color ="rgb(22, 47, 82)";
    document.getElementsByClassName("consejo1h3")[0].style.background ="rgb(190, 190, 190)"
}
function reducironsejo(){
    document.getElementsByClassName("imgConsejo")[0].style.transform = "scale(1)";
    document.getElementsByClassName("consejo1h3")[0].style.color ="azure";
    document.getElementsByClassName("consejo1h3")[0].style.background ="rgb(22, 47, 82)"
}

function ampliarConsejo1(){
    document.getElementsByClassName("imgConsejo")[1].style.transform = "scale(1.1)";
    document.getElementsByClassName("consejo1h3")[1].style.color ="rgb(22, 47, 82)";
    document.getElementsByClassName("consejo1h3")[1].style.background ="rgb(190, 190, 190)"
}
function reducironsejo1(){
    document.getElementsByClassName("imgConsejo")[1].style.transform = "scale(1)";
    document.getElementsByClassName("consejo1h3")[1].style.color ="azure";
    document.getElementsByClassName("consejo1h3")[1].style.background ="rgb(22, 47, 82)"
}

function ampliarConsejo2(){
    document.getElementsByClassName("imgConsejo")[2].style.transform = "scale(1.1)";
    document.getElementsByClassName("consejo1h3")[2].style.color ="rgb(22, 47, 82)";
    document.getElementsByClassName("consejo1h3")[2].style.background ="rgb(190, 190, 190)"
}
function reducironsejo2(){
    document.getElementsByClassName("imgConsejo")[2].style.transform = "scale(1)";
    document.getElementsByClassName("consejo1h3")[2].style.color ="azure";
    document.getElementsByClassName("consejo1h3")[2].style.background ="rgb(22, 47, 82)"
}

function ampliarConsejo3(){
    document.getElementsByClassName("imgConsejo")[3].style.transform = "scale(1.1)";
    document.getElementsByClassName("consejo1h3")[3].style.color ="rgb(22, 47, 82)";
    document.getElementsByClassName("consejo1h3")[3].style.background ="rgb(190, 190, 190)"
}
function reducironsejo3(){
    document.getElementsByClassName("imgConsejo")[3].style.transform = "scale(1)";
    document.getElementsByClassName("consejo1h3")[3].style.color ="azure";
    document.getElementsByClassName("consejo1h3")[3].style.background ="rgb(22, 47, 82)"
}

function ampliarConsejo4(){
    document.getElementsByClassName("imgConsejo")[4].style.transform = "scale(1.1)";
    document.getElementsByClassName("consejo1h3")[4].style.color ="rgb(22, 47, 82)";
    document.getElementsByClassName("consejo1h3")[4].style.background ="rgb(190, 190, 190)"
}
function reducironsejo4(){
    document.getElementsByClassName("imgConsejo")[4].style.transform = "scale(1)";
    document.getElementsByClassName("consejo1h3")[4].style.color ="azure";
    document.getElementsByClassName("consejo1h3")[4].style.background ="rgb(22, 47, 82)"
}

function ampliarConsejo5(){
    document.getElementsByClassName("imgConsejo")[5].style.transform = "scale(1.1)";
    document.getElementsByClassName("consejo1h3")[5].style.color ="rgb(22, 47, 82)";
    document.getElementsByClassName("consejo1h3")[5].style.background ="rgb(190, 190, 190)"
}
function reducironsejo5(){
    document.getElementsByClassName("imgConsejo")[5].style.transform = "scale(1)";
    document.getElementsByClassName("consejo1h3")[5].style.color ="azure";
    document.getElementsByClassName("consejo1h3")[5].style.background ="rgb(22, 47, 82)"
}

/* ventana modal */
let modal = document.getElementsByClassName("consejo_ampliado")[0];

document.getElementsByClassName("consejo")[0].addEventListener('click', function(){
    modal.style.display = 'block';
});
document.getElementsByClassName("close")[0].addEventListener('click', function(){
    modal.style.display = 'none';
});

/*  */
let modal1 = document.getElementsByClassName("consejo_ampliado")[1];

document.getElementsByClassName("consejo")[1].addEventListener('click', function(){
    modal1.style.display = 'block';
});
document.getElementsByClassName("close")[1].addEventListener('click', function(){
    modal1.style.display = 'none';
});

/*  */
let modal2 = document.getElementsByClassName("consejo_ampliado")[2];

document.getElementsByClassName("consejo")[2].addEventListener('click', function(){
    modal2.style.display = 'block';
});
document.getElementsByClassName("close")[2].addEventListener('click', function(){
    modal2.style.display = 'none';
});

/*  */
let modal3 = document.getElementsByClassName("consejo_ampliado")[3];

document.getElementsByClassName("consejo")[3].addEventListener('click', function(){
    modal3.style.display = 'block';
});
document.getElementsByClassName("close")[3].addEventListener('click', function(){
    modal3.style.display = 'none';
});

/*  */
let modal4 = document.getElementsByClassName("consejo_ampliado")[4];

document.getElementsByClassName("consejo")[4].addEventListener('click', function(){
    modal4.style.display = 'block';
});
document.getElementsByClassName("close")[4].addEventListener('click', function(){
    modal4.style.display = 'none';
});

/*  */
let modal5 = document.getElementsByClassName("consejo_ampliado")[5];

document.getElementsByClassName("consejo")[5].addEventListener('click', function(){
    modal5.style.display = 'block';
});
document.getElementsByClassName("close")[5].addEventListener('click', function(){
    modal5.style.display = 'none';
});

/* Logo Vacuna */

function girarVacuna(){
    document.getElementById("logoVacuna").style.transform = "rotate(55deg)";
}
function originalVacuna(){
    document.getElementById("logoVacuna").style.transform = "rotate(0deg)";
}

/* Modal Ventana Vacuna */

let modalVentana = document.getElementsByClassName("modal_vacuna")[0];

document.getElementsByClassName("boton_vacuna")[0].addEventListener('click', function(){
    modalVentana.style.display = 'block';
});
document.getElementsByClassName("desaparecer")[0].addEventListener('click', function(){
    modalVentana.style.display = 'none';
});


function validar(){
    
    var dni = document.getElementById("dni").value;
    var edad = document.getElementById("edad").value;
    var distrito = document.getElementById("lugar").value;

    var expReDni = /[0-9]{8}/;
    var expReEdad = /[0-9]{2}/;

    if( expReDni.test(dni) & edad>55){
        if(distrito=="Independencia"){
        document.getElementsByClassName("respuestaFallida")[0].innerHTML = ""
        document.getElementsByClassName("respuestaValida")[0].innerHTML = "Su fecha de Vacunacion es:  15/08/021 <br> Su lugar de Vacunacion es: Plaza Norte " 
        }
        if(distrito=="Cercado de Lima"){
        document.getElementsByClassName("respuestaFallida")[0].innerHTML = ""
        document.getElementsByClassName("respuestaValida")[0].innerHTML = "Su fecha de Vacunacion es:  28/08/021 <br> Su lugar de Vacunacion es: Campo de Marte " 
        }
        if(distrito=="Lince"){
        document.getElementsByClassName("respuestaFallida")[0].innerHTML = ""
        document.getElementsByClassName("respuestaValida")[0].innerHTML = "Su fecha de Vacunacion es:  10/09/021 <br> Su lugar de Vacunacion es: Plaza Miller " 
        }
    }
    else{
        document.getElementsByClassName("respuestaFallida")[0].innerHTML = "Coloque una Edad y Número de DNI Correcto .. !!"
        document.getElementsByClassName("respuestaValida")[0].innerHTML = ""
    }

}
