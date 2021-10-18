function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className)
    }

    return $tag;
}

class Player {
    constructor(className, playerData) {
        // save playerData object in class global variable
        this.playerData = playerData;

        // create player visual representation
        // progressbar
        this.$life = createElement('div', 'life');
        this.$life.style.width = playerData.hp + '%';

        const $name = createElement('div', 'name');
        $name.innerText = playerData.name;

        const $progressbar = createElement('div', 'progressbar');
        $progressbar.appendChild(this.$life);
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

    get data() {
        return this.playerData;
    }

    get visual() {
        return this.$player;
    }

    subscribeForDead(callback){
        this.deadCallback = callback;
    }

    makeDamage(damageValue) {
        // data change
        this.playerData.hp -= damageValue;

        if (this.playerData.hp < 0) {
            this.playerData.hp = 0;
        }

        // visual change
        this.$life.style.width = this.playerData.hp + '%';

        // raise deadCallback if player health <= 0
        if (this.playerData.hp <= 0){
            if(this.deadCallback) {
                this.deadCallback(this);
            }
        }
    }
}

class Arena {
    constructor(className) {
        // declare players array
        this.players = [];
        this.isResultKnown = false;

        // find arenas
        this.$arena = document.querySelector('.' + className);

        // find Fight button
        this.$controlDiv = document.querySelector('.control');
        this.$randomButton = document.querySelector(' .button');
        this.$randomButton.addEventListener('click', this.fight.bind(this));
    }

    addPlayer(player) {
        // show player on area
        this.$arena.appendChild(player.visual);

        // save player
        this.players.push(player);

        // subscribe for playerDead event
        var self = this;
        player.subscribeForDead(function(player) {
            self.playerDeadCallback(player);
        });
    }

    // some player is dead callback
    playerDeadCallback(playerDead) {
        if (!this.isResultKnown) {
            // write to console current players health status
            this.players.forEach(player => console.log('Name: ' + player.data.name + "Health: " + player.data.hp));

            // try to find player that is not dead
            const winnerPlayer = this.players.find(player => player.data.hp > 0);
            if (winnerPlayer) {
                this.$arena.appendChild(this.createResultTitle(winnerPlayer.data.name + ' wins!'));
            }
            // all players is dead
            else {
                this.$arena.appendChild(this.createResultTitle('Mutual death'));
            }

            // hide Fight button
            this.$arena.removeChild(this.$controlDiv);

            this.isResultKnown = true;
        }
    }

    fight() {
        this.damagePlayers();
    }

    damagePlayers() {
        this.players.forEach(player => player.makeDamage(this.getRandomDamage()));
    }

    getRandomDamage() {
        return Math.ceil(Math.random() * 50);
    }

    // visual
    createResultTitle(titleText){
        const $loseTitle = createElement('div', 'resultTitle');
        $loseTitle.innerText = titleText;

        return $loseTitle;
    }
}

// create players
const playerScorpion = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['weapon1', 'weapon2'],
    attack: function() {
        console.log(this.name + ' - fight!');
    }
}

const playerSubzero = {
    name: 'Subzero',
    hp: 100,
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