export const activeLeveLs = {
    HIGH: 3,
    MEDIUM: 2,
    LOW: 1
}
export class User {
    constructor() {
        this.activeness = -1;
        this.daysPerWeek = -1;
    }

    setHighActive(){
        this.activeness = activeLeveLs.HIGH;
    }
    setMediumActive() {
        this.activeness = activeLeveLs.MEDIUM
    }
    setLowActive() {
        this.activeness = activeLeveLs.LOW;
    }

    setDaysPerWeek(number) {
        this.daysPerWeek = number;
    }
}