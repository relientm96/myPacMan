var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: {
        mode: Phaser.Scale.FIT,
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  
var game = new Phaser.Game(config);

function preload() {
    this.load.image('pacman', 'assets/pacman.png');
}

function create() {
    this.add.image(window.innerWidth/2, window.innerHeight/2, 'pacman');
}

function update() {

}