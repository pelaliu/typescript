import { combineReducers } from 'redux';
import todoListReducer from '../views/TodoList/indexRedux';

export default combineReducers({
	taskListData: todoListReducer
});
