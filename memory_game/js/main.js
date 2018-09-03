console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!")
}else{
	alert("sorry, try again!")
};
};

var flipCard = function(cardID){

cardsInPlay.push(cards[cardID]);

if(cardsInPlay.length === 2){
	console.log("There are two cards in play!")
	checkForMatch();
};

console.log("User flipped " + cards[cardID]);

};

flipCard(0);
flipCard(2);
