var Player1;
var player2
var playerVelocity = 200;


function CreatePlayers() {
    Player1 = create_paddle(0, game.world.centerY);
    player2 = create_paddle(game.world.width - 16, game.world.centerY);
}


function create_paddle(x, y) {
    var paddle = game.add.sprite(x, y, 'paddle');
    paddle.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(paddle);
    paddle.body.collideWorldBounds = true;
    paddle.body.immovable = true;
    return paddle;
}


function UpdatePlayers() {
    tickPlayer1();
    tickPlayer2();
}

function tickPlayer1() {
    if (cursors.up.isDown) {
        Player1.body.velocity.y = -playerVelocity;
    } else if (cursors.down.isDown) {
        Player1.body.velocity.y = playerVelocity;
    } else {
        Player1.body.velocity.y = 0;
    }


    //    control_paddle(player1, game.input.y);
}

function tickPlayer2() {

    if (player2Up.isDown) {
        player2.body.velocity.y = -playerVelocity;
    } else if (player2Down.isDown){
        player2.body.velocity.y = playerVelocity;
    } else {
        player2.body.velocity.y = 0;
    }
}