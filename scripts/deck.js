class Deck{
  constructor({ array}){
    this.cards = array || []
  }
  addCard(card){
    this.cards.push(card)
  }
  count(){
    return this.cards.length
  }
}

export default Deck
