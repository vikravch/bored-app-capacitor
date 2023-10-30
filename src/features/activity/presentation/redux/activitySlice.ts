import { createSlice } from "@reduxjs/toolkit";
import {emptyActivity} from "../../data/fake/fakes";
import {getEducationActivity, getRandomActivity} from "./asyncActions";

const activitySlice = createSlice(
    {
        name: 'activity',
        initialState: {
            randomActivity: emptyActivity,
            error: '',
        },
        reducers: {},
        extraReducers: (builder) =>{
            builder.addCase(
                (getEducationActivity.pending, getRandomActivity.pending),
            (state)=>{
                state.randomActivity = emptyActivity;
                state.error = '';
            })
            .addCase((getRandomActivity.rejected, getEducationActivity.rejected),
            (state, action)=>{
                state.error = action.error.message as string;
            })
            .addCase((getRandomActivity.fulfilled, getEducationActivity.fulfilled),
            (state, action)=>{
                state.randomActivity = action.payload;
            })
        }
    }
);

export default activitySlice.reducer;