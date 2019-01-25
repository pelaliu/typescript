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
        dataList={store.getState().dataList}
        checkoutAll={() => store.dispatch({ type: 'ALL' })}
        checkoutActived={() => store.dispatch({ type: 'ACTIVED' })}
        checkoutUnActived={() => store.dispatch({ type: 'UNACTIVED' })}
      />
    );
  }
}
store.subscribe(render);

export default App;
