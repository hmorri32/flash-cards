import { expect, assert } from 'chai';
import CardGenerator      from '../scripts/cards-generator'
import Card               from '../scripts/flash';

// console.log(cardgen)

describe('testing card-generator', function(){

  it('should work', function(){
    let cardgen = new CardGenerator({filePath: 'cards.txt'})
    console.log(cardgen)

  })
})