import * as React from 'react';
import { Input, List } from 'antd';
interface Isstate {
    dataList: string[];
}
class TodoList extends React.Component<{}> {
   
    public state: Isstate = {
        dataList: [],
    }
    private onInput = e => {
        const { dataList } = JSON.parse(JSON.stringify(this.state));
        const eTarget = e.target;
        const dataItem = eTarget.keycode === 13 && {title: eTarget.value};

        dataItem && dataList.push(dataItem);
        this.setState({ dataList });
    }
    render() {
        
        return (
            <div>
                <Input onChange={this.onInput} />
                <List dataSource={this.state.dataList} />
            </div>
        )
    }
}
export default TodoList;