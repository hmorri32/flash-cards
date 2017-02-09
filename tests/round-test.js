import { expect, assert } from 'chai';
import Round              from "../scripts/round.js";
import Card               from "../scripts/flash.js";
import Guess              from "../scripts/guess";
import Deck               from "../scripts/deck";


describe('testing round', () => {
  it("round should be a function", () => {
    assert.isFunction(Round);
  });

  it('should accept a card and a deck ', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let deck  = new Deck([card1])
    deck.addCard(card1)
    let round = new Round(deck)

    expect(deck.cards).to.deep.equal([{ question: 'What is the capital of Alaska?', answer: 'Juneau' } ])
  })

  it('should be able to keep track of guesses by using an array ', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let deck  = new Deck([card1])
    deck.addCard(card1)
    let round = new Round(deck)

    assert.isArray(round.guesses)
  })

  it('should have a currentCard function', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let deck  = new Deck([card1])
    let round = new Round(deck)
    assert.isFunction(round.currentCard);
  })

  it('currentCard should return the current card', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let deck  = new Deck([card1])
    let round = new Round(deck)
    deck.addCard(card1)

    expect(round.currentCard()).to.deep.equal({question: "What is the capital of Alaska?", answer: "Juneau"})
  })

  it('should recognize recordGuess as a function', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let deck  = new Deck([card1])
    let round = new Round(deck)
    assert.isFunction(round.recordGuess);
  })

  it('should record and keep count of guesses', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let deck  = new Deck([card1])
    let round = new Round(deck)
    deck.addCard(card1)
    round.recordGuess('juneau')

    expect(round.guesses.length).to.equal(1)
  })

  it('should be able to determine whether a guess is incorrect', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let deck  = new Deck([card1])
    let round = new Round(deck)
    deck.addCard(card1)
    round.recordGuess('suuuuhhhhhhhh')

    expect(round.guesses[0].correct()).to.be.false

  })

  it('should be able to determine whether a guess is correct', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let deck  = new Deck([card1])
    let round = new Round(deck)
    deck.addCard(card1)
    round.recordGuess('Juneau')

    expect(round.guesses[0].correct()).to.be.true
  })

  it('should be able to give negative feedback for incorect guesses', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let deck  = new Deck([card1])
    let round = new Round(deck)
    deck.addCard(card1)
    round.recordGuess('suuuuhhhhhhhh')

    assert.equal(round.guesses[0].feedback(), "Incorrect!!!")
  })

  it('should be able to give positive feedback for correct guesses', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let deck  = new Deck([card1])
    let round = new Round(deck)
    deck.addCard(card1)
    round.recordGuess('Juneau')

    assert.equal(round.guesses[0].feedback(), "Correct!")
  })

  it('should recognize percentCorrect as a function', () => {
    let round = new Round()
    assert.isFunction(round.percentCorrect)
  })

  it('percentCorrect should return the amount of guesses that are correct', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "dude"})
    let card2 = new Card({question: "What is the capital of Alaska?", answer: "what"})
    let card3 = new Card({question: "What is the capital of Alaska?", answer: "is"})
    let card4 = new Card({question: "What is the capital of Alaska?", answer: "up"})

    let deck  = new Deck([card1, card2, card3, card4])

    deck.addCard(card1)
    deck.addCard(card2)
    deck.addCard(card3)
    deck.addCard(card4)

    let round = new Round(deck)

    round.recordGuess('dude')
    round.recordGuess('what')
    round.recordGuess('suh')
    round.recordGuess('suhhhh')

    console.log(round.numberCorrect)

    round.percentCorrect()

    assert.equal(round.percentCorrect(), "50%")
  })
})













//
