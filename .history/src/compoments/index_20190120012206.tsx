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
                <input onKeyDown={this.onInput} />
                {this.state.dataList.map((item,index) => {
                    return <div key={index}>{item}</div>
                })}
            </div>
        )
    }
    private onInput = (e: any) => {
        const { dataList } = JSON.parse(JSON.stringify(this.state));
        
        console.log(e.target.onkeydown);
        // const dataItem = e.keycode === 13 && e.target.value;

        // dataItem && dataList.push(dataItem);
        this.setState({ dataList });
    }
}
export default TodoList;