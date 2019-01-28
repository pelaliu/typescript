import * as React from 'react'
import Todo from './Todo'
interface ITodos {
  id: number;
  completed: boolean;
  text: string;
}
interface IProps {
  todos: ITodos[];
  onTodoClick: (id: number, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
class TodoList extends React.Component {
  public props: IProps;
  public render() {
    const { todos, onTodoClick } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick.bind(this, todo.id)} />
        ))}
      </ul>
    )
  }
}
export default TodoList;