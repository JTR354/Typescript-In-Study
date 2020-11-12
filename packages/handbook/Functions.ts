/**
 * Typing the function
 */


 // Named function
function add(x: number,y: number):number {
    return x + y
}

// Anonymous function 
let myAdd = function(x:number,y:number):number {
    return x + y
}

let myAdd2: (x:number, y:number) => number = function(x,y) {
    return x+y
}

let myAdd3 = (x: number) => x*x

interface AddInterface {
    (x: number, y: number): number
}

let myAdd4: AddInterface = (x,y) => x+y

/**
 * Optional and Default Parameters
 */

 function buildName(firstName: string, lastName?:string, end = 'jjt') {

 }

 buildName('1', '2')

 /**
  * Rest Parameters
  */

function buildName2(f: number, ...rest: number[]) {

}
buildName2(1,2,3,5,6)

/**
 * this
 */
interface Card {
    suit: string;
    card: number;
  }
  
  interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
  }
  
  let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (this: Deck) {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);
  
        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    },
  };
  
  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();
  
  alert("card: " + pickedCard.card + " of " + pickedCard.suit);

  /**
   * Overloads
   * 由于js本身非常灵活，可以根据不同的参数返回不同类型的数据，所以重载就是为了解决这些矛盾
   */

  let suits = ["hearts", "spades", "clubs", "diamonds"];

  function pickCard(x: { suit: string; card: number }[]): number;
  function pickCard(x: number): { suit: string; card: number };
  function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
      let pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
    }
  }
  
  let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
  ];
  
  let pickedCard1 = myDeck[pickCard(myDeck)];
//   alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
  
  let pickedCard2 = pickCard(15);
//   alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);