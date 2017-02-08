import { expect, assert } from 'chai';
import CardGenerator      from '../scripts/cards-generator'
import Card               from '../scripts/flash';
import fs                 from 'fs';

const words = fs.readFileSync('./cards.txt', 'utf8').split('\n');

const splitter = text => {
  return words.map ( card => {
    let cardSplit = card.split(",");
    let textQuestion = cardSplit[0];
    let textAnswer = cardSplit[1];
    return new Card({ question: textQuestion, answer: textAnswer})
  })
}

describe('testing card-generator', function(){
  it.only('should work', function(){
    console.log(splitter())
  })
})