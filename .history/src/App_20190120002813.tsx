import * as React from 'react';
import './App.css';
import TodoList from './compoments/index';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
