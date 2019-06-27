var config = {
    type: Phaser.CANVAS,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: {
        mode: Phaser.Scale.FIT,
    },
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
    },
    scene: [ levelOne ],
    title: 'Pacman Recreated!',
  };
  
var game = new Phaser.Game(config);
