import * as React from 'react';
// import { Input, List } from 'antd';
interface Isstate {
    dataList: string[];
}
class TodoList extends React.Component {
    
    public state: Isstate = {
        dataList: [],
    }
     onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { dataList } = JSON.parse(JSON.stringify(this.state));
        debugger
        const dataItem = e.target.keycode === 13 && {title: e.target.value};

        dataItem && dataList.push(dataItem);
        this.setState({ dataList });
    }
    render() {
        
        return (
            <div>
                <input onChange={this.onInput} />
                
            </div>
        )
    }
}
export default TodoList;