import * as React from 'react'
import Footer from './Footer';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends React.Component {
  public render() {
    return <div>
      <AddTodo />
      <Footer />
      <VisibleTodoList />
    </div>
  }
}
export default App