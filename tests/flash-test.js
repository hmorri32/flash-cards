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
});
