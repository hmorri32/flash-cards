import { expect, assert } from 'chai';
import CardGenerator      from '../scripts/cards-generator'
import Card               from '../scripts/flash';

// console.log(cardgen)

describe('testing card-generator', () => {

  it('should work', () => {
    let cardgen = new CardGenerator({filePath: 'cards.txt'})
    console.log(cardgen)

  })
})