var score1Txt;
var score2Txt


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
}

function ScoreTextUpdate(UIText,newScore)
{
    UIText.text = newScore;
}