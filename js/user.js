export const activeLeveLs = {
    HIGH: "advanced",
    MEDIUM: "intermediate",
    LOW: "beginner"
}
export class User {
    constructor() {
        this.activeness = -1;
        this.daysPerWeek = -1;
        this.goal = "";
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

    setGoal(goal){
        this.goal = goal;
    }
}