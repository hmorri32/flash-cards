function Deck({ array }){
  this.cards = array || []
}

Deck.prototype.addCard = function(card){
  this.cards.push(card)
}

// Deck.prototype.count = function(){
//
// }

export default Deck
