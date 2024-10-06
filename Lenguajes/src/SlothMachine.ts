class SlothMachine  {
    money: number;
    constructor(){
        this.money = 0;
    }

    incrementMoney(){
        this.money = this.money + 1;
    }

    resetMoney(){
        this.money = 0;
    }

    play() {
        this.incrementMoney();
        const roulette1 = getRandomBoolean();
        const roulette2 = getRandomBoolean();
        const roulette3 = getRandomBoolean();
        if(roulette1 && roulette2 && roulette3){
            console.log(`Congratulations!!!. You won ${this.money} coins!!`);
            this.resetMoney();
        }else{
            console.log(`Good luck next time!!`);
        }
    }
    
};

function getRandomBoolean(): boolean {
    return Math.random() < 0.7;
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
