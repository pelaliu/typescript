import * as React from 'react';
import { Input, List } from 'antd';
interface Isstate {
    dataList: string[];
}
class TodoList extends React.Component<{}> {
   
    public state: Isstate = {
        dataList: [],
    }
    private onInput(e: Event) {
        const { dataList } = JSON.parse(JSON.stringify(this.state));
        // const eTarget = e.target;
        const dataItem = e.target.keycode === 13 && {title: e.target.value};

        dataItem && dataList.push(dataItem);
        this.setState({ dataList });
    }
    render() {
        
        return (
            <div>
                <Input onChange={this.onInput.bind(this)} />
                <List dataSource={this.state.dataList} />
            </div>
        )
    }
}
export default TodoList;