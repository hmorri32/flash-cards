import { expect, assert } from 'chai';
import CardGenerator      from '../scripts/cards-generator'
import Card               from '../scripts/flash';

describe('testing card-generator', () => {

  it('should display card object from text file', () => {
    let cardgen = new CardGenerator({filePath: 'cards.txt'})
    console.log(cardgen)

  })
})