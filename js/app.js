/*
 * Archivo principal de JS
 */
var div= document.createElement('DIV');
var btn = document.createElement('BUTTON');
var btn1 = document.getElementsByTagName('btn1');
var body= document.body;
btn.setAttribute('class','btnDiv');
btn.setAttribute('id','btn1');
var text= document.createTextNode('✘');
var divParr = document.createElement('div');
divParr.classList.add('divParr');
var p1= document.createElement('p');
var p5 = document.createElement('p');
var p6 = document.createElement('p');
var p7 = document.createElement('p');
var h2=document.createElement('h2'); 

var myMap = {}
for (var i=1; i<=6; i++) {
	myMap[i] = document.getElementById('div'+i);
	myMap[i].elemIndex = i;
	myMap[i].onclick = function () {
		div.setAttribute('class','divNuevo');
	 	 //div.classList.add('divNuevo');
	 	 //btn.id = 'btn1';
	 	 // text.setAttribute('class','text');
	 	 var img1= document.createElement('img');
	 	 img1.setAttribute('src','assets/images/portfolio/img'+this.elemIndex+'.png');
	 	 img1.setAttribute('class','imgDiv');
	 	 h2.setAttribute('class','h2');
	 	 h2.innerHTML="PROJECT TITLE";
	 	 p1.innerHTML = "Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you candownload their free set with 16 icons, or you can purchase the entire ";
	 	 p1.setAttribute('class','p1');
	 	 p5.innerHTML="Client: ";
	 	 p5.setAttribute('class','p5');
	 	 p6.innerHTML="Date: ";
	 	 p6.setAttribute('class','p6');
	 	 p7.innerHTML="Service: ";
	 	 p7.setAttribute('class','p7');
	 	 divParr.appendChild(h2);
		 divParr.appendChild(p1);
		 divParr.appendChild(p5);
		 divParr.appendChild(p6);
		 divParr.appendChild(p7);
		 div.appendChild(divParr);
		 btn.appendChild(text);
	 	 div.appendChild(btn);
	 	 div.appendChild(img1);
	 	 body.appendChild(div);
	}
}

function elimDiv(){
	body.removeChild(div);
}
function addUser(){
	alert("Bienvenido", "Se ha registrado el usuario" , "success");
}
btn.onclick=function(){
	elimDiv();
}

btn1.onclick=function(){
	addUser();
}
