$(document).ready( () => {


function randomQuote(){
	var url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  	$.getJSON( url, function( json ) {
	//console.log( "JSON Data: " + json.quotes[100].quote);

	// 
    let random = json.quotes[Math.floor(Math.random() * json.quotes.length)];
 	$('p').text( `“${random.quote}.”`)
 	$('.ok').text( `-“${random.author}.”`)

});

}

  randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)

});