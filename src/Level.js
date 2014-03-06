MainGame.Level = function(game) {
    this.game = game;
    this.arrowSprite = null;
    this.ballSprite = null;
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
    this.xVel = 0;
    this.yVel = -200;
};

MainGame.Level.prototype = {
    preload: function(){
        this.game.stage.backgroundColor = '#0072bc';
        this.game.stage.scale.maxWidth = 600;
        this.game.stage.scale.maxHeight = 720;
        this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
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
        this.arrowSprite = this.game.add.sprite(this.game.world.centerX,585,'sprites','arrow');
        this.ballSprite = this.game.add.sprite(this.game.world.centerX,585,'sprites','red_ball');

        this.ballSprite.anchor.setTo(0.5,0.5);
        this.ballSprite.body.collideWorldBounds = true;
        this.ballSprite.body.bounce.setTo(1,1);

        this.arrowSprite.pivot.x = 135;
        this.arrowSprite.pivot.y = 15;
        this.arrowSprite.rotation = 1.57;
    },
    
    update: function(){
        this.arrowSprite.body.angularVelocity = 0;

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
                this.arrowSprite.body.angularVelocity = -150;
                this.xVel -= 10;
        }else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            if(this.arrowSprite.rotation < 3.1){
                this.arrowSprite.body.angularVelocity = 150;
                this.xVel += 10;
            }
        }else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            this.game.physics.velocityFromAngle(-180 + this.arrowSprite.angle, 500, this.ballSprite.body.velocity);
        }
    },

    render: function() {

        this.game.debug.renderSpriteInfo(this.arrowSprite, 32, 32);
        this.game.debug.renderSpriteInfo(this.ballSprite, 32, 32);
        this.game.debug.renderText('rotation: ' + this.arrowSprite.rotation, 32, 200);

    }  

}

