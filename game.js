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
	document.getElementById('refresh').style.display = "none";
document.getElementById('brug').style.display = "inline";
	document.getElementById('house').style.display = "inline";
	document.getElementById('heuvel').style.display = "inline";

}


function brug(){
		clearInterval(auto_interval);
	document.getElementById('text').innerHTML = "";
	showtekst('Oneeeee Boots, Troll Booth doet de poort dicht. We kunnen helaas niet verder :(');
	document.body.style.backgroundImage = "url('brug.jpg')";
	document.getElementById('brug').style.display = "none";
	document.getElementById('text').style.top = "680px";
	document.getElementById('text').style.textShadow = "2px 2px black";

	document.getElementById('refresh').style.display = "inline";
	document.getElementById('refresh').style.fontSize = "20px";
	document.getElementById('over').style.display = "inline";
	document.getElementById('over').style.position = "absolute";
	document.getElementById('over').style.left = "540px";
	document.getElementById('over').style.top= "10px";
	
	document.getElementById('house').style.display = "none";
		document.getElementById('heuvel').style.display = "none";
		document.getElementById('next').style.display= "none";
	
}


var auto_interval
function showtekst (tekst){
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

function myFunction() {
    	console.log('start');
    	clearInterval(auto_interval);
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
	document.getElementById('refresh').style.display = "none";
document.getElementById('brug').style.display = "inline";
	document.getElementById('house').style.display = "inline";
	document.getElementById('heuvel').style.display = "inline";
	document.getElementById('key').style.display = "none";
	document.getElementById('over').style.display = "none";
	document.getElementById('next').style.display= "none";
}


function Huis(){
showtekst('Kan jij de sleutel van het huis in het bos vinden?');
document.body.style.backgroundImage = "url('hetbos.jpg')";
document.getElementById('house').style.display = "none";
		document.getElementById('heuvel').style.display = "none";
		document.getElementById('brug').style.display = "none";
		document.getElementById('text').innerHTML = "";
		document.getElementById('text').style.textShadow = "2px 2px black";
		document.getElementById('text').style.position = "absolute";
		document.getElementById('text').style.top = "690px";
		document.getElementById('text').style.left = "0px";
		document.getElementById('key').style.display = "inline";
		document.getElementById('key').style.position = "absolute";
		document.getElementById('key').style.left = "1400px";
		document.getElementById('key').style.top = "250px";
document.getElementById('refresh').style.display = "inline";
	document.getElementById('refresh').style.fontSize = "20px";
	document.getElementById('next').style.display= "inline";

}


