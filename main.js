function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className)
    }

    return $tag;
}

class Player {
    constructor(className, playerData) {
        // progressbar
        const $life = createElement('div', 'life');
        $life.style.width = playerData.hp + '%';

        const $name = createElement('div', 'name');
        $name.innerText = playerData.name;

        const $progressbar = createElement('div', 'progressbar');
        $progressbar.appendChild($life);
        $progressbar.appendChild($name);

        // character
        const $img = createElement('img', 'img');
        $img.src = playerData.img;

        const $character = createElement('div', 'character');
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