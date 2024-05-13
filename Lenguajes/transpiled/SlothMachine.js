var SlothMachine = /** @class */ (function () {
    function SlothMachine() {
        this.money = 0;
    }
    SlothMachine.prototype.incrementMoney = function () {
        this.money = this.money + 1;
    };
    SlothMachine.prototype.resetMoney = function () {
        this.money = 0;
    };
    SlothMachine.prototype.play = function () {
        this.incrementMoney();
        var roulette1 = getRandomBoolean();
        var roulette2 = getRandomBoolean();
        var roulette3 = getRandomBoolean();
        if (roulette1 && roulette2 && roulette3) {
            console.log("Congratulations!!!. You won ".concat(this.money, " coins!!"));
            this.resetMoney();
        }
        else {
            console.log("Good luck next time!!");
        }
    };
    return SlothMachine;
}());
;
function getRandomBoolean() {
    return Math.random() < 0.7;
}
var machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
