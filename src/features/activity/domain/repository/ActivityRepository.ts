import Activity, {ActivityCategory} from "../model/Activity";

export default interface ActivityRepository{
    getRandomActivity: ()=> Promise<Activity>;
    getActivityFromCategory: (category: ActivityCategory)=> Promise<Activity>;
}