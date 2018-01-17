let diceCounter = 0

class Die {
    constructor(diceID) {
        this.diceID = diceID 
    }

    createDiv(){
        this.div = $('body').append(`<div id="${this.diceID}"></div>`);
    }

    rollDice() {
        for(let i = 1;i <= diceCounter; i++) {
            let num = (Math.floor(Math.random * 6) + 1);
            console.log(num);
            console.log(diceCounter);
            $(`#${i}`).text(`${num}`);
        }
    }

}

let rolling = new Die(diceCounter);

$('#DieGen').click(function() {
    diceCounter++
    rolling.createDiv();
    console.log(diceCounter);

});

$('#RollDice').click(function() {
    rolling.rollDice();
});

