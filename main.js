class Player {
    constructor(className, playerData) {
        // progressbar
        const $life = document.createElement('div');
        $life.classList.add('life');
        $life.style.width = playerData.hp + '%';

        const $name = document.createElement('div');
        $name.classList.add('name');
        $name.innerText = playerData.name;

        const $progressbar = document.createElement('div');
        $progressbar.classList.add('progressbar');
        $progressbar.appendChild($life);
        $progressbar.appendChild($name);

        // character
        const $img = document.createElement('img');
        $img.classList.add('img');
        $img.src = playerData.img;

        const $character = document.createElement('div');
        $character.classList.add('character');

        $character.appendChild($img);

        // player
        this.$player = document.createElement('div');
        this.$player.classList.add(className);
        this.$player.appendChild($progressbar);
        this.$player.appendChild($character);
    }

    get visual() {
        return this.$player;
    }
}

class Arena {
    constructor(className) {
        // find arenas
        this.$arena = document.querySelector('.' + className);
    }

    addPlayer(player) {
        this.$arena.appendChild(player.visual);
    }
}

// create players
const playerScorpion = {
    name: 'Scorpion',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['weapon1', 'weapon2'],
    attack: function() {
        console.log(this.name + ' - fight!');
    }
}

const playerSubzero = {
    name: 'Subzero',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['weapon3', 'weapon4'],
    attack: function() {
        console.log(this.name + ' - fight!');
    }
}

const playerKenny = {
    name: 'Kenny',
    hp: 100,
    img: 'https://kennythinks.neocities.org/kennyy.gif',
    weapon: ['weapon5', 'weapon6'],
    attack: function() {
        console.log(this.name + ' - fight!');
    }
}

const player1 = new Player('player1', playerKenny);
const player2 = new Player('player2', playerSubzero);
const arena = new Arena('arenas');
arena.addPlayer(player1);
arena.addPlayer(player2);