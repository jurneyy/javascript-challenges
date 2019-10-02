function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

//store values on the instance variables on the object, by setting this.XXXXXX to the value

Card.prototype.outputCard = function(){
  console.log(this.rank + " of " + this.suit);
}

//calling prototype on an object grants you access to the object's prototype.


var fourOfDiamonds = new Card(8, "diamonds");
fourOfDiamonds.outputCard();