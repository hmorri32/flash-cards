import { expect, assert } from 'chai';
import Guess from "../scripts/guess";
import Card from "../scripts/flash";


describe("testing guess", function() {
  it('guess should be a function', function() {
    assert.isFunction(Guess)
  });

  it('should recognize card as a function', function() {
    assert.isFunction(Card)
  })

  it('function guess should be able to accept a response', function() {
    let guess = new Guess ({ response: 'suhhhhhh'});

    assert.equal(guess.response, 'suhhhhhh')
  })

  it('Guess should be able to accept a card', function() {
    let card = new Card({});
    let guess = new Guess({ question: card });

    assert.isObject(guess.question);
  });

  it("Guess should be able to access card's question", function() {
    let card = new Card({ question: 'suh'})
    let guess = new Guess({ question: card})

    assert.equal(guess.question.question, 'suh')
  })

  it("Guess should be able to access card's answer", function() {
    let card = new Card({ answer: 'suh'})
    let guess = new Guess({ response: card})

    assert.equal(guess.response.answer, 'suh')
  })

  









});
