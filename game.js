var config = {
    type: Phaser.AUTO,
    width: 1345,
    height: 640,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var laserDist = 0;
var jetX = 0;
var jetY = 0;
var meteor1;
var meteor2;
var meteor3;
var meteor4;
var spaceShip;
var jet ;
var laser;
var fire ;
var keys;
var moveSound;
var laserSound;
function preload(){

    this.load.image('jet','assets/playerShip.png');
    this.load.image('laser','assets/laserBlue.png');
    this.load.image('fire','assets/fire.png');
    this.load.image('meteorB2','assets/meteorB2.png');
    this.load.image('meteorG2','assets/meteorG2.png');
    this.load.image('meteorB1','assets/meteorB1.png');
    this.load.image('meteorG1','assets/meteorG1.png');
    this.load.audio('moveJet', ['assets/moveSprite.wav']);
    this.load.audio('laserSound', ['assets/laserGun.wav']);
}

function create(){
    let w=game.config.width;
    let h=game.config.height;
    this.keys = this.input.keyboard.createCursorKeys();

    this.spaceShip = this.add.container(w/2, h/2+200);
    this.jet = this.add.sprite(0, 0 ,'jet');
    this.laser = this.add.sprite(0, -80 ,'laser');
    this.fire = this.add.sprite(0, -50 ,'fire');
    this.meteor1 = this.add.sprite(100, 50, 'meteorB2');
    this.meteor1.setScale(0.7);
    this.meteor2 = this.add.sprite(300, 50, 'meteorG2');
    this.meteor2.setScale(0.7);
    this.meteor3 = this.add.sprite(600, 50, 'meteorB1');
    this.meteor3.setScale(0.7);
    this.meteor4 = this.add.sprite(800, 50, 'meteorG1');
    this.meteor4.setScale(0.7);
    

    this.spaceShip.add([this.jet, this.fire, this.laser]);
    this.moveSound = this.sound.add('moveJet');
    this.laserSound = this.sound.add('laserSound');
    this.laserSound.play();
    // this.input.on('pointermove', function (pointer) {

    //     x = pointer.x;
    //     y = pointer.y;

    // });


}

function update(){
    // this.meteor1.y += 1;
    moveMeteor(this.meteor1,2);
    moveMeteor(this.meteor2,3);
    moveMeteor(this.meteor3, 1);
    moveMeteor(this.meteor4, 4);
    moveSpaceShip(this.spaceShip, this.keys, this.moveSound);
    fire(this.laser, this.spaceShip.y, this.laserSound);
}


    function moveMeteor(meteor, speed){
        meteor.y += speed;
        if(meteor.y > config.height){
                resetMeteor(meteor);
        }
    }

 function resetMeteor(meteor){
        meteor.y = 0;
        var randomX = Phaser.Math.Between(10, config.width-10);
        meteor.x = randomX;
    }


    function moveSpaceShip(ship, keys, audio){
     
        if(keys.up.isDown){
            if(ship.y > 20){
                // audio.play();
                ship.y -= 5;
            }
        }else if(keys.down.isDown){
            if(ship.y < config.height-30){
                // audio.play();
                ship.y += 5;
            }   
        }else if(keys.right.isDown){
            if(ship.x < config.width-10){
                // audio.play();
                ship.x += 5;
            }
        }else if(keys.left.isDown){
            if(ship.x > 10){
                // audio.play();
                ship.x -= 5;
            } 
        }

    }

function fire(laser, value, audio){

    // laser.y -=3;
    // audio.play();

    if(laser.y == -80 || laser.y >= -80-value ){
        // if(laser.y== -80){audio.play();}
        laser.y -= 60;
    }else{
        audio.play();
        laser.y = -80;
        
    }

}

// function resetFire(laser){
//     laser.y=0;
// }

