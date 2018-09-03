console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2){
	console.log("There are two cards in play!")
	if(cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!")
}else{
	alert("sorry, try again!")
};
};

console.log("User flipped " + cardsInPlay);

console.log("User flipped " + cardFour);