import { expect, assert } from 'chai';
import Deck               from "../scripts/deck";
import Card               from "../scripts/flash";

describe('testing deck', function(){
  it('should recognize card as a function', function() {
    assert.isFunction(Card)
  })

  it('should recognize deck as a function', function() {
    assert.isFunction(Deck)
  })

  it('should be able to add card to deck', function(){
    let card = new Card({})
    let deck = new Deck({})

    deck.addCard(card)
    expect(deck.cards).to.include(card)
  })

  it('should add several cards to deck and count them', function(){
    let card1 = new Card({ question: "What is the capital of Alaska?", answer: "Juneau"})
    let card2 = new Card({ question: "The Viking spacecraft blah blah", answer: "Mars"})
    let card3 = new Card({ question: "blah blah?", answer: "North north west"})
    let deck  = new Deck([card1, card2, card3])

    deck.addCard(card1)
    deck.addCard(card2)
    deck.addCard(card3)
    
    assert.equal(deck.count(), 3)
  })

})
