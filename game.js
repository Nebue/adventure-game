function Begin(){
	console.log('start');
	document.getElementById('start').style.display = "none";
	document.getElementById('level_title').innerHTML ="";
	document.getElementById('text').innerHTML =" Hallo, ik ben Dora. Waar kan je de verassingsheuvel vinden?";
	document.getElementById('text').style.top = "200px";
	document.getElementById('text').style.position = "absolute";
	document.getElementById('text').style.left = "-100px";
	document.getElementById('text').style.textShadow = "none";
	document.getElementById('text').style.color = "white";
	document.body.style.backgroundImage = "url('unnamed.png')";
	document.body.style.backgroundSize = "1540px 760px";
	document.getElementById('brug').style.display = "inline";
}


function brug(){
document.getElementById('text').style.display = "none";
document.getElementById('text').innerHTML= "";
document.body.style.backgroundImage = "url('brug.jpg')";
document.getElementById('brug').style.display = "none";
}
