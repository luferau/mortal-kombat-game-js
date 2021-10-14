const playerLeft = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['weapon1', 'weapon2'],
    attack: function() {
        console.log(this.name + ' - fight!');
    }
}

const playerRight = {
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['weapon1', 'weapon2'],
    attack: function() {
        console.log(this.name + ' - fight!');
    }
}