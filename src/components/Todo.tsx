import * as React from 'react'
interface IProps {
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  completed: boolean;
  text: string;
}
class Todo extends React.Component {
  public props: IProps;
  public render() {
    const { onClick, completed, text } = this.props;
    return (
      <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</li>
    )
  }
}
export default Todo