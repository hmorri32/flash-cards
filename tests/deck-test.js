import { expect, assert } from 'chai';
import Deck               from "../scripts/deck";
import Card               from "../scripts/flash";

describe('testing deck constructor', function(){
  it('should recognize card and deck', function() {
    assert.isFunction(Card)
    assert.isFunction(Deck)
  })

  it('should add stuff', function(){
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"})
    let card3 = new Card({question: "Describe in words the exact direction that is 697.5° clockwise from due north?", answer: "North north west"})

    let deck = new Deck([card1, card2, card3])

    deck.addCard(card1)
    deck.addCard(card2)
    deck.addCard(card3)

    assert.equal(deck.cards.length, 3)

  })

})
