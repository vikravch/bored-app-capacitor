import { createAsyncThunk } from "@reduxjs/toolkit";
import {activityRepository} from "../../../../general/RepositoryCreator";
import Activity from "../../domain/model/Activity";

export const getRandomActivity = createAsyncThunk(
    'activity/getRandom', (): Promise<Activity> =>{
        return activityRepository.getRandomActivity()
    }
)
export const getEducationActivity = createAsyncThunk(
    'activity/getRandom', (): Promise<Activity> =>{
        return activityRepository.getActivityFromCategory('education')
    }
)