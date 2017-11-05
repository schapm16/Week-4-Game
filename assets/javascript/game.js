
var game = { 
    crystalValues: [],
    target: 0,
    guessSum: 0,
    numGuess: 0,
    numWins: 0,
    numLoss: 0,
    
    setUp: function() {
        this.guessSum = 0;
        
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random()*(13 - 1) + 1);
            
            if (this.crystalValues.includes(num)) {
                i--;
            } else {
                this.crystalValues[i] = num;
            }
        }
        
        this.target = Math.floor(Math.random()*(121-19) + 19);
        $("#sumText").text(this.guessSum);
        $("#targetText").text(this.target);
        $("#numWins").html("Wins: " + this.numWins);
        $("#numLoss").html("Losses: " + this.numLoss);
    },
    
    guessAdder: function(a) {
        game.guessSum += a;
        $("#sumText").text(game.guessSum);
        
        game.compare();
    },
    
    compare: function() {
        if (this.guessSum === this.target) {
            this.numWins++;
            this.setUp();
        } else if (this.guessSum > this.target) {
            this.numLoss++;
            this.setUp();
        }
    }
    
};
    



$("document").ready( function() {
    
    game.setUp();
    
    $("#crystalOne").click(function() {
        game.guessAdder(game.crystalValues[0]);
    });
    
    $("#crystalTwo").click(function() {
        game.guessAdder(game.crystalValues[1]);
    });
    
    $("#crystalThree").click(function() {
        game.guessAdder(game.crystalValues[2]);
    });
    
    $("#crystalFour").click(function() {
        game.guessAdder(game.crystalValues[3]);
    });
    
    
});