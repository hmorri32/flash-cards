import Card from "../scripts/flash";
import fs   from 'fs';


function CardGenerator({filePath}){
  this.cards = this.splitter(filePath)
}

CardGenerator.prototype.splitter = function(filePath) {
  let words = fs.readFileSync(`./${filePath}`, 'utf8').split('\n');
  return words.map ( card => {
    let cardSplit    = card.split(",");
    let textQuestion = cardSplit[0];
    let textAnswer   = cardSplit[1];
    return new Card({ question: textQuestion, answer: textAnswer})
  })
}


export default CardGenerator
