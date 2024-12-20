import { combineReducers } from '@reduxjs/toolkit';

import postTaskSlice from './tasks/postTask';
import listTasksSlice from './tasks/listTasks';

const rootReducer = combineReducers({
    postTask: postTaskSlice.reducer,
    listTasks: listTasksSlice.reducer
});

export default rootReducer;