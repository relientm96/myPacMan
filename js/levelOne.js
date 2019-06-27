class levelOne extends Phaser.Scene {

    constructor(){
        super({key: "levelOne"});
    }

    preload() {
        //Loading Sky Background 
        this.load.image('sky', 'assets/sky.png');

        //Loading PACMAN
        this.load.spritesheet({
            key: 'pacman',
            url: 'assets/Pac-man.png',
            frameConfig: {
                frameWidth: 36,
                frameHeight:36,
            }
        });
      }
      
    create() {

        this.add.image(window.innerWidth/2, window.innerHeight/2, 'sky');
        this.pacman = this.add.sprite(window.innerWidth/2, window.innerHeight/2,'pacman',0);
        
        var frameNames = this.anims.generateFrameNames('pacman', {
            start: 0, end: 24
        });
        this.anims.create({ key: 'move', frames: frameNames, frameRate: 12, repeat: -1 });
        this.pacman.anims.play('move');
        this.pacman.setScale(4);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }
    
    update() {

        const step = 5;

        if(this.key_A.isDown){
            this.pacman.x -= step;
        };
        if(this.key_W.isDown){
            this.pacman.y -= step;
        };
        if(this.key_S.isDown){
            this.pacman.y += step;
        };
        if(this.key_D.isDown){
            this.pacman.x += step;
        }
    
    }
    
}