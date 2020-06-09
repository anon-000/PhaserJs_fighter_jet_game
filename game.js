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
function preload(){

    this.load.image('jet','assets/playerShip.png');
    this.load.image('laser','assets/laserBlue.png');
    this.load.image('fire','assets/fire.png');
    this.load.image('meteorB2','assets/meteorB2.png');
    this.load.image('meteorG2','assets/meteorG2.png');
    this.load.image('meteorB1','assets/meteorB1.png');
    this.load.image('meteorG1','assets/meteorG1.png');
}

function create(){
    let w=game.config.width;
    let h=game.config.height;
    this.keys = this.input.keyboard.createCursorKeys();

    this.spaceShip = this.add.container(w/2, h/2+200);
    this.jet = this.add.sprite(0, 0 ,'jet');
    this.laser = this.add.sprite(0, -100 ,'laser');
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
    moveSpaceShip(this.spaceShip, this.keys);
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


    function moveSpaceShip(ship, keys){
     
        if(keys.up.isDown){
            ship.y -= 5;
        }else if(keys.down.isDown){
            ship.y += 5;
        }else if(keys.right.isDown){
            ship.x += 5;
        }else if(keys.left.isDown){
            ship.x -= 5;
        }

    }





// function fire(){



// }

