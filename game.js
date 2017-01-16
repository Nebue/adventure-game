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
	document.getElementById('over').style.display = "none";
	document.getElementById('next1').style.display= "none";
	document.getElementById('dora').style.display = "none";

	




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
		document.getElementById('key').style.display= "none";
		document.getElementById('text').style.display = "inline";
		document.getElementById('over').style.display = "none";
		    document.getElementById('swieber').style.display = "none";
		    	document.getElementById('next1').style.display= "none";
		    	document.getElementById('dora').style.display = "none";

		    		
	
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
	},38);
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

	document.getElementById('next').style.display= "none";
	document.getElementById('key').style.display= "none";
	document.getElementById('text').style.display = "inline";
	 document.getElementById('swieber').style.display = "none";
	 	document.getElementById('next1').style.display= "none";
	 	document.getElementById('dora').style.display = "none";
	 	
}


function Huis(){
	clearInterval(auto_interval);
		showtekst(" Kan jij de sleutel van het huis in het bos vinden?");
		document.body.style.backgroundImage = "url('hetbos.jpg')";
		document.getElementById('house').style.display = "none";
		document.getElementById('heuvel').style.display = "none";
		document.getElementById('brug').style.display = "none";
		document.getElementById('text').innerHTML = "";
		document.getElementById('text').style.textShadow = "2px 2px black";
		document.getElementById('text').style.position = "absolute";
		document.getElementById('text').style.top = "650px";
		document.getElementById('text').style.right = "200px";
		document.getElementById('key').style.display = "inline";
		document.getElementById('key').style.position = "absolute";
		document.getElementById('key').style.left = "300px";
		document.getElementById('key').style.top = "250px";
     	document.getElementById('refresh').style.display = "inline";
		document.getElementById('refresh').style.fontSize = "20px";
		document.getElementById('next').style.display= "none";
		document.getElementById('key').style.display= "inline";
		document.getElementById('text').style.display = "inline";
		 document.getElementById('swieber').style.display = "none";
		 	document.getElementById('next1').style.display= "none";
		 	document.getElementById('dora').style.display = "none";
		

}

function sleutel() {
	clearInterval(auto_interval);
    alert("Gefeliciteerd je hebt de sleutel gevonden!");
    document.getElementById('next').style.display= "inline";
    document.getElementById('text').style.display = "inline";
    showtekst(' Goedzo ! Je hebt de sleutel gevonden je kan je weg vervolgen.');
    document.getElementById('swieber').style.display = "none";
    	document.getElementById('next1').style.display= "none";
    	document.getElementById('dora').style.display = "none";
    	
   

}

function volgende(){
	clearInterval(auto_interval);
document.getElementById('text').style.display = "inline";
document.body.style.backgroundImage = "url('bootssleutel.jpg')";
document.getElementById('key').style.display= "none";
document.getElementById('next').style.display= "none";
document.getElementById('next1').style.display= "inline";
document.getElementById('swieber').style.display = "inline";
showtekst(' Daar hebben we Zwieber de vos. Pas op Boots hij wilt de sleutel stelen. We moeten ons verstoppen! ');
document.getElementById('dora').style.display = "none";
	


}





function niet(){
	clearInterval(auto_interval);
	showtekst('Zwieber niet stelen!!!!    ');
	document.getElementById('text').style.display = "inline";

		
}

function volgende1(){
	clearInterval(auto_interval);

document.body.style.backgroundImage = "url('swieberdora.jpg')";
document.getElementById('swieber').style.display = "none";
document.getElementById('text').style.display = "inline";
document.getElementById('dora').style.display = "inline";
document.getElementById('text').innerHTML =" Oneeeee Zieber de vos heeft ons gevonden. Vind de knop om hem weg te jagen!  ";
document.getElementById('next1').style.display = "none";



}   