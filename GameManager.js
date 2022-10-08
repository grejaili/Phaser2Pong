let score1;
let score2;
let VictoryPoints = 7;
let gameStarted = false;
let ballLauncherTimer = 4;


function InitializeVariables() {
    score1 = 0;
    score2 = 0;
    SetupGameInputs();
    CreatePlayers();
    CreateUI();
    create_ball(game.world.centerX, game.world.centerY);
}


function ResetGame()
{
    score1 = 0;
    score2 = 0;
    gameStarted = false;
    winnerText.visible = false;
    startGameUI.visible = true;
    ScoreTextUpdate(score2Txt, score2);
    ScoreTextUpdate(score1Txt, score1);
}

function StartGame() {
    if (spaceKey.isDown && gameStarted === false) {
        gameStarted = true;
        LaunchBall();
        startGameUI.visible = false;
    }
}

function SetupGameInputs() {
    cursors = game.input.keyboard.createCursorKeys();
    player2Up = game.input.keyboard.addKey(Phaser.Keyboard.W);
    player2Down = game.input.keyboard.addKey(Phaser.Keyboard.S);
    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function CheckCollisions() {
    game.physics.arcade.collide(Player1, ball);
    game.physics.arcade.collide(player2, ball);
    CheckScored();
}

function CheckScored() {
    if (ball.body.blocked.left) {
        score2++;
        BallReset();
        ScoreTextUpdate(score2Txt, score2);
        CheckWin();
        return;
    }
    if (ball.body.blocked.right) {
        score1++;
        BallReset();
        ScoreTextUpdate(score1Txt, score1);
        CheckWin();
    }
}

function CheckWin() {
    if (score1 === VictoryPoints) {
        WinnerTextActive("Player 1 wins");

        return;
    }
    if (score2 === VictoryPoints) {
        WinnerTextActive("Player 2 wins");
        return
    }

    game.time.events.add(Phaser.Timer.SECOND * ballLauncherTimer, LaunchBall, this);
}