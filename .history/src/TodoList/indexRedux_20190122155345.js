
const taskListData = {
	loading: true,
	error: false,
	taskList: []
};

//不同的action;
const ADD_TASK = 'ADD_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

function todoListReducer (state = taskListData, action) {
	switch(action.type) {

		case UPDATE_TASK: {
			const index = state.taskList.indexOf(
				state.taskList.find(task => 
					task.id === action.payload.id));
			console.log(index);
			state.taskList[index].status = !state.taskList[index].status;
			return {
				...state,
				taskList: state.taskList,
			};
		}

		case DELETE_TASK: {
			const index = state.taskList.indexOf(
				state.taskList.find(task => 
					task.id === action.payload.id));
			state.taskList.splice(index, 1);
			return {
				...state,
				taskList: state.taskList,
			};
		}

		case ADD_TASK: {
			let len = state.taskList.length;
			let index = len > 0 ? len - 1 : 0;
			let lastTaskId = index !== 0 ? state.taskList[index].id : 0; 
			state.taskList.push({
				id: lastTaskId + 1,
				name: action.payload.name,
				status: false,
			});
			return {
				...state,
				taskList: state.taskList,
			}
		} 

		default: {
			return state;
		}
	}
}

export default todoListReducer;

