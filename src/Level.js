MainGame.Level = function(game) {
    this.game = game;
    this.arrowSprite = null;
    this.goalSprite = null;
    this.map = null;
    this.tileset = null;
    this.layer = null;
    this.cursors = null;
    this.tileWidth = 60;
    this.tileHeight = 60;
    this.tilesWide = 10;
    this.tilesHigh = 12;
    this.music = null;
    this.background = null;
    this.leftButton = null;
    this.rightButton = null;
    this.jumpButton = null;
    this.walkFrames = null;
    this.playerAnimFrames = 15;
};

MainGame.Level.prototype = {
    preload: function(){
        //this.game.load.tilemap("platforms", "/assets/tilemaps/level1.json", null, Phaser.Tilemap.TILED_JSON);
        //this.game.load.image("land", "/assets/tilemaps/tiles_spritesheet.png");
        //, this.tileWidth, this.tileHeight,144,0,1
        //this.game.load.image('coin', '/assets/sprites/coinGold.png');
        //game.load.audio('music', ['/resources/L1Audio.mp3']);
        //this.game.load.image('L1BG', '/assets/img/level1bg.png');
        //this.game.load.image('speech', '/assets/sprites/speech_bubble.png');
        //this.game.load.atlas("enemies", "/resources/enemies.png",
        //"/resources/enemies.json", null, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    },
    
    create: function() {
        this.arrowSprite = this.game.add.sprite(60,60,'sprites','arrow');
    },
    
    update: function(){
    }

}


