import ActivityRepository from "../../domain/repository/ActivityRepository";
import Activity, {ActivityCategory} from "../../domain/model/Activity";
import * as Api from "../remote/api";

export default class ActivityNetworkRepository implements ActivityRepository{
    async getActivityFromCategory(category: ActivityCategory): Promise<Activity> {
        try{
            const res: Activity =
                await Api.getActivityFromCategory(category) as Activity;
            if(res.activity && res.type){
                return Promise.resolve(res);
            } else {
                return Promise.reject('Empty response');
            }
        } catch (e) {
            return Promise.reject(e)
        }
    }

    async getRandomActivity(): Promise<Activity> {
        try{
            const res: Activity = await Api.getActivity() as Activity;
            if(res.activity && res.type){
                return Promise.resolve(res);
            } else {
                return Promise.reject('Empty response');
            }
        } catch (e) {
            return Promise.reject(e)
        }
    }
}