class mainScene {
   
preload()  {
    //loading images
    
    //Sprite sheet
this.load.spritesheet('char', 'assets/spritesheet.png', { frameWidth: 32, frameHeight: 50 });
this.load.spritesheet('chal', 'assets/spritesheet2.png', { frameWidth: 32, frameHeight: 50 });
    //tilemap
this.load.tilemapTiledJSON('map', 'Assets/p1.json');
this.load.image('tiles1', 'Assets/tileset.png');
    }
    
    
    
create()   {
    //Add in sprite  
sprite = this.add.sprite(400, 300, 'char').setScale(2);
    //map
   
    //Keyboard control    
this.arrow = this.input.keyboard.createCursorKeys();
    //Camera configuration    
this.cameras.main.setBounds(0,0, 1920, 100);
this.cameras.main.startFollow(sprite, true, 0.05, 0.05);
        
    //Animation configuration    
this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('char', { start: 0, end: 5 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [ { key: 'char', frame: 6 } ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('char', { start: 7, end: 13 }),
    frameRate: 10,
    repeat: -1
});
this.anims.create({
    key: 'up',
    frames: this.anims.generateFrameNumbers('chal', { start: 0, end: 5 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'down',
    frames: this.anims.generateFrameNumbers('chal', { start: 6, end: 12 }),
    frameRate: 10,
    repeat: -1
});
}
    
    
update()   {    
//movements       
   
if (this.arrow.left.isDown)
{
    sprite.x -= 2.5;

    sprite.anims.play('left', true);
}
else if (this.arrow.right.isDown)
{
   sprite.x += 2.5;

    sprite.anims.play('right', true);
}
else if (this.arrow.up.isDown)
{
    sprite.y -= 2.5;

    sprite.anims.play('up', true);
}
else if (this.arrow.down.isDown)
{
   sprite.y += 2.5;

    sprite.anims.play('down', true);
}
else
{
    sprite.anims.play('turn');
}
        
 
        
        
}
}
var sprite;
var anim;

new Phaser.Game({
   width: window.innerWidth, // Width of the game in pixels
  height: window.innerHeight, // Height of the game in pixels
    pixelArt: true,
  backgroundColor: '#3498db', // The background color (blue)
  scene: mainScene, // The name of the scene we created
physics: { default: 'arcade' }, // The physics engine to use
  parent: 'game', // Create the game inside the <div id="game"> 
});