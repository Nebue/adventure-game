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
		clearInterval(auto_interval);
	document.getElementById('text').innerHTML = "";
	showtekst('Oneeeee Boots, Troll Booth doet de poort dicht!!!');
      
	
	document.body.style.backgroundImage = "url('brug.jpg')";
	document.getElementById('brug').style.display = "none";
	document.getElementById('brug').style.position = "relative";
	document.getElementById('brug').style.bottom = "100px";

}


var auto_interval
function showtekst (tekst){
	document.getElementById('brug').innerHTML = "";
	var auto_char = tekst.split('');
	var auto_length = auto_char.length - 1;
	var auto_index = 0;
     auto_interval = setInterval(function(){
		if (auto_index <= auto_length) {
		document.getElementById('text').innerHTML += auto_char[auto_index];
		auto_index++;
	}
		else {
			clearInterval(auto_interval);
		}
	},50);
}

function back(){
	location.reload();
}