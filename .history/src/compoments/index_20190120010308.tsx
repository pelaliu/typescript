import * as React from 'react';
// import { Input, List } from 'antd';
interface Isstate {
    dataList: string[];
}
class TodoList extends React.Component {
    
    public state: Isstate = {
        dataList: [],
    }
    
    public render() {
        
        return (
            <div>
                <input onChange={this.onInput} />
                {this.state.dataList.map((item,index) => {
                    return <div key={index}>{item}</div>
                })}
            </div>
        )
    }
    private onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { dataList } = JSON.parse(JSON.stringify(this.state));
        
        const dataItem = e.keycode === 13 && e.target.value;

        dataItem && dataList.push(dataItem);
        this.setState({ dataList });
    }
}
export default TodoList;