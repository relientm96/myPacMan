export class Pacman extends Phaser.GameObjects.Sprite {

    //  Direction consts
    UP = 0;
    DOWN = 1;
    LEFT = 2;
    RIGHT = 3;

    constructor(){
        super(scene,x,y, "pacman");
    }

}