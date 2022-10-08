var ball;
var ball_velocity;

function create_ball(x, y) {
    ball_velocity = 400;
    ball = game.add.sprite(x, y, 'ball');
    ball.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(ball);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.setTo(1, 1);
}

function LaunchBall() {
    let randomNumber = Phaser.Math.random(-1, 1);
    if(randomNumber > 0)
        randomNumber= 1;
    else
        randomNumber = -1;

    ball.body.velocity.x = ball_velocity * randomNumber;
    ball.body.velocity.y = ball_velocity * randomNumber;
}

function BallReset() {
    ball.x = game.world.centerX;
    ball.y = game.world.centerY;
    ball.body.velocity.setTo(0, 0);

}