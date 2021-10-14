function createPlayer(className, player) {
    // progressbar
    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = player.hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    // character
    const $img = document.createElement('img');
    $img.classList.add('img');
    $img.src = player.img;

    const $character = document.createElement('div');
    $character.classList.add('character');

    $character.appendChild($img);

    // player
    const $player = document.createElement('div');
    $player.classList.add(className);
    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

function addToArena($player) {
    // find arenas
    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

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

addToArena(createPlayer('player1', playerScorpion));
addToArena(createPlayer('player2', playerSubzero));