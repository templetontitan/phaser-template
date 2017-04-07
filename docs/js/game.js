var HEIGHT = 400;
var WIDTH = 400;

var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'phaser-template', {
  preload: preload, 
  create: create, 
  update: update}
  );

function preload() {
	game.load.image('background', 'assets/images/sky.png');
	game.load.image('bubble-img', 'assets/images/bubble.png');
}
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	background = game.add.sprite(0, 0, 'background');
	background.scale.setTo(4,4);
	
	bubble = game.add.sprite(WIDTH / 2, 0, 'bubble-img');
	bubble.scale.setTo(0.3, 0.3);
	
	game.physics.enable(bubble, Phaser.Physics.ARCADE);
	bubble.body.gravity.y = 200;
	bubble.body.collideWorldBounds = true;
	bubble.body.bounce.set(1);
	
	bubble.body.velocity.setTo(200,200);
}
function update() {
}
