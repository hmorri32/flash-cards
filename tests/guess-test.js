/* eslint-disable */
import { expect, assert } from 'chai';
import Guess              from "../scripts/guess";
import Card               from "../scripts/flash";


describe("testing guess", () => {
  it('guess should be a function', () => {

    assert.isFunction(Guess);
  });

  it('should recognize card as a function', () => {

    assert.isFunction(Card);
  });

  it('function guess should be able to accept a response', () => {
    let guess = new Guess ({ response: 'suhhhhhh'});

    assert.equal(guess.response, 'suhhhhhh');
  });

  it('Guess should be able to accept a card object', () => {
    let card  = new Card({});
    let guess = new Guess({ card: card });

    assert.isObject(guess.card);
  });

  it("Guess should be able to access both the card's question and answer", () => {
    let card  = new Card ({
      question: "Which planet is closest to the sun?",
      answer: "mercury"
    });;

    let guess = new Guess ({card: card});

    assert.equal(guess.card.answer, 'mercury');
    assert.equal(guess.card.question, "Which planet is closest to the sun?");
  });

  it('guess should accept a wrong answer and determine that it is wrong ', () => {
    let card  = new Card ({ question: "Which planet is closest to the sun?", answer: "mercury"});
    let guess = new Guess ({ response: 'suh', card: card});

    assert.equal(guess.correct(), false);
  });

  it('guess should accept a correct answer and determine that it is correct ', () => {
    let card  = new Card ({ question: "Which planet is closest to the sun?", answer: "mercury"});
    let guess = new Guess ({ response: "mercury", card: card});

    assert.equal(guess.correct(), true);
  });

  it("should give negative feedback if you got the incorrect answer", () => {
    let card  = new Card ({ question: "Which planet is closest to the sun?", answer: "mercury"});
    let guess = new Guess ({ response: "suhhhhhhh", card: card});

    assert.equal(guess.feedback(), "Incorrect!!!");
  });

  it("should give positive feedback if you got the correct answer", () => {
    let card  = new Card ({ question: "Which planet is closest to the sun?", answer: "mercury"});
    let guess = new Guess ({ response: "mercury", card: card});

    assert.equal(guess.feedback(), "Correct!");
  });

});
