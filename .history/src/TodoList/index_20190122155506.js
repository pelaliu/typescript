import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../../component/List';
import { loadTaskList } from '../../component/List/indexRedux';
import { updateTask, deleteTask } from '../../component/ListItem/indexRedux';
import { addTask } from '../../component/SubmitDialog/indexRedux';

class TodoList extends Component {

	render () {
		return (
			<List {...this.props} />
		);
	}
}

export default connect( state => {
	return {
		taskList: state.taskListData.taskList,
	};
}, dispatch => {
	return {
		deleteTask: bindActionCreators(deleteTask, dispatch),
		addTask: bindActionCreators(addTask, dispatch),
	};
})(TodoList);