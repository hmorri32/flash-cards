import { expect, assert } from 'chai';
import Guess              from "../scripts/guess";
import Card               from "../scripts/flash";


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
    let card  = new Card({});
    let guess = new Guess({ question: card });

    assert.isObject(guess.question);
  });

  it("Guess should be able to access card's question", function() {
    let card  = new Card({ question: 'suh'})
    let guess = new Guess({ question: card})

    assert.equal(guess.question.question, 'suh')
  })

  it("Guess should be able to access card's answer", function() {
    let card  = new Card({ answer: 'suh'})
    let guess = new Guess({ response: card})

    assert.equal(guess.response.answer, 'suh')
  })

  it("Guess should be able to access both the card's question and answer", function(){
    let card  = new Card ({ question: "Which planet is closest to the sun?", answer: "mercury"})
    let guess = new Guess ({question: card})

    assert.equal(guess.question.answer, 'mercury')
    assert.equal(guess.question.question, "Which planet is closest to the sun?")
  })

  it('guess should accept a wrong answer and determine that it is wrong ', function(){
    let card  = new Card ({ question: "Which planet is closest to the sun?", answer: "mercury"})
    let guess = new Guess ({ response: 'suh', question: card})

    assert.equal(guess.correct(), false);

  })

  it('guess should accept a correct answer and determine that it is correct ', function(){
    let card  = new Card ({ question: "Which planet is closest to the sun?", answer: "mercury"})
    let guess = new Guess ({ response: "mercury", question: card})

    assert.equal(guess.correct(), true);

  })

  it("should give negative feedback if you got the incorrect answer", function(){
    let card  = new Card ({ question: "Which planet is closest to the sun?", answer: "mercury"})
    let guess = new Guess ({ response: "suhhhhhhh", question: card})

    assert.equal(guess.feedback(), "Incorrect!!!");
  })

  it("should give positive feedback if you got the correct answer", function(){
    let card  = new Card ({ question: "Which planet is closest to the sun?", answer: "mercury"})
    let guess = new Guess ({ response: "mercury", question: card})

    assert.equal(guess.feedback(), "Correct!");
  })

});
