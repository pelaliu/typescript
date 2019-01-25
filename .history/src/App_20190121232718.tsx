import * as React from 'react';
import './App.css';
import { createStore } from 'redux';
import TodoList from './compoments';
import todofunc from './redux';

const store = createStore(todofunc);
class App extends React.Component {
  public render() {
    return (
      <TodoList
        value={store.getState()}
        DeleteItem={() => store.dispatch({ type: 'DELETE' })}
      />
    );
  }
}
store.subscribe(render);

export default App;
