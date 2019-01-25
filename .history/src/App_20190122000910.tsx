import * as React from 'react';
import './App.css';
import { createStore } from 'redux';
import TodoList from './compoments/Todolist';
import todofunc from './redux';


class App extends React.Component<any> {
  public render() {
    const store = createStore(todofunc);
    store.subscribe(this.render);
    return (
      <TodoList
        type={store.getState().type}
        checkout={ (type: string) => store.dispatch({ type })}
      />
    );  
  } 
}
export default App;
