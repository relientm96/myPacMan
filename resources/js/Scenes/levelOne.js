//Movement
const LEFT = 0;
const RIGHT = 1;

//Scene Variables
const gameLeftBound = window.innerWidth/2 - 370; 
const gameRightBound = window.innerWidth/2 + 370;

//Pacman Vars
let xspeed = 3;
let direction = RIGHT;

class levelOne extends Phaser.Scene {

    constructor(){
        super({key: "levelOne"});
    }

    preload() {
        //Loading Sky Background 
        this.load.image('sky', 'assets/sky.png');

        //Loading Tiles
        this.load.spritesheet({
            key: 'tiles', 
            url: './assets/tiles.png', 
            frameConfig: {
                frameWidth:  70, 
                frameHeight: 70,
            }
        });

        //Loading PACMAN
        this.load.spritesheet({
            key: 'pacman',
            url: 'assets/Pac-man.png',
            frameConfig: {
                frameWidth:  36,
                frameHeight: 36,
            }
        });
        
      }
      
    create() {
        
        this.add.image(window.innerWidth/2, window.innerHeight/2, 'sky');
        //this.tile = this.add.sprite(config.width/2, config.height - 70,'tiles',2);

        let tileMap = this.physics.add.staticGroup();
        
        //Creating Ground
        tileMap.create(config.width/2, config.height - 48, 'tiles',2);
        tileMap.create(config.width/2 + 70, config.height - 48, 'tiles', 2);
        tileMap.create(config.width/2 + 70*2, config.height - 48, 'tiles', 2);
        tileMap.create(config.width/2 + 70*3, config.height - 48, 'tiles', 2);
        tileMap.create(config.width/2 + 70*4, config.height - 48, 'tiles', 2);
        tileMap.create(config.width/2 + 70*5, config.height - 48, 'tiles',2);

        tileMap.create(config.width/2 - 70, config.height - 48, 'tiles',2);
        tileMap.create(config.width/2 - 70*2, config.height - 48, 'tiles',2);
        tileMap.create(config.width/2 - 70*3, config.height - 48, 'tiles',2);
        tileMap.create(config.width/2 - 70*4, config.height - 48, 'tiles',2);
        tileMap.create(config.width/2 - 70*5, config.height - 48, 'tiles',2);

        //Animation for Pacman
        this.pacman = this.add.sprite(window.innerWidth/2, config.height - 48 - 50,'pacman',0);
        var frameNames = this.anims.generateFrameNames('pacman', {
            start: 0, end: 24
        });
        this.anims.create({ 
            key: 'eating', 
            frames: frameNames, 
            frameRate: 12, 
            repeat: -1 });
        this.pacman.anims.play('eating');
        this.pacman.setScale(3.5);

        //Handling Keyboard Input
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        //this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        //this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }
    
    update() {
        if( (this.key_A.isDown) && (direction == RIGHT) ){
            xspeed *= -1;
            this.pacman.scaleX *= -1;
            direction = LEFT;              
        }
        if( (this.key_D.isDown) && (direction == LEFT) ){
            xspeed *= -1;
            this.pacman.scaleX *= -1;
            direction = RIGHT;              
        }
        if ( (this.pacman.x > gameRightBound)||(this.pacman.x  < gameLeftBound) ) {
            xspeed *= -1;
            this.pacman.scaleX *= -1;
        };
        if (direction = LEFT){
            xspeed *= -1;
        }   
        else {
            xspeed *= 1;
        }
        this.pacman.x += xspeed;
    }
}


