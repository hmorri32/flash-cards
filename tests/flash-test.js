import { expect, assert } from 'chai';
import Card from "../scripts/flash.js";

describe("testing card constructor", function() {

  it("card should be a function", function() {
    assert.isFunction(Card);
  });

  it('should probz take question and answer as arguments in the constructor', function() {
    let card = new Card({question: 'Alaska?', answer: 'Juneau'});

    expect(card.question).to.equal('Alaska?')
    expect(card.answer).to.equal('Juneau')
  })

  it("card should be able to accept a question", function() {
    let card = new Card({ question: "What is the capital of Alaska?" });

    assert.equal(card.question, "What is the capital of Alaska?");
  });

  it("card should be able to accept an answer", function() {
    let card = new Card({ answer: "Juneau" });

    assert.equal(card.answer, "Juneau");
  });

});
