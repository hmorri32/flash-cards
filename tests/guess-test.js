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

  it('dunno yet...', function() {
  let card = new Card({});
  let guess = new Guess({ question: card });

  assert.isObject(guess.question);
});





});
