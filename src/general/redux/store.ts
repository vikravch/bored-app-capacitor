import {configureStore} from '@reduxjs/toolkit'
import activity from '../../features/activity/presentation/redux/activitySlice'
import {AppStore} from "./types";

export const store = configureStore<AppStore>({
    reducer: {activity}
});

export type AppDispatch = typeof store.dispatch;