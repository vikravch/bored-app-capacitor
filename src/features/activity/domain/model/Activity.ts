export default class Activity{
    activity: string;
    type: ActivityCategory;
    price: number;

    constructor(activity: string, type: ActivityCategory, price: number) {
        this.activity = activity;
        this.type = type;
        this.price = price;
    }
}
export type ActivityCategory = "education"|"recreational"|"social"|
    "diy"|"charity"|
    "cooking"|"relaxation"|"music"|"busywork";