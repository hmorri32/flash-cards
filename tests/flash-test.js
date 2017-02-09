/* eslint-disable */

import { expect, assert } from 'chai';
import Card from "../scripts/flash.js";

describe("testing card", () => {

  it("card should be a function", () => {
    assert.isFunction(Card);
  });

  it('should probz take question and answer as arguments in the constructor', () => {
    let card = new Card({
      question: 'Alaska?', 
      answer: 'Juneau'
    });

    expect(card.question).to.equal('Alaska?')
    expect(card.answer).to.equal('Juneau')
  })
});
