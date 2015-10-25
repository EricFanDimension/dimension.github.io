var myImage=document.querySelector('img');
myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	if(mySrc==='images/dimension_education.png'){
		myImage.setAttribute('src', 'images/dimension_education1.png');
	}else{
		myImage.setAttribute('src', 'images/dimension_education.png');
	}	
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
	var myName=prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML='Welcome to DE, '+myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}
else{
	var storedName=localStorage.getItem('name');
	myHeading.innerHTML='Welcome to DE, ' + storedName;
}

document.getElementById('button1').onclick=function(){
	setUserName();
}
