MainGame.MainMenu = function (game) {
    this.game = game;
};

MainGame.MainMenu.prototype = {
    create: function(){
        //var bg = this.game.add.sprite(0,0,'mainbg');
        
        //listen for a mouse click
        this.game.input.onDown.add(this.beginGame, this);
        //listen for a key pressed down      context,onDown function
        this.game.input.keyboard.addCallbacks(this,this.beginGame);
    },
    
    beginGame: function(){
        //go to the game
        this.game.state.start('level');

        //clear out the onDown callback or else it will keep trying to load the game
        //every time you press a key
        this.game.input.keyboard.onDownCallback = null;
    }
}
