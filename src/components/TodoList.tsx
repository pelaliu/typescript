import * as React from 'react'
import Todo from './Todo'

interface IProps {
  todos: any;
  onTodoClick: any;
}
class TodoList extends React.Component {
  public props: IProps;
  public render() {
    const { todos, onTodoClick } = this.props;
    return (
      <ul>
        {todos.map((todo: any) => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </ul>
    )
  }
}
export default TodoList;