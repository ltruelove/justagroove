var MainGame = {};

MainGame.Preloader = function(game) {
    this.game = game;
};

MainGame.Preloader.prototype = {
    preload: function(){
        //this.game.load.spritesheet('alien', '/resources/p3_walk.png', 66, 93, 3);
        this.game.load.atlasJSONHash("sprites", "/assets/sprites/groove_sprites.png","/assets/sprites/groove_sprites.json");
    },
    create: function() {
        this.game.state.start('mainmenu');
    }
}
