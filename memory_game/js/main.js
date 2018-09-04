console.log("Up and running!");

var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'	
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}

];

var cardsInPlay = [];

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!")
}else{
	alert("sorry, try again!")
};
};

var flipCard = function(cardID){

cardsInPlay.push(cards[cardID].rank);
console.log(cards[cardID].suit);
console.log(cards[cardID].cardImage);

if(cardsInPlay.length === 2){
	console.log("There are two cards in play!")
	checkForMatch();
};

console.log("User flipped " + cards[cardID].rank);

};

flipCard(0);
flipCard(2);


