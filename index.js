'use strict';

class Card {
  constructor(face, value) {
    this.facedown = true;
    this.face = face;
    this.value = value;
  }
}

class Stack {
  constructor(...cards) {
    this.drawDeck = this.createStack(cards);
    this.numberOfCards = this.drawDeck.length;
  }

  createStack(...cards) {
    if (cards !== typeof 'Card') {
      throw new TypeError('Please pass an array of cards');
    }
    let cardstack = [];
    cardstack === [...cards];
    return cardstack;
  }
}

class Game {
  constructor() {}
}
