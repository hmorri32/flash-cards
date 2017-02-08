import Card from "../scripts/flash";
import fs   from 'fs';

class CardGenerator {
  constructor({ filePath }){
    this.cards = this.splitter(filePath)
  }
  splitter(filePath){
    let words = fs.readFileSync(`./${filePath}`, 'utf8').split('\n');
    return words.map ( card => {
      let cardSplit    = card.split(",");
      let textQuestion = cardSplit[0];
      let textAnswer   = cardSplit[1];
      return new Card({ question: textQuestion, answer: textAnswer})
    })
  }
}

export default CardGenerator
