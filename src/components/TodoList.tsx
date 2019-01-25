import * as React from 'react'
import Todo from './Todo'

const TodoList = ({ todos = [], onTodoClick }: {todos: any, onTodoClick: any}) => (
  <ul>
    {todos.map((todo: any) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)
// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default TodoList;