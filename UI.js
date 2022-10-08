let score1Txt;
let score2Txt
let winnerText;

let startGameUI;

function CreateUI()
{
    score1Txt = game.add.text(128,128,score1,{
        font:"64px Gabriella",
        fill: "#ffffff",
        align: "center"
    });

    score2Txt = game.add.text(game.world.width-128,128,score2,{
        font:"64px Gabriella",
        fill: "#ffffff",
        align: "center"
    });

    winnerText = game.add.text(game.world.width/2 - 128,game.world.height/2,"Victory Player",{
        font:"64px Gabriella",
        fill: "#ffffff",
        align: "center"
    });

    startGameUI = game.add.text(game.world.width/2 - 128,game.world.height/2,"Press Bar to Start",{
        font:"64px Gabriella",
        fill: "#ffffff",
        align: "center"
    });


    winnerText.visible = false;
}


function WinnerTextActive(newText)
{
    winnerText.visible = true;
    winnerText.text = newText;
    game.time.events.add(Phaser.Timer.SECOND * 3, ResetGame, this);
}


function ScoreTextUpdate(UIText,newScore)
{
    UIText.text = newScore;
}