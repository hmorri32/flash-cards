import { expect, assert } from 'chai';
import Round              from "../scripts/round.js";
import Card               from "../scripts/flash.js";
import Guess              from "../scripts/guess";
import Deck               from "../scripts/deck";





describe('testing round', function(){
  it("round should be a function", function() {
    assert.isFunction(Round);
  });

  it('should do the stuff', function(){
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let card2 = new Card({question: "Approximately how many miles are in one astronomical unit?", answer: "93,000,000"})
    let deck  = new Deck([card1, card2])
    deck.addCard(card1)
    deck.addCard(card2)

    let round = new Round(deck)

    console.log(round.currentCard())
  })
})
