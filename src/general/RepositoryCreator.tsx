import {useEffect} from "react";
import ActivityNetworkRepository from "../features/activity/data/repository/ActivityNetworkRepository";
import ActivityRepository from "../features/activity/domain/repository/ActivityRepository";

export let activityRepository: ActivityRepository;

const RepositoryCreator = ()=>{
    useEffect(()=>{
        activityRepository = new ActivityNetworkRepository();
    },[]);

    return null;
}
export default RepositoryCreator;