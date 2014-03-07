MainGame.Level = function(game) {
    this.game = game;
    this.arrowSprite = null;
    this.ballSprite = null;
    this.currentBall = null;
    this.ballGroup = null;
    this.isQueued = false;
    
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
    },
    
    create: function() {
        this.ballGroup = this.game.add.group();
        this.arrowSprite = this.game.add.sprite(this.game.world.centerX,585,'sprites','arrow');
        this.addBall();

        this.arrowSprite.pivot.x = 135;
        this.arrowSprite.pivot.y = 15;
        this.arrowSprite.rotation = 1.57;
    },

    addBall: function(){
        if(!this.isQueued){
            this.isQueued = true;
            var ballSprite = this.ballGroup.create(this.game.world.centerX,585,'sprites','red_ball');
            ballSprite.hanging = false;
            console.log(ballSprite.y);

            ballSprite.anchor.setTo(0.5,0.5);
            ballSprite.body.collideWorldBounds = true;
            ballSprite.body.bounce.setTo(1,1);
            this.currentBall = ballSprite;
            console.log(this.currentBall.y);
        }
    },
    
    update: function(){
        this.arrowSprite.body.angularVelocity = 0;
        this.game.physics.collide(this.ballGroup, this.ballGroup, this.ballCollide, null, this);

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
                this.arrowSprite.body.angularVelocity = -150;
                this.xVel -= 10;
        }else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            if(this.arrowSprite.rotation < 3.1){
                this.arrowSprite.body.angularVelocity = 150;
                this.xVel += 10;
            }
        }else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            this.isQueued = false;
            this.game.physics.velocityFromAngle(-180 + this.arrowSprite.angle, 500, this.currentBall.body.velocity);
        }

        if(this.currentBall.y <= 16){
            this.currentBall.body.velocity = 0;
            this.currentBall.hanging = true;

            if(!this.isQueued){
                this.addBall();
            }
        }
    },

    render: function() {

        this.game.debug.renderSpriteInfo(this.arrowSprite, 32, 32);
        this.game.debug.renderSpriteInfo(this.ballSprite, 32, 32);
        this.game.debug.renderText('rotation: ' + this.arrowSprite.rotation, 32, 200);

    },

    ballCollide: function(ball1, ball2){
        if(ball1.hanging || ball2.hanging){
            ball1.body.velocity = 0;
            ball2.body.velocity = 0;
            ball1.hanging = true;
            ball2.hanging = true;
        }

        if(!this.isQueued){
            this.addBall();
        }
    }

}

