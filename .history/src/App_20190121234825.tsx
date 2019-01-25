import * as React from 'react';
import './App.css';
import { createStore } from 'redux';
import TodoList from './compoments/Todolist';
import todofunc from './redux';

const store = createStore(todofunc);
class App extends React.Component {
  public render() {
    return (
      <TodoList
        type={store.getState().type}
        checkout={ (types: string) => store.dispatch({ type: types })}
      />
    );
  }
}
store.subscribe(render);

export default App;
