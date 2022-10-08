var player1;
var player2
var playerVelocity = 100;


function CreatePlayers() {
    player1 = create_paddle(0, game.world.centerY);
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

function control_paddle(paddle, y) {

    paddle.y = y;
    // if(cursors.up.isDown)
    // {
    //     paddle.body.velocity.y += 100;
    // }
    if (paddle.y < paddle.height / 2) {
        paddle.y = paddle.height / 2;
    } else if (paddle.y > game.world.height - paddle.height / 2) {
        paddle.y = game.world.height - paddle.height / 2;
    }
}

function UpdatePlayers() {
    tickPlayer(player1);
    tickPlayer()
}

function tickPlayer(player) {
    if (cursors.up.isDown)
    {
        player.body.velocity.y = -playerVelocity;
    } else if (cursors.down.isDown)
    {
        player.body.velocity.y = -playerVelocity;
    } else {
        player.body.velocity = 0;
    }


    //    control_paddle(player1, game.input.y);
}

function tickPlayer2() {

    //control_paddle(player2,game.input.y);
}